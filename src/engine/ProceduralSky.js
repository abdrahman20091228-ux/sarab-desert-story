import * as THREE from 'three';
import { DESERT_PALETTE, STAGE_ATMOSPHERES } from './Palette.js';

const SKY_VERTEX_SHADER = /* glsl */ `
  varying vec3 vWorldDir;
  void main() {
    vWorldDir = position;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`;

// Shared core procedural atmosphere (Noon -> Afternoon -> Sunset/Dusk -> Starry Milky Way & Crescent Moon Night!)
const SKY_CORE_FUNCTIONS = /* glsl */ `
  uniform vec3 uSunDir;
  uniform float uSkyMode; // 0=Noon, 1=Afternoon, 2=Sunset/Dusk, 3=Night
  uniform float uTime;
  uniform float uStorm;
  uniform float uCloudOctaves;
  uniform vec3 uHorizonColor;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  vec3 hash33(vec3 p) {
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.xxy + p.yxx) * p.zyx);
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

  // Analytical crisp twinkling star layer on unit sphere cube-grid
  vec3 evalStarLayer(vec3 dir, float scale, float threshold, float brightness, float timeVal) {
    vec3 p = dir * scale;
    vec3 cell = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 rnd = hash33(cell);
    if (rnd.x < threshold) return vec3(0.0);
    vec3 offset = (rnd - 0.5) * 0.58;
    float d = length(f - offset);
    float core = smoothstep(0.16, 0.015, d);
    float twinkle = 0.72 + 0.28 * sin(timeVal * (1.8 + rnd.y * 3.8) + rnd.z * 62.8);
    // Natural star temperatures (warm gold -> pure white -> pale blue-white)
    vec3 starCol = mix(vec3(1.0, 0.86, 0.68), vec3(0.76, 0.88, 1.0), rnd.y);
    return starCol * core * brightness * twinkle;
  }

  // Luminous Milky Way galaxy band + dust lanes arching over the Arabian desert
  vec3 evalMilkyWay(vec3 dir, float nightWeight) {
    if (nightWeight < 0.01 || dir.y < -0.05) return vec3(0.0);
    // Arch diagonally right across the northern desert sky above the Abandoned House!
    vec3 galNormal = normalize(vec3(0.76, -0.58, -0.29));
    vec3 galRight  = normalize(cross(vec3(0.0, 1.0, 0.0), galNormal));
    vec3 galUp     = normalize(cross(galNormal, galRight));

    float lat = dot(dir, galNormal);
    float lon = atan(dot(dir, galUp), dot(dir, galRight));

    float band = exp(-lat * lat * 15.0);
    float coreMask = exp(-lat * lat * 42.0) * (0.58 + 0.42 * cos(lon * 1.0 + 0.3));

    vec2 gUV = vec2(lon * 2.4, lat * 6.2);
    float neb1 = fbmClouds(gUV + vec2(1.4, 3.1), 4);
    float neb2 = fbmClouds(gUV * 2.3 - vec2(4.2, 0.8), 3);
    float dustLane = smoothstep(0.36, 0.68, fbmClouds(gUV * 1.9 + vec2(7.3, 2.2), 3));

    float glow = band * smoothstep(0.26, 0.84, neb1) * (1.0 - dustLane * 0.52);
    float fineCloud = coreMask * smoothstep(0.34, 0.84, neb2) * (1.0 - dustLane * 0.40);

    vec3 outerCol = vec3(0.14, 0.22, 0.42);
    vec3 coreCol  = vec3(0.50, 0.44, 0.58);
    vec3 mw = outerCol * glow * 0.85 + coreCol * fineCloud * 1.05;

    float horizonFade = smoothstep(0.02, 0.28, dir.y);
    return mw * horizonFade * nightWeight;
  }

  // Razor-sharp Crescent Moon + subtle lunar halo
  vec3 evalCrescentMoon(vec3 dir, vec3 moonDir, float nightWeight) {
    if (nightWeight < 0.01) return vec3(0.0);
    vec3 mDir = normalize(moonDir);
    vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), mDir));
    vec3 up = normalize(cross(mDir, right));

    float cosA = dot(dir, mDir);
    // Soft atmospheric lunar halo
    float halo = pow(max(0.0, cosA), 28.0) * 0.16 + pow(max(0.0, cosA), 240.0) * 0.35;
    vec3 res = vec3(0.45, 0.62, 0.92) * halo;

    if (cosA > 0.994) {
      // Local tangent plane coordinates around moon center
      vec3 delta = dir - mDir * cosA;
      vec2 mp = vec2(dot(delta, right), dot(delta, up));
      float moonR = 0.0245;
      float dMain = length(mp);
      float outerDisc = smoothstep(moonR + 0.0014, moonR - 0.0014, dMain);

      // Offset shadow sphere carves a sharp Arabian crescent (هلال)!
      vec2 shadowOffset = vec2(0.0125, 0.0085);
      float dShadow = length(mp - shadowOffset);
      float shadowCut = smoothstep(moonR * 0.90 - 0.0014, moonR * 0.90 + 0.0014, dShadow);

      float crescent = outerDisc * shadowCut;
      // Subtle earthshine on dark side of moon disc
      float earthshine = outerDisc * (1.0 - shadowCut) * 0.045;
      vec3 moonCol = vec3(1.55, 1.50, 1.38) * crescent + vec3(0.24, 0.32, 0.48) * earthshine;
      res += moonCol * smoothstep(-0.02, 0.05, dir.y);
    }

    return res * nightWeight;
  }

  vec3 evalProceduralSky(vec3 dir, bool includeCelestial) {
    vec3 sunDir = normalize(uSunDir);
    float y = dir.y;
    float sunCos = dot(dir, sunDir);

    // Compute smooth blend weights across the 4 stages: 0=Noon, 1=Asr, 2=Sunset, 3=Night
    float m = clamp(uSkyMode, 0.0, 3.0);
    float wNoon   = max(0.0, 1.0 - m);
    float wAsr    = max(0.0, 1.0 - abs(m - 1.0));
    float wSunset = max(0.0, 1.0 - abs(m - 2.0));
    float wNight  = max(0.0, m - 2.0);
    float dayWeight = 1.0 - wNight;

    // Zenith, Mid, and Horizon Belt colors per diurnal phase (linear HDR)
    vec3 zenithCol =
      vec3(0.028, 0.135, 0.44) * wNoon +
      vec3(0.045, 0.095, 0.24) * wAsr +
      vec3(0.024, 0.026, 0.095) * wSunset +
      vec3(0.004, 0.008, 0.024) * wNight;

    vec3 midCol =
      vec3(0.16, 0.36, 0.66) * wNoon +
      vec3(0.29, 0.24, 0.27) * wAsr +
      vec3(0.22, 0.095, 0.16) * wSunset +
      vec3(0.009, 0.016, 0.042) * wNight;

    vec3 beltCol =
      vec3(0.68, 0.60, 0.45) * wNoon +
      vec3(0.82, 0.39, 0.13) * wAsr +
      vec3(0.95, 0.24, 0.06) * wSunset +
      vec3(0.016, 0.028, 0.056) * wNight;

    vec3 skyCol = mix(beltCol, midCol, smoothstep(0.0, 0.28, max(y, 0.0)));
    skyCol = mix(skyCol, zenithCol, smoothstep(0.14, 0.82, max(y, 0.0)));

    // Daytime & Sunset solar scattering
    if (dayWeight > 0.01) {
      float azimGlow = pow(max(0.0, sunCos), mix(3.2, 2.2, wSunset)) * smoothstep(0.58, -0.05, y);
      vec3 warmTint =
        vec3(0.96, 0.74, 0.40) * wNoon +
        vec3(1.12, 0.42, 0.08) * wAsr +
        vec3(1.38, 0.28, 0.04) * wSunset;
      float azimStrength = 0.12 * wNoon + 0.58 * wAsr + 0.95 * wSunset;
      skyCol += warmTint * azimGlow * azimStrength * (1.0 - uStorm * 0.75) * dayWeight;

      float mieTight = hgPhase(sunCos, 0.84);
      float mieWide  = hgPhase(sunCos, 0.40);
      vec3 sunCol =
        vec3(1.0, 0.92, 0.76) * wNoon +
        vec3(1.05, 0.48, 0.14) * wAsr +
        vec3(1.22, 0.32, 0.06) * wSunset;
      float mieScale = (1.0 - uStorm * 0.80) * smoothstep(-0.08, 0.05, y) * dayWeight;
      skyCol += sunCol * (mieTight * 0.20 + mieWide * 0.34) * mieScale;

      if (includeCelestial) {
        float sunRadius = mix(0.99962, 0.99920, wSunset);
        float disc = smoothstep(sunRadius - 0.00022, sunRadius + 0.00014, sunCos);
        float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
        vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.25, 0.42, 0.09), clamp(wAsr * 0.65 + wSunset, 0.0, 1.0)) * (2.6 + limb * 3.4);
        float sunVis = (1.0 - smoothstep(0.15, 0.82, uStorm)) * smoothstep(-0.02, 0.015, y) * dayWeight;
        skyCol += discCol * disc * sunVis;
      }
    }

    // Starry Night + Milky Way + Crescent Moon (also faint twilight stars in Sunset Stage 3!)
    float starVis = clamp(wNight + wSunset * 0.22 * smoothstep(0.28, 0.72, y), 0.0, 1.0);
    if (starVis > 0.01 && y > 0.01) {
      skyCol += evalMilkyWay(dir, wNight);
      if (includeCelestial) {
        float horizonMask = smoothstep(0.03, 0.25, y);
        vec3 stars = vec3(0.0);
        stars += evalStarLayer(dir, 58.0, 0.91, 1.65, uTime);
        stars += evalStarLayer(dir, 115.0, 0.86, 0.95, uTime * 0.8 + 1.7);
        stars += evalStarLayer(dir, 195.0, 0.82, 0.48, uTime * 0.5 + 3.1);
        skyCol += stars * horizonMask * starVis;
      }
    }

    if (includeCelestial && wNight > 0.01) {
      skyCol += evalCrescentMoon(dir, sunDir, wNight);
    }

    // Procedural Desert Clouds (Day/Asr/Sunset; faint moonlit wisps at Night)
    int oct = int(uCloudOctaves + 0.5);
    if (y > 0.02 && oct >= 1 && wNight < 0.92) {
      vec2 cloudUV = dir.xz / (y + 0.22);
      vec2 windDrift = vec2(uTime * 0.0042, uTime * 0.0016);

      vec2 warp = vec2(
        vnoise(cloudUV * 0.65 + windDrift * 0.7),
        vnoise(cloudUV * 0.65 + vec2(4.2, 1.9) + windDrift * 0.5)
      );
      vec2 cirrusUV = cloudUV * vec2(0.55, 1.15) + warp * 0.55 + windDrift;
      float nCirrus = fbmClouds(cirrusUV, oct);
      float nPuff = fbmClouds(cloudUV * 1.15 - windDrift * 0.8 + warp * 0.25, max(2, oct - 1));
      float cloudDensity = smoothstep(0.56, 0.83, nCirrus) * 0.62
                         + smoothstep(0.64, 0.86, nPuff) * 0.32;

      float horizonFade = smoothstep(0.04, 0.26, y);
      cloudDensity = clamp(cloudDensity * horizonFade * (1.0 - uStorm * 0.85) * dayWeight, 0.0, 0.74);

      float sunHighlight = pow(max(0.0, sunCos), 5.0);
      float selfShade = smoothstep(0.15, 0.75, nPuff);

      vec3 cLit =
        vec3(0.92, 0.90, 0.84) * wNoon +
        vec3(1.04, 0.58, 0.22) * wAsr +
        vec3(1.18, 0.34, 0.14) * wSunset;
      vec3 cShd =
        vec3(0.38, 0.48, 0.62) * wNoon +
        vec3(0.25, 0.17, 0.20) * wAsr +
        vec3(0.12, 0.075, 0.15) * wSunset;

      vec3 cloudCol = mix(cShd, cLit, 0.52 + 0.48 * (1.0 - selfShade));
      cloudCol += cLit * sunHighlight * (0.24 * wNoon + 0.55 * wAsr + 0.85 * wSunset);
      skyCol = mix(skyCol, cloudCol, cloudDensity);
    }

    // Light Canyon Dust Gust Haze
    if (uStorm > 0.001) {
      float stormHeight = smoothstep(0.85, -0.05, y);
      float stormMix = clamp(uStorm * (0.52 + 0.42 * stormHeight), 0.0, 0.92);
      vec3 stormZenith = uHorizonColor * vec3(0.86, 0.82, 0.77);
      vec3 stormSky = mix(uHorizonColor, stormZenith, clamp(y, 0.0, 1.0));
      skyCol = mix(skyCol, stormSky, stormMix);
    }

    // Seamless Horizon Melt into FogExp2
    float horizonBlend = smoothstep(0.13 + uStorm * 0.14, -0.015, y);
    skyCol = mix(skyCol, uHorizonColor, horizonBlend);

    if (y < 0.0) {
      vec3 groundBounce = uHorizonColor * mix(vec3(0.62, 0.54, 0.44), vec3(0.38, 0.42, 0.52), wNight);
      skyCol = mix(uHorizonColor, groundBounce, smoothstep(0.0, -0.35, y));
    }

    return skyCol;
  }
`;

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
    vec3 col = evalProceduralSky(dir, false);
    gl_FragColor = vec4(clamp(col * 0.5, 0.0, 1.0), 1.0);
  }
