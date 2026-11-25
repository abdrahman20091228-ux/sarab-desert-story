/**
 * Multi-Stage Seamless Arabian Desert Terrain Engine — SARAB v6.0
 * - 100% Visual-Physics Triangle Parity across all 4 stages
 * - Stage 2: Smooth wide rocky canyon floor with ZERO yellow sand slopes cutting through ruins!
 * - Stage 3: Single continuous unified Sea of Dunes heightfield (`getStage3DuneSeaHeight`)
 *   shared identically between inner mountain terrain & outer horizon skirt -> ZERO seam or color mismatch!
 */

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export const STAGE_TERRAIN_CONFIG = {
  1: { size: 420, segments: 112 },
  2: { size: 420, segments: 120 },
  3: { size: 480, segments: 128 },
  4: { size: 420, segments: 112 },
};

export const STAGE4_HOUSE_X = 0;
export const STAGE4_HOUSE_Z = -68;
export const STAGE4_HOUSE_BASE_Y = 0.0;

/**
 * Gentle natural winding Stage 2 canyon centerline & wide walkable rocky floor
 */
export function getCanyonCenterX(z) {
  return Math.sin(z * 0.015) * 16.0;
}

export function getCanyonHalfWidth(z) {
  // Extra wide flat rocky plazas at Ruins 1 (z≈42), Oasis Palms (z≈-14), and Ruins 2 (z≈-64)
  const plaza1 = Math.exp(-((z - 42) * (z - 42)) / 620) * 9.5;
  const oasis = Math.exp(-((z + 14) * (z + 14)) / 780) * 11.5;
  const plaza2 = Math.exp(-((z + 64) * (z + 64)) / 560) * 8.5;
  return 18.0 + plaza1 + oasis + plaza2;
}

/**
 * Stage 3 mountain ridge centerline & walkable width
 */
export function getRidgeCenterX(z) {
  return Math.sin((z + 18) * 0.018) * 14.0;
}

export function getRidgeHalfWidth(z) {
  const shelterPad = Math.exp(-((z - 20) * (z - 20)) / 420) * 7.5;
  const summitPad = Math.exp(-((z + 96) * (z + 96)) / 420) * 11.0;
  const startPad = Math.exp(-((z - 106) * (z - 106)) / 380) * 7.0;
  return 11.5 + shelterPad + summitPad + startPad;
}

/**
 * Shared seamless Stage 3 Sea of Dunes heightfield (used by BOTH main terrain & horizon skirt!)
 */
export function getStage3DuneSeaHeight(x, z) {
  const d1 = Math.sin(x * 0.019 + z * 0.014 + Math.sin(z * 0.009) * 1.45);
  const barchan = Math.pow(1.0 - Math.abs(d1), 1.18) * 11.5;
  const swell = Math.sin(x * 0.0085 - z * 0.0075) * 5.8 + Math.cos(x * 0.012 + z * 0.011) * 4.2;
  const ripples = Math.cos(x * 0.028 + z * 0.021) * 1.6;
  return 6.5 + barchan + swell + ripples;
}

/**
 * Stage 1 Sabkha (cracked salt flat) blend mask: 0 = Arabian sand, 1 = cracked mineral sabkha
 */
export function getStage1SabkhaMask(x, z) {
  const warp = Math.sin(x * 0.06 + z * 0.05) * 6.5 + Math.cos(x * 0.04 - z * 0.07) * 5.2;
  const dx = (x - 4.0) / 38.0;
  const dz = (z + 8.0) / 50.0;
  const d = Math.hypot(dx, dz) + warp * 0.012;
  return 1.0 - smoothstep(0.68, 1.04, d);
}

/**
 * Stage 2 Rocky Canyon Floor & Cliff Rock mask:
 * Keeps ALL steep canyon walls & rocky floor as natural stratified sandstone/gravel rock (ZERO fake yellow sand ramps!)
 */
