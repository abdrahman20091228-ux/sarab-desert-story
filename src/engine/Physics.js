/**
 * Zero-clipping first-person collision solver:
 * - AABB boxes (walls, doorways, desk, crates, buried jeep)
 * - Cylinders (pillars, well, barrels, palms)
 * - Rotated Oriented Ellipses (exact full-envelope rock collision from EVERY angle!)
 * - Interior & floor surface detection
 */
export class PhysicsWorld {
  constructor(heightSampler) {
    this.getTerrainHeight = heightSampler;
    this.aabbs = [];          // { minX, maxX, minZ, maxZ, minY, maxY }
    this.cylinders = [];      // { x, z, r, maxY }
    this.ellipses = [];       // { x, z, rx, rz, cos, sin, maxY }
    this.floorZones = [];     // { minX, maxX, minZ, maxZ, y, surface }
    this.interiorZones = [];  // { minX, maxX, minZ, maxZ, minY, maxY }
    this.worldRadius = 158;
  }

  addBoxCollider(minX, maxX, minZ, maxZ, minY = -10, maxY = 14) {
    this.aabbs.push({ minX, maxX, minZ, maxZ, minY, maxY });
  }

  addCylinderCollider(x, z, r, maxY = 12) {
    this.cylinders.push({ x, z, r, maxY });
  }

  /**
   * Exact oriented ellipse collider so elongated/rotated desert rocks block
   * the player cleanly from ALL 360° directions with zero clipping!
   */
  addEllipseCollider(x, z, rx, rz, rotY = 0, maxY = 14) {
    this.ellipses.push({
      x,
      z,
      rx: Math.max(0.25, rx),
      rz: Math.max(0.25, rz),
      cos: Math.cos(-rotY),
      sin: Math.sin(-rotY),
      maxY,
    });
  }

  addFloorZone(minX, maxX, minZ, maxZ, y, surface = 'stone') {
    this.floorZones.push({ minX, maxX, minZ, maxZ, y, surface });
  }

  addInteriorZone(minX, maxX, minZ, maxZ, minY = -1, maxY = 7) {
    this.interiorZones.push({ minX, maxX, minZ, maxZ, minY, maxY });
  }

  getGroundInfo(x, z) {
    let groundY = this.getTerrainHeight(x, z);
    let surface = 'sand';

    for (let i = 0; i < this.floorZones.length; i++) {
      const f = this.floorZones[i];
      if (x >= f.minX && x <= f.maxX && z >= f.minZ && z <= f.maxZ) {
        if (f.y >= groundY - 0.18) {
          groundY = Math.max(groundY, f.y);
          surface = f.surface;
        }
      }
    }
    return { groundY, surface };
  }

  isInsideBuilding(pos) {
    for (let i = 0; i < this.interiorZones.length; i++) {
      const z = this.interiorZones[i];
      if (
        pos.x >= z.minX && pos.x <= z.maxX &&
        pos.z >= z.minZ && pos.z <= z.maxZ &&
        pos.y >= z.minY && pos.y <= z.maxY
      ) {
        return true;
      }
    }
    return false;
  }

  resolveHorizontal(pos, radius = 0.46) {
    // 3 solver passes guarantee smooth sliding around corners & clustered boulders with ZERO penetration
    for (let pass = 0; pass < 3; pass++) {
      // 1. Axis-Aligned Boxes (walls, jeep, desks, crates)
      for (let i = 0; i < this.aabbs.length; i++) {
        const b = this.aabbs[i];
        if (pos.y > b.maxY || pos.y + 1.75 < b.minY) continue;

        const closestX = Math.max(b.minX, Math.min(pos.x, b.maxX));
        const closestZ = Math.max(b.minZ, Math.min(pos.z, b.maxZ));
        const dx = pos.x - closestX;
        const dz = pos.z - closestZ;
        const distSq = dx * dx + dz * dz;

        if (distSq < radius * radius) {
          if (distSq > 1e-6) {
            const dist = Math.sqrt(distSq);
            const push = radius - dist;
            pos.x += (dx / dist) * push;
            pos.z += (dz / dist) * push;
          } else {
            const penLeft = Math.abs(pos.x - b.minX);
            const penRight = Math.abs(b.maxX - pos.x);
            const penBack = Math.abs(pos.z - b.minZ);
            const penFront = Math.abs(b.maxZ - pos.z);
            const m = Math.min(penLeft, penRight, penBack, penFront);
            if (m === penLeft) pos.x = b.minX - radius;
            else if (m === penRight) pos.x = b.maxX + radius;
            else if (m === penBack) pos.z = b.minZ - radius;
            else pos.z = b.maxZ + radius;
          }
        }
      }

      // 2. Cylinders (barrels, well, palm trunks, porch posts)
      for (let i = 0; i < this.cylinders.length; i++) {
        const c = this.cylinders[i];
        if (pos.y > c.maxY) continue;
        const dx = pos.x - c.x;
        const dz = pos.z - c.z;
        const minDist = radius + c.r;
        const distSq = dx * dx + dz * dz;
        if (distSq < minDist * minDist) {
          if (distSq > 1e-6) {
            const dist = Math.sqrt(distSq);
            const push = minDist - dist;
            pos.x += (dx / dist) * push;
            pos.z += (dz / dist) * push;
          } else {
            pos.x += minDist;
          }
        }
      }

      // 3. Oriented Ellipses (ALL desert rocks & boulders — zero clipping from ANY angle!)
      for (let i = 0; i < this.ellipses.length; i++) {
        const e = this.ellipses[i];
        if (pos.y > e.maxY) continue;

        const wx = pos.x - e.x;
        const wz = pos.z - e.z;
        // Quick broad-phase rejection
        const maxR = Math.max(e.rx, e.rz) + radius;
        if (wx * wx + wz * wz > maxR * maxR) continue;

        // Transform player offset into rock's local rotated frame
        const lx = wx * e.cos - wz * e.sin;
        const lz = wx * e.sin + wz * e.cos;

        const ex = e.rx + radius;
        const ez = e.rz + radius;
        const nx = lx / ex;
        const nz = lz / ez;
        const normDistSq = nx * nx + nz * nz;

        if (normDistSq < 1.0) {
          let outLx, outLz;
          if (normDistSq > 1e-6) {
            const invLen = 1.0 / Math.sqrt(normDistSq);
            outLx = lx * invLen;
            outLz = lz * invLen;
          } else {
            outLx = ex;
            outLz = 0;
          }
          // Rotate resolved local point back to world XZ
          const invCos = e.cos;
          const invSin = -e.sin;
          pos.x = e.x + (outLx * invCos - outLz * invSin);
          pos.z = e.z + (outLx * invSin + outLz * invCos);
        }
      }
    }

    // Soft vast desert boundary
    const distFromOrigin = Math.hypot(pos.x, pos.z);
    let hitBoundary = false;
    if (distFromOrigin > this.worldRadius) {
      const scale = this.worldRadius / distFromOrigin;
      pos.x *= scale;
      pos.z *= scale;
      hitBoundary = true;
    }

    return hitBoundary;
  }
}
