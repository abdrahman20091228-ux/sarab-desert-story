import * as THREE from 'three';

/**
 * Unified Realistic Arabian Desert Color Palette — SARAB v6.0
 * - Harmonized across all 4 diurnal stages (Noon, Afternoon Canyon, Sunset Summit, Moonlit Night)
 * - Moonlit Night is naturally legible in cool silver-blue moonlight EVEN WITHOUT THE FLASHLIGHT!
 */
export const STAGE_ATMOSPHERES = {
  1: {
    id: 1,
    key: 'noon',
    name: 'الفصل ١ • سهول السراب',
    timeLabel: '١٢:٣٠ ظهراً',
    sunIcon: '☀',
    sunElevDeg: 52.0,
    sunAzimDeg: -140.0,
    skyMode: 0.0,
    sunColor: new THREE.Color('#fff7e8'),
    sunIntensity: 3.0,
    hemiSky: new THREE.Color('#96c4ec'),
    hemiGround: new THREE.Color('#cfb088'),
    hemiIntensity: 1.08,
    bounceColor: new THREE.Color('#ecd3aa'),
    bounceIntensity: 0.44,
    horizonColor: new THREE.Color('#e2d4bc'),
    fogDensity: 0.0018,
    exposure: 0.96,
    interiorExposure: 1.15,
    dustColor: new THREE.Color('#eee0c4'),
    dustOpacity: 0.18,
    stormBase: 0.0,
    heatHaze: 0.34,
    sandTint: new THREE.Color('#f2e6cf'),
    rockTint: new THREE.Color('#cfb798'),
  },
  2: {
    id: 2,
    key: 'asr',
    name: 'الفصل ٢ • وادي الصخور والواحة',
    timeLabel: '٣:٥٥ عصراً',
    sunIcon: '☀',
    sunElevDeg: 26.0,
    sunAzimDeg: -112.0,
    skyMode: 1.0,
    sunColor: new THREE.Color('#ffd096'),
    sunIntensity: 2.8,
    hemiSky: new THREE.Color('#c8b096'),
    hemiGround: new THREE.Color('#a47e58'),
    hemiIntensity: 1.06,
    bounceColor: new THREE.Color('#dfb07c'),
    bounceIntensity: 0.42,
    horizonColor: new THREE.Color('#d8b084'),
    fogDensity: 0.0024,
    exposure: 1.02,
    interiorExposure: 1.18,
    dustColor: new THREE.Color('#e2bc8e'),
    dustOpacity: 0.24,
    stormBase: 0.16, // Gentle natural canyon breeze haze (zero ugly streak lines!)
    heatHaze: 0.18,
    sandTint: new THREE.Color('#ebd2b0'),
    rockTint: new THREE.Color('#c9a47e'),
  },
  3: {
    id: 3,
    key: 'sunset',
    name: 'الفصل ٣ • قمة جبل السراب',
    timeLabel: '٦:٠٨ مغرباً',
    sunIcon: '◐',
    sunElevDeg: 6.2,
    sunAzimDeg: -165.0,
    skyMode: 2.0,
    sunColor: new THREE.Color('#ffad72'),
    sunIntensity: 2.35,
    hemiSky: new THREE.Color('#9e88ac'),
    hemiGround: new THREE.Color('#7f6556'),
    hemiIntensity: 1.08,
    bounceColor: new THREE.Color('#d69c78'),
    bounceIntensity: 0.38,
    horizonColor: new THREE.Color('#cfa084'),
    fogDensity: 0.0014,
    exposure: 1.04,
    interiorExposure: 1.18,
    dustColor: new THREE.Color('#dfb092'),
    dustOpacity: 0.14,
    stormBase: 0.0,
    heatHaze: 0.08,
    sandTint: new THREE.Color('#e5cbb4'),
    rockTint: new THREE.Color('#bfa18c'),
  },
  4: {
    id: 4,
    key: 'night',
    name: 'الفصل ٤ • البيت المهجور تحت النجوم',
    timeLabel: '١٠:٤٠ ليلاً',
    sunIcon: '☽',
    sunElevDeg: 36.0,
    sunAzimDeg: -150.0,
    skyMode: 3.0,
    // Realistic bright Arabian moonlit night: clearly navigable even with flashlight OFF!
    sunColor: new THREE.Color('#a4caf5'),
    sunIntensity: 1.38,
    hemiSky: new THREE.Color('#4668a6'),
    hemiGround: new THREE.Color('#2c354c'),
    hemiIntensity: 1.18,
    bounceColor: new THREE.Color('#5678b2'),
    bounceIntensity: 0.42,
    horizonColor: new THREE.Color('#1a2742'),
    fogDensity: 0.0024,
    exposure: 1.12,
    interiorExposure: 1.22,
    dustColor: new THREE.Color('#8ea8cc'),
    dustOpacity: 0.11,
    stormBase: 0.0,
    heatHaze: 0.0,
    sandTint: new THREE.Color('#bccde4'),
    rockTint: new THREE.Color('#9cb0cb'),
  },
};