`;

// Lightweight 1-tap cached sky dome for Mobile + razor-sharp analytical sun/stars/crescent moon!
const SKY_CACHED_DOME_FRAGMENT = /* glsl */ `
  uniform sampler2D uSkyCache;
  uniform vec3 uSunDir;
  uniform float uSkyMode;
  uniform float uTime;
  uniform float uStorm;
  varying vec3 vWorldDir;

  const float INV_TWO_PI = 0.15915494309189535;
  const float INV_PI = 0.3183098861837907;

  vec3 hash33(vec3 p) {
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.xxy + p.yxx) * p.zyx);
  }

  vec3 evalStarMobile(vec3 dir, float scale, float threshold, float brightness) {
    vec3 p = dir * scale;
    vec3 cell = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 rnd = hash33(cell);
    if (rnd.x < threshold) return vec3(0.0);
    float d = length(f - (rnd - 0.5) * 0.55);
    float core = smoothstep(0.17, 0.02, d);
    vec3 starCol = mix(vec3(1.0, 0.88, 0.70), vec3(0.76, 0.88, 1.0), rnd.y);
    return starCol * core * brightness;
  }

  void main() {
    vec3 dir = normalize(vWorldDir);
    float u = atan(dir.z, dir.x) * INV_TWO_PI + 0.5;
    float v = clamp(asin(clamp(dir.y, -1.0, 1.0)) * INV_PI + 0.5, 0.002, 0.998);

    vec3 skyCol = texture2D(uSkyCache, vec2(u, v)).rgb * 2.0;

    float m = clamp(uSkyMode, 0.0, 3.0);
    float wNight = max(0.0, m - 2.0);
    float wSunset = max(0.0, 1.0 - abs(m - 2.0));
    float dayWeight = 1.0 - wNight;
    vec3 sDir = normalize(uSunDir);
    float sunCos = dot(dir, sDir);

    if (dayWeight > 0.01) {
      float sunRadius = mix(0.99962, 0.99920, wSunset);
      float disc = smoothstep(sunRadius - 0.00022, sunRadius + 0.00014, sunCos);
      float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
      vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.25, 0.42, 0.09), clamp(m * 0.5, 0.0, 1.0)) * (2.6 + limb * 3.4);
      float sunVis = (1.0 - smoothstep(0.15, 0.82, uStorm)) * smoothstep(-0.02, 0.015, dir.y) * dayWeight;
      skyCol += discCol * disc * sunVis;
    }

    if (wNight > 0.01 && dir.y > 0.01) {
      float hm = smoothstep(0.03, 0.25, dir.y);
      skyCol += evalStarMobile(dir, 62.0, 0.91, 1.55) * hm * wNight;
      skyCol += evalStarMobile(dir, 125.0, 0.87, 0.85) * hm * wNight;

      // Crisp Crescent Moon
      vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), sDir));
      vec3 up = normalize(cross(sDir, right));
      skyCol += vec3(0.45, 0.62, 0.92) * (pow(max(0.0, sunCos), 30.0) * 0.16 + pow(max(0.0, sunCos), 240.0) * 0.34) * wNight;
      if (sunCos > 0.994) {
        vec3 delta = dir - sDir * sunCos;
        vec2 mp = vec2(dot(delta, right), dot(delta, up));
        float moonR = 0.0245;
        float outerDisc = smoothstep(moonR + 0.0014, moonR - 0.0014, length(mp));
        float shadowCut = smoothstep(moonR * 0.90 - 0.0014, moonR * 0.90 + 0.0014, length(mp - vec2(0.0125, 0.0085)));
        skyCol += vec3(1.55, 1.50, 1.38) * (outerDisc * shadowCut) * wNight;
      }
    }

    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