export function getStage2RockMask(x, z) {
  const cx = getCanyonCenterX(z);
  const hw = getCanyonHalfWidth(z);
  const dist = Math.abs(x - cx);
  // Steep walls (dist > hw * 0.85) are 100% solid rock; canyon floor is 82% rocky slabs + 18% subtle wind-blown dust pockets
  if (dist > hw * 0.85) return 1.0;
  const dustPocket = Math.sin(x * 0.075 + z * 0.06) * 0.5 + 0.5;
  return 0.72 + 0.28 * dustPocket;
}

/**
 * Stage 3 Mountain Rock vs Sea of Dunes Sand blend mask
 */
export function getStage3RockMask(x, z, y) {
  const heightMask = smoothstep(26.0, 48.0, y);
  const noise = 0.88 + 0.12 * Math.sin(x * 0.09 - z * 0.08);
  return Math.max(0, Math.min(1, heightMask * noise));
}

export function getStageAnalyticHeight(stageId, x, z) {
  if (stageId === 1) {
    // STAGE 1 (NOON): Open Mirage Plains + Sunken Flat Cracked Sabkha + Gently Sculpted Camp & Monolith Basin
    const sabkha = getStage1SabkhaMask(x, z);
    const w1 = Math.sin(x * 0.022 + z * 0.016 + Math.sin(z * 0.012) * 1.4);
    const ridge1 = Math.pow(1.0 - Math.abs(w1), 1.18) * 5.2;
    const w2 = Math.sin(x * 0.041 - z * 0.031 + 1.4);
    const ridge2 = (1.0 - Math.abs(w2)) * 1.9;
    const swell = Math.sin(x * 0.011 - z * 0.009) * 4.2 + Math.cos(x * 0.008 + z * 0.013) * 3.5;
    const micro = Math.sin(x * 0.12 + z * 0.11) * 0.07;

    const distCenter = Math.hypot(x * 0.85, z * 0.72);
    const farRise = smoothstep(95, 195, distCenter) * 9.0 * (0.55 + 0.45 * Math.sin(x * 0.017 + z * 0.014));

    const duneH = swell * 0.42 + ridge1 + ridge2 + micro + farRise - 1.5;
    // Gently flatten around spawn (0, 114), abandoned camp (-14, 72), and northern canyon gate (4, -112)
    const startDip = Math.exp(-((x * x) / 360 + ((z - 114) * (z - 114)) / 360));
    const campFlat = Math.exp(-(((x + 14) * (x + 14)) / 260 + ((z - 72) * (z - 72)) / 260));
    const goalDip = Math.exp(-(((x - 4) * (x - 4)) / 420 + ((z + 112) * (z + 112)) / 420));
    const sculptedDune = duneH * (1.0 - startDip * 0.5) * (1.0 - campFlat * 0.72) * (1.0 - goalDip * 0.6);

    const sabkhaY = -1.65 + Math.sin(x * 0.14) * Math.cos(z * 0.13) * 0.03;
    return sculptedDune * (1.0 - sabkha) + sabkhaY * sabkha;
  }

  if (stageId === 2) {
    // STAGE 2 (AFTERNOON): Wide Flat Rocky Wadi Floor + Steep Stratified Canyon Rock Walls
    const cx = getCanyonCenterX(z);
    const hw = getCanyonHalfWidth(z);
    const dist = Math.abs(x - cx);

    const northSlope = smoothstep(130, -135, z) * 4.6;
    const floorUndul =
      Math.sin(x * 0.065 + z * 0.05) * 0.28 +
      Math.cos(x * 0.12 - z * 0.09) * 0.12 +
      northSlope;

    // Steep stratified canyon walls strictly OUTSIDE the wide walkable plaza half-width!
    const wallT = smoothstep(hw * 0.96, hw + 26.0, dist);
    const rawWall = wallT * (28.0 + 8.5 * Math.sin(z * 0.036 + x * 0.022));
    const strataLedge = Math.sin(rawWall * 0.72) * 1.1 * wallT;
    const rimNoise =
      (Math.sin(x * 0.045 + z * 0.036) * 3.2 + Math.cos(x * 0.028 - z * 0.051) * 2.6) * wallT;

    const creekDip = Math.exp(-((dist * dist) / 28.0)) * Math.exp(-((z + 14) * (z + 14)) / 950) * -0.55;
    return floorUndul + creekDip + rawWall + strataLedge + rimNoise;
  }

  if (stageId === 3) {
    // STAGE 3 (SUNSET): High Mountain Peak (92m) rising seamlessly out of the unified Sea of Dunes!
    const rx = getRidgeCenterX(z);
    const rhw = getRidgeHalfWidth(z);
    const distRidge = Math.abs(x - rx);

    const duneSea = getStage3DuneSeaHeight(x, z);

    const climbProgress = smoothstep(125, -92, z);
    const ridgeCrestY = 36.0 + climbProgress * 56.0 + Math.sin(z * 0.055) * 1.0;

    // Smooth dramatic mountain drop-off north of summit (z < -98) and laterally into the dune sea!
    const northCliffMask = 1.0 - smoothstep(-98, -138, z);
    const southTailMask = 1.0 - smoothstep(118, 165, z);
    const lateralMask = 1.0 - smoothstep(rhw * 0.72, rhw + 62.0, distRidge);
    const spurWave =
      (Math.sin(z * 0.058 + x * 0.038) * 0.12 + Math.cos(z * 0.030 - x * 0.045) * 0.09) *
      smoothstep(rhw * 0.9, rhw + 24.0, distRidge);
    const mountainMask = Math.max(0, Math.min(1, (lateralMask + spurWave) * northCliffMask * southTailMask));

    const blended = duneSea + (ridgeCrestY - duneSea) * Math.pow(mountainMask, 1.25);
    const rockMicro = (Math.sin(x * 0.13 + z * 0.11) * 0.18 + Math.cos(x * 0.08 - z * 0.15) * 0.14) * mountainMask;

    const trailSmooth = 1.0 - smoothstep(4.5, rhw * 0.92, distRidge);
    const trailHeight = ridgeCrestY + Math.sin(x * 0.10 + z * 0.08) * 0.11;
    if (z > -100 && z < 118 && trailSmooth > 0.01) {
      const m = trailSmooth * (1.0 - smoothstep(-94, -101, z));
      return blended * (1.0 - m) + trailHeight * m;
    }

    return blended + rockMicro;
  }

  // STAGE 4 (NIGHT): Moonlit Arabian Dunes leading smoothly to the Abandoned House Basin at (0, -68)
  const dxH = x - STAGE4_HOUSE_X;
  const dzH = z - STAGE4_HOUSE_Z;
  const valleyWarp = Math.sin(x * 0.08 + z * 0.06) * 2.5 + Math.cos(x * 0.05 - z * 0.08) * 2.0;
  const distHouse = Math.hypot(dxH * 0.92, (dzH - 1.5) * 1.08) + valleyWarp;

  const w1 = Math.sin(x * 0.023 + z * 0.017 + Math.sin(z * 0.011) * 1.4);
  const ridge1 = Math.pow(1.0 - Math.abs(w1), 1.16) * 4.8;
  const w2 = Math.sin(x * 0.044 - z * 0.031 + 1.5);
  const ridge2 = (1.0 - Math.abs(w2)) * 1.7;
  const swell = Math.sin(x * 0.011 - z * 0.008) * 3.6 + Math.cos(x * 0.009 + z * 0.014) * 3.0;

  const startCrest = Math.exp(-(((x + 4) * (x + 4)) / 460 + ((z - 122) * (z - 122)) / 420)) * 5.4;
  const sightlineClear = z > STAGE4_HOUSE_Z + 12 && z < 114 ? Math.exp(-((x * x) / 420)) * 0.50 : 0.0;

  let rawH = (swell * 0.42 + ridge1 + ridge2 - 2.0) * (1.0 - sightlineClear) + startCrest;
  const houseBlend = smoothstep(13.5, 30.0, distHouse);
  rawH *= houseBlend;

  const boxExtent = Math.max(Math.abs(dxH) - 9.8, Math.abs(dzH) - 8.6);
  const insideFootprint = 1.0 - smoothstep(0.0, 2.8, boxExtent);
  const h = STAGE4_HOUSE_BASE_Y + rawH;
  return h * (1.0 - insideFootprint) + (-0.14) * insideFootprint;
}