export const DESERT_PALETTE = {
  sandTintNoon: new THREE.Color('#f2e6cf'),
  sandTintAsr: new THREE.Color('#ebd2b0'),
  mesaBase: new THREE.Color('#c9ab87'),
  mesaStrataDark: new THREE.Color('#977858'),
  adobeWall: new THREE.Color('#d4c2a5'),
  ceilingPlaster: new THREE.Color('#dbd0bc'),
  weatheredWood: new THREE.Color('#8d7052'),
  horizonNoon: new THREE.Color('#e2d4bc'),
  horizonAsr: new THREE.Color('#d8b084'),
  horizonSunset: new THREE.Color('#cfa084'),
  horizonNight: new THREE.Color('#1a2742'),
  horizonStorm: new THREE.Color('#cfa372'),
};

export const SHARED_GRADE_UNIFORMS = {
  uSkyMode: { value: 0.0 },
  uStorm: { value: 0.0 },
  uHorizonColor: { value: DESERT_PALETTE.horizonNoon.clone() },
  uShadowFadeCenter: { value: new THREE.Vector3(0, 0, 0) },
};

/**
 * Lightweight unified desert color grading + optional aerial perspective.
 */
export function attachDesertGrading(material, options = {}) {
  const sat = options.saturation ?? 0.93;
  const contrast = options.contrast ?? 1.02;
  const aerialStrength = options.aerialStrength ?? 0.0;
  const aerialStart = options.aerialStart ?? 65.0;
  const aerialEnd = options.aerialEnd ?? 290.0;

  const prevCompile = material.onBeforeCompile;
  material.onBeforeCompile = (shader, renderer) => {
    if (prevCompile) prevCompile(shader, renderer);

    shader.uniforms.uGradeHorizon = SHARED_GRADE_UNIFORMS.uHorizonColor;
    shader.uniforms.uGradeStorm = SHARED_GRADE_UNIFORMS.uStorm;

    if (aerialStrength > 0.001) {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nvarying float vAerialDist;`)
        .replace(
          '#include <worldpos_vertex>',
          `#include <worldpos_vertex>
           vec4 _apWp = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _apWp = instanceMatrix * _apWp;
           #endif
           _apWp = modelMatrix * _apWp;
           vAerialDist = length(cameraPosition - _apWp.xyz);`
        );
    }

    const aerialHeader =
      aerialStrength > 0.001
        ? `uniform vec3 uGradeHorizon;\nuniform float uGradeStorm;\nvarying float vAerialDist;`
        : `uniform vec3 uGradeHorizon;\nuniform float uGradeStorm;`;

    const aerialCode =
      aerialStrength > 0.001
        ? `
          float _apF = smoothstep(${aerialStart.toFixed(1)}, ${aerialEnd.toFixed(1)}, vAerialDist);
          float _apMix = clamp(_apF * (${aerialStrength.toFixed(3)} + uGradeStorm * 0.25), 0.0, 0.82);
          float _apLuma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 _apDesat = mix(gl_FragColor.rgb, vec3(_apLuma), _apF * 0.28);
          gl_FragColor.rgb = mix(_apDesat, uGradeHorizon, _apMix);
        `
        : '';

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${aerialHeader}`)
      .replace(
        '#include <tonemapping_fragment>',
        `
        {
          float _luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          gl_FragColor.rgb = mix(vec3(_luma), gl_FragColor.rgb, ${sat.toFixed(3)});
          gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * ${contrast.toFixed(3)} + 0.5;
          gl_FragColor.rgb = max(gl_FragColor.rgb, vec3(0.0));
          ${aerialCode}
        }
        #include <tonemapping_fragment>
        `
      );
  };

  material.customProgramCacheKey = () =>
    `desert_grade_v6_${sat}_${contrast}_${aerialStrength}_${material.name || ''}`;
  return material;
}
