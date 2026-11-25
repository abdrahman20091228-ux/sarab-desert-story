import * as THREE from 'three';
import { ProceduralSky } from './ProceduralSky.js';
import { STAGE_ATMOSPHERES, SHARED_GRADE_UNIFORMS } from './Palette.js';
import { IS_MOBILE } from './Settings.js';

/**
 * 4-Stage Thermal-Optimized Sky, Lighting & Baked-Hybrid Shadow System (v5.0):
 * - Instant clean atmospheric switching across Stage 1 (Noon), Stage 2 (Afternoon Canyon),
 *   Stage 3 (Sunset Summit), and Stage 4 (Starry Night + Moonlight)
 * - Uses pre-baked vertex lighting + Contact AO so real-time shadow redraws stay ultra-throttled
 *   (and OFF on mobile/cool mode while keeping full crisp resolution!)
 * - Zero per-frame heap allocations
 */
export class SkyLightingSystem {
  constructor(scene, renderer, settings) {
    this.scene = scene;
    this.renderer = renderer;
    this.settings = settings;

    this.stageId = 1;
    this.skyMode = 0.0;
    this.stormIntensity = 0.0;
    this.sunDirection = new THREE.Vector3(0.2, 0.9, -0.35).normalize();
    this.glareAmount = 0;
    this.targetExposure = 0.96;
    this.currentExposure = 0.96;
    this.cutsceneGlareBoost = 0;

    this._tmpVec = new THREE.Vector3();
    this._camDir = new THREE.Vector3();
    this._lastShadowFocus = new THREE.Vector3(9999, 9999, 9999);
    this._lastShadowSun = new THREE.Vector3();
    this._shadowCooldown = 0;
    this._forceShadowUpdate = true;
    this._shadowFrustumHalf = 28;
    this.shadowUpdatesCount = 0;

    this._lastGlareVisible = false;
    this._lastGlareOp = '';
    this._lastGlareX = -999;
    this._lastGlareY = -999;
    this._lastHazeOp = '';
    this._iblCompensation = 0;

    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;

    this.proceduralSky = new ProceduralSky(this.scene, this.renderer);
    this._createLights();
    this._createFog();

    this.glareEl = document.getElementById('sun-glare-layer');
    this.heatHazeEl = document.getElementById('heat-haze-layer');
    if (this.glareEl) this.glareEl.classList.add('hidden');

    this.applyStage(1, true);
  }

  _createLights() {
    this.sunLight = new THREE.DirectionalLight('#fff7e6', 3.0);
    this.sunLight.castShadow = !IS_MOBILE;
    const initialMap = IS_MOBILE ? 512 : 2048;
    this.sunLight.shadow.mapSize.set(initialMap, initialMap);
    this.sunLight.shadow.camera.near = 2;
    this.sunLight.shadow.camera.far = 165;
    const d = this._shadowFrustumHalf;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.00045;
    this.sunLight.shadow.normalBias = 0.025;
    this.sunLight.shadow.radius = IS_MOBILE ? 1.4 : 2.6;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    this.hemiLight = new THREE.HemisphereLight('#8ec0eb', '#cfa879', 1.05);
    this.scene.add(this.hemiLight);

    this.sandBounceLight = new THREE.DirectionalLight('#ebd0a2', 0.42);
    this.sandBounceLight.position.set(-25, 12, 30);
    this.scene.add(this.sandBounceLight);
  }

  _createFog() {
    this.fog = new THREE.FogExp2(STAGE_ATMOSPHERES[1].horizonColor.getHex(), 0.0021);
    this.scene.fog = this.fog;
  }

  applySettings(settingsData, preset) {
    // Baked Lighting & Contact AO handles grounding on mobile/low/cool mode without lowering display resolution!
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

    this._iblCompensation = preset.useIBL ? 0.0 : 0.18;
    this._applyAtmosphere(this.stageId, this.stormIntensity);
    this._forceShadowUpdate = true;
  }

