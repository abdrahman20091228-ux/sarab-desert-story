import * as THREE from 'three';

/**
 * Optimized Desert Atmosphere & Smooth Continuous Daylight System.
 * - Low-poly sky dome (20x12 sphere) with rich Rayleigh/Mie scattering & wispy cirrus clouds
 * - Smooth continuous timeOfDay interpolation (no jarring abrupt jumps!)
 * - Noon (0.0) -> Asr Golden Hour (1.0) matching our visual concept art
 */
export class SkyLightingSystem {
  constructor(scene, renderer, settings) {
    this.scene = scene;
    this.renderer = renderer;
    this.settings = settings;

    this.timeOfDay = 0.0;
    this.targetTimeOfDay = 0.0;
    this.sunDirection = new THREE.Vector3(0.2, 0.9, -0.35).normalize();
    this.glareAmount = 0;
    this.targetExposure = 1.06;
    this.currentExposure = 1.06;
    this.cutsceneGlareBoost = 0;

    this._tmpVec = new THREE.Vector3();
    this._camDir = new THREE.Vector3();

    this._createSkyDome();
    this._createLights();
    this._createFog();

    this.glareEl = document.getElementById('sun-glare-layer');
    this.heatHazeEl = document.getElementById('heat-haze-layer');

    this.setTimeOfDay(0.0, true);
  }

