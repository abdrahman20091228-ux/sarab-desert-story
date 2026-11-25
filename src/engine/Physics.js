import { getMesaVisualRadiusAt } from '../world/StageTerrain.js';

/**
 * Precision First-Person Multi-Stage Physics Solver (v5.0):
 * - 100% Visual-Physics Terrain Triangle Parity per Stage
 * - Clean `clear()` method when unloading previous stages from memory
 * - Exact 1:1 Sandstone Mesa/Cliff Collision, Rotated-Ellipse Rock Colliders, OBB & AABB Walls
 * - Dynamic Surface Type Detection ('sand' | 'sabkha' | 'rock' | 'stone') for stage-aware footsteps!
 * - Steep slope limiter so player stays naturally on mountain trails and inside canyon walls!
 */
export class PhysicsWorld {
  constructor(heightSampler, surfaceSampler = null) {
    this.getTerrainHeight = heightSampler;
    this.getTerrainSurface = surfaceSampler || (() => 'sand');
    this.aabbs = [];
    this.obbs = [];
    this.cylinders = [];
    this.ellipses = [];
    this.mesas = [];
    this.floorZones = [];
    this.interiorZones = [];
    this.bounds = { type: 'circle', radius: 176 };
    this.maxSlope = 0.94;
  }

  clear() {
    this.aabbs.length = 0;
    this.obbs.length = 0;
    this.cylinders.length = 0;
    this.ellipses.length = 0;
    this.mesas.length = 0;
    this.floorZones.length = 0;
    this.interiorZones.length = 0;
  }

  configureStage({ heightSampler, surfaceSampler, bounds, maxSlope = 0.94 }) {
    this.clear();
    if (heightSampler) this.getTerrainHeight = heightSampler;
    this.getTerrainSurface = surfaceSampler || (() => 'sand');
    this.bounds = bounds || { type: 'circle', radius: 176 };
    this.maxSlope = maxSlope;
  }

  addBoxCollider(minX, maxX, minZ, maxZ, minY = -20, maxY = 120, forceClimbable = null) {
    const climbable = forceClimbable !== null ? forceClimbable : maxY <= 2.2;
    this.aabbs.push({ minX, maxX, minZ, maxZ, minY, maxY, climbable });
  }

  addOBBCollider(x, z, hx, hz, rotY = 0, minY = -20, maxY = 120, climbable = false) {
    this.obbs.push({
      x,
      z,
      hx,
      hz,
      cos: Math.cos(rotY),
      sin: Math.sin(rotY),
      minY,
      maxY,
      climbable,
    });
  }

  addCylinderCollider(x, z, r, maxY = 120, climbable = false) {
    this.cylinders.push({ x, z, r: Math.max(0.2, r * 0.96), maxY, climbable });
  }

  addEllipseCollider(x, z, rx, rz, rotY = 0, topY = 1.5, climbable = true) {
    this.ellipses.push({
      x,
      z,
      rx: Math.max(0.26, rx * 0.98),
      rz: Math.max(0.26, rz * 0.98),
      cos: Math.cos(rotY),
      sin: Math.sin(rotY),
      topY,
      climbable,
    });
  }

  addMesaCollider(x, z, sx, sz, rotY = 0, baseY = 0, height = 25) {
    this.mesas.push({
      x,
      z,
      sx,
      sz,
      cos: Math.cos(rotY),
      sin: Math.sin(rotY),
      baseY,
      meshBottomY: baseY - 4.5,
      height,
      broadR: Math.max(sx, sz) * 1.62,
    });
  }

  addFloorZone(minX, maxX, minZ, maxZ, y, surface = 'stone') {
    this.floorZones.push({ minX, maxX, minZ, maxZ, y, surface });
  }

  addInteriorZone(minX, maxX, minZ, maxZ, minY = -5, maxY = 12) {
    this.interiorZones.push({ minX, maxX, minZ, maxZ, minY, maxY });
  }

  _getMesaBlockingRadiusU(m, ang, playerY) {
    const yFeet = Math.max(0, Math.min(0.95, (playerY - m.meshBottomY) / m.height));
    const yHead = Math.max(0, Math.min(0.95, (playerY + 1.5 - m.meshBottomY) / m.height));
    const rFeet = getMesaVisualRadiusAt(ang, yFeet);
    const rMid = getMesaVisualRadiusAt(ang, (yFeet + yHead) * 0.5);
    const rHead = getMesaVisualRadiusAt(ang, yHead);
    return Math.max(rFeet, rMid, rHead) + 0.035;
  }

