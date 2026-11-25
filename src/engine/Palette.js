import * as THREE from 'three';

/**
 * Unified Arabian Desert Color Palette & Lightweight Shader Grading (v5.0)
 * 4-Stage Full Diurnal Palette:
 *   Stage 1: Noon (الظهر) — Open Mirage Plains & Cracked Sabkha
 *   Stage 2: Afternoon (العصر) — Rocky Canyon, Stratified Cliffs & Palms
 *   Stage 3: Sunset/Dusk (الغروب/الشفق) — High Mountain Peak Overlooking Sea of Dunes
 *   Stage 4: Night (الليل) — Starry Desert, Milky Way, Crescent Moon & Abandoned House
 */
export const STAGE_ATMOSPHERES = {
  1: {
    id: 1,
    key: 'noon',
    name: 'المرحلة ١ • سهول السراب',
    timeLabel: '١٢:٣٠ ظهراً',
    sunIcon: '☀',
    sunElevDeg: 54.0,
    sunAzimDeg: -142.0,
    skyMode: 0.0, // 0=Noon, 1=Asr, 2=Sunset, 3=Night
    sunColor: new THREE.Color('#fff7e6'),
    sunIntensity: 3.05,
    hemiSky: new THREE.Color('#8ec0eb'),
    hemiGround: new THREE.Color('#cfa879'),
    hemiIntensity: 1.05,
    bounceColor: new THREE.Color('#ebd0a2'),
    bounceIntensity: 0.42,
    horizonColor: new THREE.Color('#e6d7bc'),
    fogDensity: 0.0021,
    exposure: 0.96,
    interiorExposure: 1.15,
    dustColor: new THREE.Color('#f0dab6'),
    dustOpacity: 0.24,
    stormBase: 0.0,
    heatHaze: 0.46,
    sandTint: new THREE.Color('#f4e8d2'),
    bakedAmbient: new THREE.Color('#c8b69b'),
    bakedSunTint: new THREE.Color('#fff5e0'),
  },
  2: {
    id: 2,
    key: 'asr',
    name: 'المرحلة ٢ • وادي الصخور',
    timeLabel: '٣:٥٠ عصراً',
    sunIcon: '☀',
    sunElevDeg: 22.5,
    sunAzimDeg: -116.0,
    skyMode: 1.0,
    sunColor: new THREE.Color('#ffc17a'),
    sunIntensity: 2.75,
    hemiSky: new THREE.Color('#d9a574'),
    hemiGround: new THREE.Color('#9c6e44'),
    hemiIntensity: 0.96,
    bounceColor: new THREE.Color('#dd9b5c'),
    bounceIntensity: 0.36,
    horizonColor: new THREE.Color('#dfa770'),
    fogDensity: 0.0032,
    exposure: 1.04,
    interiorExposure: 1.18,
    dustColor: new THREE.Color('#e6b47a'),
    dustOpacity: 0.34,
    stormBase: 0.24, // Light periodic dust gusts through the canyon
    heatHaze: 0.26,
    sandTint: new THREE.Color('#eccba2'),
    bakedAmbient: new THREE.Color('#a88764'),
    bakedSunTint: new THREE.Color('#ffcb8c'),
  },
  3: {
    id: 3,
    key: 'sunset',
    name: 'المرحلة ٣ • قمة جبل السراب',
    timeLabel: '٦:١٢ مغرباً',
    sunIcon: '◐',
    sunElevDeg: 5.2,
    sunAzimDeg: -168.0,
    skyMode: 2.0,
    sunColor: new THREE.Color('#ff9a5c'),
    sunIntensity: 2.35,
    hemiSky: new THREE.Color('#9a7ea6'),
    hemiGround: new THREE.Color('#7a5b48'),
    hemiIntensity: 1.02,
    bounceColor: new THREE.Color('#d88c5e'),
    bounceIntensity: 0.34,
    horizonColor: new THREE.Color('#d67f58'),
    fogDensity: 0.0017,
    exposure: 1.06,
    interiorExposure: 1.18,
    dustColor: new THREE.Color('#df9974'),
    dustOpacity: 0.18,
    stormBase: 0.0,
    heatHaze: 0.10,
    sandTint: new THREE.Color('#e4c6ae'),
    bakedAmbient: new THREE.Color('#866e7e'),
    bakedSunTint: new THREE.Color('#ffa870'),
  },
  4: {
    id: 4,
    key: 'night',
    name: 'المرحلة ٤ • البيت المهجور ليلاً',
    timeLabel: '١٠:٤٠ ليلاً',
    sunIcon: '☽',
    sunElevDeg: 34.0,
    sunAzimDeg: -152.0,
    skyMode: 3.0,
    sunColor: new THREE.Color('#9cc2f2'),
    sunIntensity: 0.62,
    hemiSky: new THREE.Color('#283f68'),
    hemiGround: new THREE.Color('#1c1b24'),
    hemiIntensity: 0.64,
    bounceColor: new THREE.Color('#344e78'),
    bounceIntensity: 0.18,
    horizonColor: new THREE.Color('#0f1a2e'),
    fogDensity: 0.0031,
    exposure: 1.06,
    interiorExposure: 1.18,
    dustColor: new THREE.Color('#7a92b8'),
    dustOpacity: 0.13,
    stormBase: 0.0,
    heatHaze: 0.0,
    sandTint: new THREE.Color('#a4b6ce'),
    bakedAmbient: new THREE.Color('#425475'),
    bakedSunTint: new THREE.Color('#a8c8f2'),
  },
};

export const DESERT_PALETTE = {
  sandTintNoon: new THREE.Color('#f4e8d2'),
  sandTintAsr: new THREE.Color('#eccba2'),
  mesaBase: new THREE.Color('#c4a17b'),
  mesaStrataDark: new THREE.Color('#94724f'),
  adobeWall: new THREE.Color('#d0be9f'),
  ceilingPlaster: new THREE.Color('#d9ceb9'),
  weatheredWood: new THREE.Color('#8b6d4e'),
  horizonNoon: new THREE.Color('#e6d7bc'),
  horizonAsr: new THREE.Color('#dfa770'),
  horizonSunset: new THREE.Color('#c96a48'),
  horizonNight: new THREE.Color('#0c1424'),
  horizonStorm: new THREE.Color('#c89258'),
};

export const SHARED_GRADE_UNIFORMS = {
  uSkyMode: { value: 0.0 },
  uStorm: { value: 0.0 },
  uHorizonColor: { value: DESERT_PALETTE.horizonNoon.clone() },
  uShadowFadeCenter: { value: new THREE.Vector3(0, 0, 0) },
};

/**
 * Lightweight unified desert color grading + optional aerial perspective.
 * Zero extra render targets (mobile thermal-safe).
 */
export function attachDesertGrading(material, options = {}) {
  const sat = options.saturation ?? 0.94;
  const contrast = options.contrast ?? 1.03;
  const aerialStrength = options.aerialStrength ?? 0.0;
  const aerialStart = options.aerialStart ?? 55.0;
  const aerialEnd = options.aerialEnd ?? 240.0;

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
          float _apMix = clamp(_apF * (${aerialStrength.toFixed(3)} + uGradeStorm * 0.36), 0.0, 0.86);
          float _apLuma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 _apDesat = mix(gl_FragColor.rgb, vec3(_apLuma), _apF * 0.32);
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
    `desert_grade_v5_${sat}_${contrast}_${aerialStrength}_${material.name || ''}`;
  return material;
}
