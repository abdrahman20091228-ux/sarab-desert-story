import * as THREE from 'three';

/**
 * Physically inspired Desert Atmosphere & Dynamic/Baked Lighting System.
 * Smoothly transitions from harsh blinding Noon (timeOfDay = 0)
 * to deep warm amber Asr Golden Hour (timeOfDay = 1), matching our visual references.
 */
export class SkyLightingSystem {
  constructor(scene, renderer, settings) {
    this.scene = scene;
    this.renderer = renderer;
    this.settings = settings;

    this.timeOfDay = 0.0; // 0.0 = 12:15 Noon, 1.0 = 16:45 Asr
    this.sunDirection = new THREE.Vector3(0.2, 0.9, -0.35).normalize();
    this.glareAmount = 0;
    this.targetExposure = 1.08;
    this.currentExposure = 1.08;
    this.cutsceneGlareBoost = 0;

    this._tmpVec = new THREE.Vector3();
    this._camDir = new THREE.Vector3();

    this._createSkyDome();
    this._createLights();
    this._createFog();

    this.glareEl = document.getElementById('sun-glare-layer');
    this.heatHazeEl = document.getElementById('heat-haze-layer');

    this.setTimeOfDay(0.0);
  }

  _createSkyDome() {
    const skyGeo = new THREE.SphereGeometry(900, 36, 20);
    this.skyUniforms = {
      uSunDir: { value: this.sunDirection.clone() },
      uZenithColor: { value: new THREE.Color('#2364ae') },
      uMidSkyColor: { value: new THREE.Color('#7db0dc') },
      uHorizonColor: { value: new THREE.Color('#edd9b8') },
      uSunColor: { value: new THREE.Color('#fff9e6') },
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
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        float fbm(vec2 p) {
          float v = 0.0;
          float amp = 0.5;
          for (int i = 0; i < 4; i++) {
            v += amp * noise(p);
            p = p * 2.05 + vec2(13.1, 7.7);
            amp *= 0.5;
          }
          return v;
        }

        void main() {
          vec3 dir = normalize(vWorldDir);
          float elev = clamp(dir.y, 0.0, 1.0);

          // Rich three-stop atmospheric sky gradient
          vec3 sky = mix(uHorizonColor, uMidSkyColor, smoothstep(0.0, 0.28, elev));
          sky = mix(sky, uZenithColor, smoothstep(0.22, 0.85, elev));

          // Desert dusty horizon band
          float dustBand = pow(1.0 - elev, 5.5) * uHazeDensity;
          sky = mix(sky, uHorizonColor * 1.04, clamp(dustBand, 0.0, 0.88));

          // Subtle high-altitude desert cirrus cloud wisps
          if (dir.y > 0.02) {
            vec2 cloudUV = dir.xz / (dir.y + 0.16) * 0.9 + vec2(uTime * 0.0045, uTime * 0.002);
            float c = fbm(cloudUV * vec2(1.4, 0.65));
            float wisps = smoothstep(0.54, 0.84, c) * smoothstep(0.02, 0.22, dir.y) * (1.0 - smoothstep(0.65, 0.95, dir.y));
            vec3 cloudCol = mix(uHorizonColor * 1.08, uSunColor, 0.45);
            sky = mix(sky, cloudCol, wisps * 0.34);
          }

          // Sun disk & Mie atmospheric forward scattering glow
          float sunDot = max(dot(dir, normalize(uSunDir)), 0.0);
          float wideGlow = pow(sunDot, 6.0) * (0.28 + uMieStrength * 0.45);
          float tightGlow = pow(sunDot, 64.0) * (0.65 + uMieStrength * 0.55);
          float sunDisc = smoothstep(0.9983, 0.99945, sunDot) * 2.6;

          sky += uSunColor * (wideGlow * 0.55 + tightGlow * 0.85 + sunDisc);

          // Below horizon blends cleanly into desert fog color
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
    // Primary Sun Directional Light
    this.sunLight = new THREE.DirectionalLight(0xfff5dc, 3.2);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.near = 2;
    this.sunLight.shadow.camera.far = 150;
    const d = 46;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0005;
    this.sunLight.shadow.normalBias = 0.03;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    // Baked-style Global Illumination: Sky + Warm Sunlit Sand Bounce Hemisphere Light
    this.hemiLight = new THREE.HemisphereLight(0x8ec2f0, 0xc79254, 1.05);
    this.scene.add(this.hemiLight);

    // Subtle warm bounce light inside the abandoned house (simulates sunlit sand bounce through doorway/windows)
    this.interiorBounceLight = new THREE.PointLight(0xf3ba72, 1.4, 16, 1.5);
    this.interiorBounceLight.position.set(0.2, 2.2, -12.0);
    this.scene.add(this.interiorBounceLight);

    // Warm subtle rim/fill directional from opposite horizon (sand albedo radiosity bounce!)
    this.sandBounceLight = new THREE.DirectionalLight(0xe6ad68, 0.55);
    this.sandBounceLight.position.set(-25, 10, 30);
    this.scene.add(this.sandBounceLight);
  }

  _createFog() {
    this.fog = new THREE.FogExp2(0xe6cfa8, 0.0032);
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
   * t = 0.0 => 12:15 Noon (bright zenith azure sky, harsh golden-white sand, short sharp shadows)
   * t = 1.0 => 16:45 Asr Golden Hour (low molten amber sun, long dramatic shadows, deep apricot haze)
   */
  setTimeOfDay(t) {
    this.timeOfDay = Math.max(0, Math.min(1, t));
    const s = this.timeOfDay;
    // Ease-in curve so noon stays crisp early, then warms dramatically toward Asr
    const warm = Math.pow(s, 1.25);

    // Sun Elevation: 66° at Noon -> 15° at Asr
    // Sun Azimuth: sweeps smoothly across western dunes (visible behind/beside outpost at Asr!)
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

    // Sky palette interpolation (matched tightly to desert_reference_moodboard & desert_asr_reference!)
    const noonZenith = new THREE.Color('#2366b2');
    const asrZenith = new THREE.Color('#6b5a4b');
    this.skyUniforms.uZenithColor.value.lerpColors(noonZenith, asrZenith, warm);

    const noonMid = new THREE.Color('#80b4de');
    const asrMid = new THREE.Color('#d49552');
    this.skyUniforms.uMidSkyColor.value.lerpColors(noonMid, asrMid, warm);

    const noonHorizon = new THREE.Color('#efe0c5');
    const asrHorizon = new THREE.Color('#f4bc74');
    this.skyUniforms.uHorizonColor.value.lerpColors(noonHorizon, asrHorizon, warm);

    const noonSunCol = new THREE.Color('#fffbe8');
    const asrSunCol = new THREE.Color('#ffd082');
    this.skyUniforms.uSunColor.value.lerpColors(noonSunCol, asrSunCol, warm);

    this.skyUniforms.uMieStrength.value = THREE.MathUtils.lerp(0.42, 0.96, warm);
    this.skyUniforms.uHazeDensity.value = THREE.MathUtils.lerp(0.32, 0.62, warm);

    // Directional Sun Light
    const noonLight = new THREE.Color('#fff7e4');
    const asrLight = new THREE.Color('#ffb15c');
    this.sunLight.color.lerpColors(noonLight, asrLight, warm);
    this.sunLight.intensity = THREE.MathUtils.lerp(3.25, 2.9, s);

    // Hemisphere GI Bounce
    const noonSkyHemi = new THREE.Color('#92c4ee');
    const asrSkyHemi = new THREE.Color('#dfa062');
    this.hemiLight.color.lerpColors(noonSkyHemi, asrSkyHemi, warm);

    const noonGroundHemi = new THREE.Color('#d2a56c');
    const asrGroundHemi = new THREE.Color('#995f2e');
    this.hemiLight.groundColor.lerpColors(noonGroundHemi, asrGroundHemi, warm);
    this.hemiLight.intensity = THREE.MathUtils.lerp(1.18, 0.94, s);

    // Sand radiosity bounce light
    this.sandBounceLight.color.lerpColors(new THREE.Color('#ecc289'), new THREE.Color('#df8b46'), warm);
    this.sandBounceLight.intensity = THREE.MathUtils.lerp(0.62, 0.48, s);
    this.sandBounceLight.position.set(
      -this.sunDirection.x * 40,
      12,
      -this.sunDirection.z * 40
    );

    // Interior warm bounce (bounces warm sunlit sand glow onto interior ceiling & walls!)
    this.interiorBounceLight.color.lerpColors(new THREE.Color('#f6d29c'), new THREE.Color('#ffa852'), warm);
    this.interiorBounceLight.intensity = THREE.MathUtils.lerp(1.75, 2.05, warm);

    // Fog matches horizon dust seamlessly so far dunes blend smoothly into sky!
    const fogNoon = new THREE.Color('#ecdbb9');
    const fogAsr = new THREE.Color('#e3a764');
    this.fog.color.lerpColors(fogNoon, fogAsr, warm);
    this.fog.density = THREE.MathUtils.lerp(0.0031, 0.0046, warm);

    // Update CSS sun flare tint
    if (this.glareEl) {
      const r = Math.round(THREE.MathUtils.lerp(255, 255, warm));
      const g = Math.round(THREE.MathUtils.lerp(240, 178, warm));
      const b = Math.round(THREE.MathUtils.lerp(202, 102, warm));
      this.glareEl.style.setProperty('--sun-r', String(r));
      this.glareEl.style.setProperty('--sun-g', String(g));
      this.glareEl.style.setProperty('--sun-b', String(b));
    }
    if (this.heatHazeEl) {
      this.heatHazeEl.style.opacity = String(THREE.MathUtils.lerp(0.62, 0.42, s).toFixed(2));
    }
  }

  update(dt, elapsed, camera, playerPos, isInsideHouse) {
    this.skyUniforms.uTime.value = elapsed;

    // Keep sky dome centered on camera
    this.skyMesh.position.copy(camera.position);

    // Keep shadow frustum smoothly locked to the outpost + player midpoint so shadows stay crisp!
    const focusX = THREE.MathUtils.clamp(playerPos.x * 0.55, -24, 24);
    const focusZ = THREE.MathUtils.clamp((playerPos.z - 8) * 0.55 - 4, -30, 16);
    this.sunLight.target.position.set(focusX, 0, focusZ);
    this.sunLight.position.set(
      focusX + this.sunDirection.x * 65,
      this.sunDirection.y * 65,
      focusZ + this.sunDirection.z * 65
    );

    // Compute Sun Screen Projection & Optical Glare
    camera.getWorldDirection(this._camDir);
    const sunDot = this._camDir.dot(this.sunDirection);
    const flareEnabled = this.settings.data.sunFlare;

    let glare = 0;
    if (flareEnabled && !isInsideHouse && sunDot > 0.35) {
      glare = Math.pow((sunDot - 0.35) / 0.65, 2.2);
      // Project sun far point into NDC for accurate screen-space flare position
      this._tmpVec.copy(camera.position).addScaledVector(this.sunDirection, 400).project(camera);
      const sx = (this._tmpVec.x * 0.5 + 0.5) * 100;
      const sy = (-this._tmpVec.y * 0.5 + 0.5) * 100;
      if (this.glareEl) {
        this.glareEl.style.setProperty('--sun-x', `${sx.toFixed(1)}%`);
        this.glareEl.style.setProperty('--sun-y', `${sy.toFixed(1)}%`);
      }
    }

    const totalGlare = Math.min(1.0, glare * 0.92 + this.cutsceneGlareBoost);
    this.glareAmount += (totalGlare - this.glareAmount) * Math.min(1, dt * 6.5);

    if (this.glareEl) {
      this.glareEl.style.opacity = this.glareAmount > 0.008 ? this.glareAmount.toFixed(3) : '0';
    }

    // Physically inspired Eye Adaptation:
    // - Bright outside noon: ~1.04
    // - Looking straight into blazing sun: brief overexposure spike then squinting dim
    // - Inside shaded adobe house: pupils dilate (~1.26) so interior props shine clearly
    const baseExp = isInsideHouse
      ? THREE.MathUtils.lerp(1.24, 1.32, this.timeOfDay)
      : THREE.MathUtils.lerp(1.05, 1.12, this.timeOfDay);
    this.targetExposure = baseExp + this.cutsceneGlareBoost * 0.72 - glare * 0.14;
    this.currentExposure += (this.targetExposure - this.currentExposure) * Math.min(1, dt * 2.6);
    this.renderer.toneMappingExposure = this.currentExposure;
  }
}
