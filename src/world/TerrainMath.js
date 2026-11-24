/**
 * Shared deterministic Arabian desert terrain heightfield + exact visual triangle barycentric interpolation:
 * - Sweeping barchan sand dunes with natural wind-carved asymmetry (NO artificial circular bowl around the house!)
 * - Dramatic surrounding desert hills & elevated sand ridges (تلال صحراوية)
 * - Clean flat compound footprint strictly under the 15.2m x 12.6m abandoned desert estate + natural sand drifts
 * - `getVisualTerrainHeight(x, z)` interpolates the exact 96x96 visual terrain mesh triangles so feet NEVER float or sink!
 */

export const HOUSE_CENTER_X = 0;
export const HOUSE_CENTER_Z = -18;
export const HOUSE_BASE_Y = 0.0;
export const TERRAIN_SIZE = 380;
export const TERRAIN_SEGMENTS = 96;

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function getAnalyticTerrainHeight(x, z) {
  const dxHouse = x - HOUSE_CENTER_X;
  const dzHouse = z - HOUSE_CENTER_Z;

  // Anisotropic organic valley distance (eliminates the artificial circular "dish/bowl" look around the house!)
  const valleyWarp = Math.sin(x * 0.09 + z * 0.07) * 2.8 + Math.cos(x * 0.05 - z * 0.08) * 2.1;
  const distHouse = Math.hypot(dxHouse * 0.92, (dzHouse - 1.5) * 1.08) + valleyWarp;
  const distWake = Math.hypot(x + 11.0, z - 15.0);

  // Sculpted Arabian barchan / wind-ridge dunes
  const w1 = Math.sin(x * 0.022 + z * 0.016 + Math.sin(z * 0.011) * 1.45);
  const ridge1 = Math.pow(1.0 - Math.abs(w1), 1.15) * 4.7;

  const w2 = Math.sin(x * 0.044 - z * 0.032 + 1.7 + Math.cos(x * 0.019) * 0.9);
  const ridge2 = (1.0 - Math.abs(w2)) * 2.0;

  const swell = Math.sin(x * 0.01 - z * 0.008) * 4.3 + Math.cos(x * 0.008 + z * 0.014) * 3.7;
  const micro = Math.sin(x * 0.13 + z * 0.1) * 0.09;

  // Dramatic tall rolling desert hills & amphitheater ridges framing the valley (kept clear of house window/door sightlines!)
  const hillWest = Math.exp(-((x + 68) * (x + 68) / 620 + (z - 16) * (z - 16) / 880)) * 13.5;
  const hillNorth = Math.exp(-((x - 38) * (x - 38) / 960 + (z + 88) * (z + 88) / 560)) * 14.5;
  const hillEast = Math.exp(-((x - 64) * (x - 64) / 680 + (z + 8) * (z + 8) / 840)) * 14.5;
  const hillSouth = Math.exp(-((x + 28) * (x + 28) / 760 + (z - 64) * (z - 64) / 640)) * 13.5;
  const distOrigin = Math.hypot(x, z);
  const farDune = smoothstep(62, 165, distOrigin) * 8.5 * (0.5 + 0.5 * Math.sin(x * 0.018 + z * 0.013));

  let rawH = swell * 0.45 + ridge1 + ridge2 + micro + hillWest + hillNorth + hillEast + hillSouth + farDune - 2.65;

  // Natural asymmetric wadi blend around the estate + front/back courtyards
  const houseBlend = smoothstep(13.2, 28.5, distHouse);
  rawH *= houseBlend;

  // Gentle dip near wake-up spot so player looks up at dunes, hills & grand outpost
  const wakeFlatten = smoothstep(4.0, 14.5, distWake);
  rawH = rawH * (0.38 + 0.62 * wakeFlatten);

  // Exterior windblown sand drifts piled near outer corners (strictly clear of West window & back doorway!)
  const outsideBox = smoothstep(10.6, 12.6, Math.max(Math.abs(dxHouse), Math.abs(dzHouse) * 1.15));
  const driftEast = Math.exp(-((x - 11.2) * (x - 11.2) / 14 + (z + 17.5) * (z + 17.5) / 26)) * 1.15 * outsideBox;
  const driftWestCorner = Math.exp(-((x + 11.5) * (x + 11.5) / 14 + (z + 24.8) * (z + 24.8) / 16)) * 0.75 * outsideBox;
  const driftBackCorner = Math.exp(-((x - 9.5) * (x - 9.5) / 14 + (z + 28.5) * (z + 28.5) / 16)) * 0.85 * outsideBox;

  // Keep back courtyard & West study window sightline clearly open to the oasis palms, well & sky!
  const backYardClear = Math.exp(-((dxHouse - 0.0) * (dxHouse - 0.0) / 85 + (dzHouse + 11.0) * (dzHouse + 11.0) / 70));
  const westSightClear = Math.exp(-((dxHouse + 12.5) * (dxHouse + 12.5) / 48 + (dzHouse) * (dzHouse) / 36));
  rawH *= (1.0 - backYardClear * 0.92) * (1.0 - westSightClear * 0.82);

  // Keep enlarged house interior (15.2m x 12.6m) + 1 terrain cell margin strictly below stone floor
  // (Prevents 4m terrain triangles from ever cutting through interior study floor!)
  const boxExtent = Math.max(Math.abs(dxHouse) - 9.8, Math.abs(dzHouse) - 8.6);
  const insideFootprint = 1.0 - smoothstep(0.0, 2.8, boxExtent);
  const h = HOUSE_BASE_Y + rawH + driftEast + driftWestCorner + driftBackCorner;
  return h * (1.0 - insideFootprint) + (-0.14) * insideFootprint;
}

