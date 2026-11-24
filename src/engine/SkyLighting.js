import * as THREE from 'three';
import { ProceduralSky } from './ProceduralSky.js';
import { DESERT_PALETTE, SHARED_GRADE_UNIFORMS } from './Palette.js';
import { IS_MOBILE } from './Settings.js';

/**
 * Unified Procedural Sky + Calibrated Lighting + Tight Anti-Pixelation Shadows + Storm Integration (v4.0)
 * - 100% code-rendered Rayleigh/Mie sky dome (zero sky image textures!)
 * - Exact horizon color synced with FogExp2 so distant dunes melt seamlessly
 * - Throttled PMREM IBL generated from the procedural sky
 * - Tight ±22m player-centered shadow frustum (2048px on high/ultra + PCFSoft on desktop) -> crisp shadows with zero chunky texels
 * - Smooth dust storm lighting/fog modulation
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

    this._tmpVec = new THREE.Vector3();
    this._camDir = new THREE.Vector3();
    this._tmpCol = new THREE.Color();
    this._lastShadowFocus = new THREE.Vector3(9999, 9999, 9999);
    this._lastShadowSun = new THREE.Vector3();
    this._shadowFrameCounter = 0;
    this._shadowFrustumHalf = 22;

    // Enable manual shadow map throttling so mobile GPUs don't re-render shadow maps every single frame!
    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;

    this.proceduralSky = new ProceduralSky(this.scene, this.renderer);
    this._createLights();
    this._createFog();

    this.glareEl = document.getElementById('sun-glare-layer');
    this.heatHazeEl = document.getElementById('heat-haze-layer');

    this.setTimeOfDay(0.0, true);
    this.proceduralSky.bakeIBL(0.0, 0.0);
  }

  _createLights() {
    this.sunLight = new THREE.DirectionalLight(DESERT_PALETTE.sunNoon, 3.1);
    this.sunLight.castShadow = true;
    const initialMap = IS_MOBILE ? 1024 : 2048;
    this.sunLight.shadow.mapSize.set(initialMap, initialMap);
    this.sunLight.shadow.camera.near = 2;
    this.sunLight.shadow.camera.far = 125;
    // Tight ±22m shadow frustum -> 2.4x higher texel density than old ±34m (eliminates blocky pixel shadows!)
    const d = this._shadowFrustumHalf;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.00045;
    this.sunLight.shadow.normalBias = 0.022;
    this.sunLight.shadow.radius = IS_MOBILE ? 1.5 : 2.6;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    this.hemiLight = new THREE.HemisphereLight(
      DESERT_PALETTE.hemiSkyNoon,
      DESERT_PALETTE.hemiGroundNoon,
      1.05
    );
    this.scene.add(this.hemiLight);

    this.interiorBounceLight = new THREE.PointLight(0xf2cfa0, 1.85, 22, 1.45);
    this.interiorBounceLight.position.set(0.0, 3.1, -18.0);
    this.scene.add(this.interiorBounceLight);

    this.sandBounceLight = new THREE.DirectionalLight(0xe6be8a, 0.48);
    this.sandBounceLight.position.set(-25, 10, 30);
    this.scene.add(this.sandBounceLight);
  }

  _createFog() {
    this.fog = new THREE.FogExp2(DESERT_PALETTE.horizonNoon.getHex(), 0.0028);
    this.scene.fog = this.fog;
  }

  applySettings(settingsData, preset) {
    const useShadows = Boolean(settingsData.shadows);
    this.sunLight.castShadow = useShadows;
    this.renderer.shadowMap.enabled = useShadows;

    if (useShadows && this.sunLight.shadow.mapSize.x !== preset.shadowMapSize) {
      this.sunLight.shadow.mapSize.set(preset.shadowMapSize, preset.shadowMapSize);
      if (this.sunLight.shadow.map) {
        this.sunLight.shadow.map.dispose();
        this.sunLight.shadow.map = null;
      }
    }
    this.proceduralSky.setCloudOctaves(preset.cloudOctaves ?? 4);
    this.renderer.shadowMap.needsUpdate = true;
  }

  setTimeOfDay(t, immediate = false) {
    const clamped = Math.max(0, Math.min(1, t));
    this.targetTimeOfDay = clamped;
    if (immediate) {
      this.timeOfDay = clamped;
      this._applyAtmosphere(clamped, this.stormIntensity);
      this.proceduralSky.bakeIBL(clamped, this.stormIntensity);
    }
  }

  setStormIntensity(storm, forceBake = false) {
    const clamped = Math.max(0, Math.min(1, storm));
    const changed = Math.abs(clamped - this.stormIntensity) > 0.0005;
    this.stormIntensity = clamped;
    if (changed || forceBake) {
      this._applyAtmosphere(this.timeOfDay, this.stormIntensity);
    }
    if (forceBake) {
      this.proceduralSky.bakeIBL(this.timeOfDay, this.stormIntensity);
    }
  }

  _applyAtmosphere(s, storm) {
    this.timeOfDay = s;
    const warm = Math.pow(s, 1.15);

    // Sun arc from 48° high Arabian noon down to 11.5° golden Asr
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

    // Update unified horizon / fog color (100% matched between ProceduralSky and FogExp2!)
    this.proceduralSky.computeHorizonColor(s, storm, this.fog.color);
    const baseFogDensity = THREE.MathUtils.lerp(0.0026, 0.0038, warm);
    // Dust storm ramps fog density smoothly up to 0.036 (dramatic low-visibility sandstorm!)
    this.fog.density = THREE.MathUtils.lerp(baseFogDensity, 0.036, Math.pow(storm, 1.25));

    // Sync shared shader uniforms for aerial perspective & grading
    SHARED_GRADE_UNIFORMS.uTimeOfDay.value = s;
    SHARED_GRADE_UNIFORMS.uStorm.value = storm;
    SHARED_GRADE_UNIFORMS.uHorizonColor.value.copy(this.fog.color);

    // Direct sun light dims by ~70% during peak sandstorm while ambient haze rises
    this._tmpCol.lerpColors(DESERT_PALETTE.sunNoon, DESERT_PALETTE.sunAsr, warm);
    if (storm > 0.001) this._tmpCol.lerp(DESERT_PALETTE.sunStorm, storm * 0.85);
    this.sunLight.color.copy(this._tmpCol);
    const baseSunInt = THREE.MathUtils.lerp(3.15, 2.85, s);
    this.sunLight.intensity = baseSunInt * (1.0 - storm * 0.72);

    // Hemisphere ambient rises during storm so scattered sand light fills shadows
    this.hemiLight.color.lerpColors(DESERT_PALETTE.hemiSkyNoon, DESERT_PALETTE.hemiSkyAsr, warm);
    if (storm > 0.001) this.hemiLight.color.lerp(DESERT_PALETTE.hemiSkyStorm, storm * 0.9);
    this.hemiLight.groundColor.lerpColors(DESERT_PALETTE.hemiGroundNoon, DESERT_PALETTE.hemiGroundAsr, warm);
    if (storm > 0.001) this.hemiLight.groundColor.lerp(DESERT_PALETTE.hemiGroundStorm, storm * 0.85);
    this.hemiLight.intensity = THREE.MathUtils.lerp(1.06, 0.92, s) + storm * 0.65;

    this.scene.environmentIntensity = THREE.MathUtils.lerp(0.55, 0.68, warm) * (1.0 - storm * 0.2);

    this.sandBounceLight.color.lerpColors(new THREE.Color('#e6bd88'), new THREE.Color('#d88848'), warm);
    this.sandBounceLight.intensity = THREE.MathUtils.lerp(0.46, 0.36, s) * (1.0 - storm * 0.55);
    this.sandBounceLight.position.set(-this.sunDirection.x * 40, 12, -this.sunDirection.z * 40);

    this.interiorBounceLight.color.lerpColors(new THREE.Color('#f4d4a8'), new THREE.Color('#f6aa5c'), warm);
    this.interiorBounceLight.intensity = THREE.MathUtils.lerp(2.4, 2.75, warm) * (1.0 - storm * 0.25);

    if (this.glareEl) {
      const g = Math.round(THREE.MathUtils.lerp(240, 174, warm));
      const b = Math.round(THREE.MathUtils.lerp(202, 98, warm));
      this.glareEl.style.setProperty('--sun-r', '255');
      this.glareEl.style.setProperty('--sun-g', String(g));
      this.glareEl.style.setProperty('--sun-b', String(b));
    }
    if (this.heatHazeEl) {
      const hazeOp = THREE.MathUtils.lerp(0.42, 0.25, s) * (1.0 - storm * 0.6);
      this.heatHazeEl.style.opacity = hazeOp.toFixed(2);
    }
    this.renderer.shadowMap.needsUpdate = true;
  }

  update(dt, elapsed, camera, playerPos, isInsideHouse) {
    const diff = this.targetTimeOfDay - this.timeOfDay;
    if (Math.abs(diff) > 0.0002) {
      this._applyAtmosphere(this.timeOfDay + diff * Math.min(1, dt * 1.15), this.stormIntensity);
    }

    this.proceduralSky.update(dt, elapsed, camera.position, this.sunDirection, this.timeOfDay, this.stormIntensity);

    // Center tight ±22m shadow frustum on player & snap to shadow texel grid to eliminate shadow swimming!
    const focusX = THREE.MathUtils.clamp(playerPos.x, -55, 55);
    const focusZ = THREE.MathUtils.clamp(playerPos.z, -55, 55);
    SHARED_GRADE_UNIFORMS.uShadowFadeCenter.value.set(focusX, playerPos.y, focusZ);

    this._shadowFrameCounter++;
    const focusMovedSq =
      (focusX - this._lastShadowFocus.x) * (focusX - this._lastShadowFocus.x) +
      (focusZ - this._lastShadowFocus.z) * (focusZ - this._lastShadowFocus.z);
    const sunMovedSq = this._lastShadowSun.distanceToSquared(this.sunDirection);

    if (focusMovedSq > 0.2 || sunMovedSq > 0.0001 || this._shadowFrameCounter >= 12) {
      this._shadowFrameCounter = 0;
      this._lastShadowFocus.set(focusX, 0, focusZ);
      this._lastShadowSun.copy(this.sunDirection);
      this.sunLight.target.position.set(focusX, 0, focusZ);
      this.sunLight.position.set(
        focusX + this.sunDirection.x * 58,
        this.sunDirection.y * 58,
        focusZ + this.sunDirection.z * 58
      );
      this.renderer.shadowMap.needsUpdate = true;
    }

    camera.getWorldDirection(this._camDir);
    const sunDot = this._camDir.dot(this.sunDirection);
    const flareEnabled = this.settings.data.sunFlare;

    let glare = 0;
    if (flareEnabled && !isInsideHouse && sunDot > 0.42 && this.stormIntensity < 0.75) {
      glare = Math.pow((sunDot - 0.42) / 0.58, 2.3) * (1.0 - this.stormIntensity);
      this._tmpVec.copy(camera.position).addScaledVector(this.sunDirection, 400).project(camera);
      const sx = (this._tmpVec.x * 0.5 + 0.5) * 100;
      const sy = (-this._tmpVec.y * 0.5 + 0.5) * 100;
      if (this.glareEl) {
        this.glareEl.style.setProperty('--sun-x', `${sx.toFixed(1)}%`);
        this.glareEl.style.setProperty('--sun-y', `${sy.toFixed(1)}%`);
      }
    }

    const totalGlare = Math.min(1.0, glare * 0.85 + this.cutsceneGlareBoost);
    this.glareAmount += (totalGlare - this.glareAmount) * Math.min(1, dt * 6.5);
    if (this.glareEl) {
      this.glareEl.style.opacity = this.glareAmount > 0.008 ? this.glareAmount.toFixed(3) : '0';
    }

    // Calibrated exposure transitions smoothly across noon, Asr, interior, and storm
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
