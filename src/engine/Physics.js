/**
 * Gentle, Climbable First-Person Physics Solver:
 * - Soft, tight horizontal collision (NO violent bouncy pushback!)
 * - Automatic step-up (0.62m) AND Jump-on-Top support for rocks, jeep, crates, and low walls!
 * - Solid sloped collision for ALL distant sandstone mesas/hills (never hollow air!)
 */
export class PhysicsWorld {
  constructor(heightSampler) {
    this.getTerrainHeight = heightSampler;
    this.aabbs = [];          // { minX, maxX, minZ, maxZ, minY, maxY, climbable }
    this.cylinders = [];      // { x, z, r, maxY, climbable }
    this.ellipses = [];       // { x, z, rx, rz, cos, sin, topY, climbable }
    this.mesas = [];          // { x, z, rx, rz, cos, sin, baseY, height }
    this.floorZones = [];     // { minX, maxX, minZ, maxZ, y, surface }
    this.interiorZones = [];  // { minX, maxX, minZ, maxZ, minY, maxY }
    this.worldRadius = 158;
  }

  addBoxCollider(minX, maxX, minZ, maxZ, minY = -10, maxY = 14) {
    const climbable = maxY < 2.6;
    this.aabbs.push({ minX, maxX, minZ, maxZ, minY, maxY, climbable });
  }

  addCylinderCollider(x, z, r, maxY = 12) {
    this.cylinders.push({ x, z, r: r * 0.85, maxY, climbable: maxY < 2.5 });
  }

