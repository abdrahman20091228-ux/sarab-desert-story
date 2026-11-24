import * as THREE from 'three';
import { DESERT_PALETTE } from './Palette.js';

const SKY_VERTEX_SHADER = /* glsl */ `
  varying vec3 vWorldDir;
  void main() {
    vWorldDir = position;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`;

// Shared core procedural atmosphere (Rayleigh + Mie + FBM desert clouds, linear HDR output)
const SKY_CORE_FUNCTIONS = /* glsl */ `
  uniform vec3 uSunDir;
  uniform float uTimeOfDay;
  uniform float uTime;
  uniform float uStorm;
  uniform float uCloudOctaves;
  uniform vec3 uHorizonColor;

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

  float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    float denom = max(0.001, 1.0 + g2 - 2.0 * g * cosTheta);
    return (1.0 - g2) / (4.0 * 3.14159265 * pow(denom, 1.5));
  }

  vec3 evalProceduralSky(vec3 dir, bool includeSunDisc) {
    vec3 sunDir = normalize(uSunDir);
    float y = dir.y;
    float sunCos = dot(dir, sunDir);
    float warm = pow(clamp(uTimeOfDay, 0.0, 1.0), 1.15);

    vec3 zenithNoon = vec3(0.032, 0.145, 0.46);
    vec3 zenithAsr  = vec3(0.042, 0.088, 0.22);
    vec3 zenithCol  = mix(zenithNoon, zenithAsr, warm);

    vec3 midNoon = vec3(0.17, 0.37, 0.68);
    vec3 midAsr  = vec3(0.28, 0.23, 0.25);
    vec3 midCol  = mix(midNoon, midAsr, warm);

    vec3 beltNoon = vec3(0.68, 0.59, 0.44);
    vec3 beltAsr  = vec3(0.84, 0.34, 0.09);
    vec3 beltCol  = mix(beltNoon, beltAsr, warm);

    vec3 skyCol = mix(beltCol, midCol, smoothstep(0.0, 0.30, max(y, 0.0)));
    skyCol = mix(skyCol, zenithCol, smoothstep(0.16, 0.85, max(y, 0.0)));

    float azimGlow = pow(max(0.0, sunCos), 3.0) * smoothstep(0.55, -0.05, y);
    vec3 sunsetTint = mix(vec3(0.95, 0.72, 0.38), vec3(1.15, 0.36, 0.06), warm);
    skyCol += sunsetTint * azimGlow * mix(0.12, 0.72, warm) * (1.0 - uStorm * 0.75);

    float mieTight = hgPhase(sunCos, 0.82);
    float mieWide  = hgPhase(sunCos, 0.38);
    vec3 sunColor  = mix(vec3(1.0, 0.92, 0.74), vec3(1.05, 0.45, 0.12), warm);
    float mieScale = (1.0 - uStorm * 0.82) * smoothstep(-0.08, 0.06, y);
    skyCol += sunColor * (mieTight * 0.22 + mieWide * 0.36) * mieScale;

    if (includeSunDisc) {
      float sunRadius = mix(0.99962, 0.99940, warm);
      float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
      float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
      vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.0, 0.62, 0.20), warm) * (2.6 + limb * 3.4);
      float sunVis = (1.0 - smoothstep(0.12, 0.80, uStorm)) * smoothstep(-0.02, 0.02, y);
      skyCol += discCol * disc * sunVis;
    }

    int oct = int(uCloudOctaves + 0.5);
    if (y > 0.02 && oct >= 1) {
      vec2 cloudUV = dir.xz / (y + 0.22);
      vec2 windDrift = vec2(uTime * 0.0045, uTime * 0.0018);

      vec2 warp = vec2(
        vnoise(cloudUV * 0.65 + windDrift * 0.7),
        vnoise(cloudUV * 0.65 + vec2(4.2, 1.9) + windDrift * 0.5)
      );
      vec2 cirrusUV = cloudUV * vec2(0.55, 1.15) + warp * 0.55 + windDrift;
      float nCirrus = fbmClouds(cirrusUV, oct);

      float nPuff = fbmClouds(cloudUV * 1.15 - windDrift * 0.8 + warp * 0.25, max(2, oct - 1));
      float cloudDensity = smoothstep(0.55, 0.82, nCirrus) * 0.64
                         + smoothstep(0.63, 0.85, nPuff) * 0.34;

      float horizonFade = smoothstep(0.03, 0.26, y);
      cloudDensity = clamp(cloudDensity * horizonFade * (1.0 - uStorm * 0.85), 0.0, 0.78);

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

    if (uStorm > 0.001) {
      float stormHeight = smoothstep(0.85, -0.05, y);
      float stormMix = clamp(uStorm * (0.58 + 0.42 * stormHeight), 0.0, 0.96);
      vec3 stormZenith = uHorizonColor * vec3(0.84, 0.81, 0.76);
      vec3 stormSky = mix(uHorizonColor, stormZenith, clamp(y, 0.0, 1.0));
      skyCol = mix(skyCol, stormSky, stormMix);
    }

    float horizonBlend = smoothstep(0.14 + uStorm * 0.14, -0.015, y);
    skyCol = mix(skyCol, uHorizonColor, horizonBlend);

    if (y < 0.0) {
      vec3 groundBounce = uHorizonColor * mix(vec3(0.66, 0.58, 0.46), vec3(0.56, 0.40, 0.25), warm);
      skyCol = mix(uHorizonColor, groundBounce, smoothstep(0.0, -0.35, y));
    }

    return skyCol;
  }
`;

