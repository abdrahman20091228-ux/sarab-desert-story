import * as THREE from 'three';

/**
 * Lightweight, zero-jitter first-person collision system:
 * - Cylinder-vs-AABB horizontal sliding for house walls, doorways, props, and rocks
 * - Interior volume detection (for indoor acoustics, floor material, and eye adaptation)
 * - Soft desert radius limit so the player enjoys vast freedom without falling off terrain
 */
export class PhysicsWorld {
  constructor(heightSampler) {
    this.getTerrainHeight = heightSampler;
    this.aabbs = [];          // { minX, maxX, minZ, maxZ, minY, maxY }
    this.cylinders = [];      // { x, z, r, maxY }
    this.floorZones = [];     // { minX, maxX, minZ, maxZ, y, surface: 'stone' }
    this.interiorZones = [];  // { minX, maxX, minZ, maxZ, minY, maxY }
    this.worldRadius = 155;
  }

  addBoxCollider(minX, maxX, minZ, maxZ, minY = -10, maxY = 12) {
    this.aabbs.push({ minX, maxX, minZ, maxZ, minY, maxY });
  }

  addCylinderCollider(x, z, r, maxY = 10) {
    this.cylinders.push({ x, z, r, maxY });
  }

  addFloorZone(minX, maxX, minZ, maxZ, y, surface = 'stone') {
    this.floorZones.push({ minX, maxX, minZ, maxZ, y, surface });
  }

  addInteriorZone(minX, maxX, minZ, maxZ, minY = -1, maxY = 6) {
    this.interiorZones.push({ minX, maxX, minZ, maxZ, minY, maxY });
  }

  getGroundInfo(x, z) {
    let groundY = this.getTerrainHeight(x, z);
    let surface = 'sand';

    for (let i = 0; i < this.floorZones.length; i++) {
      const f = this.floorZones[i];
      if (x >= f.minX && x <= f.maxX && z >= f.minZ && z <= f.maxZ) {
        if (f.y >= groundY - 0.15) {
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

  resolveHorizontal(pos, radius = 0.42) {
    // 2 solver passes prevent corner snagging
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < this.aabbs.length; i++) {
        const b = this.aabbs[i];
        if (pos.y > b.maxY || pos.y + 1.7 < b.minY) continue;

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
            // Center inside AABB: push out along shallowest axis
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

      for (let i = 0; i < this.cylinders.length; i++) {
        const c = this.cylinders[i];
        if (pos.y > c.maxY) continue;
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
