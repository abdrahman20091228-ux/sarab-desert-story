/**
 * Multi-Stage Deterministic Arabian Desert Terrain Engine — SARAB v5.0
 * Provides 100% Visual-Physics Triangle Parity (exact PlaneGeometry barycentric interpolation)
 * for all 4 separate exploration stages:
 *   Stage 1 (Noon): Open Mirage Plains + Cracked Sabkha Salt Flat (~235m)
 *   Stage 2 (Afternoon): Winding Rocky Canyon + Towering Stratified Walls (~265m)
 *   Stage 3 (Sunset/Dusk): High Mountain Ridge Climbing to 92m Peak Overlooking Sea of Dunes (~230m)
 *   Stage 4 (Night): Moonlit Desert Dunes Leading to the Abandoned House Basin (~205m)
 */

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export const STAGE_TERRAIN_CONFIG = {
  1: { size: 420, segments: 112 },
  2: { size: 420, segments: 120 },
  3: { size: 480, segments: 124 },
  4: { size: 420, segments: 112 },
};

export const STAGE4_HOUSE_X = 0;
export const STAGE4_HOUSE_Z = -68;
export const STAGE4_HOUSE_BASE_Y = 0.0;

/**
 * Stage 2 winding S-curve canyon centerline X(z) and walkable floor half-width(z)
 */
export function getCanyonCenterX(z) {
  return Math.sin(z * 0.021) * 24.0 + Math.cos(z * 0.011) * 7.5;
}

export function getCanyonHalfWidth(z) {
  // Wider plazas around Ruins 1 (z≈+42), Oasis Palms (z≈-12), and Ruins 2 (z≈-64)
  const plaza1 = Math.exp(-((z - 42) * (z - 42)) / 580) * 7.5;
  const oasis = Math.exp(-((z + 12) * (z + 12)) / 680) * 9.5;
  const plaza2 = Math.exp(-((z + 64) * (z + 64)) / 520) * 7.0;
  return 15.5 + plaza1 + oasis + plaza2;
}

/**
 * Stage 3 mountain ridge centerline X(z) and walkable ridge half-width(z)
 */
export function getRidgeCenterX(z) {
  return Math.sin((z + 18) * 0.021) * 16.5;
}

export function getRidgeHalfWidth(z) {
  // Broad overlook plateau at the summit (z ≈ -106)
  const summitPad = Math.exp(-((z + 106) * (z + 106)) / 360) * 11.0;
  const startPad = Math.exp(-((z - 108) * (z - 108)) / 380) * 7.0;
  return 11.5 + summitPad + startPad;
}

/**
 * Stage 1 Sabkha (cracked salt flat) blend mask: 0 = golden Arabian sand, 1 = cracked mineral sabkha
 */
export function getStage1SabkhaMask(x, z) {
  const warp = Math.sin(x * 0.06 + z * 0.05) * 6.5 + Math.cos(x * 0.04 - z * 0.07) * 5.2;
  const dx = (x - 4.0) / 38.0;
  const dz = (z + 8.0) / 50.0;
  const d = Math.hypot(dx, dz) + warp * 0.012;
  return 1.0 - smoothstep(0.68, 1.04, d);
}

/**
 * Stage 2 Rocky Canyon Floor blend mask: 1 = rocky sandstone slabs & gravel, 0 = drifted desert sand
 */
export function getStage2RockMask(x, z) {
  const cx = getCanyonCenterX(z);
  const hw = getCanyonHalfWidth(z);
  const dist = Math.abs(x - cx);
  const floorMask = 1.0 - smoothstep(hw * 0.55, hw * 1.15, dist);
  // Subtle sandy wind-drifts across parts of the wadi floor
  const sandDrift = Math.sin(x * 0.08 + z * 0.065) * 0.5 + 0.5;
  return Math.max(0, Math.min(1, floorMask * (0.62 + 0.38 * sandDrift)));
}

/**
 * Stage 3 Mountain Rock vs Sand blend mask: 1 = high mountain bedrock, 0 = lower sea of sand dunes
 */
export function getStage3RockMask(x, z, y) {
  const heightMask = smoothstep(22.0, 44.0, y);
  const noise = 0.85 + 0.15 * Math.sin(x * 0.09 - z * 0.08);
  return Math.max(0, Math.min(1, heightMask * noise));
}

/**
 * Analytic heightfield for each of the 4 stages
 */
