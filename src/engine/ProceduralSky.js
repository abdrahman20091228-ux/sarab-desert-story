import * as THREE from 'three';
import { DESERT_PALETTE, STAGE_ATMOSPHERES } from './Palette.js';

const SKY_VERTEX_SHADER = /* glsl */ `
  varying vec3 vWorldDir;
  void main() {
    vWorldDir = position;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`;

// Photorealistic Physical-Style Arabian Desert Atmosphere (v6.0):
// - Smooth multi-layer Rayleigh/Mie scattering + realistic horizon dust belt
// - Soft backlit volumetric cumulus & wispy high-altitude cirrus clouds (NOT flat noise!)
// - Ultra-crisp pinpoint magnitude-weighted starfield, fine Milky Way stardust filaments & detailed Crescent Moon!
const SKY_CORE_FUNCTIONS = /* glsl */ `
  uniform vec3 uSunDir;
  uniform float uSkyMode; // 0=Noon, 1=Afternoon, 2=Sunset/Dusk, 3=Night
  uniform float uTime;
  uniform float uStorm;
  uniform float uCloudOctaves;
  uniform vec3 uHorizonColor;

  float hash21(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
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
    return mix(
      mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
      mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p, int octaves) {
    float val = 0.0;
    float amp = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      if (i >= octaves) break;
      val += amp * vnoise(p);
      p = rot * p * 2.04 + vec2(1.7, 9.2);
      amp *= 0.5;
    }
    return val;
  }

  float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    float denom = max(0.001, 1.0 + g2 - 2.0 * g * cosTheta);
    return (1.0 - g2) / (4.0 * 3.14159265 * pow(denom, 1.5));
  }

  // Ultra-fine realistic pinpoint stars (sub-pixel sharp cores, natural color temperatures!)
  vec3 evalPinpointStars(vec3 dir, float scale, float densityThresh, float power, float timeVal) {
    vec3 p = dir * scale;
    vec3 cell = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 rnd = hash33(cell);
    if (rnd.x < densityThresh) return vec3(0.0);
    vec3 jitter = (rnd - 0.5) * 0.62;
    float d = length(f - jitter);
    // Razor-sharp tiny pinpoint instead of blurry giant blobs
    float star = exp(-d * d * 190.0);
    float mag = pow(fract(rnd.x * 37.0), 2.4);
    float twinkle = 0.80 + 0.20 * sin(timeVal * (1.6 + rnd.y * 3.2) + rnd.z * 62.8);
    vec3 col = mix(vec3(1.0, 0.88, 0.72), vec3(0.76, 0.88, 1.0), rnd.y);
    return col * star * (0.25 + 0.75 * mag) * power * twinkle;
  }

  // Realistic delicate Milky Way stardust band with dark dust rift (NOT blotchy big fog!)
  vec3 evalMilkyWay(vec3 dir, float nightWeight) {
    if (nightWeight < 0.01 || dir.y < 0.0) return vec3(0.0);
    vec3 galNormal = normalize(vec3(0.74, -0.56, -0.37));
    vec3 galRight  = normalize(cross(vec3(0.0, 1.0, 0.0), galNormal));
    vec3 galUp     = normalize(cross(galNormal, galRight));

    float lat = dot(dir, galNormal);
    float lon = atan(dot(dir, galUp), dot(dir, galRight));

    // Wide delicate outer glow + tighter luminous stardust spine
    float outerBand = exp(-lat * lat * 18.0);
    float innerSpine = exp(-lat * lat * 55.0);

    vec2 gUV = vec2(lon * 3.8, lat * 11.0);
    float fineDust = fbm(gUV * 2.1 + vec2(2.3, 1.1), 4);
    float riftNoise = fbm(gUV * 1.4 - vec2(5.1, 2.7), 3);
    // Dark central Great Rift dust lane
    float darkRift = exp(-lat * lat * 140.0) * smoothstep(0.32, 0.72, riftNoise);

    // Fine unresolved star-cloud shimmer
    float microSpec = vnoise(gUV * 12.0) * 0.5 + 0.5;
    float cloud = outerBand * smoothstep(0.30, 0.82, fineDust) * (0.65 + 0.35 * microSpec);
    float core = innerSpine * smoothstep(0.36, 0.86, fineDust) * (1.0 - darkRift * 0.78);

    vec3 dustBlue = vec3(0.075, 0.125, 0.24);
    vec3 starWarm = vec3(0.26, 0.25, 0.33);
    vec3 mw = dustBlue * cloud * 0.55 + starWarm * core * 0.72;

    float horizonFade = smoothstep(0.03, 0.32, dir.y);
    return mw * horizonFade * nightWeight;
  }

  // Crisp natural Crescent Moon with subtle lunar maria shading & soft atmospheric corona
  vec3 evalCrescentMoon(vec3 dir, vec3 moonDir, float nightWeight) {
    if (nightWeight < 0.01) return vec3(0.0);
    vec3 mDir = normalize(moonDir);
    vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), mDir));
    vec3 up = normalize(cross(mDir, right));
    float cosA = dot(dir, mDir);

    // Delicate atmospheric lunar corona & wide silver sky scatter
    float halo = pow(max(0.0, cosA), 14.0) * 0.07 + pow(max(0.0, cosA), 180.0) * 0.24;
    vec3 res = vec3(0.42, 0.58, 0.88) * halo;

    if (cosA > 0.995) {
      vec3 delta = dir - mDir * cosA;
      vec2 mp = vec2(dot(delta, right), dot(delta, up));
      float moonR = 0.022;
      float dMain = length(mp);
      float outerDisc = smoothstep(moonR + 0.0011, moonR - 0.0011, dMain);

      vec2 shadowOffset = vec2(0.0112, 0.0076);
      float dShadow = length(mp - shadowOffset);
      float shadowCut = smoothstep(moonR * 0.91 - 0.0011, moonR * 0.91 + 0.0011, dShadow);

      float crescent = outerDisc * shadowCut;
      // Subtle lunar maria texture on the lit crescent
      float maria = 0.86 + 0.14 * vnoise(mp * 140.0 + vec2(3.1, 1.7));
      float earthshine = outerDisc * (1.0 - shadowCut) * 0.055;
      vec3 moonCol = vec3(1.52, 1.48, 1.38) * crescent * maria + vec3(0.24, 0.34, 0.52) * earthshine;
      res += moonCol * smoothstep(-0.02, 0.05, dir.y);
    }

    return res * nightWeight;
  }

  vec3 evalProceduralSky(vec3 dir, bool includeCelestial) {
    vec3 sunDir = normalize(uSunDir);
    float y = dir.y;
    float sunCos = dot(dir, sunDir);

    float m = clamp(uSkyMode, 0.0, 3.0);
    float wNoon   = max(0.0, 1.0 - m);
    float wAsr    = max(0.0, 1.0 - abs(m - 1.0));
    float wSunset = max(0.0, 1.0 - abs(m - 2.0));
    float wNight  = max(0.0, m - 2.0);
    float dayWeight = 1.0 - wNight;

    // Physically balanced natural sky dome gradients (realistic muted Arabian desert tones!)
    vec3 zenithCol =
      vec3(0.048, 0.185, 0.48) * wNoon +
      vec3(0.068, 0.138, 0.31) * wAsr +
      vec3(0.036, 0.048, 0.145) * wSunset +
      vec3(0.009, 0.016, 0.044) * wNight;

    vec3 midCol =
      vec3(0.22, 0.42, 0.68) * wNoon +
      vec3(0.30, 0.29, 0.36) * wAsr +
      vec3(0.24, 0.155, 0.23) * wSunset +
      vec3(0.018, 0.032, 0.072) * wNight;

    vec3 beltCol =
      vec3(0.68, 0.63, 0.53) * wNoon +
      vec3(0.74, 0.47, 0.26) * wAsr +
      vec3(0.84, 0.40, 0.20) * wSunset +
      vec3(0.034, 0.056, 0.108) * wNight;

    // Smooth optical airmass curve (eliminates banding!)
    float airmass = pow(max(0.0, y), 0.52);
    vec3 skyCol = mix(beltCol, midCol, smoothstep(0.0, 0.44, airmass));
    skyCol = mix(skyCol, zenithCol, smoothstep(0.28, 0.94, airmass));

    // Natural Rayleigh/Mie solar glow
    if (dayWeight > 0.01) {
      float azimGlow = pow(max(0.0, sunCos), mix(3.4, 2.4, wSunset)) * smoothstep(0.62, -0.04, y);
      vec3 glowTint =
        vec3(0.95, 0.80, 0.55) * wNoon +
        vec3(1.02, 0.56, 0.24) * wAsr +
        vec3(1.14, 0.46, 0.18) * wSunset;
      float glowStr = 0.10 * wNoon + 0.44 * wAsr + 0.72 * wSunset;
      skyCol += glowTint * azimGlow * glowStr * (1.0 - uStorm * 0.65) * dayWeight;

      float mieTight = hgPhase(sunCos, 0.86);
      float mieWide  = hgPhase(sunCos, 0.44);
      vec3 sunCol =
        vec3(1.0, 0.94, 0.82) * wNoon +
        vec3(1.05, 0.64, 0.30) * wAsr +
        vec3(1.16, 0.48, 0.18) * wSunset;
      float mieScale = (1.0 - uStorm * 0.75) * smoothstep(-0.05, 0.04, y) * dayWeight;
      skyCol += sunCol * (mieTight * 0.16 + mieWide * 0.28) * mieScale;

      if (includeCelestial) {
        float sunRadius = mix(0.99966, 0.99932, wSunset);
        float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
        float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
        vec3 discCol = mix(vec3(1.0, 0.97, 0.88), vec3(1.22, 0.62, 0.26), clamp(wAsr * 0.45 + wSunset, 0.0, 1.0)) * (2.5 + limb * 3.0);
        float sunVis = (1.0 - smoothstep(0.18, 0.85, uStorm)) * smoothstep(-0.015, 0.015, y) * dayWeight;
        skyCol += discCol * disc * sunVis;
      }
    }

    // Photorealistic Multi-Layer Backlit Desert Clouds (Cumulus puffs + wispy Cirrus!)
    int oct = int(uCloudOctaves + 0.5);
    if (y > 0.025 && oct >= 1 && wNight < 0.92) {
      // Curvature-corrected sky dome projection
      vec2 cloudUV = dir.xz / (y + 0.16);
      vec2 drift = vec2(uTime * 0.0038, uTime * 0.0014);

      // High wispy cirrus layer
      vec2 warp = vec2(vnoise(cloudUV * 0.48 + drift), vnoise(cloudUV * 0.48 + vec2(3.7, 6.2) - drift * 0.6));
      float cirrus = fbm(cloudUV * vec2(0.45, 0.95) + warp * 0.65 + drift, oct);
      float cirrusMask = smoothstep(0.56, 0.84, cirrus) * 0.36;

      // Soft scattered desert cumulus clouds with sunlit directional self-shadowing!
      vec2 cumUV = cloudUV * 0.58 - drift * 1.15 + warp * 0.32;
      float cumBase = fbm(cumUV, oct);
      float cumDensity = smoothstep(0.54, 0.80, cumBase);

      // Sample cloud slightly toward sun direction for authentic 3D cloud thickness & sunlit rim!
      vec2 sunStep = sunDir.xz * 0.075;
      float cumTowardsSun = fbm(cumUV + sunStep, max(2, oct - 1));
      float lightTrans = clamp(1.0 - (cumTowardsSun - cumBase) * 3.8, 0.18, 1.0);

      float horizonFade = smoothstep(0.035, 0.24, y) * smoothstep(2.6, 0.45, length(cloudUV) * 0.35);
      float totalCloud = clamp((cirrusMask + cumDensity * 0.72) * horizonFade * (1.0 - uStorm * 0.7) * dayWeight, 0.0, 0.84);

      float silverLining = pow(max(0.0, sunCos), 7.0) * (1.0 - cumDensity * 0.45);
      vec3 litCol =
        vec3(0.96, 0.95, 0.92) * wNoon +
        vec3(1.02, 0.72, 0.44) * wAsr +
        vec3(1.12, 0.56, 0.32) * wSunset;
      vec3 shdCol =
        vec3(0.48, 0.56, 0.68) * wNoon +
        vec3(0.36, 0.30, 0.34) * wAsr +
        vec3(0.18, 0.14, 0.24) * wSunset;

      vec3 cloudCol = mix(shdCol, litCol, lightTrans * 0.78 + 0.18);
      cloudCol += litCol * silverLining * (0.24 * wNoon + 0.48 * wAsr + 0.75 * wSunset);
      skyCol = mix(skyCol, cloudCol, totalCloud);
    }

    // Night Sky: Fine Pinpoint Starfield + Delicate Milky Way + Detailed Crescent Moon
    float starVis = clamp(wNight + wSunset * 0.25 * smoothstep(0.32, 0.75, y), 0.0, 1.0);
    if (starVis > 0.01 && y > 0.005) {
      skyCol += evalMilkyWay(dir, wNight);
      if (includeCelestial) {
        float hm = smoothstep(0.02, 0.22, y);
        vec3 stars = vec3(0.0);
        stars += evalPinpointStars(dir, 88.0, 0.90, 1.65, uTime);
        stars += evalPinpointStars(dir, 165.0, 0.85, 0.95, uTime * 0.8 + 1.4);
        stars += evalPinpointStars(dir, 260.0, 0.82, 0.45, uTime * 0.5 + 2.9);
        skyCol += stars * hm * starVis;
      }
    }

    if (includeCelestial && wNight > 0.01) {
      skyCol += evalCrescentMoon(dir, sunDir, wNight);
    }

    // Seamless aerial horizon blend into FogExp2
    float horizonBlend = smoothstep(0.15 + uStorm * 0.12, -0.015, y);
    skyCol = mix(skyCol, uHorizonColor, horizonBlend);

    if (y < 0.0) {
      vec3 groundBounce = uHorizonColor * mix(vec3(0.66, 0.58, 0.48), vec3(0.45, 0.52, 0.64), wNight);
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

  vec3 evalStarFast(vec3 dir, float scale, float thresh, float power) {
    vec3 p = dir * scale;
    vec3 cell = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 rnd = hash33(cell);
    if (rnd.x < thresh) return vec3(0.0);
    float d = length(f - (rnd - 0.5) * 0.6);
    float star = exp(-d * d * 185.0);
    vec3 col = mix(vec3(1.0, 0.88, 0.72), vec3(0.76, 0.88, 1.0), rnd.y);
    return col * star * power;
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
      float sunRadius = mix(0.99966, 0.99932, wSunset);
      float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
      float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
      vec3 discCol = mix(vec3(1.0, 0.97, 0.88), vec3(1.22, 0.62, 0.26), clamp(m * 0.5, 0.0, 1.0)) * (2.5 + limb * 3.0);
      float sunVis = (1.0 - smoothstep(0.18, 0.85, uStorm)) * smoothstep(-0.015, 0.015, dir.y) * dayWeight;
      skyCol += discCol * disc * sunVis;
    }

    if (wNight > 0.01 && dir.y > 0.005) {
      float hm = smoothstep(0.02, 0.22, dir.y);
      skyCol += evalStarFast(dir, 92.0, 0.90, 1.55) * hm * wNight;
      skyCol += evalStarFast(dir, 170.0, 0.86, 0.85) * hm * wNight;

      vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), sDir));
      vec3 up = normalize(cross(sDir, right));
      skyCol += vec3(0.42, 0.58, 0.88) * (pow(max(0.0, sunCos), 14.0) * 0.07 + pow(max(0.0, sunCos), 180.0) * 0.24) * wNight;
      if (sunCos > 0.995) {
        vec3 delta = dir - sDir * sunCos;
        vec2 mp = vec2(dot(delta, right), dot(delta, up));
        float moonR = 0.022;
        float outerDisc = smoothstep(moonR + 0.0011, moonR - 0.0011, length(mp));
        float shadowCut = smoothstep(moonR * 0.91 - 0.0011, moonR * 0.91 + 0.0011, length(mp - vec2(0.0112, 0.0076)));
        skyCol += vec3(1.52, 1.48, 1.38) * (outerDisc * shadowCut) * wNight;
      }
    }

    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

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
      uCloudOctaves: { value: 5.0 },
      uHorizonColor: { value: DESERT_PALETTE.horizonNoon.clone() },
    };

    const skyGeo = new THREE.SphereGeometry(980, 28, 18);
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
    this._pmrem = null;
    this._envScene = null;
    this._envRT = null;
  }

  _ensureIBLScene() {
    if (this._pmrem) return;
    this._pmrem = new THREE.PMREMGenerator(this.renderer);
    this._pmrem.compileCubemapShader();
    this._envScene = new THREE.Scene();
    const envSphere = new THREE.Mesh(
      new THREE.SphereGeometry(20, 14, 10),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        uniforms: {
          uSunDir: this.uniforms.uSunDir,
          uSkyMode: this.uniforms.uSkyMode,
          uTime: { value: 0.0 },
          uStorm: this.uniforms.uStorm,
          uCloudOctaves: { value: 2.0 },
          uHorizonColor: this.uniforms.uHorizonColor,
        },
        vertexShader: SKY_VERTEX_SHADER,
        fragmentShader: SKY_REALTIME_FRAGMENT,
      })
    );
    this._envScene.add(envSphere);
  }

  setQualityOptions({ cloudOctaves = 5, useSkyCache = false, useIBL = true }) {
    this.uniforms.uCloudOctaves.value = cloudOctaves;
    this.useCache = Boolean(useSkyCache);
    this.mesh.material = this.useCache ? this._cachedMat : this._realtimeMat;
    if (this.useCache) this.bakeSkyCache();

    this.useIBL = Boolean(useIBL);
    if (!this.useIBL) {
      this.scene.environment = null;
      if (this._envRT) {
        this._envRT.dispose();
        this._envRT = null;
      }
    } else if (!this._envRT) {
      this.bakeIBL();
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
  }

  computeHorizonColor(stageId, storm, outColor) {
    const atmos = STAGE_ATMOSPHERES[stageId] || STAGE_ATMOSPHERES[1];
    outColor.copy(atmos.horizonColor);
    if (storm > 0.001) {
      outColor.lerp(DESERT_PALETTE.horizonStorm, THREE.MathUtils.clamp(storm * 0.45, 0, 0.55));
    }
    return outColor;
  }

  // Zero PMREM rebakes during gameplay movement -> eliminates all movement frame drops!
  update(dt, elapsed, cameraPos, sunDir, skyMode, stageId, storm) {
    this.mesh.position.copy(cameraPos);
    this.uniforms.uSunDir.value.copy(sunDir);
    this.uniforms.uSkyMode.value = skyMode;
    this.uniforms.uTime.value = elapsed;
    this.uniforms.uStorm.value = storm;
    this.computeHorizonColor(stageId, storm, this.uniforms.uHorizonColor.value);

    if (this.useCache) {
      this._cacheTimer += dt;
      if (this._cacheTimer >= 2.0) {
        this.bakeSkyCache();
      }
    }
  }

  bakeIBL() {
    if (!this.useIBL) return;
    this._ensureIBLScene();
    const prevRT = this._envRT;
    this._envRT = this._pmrem.fromScene(this._envScene, 0.04, 0.1, 100);
    this.scene.environment = this._envRT.texture;
    if (prevRT) prevRT.dispose();
  }
}
