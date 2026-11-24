import * as THREE from 'three';
import { ProceduralSky } from './ProceduralSky.js';
import { DESERT_PALETTE, SHARED_GRADE_UNIFORMS } from './Palette.js';
import { IS_MOBILE } from './Settings.js';

/**
 * Thermal-Optimized Procedural Sky + Lighting + TRUE Throttled Shadows (v4.1):
 * - FIXED critical thermal bug: `_applyAtmosphere` NO LONGER triggers `shadowMap.needsUpdate = true` every frame!
 * - Shadow map only re-renders when player moves >1.2m (mobile) / >0.6m (desktop) or sun shifts >0.5°, capped to ~3.5Hz on mobile!
 * - ZERO per-frame `new THREE.Color()` heap allocations (eliminates V8 GC CPU heat).
 * - Hides `#sun-glare-layer` with `display: none` when inactive and caches all DOM writes.
 */
export class SkyLightingSystem {
  constructor(scene, renderer, settings) {
    this.scene = scene;
    this.renderer = renderer;
    this.settings = settings;

    this.timeOfDay = 0.0;
    this.targetTimeOfDay = 0.0;
    this.stormIntensity = 0.0;
    this.sunDirection = new THREE.Vector3(0.2, 0.9, -0.35).normalize();
    this.glareAmount = 0;
    this.targetExposure = DESERT_PALETTE.exposureNoon;
    this.currentExposure = DESERT_PALETTE.exposureNoon;
    this.cutsceneGlareBoost = 0;

    // Pre-allocated scratch vectors & colors (ZERO per-frame allocations!)
    this._tmpVec = new THREE.Vector3();
    this._camDir = new THREE.Vector3();
    this._tmpCol = new THREE.Color();
    this._sandBounceNoon = new THREE.Color('#e6bd88');
    this._sandBounceAsr = new THREE.Color('#d88848');
    this._intBounceNoon = new THREE.Color('#f4d4a8');
    this._intBounceAsr = new THREE.Color('#f6aa5c');

    this._lastShadowFocus = new THREE.Vector3(9999, 9999, 9999);
    this._lastShadowSun = new THREE.Vector3();
    this._shadowCooldown = 0;
    this._forceShadowUpdate = true;
    this._shadowFrustumHalf = 22;
    this.shadowUpdatesCount = 0;

    // Cached DOM state so we never trigger redundant Chromium style recalcs
    this._lastGlareVisible = false;
    this._lastGlareOp = '';
    this._lastGlareX = -999;
    this._lastGlareY = -999;
    this._lastGlareG = -1;
    this._lastHazeOp = '';
    this._lastAtmosTime = -999;
    this._lastAtmosStorm = -999;

    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;

    this.proceduralSky = new ProceduralSky(this.scene, this.renderer);
    this._createLights();
    this._createFog();

    this.glareEl = document.getElementById('sun-glare-layer');
    this.heatHazeEl = document.getElementById('heat-haze-layer');
    if (this.glareEl) this.glareEl.classList.add('hidden');

    this.setTimeOfDay(0.0, true);
  }

  _createLights() {
    this.sunLight = new THREE.DirectionalLight(DESERT_PALETTE.sunNoon, 3.1);
    this.sunLight.castShadow = true;
    const initialMap = IS_MOBILE ? 512 : 2048;
    this.sunLight.shadow.mapSize.set(initialMap, initialMap);
    this.sunLight.shadow.camera.near = 2;
    this.sunLight.shadow.camera.far = 125;
    const d = this._shadowFrustumHalf;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.00045;
    this.sunLight.shadow.normalBias = 0.022;
    this.sunLight.shadow.radius = IS_MOBILE ? 1.4 : 2.6;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    this.hemiLight = new THREE.HemisphereLight(
      DESERT_PALETTE.hemiSkyNoon,
      DESERT_PALETTE.hemiGroundNoon,
      1.12
    );
    this.scene.add(this.hemiLight);

    this.interiorBounceLight = new THREE.PointLight(0xf4d4a8, 2.4, 22, 1.45);
    this.interiorBounceLight.position.set(0.0, 3.1, -18.0);
    this.scene.add(this.interiorBounceLight);

    this.sandBounceLight = new THREE.DirectionalLight(0xe6bd88, 0.5);
    this.sandBounceLight.position.set(-25, 10, 30);
    this.scene.add(this.sandBounceLight);
  }