export function getStageAnalyticHeight(stageId, x, z) {
  if (stageId === 1) {
    // STAGE 1 (NOON): Sweeping open Arabian sand dunes + sunken flat cracked sabkha salt basin
    const sabkha = getStage1SabkhaMask(x, z);
    const w1 = Math.sin(x * 0.022 + z * 0.016 + Math.sin(z * 0.012) * 1.4);
    const ridge1 = Math.pow(1.0 - Math.abs(w1), 1.18) * 5.6;
    const w2 = Math.sin(x * 0.041 - z * 0.031 + 1.4);
    const ridge2 = (1.0 - Math.abs(w2)) * 2.1;
    const swell = Math.sin(x * 0.011 - z * 0.009) * 4.5 + Math.cos(x * 0.008 + z * 0.013) * 3.8;
    const micro = Math.sin(x * 0.12 + z * 0.11) * 0.08;

    // Gentle framing perimeter dunes in the far distance
    const distCenter = Math.hypot(x * 0.85, z * 0.72);
    const farRise = smoothstep(95, 195, distCenter) * 9.5 * (0.55 + 0.45 * Math.sin(x * 0.017 + z * 0.014));

    const duneH = swell * 0.42 + ridge1 + ridge2 + micro + farRise - 1.5;
    // Gently clear a soft walking vista around spawn (0, 114) and northern canyon mouth (6, -118)
    const startDip = Math.exp(-((x * x) / 340 + ((z - 114) * (z - 114)) / 340));
    const goalDip = Math.exp(-(((x - 6) * (x - 6)) / 420 + ((z + 118) * (z + 118)) / 420));
    const sculptedDune = duneH * (1.0 - startDip * 0.45) * (1.0 - goalDip * 0.55);

    // Blend seamlessly into the flat sunken cracked sabkha basin (y ≈ -1.65)
    const sabkhaY = -1.65 + Math.sin(x * 0.14) * Math.cos(z * 0.13) * 0.035;
    return sculptedDune * (1.0 - sabkha) + sabkhaY * sabkha;
  }

  if (stageId === 2) {
    // STAGE 2 (AFTERNOON): Winding Rocky Wadi Canyon flanked by towering stratified cliffs
    const cx = getCanyonCenterX(z);
    const hw = getCanyonHalfWidth(z);
    const dist = Math.abs(x - cx);

    // Gentle rocky wadi floor undulations + gentle slope upward toward northern mountain pass
    const northSlope = smoothstep(130, -135, z) * 5.2;
    const floorUndul =
      Math.sin(x * 0.075 + z * 0.055) * 0.42 +
      Math.cos(x * 0.13 - z * 0.09) * 0.18 +
      northSlope;

    // Dramatic stepped stratified cliff walls rising rapidly beyond canyon floor half-width!
    const wallT = smoothstep(hw * 0.92, hw + 28.0, dist);
    const rawWall = wallT * (26.0 + 9.0 * Math.sin(z * 0.038 + x * 0.024));
    // Terraced sedimentary cliff ledges (stepped strata!)
    const strataLedge = Math.sin(rawWall * 0.72) * 1.15 * wallT;
    const rimNoise =
      (Math.sin(x * 0.045 + z * 0.036) * 3.4 + Math.cos(x * 0.028 - z * 0.051) * 2.8) * wallT;

    // Gentle dry creek channel down the center of the oasis bend
    const creekDip = Math.exp(-((dist * dist) / 26.0)) * Math.exp(-((z + 12) * (z + 12)) / 950) * -0.75;

    return floorUndul + creekDip + rawWall + strataLedge + rimNoise;
  }

  if (stageId === 3) {
    // STAGE 3 (SUNSET/DUSK): High Mountain Ridge climbing from 38m up to 92m Peak overlooking a vast Sea of Dunes!
    const rx = getRidgeCenterX(z);
    const rhw = getRidgeHalfWidth(z);
    const distRidge = Math.abs(x - rx);

    // Lower Sea of Arabian Dunes (y ≈ 2..20m) sculpted with dramatic sweeping barchan crests catching sunset light!
    const d1 = Math.sin(x * 0.022 + z * 0.017 + Math.sin(z * 0.011) * 1.45);
    const duneSea =
      Math.pow(1.0 - Math.abs(d1), 1.15) * 10.5 +
      Math.sin(x * 0.012 - z * 0.010) * 5.2 +
      Math.cos(x * 0.032 + z * 0.024) * 2.4 +
      6.5;

    // Longitudinal ridge elevation: climbs smoothly from ~38m (z=+115) up to ~92m summit rim (z=-96),
    // then drops steeply off the dramatic cliff promontory right past z=-102 so the Sea of Dunes below fills the vista!
    const climbProgress = smoothstep(125, -94, z);
    const ridgeCrestY = 36.0 + climbProgress * 56.0 + Math.sin(z * 0.06) * 1.1;

    // Sharp dramatic cliff drop-off immediately north of the summit overlook rim (z = -100 .. -132)!
    const northCliffMask = 1.0 - smoothstep(-100, -132, z);
    const lateralMask = 1.0 - smoothstep(rhw * 0.68, rhw + 46.0, distRidge);
    const spurWave =
      (Math.sin(z * 0.065 + x * 0.04) * 0.14 + Math.cos(z * 0.032 - x * 0.05) * 0.10) *
      smoothstep(rhw * 0.88, rhw + 20.0, distRidge);
    const mountainMask = Math.max(0, Math.min(1, (lateralMask + spurWave) * northCliffMask));

    const blended = duneSea + (ridgeCrestY - duneSea) * Math.pow(mountainMask, 1.22);
    const rockMicro = (Math.sin(x * 0.14 + z * 0.12) * 0.22 + Math.cos(x * 0.08 - z * 0.16) * 0.18) * mountainMask;

    // Smooth walkable ridge trail terminating cleanly at the overlook edge (z = -100)
    const trailSmooth = 1.0 - smoothstep(4.2, rhw * 0.92, distRidge);
    const trailHeight = ridgeCrestY + Math.sin(x * 0.11 + z * 0.09) * 0.12;
    if (z > -102 && trailSmooth > 0.01) {
      const m = trailSmooth * (1.0 - smoothstep(-96, -103, z));
      return blended * (1.0 - m) + trailHeight * m;
    }

    return blended + rockMicro;
  }

  // STAGE 4 (NIGHT): Silent Moonlit Arabian Dunes leading to the Abandoned House Basin at (0, -68)
  const dxH = x - STAGE4_HOUSE_X;
  const dzH = z - STAGE4_HOUSE_Z;
  const valleyWarp = Math.sin(x * 0.08 + z * 0.06) * 2.5 + Math.cos(x * 0.05 - z * 0.08) * 2.0;
  const distHouse = Math.hypot(dxH * 0.92, (dzH - 1.5) * 1.08) + valleyWarp;

  const w1 = Math.sin(x * 0.023 + z * 0.017 + Math.sin(z * 0.011) * 1.4);
  const ridge1 = Math.pow(1.0 - Math.abs(w1), 1.16) * 5.2;
  const w2 = Math.sin(x * 0.044 - z * 0.031 + 1.5);
  const ridge2 = (1.0 - Math.abs(w2)) * 1.9;
  const swell = Math.sin(x * 0.011 - z * 0.008) * 3.8 + Math.cos(x * 0.009 + z * 0.014) * 3.2;

  // Gently elevated starting dune crest around (-6, 126) so player sees the glowing house lantern in the distance!
  const startCrest = Math.exp(-(((x + 6) * (x + 6)) / 480 + ((z - 126) * (z - 126)) / 420)) * 5.8;
  // Soft corridor lowering between start and house so sightline to the house lantern stays clear!
  const sightlineClear =
    z > STAGE4_HOUSE_Z + 12 && z < 116
      ? Math.exp(-((x * x) / 380)) * 0.52
      : 0.0;

  let rawH = (swell * 0.42 + ridge1 + ridge2 - 2.1) * (1.0 - sightlineClear) + startCrest;

  // Smooth flat wadi basin around the Abandoned House (0, -68)
  const houseBlend = smoothstep(13.5, 30.0, distHouse);
  rawH *= houseBlend;

  // Strictly keep interior floor footprint below stone slab (-0.14m)
  const boxExtent = Math.max(Math.abs(dxH) - 9.8, Math.abs(dzH) - 8.6);
  const insideFootprint = 1.0 - smoothstep(0.0, 2.8, boxExtent);
  const h = STAGE4_HOUSE_BASE_Y + rawH;
  return h * (1.0 - insideFootprint) + (-0.14) * insideFootprint;
}

/**
 * Exact triangle-interpolated height matching Three.js PlaneGeometry(size, size, segments, segments)
 * rotated by -PI/2 around X. Guarantees 100% visual-physics terrain parity across all 4 stages!
 */
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
 * Shared exact 1:1 sandstone mesa & stratified cliff radial profile used by BOTH geometry & PhysicsWorld!
 */
export function getMesaVisualRadiusAt(ang, yNorm) {
  const y = Math.max(0, Math.min(1, yNorm));
  const baseR = 1.08 + (0.54 - 1.08) * y;
  const talusFlair = y < 0.35 ? 1.0 + (0.35 - y) * 0.42 : 1.0;
  const cliffStep = 1.0 + 0.055 * Math.sin(y * 22.0) + 0.03 * Math.cos(y * 37.0);
  const radialBreakup = 1.0 + 0.14 * Math.sin(ang * 3.0 + 0.7) + 0.09 * Math.cos(ang * 5.0 - 0.4);
  const factor = y > 0.96 ? radialBreakup : radialBreakup * talusFlair * cliffStep;
  return baseR * factor;
}
