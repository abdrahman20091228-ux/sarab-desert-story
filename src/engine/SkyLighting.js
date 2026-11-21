import * as THREE from 'three';

/**
 * Real Photographed 360° Poly Haven HDRI Sky Dome + Exact Sun Synchronization + IBL + Smart Shadow Throttling:
 * - Zero UV seam at zenith (computes equirectangular UV in fragment shader from normalized 3D view ray!)
 * - Real Poly Haven skies (`sky_noon.webp` from kloofendal_48d_partly_cloudy_puresky & `sky_asr.webp` from evening_road_01 + qwantani_sunset)
 * - Exact sun direction synchronization: the visible glowing solar disc in the sky texture and `this.sunDirection` share the exact same 3D vector!
 * - Real Image-Based Lighting (`scene.environment`) from blurred HDRI environment maps
 * - Smart Shadow Map Throttling: tight 34m player-centered shadow frustum updated only when player moves >0.55m or sun shifts
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
    this._lastShadowFocus = new THREE.Vector3(9999, 9999, 9999);
    this._lastShadowSun = new THREE.Vector3();
    this._shadowFrameCounter = 0;

    // Enable manual shadow map throttling so mobile GPUs don't re-render shadow maps every single frame!
    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;

    this._createSkyDome();
    this._createLights();
    this._createFog();

    this.glareEl = document.getElementById('sun-glare-layer');
    this.heatHazeEl = document.getElementById('heat-haze-layer');

    this.setTimeOfDay(0.0, true);
  }

  _createSkyDome() {
    const loader = new THREE.TextureLoader();
    const loadSky = (path) => {
      const tex = loader.load(path);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      return tex;
    };

    const noonTex = loadSky('./textures/sky_noon.webp');
    const asrTex = loadSky('./textures/sky_asr.webp');

    // Load real IBL environment maps for natural sky-tinted PBR reflections & ambient illumination
    this.envNoon = loader.load('./textures/env_noon.webp', (tex) => {
      tex.mapping = THREE.EquirectangularReflectionMapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      if (this.timeOfDay < 0.5) {
        this.scene.environment = tex;
        this.scene.environmentIntensity = 0.65;
      }
    });
    this.envAsr = loader.load('./textures/env_asr.webp', (tex) => {
      tex.mapping = THREE.EquirectangularReflectionMapping;
      tex.colorSpace = THREE.SRGBColorSpace;
    });

    const skyGeo = new THREE.SphereGeometry(920, 32, 20);
    this.skyUniforms = {
      uNoonMap: { value: noonTex },
      uAsrMap: { value: asrTex },
      uBlend: { value: 0.0 },
      uAzimOffset: { value: 0.0 },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uHorizonColor: { value: new THREE.Color('#e8d4b4') },
    };

    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: this.skyUniforms,
      vertexShader: /* glsl */ `
        varying vec3 vWorldDir;
        void main() {
          vWorldDir = position;
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uNoonMap;
        uniform sampler2D uAsrMap;
        uniform float uBlend;
        uniform float uAzimOffset;
        uniform vec3 uSunDir;
        uniform vec3 uHorizonColor;
        varying vec3 vWorldDir;

        const float PI = 3.141592653589793;
        const float INV_TWO_PI = 0.15915494309189535;
        const float INV_PI = 0.3183098861837907;

        void main() {
          vec3 dir = normalize(vWorldDir);

          // Exact 3D spherical projection -> zero seam or mipmap line at zenith!
          float u = fract(atan(dir.z, dir.x) * INV_TWO_PI + uAzimOffset);
          float v = clamp(0.5 + asin(clamp(dir.y, -1.0, 1.0)) * INV_PI, 0.002, 0.998);
          vec2 uv = vec2(u, v);

          vec3 colNoon = texture2D(uNoonMap, uv).rgb;
          vec3 colAsr = texture2D(uAsrMap, uv).rgb;
          vec3 skyCol = mix(colNoon, colAsr, uBlend);

          // Intense physical solar disc + atmospheric Mie glow at the exact 3D sunDirection!
          float sunCos = max(0.0, dot(dir, normalize(uSunDir)));
          float sunCore = smoothstep(0.99935, 0.99992, sunCos);
          float sunCorona = pow(sunCos, 64.0) * 0.55 + pow(sunCos, 10.0) * 0.22;
          vec3 sunTint = mix(vec3(1.0, 0.97, 0.88), vec3(1.0, 0.72, 0.36), uBlend);
          skyCol += sunTint * (sunCore * 1.65 + sunCorona);

          // Smooth aerial perspective horizon blend so distant dunes melt naturally into the sky
          float horizonFactor = smoothstep(0.16, -0.04, dir.y);
          skyCol = mix(skyCol, uHorizonColor, horizonFactor * 0.88);

          gl_FragColor = vec4(skyCol, 1.0);
        }
      `,
    });

    this.skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.skyMesh.frustumCulled = false;
    this.scene.add(this.skyMesh);
  }

  _createLights() {
    this.sunLight = new THREE.DirectionalLight(0xfff5dc, 3.25);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.camera.near = 2;
    this.sunLight.shadow.camera.far = 135;
    // Tight 34m shadow frustum centered on player -> 2x sharper shadows than old 48m frustum!
    const d = 34;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0005;
    this.sunLight.shadow.normalBias = 0.028;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    this.hemiLight = new THREE.HemisphereLight(0x92c4ee, 0xd2a56c, 1.15);
    this.scene.add(this.hemiLight);

    this.interiorBounceLight = new THREE.PointLight(0xf6d29c, 2.2, 22, 1.4);
    this.interiorBounceLight.position.set(0.0, 3.0, -18.0);
    this.scene.add(this.interiorBounceLight);

    this.sandBounceLight = new THREE.DirectionalLight(0xecc289, 0.55);
    this.sandBounceLight.position.set(-25, 10, 30);
    this.scene.add(this.sandBounceLight);
  }

  _createFog() {
    this.fog = new THREE.FogExp2(0xe6cfa8, 0.0029);
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
    this.renderer.shadowMap.needsUpdate = true;
  }

  setTimeOfDay(t, immediate = false) {
    const clamped = Math.max(0, Math.min(1, t));
    this.targetTimeOfDay = clamped;
    if (immediate) this._applyTimeValues(clamped);
  }

  _applyTimeValues(s) {
    this.timeOfDay = s;
    const warm = Math.pow(s, 1.15);

    this.skyUniforms.uBlend.value = warm;

    // Match the exact sun elevation of our Poly Haven HDRIs (48° at Noon -> 11° at Asr)
    const elevDeg = THREE.MathUtils.lerp(48.0, 11.5, s);
    const azimDeg = THREE.MathUtils.lerp(-138, -118, s);
    const elevRad = THREE.MathUtils.degToRad(elevDeg);
    const azimRad = THREE.MathUtils.degToRad(azimDeg);

    this.sunDirection.set(
      Math.cos(elevRad) * Math.sin(azimRad),
      Math.sin(elevRad),
      Math.cos(elevRad) * Math.cos(azimRad)
    ).normalize();

    this.skyUniforms.uSunDir.value.copy(this.sunDirection);

    // Align the equirectangular HDRI's U=0.6000 solar peak with the exact 3D sunDirection azimuth!
    const sunWorldAngle = Math.atan2(this.sunDirection.z, this.sunDirection.x); // [-PI, PI]
    this.skyUniforms.uAzimOffset.value = 0.6000 - sunWorldAngle / (Math.PI * 2.0);

    // Swap IBL environment map cleanly between Noon and Asr
    if (s >= 0.55 && this.envAsr && this.scene.environment !== this.envAsr) {
      this.scene.environment = this.envAsr;
    } else if (s < 0.55 && this.envNoon && this.scene.environment !== this.envNoon) {
      this.scene.environment = this.envNoon;
    }
    this.scene.environmentIntensity = THREE.MathUtils.lerp(0.65, 0.8, warm);

    this.sunLight.color.lerpColors(new THREE.Color('#fff7e4'), new THREE.Color('#ffaa52'), warm);
    this.sunLight.intensity = THREE.MathUtils.lerp(3.25, 2.95, s);

    this.hemiLight.color.lerpColors(new THREE.Color('#92c4ee'), new THREE.Color('#e29a58'), warm);
    this.hemiLight.groundColor.lerpColors(new THREE.Color('#d2a56c'), new THREE.Color('#995b2a'), warm);
    this.hemiLight.intensity = THREE.MathUtils.lerp(1.18, 0.96, s);

    this.sandBounceLight.color.lerpColors(new THREE.Color('#ecc289'), new THREE.Color('#df8b46'), warm);
    this.sandBounceLight.intensity = THREE.MathUtils.lerp(0.58, 0.45, s);
    this.sandBounceLight.position.set(-this.sunDirection.x * 40, 12, -this.sunDirection.z * 40);

    this.interiorBounceLight.color.lerpColors(new THREE.Color('#f6d29c'), new THREE.Color('#ffa852'), warm);
    this.interiorBounceLight.intensity = THREE.MathUtils.lerp(2.1, 2.45, warm);

    this.fog.color.lerpColors(new THREE.Color('#e6cfa8'), new THREE.Color('#df9b58'), warm);
    this.fog.density = THREE.MathUtils.lerp(0.0028, 0.0041, warm);
    this.skyUniforms.uHorizonColor.value.copy(this.fog.color);

    if (this.glareEl) {
      const g = Math.round(THREE.MathUtils.lerp(240, 174, warm));
      const b = Math.round(THREE.MathUtils.lerp(202, 98, warm));
      this.glareEl.style.setProperty('--sun-r', '255');
      this.glareEl.style.setProperty('--sun-g', String(g));
      this.glareEl.style.setProperty('--sun-b', String(b));
    }
    if (this.heatHazeEl) {
      this.heatHazeEl.style.opacity = String(THREE.MathUtils.lerp(0.45, 0.28, s).toFixed(2));
    }
    this.renderer.shadowMap.needsUpdate = true;
  }

  update(dt, elapsed, camera, playerPos, isInsideHouse) {
    this.skyMesh.position.copy(camera.position);

    const diff = this.targetTimeOfDay - this.timeOfDay;
    if (Math.abs(diff) > 0.0002) {
      this._applyTimeValues(this.timeOfDay + diff * Math.min(1, dt * 1.15));
    }

    const focusX = THREE.MathUtils.clamp(playerPos.x, -45, 45);
    const focusZ = THREE.MathUtils.clamp(playerPos.z, -45, 45);

    // Smart Shadow Map Throttling: only re-render shadow depth map when player moves >0.5m, sun shifts, or every 6th frame
    this._shadowFrameCounter++;
    const focusMovedSq =
      (focusX - this._lastShadowFocus.x) * (focusX - this._lastShadowFocus.x) +
      (focusZ - this._lastShadowFocus.z) * (focusZ - this._lastShadowFocus.z);
    const sunMovedSq = this._lastShadowSun.distanceToSquared(this.sunDirection);

    if (focusMovedSq > 0.25 || sunMovedSq > 0.0001 || this._shadowFrameCounter >= 6) {
      this._shadowFrameCounter = 0;
      this._lastShadowFocus.set(focusX, 0, focusZ);
      this._lastShadowSun.copy(this.sunDirection);
      this.sunLight.target.position.set(focusX, 0, focusZ);
      this.sunLight.position.set(
        focusX + this.sunDirection.x * 64,
        this.sunDirection.y * 64,
        focusZ + this.sunDirection.z * 64
      );
      this.renderer.shadowMap.needsUpdate = true;
    }

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

    const totalGlare = Math.min(1.0, glare * 0.88 + this.cutsceneGlareBoost);
    this.glareAmount += (totalGlare - this.glareAmount) * Math.min(1, dt * 6.5);
    if (this.glareEl) {
      this.glareEl.style.opacity = this.glareAmount > 0.008 ? this.glareAmount.toFixed(3) : '0';
    }

    const baseExp = isInsideHouse
      ? THREE.MathUtils.lerp(1.22, 1.3, this.timeOfDay)
      : THREE.MathUtils.lerp(1.04, 1.1, this.timeOfDay);
    this.targetExposure = baseExp + this.cutsceneGlareBoost * 0.65 - glare * 0.14;
    this.currentExposure += (this.targetExposure - this.currentExposure) * Math.min(1, dt * 2.8);
    this.renderer.toneMappingExposure = this.currentExposure;
  }
}
