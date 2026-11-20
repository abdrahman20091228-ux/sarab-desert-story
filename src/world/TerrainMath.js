/**
 * Shared deterministic Arabian sand dune heightfield.
 * Used by both terrain mesh generation AND first-person physics so feet never float or sink.
 * Keeps the abandoned house interior footprint cleanly flat below the stone floor (zero sand bleed!).
 */

export const HOUSE_CENTER_X = 0;
export const HOUSE_CENTER_Z = -12;
export const HOUSE_BASE_Y = 0.0;

function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

export function getTerrainHeight(x, z) {
  const dxHouse = x - HOUSE_CENTER_X;
  const dzHouse = z - HOUSE_CENTER_Z;
  const distHouse = Math.hypot(dxHouse, dzHouse);

  const distWake = Math.hypot(x + 8.5, z - 9.5);

  // Sculpted Arabian barchan / wind-ridge dunes
  const w1 = Math.sin(x * 0.024 + z * 0.017 + Math.sin(z * 0.012) * 1.4);
  const ridge1 = (1.0 - Math.abs(w1)) * 4.2;

  const w2 = Math.sin(x * 0.048 - z * 0.036 + 1.7 + Math.cos(x * 0.02) * 0.9);
  const ridge2 = (1.0 - Math.abs(w2)) * 1.95;

  const swell = Math.sin(x * 0.011 - z * 0.009) * 3.8 + Math.cos(x * 0.008 + z * 0.015) * 3.2;
  const micro = Math.sin(x * 0.14 + z * 0.11) * 0.12 + Math.cos(x * 0.21 - z * 0.17) * 0.07;

  // Dramatic tall horizon dunes further out
  const distOrigin = Math.hypot(x, z);
  const horizonBoost = smoothstep(42, 165, distOrigin) * 11.5;
  const farDune = Math.pow(Math.max(0, Math.sin(x * 0.013 + z * 0.009 + 0.8)), 2) * horizonBoost;

  let rawH = swell * 0.45 + ridge1 + ridge2 + micro + farDune - 2.6;

  // Smooth plateau blend around the abandoned house
  const houseBlend = smoothstep(9.5, 26.0, distHouse);
  rawH *= houseBlend;

  // Gentle bowl near wake-up spot
  const wakeFlatten = smoothstep(4.0, 15.0, distWake);
  rawH = rawH * (0.35 + 0.65 * wakeFlatten);

  // Exterior windblown sand drifts piling up strictly OUTSIDE the east & back walls (never clipping indoors!)
  const outsideBox = smoothstep(4.5, 5.8, Math.max(Math.abs(dxHouse), Math.abs(dzHouse) * 1.18));
  const driftSide = Math.exp(-((x - 6.2) * (x - 6.2) / 10 + (z + 11.5) * (z + 11.5) / 18)) * 0.95 * outsideBox;
  const driftBack = Math.exp(-((x + 5.8) * (x + 5.8) / 14 + (z + 18.0) * (z + 18.0) / 10)) * 0.82 * outsideBox;

  // Keep house interior footprint depressed cleanly beneath stone floor slab (y = -0.10)
  const insideFootprint = 1.0 - smoothstep(4.2, 5.4, Math.max(Math.abs(dxHouse), Math.abs(dzHouse) * 1.18));
  const h = HOUSE_BASE_Y + rawH + driftSide + driftBack;
  return h * (1.0 - insideFootprint) + (-0.1) * insideFootprint;
}