  _createFog() {
    this.fog = new THREE.FogExp2(DESERT_PALETTE.horizonNoon.getHex(), 0.0028);
    this.scene.fog = this.fog;
  }

  applySettings(settingsData, preset) {
    const useShadows = Boolean(settingsData.shadows) && Boolean(preset.shadows !== false) && !settingsData.batterySaver;
    this.sunLight.castShadow = useShadows;
    this.renderer.shadowMap.enabled = useShadows;

    if (useShadows && this.sunLight.shadow.mapSize.x !== preset.shadowMapSize) {
      this.sunLight.shadow.mapSize.set(preset.shadowMapSize, preset.shadowMapSize);
      if (this.sunLight.shadow.map) {
        this.sunLight.shadow.map.dispose();
        this.sunLight.shadow.map = null;
      }
    }

    this.proceduralSky.setQualityOptions({
      cloudOctaves: preset.cloudOctaves ?? 3,
      useSkyCache: Boolean(preset.useSkyCache),
      useIBL: Boolean(preset.useIBL),
    });

    // Slightly lift hemisphere light when IBL is disabled on mobile so shadowed sides stay rich and balanced
    this._iblCompensation = preset.useIBL ? 0.0 : 0.22;
    this._applyAtmosphere(this.timeOfDay, this.stormIntensity);
    this._forceShadowUpdate = true;
  }

  setTimeOfDay(t, immediate = false) {
    const clamped = Math.max(0, Math.min(1, t));
    this.targetTimeOfDay = clamped;
    if (immediate) {
      this.timeOfDay = clamped;
      this._applyAtmosphere(clamped, this.stormIntensity);
      this.proceduralSky.uniforms.uSunDir.value.copy(this.sunDirection);
      this.proceduralSky.uniforms.uTimeOfDay.value = clamped;
      if (this.proceduralSky.useCache) this.proceduralSky.bakeSkyCache();
      this.proceduralSky.bakeIBL(clamped, this.stormIntensity);
      this._forceShadowUpdate = true;
    }
  }

  setStormIntensity(storm, forceBake = false) {
    const clamped = Math.max(0, Math.min(1, storm));
    const changed = Math.abs(clamped - this.stormIntensity) > 0.003;
    this.stormIntensity = clamped;
    if (changed || forceBake) {
      this._applyAtmosphere(this.timeOfDay, this.stormIntensity);
    }
    if (forceBake) {
      this.proceduralSky.uniforms.uStorm.value = clamped;
      if (this.proceduralSky.useCache) this.proceduralSky.bakeSkyCache();
      this.proceduralSky.bakeIBL(this.timeOfDay, this.stormIntensity);
    }
  }

