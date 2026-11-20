import * as THREE from 'three';

/**
 * Real Photographic 360° Desert Sky Dome + Smooth Noon -> Asr Crossfade Lighting.
 * Uses real high-resolution seamless equirectangular sky photography (sky_noon.jpg & sky_asr.jpg)
 * mapped across the entire sky sphere with zero procedural plastic look!
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
    const loader = new THREE.TextureLoader();
    const loadSky = (path) => {
      const tex = loader.load(path);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    };

    const noonTex = loadSky('./textures/sky_noon.jpg');
    const asrTex = loadSky('./textures/sky_asr.jpg');

    const skyGeo = new THREE.SphereGeometry(920, 28, 16);
    this.skyUniforms = {
      uNoonMap: { value: noonTex },
      uAsrMap: { value: asrTex },
      uBlend: { value: 0.0 },
      uRotation: { value: 0.0 },
    };

    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: this.skyUniforms,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uNoonMap;
        uniform sampler2D uAsrMap;
        uniform float uBlend;
        uniform float uRotation;
        varying vec2 vUv;

        void main() {
          vec2 uv = vec2(fract(vUv.x + uRotation), vUv.y);
          vec3 colNoon = texture2D(uNoonMap, uv).rgb;
          vec3 colAsr = texture2D(uAsrMap, uv).rgb;
          vec3 finalCol = mix(colNoon, colAsr, uBlend);
          gl_FragColor = vec4(finalCol, 1.0);
        }
      `,
    });

    this.skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.skyMesh.rotation.y = 1.15;
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

    this.hemiLight = new THREE.HemisphereLight(0x92c4ee, 0xd2a56c, 1.2);
    this.scene.add(this.hemiLight);

    this.interiorBounceLight = new THREE.PointLight(0xf6d29c, 2.2, 22, 1.4);
    this.interiorBounceLight.position.set(0.0, 3.0, -18.0);
    this.scene.add(this.interiorBounceLight);

    this.sandBounceLight = new THREE.DirectionalLight(0xecc289, 0.55);
    this.sandBounceLight.position.set(-25, 10, 30);
    this.scene.add(this.sandBounceLight);
  }

  _createFog() {
    this.fog = new THREE.FogExp2(0xe8d4b4, 0.0028);
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

  setTimeOfDay(t, immediate = false) {
    const clamped = Math.max(0, Math.min(1, t));
    this.targetTimeOfDay = clamped;
    if (immediate) this._applyTimeValues(clamped);
  }

  _applyTimeValues(s) {
    this.timeOfDay = s;
    const warm = Math.pow(s, 1.2);

    this.skyUniforms.uBlend.value = warm;

    const elevDeg = THREE.MathUtils.lerp(64, 15, s);
    const azimDeg = THREE.MathUtils.lerp(-148, -128, s);
    const elevRad = THREE.MathUtils.degToRad(elevDeg);
    const azimRad = THREE.MathUtils.degToRad(azimDeg);

    this.sunDirection.set(
      Math.cos(elevRad) * Math.sin(azimRad),
      Math.sin(elevRad),
      Math.cos(elevRad) * Math.cos(azimRad)
    ).normalize();

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

    this.fog.color.lerpColors(new THREE.Color('#e8d4b4'), new THREE.Color('#e2a562'), warm);
    this.fog.density = THREE.MathUtils.lerp(0.0026, 0.0039, warm);

    if (this.glareEl) {
      const g = Math.round(THREE.MathUtils.lerp(240, 178, warm));
      const b = Math.round(THREE.MathUtils.lerp(202, 102, warm));
      this.glareEl.style.setProperty('--sun-r', '255');
      this.glareEl.style.setProperty('--sun-g', String(g));
      this.glareEl.style.setProperty('--sun-b', String(b));
    }
    if (this.heatHazeEl) {
      this.heatHazeEl.style.opacity = String(THREE.MathUtils.lerp(0.48, 0.32, s).toFixed(2));
    }
  }

  update(dt, elapsed, camera, playerPos, isInsideHouse) {
    this.skyMesh.position.copy(camera.position);
    // Ultra-subtle natural cloud drift across the real photographic sky
    this.skyUniforms.uRotation.value = elapsed * 0.0007;

    const diff = this.targetTimeOfDay - this.timeOfDay;
    if (Math.abs(diff) > 0.0002) {
      this._applyTimeValues(this.timeOfDay + diff * Math.min(1, dt * 1.15));
    }

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