  _createSkyDome() {
    // Low-vertex sphere (480 tris instead of 1440) — visually identical smooth sky gradient!
    const skyGeo = new THREE.SphereGeometry(920, 20, 12);
    this.skyUniforms = {
      uSunDir: { value: this.sunDirection.clone() },
      uZenithColor: { value: new THREE.Color('#2366b2') },
      uMidSkyColor: { value: new THREE.Color('#80b4de') },
      uHorizonColor: { value: new THREE.Color('#efe0c5') },
      uSunColor: { value: new THREE.Color('#fffbe8') },
      uMieStrength: { value: 0.45 },
      uTime: { value: 0 },
      uHazeDensity: { value: 0.34 },
    };

    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: this.skyUniforms,
      vertexShader: /* glsl */ `
        varying vec3 vWorldDir;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldDir = normalize(position);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uSunDir;
        uniform vec3 uZenithColor;
        uniform vec3 uMidSkyColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uSunColor;
        uniform float uMieStrength;
        uniform float uTime;
        uniform float uHazeDensity;

        varying vec3 vWorldDir;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }

        void main() {
          vec3 dir = normalize(vWorldDir);
          float elev = clamp(dir.y, 0.0, 1.0);

          vec3 sky = mix(uHorizonColor, uMidSkyColor, smoothstep(0.0, 0.28, elev));
          sky = mix(sky, uZenithColor, smoothstep(0.22, 0.85, elev));

          float dustBand = pow(1.0 - elev, 5.2) * uHazeDensity;
          sky = mix(sky, uHorizonColor * 1.04, clamp(dustBand, 0.0, 0.88));

          // Fast 2-octave cirrus desert cloud wisps (2x faster fragment shader on mobile!)
          if (dir.y > 0.03) {
            vec2 uv = dir.xz / (dir.y + 0.17) * 0.92 + vec2(uTime * 0.004, uTime * 0.0018);
            float c = noise(uv * vec2(1.4, 0.65)) * 0.68 + noise(uv * vec2(3.1, 1.5) + 5.2) * 0.32;
            float wisps = smoothstep(0.55, 0.84, c) * smoothstep(0.03, 0.22, dir.y) * (1.0 - smoothstep(0.65, 0.94, dir.y));
            sky = mix(sky, mix(uHorizonColor * 1.08, uSunColor, 0.45), wisps * 0.34);
          }

          float sunDot = max(dot(dir, normalize(uSunDir)), 0.0);
          float wideGlow = pow(sunDot, 6.0) * (0.28 + uMieStrength * 0.45);
          float tightGlow = pow(sunDot, 64.0) * (0.65 + uMieStrength * 0.55);
          float sunDisc = smoothstep(0.9983, 0.99945, sunDot) * 2.5;

          sky += uSunColor * (wideGlow * 0.52 + tightGlow * 0.82 + sunDisc);

          if (dir.y < 0.0) {
            sky = mix(uHorizonColor, uHorizonColor * 0.72, clamp(-dir.y * 4.0, 0.0, 1.0));
          }

          gl_FragColor = vec4(sky, 1.0);
        }
      `,
    });

    this.skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.skyMesh.frustumCulled = false;
    this.scene.add(this.skyMesh);
  }

  _createLights() {
    this.sunLight = new THREE.DirectionalLight(0xfff5dc, 3.2);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.camera.near = 2;
    this.sunLight.shadow.camera.far = 160;
    const d = 48;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0006;
    this.sunLight.shadow.normalBias = 0.035;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    // Baked-feel GI hemisphere bounce
    this.hemiLight = new THREE.HemisphereLight(0x92c4ee, 0xd2a56c, 1.2);
    this.scene.add(this.hemiLight);

    // Warm interior bounce light centered inside the grand estate
    this.interiorBounceLight = new THREE.PointLight(0xf6d29c, 2.2, 22, 1.4);
    this.interiorBounceLight.position.set(0.0, 3.0, -18.0);
    this.scene.add(this.interiorBounceLight);

    // Sand radiosity fill directional
    this.sandBounceLight = new THREE.DirectionalLight(0xecc289, 0.55);
    this.sandBounceLight.position.set(-25, 10, 30);
    this.scene.add(this.sandBounceLight);
  }

  _createFog() {
    this.fog = new THREE.FogExp2(0xecdbb9, 0.003);
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
  }

  /**
   * Smoothly glide timeOfDay toward target (or snap immediately when immediate = true).
   */
  setTimeOfDay(t, immediate = false) {
    const clamped = Math.max(0, Math.min(1, t));
    this.targetTimeOfDay = clamped;
    if (immediate) {
      this._applyTimeValues(clamped);
    }
  }

  _applyTimeValues(s) {
    this.timeOfDay = s;
    const warm = Math.pow(s, 1.25);

    const elevDeg = THREE.MathUtils.lerp(66, 15, s);
    const azimDeg = THREE.MathUtils.lerp(-148, -128, s);
    const elevRad = THREE.MathUtils.degToRad(elevDeg);
    const azimRad = THREE.MathUtils.degToRad(azimDeg);

    this.sunDirection.set(
      Math.cos(elevRad) * Math.sin(azimRad),
      Math.sin(elevRad),
      Math.cos(elevRad) * Math.cos(azimRad)
    ).normalize();

    this.skyUniforms.uSunDir.value.copy(this.sunDirection);

    this.skyUniforms.uZenithColor.value.lerpColors(new THREE.Color('#2366b2'), new THREE.Color('#6b5a4b'), warm);
    this.skyUniforms.uMidSkyColor.value.lerpColors(new THREE.Color('#80b4de'), new THREE.Color('#d49552'), warm);
    this.skyUniforms.uHorizonColor.value.lerpColors(new THREE.Color('#efe0c5'), new THREE.Color('#f4bc74'), warm);
    this.skyUniforms.uSunColor.value.lerpColors(new THREE.Color('#fffbe8'), new THREE.Color('#ffd082'), warm);

    this.skyUniforms.uMieStrength.value = THREE.MathUtils.lerp(0.42, 0.96, warm);
    this.skyUniforms.uHazeDensity.value = THREE.MathUtils.lerp(0.32, 0.62, warm);

    this.sunLight.color.lerpColors(new THREE.Color('#fff7e4'), new THREE.Color('#ffb15c'), warm);
    this.sunLight.intensity = THREE.MathUtils.lerp(3.25, 2.9, s);

    this.hemiLight.color.lerpColors(new THREE.Color('#92c4ee'), new THREE.Color('#dfa062'), warm);
    this.hemiLight.groundColor.lerpColors(new THREE.Color('#d2a56c'), new THREE.Color('#995f2e'), warm);
    this.hemiLight.intensity = THREE.MathUtils.lerp(1.2, 0.96, s);

    this.sandBounceLight.color.lerpColors(new THREE.Color('#ecc289'), new THREE.Color('#df8b46'), warm);
    this.sandBounceLight.intensity = THREE.MathUtils.lerp(0.58, 0.45, s);
    this.sandBounceLight.position.set(-this.sunDirection.x * 40, 12, -this.sunDirection.z * 40);

    this.interiorBounceLight.color.lerpColors(new THREE.Color('#f6d29c'), new THREE.Color('#ffa852'), warm);
    this.interiorBounceLight.intensity = THREE.MathUtils.lerp(2.1, 2.45, warm);

    this.fog.color.lerpColors(new THREE.Color('#ecdbb9'), new THREE.Color('#e3a764'), warm);
    this.fog.density = THREE.MathUtils.lerp(0.0028, 0.0042, warm);

    if (this.glareEl) {
      const g = Math.round(THREE.MathUtils.lerp(240, 178, warm));
      const b = Math.round(THREE.MathUtils.lerp(202, 102, warm));
      this.glareEl.style.setProperty('--sun-r', '255');
      this.glareEl.style.setProperty('--sun-g', String(g));
      this.glareEl.style.setProperty('--sun-b', String(b));
    }
    if (this.heatHazeEl) {
      this.heatHazeEl.style.opacity = String(THREE.MathUtils.lerp(0.55, 0.36, s).toFixed(2));
    }
  }

  update(dt, elapsed, camera, playerPos, isInsideHouse) {
    this.skyUniforms.uTime.value = elapsed;
    this.skyMesh.position.copy(camera.position);

    // Smooth continuous sun & lighting glide whenever targetTimeOfDay advances!
    const diff = this.targetTimeOfDay - this.timeOfDay;
    if (Math.abs(diff) > 0.0002) {
      const next = this.timeOfDay + diff * Math.min(1, dt * 1.15);
      this._applyTimeValues(next);
    }

    // Lock shadow camera cleanly around the estate & player
    const focusX = THREE.MathUtils.clamp(playerPos.x * 0.5, -24, 24);
    const focusZ = THREE.MathUtils.clamp((playerPos.z - 12) * 0.5 - 6, -34, 16);
    this.sunLight.target.position.set(focusX, 0, focusZ);
    this.sunLight.position.set(
      focusX + this.sunDirection.x * 68,
      this.sunDirection.y * 68,
      focusZ + this.sunDirection.z * 68
    );

    camera.getWorldDirection(this._camDir);
    const sunDot = this._camDir.dot(this.sunDirection);
    const flareEnabled = this.settings.data.sunFlare;

    let glare = 0;
    if (flareEnabled && !isInsideHouse && sunDot > 0.38) {
      glare = Math.pow((sunDot - 0.38) / 0.62, 2.2);
      this._tmpVec.copy(camera.position).addScaledVector(this.sunDirection, 400).project(camera);
      const sx = (this._tmpVec.x * 0.5 + 0.5) * 100;
      const sy = (-this._tmpVec.y * 0.5 + 0.5) * 100;
      if (this.glareEl) {
        this.glareEl.style.setProperty('--sun-x', `${sx.toFixed(1)}%`);
        this.glareEl.style.setProperty('--sun-y', `${sy.toFixed(1)}%`);
      }
    }

    const totalGlare = Math.min(1.0, glare * 0.9 + this.cutsceneGlareBoost);
    this.glareAmount += (totalGlare - this.glareAmount) * Math.min(1, dt * 6.5);
    if (this.glareEl) {
      this.glareEl.style.opacity = this.glareAmount > 0.008 ? this.glareAmount.toFixed(3) : '0';
    }

    const baseExp = isInsideHouse
      ? THREE.MathUtils.lerp(1.22, 1.3, this.timeOfDay)
      : THREE.MathUtils.lerp(1.05, 1.12, this.timeOfDay);
    this.targetExposure = baseExp + this.cutsceneGlareBoost * 0.68 - glare * 0.14;
    this.currentExposure += (this.targetExposure - this.currentExposure) * Math.min(1, dt * 2.8);
    this.renderer.toneMappingExposure = this.currentExposure;
  }
}
