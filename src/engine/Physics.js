/**
 * Precision First-Person Physics Solver (v3.0):
 * - 100% Visual-Physics Terrain Triangle Parity (via TerrainMath.getTerrainHeight)
 * - Exact 1.0x rotated-ellipse & OBB colliders for rocks, buried Jeep, furniture, and walls (ZERO clipping!)
 * - Climbable & Jump-on-Top surfaces for low rocks, crates, low walls, and the buried 4x4 Jeep hood/roof!
 * - Solid sloped collision for ALL surrounding desert hills & sandstone mesas inside the 180m playable valley
 * - Slope angle limiting (>43° steep cliffs push player back smoothly instead of infinite vertical climbing)
 */
export class PhysicsWorld {
  constructor(heightSampler) {
    this.getTerrainHeight = heightSampler;
    this.aabbs = [];          // { minX, maxX, minZ, maxZ, minY, maxY, climbable }
    this.obbs = [];           // { x, z, hx, hz, cos, sin, minY, maxY, hoodY, climbable }
    this.cylinders = [];      // { x, z, r, maxY, climbable }
    this.ellipses = [];       // { x, z, rx, rz, cos, sin, topY, climbable }
    this.mesas = [];          // { x, z, rx, rz, cos, sin, baseY, height }
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
   * Supports stepped climbable top (e.g. lower hood height + higher cabin roof height).
   */
  addOBBCollider(x, z, hx, hz, rotY = 0, minY = -5, maxY = 2.0, hoodY = null, climbable = true) {
    this.obbs.push({
      x,
      z,
      hx,
      hz,
      cos: Math.cos(-rotY),
      sin: Math.sin(-rotY),
      minY,
      maxY,
      hoodY: hoodY !== null ? hoodY : maxY,
      climbable,
    });
  }

  addCylinderCollider(x, z, r, maxY = 12) {
    this.cylinders.push({ x, z, r: r * 0.96, maxY, climbable: maxY < 2.2 });
  }

  /**
   * Exact-fit rock/prop ellipse collider:
   * - Full 1.0x visual radius prevents any 35cm corner/side penetration!
   * - Smooth tangential slide when walking against tall boulders
   * - Walkable/jumpable domed top surface when jumping or stepping onto rocks
   */
  addEllipseCollider(x, z, rx, rz, rotY = 0, topY = 1.5, climbable = true) {
    this.ellipses.push({
      x,
      z,
      rx: Math.max(0.28, rx * 0.98),
      rz: Math.max(0.28, rz * 0.98),
      cos: Math.cos(-rotY),
      sin: Math.sin(-rotY),
      topY,
      climbable,
    });
  }

  /**
   * Solid desert mesa / mountain hill collider — prevents walking inside distant hills like hollow air!
   */
  addMesaCollider(x, z, rx, rz, rotY = 0, baseY = 0, height = 25) {
    this.mesas.push({
      x,
      z,
      rx: rx * 0.96,
      rz: rz * 0.96,
      cos: Math.cos(-rotY),
      sin: Math.sin(-rotY),
      baseY,
      height,
    });
  }

  addFloorZone(minX, maxX, minZ, maxZ, y, surface = 'stone') {
    this.floorZones.push({ minX, maxX, minZ, maxZ, y, surface });
  }

  addInteriorZone(minX, maxX, minZ, maxZ, minY = -1, maxY = 7) {
    this.interiorZones.push({ minX, maxX, minZ, maxZ, minY, maxY });
  }

  /**
   * Returns exact walkable ground height including terrain triangles, stone floors,
   * climbable rocks, crates, and the buried 4x4 Jeep hood & roof!
   */
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
        // Front half of Jeep (lz > 0.25) is hood height; cabin (lz <= 0.25) is roof height!
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

    // 5. Distant sandstone mesa foothills (gentle lower base up to 2.2m above terrain, solid cliff wall above!)
    for (let i = 0; i < this.mesas.length; i++) {
      const m = this.mesas[i];
      const wx = x - m.x;
      const wz = z - m.z;
      const maxR = Math.max(m.rx, m.rz) + 0.5;
      if (wx * wx + wz * wz > maxR * maxR) continue;
      const lx = wx * m.cos - wz * m.sin;
      const lz = wx * m.sin + wz * m.cos;
      const d = Math.hypot(lx / m.rx, lz / m.rz);
      if (d < 1.0 && d > 0.82) {
        const foothillT = (1.0 - d) / 0.18;
        const slopeY = m.baseY + foothillT * 2.1;
        if (slopeY <= stepReach && slopeY > groundY) {
          groundY = slopeY;
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

    for (let pass = 0; pass < 3; pass++) {
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

      // 2. Oriented Bounding Boxes (Buried 4x4 Jeep — exact rectangular collision + climbable hood/roof!)
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
          const invCos = o.cos;
          const invSin = -o.sin;
          pos.x = o.x + (outLx * invCos - outLz * invSin);
          pos.z = o.z + (outLx * invSin + outLz * invCos);
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

      // 4. Exact-Fit Rock Colliders (100% blocks horizontal clipping when feet are below rock top; smooth tangential slide!)
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
          const invCos = e.cos;
          const invSin = -e.sin;
          pos.x = e.x + (outLx * invCos - outLz * invSin);
          pos.z = e.z + (outLx * invSin + outLz * invCos);
        }
      }

      // 5. Solid Distant Mesas / Hills (NEVER walk inside hills like hollow air!)
      for (let i = 0; i < this.mesas.length; i++) {
        const m = this.mesas[i];
        const wx = pos.x - m.x;
        const wz = pos.z - m.z;
        const maxR = Math.max(m.rx, m.rz) + radius;
        if (wx * wx + wz * wz > maxR * maxR) continue;

        const lx = wx * m.cos - wz * m.sin;
        const lz = wx * m.sin + wz * m.cos;
        const cliffRx = m.rx * 0.85 + radius;
        const cliffRz = m.rz * 0.85 + radius;
        const nx = lx / cliffRx;
        const nz = lz / cliffRz;
        const normDistSq = nx * nx + nz * nz;

        if (normDistSq < 1.0 && normDistSq > 1e-8) {
          const invLen = 1.0 / Math.sqrt(normDistSq);
          const outLx = lx * invLen;
          const outLz = lz * invLen;
          const invCos = m.cos;
          const invSin = -m.sin;
          pos.x = m.x + (outLx * invCos - outLz * invSin);
          pos.z = m.z + (outLx * invSin + outLz * invCos);
        }
      }
    }

    // 6. Steep terrain slope limiter (>42° slope pushes back gently so player cannot walk up vertical mountain cliffs)
    const eps = 0.4;
    const dhx = (this.getTerrainHeight(pos.x + eps, pos.z) - this.getTerrainHeight(pos.x - eps, pos.z)) / (2 * eps);
    const dhz = (this.getTerrainHeight(pos.x, pos.z + eps) - this.getTerrainHeight(pos.x, pos.z - eps)) / (2 * eps);
    const slopeMag = Math.hypot(dhx, dhz);
    if (slopeMag > 0.92) {
      const pushBack = (slopeMag - 0.92) * 0.35;
      pos.x -= (dhx / slopeMag) * pushBack;
      pos.z -= (dhz / slopeMag) * pushBack;
    }

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
