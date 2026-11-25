import * as THREE from 'three';

/**
 * Baked Lighting & Contact Ambient Occlusion (AO) Engine — SARAB v5.0
 * Pre-computes rich directional lighting, terrain concavity/crevice AO, wall-corner AO,
 * and rock/structure-to-ground Contact AO directly into vertex colors at stage load time!
 *
 * Result:
 * - Grounded, tactile visual cohesion where rocks, cairns, cliffs & walls meet the sand
 * - Massive mobile GPU/battery savings WITHOUT lowering screen resolution (replaces costly
 *   real-time per-frame shadow-map redraws & SSAO passes with 0-cost vertex-baked occlusion!)
 */

/**
 * Bakes directional sky/sun shading, horizon-concavity terrain AO, and exact object-to-ground
 * Contact AO into a terrain PlaneGeometry's vertex colors.
 *
 * @param {THREE.BufferGeometry} geo - Terrain geometry (already displaced in Y and normals computed)
 * @param {Function} getHeightFn - (x, z) => y height sampler
 * @param {THREE.Vector3} sunDir - Normalized stage sun/moon direction
 * @param {Object} opts - { occluders: Array<{type, x, z, rx, rz, strength, pad}>, nightMode: boolean }
 */
export function bakeTerrainLightingAndContactAO(geo, getHeightFn, sunDir, opts = {}) {
  const pos = geo.attributes.position;
  const norm = geo.attributes.normal;
  const count = pos.count;
  const colors = new Float32Array(count * 3);

  const occluders = opts.occluders || [];
  const sunStrength = opts.sunStrength ?? 0.16;
  const cavityStrength = opts.cavityStrength ?? 0.22;
  const warmBounce = opts.warmBounce ?? [1.0, 0.985, 0.96];
  const shadowTint = opts.shadowTint ?? [0.84, 0.80, 0.78];

  const sx = sunDir.x;
  const sy = sunDir.y;
  const sz = sunDir.z;

  for (let i = 0; i < count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);

    const nx = norm ? norm.getX(i) : 0;
    const ny = norm ? norm.getY(i) : 1;
    const nz = norm ? norm.getZ(i) : 0;

    // 1. Horizon concavity / crevice AO (compare height against 4 neighbors at 3.5m radius)
    const rProbe = 3.6;
    const hAvg =
      0.25 *
      (getHeightFn(x + rProbe, z) +
        getHeightFn(x - rProbe, z) +
        getHeightFn(x, z + rProbe) +
        getHeightFn(x, z - rProbe));
    const concavity = THREE.MathUtils.clamp((hAvg - y) * 0.22, -0.35, 1.0);
    const cavityAO = THREE.MathUtils.clamp(1.0 - Math.max(0, concavity) * cavityStrength, 0.66, 1.05);

    // 2. Subtle baked directional sun irradiance + slope sky-visibility
    const ndl = Math.max(0, nx * sx + ny * sy + nz * sz);
    const skyVis = 0.74 + 0.26 * Math.max(0, ny);
    const bakedLight = skyVis * (1.0 - sunStrength * 0.55 + ndl * sunStrength);

    // 3. Static Object-to-Ground Contact AO (rocks, cairns, cliffs, ruins, palms, house!)
    let contactAO = 1.0;
    for (let j = 0; j < occluders.length; j++) {
      const o = occluders[j];
      if (o.type === 'box') {
        const dx = Math.max(0, Math.abs(x - o.x) - o.hx);
        const dz = Math.max(0, Math.abs(z - o.z) - o.hz);
        const dist = Math.hypot(dx, dz);
        const pad = o.pad ?? 2.6;
        if (dist < pad) {
          const t = 1.0 - dist / pad;
          const dark = 1.0 - t * t * (o.strength ?? 0.38);
          if (dark < contactAO) contactAO = dark;
        }
      } else {
        // Radial/elliptical boulder, cairn, palm, cliff pillar
        const dx = x - o.x;
        const dz = z - o.z;
        const rx = (o.rx ?? o.r ?? 2.0) + (o.pad ?? 1.8);
        const rz = (o.rz ?? o.r ?? 2.0) + (o.pad ?? 1.8);
        if (Math.abs(dx) > rx || Math.abs(dz) > rz) continue;
        const u = Math.hypot(dx / rx, dz / rz);
        if (u < 1.0) {
          const t = 1.0 - u;
          const smooth = t * t * (3.0 - 2.0 * t);
          const dark = 1.0 - smooth * (o.strength ?? 0.34);
          if (dark < contactAO) contactAO = dark;
        }
      }
    }

    const totalAO = THREE.MathUtils.clamp(cavityAO * bakedLight * contactAO, 0.42, 1.08);
    // Slightly cool/deepen occluded crevices while keeping sunlit crests warm
    const shadeMix = THREE.MathUtils.clamp((1.0 - totalAO) * 1.45, 0.0, 1.0);
    const rTint = THREE.MathUtils.lerp(warmBounce[0], shadowTint[0], shadeMix);
    const gTint = THREE.MathUtils.lerp(warmBounce[1], shadowTint[1], shadeMix);
    const bTint = THREE.MathUtils.lerp(warmBounce[2], shadowTint[2], shadeMix);

    colors[i * 3] = totalAO * rTint;
    colors[i * 3 + 1] = totalAO * gTint;
    colors[i * 3 + 2] = totalAO * bTint;
  }

  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