  getGroundInfo(x, z, playerY = 0) {
    let groundY = this.getTerrainHeight(x, z);
    let surface = this.getTerrainSurface(x, z);
    const stepReach = playerY + 0.56;

    // 1. Stone interior & ruin floors
    for (let i = 0; i < this.floorZones.length; i++) {
      const f = this.floorZones[i];
      if (x >= f.minX && x <= f.maxX && z >= f.minZ && z <= f.maxZ) {
        if (f.y >= groundY - 0.25) {
          groundY = Math.max(groundY, f.y);
          surface = f.surface;
        }
      }
    }

    // 2. Climbable rocks
    for (let i = 0; i < this.ellipses.length; i++) {
      const e = this.ellipses[i];
      if (!e.climbable) continue;
      const wx = x - e.x;
      const wz = z - e.z;
      const maxR = Math.max(e.rx, e.rz) + 0.26;
      if (wx * wx + wz * wz > maxR * maxR) continue;

      const lx = wx * e.cos - wz * e.sin;
      const lz = wx * e.sin + wz * e.cos;
      const nx = lx / (e.rx + 0.12);
      const nz = lz / (e.rz + 0.12);
      const d2 = nx * nx + nz * nz;
      if (d2 <= 1.0) {
        const domeTop = groundY + (e.topY - groundY) * Math.sqrt(Math.max(0, 1.0 - d2 * 0.55));
        if (domeTop <= stepReach && domeTop > groundY) {
          groundY = domeTop;
          surface = 'rock';
        }
      }
    }

    // 3. Climbable OBBs
    for (let i = 0; i < this.obbs.length; i++) {
      const o = this.obbs[i];
      if (!o.climbable) continue;
      const wx = x - o.x;
      const wz = z - o.z;
      const lx = wx * o.cos - wz * o.sin;
      const lz = wx * o.sin + wz * o.cos;
      if (Math.abs(lx) <= o.hx + 0.14 && Math.abs(lz) <= o.hz + 0.14) {
        if (o.maxY <= stepReach && o.maxY > groundY) {
          groundY = o.maxY;
          surface = 'stone';
        }
      }
    }

    // 4. Climbable AABBs (crates, low ruin walls)
    for (let i = 0; i < this.aabbs.length; i++) {
      const b = this.aabbs[i];
      if (!b.climbable) continue;
      if (x >= b.minX - 0.14 && x <= b.maxX + 0.14 && z >= b.minZ - 0.14 && z <= b.maxZ + 0.14) {
        if (b.maxY <= stepReach && b.maxY > groundY) {
          groundY = b.maxY;
          surface = 'stone';
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

  resolveHorizontal(pos, radius = 0.36) {
    const stepCutoff = pos.y + 0.48;
    let hitBoundary = false;

    for (let pass = 0; pass < 3; pass++) {
      // Stage playable bounds
      const bnd = this.bounds;
      if (bnd.type === 'box') {
        if (pos.x < bnd.minX) { pos.x = bnd.minX; hitBoundary = true; }
        else if (pos.x > bnd.maxX) { pos.x = bnd.maxX; hitBoundary = true; }
        if (pos.z < bnd.minZ) { pos.z = bnd.minZ; hitBoundary = true; }
        else if (pos.z > bnd.maxZ) { pos.z = bnd.maxZ; hitBoundary = true; }
      } else if (bnd.type === 'corridor') {
        if (pos.z < bnd.minZ) { pos.z = bnd.minZ; hitBoundary = true; }
        else if (pos.z > bnd.maxZ) { pos.z = bnd.maxZ; hitBoundary = true; }
        const cx = bnd.centerXFn(pos.z);
        const halfW = bnd.halfWidthFn(pos.z);
        if (pos.x < cx - halfW) { pos.x = cx - halfW; hitBoundary = true; }
        else if (pos.x > cx + halfW) { pos.x = cx + halfW; hitBoundary = true; }
      } else {
        const distFromOrigin = Math.hypot(pos.x, pos.z);
        const maxR = bnd.radius || 176;
        if (distFromOrigin > maxR) {
          const scale = maxR / distFromOrigin;
          pos.x *= scale;
          pos.z *= scale;
          hitBoundary = true;
        }
      }

      // 1. AABB walls & blocks
      for (let i = 0; i < this.aabbs.length; i++) {
        const b = this.aabbs[i];
        const cutoff = b.climbable ? stepCutoff : pos.y + 0.18;
        if (b.maxY <= cutoff || pos.y + 1.68 < b.minY) continue;

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

      // 2. Oriented Bounding Boxes (rotated ruin walls / stone arches)
      for (let i = 0; i < this.obbs.length; i++) {
        const o = this.obbs[i];
        if (o.climbable && o.maxY <= stepCutoff) continue;
        if (pos.y + 1.68 < o.minY) continue;

        const wx = pos.x - o.x;
        const wz = pos.z - o.z;
        const lx = wx * o.cos - wz * o.sin;
        const lz = wx * o.sin + wz * o.cos;

        const closestLx = Math.max(-o.hx, Math.min(lx, o.hx));
        const closestLz = Math.max(-o.hz, Math.min(lz, o.hz));
        const dlx = lx - closestLx;
        const dlz = lz - closestLz;
        const distSq = dlx * dlx + dlz * dlz;

        if (distSq < radius * radius) {
          let outLx = lx;
          let outLz = lz;
          if (distSq > 1e-6) {
            const dist = Math.sqrt(distSq);
            const push = radius - dist;
            outLx += (dlx / dist) * push;
            outLz += (dlz / dist) * push;
          } else {
            const penL = Math.abs(lx + o.hx);
            const penR = Math.abs(o.hx - lx);
            const penB = Math.abs(lz + o.hz);
            const penF = Math.abs(o.hz - lz);
            const m = Math.min(penL, penR, penB, penF);
            if (m === penL) outLx = -o.hx - radius;
            else if (m === penR) outLx = o.hx + radius;
            else if (m === penB) outLz = -o.hz - radius;
            else outLz = o.hz + radius;
          }
          pos.x = o.x + (outLx * o.cos + outLz * o.sin);
          pos.z = o.z + (-outLx * o.sin + outLz * o.cos);
        }
      }

      // 3. Cylinders (cairns, palm trunks, stone pillars, well)
      for (let i = 0; i < this.cylinders.length; i++) {
        const c = this.cylinders[i];
        if (c.climbable && c.maxY <= stepCutoff) continue;
        if (c.maxY <= pos.y + 0.15) continue;
        const dx = pos.x - c.x;
        const dz = pos.z - c.z;
        const minDist = radius + c.r;
        const distSq = dx * dx + dz * dz;
        if (distSq < minDist * minDist && distSq > 1e-6) {
          const dist = Math.sqrt(distSq);
          const push = minDist - dist;
          pos.x += (dx / dist) * push;
          pos.z += (dz / dist) * push;
        }
      }

      // 4. Exact-Fit Rotated Ellipse Rock Colliders
      for (let i = 0; i < this.ellipses.length; i++) {
        const e = this.ellipses[i];
        if (e.climbable && e.topY <= stepCutoff) continue;

        const wx = pos.x - e.x;
        const wz = pos.z - e.z;
        const maxR = Math.max(e.rx, e.rz) + radius;
        if (wx * wx + wz * wz > maxR * maxR) continue;

        const lx = wx * e.cos - wz * e.sin;
        const lz = wx * e.sin + wz * e.cos;
        const ex = e.rx + radius;
        const ez = e.rz + radius;
        const nx = lx / ex;
        const nz = lz / ez;
        const normDistSq = nx * nx + nz * nz;

        if (normDistSq < 1.0 && normDistSq > 1e-8) {
          const invLen = 1.0 / Math.sqrt(normDistSq);
          const outLx = lx * invLen;
          const outLz = lz * invLen;
          pos.x = e.x + (outLx * e.cos + outLz * e.sin);
          pos.z = e.z + (-outLx * e.sin + outLz * e.cos);
        }
      }

      // 5. Exact 1:1 Solid Sandstone Mesas & Cliff Pillars
      for (let i = 0; i < this.mesas.length; i++) {
        const m = this.mesas[i];
        const wx = pos.x - m.x;
        const wz = pos.z - m.z;
        const broad = m.broadR + radius;
        if (wx * wx + wz * wz > broad * broad) continue;

        const lx = wx * m.cos - wz * m.sin;
        const lz = wx * m.sin + wz * m.cos;
        const ux = lx / m.sx;
        const uz = lz / m.sz;
        const uDist = Math.hypot(ux, uz);
        const ang = Math.atan2(uz, ux);

        const visualR = this._getMesaBlockingRadiusU(m, ang, pos.y);
        const padU = radius / Math.min(m.sx, m.sz);
        const minU = visualR + padU;

        if (uDist < minU) {
          const dirX = uDist > 1e-6 ? ux / uDist : 1;
          const dirZ = uDist > 1e-6 ? uz / uDist : 0;
          const outLx = dirX * minU * m.sx;
          const outLz = dirZ * minU * m.sz;
          pos.x = m.x + (outLx * m.cos + outLz * m.sin);
          pos.z = m.z + (-outLx * m.sin + outLz * m.cos);
        }
      }
    }

    // 6. Steep terrain slope limiter
    const eps = 0.45;
    const dhx = (this.getTerrainHeight(pos.x + eps, pos.z) - this.getTerrainHeight(pos.x - eps, pos.z)) / (2 * eps);
    const dhz = (this.getTerrainHeight(pos.x, pos.z + eps) - this.getTerrainHeight(pos.x, pos.z - eps)) / (2 * eps);
    const slopeMag = Math.hypot(dhx, dhz);
    if (slopeMag > this.maxSlope) {
      const pushBack = (slopeMag - this.maxSlope) * 0.38;
      pos.x -= (dhx / slopeMag) * pushBack;
      pos.z -= (dhz / slopeMag) * pushBack;
    }

    return hitBoundary;
  }
}
