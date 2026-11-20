/**
 * Shared deterministic Arabian desert terrain heightfield with:
 * - Sweeping barchan sand dunes
 * - Dramatic surrounding desert hills & elevated sand ridges (تلال صحراوية)
 * - Clean flat compound footprint for the enlarged 15m x 12.6m abandoned desert estate
 */

export const HOUSE_CENTER_X = 0;
export const HOUSE_CENTER_Z = -18;
export const HOUSE_BASE_Y = 0.0;

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function getTerrainHeight(x, z) {
  const dxHouse = x - HOUSE_CENTER_X;
  const dzHouse = z - HOUSE_CENTER_Z;
  const distHouse = Math.hypot(dxHouse, dzHouse);

  const distWake = Math.hypot(x + 11.0, z - 15.0);

  // Sculpted Arabian barchan / wind-ridge dunes
  const w1 = Math.sin(x * 0.022 + z * 0.016 + Math.sin(z * 0.011) * 1.45);
  const ridge1 = (1.0 - Math.abs(w1)) * 4.6;

  const w2 = Math.sin(x * 0.044 - z * 0.032 + 1.7 + Math.cos(x * 0.019) * 0.9);
  const ridge2 = (1.0 - Math.abs(w2)) * 2.1;

  const swell = Math.sin(x * 0.01 - z * 0.008) * 4.4 + Math.cos(x * 0.008 + z * 0.014) * 3.8;
  const micro = Math.sin(x * 0.13 + z * 0.1) * 0.11;

  // Dramatic tall rolling desert hills & amphitheater ridges framing the valley!
  const hillWest = Math.exp(-((x + 56) * (x + 56) / 620 + (z + 24) * (z + 24) / 880)) * 16.5;
  const hillNorth = Math.exp(-((x - 14) * (x - 14) / 960 + (z + 78) * (z + 78) / 560)) * 19.5;
  const hillEast = Math.exp(-((x - 62) * (x - 62) / 680 + (z + 8) * (z + 8) / 840)) * 15.0;
  const hillSouth = Math.exp(-((x + 28) * (x + 28) / 760 + (z - 64) * (z - 64) / 640)) * 14.0;
  const distOrigin = Math.hypot(x, z);
  const farDune = smoothstep(55, 165, distOrigin) * 9.5 * (0.5 + 0.5 * Math.sin(x * 0.018 + z * 0.013));

  let rawH = swell * 0.45 + ridge1 + ridge2 + micro + hillWest + hillNorth + hillEast + hillSouth + farDune - 2.7;

  // Smooth natural sandy basin around the enlarged estate + courtyard
  const houseBlend = smoothstep(14.5, 34.0, distHouse);
  rawH *= houseBlend;

  // Gentle dip near wake-up spot so player looks up at dunes, hills & grand outpost
  const wakeFlatten = smoothstep(4.5, 16.0, distWake);
  rawH = rawH * (0.35 + 0.65 * wakeFlatten);

  // Exterior windblown sand drifts against outer walls (strictly outside 15x12.6 house!)
  const outsideBox = smoothstep(7.8, 9.6, Math.max(Math.abs(dxHouse), Math.abs(dzHouse) * 1.18));
  const driftEast = Math.exp(-((x - 9.4) * (x - 9.4) / 14 + (z + 18.0) * (z + 18.0) / 26)) * 1.25 * outsideBox;
  const driftBack = Math.exp(-((x + 7.5) * (x + 7.5) / 18 + (z + 26.5) * (z + 26.5) / 14)) * 1.1 * outsideBox;

  // Keep enlarged house interior (15m x 12.6m) cleanly recessed below stone floor
  const insideFootprint = 1.0 - smoothstep(7.2, 8.6, Math.max(Math.abs(dxHouse), Math.abs(dzHouse) * 1.18));
  const h = HOUSE_BASE_Y + rawH + driftEast + driftBack;
  return h * (1.0 - insideFootprint) + (-0.12) * insideFootprint;
}