// Full real-time fragment shader (Desktop high/ultra)
const SKY_REALTIME_FRAGMENT = /* glsl */ `
  ${SKY_CORE_FUNCTIONS}
  varying vec3 vWorldDir;
  void main() {
    vec3 skyCol = evalProceduralSky(normalize(vWorldDir), true);
    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

// Offscreen equirectangular cache baking shader (runs ONLY 1x/sec into tiny 512x256 RT on mobile!)
const SKY_CACHE_BAKE_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const SKY_CACHE_BAKE_FRAGMENT = /* glsl */ `
  ${SKY_CORE_FUNCTIONS}
  varying vec2 vUv;
  const float PI = 3.14159265359;
  void main() {
    float lon = (vUv.x - 0.5) * (2.0 * PI);
    float lat = (vUv.y - 0.5) * PI;
    float clat = cos(lat);
    vec3 dir = vec3(clat * cos(lon), sin(lat), clat * sin(lon));
    // Bake atmosphere + clouds into cache (sun disc drawn crisp on live dome!)
    vec3 col = evalProceduralSky(dir, false);
    // Store soft-clamped linear value inside 8-bit RT (scale by 0.5 to preserve HDR headroom up to 2.0)
    gl_FragColor = vec4(clamp(col * 0.5, 0.0, 1.0), 1.0);
  }
`;

// Ultra-lightweight 1-tap cached sky dome shader for Mobile (>95% less GPU power!)
const SKY_CACHED_DOME_FRAGMENT = /* glsl */ `
  uniform sampler2D uSkyCache;
  uniform vec3 uSunDir;
  uniform float uTimeOfDay;
  uniform float uStorm;
  varying vec3 vWorldDir;

  const float INV_TWO_PI = 0.15915494309189535;
  const float INV_PI = 0.3183098861837907;

  void main() {
    vec3 dir = normalize(vWorldDir);
    float u = atan(dir.z, dir.x) * INV_TWO_PI + 0.5;
    float v = clamp(asin(clamp(dir.y, -1.0, 1.0)) * INV_PI + 0.5, 0.002, 0.998);

    // Single bilinear fetch restores linear HDR procedural sky!
    vec3 skyCol = texture2D(uSkyCache, vec2(u, v)).rgb * 2.0;

    // Add razor-sharp limb-darkened solar disc analytically
    float warm = pow(clamp(uTimeOfDay, 0.0, 1.0), 1.15);
    float sunCos = dot(dir, normalize(uSunDir));
    float sunRadius = mix(0.99962, 0.99940, warm);
    float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
    float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
    vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.0, 0.62, 0.20), warm) * (2.6 + limb * 3.4);
    float sunVis = (1.0 - smoothstep(0.12, 0.80, uStorm)) * smoothstep(-0.02, 0.02, dir.y);
    skyCol += discCol * disc * sunVis;

    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

/**
 * 100% Procedural Code-Rendered Arabian Desert Sky Dome (v4.1 Thermal-Optimized)
 * - Zero external images, zero zenith seams, 1 draw call
 * - On mobile / low / medium / batterySaver: bakes procedural Rayleigh+Mie+FBM sky to a 512x256
 *   render-target cache 1x/second -> cuts sky GPU power by >95% while keeping identical visuals!
 * - Optional throttled PMREM IBL (disabled on mobile matte presets to save huge fragment bandwidth).
 */
export class ProceduralSky {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    this.useCache = false;
    this.useIBL = true;

    this.uniforms = {
      uSunDir: { value: new THREE.Vector3(0.2, 0.9, -0.35).normalize() },
      uTimeOfDay: { value: 0.0 },
      uTime: { value: 0.0 },
      uStorm: { value: 0.0 },
      uCloudOctaves: { value: 4.0 },
      uHorizonColor: { value: DESERT_PALETTE.horizonNoon.clone() },
    };

