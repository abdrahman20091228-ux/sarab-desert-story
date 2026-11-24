import * as THREE from 'three';
import { DESERT_PALETTE } from './Palette.js';

const SKY_VERTEX_SHADER = /* glsl */ `
  varying vec3 vWorldDir;
  void main() {
    vWorldDir = position;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uSunDir;
  uniform float uTimeOfDay;
  uniform float uTime;
  uniform float uStorm;
  uniform float uCloudOctaves;
  uniform vec3 uHorizonColor;

  varying vec3 vWorldDir;

  // Fast texture-free 2D value noise (zero UV seams anywhere on the dome)
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbmClouds(vec2 p, int octaves) {
    float val = 0.0;
    float amp = 0.52;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      if (i >= octaves) break;
      val += amp * vnoise(p);
      p = rot * p * 2.07 + vec2(1.7, 9.2);
      amp *= 0.5;
    }
    return val;
  }

  // Henyey-Greenstein phase function for atmospheric Mie aerosol scattering
  float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    float denom = max(0.001, 1.0 + g2 - 2.0 * g * cosTheta);
    return (1.0 - g2) / (4.0 * 3.14159265 * pow(denom, 1.5));
  }

  void main() {
    vec3 dir = normalize(vWorldDir);
    vec3 sunDir = normalize(uSunDir);
    float y = dir.y;
    float sunCos = dot(dir, sunDir);
    float sunElev = clamp(sunDir.y, 0.04, 1.0);
    float warm = pow(clamp(uTimeOfDay, 0.0, 1.0), 1.15);

    // 1. Physically inspired Rayleigh + Desert Aerosol optical depth
    float airMass = 1.0 / (max(y, 0.015) + 0.14 * pow(max(y, 0.0) + 0.12, -0.65) * 0.0 + 0.11);
    float zenithFactor = clamp(pow(max(y, 0.0), 0.58), 0.0, 1.0);

    // Rich clear Arabian noon azure -> deep golden-hour cobalt/slate at Asr (linear space)
    vec3 zenithNoon = vec3(0.032, 0.145, 0.46);
    vec3 zenithAsr  = vec3(0.042, 0.088, 0.22);
    vec3 zenithCol  = mix(zenithNoon, zenithAsr, warm);

    // Mid-sky Rayleigh scattering band (linear space)
    vec3 midNoon = vec3(0.17, 0.37, 0.68);
    vec3 midAsr  = vec3(0.28, 0.23, 0.25);
    vec3 midCol  = mix(midNoon, midAsr, warm);

    // Warm desert aerosol belt just above horizon (linear space)
    vec3 beltNoon = vec3(0.68, 0.59, 0.44);
    vec3 beltAsr  = vec3(0.84, 0.34, 0.09);
    vec3 beltCol  = mix(beltNoon, beltAsr, warm);

    // Vertical sky gradient with natural optical thickness curve
    vec3 skyCol = mix(beltCol, midCol, smoothstep(0.0, 0.30, max(y, 0.0)));
    skyCol = mix(skyCol, zenithCol, smoothstep(0.16, 0.85, max(y, 0.0)));

    // Azimuthal warm sunset glow concentrated in the sun's hemisphere at Asr
    float azimGlow = pow(max(0.0, sunCos), 3.0) * smoothstep(0.55, -0.05, y);
    vec3 sunsetTint = mix(vec3(0.95, 0.72, 0.38), vec3(1.15, 0.36, 0.06), warm);
    skyCol += sunsetTint * azimGlow * mix(0.12, 0.72, warm) * (1.0 - uStorm * 0.75);

    // 2. Atmospheric Mie forward-scattering (desert dust halo around sun)
    float mieTight = hgPhase(sunCos, 0.82);
    float mieWide  = hgPhase(sunCos, 0.38);
    vec3 sunColor  = mix(vec3(1.0, 0.92, 0.74), vec3(1.05, 0.45, 0.12), warm);
    float mieScale = (1.0 - uStorm * 0.82) * smoothstep(-0.08, 0.06, y);
    skyCol += sunColor * (mieTight * 0.22 + mieWide * 0.36) * mieScale;

    // 3. Limb-darkened Solar Disc (realistic angular diameter, softens in dust storm)
    float sunRadius = mix(0.99962, 0.99940, warm);
    float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
    float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
    vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.0, 0.62, 0.20), warm) * (2.6 + limb * 3.4);
    float sunVis = (1.0 - smoothstep(0.12, 0.80, uStorm)) * smoothstep(-0.02, 0.02, y);
    skyCol += discCol * disc * sunVis;

    // 4. Procedural Desert Cirrus & High Altocumulus Clouds (curved sky plane, drifts gently)
    int oct = int(uCloudOctaves + 0.5);
    if (y > 0.02 && oct >= 1) {
      // Curved projection prevents harsh stretching near horizon
      vec2 cloudUV = dir.xz / (y + 0.22);
      vec2 windDrift = vec2(uTime * 0.0045, uTime * 0.0018);

      // High delicate wispy cirrus streaks (warped along desert trade wind)
      vec2 warp = vec2(
        vnoise(cloudUV * 0.65 + windDrift * 0.7),
        vnoise(cloudUV * 0.65 + vec2(4.2, 1.9) + windDrift * 0.5)
      );
      vec2 cirrusUV = cloudUV * vec2(0.55, 1.15) + warp * 0.55 + windDrift;
      float nCirrus = fbmClouds(cirrusUV, oct);

      // Secondary sparse altocumulus puffs (kept light: ~18-24% desert coverage)
      float nPuff = fbmClouds(cloudUV * 1.15 - windDrift * 0.8 + warp * 0.25, max(2, oct - 1));
      float cloudDensity = smoothstep(0.55, 0.82, nCirrus) * 0.64
                         + smoothstep(0.63, 0.85, nPuff) * 0.34;

      // Fade clouds smoothly near the horizon so they vanish into desert dust haze
      float horizonFade = smoothstep(0.03, 0.26, y);
      cloudDensity = clamp(cloudDensity * horizonFade * (1.0 - uStorm * 0.85), 0.0, 0.78);

      // Sun-side silver/gold lining + shadow underside (linear space)
      float sunHighlight = pow(max(0.0, sunCos), 6.0);
      float selfShade = smoothstep(0.15, 0.75, nPuff);
      vec3 cloudLitNoon = vec3(0.92, 0.90, 0.84);
      vec3 cloudLitAsr  = vec3(1.05, 0.56, 0.19);
      vec3 cloudShdNoon = vec3(0.38, 0.48, 0.62);
      vec3 cloudShdAsr  = vec3(0.24, 0.16, 0.18);

      vec3 cLit = mix(cloudLitNoon, cloudLitAsr, warm);
      vec3 cShd = mix(cloudShdNoon, cloudShdAsr, warm);
      vec3 cloudCol = mix(cShd, cLit, 0.55 + 0.45 * (1.0 - selfShade));
      cloudCol += sunColor * sunHighlight * mix(0.26, 0.72, warm);

      skyCol = mix(skyCol, cloudCol, cloudDensity);
    }

    // 5. Dust Storm Atmospheric Extinction (dust rises from horizon to engulf sky)
    if (uStorm > 0.001) {
      float stormHeight = smoothstep(0.85, -0.05, y);
      float stormMix = clamp(uStorm * (0.58 + 0.42 * stormHeight), 0.0, 0.96);
      vec3 stormZenith = uHorizonColor * vec3(0.84, 0.81, 0.76);
      vec3 stormSky = mix(uHorizonColor, stormZenith, clamp(y, 0.0, 1.0));
      skyCol = mix(skyCol, stormSky, stormMix);
    }

    // 6. Seamless Horizon-to-Fog Melt (matches scene.fog.color identically!)
    float horizonBlend = smoothstep(0.14 + uStorm * 0.14, -0.015, y);
    skyCol = mix(skyCol, uHorizonColor, horizonBlend);

    // Subtle ground hemisphere darkening below horizon (helps PMREM IBL ground bounce)
    if (y < 0.0) {
      vec3 groundBounce = uHorizonColor * mix(vec3(0.66, 0.58, 0.46), vec3(0.56, 0.40, 0.25), warm);
      skyCol = mix(uHorizonColor, groundBounce, smoothstep(0.0, -0.35, y));
    }

    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

/**
 * 100% Procedural Code-Rendered Arabian Desert Sky Dome + Throttled PMREM IBL
 * - Zero image textures, zero zenith seams, 1 draw call
 * - Analytical Rayleigh + Mie atmospheric scattering + desert dust turbidity
 * - Limb-darkened sun disc + drifting FBM cirrus/altocumulus clouds
 * - Seamless horizon color shared with FogExp2
 */
export class ProceduralSky {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    this.uniforms = {
      uSunDir: { value: new THREE.Vector3(0.2, 0.9, -0.35).normalize() },
      uTimeOfDay: { value: 0.0 },
      uTime: { value: 0.0 },
      uStorm: { value: 0.0 },
      uCloudOctaves: { value: 4.0 },
      uHorizonColor: { value: DESERT_PALETTE.horizonNoon.clone() },
    };

    const skyGeo = new THREE.SphereGeometry(940, 32, 20);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: this.uniforms,
      vertexShader: SKY_VERTEX_SHADER,
      fragmentShader: SKY_FRAGMENT_SHADER,
    });

    this.mesh = new THREE.Mesh(skyGeo, skyMat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -10;
    this.scene.add(this.mesh);

    // Offscreen lightweight scene for throttled PMREM IBL baking (keeps reflections 100% synced with sky!)
    this._pmrem = new THREE.PMREMGenerator(this.renderer);
    this._pmrem.compileCubemapShader();
    this._envScene = new THREE.Scene();
    this._envUniforms = {
      uSunDir: this.uniforms.uSunDir,
      uTimeOfDay: this.uniforms.uTimeOfDay,
      uTime: { value: 0.0 },
      uStorm: this.uniforms.uStorm,
      uCloudOctaves: { value: 2.0 },
      uHorizonColor: this.uniforms.uHorizonColor,
    };
    const envSphere = new THREE.Mesh(
      new THREE.SphereGeometry(20, 16, 12),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        uniforms: this._envUniforms,
        vertexShader: SKY_VERTEX_SHADER,
        fragmentShader: SKY_FRAGMENT_SHADER,
      })
    );
    this._envScene.add(envSphere);

    this._envRT = null;
    this._lastBakeTime = -999;
    this._lastBakeStorm = -999;
    this._bakeCooldown = 0;
  }

  setCloudOctaves(octaves) {
    this.uniforms.uCloudOctaves.value = octaves;
  }

  computeHorizonColor(timeOfDay, storm, outColor) {
    const warm = Math.pow(THREE.MathUtils.clamp(timeOfDay, 0, 1), 1.15);
    outColor.lerpColors(DESERT_PALETTE.horizonNoon, DESERT_PALETTE.horizonAsr, warm);
    if (storm > 0.001) {
      outColor.lerp(DESERT_PALETTE.horizonStorm, THREE.MathUtils.clamp(storm * 0.92, 0, 0.95));
    }
    return outColor;
  }

  update(dt, elapsed, cameraPos, sunDir, timeOfDay, storm) {
    this.mesh.position.copy(cameraPos);
    this.uniforms.uSunDir.value.copy(sunDir);
    this.uniforms.uTimeOfDay.value = timeOfDay;
    this.uniforms.uTime.value = elapsed;
    this.uniforms.uStorm.value = storm;
    this.computeHorizonColor(timeOfDay, storm, this.uniforms.uHorizonColor.value);

    // Refresh PMREM IBL only when time changes > 0.025 or storm changes > 0.06 (zero per-frame cost!)
    this._bakeCooldown = Math.max(0, this._bakeCooldown - dt);
    const timeDelta = Math.abs(timeOfDay - this._lastBakeTime);
    const stormDelta = Math.abs(storm - this._lastBakeStorm);
    if (this._bakeCooldown <= 0 && (timeDelta > 0.025 || stormDelta > 0.06 || !this._envRT)) {
      this.bakeIBL(timeOfDay, storm);
      this._bakeCooldown = 0.45;
    }
  }

  bakeIBL(timeOfDay, storm) {
    this._lastBakeTime = timeOfDay;
    this._lastBakeStorm = storm;
    const prevRT = this._envRT;
    this._envRT = this._pmrem.fromScene(this._envScene, 0.04, 0.1, 100);
    this.scene.environment = this._envRT.texture;
    if (prevRT) prevRT.dispose();
  }
}