/**
 * Bakes Contact AO (bottom ground junction darkening + underside crevice AO + top sky lift)
 * directly into any rock, cairn stone, boulder, or stratified cliff BufferGeometry.
 */
export function bakeRockContactAO(geo, options = {}) {
  const bottomAO = options.bottomAO ?? 0.56;
  const topLift = options.topLift ?? 1.04;
  const undersideAO = options.undersideAO ?? 0.22;

  if (!geo.boundingBox) geo.computeBoundingBox();
  const minY = geo.boundingBox.min.y;
  const spanY = Math.max(0.001, geo.boundingBox.max.y - minY);

  const pos = geo.attributes.position;
  const norm = geo.attributes.normal;
  const cols = new Float32Array(pos.count * 3);

  for (let i = 0; i < pos.count; i++) {
    const yNorm = THREE.MathUtils.clamp((pos.getY(i) - minY) / spanY, 0, 1);
    const ny = norm ? norm.getY(i) : 0.4;

    // Ground junction contact darkening near base (bottom 35% transitions steeply)
    const groundAO = THREE.MathUtils.lerp(bottomAO, topLift, Math.pow(yNorm, 0.52));
    // Underside / overhang darkening
    const overhang = ny < 0 ? 1.0 - Math.min(1, -ny) * undersideAO : 1.0 + ny * 0.04;
    const ao = THREE.MathUtils.clamp(groundAO * overhang, 0.44, 1.06);

    cols[i * 3] = ao;
    cols[i * 3 + 1] = ao * 0.985;
    cols[i * 3 + 2] = ao * 0.965;
  }

  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  return geo;
}

/**
 * Creates a subdivided architectural wall/pillar/lintel box with TRUE baked corner-edge AO
 * (darkens ground seam, ceiling seam, and vertical corner edges) + world-scale tileable UVs!
 */
