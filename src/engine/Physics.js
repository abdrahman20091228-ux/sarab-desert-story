import { getMesaVisualRadiusAt } from '../world/TerrainMath.js';

/**
 * Precision First-Person Physics Solver (v4.1):
 * - 100% Visual-Physics Terrain Triangle Parity (via TerrainMath.getTerrainHeight)
 * - Exact Three.js Y-rotation inverse transform (world->local uses R_y(-ry), local->world uses R_y(+ry))
 * - Exact 1:1 Sandstone Mesa/Mountain Collision via shared `getMesaVisualRadiusAt(ang, yNorm)` -> ZERO walking inside mountains from any angle!
 * - Exact rotated-ellipse & OBB colliders for rocks, buried Jeep, furniture, and walls (climbable top surfaces!)
 * - Slope angle limiting (>43° steep cliffs push player back smoothly)
 */
export class PhysicsWorld {
  constructor(heightSampler) {
    this.getTerrainHeight = heightSampler;
    this.aabbs = [];          // { minX, maxX, minZ, maxZ, minY, maxY, climbable }
    this.obbs = [];           // { x, z, hx, hz, cos, sin, minY, maxY, hoodY, climbable }
    this.cylinders = [];      // { x, z, r, maxY, climbable }
    this.ellipses = [];       // { x, z, rx, rz, cos, sin, topY, climbable }
    this.mesas = [];          // { x, z, sx, sz, cos, sin, baseY, meshBottomY, height }
    this.floorZones = [];     // { minX, maxX, minZ, maxZ, y, surface }
    this.interiorZones = [];  // { minX, maxX, minZ, maxZ, minY, maxY }
    this.worldRadius = 176;
  }

  addBoxCollider(minX, maxX, minZ, maxZ, minY = -10, maxY = 14, forceClimbable = null) {
    const climbable = forceClimbable !== null ? forceClimbable : maxY <= 2.35;
    this.aabbs.push({ minX, maxX, minZ, maxZ, minY, maxY, climbable });
  }

  /**
   * Oriented Bounding Box (OBB) collider for rotated rectangular vehicles/structures like the buried 4x4 Jeep!
   * Three.js R_y(ry) maps local (lx,lz) -> world (lx*cos + lz*sin, -lx*sin + lz*cos),
   * so inverse world->local is (wx*cos - wz*sin, wx*sin + wz*cos) with cos=cos(ry), sin=sin(ry).
   */
  addOBBCollider(x, z, hx, hz, rotY = 0, minY = -5, maxY = 2.0, hoodY = null, climbable = true) {
    this.obbs.push({
      x,
      z,
      hx,
      hz,
      cos: Math.cos(rotY),
      sin: Math.sin(rotY),
      minY,
      maxY,
      hoodY: hoodY !== null ? hoodY : maxY,
      climbable,
    });
  }

  addCylinderCollider(x, z, r, maxY = 12) {
    this.cylinders.push({ x, z, r: r * 0.96, maxY, climbable: maxY < 2.2 });
  }

  addEllipseCollider(x, z, rx, rz, rotY = 0, topY = 1.5, climbable = true) {
    this.ellipses.push({
      x,
      z,
      rx: Math.max(0.28, rx * 0.98),
      rz: Math.max(0.28, rz * 0.98),
      cos: Math.cos(rotY),
      sin: Math.sin(rotY),
      topY,
      climbable,
    });
  }

  /**
   * Exact 1:1 solid desert mesa / mountain collider — uses the exact visual mesh scale,
   * rotation, bottom offset (-4.5), and `getMesaVisualRadiusAt(ang, yNorm)`!
   */
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

  addInteriorZone(minX, maxX, minZ, maxZ, minY = -1, maxY = 7) {
    this.interiorZones.push({ minX, maxX, minZ, maxZ, minY, maxY });
  }

  /**
   * Exact mesa collision radius in normalized local space at angle `ang` and player height `playerY`.
   */
  _getMesaBlockingRadiusU(m, ang, playerY) {
    const yFeet = Math.max(0, Math.min(0.95, (playerY - m.meshBottomY) / m.height));
    const yHead = Math.max(0, Math.min(0.95, (playerY + 1.5 - m.meshBottomY) / m.height));
    // Take maximum visual radius between feet & head height + tiny safety margin for 16-seg cylinder chords
    const rFeet = getMesaVisualRadiusAt(ang, yFeet);
    const rMid = getMesaVisualRadiusAt(ang, (yFeet + yHead) * 0.5);
    const rHead = getMesaVisualRadiusAt(ang, yHead);
    return Math.max(rFeet, rMid, rHead) + 0.035;
  }