/**
 * 100% Procedural Code-Rendered 4-Phase Arabian Desert Sky Dome (v5.0)
 * Noon • Afternoon • Sunset/Twilight • Starry Milky Way & Crescent Moon Night
 */
export class ProceduralSky {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    this.useCache = false;
    this.useIBL = true;

    this.uniforms = {
      uSunDir: { value: new THREE.Vector3(0.2, 0.9, -0.35).normalize() },
      uSkyMode: { value: 0.0 },
      uTime: { value: 0.0 },
      uStorm: { value: 0.0 },
      uCloudOctaves: { value: 4.0 },
      uHorizonColor: { value: DESERT_PALETTE.horizonNoon.clone() },
    };

    const skyGeo = new THREE.SphereGeometry(960, 28, 18);
    this._realtimeMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: this.uniforms,
      vertexShader: SKY_VERTEX_SHADER,
      fragmentShader: SKY_REALTIME_FRAGMENT,
    });

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
        uSkyMode: this.uniforms.uSkyMode,
        uTime: this.uniforms.uTime,
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
    this._lastCacheMode = -999;
    this._lastCacheStorm = -999;

    this._pmrem = null;
    this._envScene = null;
    this._envRT = null;
    this._lastBakeMode = -999;
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
      uSkyMode: this.uniforms.uSkyMode,
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
      this.bakeIBL(this.uniforms.uSkyMode.value, this.uniforms.uStorm.value);
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
    this._lastCacheMode = this.uniforms.uSkyMode.value;
    this._lastCacheStorm = this.uniforms.uStorm.value;
  }

  computeHorizonColor(stageId, storm, outColor) {
    const atmos = STAGE_ATMOSPHERES[stageId] || STAGE_ATMOSPHERES[1];
    outColor.copy(atmos.horizonColor);
    if (storm > 0.001) {
      outColor.lerp(DESERT_PALETTE.horizonStorm, THREE.MathUtils.clamp(storm * 0.72, 0, 0.85));
    }
    return outColor;
  }

  update(dt, elapsed, cameraPos, sunDir, skyMode, stageId, storm) {
    this.mesh.position.copy(cameraPos);
    this.uniforms.uSunDir.value.copy(sunDir);
    this.uniforms.uSkyMode.value = skyMode;
    this.uniforms.uTime.value = elapsed;
    this.uniforms.uStorm.value = storm;
    this.computeHorizonColor(stageId, storm, this.uniforms.uHorizonColor.value);

    if (this.useCache) {
      this._cacheTimer += dt;
      const mDelta = Math.abs(skyMode - this._lastCacheMode);
      const sDelta = Math.abs(storm - this._lastCacheStorm);
      if (this._cacheTimer >= 1.2 || mDelta > 0.02 || sDelta > 0.03) {
        this.bakeSkyCache();
      }
    }

    if (this.useIBL) {
      this._bakeCooldown = Math.max(0, this._bakeCooldown - dt);
      const mDelta = Math.abs(skyMode - this._lastBakeMode);
      const sDelta = Math.abs(storm - this._lastBakeStorm);
      if (this._bakeCooldown <= 0 && (mDelta > 0.05 || sDelta > 0.08 || !this._envRT)) {
        this.bakeIBL(skyMode, storm);
        this._bakeCooldown = 0.65;
      }
    }
  }

  bakeIBL(skyMode, storm) {
    if (!this.useIBL) return;
    this._ensureIBLScene();
    this._lastBakeMode = skyMode;
    this._lastBakeStorm = storm;
    const prevRT = this._envRT;
    this._envRT = this._pmrem.fromScene(this._envScene, 0.04, 0.1, 100);
    this.scene.environment = this._envRT.texture;
    if (prevRT) prevRT.dispose();
  }
}