  _applyAtmosphere(s, storm) {
    this.timeOfDay = s;
    this._lastAtmosTime = s;
    this._lastAtmosStorm = storm;
    const warm = Math.pow(s, 1.15);

    const elevDeg = THREE.MathUtils.lerp(48.0, 11.5, s);
    const azimDeg = THREE.MathUtils.lerp(-138, -118, s);
    const elevRad = THREE.MathUtils.degToRad(elevDeg);
    const azimRad = THREE.MathUtils.degToRad(azimDeg);

    this.sunDirection
      .set(
        Math.cos(elevRad) * Math.sin(azimRad),
        Math.sin(elevRad),
        Math.cos(elevRad) * Math.cos(azimRad)
      )
      .normalize();

    this.proceduralSky.computeHorizonColor(s, storm, this.fog.color);
    const baseFogDensity = THREE.MathUtils.lerp(0.0026, 0.0038, warm);
    this.fog.density = THREE.MathUtils.lerp(baseFogDensity, 0.036, Math.pow(storm, 1.25));

    SHARED_GRADE_UNIFORMS.uTimeOfDay.value = s;
    SHARED_GRADE_UNIFORMS.uStorm.value = storm;
    SHARED_GRADE_UNIFORMS.uHorizonColor.value.copy(this.fog.color);

    this._tmpCol.lerpColors(DESERT_PALETTE.sunNoon, DESERT_PALETTE.sunAsr, warm);
    if (storm > 0.001) this._tmpCol.lerp(DESERT_PALETTE.sunStorm, storm * 0.85);
    this.sunLight.color.copy(this._tmpCol);
    const baseSunInt = THREE.MathUtils.lerp(3.15, 2.85, s);
    this.sunLight.intensity = baseSunInt * (1.0 - storm * 0.72);

    this.hemiLight.color.lerpColors(DESERT_PALETTE.hemiSkyNoon, DESERT_PALETTE.hemiSkyAsr, warm);
    if (storm > 0.001) this.hemiLight.color.lerp(DESERT_PALETTE.hemiSkyStorm, storm * 0.9);
    this.hemiLight.groundColor.lerpColors(DESERT_PALETTE.hemiGroundNoon, DESERT_PALETTE.hemiGroundAsr, warm);
    if (storm > 0.001) this.hemiLight.groundColor.lerp(DESERT_PALETTE.hemiGroundStorm, storm * 0.85);
    this.hemiLight.intensity = THREE.MathUtils.lerp(1.06, 0.92, s) + (this._iblCompensation || 0) + storm * 0.65;

    this.scene.environmentIntensity = THREE.MathUtils.lerp(0.55, 0.68, warm) * (1.0 - storm * 0.2);

    this.sandBounceLight.color.lerpColors(this._sandBounceNoon, this._sandBounceAsr, warm);
    this.sandBounceLight.intensity = THREE.MathUtils.lerp(0.46, 0.36, s) * (1.0 - storm * 0.55);
    this.sandBounceLight.position.set(-this.sunDirection.x * 40, 12, -this.sunDirection.z * 40);

    this.interiorBounceLight.color.lerpColors(this._intBounceNoon, this._intBounceAsr, warm);
    this.interiorBounceLight.intensity = THREE.MathUtils.lerp(2.4, 2.75, warm) * (1.0 - storm * 0.25);

    if (this.glareEl) {
      const g = Math.round(THREE.MathUtils.lerp(240, 174, warm));
      if (Math.abs(g - this._lastGlareG) >= 3) {
        this._lastGlareG = g;
        const b = Math.round(THREE.MathUtils.lerp(202, 98, warm));
        this.glareEl.style.setProperty('--sun-r', '255');
        this.glareEl.style.setProperty('--sun-g', String(g));
        this.glareEl.style.setProperty('--sun-b', String(b));
      }
    }
    if (this.heatHazeEl) {
      const hazeOp = (THREE.MathUtils.lerp(0.42, 0.25, s) * (1.0 - storm * 0.6)).toFixed(2);
      if (hazeOp !== this._lastHazeOp) {
        this._lastHazeOp = hazeOp;
        this.heatHazeEl.style.opacity = hazeOp;
      }
    }
    // IMPORTANT: Do NOT set `shadowMap.needsUpdate = true` here! That caused 60-120 shadow redraws/sec!
  }