export function createStageHeightSampler(stageId) {
  const cfg = STAGE_TERRAIN_CONFIG[stageId] || STAGE_TERRAIN_CONFIG[1];
  const size = cfg.size;
  const segments = cfg.segments;
  const half = size * 0.5;
  const step = size / segments;

  return function getHeight(x, z) {
    if (x <= -half || x >= half || z <= -half || z >= half) {
      return getStageAnalyticHeight(stageId, x, z);
    }
    const gx = ((x + half) / size) * segments;
    const gz = ((z + half) / size) * segments;
    const ix = Math.min(segments - 1, Math.max(0, Math.floor(gx)));
    const iz = Math.min(segments - 1, Math.max(0, Math.floor(gz)));
    const fx = gx - ix;
    const fz = gz - iz;

    const x0 = -half + ix * step;
    const z0 = -half + iz * step;
    const x1 = x0 + step;
    const z1 = z0 + step;

    const h00 = getStageAnalyticHeight(stageId, x0, z0);
    const h10 = getStageAnalyticHeight(stageId, x1, z0);
    const h01 = getStageAnalyticHeight(stageId, x0, z1);
    const h11 = getStageAnalyticHeight(stageId, x1, z1);

    if (fx + fz <= 1.0) {
      return h00 + fx * (h10 - h00) + fz * (h01 - h00);
    }
    return h11 + (1.0 - fx) * (h01 - h11) + (1.0 - fz) * (h10 - h11);
  };
}