export function createBakedArchitecturalBox(w, h, d, options = {}) {
  const bottomAO = options.bottomAO ?? 0.58;
  const topAO = options.topAO ?? 0.96;
  const cornerAO = options.cornerAO ?? 0.16;
  const tile = options.tileScale ?? 1.45;

  const segX = w > 1.8 ? 3 : 2;
  const segY = h > 1.6 ? 3 : 2;
  const segZ = d > 1.8 ? 3 : 2;

  const geo = new THREE.BoxGeometry(w, h, d, segX, segY, segZ);
  const pos = geo.attributes.position;
  const norm = geo.attributes.normal;
  const uv = geo.attributes.uv;
  const cols = new Float32Array(pos.count * 3);

  const hw = Math.max(0.001, w * 0.5);
  const hh = Math.max(0.001, h * 0.5);
  const hd = Math.max(0.001, d * 0.5);

  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i);
    const py = pos.getY(i);
    const pz = pos.getZ(i);
    const nx = Math.abs(norm.getX(i));
    const nyAbs = Math.abs(norm.getY(i));

    if (nyAbs > 0.5) {
      uv.setXY(i, (px + hw) / tile, (pz + hd) / tile);
    } else if (nx > 0.5) {
      uv.setXY(i, (pz + hd) / tile, (py + hh) / tile);
    } else {
      uv.setXY(i, (px + hw) / tile, (py + hh) / tile);
    }

    const ny = THREE.MathUtils.clamp((py + hh) / Math.max(0.001, h), 0.0, 1.0);
    // Strong contact AO right at floor/ground junction + subtle ceiling/eave shadow at top
    const floorSeam = THREE.MathUtils.lerp(bottomAO, 1.0, Math.pow(ny, 0.45));
    const topSeam = ny > 0.85 ? THREE.MathUtils.lerp(1.0, topAO, (ny - 0.85) / 0.15) : 1.0;

    // Corner-edge AO along vertical edges where walls meet adjacent walls or pilasters
    const edgeX = Math.abs(px) / hw;
    const edgeZ = Math.abs(pz) / hd;
    const cornerFactor = nyAbs > 0.5 ? Math.max(edgeX, edgeZ) : nx > 0.5 ? edgeZ : edgeX;
    const edgeDark = 1.0 - Math.pow(Math.max(0, cornerFactor - 0.55) / 0.45, 2.0) * cornerAO;

    const ao = THREE.MathUtils.clamp(floorSeam * topSeam * edgeDark, 0.46, 1.02);
    cols[i * 3] = ao;
    cols[i * 3 + 1] = ao * 0.985;
    cols[i * 3 + 2] = ao * 0.965;
  }

  uv.needsUpdate = true;
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  return geo;
}

/**
 * Builds a single GPU-instanced layer of terrain-aligned soft Contact AO ground decals
 * under rocks, cairns, ruins, and palms (1 draw call for the entire stage!).
 */
export function createContactAODecalInstanced(texManager, placements, getHeightFn, getNormalFn, opacity = 0.46) {
  if (!placements.length) return null;
  const geo = new THREE.PlaneGeometry(1, 1);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshBasicMaterial({
    map: texManager.createContactShadowTexture(),
    transparent: true,
    depthWrite: false,
    opacity,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });

  const inst = new THREE.InstancedMesh(geo, mat, placements.length);
  const dummy = new THREE.Object3D();
  const upVec = new THREE.Vector3(0, 1, 0);
  const normVec = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const rotYQuat = new THREE.Quaternion();
  const nOut = { x: 0, y: 1, z: 0 };

  for (let i = 0; i < placements.length; i++) {
    const p = placements[i];
    const y = p.y !== undefined ? p.y : getHeightFn(p.x, p.z);
    getNormalFn(p.x, p.z, nOut);
    normVec.set(nOut.x, nOut.y, nOut.z);
    quat.setFromUnitVectors(upVec, normVec);
    rotYQuat.setFromAxisAngle(upVec, p.ry || 0);
    quat.multiply(rotYQuat);

    dummy.position.set(p.x, y + 0.035, p.z);
    dummy.quaternion.copy(quat);
    dummy.scale.set(p.sx, 1, p.sz);
    dummy.updateMatrix();
    inst.setMatrixAt(i, dummy.matrix);
  }

  inst.instanceMatrix.needsUpdate = true;
  return inst;
}

/**
 * Recursively disposes every non-shared BufferGeometry & Material under a Three.js Object3D
 * so transitioning between stages frees 100% of previous stage GPU memory!
 */
export function disposeHierarchy(root, sharedGeometries = new Set(), sharedMaterials = new Set()) {
  if (!root) return;
  root.traverse((obj) => {
    if (obj.geometry && !sharedGeometries.has(obj.geometry)) {
      obj.geometry.dispose();
    }
    if (obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        if (m && !sharedMaterials.has(m)) {
          m.dispose();
        }
      }
    }
  });
  while (root.children.length > 0) {
    root.remove(root.children[0]);
  }
}