  update(dt, elapsed, camera, playerPos, isInsideHouse) {
    const diff = this.targetTimeOfDay - this.timeOfDay;
    if (Math.abs(diff) > 0.0005) {
      this.timeOfDay += diff * Math.min(1, dt * 1.15);
      // Only recompute atmosphere & fog when time actually shifted visibly (>= 0.002)
      if (Math.abs(this.timeOfDay - this._lastAtmosTime) >= 0.002) {
        this._applyAtmosphere(this.timeOfDay, this.stormIntensity);
      }
    }

    this.proceduralSky.update(dt, elapsed, camera.position, this.sunDirection, this.timeOfDay, this.stormIntensity);

    // TRUE Shadow Map Throttling: only re-render shadow map when player moves >1.2m (mobile) or sun shifts >0.5°!
    const focusX = THREE.MathUtils.clamp(playerPos.x, -55, 55);
    const focusZ = THREE.MathUtils.clamp(playerPos.z, -55, 55);
    SHARED_GRADE_UNIFORMS.uShadowFadeCenter.value.set(focusX, playerPos.y, focusZ);

    if (this.sunLight.castShadow && this.renderer.shadowMap.enabled) {
      this._shadowCooldown = Math.max(0, this._shadowCooldown - dt);
      const focusMovedSq =
        (focusX - this._lastShadowFocus.x) * (focusX - this._lastShadowFocus.x) +
        (focusZ - this._lastShadowFocus.z) * (focusZ - this._lastShadowFocus.z);
      const sunMovedSq = this._lastShadowSun.distanceToSquared(this.sunDirection);
      const moveThreshSq = IS_MOBILE ? 1.44 : 0.36; // 1.2m on mobile, 0.6m on desktop

      if (this._forceShadowUpdate || (this._shadowCooldown <= 0 && (focusMovedSq > moveThreshSq || sunMovedSq > 0.00008))) {
        this._forceShadowUpdate = false;
        this._shadowCooldown = IS_MOBILE ? 0.28 : 0.08; // Max ~3.5Hz shadow updates on mobile!
        this._lastShadowFocus.set(focusX, 0, focusZ);
        this._lastShadowSun.copy(this.sunDirection);
        this.sunLight.target.position.set(focusX, 0, focusZ);
        this.sunLight.position.set(
          focusX + this.sunDirection.x * 58,
          this.sunDirection.y * 58,
          focusZ + this.sunDirection.z * 58
        );
        this.renderer.shadowMap.needsUpdate = true;
        this.shadowUpdatesCount++;
      }
    }

    camera.getWorldDirection(this._camDir);
    const sunDot = this._camDir.dot(this.sunDirection);
    const flareEnabled = this.settings.data.sunFlare && !this.settings.data.batterySaver;

    let glare = 0;
    if (flareEnabled && !isInsideHouse && sunDot > 0.42 && this.stormIntensity < 0.75) {
      glare = Math.pow((sunDot - 0.42) / 0.58, 2.3) * (1.0 - this.stormIntensity);
      this._tmpVec.copy(camera.position).addScaledVector(this.sunDirection, 400).project(camera);
      const sx = Math.round((this._tmpVec.x * 0.5 + 0.5) * 200) * 0.5;
      const sy = Math.round((-this._tmpVec.y * 0.5 + 0.5) * 200) * 0.5;
      if (this.glareEl && (sx !== this._lastGlareX || sy !== this._lastGlareY)) {
        this._lastGlareX = sx;
        this._lastGlareY = sy;
        this.glareEl.style.setProperty('--sun-x', `${sx}%`);
        this.glareEl.style.setProperty('--sun-y', `${sy}%`);
      }
    }

    const totalGlare = Math.min(1.0, glare * 0.85 + this.cutsceneGlareBoost);
    this.glareAmount += (totalGlare - this.glareAmount) * Math.min(1, dt * 6.5);
    if (this.glareEl) {
      const visible = this.glareAmount > 0.012;
      if (visible !== this._lastGlareVisible) {
        this._lastGlareVisible = visible;
        this.glareEl.classList.toggle('hidden', !visible);
      }
      if (visible) {
        const opStr = this.glareAmount.toFixed(2);
        if (opStr !== this._lastGlareOp) {
          this._lastGlareOp = opStr;
          this.glareEl.style.opacity = opStr;
        }
      }
    }

    const outdoorExp = THREE.MathUtils.lerp(
      THREE.MathUtils.lerp(DESERT_PALETTE.exposureNoon, DESERT_PALETTE.exposureAsr, this.timeOfDay),
      DESERT_PALETTE.exposureStorm,
      this.stormIntensity
    );
    const indoorExp = THREE.MathUtils.lerp(
      DESERT_PALETTE.exposureInteriorNoon,
      DESERT_PALETTE.exposureInteriorAsr,
      this.timeOfDay
    );
    const baseExp = isInsideHouse ? indoorExp : outdoorExp;
    this.targetExposure = baseExp + this.cutsceneGlareBoost * 0.6 - glare * 0.12;
    this.currentExposure += (this.targetExposure - this.currentExposure) * Math.min(1, dt * 2.8);
    this.renderer.toneMappingExposure = this.currentExposure;
  }
}