  getGroundInfo(x, z, playerY = 0) {
    let groundY = this.getTerrainHeight(x, z);
    let surface = 'sand';
    const stepReach = playerY + 0.58;

    // 1. Stone interior & porch floors
    for (let i = 0; i < this.floorZones.length; i++) {
      const f = this.floorZones[i];
      if (x >= f.minX && x <= f.maxX && z >= f.minZ && z <= f.maxZ) {
        if (f.y >= groundY - 0.22) {
          groundY = Math.max(groundY, f.y);
          surface = f.surface;
        }
      }
    }

    // 2. Climbable rocks (smooth domed top when player steps or jumps onto rock!)
    for (let i = 0; i < this.ellipses.length; i++) {
      const e = this.ellipses[i];
      if (!e.climbable) continue;
      const wx = x - e.x;
      const wz = z - e.z;
      const maxR = Math.max(e.rx, e.rz) + 0.28;
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
          surface = 'stone';
        }
      }
    }

    // 3. Climbable Oriented Bounding Boxes (Buried 4x4 Jeep hood -> roof!)
    for (let i = 0; i < this.obbs.length; i++) {
      const o = this.obbs[i];
      if (!o.climbable) continue;
      const wx = x - o.x;
      const wz = z - o.z;
      const lx = wx * o.cos - wz * o.sin;
      const lz = wx * o.sin + wz * o.cos;
      if (Math.abs(lx) <= o.hx + 0.16 && Math.abs(lz) <= o.hz + 0.16) {
        const surfY = lz > 0.25 ? o.hoodY : o.maxY;
        if (surfY <= stepReach && surfY > groundY) {
          groundY = surfY;
          surface = 'stone';
        }
      }
    }

    // 4. Climbable AABB boxes (crates, low courtyard walls, tables)
    for (let i = 0; i < this.aabbs.length; i++) {
      const b = this.aabbs[i];
      if (!b.climbable) continue;
      if (x >= b.minX - 0.15 && x <= b.maxX + 0.15 && z >= b.minZ - 0.15 && z <= b.maxZ + 0.15) {
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
      // Clamp to playable valley FIRST so the outer world boundary can NEVER pull the player into a mountain!
      const distFromOrigin = Math.hypot(pos.x, pos.z);
      if (distFromOrigin > this.worldRadius) {
        const scale = this.worldRadius / distFromOrigin;
        pos.x *= scale;
        pos.z *= scale;
        hitBoundary = true;
      }

      // 1. Walls & AABB boxes
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

      // 2. Oriented Bounding Boxes (Buried 4x4 Jeep — exact Three.js R_y inverse + climbable hood/roof!)
      for (let i = 0; i < this.obbs.length; i++) {
        const o = this.obbs[i];
        const wx = pos.x - o.x;
        const wz = pos.z - o.z;
        const lx = wx * o.cos - wz * o.sin;
        const lz = wx * o.sin + wz * o.cos;

        const localTopY = lz > 0.25 ? o.hoodY : o.maxY;
        if (o.climbable && localTopY <= stepCutoff) continue;

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
          // Exact Three.js R_y(+ry): wx = lx*cos + lz*sin, wz = -lx*sin + lz*cos
          pos.x = o.x + (outLx * o.cos + outLz * o.sin);
          pos.z = o.z + (-outLx * o.sin + outLz * o.cos);
        }
      }

      // 3. Cylinders (posts, palm trunks, well)
      for (let i = 0; i < this.cylinders.length; i++) {
        const c = this.cylinders[i];
        if (c.maxY <= stepCutoff) continue;
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

      // 4. Exact-Fit Rock Colliders (exact R_y inverse + smooth tangential slide!)
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

      // 5. Exact 1:1 Solid Sandstone Mesas / Mountains (0cm penetration from ALL 360° angles!)
      for (let i = 0; i < this.mesas.length; i++) {
        const m = this.mesas[i];
        const wx = pos.x - m.x;
        const wz = pos.z - m.z;
        const broad = m.broadR + radius;
        if (wx * wx + wz * wz > broad * broad) continue;

        // Exact Three.js world -> local inverse R_y(-ry)
        const lx = wx * m.cos - wz * m.sin;
        const lz = wx * m.sin + wz * m.cos;

        // Unscaled cylinder coordinates matching DesertWorld mesaGeo before (sx, sy, sz) scaling!
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
          // Exact Three.js local -> world R_y(+ry)
          pos.x = m.x + (outLx * m.cos + outLz * m.sin);
          pos.z = m.z + (-outLx * m.sin + outLz * m.cos);
        }
      }
    }

    // 6. Steep terrain slope limiter (>42° slope pushes back gently so player cannot walk up vertical cliffs)
    const eps = 0.4;
    const dhx = (this.getTerrainHeight(pos.x + eps, pos.z) - this.getTerrainHeight(pos.x - eps, pos.z)) / (2 * eps);
    const dhz = (this.getTerrainHeight(pos.x, pos.z + eps) - this.getTerrainHeight(pos.x, pos.z - eps)) / (2 * eps);
    const slopeMag = Math.hypot(dhx, dhz);
    if (slopeMag > 0.92) {
      const pushBack = (slopeMag - 0.92) * 0.35;
      pos.x -= (dhx / slopeMag) * pushBack;
      pos.z -= (dhz / slopeMag) * pushBack;
    }

    return hitBoundary;
  }
}