  applyStage(stageId, immediate = true) {
    const id = STAGE_ATMOSPHERES[stageId] ? stageId : 1;
    this.stageId = id;
    const atmos = STAGE_ATMOSPHERES[id];
    this.skyMode = atmos.skyMode;
    this.stormIntensity = atmos.stormBase || 0.0;
    this._applyAtmosphere(id, this.stormIntensity);

    if (immediate) {
      this.currentExposure = atmos.exposure;
      this.targetExposure = atmos.exposure;
      this.renderer.toneMappingExposure = atmos.exposure;
      this.proceduralSky.uniforms.uSunDir.value.copy(this.sunDirection);
      this.proceduralSky.uniforms.uSkyMode.value = this.skyMode;
      this.proceduralSky.uniforms.uStorm.value = this.stormIntensity;
      this.proceduralSky.computeHorizonColor(id, this.stormIntensity, this.proceduralSky.uniforms.uHorizonColor.value);
      if (this.proceduralSky.useCache) this.proceduralSky.bakeSkyCache();
      this.proceduralSky.bakeIBL(this.skyMode, this.stormIntensity);
      this._forceShadowUpdate = true;
    }
  }

  setStormIntensity(storm, forceBake = false) {
    const clamped = Math.max(0, Math.min(1, storm));
    const changed = Math.abs(clamped - this.stormIntensity) > 0.004;
    this.stormIntensity = clamped;
    if (changed || forceBake) {
      this._applyAtmosphere(this.stageId, this.stormIntensity);
    }
    if (forceBake) {
      this.proceduralSky.uniforms.uStorm.value = clamped;
      if (this.proceduralSky.useCache) this.proceduralSky.bakeSkyCache();
      this.proceduralSky.bakeIBL(this.skyMode, this.stormIntensity);
    }
  }

  _applyAtmosphere(stageId, storm) {
    const atmos = STAGE_ATMOSPHERES[stageId] || STAGE_ATMOSPHERES[1];
    this.skyMode = atmos.skyMode;

    const elevRad = THREE.MathUtils.degToRad(atmos.sunElevDeg);
    const azimRad = THREE.MathUtils.degToRad(atmos.sunAzimDeg);
    this.sunDirection
      .set(
        Math.cos(elevRad) * Math.sin(azimRad),
        Math.sin(elevRad),
        Math.cos(elevRad) * Math.cos(azimRad)
      )
      .normalize();

    this.proceduralSky.computeHorizonColor(stageId, storm, this.fog.color);
    this.fog.density = THREE.MathUtils.lerp(atmos.fogDensity, 0.022, Math.pow(storm, 1.35));

    SHARED_GRADE_UNIFORMS.uSkyMode.value = this.skyMode;
    SHARED_GRADE_UNIFORMS.uStorm.value = storm;
    SHARED_GRADE_UNIFORMS.uHorizonColor.value.copy(this.fog.color);

    this.sunLight.color.copy(atmos.sunColor);
    this.sunLight.intensity = atmos.sunIntensity * (1.0 - storm * 0.45);

    this.hemiLight.color.copy(atmos.hemiSky);
    this.hemiLight.groundColor.copy(atmos.hemiGround);
    const nightBoost = stageId === 4 ? 0.0 : this._iblCompensation;
    this.hemiLight.intensity = atmos.hemiIntensity + nightBoost + storm * 0.28;

    this.scene.environmentIntensity = stageId === 4 ? 0.22 : 0.52 * (1.0 - storm * 0.18);

    this.sandBounceLight.color.copy(atmos.bounceColor);
    this.sandBounceLight.intensity = atmos.bounceIntensity * (1.0 - storm * 0.4);
    this.sandBounceLight.position.set(-this.sunDirection.x * 50, 18, -this.sunDirection.z * 50);

    if (this.glareEl) {
      if (stageId === 3) {
        this.glareEl.style.setProperty('--sun-r', '255');
        this.glareEl.style.setProperty('--sun-g', '128');
        this.glareEl.style.setProperty('--sun-b', '64');
      } else if (stageId === 2) {
        this.glareEl.style.setProperty('--sun-r', '255');
        this.glareEl.style.setProperty('--sun-g', '194');
        this.glareEl.style.setProperty('--sun-b', '122');
      } else {
        this.glareEl.style.setProperty('--sun-r', '255');
        this.glareEl.style.setProperty('--sun-g', '240');
        this.glareEl.style.setProperty('--sun-b', '204');
      }
    }

    if (this.heatHazeEl) {
      const hazeOp = (atmos.heatHaze * (1.0 - storm * 0.65)).toFixed(2);
      if (hazeOp !== this._lastHazeOp) {
        this._lastHazeOp = hazeOp;
        this.heatHazeEl.style.opacity = hazeOp;
      }
    }
  }