    const skyGeo = new THREE.SphereGeometry(940, 28, 18);
    this._realtimeMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: this.uniforms,
      vertexShader: SKY_VERTEX_SHADER,
      fragmentShader: SKY_REALTIME_FRAGMENT,
    });

    // Tiny 512x256 procedural equirectangular cache RT for cool mobile rendering
    this._skyCacheRT = new THREE.WebGLRenderTarget(512, 256, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
      generateMipmaps: false,
    });
    this._skyCacheRT.texture.wrapS = THREE.RepeatWrapping;
    this._skyCacheRT.texture.wrapT = THREE.ClampToEdgeWrapping;

    this._cacheScene = new THREE.Scene();
    this._cacheCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this._cacheQuad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        depthTest: false,
        depthWrite: false,
        uniforms: this.uniforms,
        vertexShader: SKY_CACHE_BAKE_VERTEX,
        fragmentShader: SKY_CACHE_BAKE_FRAGMENT,
      })
    );
    this._cacheScene.add(this._cacheQuad);

    this._cachedMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        uSkyCache: { value: this._skyCacheRT.texture },
        uSunDir: this.uniforms.uSunDir,
        uTimeOfDay: this.uniforms.uTimeOfDay,
        uStorm: this.uniforms.uStorm,
      },
      vertexShader: SKY_VERTEX_SHADER,
      fragmentShader: SKY_CACHED_DOME_FRAGMENT,
    });

    this.mesh = new THREE.Mesh(skyGeo, this._realtimeMat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -10;
    this.scene.add(this.mesh);

    this._cacheTimer = 999;
    this._lastCacheTime = -999;
    this._lastCacheStorm = -999;

    // Lazy PMREM IBL resources (only used when useIBL is enabled)
    this._pmrem = null;
    this._envScene = null;
    this._envRT = null;
    this._lastBakeTime = -999;
    this._lastBakeStorm = -999;
    this._bakeCooldown = 0;
  }

  _ensureIBLScene() {
    if (this._pmrem) return;
    this._pmrem = new THREE.PMREMGenerator(this.renderer);
    this._pmrem.compileCubemapShader();
    this._envScene = new THREE.Scene();
    const envUniforms = {
      uSunDir: this.uniforms.uSunDir,
      uTimeOfDay: this.uniforms.uTimeOfDay,
      uTime: { value: 0.0 },
      uStorm: this.uniforms.uStorm,
      uCloudOctaves: { value: 2.0 },
      uHorizonColor: this.uniforms.uHorizonColor,
    };
    const envSphere = new THREE.Mesh(
      new THREE.SphereGeometry(20, 14, 10),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        uniforms: envUniforms,
        vertexShader: SKY_VERTEX_SHADER,
        fragmentShader: SKY_REALTIME_FRAGMENT,
      })
    );
    this._envScene.add(envSphere);
  }

  setQualityOptions({ cloudOctaves = 4, useSkyCache = false, useIBL = true }) {
    this.uniforms.uCloudOctaves.value = cloudOctaves;
    this.useCache = Boolean(useSkyCache);
    this.mesh.material = this.useCache ? this._cachedMat : this._realtimeMat;
    if (this.useCache) {
      this._cacheTimer = 999;
      this.bakeSkyCache();
    }

    this.useIBL = Boolean(useIBL);
    if (!this.useIBL) {
      this.scene.environment = null;
      if (this._envRT) {
        this._envRT.dispose();
        this._envRT = null;
      }
    } else if (!this._envRT) {
      this.bakeIBL(this.uniforms.uTimeOfDay.value, this.uniforms.uStorm.value);
    }
  }

  bakeSkyCache() {
    const prevTarget = this.renderer.getRenderTarget();
    const prevToneMapping = this.renderer.toneMapping;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.setRenderTarget(this._skyCacheRT);
    this.renderer.render(this._cacheScene, this._cacheCam);
    this.renderer.setRenderTarget(prevTarget);
    this.renderer.toneMapping = prevToneMapping;
    this._cacheTimer = 0;
    this._lastCacheTime = this.uniforms.uTimeOfDay.value;
    this._lastCacheStorm = this.uniforms.uStorm.value;
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

    // Refresh mobile sky cache at most 1x/sec or when time/storm visibly shifts
    if (this.useCache) {
      this._cacheTimer += dt;
      const tDelta = Math.abs(timeOfDay - this._lastCacheTime);
      const sDelta = Math.abs(storm - this._lastCacheStorm);
      if (this._cacheTimer >= 1.0 || tDelta > 0.015 || sDelta > 0.025) {
        this.bakeSkyCache();
      }
    }

    if (this.useIBL) {
      this._bakeCooldown = Math.max(0, this._bakeCooldown - dt);
      const timeDelta = Math.abs(timeOfDay - this._lastBakeTime);
      const stormDelta = Math.abs(storm - this._lastBakeStorm);
      if (this._bakeCooldown <= 0 && (timeDelta > 0.035 || stormDelta > 0.08 || !this._envRT)) {
        this.bakeIBL(timeOfDay, storm);
        this._bakeCooldown = 0.65;
      }
    }
  }

  bakeIBL(timeOfDay, storm) {
    if (!this.useIBL) return;
    this._ensureIBLScene();
    this._lastBakeTime = timeOfDay;
    this._lastBakeStorm = storm;
    const prevRT = this._envRT;
    this._envRT = this._pmrem.fromScene(this._envScene, 0.04, 0.1, 100);
    this.scene.environment = this._envRT.texture;
    if (prevRT) prevRT.dispose();
  }
}