  /**
   * Gentle, climbable rock/prop ellipse collider:
   * - Tight core radius (0.72x) so it never violently snags the player
   * - Walkable domed top surface so player can step or jump right onto rocks & the jeep!
   */
  addEllipseCollider(x, z, rx, rz, rotY = 0, topY = 1.5, climbable = true) {
    this.ellipses.push({
      x,
      z,
      rx: Math.max(0.22, rx * 0.76),
      rz: Math.max(0.22, rz * 0.76),
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
      rx: rx * 0.94,
      rz: rz * 0.94,
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
   * Returns exact walkable ground height including terrain, stone floors, AND climbable rocks/jeep/crates/hills!
   */
  getGroundInfo(x, z, playerY = 0) {
    let groundY = this.getTerrainHeight(x, z);
    let surface = 'sand';
    const stepReach = playerY + 0.64; // Smoothly step or jump onto objects up to 0.64m above feet!

    // 1. Stone interior floors
    for (let i = 0; i < this.floorZones.length; i++) {
      const f = this.floorZones[i];
      if (x >= f.minX && x <= f.maxX && z >= f.minZ && z <= f.maxZ) {
        if (f.y >= groundY - 0.18) {
          groundY = Math.max(groundY, f.y);
          surface = f.surface;
        }
      }
    }

    // 2. Climbable rocks & buried jeep (smooth domed top you can climb & stand on!)
    for (let i = 0; i < this.ellipses.length; i++) {
      const e = this.ellipses[i];
      if (!e.climbable) continue;
      const wx = x - e.x;
      const wz = z - e.z;
      const maxR = Math.max(e.rx, e.rz) + 0.35;
      if (wx * wx + wz * wz > maxR * maxR) continue;

      const lx = wx * e.cos - wz * e.sin;
      const lz = wx * e.sin + wz * e.cos;
      const nx = lx / (e.rx + 0.18);
      const nz = lz / (e.rz + 0.18);
      const d2 = nx * nx + nz * nz;
      if (d2 < 1.0) {
        // Gentle domed profile so walking/jumping onto rocks feels natural
        const domeTop = groundY + (e.topY - groundY) * Math.sqrt(Math.max(0, 1.0 - d2 * 0.65));
        if (domeTop <= stepReach && domeTop > groundY) {
          groundY = domeTop;
          surface = 'stone';
        }
      }
    }

    // 3. Climbable boxes (crates, low ruin walls, desks)
    for (let i = 0; i < this.aabbs.length; i++) {
      const b = this.aabbs[i];
      if (!b.climbable) continue;
      if (x >= b.minX - 0.18 && x <= b.maxX + 0.18 && z >= b.minZ - 0.18 && z <= b.maxZ + 0.18) {
        if (b.maxY <= stepReach && b.maxY > groundY) {
          groundY = b.maxY;
          surface = 'stone';
        }
      }
    }

    // 4. Distant sandstone mesa slopes (walk up lower foothills, solid cliff wall above!)
    for (let i = 0; i < this.mesas.length; i++) {
      const m = this.mesas[i];
      const wx = x - m.x;
      const wz = z - m.z;
      const maxR = Math.max(m.rx, m.rz) + 1.0;
      if (wx * wx + wz * wz > maxR * maxR) continue;
      const lx = wx * m.cos - wz * m.sin;
      const lz = wx * m.sin + wz * m.cos;
      const d = Math.hypot(lx / m.rx, lz / m.rz);
      if (d < 1.0) {
        const slopeY = m.baseY + (1.0 - d) * m.height * 0.85;
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

  resolveHorizontal(pos, radius = 0.34) {
    // Gentle non-violent step-up threshold: anything <= 0.62m above feet is stepped right over!
    const stepCutoff = pos.y + 0.62;

    for (let pass = 0; pass < 2; pass++) {
      // 1. Walls & boxes (skip if player is standing/jumping above the top!)
      for (let i = 0; i < this.aabbs.length; i++) {
        const b = this.aabbs[i];
        if (b.maxY <= stepCutoff || pos.y + 1.68 < b.minY) continue;

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

      // 2. Cylinders (posts, palm trunks, well)
      for (let i = 0; i < this.cylinders.length; i++) {
        const c = this.cylinders[i];
        if (c.maxY <= stepCutoff) continue;
        const dx = pos.x - c.x;
        const dz = pos.z - c.z;
        const minDist = radius + c.r;
        const distSq = dx * dx + dz * dz;
        if (distSq < minDist * minDist && distSq > 1e-6) {
          const dist = Math.sqrt(distSq);
          const push = (minDist - dist) * 0.85; // Gentle slide, never violent snap
          pos.x += (dx / dist) * push;
          pos.z += (dz / dist) * push;
        }
      }

      // 3. Gentle small rock/jeep core collision (ONLY blocks tall rocks when feet are below top!)
      for (let i = 0; i < this.ellipses.length; i++) {
        const e = this.ellipses[i];
        if (e.topY <= stepCutoff) continue; // Climbable! Walk or jump right on top!

        const wx = pos.x - e.x;
        const wz = pos.z - e.z;
        const maxR = Math.max(e.rx, e.rz) + radius;
        if (wx * wx + wz * wz > maxR * maxR) continue;

        const lx = wx * e.cos - wz * e.sin;
        const lz = wx * e.sin + wz * e.cos;
        const ex = e.rx + radius * 0.7;
        const ez = e.rz + radius * 0.7;
        const nx = lx / ex;
        const nz = lz / ez;
        const normDistSq = nx * nx + nz * nz;

        if (normDistSq < 1.0 && normDistSq > 1e-6) {
          const invLen = 1.0 / Math.sqrt(normDistSq);
          // Smooth soft push instead of violent teleport
          const outLx = lx + (lx * invLen - lx) * 0.72;
          const outLz = lz + (lz * invLen - lz) * 0.72;
          const invCos = e.cos;
          const invSin = -e.sin;
          pos.x = e.x + (outLx * invCos - outLz * invSin);
          pos.z = e.z + (outLx * invSin + outLz * invCos);
        }
      }

      // 4. Solid Distant Mesas / Hills (NEVER walk inside hills like hollow air!)
      for (let i = 0; i < this.mesas.length; i++) {
        const m = this.mesas[i];
        const wx = pos.x - m.x;
        const wz = pos.z - m.z;
        const maxR = Math.max(m.rx, m.rz) + radius;
        if (wx * wx + wz * wz > maxR * maxR) continue;

        const lx = wx * m.cos - wz * m.sin;
        const lz = wx * m.sin + wz * m.cos;
        // Taper cliff collider so player can walk onto gentle base foothills then stops solidly at cliff wall
        const cliffRx = m.rx * 0.88 + radius;
        const cliffRz = m.rz * 0.88 + radius;
        const nx = lx / cliffRx;
        const nz = lz / cliffRz;
        const normDistSq = nx * nx + nz * nz;

        if (normDistSq < 1.0 && normDistSq > 1e-6) {
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
