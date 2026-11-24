import * as THREE from 'three';

/**
 * Unified Arabian Desert Color Palette & Lightweight Shader Grading (v4.0)
 * Keeps sand, mesas, adobe walls, wood, sky horizon, and dust storm visually cohesive
 * with ZERO post-processing render-target cost (mobile 60FPS safe).
 */
export const DESERT_PALETTE = {
  // Base calibrated albedo tints (sRGB)
  sandTintNoon: new THREE.Color('#f4e7ce'),
  sandTintAsr: new THREE.Color('#f0cfa4'),
  mesaBase: new THREE.Color('#c7a47c'),      // Desaturated eroded sandstone (no cartoon orange!)
  mesaStrataDark: new THREE.Color('#9e7c58'),
  adobeWall: new THREE.Color('#d2c0a4'),     // Sun-bleached muted mudbrick
  ceilingPlaster: new THREE.Color('#ddd2be'),// Warm lime-plaster interior ceiling
  weatheredWood: new THREE.Color('#8e7050'), // Warm desert cedar for desk/chair/beams
  jeepBody: new THREE.Color('#9c7b5c'),      // Sun-faded dusty khaki-rust expedition 4x4
  jeepGlass: new THREE.Color('#5b6b68'),

  // Horizon / Fog colors (shared by ProceduralSky & FogExp2 for seamless melt!)
  horizonNoon: new THREE.Color('#e2d2b5'),
  horizonAsr: new THREE.Color('#e3a668'),
  horizonStorm: new THREE.Color('#c89258'),

  // Lighting colors
  sunNoon: new THREE.Color('#fff6e3'),
  sunAsr: new THREE.Color('#ffae5c'),
  sunStorm: new THREE.Color('#d9a368'),

  hemiSkyNoon: new THREE.Color('#8cbde8'),
  hemiSkyAsr: new THREE.Color('#df9f64'),
  hemiSkyStorm: new THREE.Color('#c9955e'),

  hemiGroundNoon: new THREE.Color('#c9a374'),
  hemiGroundAsr: new THREE.Color('#966338'),
  hemiGroundStorm: new THREE.Color('#9d7042'),

  // Calibrated ACES Filmic exposure targets
  exposureNoon: 0.96,
  exposureAsr: 1.08,
  exposureInteriorNoon: 1.22,
  exposureInteriorAsr: 1.26,
  exposureStorm: 0.92,
};

/**
 * Shared shader uniforms updated once per frame by SkyLightingSystem.
 * Used by materials with aerial perspective and unified desert grading.
 */
export const SHARED_GRADE_UNIFORMS = {
  uTimeOfDay: { value: 0.0 },
  uStorm: { value: 0.0 },
  uHorizonColor: { value: DESERT_PALETTE.horizonNoon.clone() },
  uShadowFadeCenter: { value: new THREE.Vector3(0, 0, 0) },
};

/**
 * Appends lightweight unified desert color grading (gentle filmic saturation/contrast
 * balance + warm shadow lift) to a Three.js StandardMaterial without breaking existing
 * onBeforeCompile hooks.
 */
export function attachDesertGrading(material, options = {}) {
  const sat = options.saturation ?? 0.94;
  const contrast = options.contrast ?? 1.03;
  const aerialStrength = options.aerialStrength ?? 0.0;
  const aerialStart = options.aerialStart ?? 45.0;
  const aerialEnd = options.aerialEnd ?? 210.0;

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
          float _apMix = clamp(_apF * (${aerialStrength.toFixed(3)} + uGradeStorm * 0.42), 0.0, 0.85);
          // Desaturate distant rock slightly before mixing toward desert horizon haze
          float _apLuma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 _apDesat = mix(gl_FragColor.rgb, vec3(_apLuma), _apF * 0.35);
          gl_FragColor.rgb = mix(_apDesat, uGradeHorizon, _apMix);
        `
        : '';

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${aerialHeader}`)
      .replace(
        '#include <tonemapping_fragment>',
        `
        {
          // Unified subtle desert color grading (balanced saturation + soft warm shadows)
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
    `desert_grade_${sat}_${contrast}_${aerialStrength}_${material.name || ''}`;
  return material;
}