/**
 * Exact triangle-interpolated height matching Three.js PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE, TERRAIN_SEGMENTS, TERRAIN_SEGMENTS)
 * rotated by -PI/2 around X. Guarantees 100% visual-physics terrain parity!
 */
export function getTerrainHeight(x, z) {
  const half = TERRAIN_SIZE * 0.5;
  if (x <= -half || x >= half || z <= -half || z >= half) {
    return getAnalyticTerrainHeight(x, z);
  }

  const gx = ((x + half) / TERRAIN_SIZE) * TERRAIN_SEGMENTS;
  const gz = ((z + half) / TERRAIN_SIZE) * TERRAIN_SEGMENTS;
  const ix = Math.min(TERRAIN_SEGMENTS - 1, Math.max(0, Math.floor(gx)));
  const iz = Math.min(TERRAIN_SEGMENTS - 1, Math.max(0, Math.floor(gz)));
  const fx = gx - ix;
  const fz = gz - iz;

  const step = TERRAIN_SIZE / TERRAIN_SEGMENTS;
  const x0 = -half + ix * step;
  const z0 = -half + iz * step;
  const x1 = x0 + step;
  const z1 = z0 + step;

  const h00 = getAnalyticTerrainHeight(x0, z0);
  const h10 = getAnalyticTerrainHeight(x1, z0);
  const h01 = getAnalyticTerrainHeight(x0, z1);
  const h11 = getAnalyticTerrainHeight(x1, z1);

  // Three.js PlaneGeometry splits each cell along diagonal (1,0)-(0,1)
  if (fx + fz <= 1.0) {
    return h00 + fx * (h10 - h00) + fz * (h01 - h00);
  } else {
    return h11 + (1.0 - fx) * (h01 - h11) + (1.0 - fz) * (h10 - h11);
  }
}

export function getTerrainNormal(x, z, out = { x: 0, y: 1, z: 0 }) {
  const eps = 0.45;
  const hL = getTerrainHeight(x - eps, z);
  const hR = getTerrainHeight(x + eps, z);
  const hD = getTerrainHeight(x, z - eps);
  const hU = getTerrainHeight(x, z + eps);
  const nx = hL - hR;
  const ny = 2.0 * eps;
  const nz = hD - hU;
  const len = Math.hypot(nx, ny, nz) || 1;
  out.x = nx / len;
  out.y = ny / len;
  out.z = nz / len;
  return out;
}