  getAtmosphere() {
    return STAGE_ATMOSPHERES[this.stageId] || STAGE_ATMOSPHERES[1];
  }

  update(dt, elapsed, camera, playerPos, isInsideHouse) {
    const atmos = this.getAtmosphere();

    this.proceduralSky.update(
      dt,
      elapsed,
      camera.position,
      this.sunDirection,
      this.skyMode,
      this.stageId,
      this.stormIntensity
    );

    const focusX = playerPos.x;
    const focusY = playerPos.y;
    const focusZ = playerPos.z;
    SHARED_GRADE_UNIFORMS.uShadowFadeCenter.value.set(focusX, focusY, focusZ);

    // Throttled shadow updates (0 redraws when stationary!)
    if (this.sunLight.castShadow && this.renderer.shadowMap.enabled) {
      this._shadowCooldown = Math.max(0, this._shadowCooldown - dt);
      const focusMovedSq =
        (focusX - this._lastShadowFocus.x) * (focusX - this._lastShadowFocus.x) +
        (focusZ - this._lastShadowFocus.z) * (focusZ - this._lastShadowFocus.z);
      const sunMovedSq = this._lastShadowSun.distanceToSquared(this.sunDirection);
      const moveThreshSq = IS_MOBILE ? 2.25 : 0.64;

      if (this._forceShadowUpdate || (this._shadowCooldown <= 0 && (focusMovedSq > moveThreshSq || sunMovedSq > 0.0001))) {
        this._forceShadowUpdate = false;
        this._shadowCooldown = IS_MOBILE ? 0.35 : 0.1;
        this._lastShadowFocus.set(focusX, focusY, focusZ);
        this._lastShadowSun.copy(this.sunDirection);
        this.sunLight.target.position.set(focusX, focusY, focusZ);
        this.sunLight.position.set(
          focusX + this.sunDirection.x * 65,
          focusY + Math.max(12, this.sunDirection.y * 65),
          focusZ + this.sunDirection.z * 65
        );
        this.renderer.shadowMap.needsUpdate = true;
        this.shadowUpdatesCount++;
      }
    }

    // Sun optical glare (disabled at Night Stage 4!)
    camera.getWorldDirection(this._camDir);
    const sunDot = this._camDir.dot(this.sunDirection);
    const flareEnabled = this.settings.data.sunFlare && !this.settings.data.batterySaver && this.stageId < 4;

    let glare = 0;
    if (flareEnabled && !isInsideHouse && sunDot > 0.44 && this.stormIntensity < 0.72) {
      const stageBoost = this.stageId === 3 ? 0.75 : 0.85;
      glare = Math.pow((sunDot - 0.44) / 0.56, 2.3) * (1.0 - this.stormIntensity) * stageBoost;
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

    const totalGlare = Math.min(1.0, glare + this.cutsceneGlareBoost);
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

    const baseExp = isInsideHouse ? atmos.interiorExposure : atmos.exposure;
    this.targetExposure = baseExp + this.cutsceneGlareBoost * 0.55 - glare * 0.1;
    this.currentExposure += (this.targetExposure - this.currentExposure) * Math.min(1, dt * 3.0);
    this.renderer.toneMappingExposure = this.currentExposure;
  }
}