export function createStageNormalSampler(getHeightFn) {
  return function getNormal(x, z, out = { x: 0, y: 1, z: 0 }) {
    const eps = 0.5;
    const hL = getHeightFn(x - eps, z);
    const hR = getHeightFn(x + eps, z);
    const hD = getHeightFn(x, z - eps);
    const hU = getHeightFn(x, z + eps);
    const nx = hL - hR;
    const ny = 2.0 * eps;
    const nz = hD - hU;
    const len = Math.hypot(nx, ny, nz) || 1;
    out.x = nx / len;
    out.y = ny / len;
    out.z = nz / len;
    return out;
  };
}

export function createStageSurfaceSampler(stageId, getHeightFn) {
  if (stageId === 1) {
    return (x, z) => (getStage1SabkhaMask(x, z) > 0.45 ? 'sabkha' : 'sand');
  }
  if (stageId === 2) {
    return (x, z) => (getStage2RockMask(x, z) > 0.35 ? 'rock' : 'sand');
  }
  if (stageId === 3) {
    return (x, z) => (getHeightFn(x, z) > 34.0 ? 'rock' : 'sand');
  }
  return () => 'sand';
}

/**
 * Shared exact 1:1 sandstone mesa & cliff radial profile with deep natural talus skirt!
 */
export function getMesaVisualRadiusAt(ang, yNorm) {
  const y = Math.max(0, Math.min(1, yNorm));
  const baseR = 1.16 + (0.52 - 1.16) * y;
  // Natural sweeping rocky talus apron near ground level for organic ground contact!
  const talusFlair = y < 0.38 ? 1.0 + Math.pow((0.38 - y) / 0.38, 1.5) * 0.46 : 1.0;
  const cliffStep = 1.0 + 0.055 * Math.sin(y * 22.0) + 0.03 * Math.cos(y * 37.0);
  const radialBreakup = 1.0 + 0.14 * Math.sin(ang * 3.0 + 0.7) + 0.09 * Math.cos(ang * 5.0 - 0.4);
  const factor = y > 0.96 ? radialBreakup : radialBreakup * talusFlair * cliffStep;
  return baseR * factor;
}
