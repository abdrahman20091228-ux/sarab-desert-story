import * as THREE from 'three';
import {
  getTerrainHeight,
  getTerrainNormal,
  HOUSE_CENTER_X,
  HOUSE_CENTER_Z,
  TERRAIN_SIZE,
  TERRAIN_SEGMENTS,
} from './TerrainMath.js';

/**
 * High-FPS Photogrammetry-Enhanced Living Arabian Desert World (v3.0):
 * - 96x96 central dune terrain with 100% exact visual-physics triangle parity + 32x32 horizon skirt
 * - Real Poly Haven 3D photogrammetry scanned boulders (`rock_07` & `rock_09`) + real `old_tyre` wheels!
 * - slope-aligned contact shadow decals (never float or sink on dune slopes!)
 * - Sculpted multi-layered sandstone mesa massifs inside the playable 176m valley with solid cliff colliders
 * - Detailed expedition 4x4 Jeep wreck (sculpted body, wheel arches, real 3D scanned tyres, open engine bay, climbable OBB collider!)
 * - GPU-driven Dust Particle Shader + GPU-fluttering tent canopy (ZERO per-frame CPU vertex buffer uploads!)
 * - Batched instanced palm trunks, palm crowns, soaring hawks, spherical tumbleweeds, and darting desert lizards!
 */
export class DesertWorld {
  constructor(scene, textureManager, modelManager, physics, settings) {
    this.scene = scene;
    this.tex = textureManager;
    this.models = modelManager;
    this.physics = physics;
    this.settings = settings;

    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.hawks = [];
    this.tumbleweeds = [];
    this.lizards = [];
    this.palmCrowns = [];
    this.jeepWorldPos = new THREE.Vector3(-5.8, 0, 2.2);
    this._dummy = new THREE.Object3D();

    this._createTerrain();
    this._createHorizonSkirt();
    this._createDistantMesas();
    this._createRocks();
    this._createDesertShrubs();
    this._createDesertPalms();
    this._createBuriedJeep();
    this._createTatteredCampTent();
    this._createSoaringHawks();
    this._createRollingTumbleweeds();
    this._createDesertLizards();
    this._createFootprintTrail();
    this._createGPUDustParticles();
  }

  _createSandMaterial(repeatX, repeatY, isFar = false) {
    const pbr = this.tex.loadPBRSet('sand', repeatX, repeatY);
    const mat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: isFar ? null : pbr.normalMap,
      normalScale: new THREE.Vector2(1.15, 1.15),
      roughnessMap: null,
      roughness: 0.9,
      metalness: 0.02,
      vertexColors: true,
    });

    if (!isFar) {
      mat.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', `#include <common>\nvarying vec3 vDesertWorldPos;`)
          .replace(
            '#include <worldpos_vertex>',
            `#include <worldpos_vertex>\nvDesertWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`
          );

        shader.fragmentShader = shader.fragmentShader
          .replace('#include <common>', `#include <common>\nvarying vec3 vDesertWorldPos;`)
          .replace(
            '#include <color_fragment>',
            `#include <color_fragment>
             float macroWave = sin(vDesertWorldPos.x * 0.045 + vDesertWorldPos.z * 0.035) * 0.5 + 0.5;
             vec3 warmTint = mix(vec3(0.95, 0.90, 0.82), vec3(1.06, 0.99, 0.89), macroWave);
             diffuseColor.rgb *= warmTint;`
          );
      };
    }

    return mat;
  }

  _createTerrain() {
    const size = TERRAIN_SIZE;
    const segments = TERRAIN_SEGMENTS;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y = getTerrainHeight(x, z);
      pos.setY(i, y);

      const hR = getTerrainHeight(x + 2.0, z);
      const hF = getTerrainHeight(x, z + 2.0);
      const slope = Math.hypot(hR - y, hF - y) * 0.5;

      const dxH = x - HOUSE_CENTER_X;
      const dzH = z - HOUSE_CENTER_Z;
      const boxDist = Math.max(Math.abs(dxH) - 7.8, Math.abs(dzH) - 6.6);
      const houseAO =
        boxDist < 2.4 && boxDist > -7.0 ? THREE.MathUtils.clamp(0.76 + Math.max(0, boxDist) * 0.1, 0.76, 1.0) : 1.0;

      const crestBoost = THREE.MathUtils.clamp(0.92 + y * 0.012 - slope * 0.075, 0.82, 1.08);
      const ao = houseAO * crestBoost;

      colors[i * 3] = ao;
      colors[i * 3 + 1] = ao * 0.985;
      colors[i * 3 + 2] = ao * 0.96;
    }

    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    this.terrainMat = this._createSandMaterial(62, 62, false);
    this.terrainMesh = new THREE.Mesh(geo, this.terrainMat);
    this.terrainMesh.receiveShadow = true;
    this.group.add(this.terrainMesh);
  }

  _createHorizonSkirt() {
    const size = 1480;
    const segments = 32;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.max(Math.abs(x), Math.abs(z));
      let y = getTerrainHeight(x, z);
      if (dist < 185) {
        y -= 3.2;
      } else {
        const farFactor = Math.min(1, (dist - 185) / 250);
        y += (Math.sin(x * 0.008 + z * 0.006) * 18 + Math.cos(x * 0.005 - z * 0.009) * 14) * farFactor;
      }
      pos.setY(i, y);
      const shade = THREE.MathUtils.clamp(0.94 + y * 0.004, 0.84, 1.06);
      colors[i * 3] = shade;
      colors[i * 3 + 1] = shade * 0.97;
      colors[i * 3 + 2] = shade * 0.93;
    }

    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    const skirt = new THREE.Mesh(geo, this._createSandMaterial(78, 78, true));
    this.group.add(skirt);
  }

  _createDistantMesas() {
    // Watertight stratified Arabian sandstone mesa buttes (flat-topped eroded plateaus with zero holes!)
    const mesaGeo = new THREE.CylinderGeometry(0.56, 1.0, 1.0, 14, 5, false);
    mesaGeo.translate(0, 0.5, 0);
    const mp = mesaGeo.attributes.position;
    for (let i = 0; i < mp.count; i++) {
      const x = mp.getX(i);
      const y = mp.getY(i);
      const z = mp.getZ(i);
      const ang = Math.atan2(z, x);
      const strata = 1.0 + 0.14 * Math.sin(ang * 3.0 + 0.7) + 0.08 * Math.cos(ang * 5.0) + 0.07 * Math.sin(y * 16.0);
      const topFlatten = y > 0.96 ? 1.0 : strata;
      mp.setXYZ(i, x * topFlatten, y, z * topFlatten);
    }
    mesaGeo.computeVertexNormals();

    const pbr = this.tex.loadPBRSet('sandstone_rock', 3, 2);
    const mesaMat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: pbr.normalMap,
      normalScale: new THREE.Vector2(1.2, 1.2),
      roughness: 0.94,
      metalness: 0.02,
      color: 0xd6aa7a,
    });

    // Placed along the playable valley perimeter so player can approach foothills and collide solidly!
    const mesas = [
      { x: -125, z: -108, sx: 46, sy: 26, sz: 34, ry: 0.4 },
      { x: -34, z: -138, sx: 54, sy: 30, sz: 36, ry: 1.1 },
      { x: 92, z: -124, sx: 48, sy: 28, sz: 36, ry: 2.0 },
      { x: 134, z: -30, sx: 44, sy: 24, sz: 34, ry: 0.8 },
      { x: -136, z: 32, sx: 46, sy: 24, sz: 34, ry: 2.5 },
      { x: 104, z: 108, sx: 48, sy: 25, sz: 36, ry: 1.6 },
      { x: -76, z: 118, sx: 42, sy: 23, sz: 32, ry: 0.2 },
    ];

    const inst = new THREE.InstancedMesh(mesaGeo, mesaMat, mesas.length);
    const dummy = this._dummy;
    mesas.forEach((m, idx) => {
      const gy = getTerrainHeight(m.x, m.z);
      dummy.position.set(m.x, gy - 4.5, m.z);
      dummy.rotation.set(0, m.ry, 0);
      dummy.scale.set(m.sx, m.sy, m.sz);
      dummy.updateMatrix();
      inst.setMatrixAt(idx, dummy.matrix);

      this.physics.addMesaCollider(m.x, m.z, m.sx, m.sz, m.ry, gy, m.sy);
    });
    inst.instanceMatrix.needsUpdate = true;
    this.group.add(inst);
  }

  _createRocks() {
    // Use real Poly Haven 3D photogrammetry scan (`rock_07` & `rock_09`)!
    const scanGeo1 = this.models?.getGeometry('rock_07');
    const scanMat1 = this.models?.getMaterial('rock_07');
    const scanGeo2 = this.models?.getGeometry('rock_09') || scanGeo1;
    const scanMat2 = this.models?.getMaterial('rock_09') || scanMat1;

    // Fallback only if offline
    const fallbackGeo = new THREE.IcosahedronGeometry(0.5, 1);
    const pbr = this.tex.loadPBRSet('sandstone_rock', 2, 2);
    const fallbackMat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: pbr.normalMap,
      roughness: 0.92,
    });

    const rockGeo1 = scanGeo1 || fallbackGeo;
    const rockMat1 = scanMat1 || fallbackMat;
    const rockGeo2 = scanGeo2 || fallbackGeo;
    const rockMat2 = scanMat2 || fallbackMat;

    // Note: rock_07 normalized bounding box has X in [-0.26, 0.26], Y in [0, 0.44], Z in [-0.48, 0.50]
    // So visual half-extents are rx = sx * 0.26, rz = sz * 0.49, topY = y + sy * 0.44!
    const placements = [
      // Hero rock at (-8.2, 10.2) where the broken compass sits!
      { x: -8.2, z: 10.2, sx: 3.6, sy: 1.55, sz: 2.0, ry: 0.5, type: 0 },
      { x: -13.5, z: -9.5, sx: 5.5, sy: 3.1, sz: 3.6, ry: 1.1, type: 0 },
      { x: -15.6, z: -11.2, sx: 3.6, sy: 2.1, sz: 2.4, ry: 2.3, type: 1 },
      { x: 13.8, z: -12.0, sx: 5.8, sy: 3.3, sz: 3.8, ry: 0.4, type: 0 },
      { x: 15.8, z: -14.2, sx: 3.8, sy: 2.2, sz: 2.6, ry: 1.9, type: 1 },
      { x: -13.2, z: -27.5, sx: 6.4, sy: 3.8, sz: 4.2, ry: 2.6, type: 0 },
      { x: 12.0, z: -29.0, sx: 5.4, sy: 3.0, sz: 3.6, ry: 0.9, type: 1 },
      { x: -29, z: 4, sx: 9.5, sy: 5.8, sz: 6.4, ry: 0.5, type: 0 },
      { x: -34, z: -28, sx: 10.5, sy: 6.5, sz: 7.0, ry: 1.4, type: 0 },
      { x: 31, z: -20, sx: 9.2, sy: 5.5, sz: 6.2, ry: 2.1, type: 1 },
      { x: 22, z: 16, sx: 7.4, sy: 4.4, sz: 4.8, ry: 1.1, type: 0 },
    ];

    let seed = 4219;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let i = 0; i < 34; i++) {
      const angle = rand() * Math.PI * 2;
      const dist = 20 + Math.pow(rand(), 0.78) * 105;
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist - 10;
      if (Math.abs(x - HOUSE_CENTER_X) < 12.5 && Math.abs(z - HOUSE_CENTER_Z) < 12.5) continue;
      if (Math.hypot(x + 11.0, z - 15.0) < 6.0) continue;
      if (Math.hypot(x - this.jeepWorldPos.x, z - this.jeepWorldPos.z) < 5.5) continue;

      const s = 1.6 + Math.pow(rand(), 1.6) * 5.2;
      placements.push({
        x,
        z,
        sx: s * (0.9 + rand() * 0.35),
        sy: s * (0.65 + rand() * 0.35),
        sz: s * (0.85 + rand() * 0.35),
        ry: rand() * Math.PI * 2,
        type: i % 2,
      });
    }

    const group0 = placements.filter((p) => p.type === 0);
    const group1 = placements.filter((p) => p.type === 1);

    const inst0 = new THREE.InstancedMesh(rockGeo1, rockMat1, group0.length);
    inst0.castShadow = true;
    inst0.receiveShadow = true;

    const inst1 = new THREE.InstancedMesh(rockGeo2, rockMat2, group1.length);
    inst1.castShadow = true;
    inst1.receiveShadow = true;

    const shadowGeo = new THREE.PlaneGeometry(1, 1);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: this.tex.createContactShadowTexture(),
      transparent: true,
      depthWrite: false,
      opacity: 0.54,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
    const shadowInst = new THREE.InstancedMesh(shadowGeo, shadowMat, placements.length);

    const dummy = this._dummy;
    const upVec = new THREE.Vector3(0, 1, 0);
    const normVec = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const rotYQuat = new THREE.Quaternion();
    const nOut = { x: 0, y: 1, z: 0 };

    let i0 = 0;
    let i1 = 0;
    placements.forEach((p, idx) => {
      const y = getTerrainHeight(p.x, p.z);
      const sink = p.sy * 0.04;
      dummy.position.set(p.x, y - sink, p.z);
      dummy.rotation.set(0, p.ry, 0);
      dummy.scale.set(p.sx, p.sy, p.sz);
      dummy.updateMatrix();

      if (p.type === 0) {
        inst0.setMatrixAt(i0++, dummy.matrix);
      } else {
        inst1.setMatrixAt(i1++, dummy.matrix);
      }

      // Align contact shadow decal with exact dune terrain slope normal so it NEVER floats or clips on hills!
      getTerrainNormal(p.x, p.z, nOut);
      normVec.set(nOut.x, nOut.y, nOut.z);
      quat.setFromUnitVectors(upVec, normVec);
      rotYQuat.setFromAxisAngle(upVec, p.ry);
      quat.multiply(rotYQuat);

      dummy.position.set(p.x, y + 0.045, p.z);
      dummy.quaternion.copy(quat);
      const rx = p.sx * 0.265;
      const rz = p.sz * 0.49;
      dummy.scale.set(rx * 2.5, 1, rz * 2.5);
      dummy.updateMatrix();
      shadowInst.setMatrixAt(idx, dummy.matrix);

      const maxHFactor = p.type === 0 ? 0.44 : 0.23;
      const rockTopY = y - sink + p.sy * maxHFactor;
      this.physics.addEllipseCollider(p.x, p.z, rx, rz, p.ry, rockTopY, true);
    });

    inst0.instanceMatrix.needsUpdate = true;
    inst1.instanceMatrix.needsUpdate = true;
    shadowInst.instanceMatrix.needsUpdate = true;
    this.group.add(inst0, inst1, shadowInst);
  }

  _createDesertShrubs() {
    const branches = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 + 0.3;
      const tilt = 0.48 + (i % 2) * 0.24;
      const h = 0.44 + (i % 3) * 0.14;
      const cone = new THREE.ConeGeometry(0.03, h, 3, 1);
      cone.translate(0, h * 0.5, 0);
      cone.rotateZ(tilt);
      cone.rotateY(angle);
      branches.push(cone);
    }

    const mergedGeo = this._mergeGeometriesSimple(branches);
    branches.forEach((b) => b.dispose());

    const shrubMat = new THREE.MeshStandardMaterial({
      color: 0x766442,
      roughness: 0.96,
      metalness: 0.0,
    });

    const count = 46;
    const inst = new THREE.InstancedMesh(mergedGeo, shrubMat, count);
    inst.castShadow = false;

    let seed = 8821;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const dummy = this._dummy;
    let placed = 0;
    for (let i = 0; i < 120 && placed < count; i++) {
      const a = rand() * Math.PI * 2;
      const d = 12 + Math.pow(rand(), 0.85) * 90;
      const x = Math.cos(a) * d;
      const z = Math.sin(a) * d - 12;
      if (Math.abs(x - HOUSE_CENTER_X) < 10 && Math.abs(z - HOUSE_CENTER_Z) < 10) continue;
      const y = getTerrainHeight(x, z);
      const s = 0.7 + rand() * 0.95;

      dummy.position.set(x, y - 0.03, z);
      dummy.rotation.set(0, rand() * Math.PI * 2, 0);
      dummy.scale.set(s * 1.2, s * 0.85, s * 1.2);
      dummy.updateMatrix();
      inst.setMatrixAt(placed, dummy.matrix);
      placed++;
    }
    inst.count = placed;
    inst.instanceMatrix.needsUpdate = true;
    this.group.add(inst);
  }

  _createDesertPalms() {
    // Batch all 4 palm trunks into 1 mesh, and merge each palm's 12 fronds into 1 crown mesh -> only 5 draw calls total (down from 40)!
    const woodPbr = this.tex.loadPBRSet('desert_wood', 1, 3);
    const trunkMat = new THREE.MeshStandardMaterial({
      map: woodPbr.map,
      roughness: 0.94,
      color: 0x8f7454,
    });
    const frondMat = new THREE.MeshStandardMaterial({
      color: 0x5c6938,
      roughness: 0.9,
      side: THREE.DoubleSide,
    });

    const palmSites = [
      { x: HOUSE_CENTER_X - 10.8, z: HOUSE_CENTER_Z - 9.2, h: 6.2, lean: 0.14, ry: 0.4 },
      { x: HOUSE_CENTER_X - 12.6, z: HOUSE_CENTER_Z - 6.8, h: 4.8, lean: -0.18, ry: 2.1 },
      { x: HOUSE_CENTER_X + 11.4, z: HOUSE_CENTER_Z - 10.5, h: 5.5, lean: 0.16, ry: 1.2 },
      { x: -16.5, z: 7.5, h: 4.6, lean: 0.2, ry: 3.1 },
    ];

    // Create 1 merged crown geometry with 12 lush arched fronds
    const frondParts = [];
    const frondCount = 12;
    for (let f = 0; f < frondCount; f++) {
      const fGeo = new THREE.PlaneGeometry(0.62, 2.65, 2, 4);
      const fp = fGeo.attributes.position;
      for (let i = 0; i < fp.count; i++) {
        const y = fp.getY(i);
        const t = (y + 1.325) / 2.65;
        const widthScale = Math.sin(t * Math.PI) * 1.18;
        fp.setX(i, fp.getX(i) * widthScale);
        fp.setZ(i, -t * t * 0.78);
      }
      fGeo.translate(0, 1.325, 0);
      const m = new THREE.Matrix4();
      const euler = new THREE.Euler(0.72 + (f % 3) * 0.22, (f / frondCount) * Math.PI * 2, 0, 'YXZ');
      m.makeRotationFromEuler(euler);
      fGeo.applyMatrix4(m);
      fGeo.computeVertexNormals();
      frondParts.push(fGeo);
    }
    const crownGeo = this._mergeGeometriesSimple(frondParts);
    frondParts.forEach((g) => g.dispose());

    const trunkGeos = [];
    palmSites.forEach((p, idx) => {
      const gy = getTerrainHeight(p.x, p.z);
      const tGeo = new THREE.CylinderGeometry(0.14, 0.29, p.h, 7, 4);
      const tp = tGeo.attributes.position;
      for (let i = 0; i < tp.count; i++) {
        const ny = (tp.getY(i) + p.h * 0.5) / p.h;
        tp.setX(i, tp.getX(i) + ny * ny * p.h * p.lean);
      }
      tGeo.translate(0, p.h * 0.5, 0);
      const m = new THREE.Matrix4();
      m.makeRotationY(p.ry);
      m.setPosition(p.x, gy - 0.1, p.z);
      tGeo.applyMatrix4(m);
      tGeo.computeVertexNormals();
      trunkGeos.push(tGeo);

      const crownMesh = new THREE.Mesh(crownGeo, frondMat);
      const topX = p.x + Math.cos(p.ry) * (p.h * p.lean);
      const topZ = p.z - Math.sin(p.ry) * (p.h * p.lean);
      crownMesh.position.set(topX, gy + p.h - 0.22, topZ);
      crownMesh.rotation.y = p.ry;
      crownMesh.castShadow = true;
      this.group.add(crownMesh);
      this.palmCrowns.push({ crown: crownMesh, phase: idx * 1.7 });

      this.physics.addCylinderCollider(p.x, p.z, 0.34, gy + p.h);
    });

    const mergedTrunks = new THREE.Mesh(this._mergeGeometriesSimple(trunkGeos), trunkMat);
    mergedTrunks.castShadow = true;
    mergedTrunks.receiveShadow = true;
    trunkGeos.forEach((g) => g.dispose());
    this.group.add(mergedTrunks);
  }

  _createBuriedJeep() {
    // Story Mission 2 Landmark: Detailed Half-Buried 1990s Desert Expedition 4x4 Wreck!
    // Batched by material (body, dark chassis/engine, glass, + 5 instanced real scanned Poly Haven `old_tyre` wheels!)
    const jx = this.jeepWorldPos.x;
    const jz = this.jeepWorldPos.z;
    const jy = getTerrainHeight(jx, jz);
    this.jeepWorldPos.y = jy + 0.85;

    const metalPbr = this.tex.loadPBRSet('rusted_metal', 2, 2);
    const bodyMat = new THREE.MeshStandardMaterial({
      map: metalPbr.map,
      normalMap: metalPbr.normalMap,
      roughness: 0.72,
      metalness: 0.48,
      color: 0xc59b6d,
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x231d18,
      roughness: 0.86,
      metalness: 0.4,
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x6b7c78,
      roughness: 0.18,
      metalness: 0.55,
      transparent: true,
      opacity: 0.52,
      side: THREE.DoubleSide,
    });

    const jeep = new THREE.Group();
    jeep.position.set(jx, jy - 0.15, jz);
    const rotY = 0.72;
    jeep.rotation.set(0.06, rotY, -0.09);

    const bodyParts = [];
    const darkParts = [];
    const glassParts = [];

    const addPart = (arr, geo, px, py, pz, rx = 0, ry = 0, rz = 0) => {
      const m = new THREE.Matrix4();
      m.compose(
        new THREE.Vector3(px, py, pz),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)),
        new THREE.Vector3(1, 1, 1)
      );
      geo.applyMatrix4(m);
      geo.computeVertexNormals();
      arr.push(geo);
    };

    // Sculpted 4x4 body panels, fenders, roof rack, A/B/C pillars, and propped-open hood
    addPart(bodyParts, new THREE.BoxGeometry(1.92, 0.66, 2.55), 0, 0.58, -0.58); // Main lower cabin tub
    addPart(bodyParts, new THREE.BoxGeometry(1.82, 0.54, 1.48), 0, 0.54, 1.32); // Engine bay sides
    addPart(bodyParts, new THREE.BoxGeometry(2.14, 0.16, 1.12), 0, 0.68, 1.25); // Front flared wheel fenders
    addPart(bodyParts, new THREE.BoxGeometry(2.14, 0.16, 1.12), 0, 0.68, -1.22); // Rear flared wheel fenders
    addPart(bodyParts, new THREE.BoxGeometry(1.78, 0.09, 2.18), 0, 1.62, -0.55); // Cabin hardtop roof
    // Slanted A-pillars & B/C-pillars framing actual open windows (NOT a solid box!)
    addPart(bodyParts, new THREE.BoxGeometry(0.09, 0.72, 0.09), -0.84, 1.25, 0.42, -0.25, 0, 0);
    addPart(bodyParts, new THREE.BoxGeometry(0.09, 0.72, 0.09), 0.84, 1.25, 0.42, -0.25, 0, 0);
    addPart(bodyParts, new THREE.BoxGeometry(0.11, 0.7, 0.12), -0.85, 1.26, -0.52);
    addPart(bodyParts, new THREE.BoxGeometry(0.11, 0.7, 0.12), 0.85, 1.26, -0.52);
    addPart(bodyParts, new THREE.BoxGeometry(0.14, 0.7, 0.18), -0.85, 1.26, -1.55);
    addPart(bodyParts, new THREE.BoxGeometry(0.14, 0.7, 0.18), 0.85, 1.26, -1.55);
    // Propped-open weathered hood revealing engine block
    addPart(bodyParts, new THREE.BoxGeometry(1.74, 0.06, 1.36), 0, 1.14, 1.28, -0.38, 0, 0);

    // Dark chassis frame, bumpers, roof expedition rack, seats, steering wheel, and exposed engine block
    addPart(darkParts, new THREE.BoxGeometry(2.04, 0.2, 0.24), 0, 0.36, 2.12); // Front steel bullbar bumper
    addPart(darkParts, new THREE.BoxGeometry(2.02, 0.2, 0.22), 0, 0.38, -2.02); // Rear bumper
    addPart(darkParts, new THREE.BoxGeometry(1.72, 0.46, 0.08), 0, 0.56, 2.02); // Front radiator grille
    addPart(darkParts, new THREE.BoxGeometry(0.75, 0.45, 0.85), 0, 0.66, 1.28); // Exposed V6 engine block & radiator hoses
    addPart(darkParts, new THREE.CylinderGeometry(0.02, 0.02, 0.58, 5), -0.72, 1.05, 1.72); // Hood prop rod
    addPart(darkParts, new THREE.BoxGeometry(1.64, 0.08, 1.85), 0, 1.71, -0.58); // Roof expedition rack
    addPart(darkParts, new THREE.BoxGeometry(0.55, 0.52, 0.52), -0.45, 0.88, -0.25); // Driver seat
    addPart(darkParts, new THREE.BoxGeometry(0.55, 0.52, 0.52), 0.45, 0.88, -0.25); // Passenger seat

    // Thin slanted windshield & side window glass panes
    addPart(glassParts, new THREE.PlaneGeometry(1.62, 0.64), 0, 1.26, 0.42, -0.25, 0, 0);
    addPart(glassParts, new THREE.PlaneGeometry(0.84, 0.58), -0.86, 1.26, -0.05, 0, Math.PI / 2, 0);
    addPart(glassParts, new THREE.PlaneGeometry(0.84, 0.58), 0.86, 1.26, -0.05, 0, Math.PI / 2, 0);

    const bodyMesh = new THREE.Mesh(this._mergeGeometriesSimple(bodyParts), bodyMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    const darkMesh = new THREE.Mesh(this._mergeGeometriesSimple(darkParts), darkMat);
    darkMesh.castShadow = true;
    const glassMesh = new THREE.Mesh(this._mergeGeometriesSimple(glassParts), glassMat);
    jeep.add(bodyMesh, darkMesh, glassMesh);

    // 5 wheels using real Poly Haven scanned `old_tyre` 3D geometry!
    const tyreGeo = this.models?.getGeometry('tyre');
    const tyreMat = this.models?.getMaterial('tyre') || darkMat;
    const wheelPositions = [
      { x: -0.98, y: 0.02, z: 1.25, ry: Math.PI / 2 },
      { x: 0.98, y: 0.02, z: 1.25, ry: -Math.PI / 2 },
      { x: -0.98, y: 0.02, z: -1.22, ry: Math.PI / 2 },
      { x: 0.98, y: 0.02, z: -1.22, ry: -Math.PI / 2 },
      { x: 0.0, y: 0.48, z: -1.96, ry: 0 }, // Rear door spare tyre
    ];

    if (tyreGeo) {
      const tyreInst = new THREE.InstancedMesh(tyreGeo, tyreMat, wheelPositions.length);
      tyreInst.castShadow = true;
      wheelPositions.forEach((wp, idx) => {
        this._dummy.position.set(wp.x, wp.y, wp.z);
        this._dummy.rotation.set(0, wp.ry, 0);
        this._dummy.scale.set(0.82, 0.82, 1.05);
        this._dummy.updateMatrix();
        tyreInst.setMatrixAt(idx, this._dummy.matrix);
      });
      tyreInst.instanceMatrix.needsUpdate = true;
      jeep.add(tyreInst);
    }

    this.group.add(jeep);

    // Register exact OBB collider for the buried Jeep with climbable hood (jy + 0.96m) & cabin roof (jy + 1.48m)!
    this.physics.addOBBCollider(jx, jz, 1.02, 2.08, rotY, jy - 0.5, jy + 1.48, jy + 0.96, true);
  }

  _createTatteredCampTent() {
    const tx = HOUSE_CENTER_X + 10.6;
    const tz = HOUSE_CENTER_Z + 5.8;
    const ty = getTerrainHeight(tx, tz);

    const woodPbr = this.tex.loadPBRSet('desert_wood', 1, 1);
    const woodMat = new THREE.MeshStandardMaterial({ map: woodPbr.map, roughness: 0.92 });
    const fabPbr = this.tex.loadPBRSet('tattered_fabric', 2, 2);

    this.tentTimeUniform = { value: 0 };
    const fabMat = new THREE.MeshStandardMaterial({
      map: fabPbr.map,
      roughness: 0.94,
      side: THREE.DoubleSide,
      color: 0xd9c29c,
    });
    // GPU vertex shader cloth flutter (zero per-frame CPU vertex buffer upload!)
    fabMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.tentTimeUniform;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nuniform float uTime;`)
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
           transformed.y += sin(uTime * 4.2 + position.x * 2.5 + position.z * 2.0) * 0.045;`
        );
    };

    const tent = new THREE.Group();
    tent.position.set(tx, ty, tz);
    tent.rotation.y = -0.5;

    const poleGeos = [];
    [[-1.6, -1.2], [1.6, -1.2], [-1.6, 1.2], [1.6, 1.2]].forEach(([px, pz]) => {
      const pGeo = new THREE.CylinderGeometry(0.05, 0.06, 2.35, 5);
      pGeo.translate(px, 1.15, pz);
      poleGeos.push(pGeo);
    });
    const polesMesh = new THREE.Mesh(this._mergeGeometriesSimple(poleGeos), woodMat);
    polesMesh.castShadow = true;
    poleGeos.forEach((g) => g.dispose());
    tent.add(polesMesh);

    const clothGeo = new THREE.PlaneGeometry(3.5, 2.7, 6, 4);
    clothGeo.rotateX(-Math.PI / 2 + 0.14);
    const tentCloth = new THREE.Mesh(clothGeo, fabMat);
    tentCloth.position.set(0, 2.28, 0);
    tentCloth.castShadow = true;
    tent.add(tentCloth);

    // Place a real Poly Haven scanned wooden barrel & crate under the expedition tent!
    const barrelMesh = this.models?.createMesh('barrel', 0.65);
    if (barrelMesh) {
      barrelMesh.position.set(-0.7, 0.0, -0.4);
      barrelMesh.castShadow = true;
      tent.add(barrelMesh);
    }

    this.group.add(tent);
    this.physics.addBoxCollider(tx - 0.85, tx - 0.15, tz - 0.85, tz - 0.15, ty, ty + 1.05, true);
  }

  _createSoaringHawks() {
    // Merge hawk body + wings into a single instanced mesh or 4 single-mesh birds (4 draw calls instead of 12!)
    const birdMat = new THREE.MeshBasicMaterial({ color: 0x2b1d12, side: THREE.DoubleSide });
    const bodyGeo = new THREE.ConeGeometry(0.11, 0.72, 4);
    bodyGeo.rotateX(Math.PI / 2);
    const wingR = new THREE.BufferGeometry();
    wingR.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array([0, 0, 0.16, 1.18, 0.06, -0.05, 0, 0, -0.22]), 3)
    );
    wingR.computeVertexNormals();
    const wingL = new THREE.BufferGeometry();
    wingL.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array([0, 0, 0.16, -1.18, 0.06, -0.05, 0, 0, -0.22]), 3)
    );
    wingL.computeVertexNormals();
    const birdGeo = this._mergeGeometriesSimple([bodyGeo, wingR, wingL]);

    this.hawkInst = new THREE.InstancedMesh(birdGeo, birdMat, 4);
    this.hawkInst.frustumCulled = false;
    this.group.add(this.hawkInst);

    for (let i = 0; i < 4; i++) {
      this.hawks.push({
        centerX: i % 2 === 0 ? -4 : 10,
        centerZ: HOUSE_CENTER_Z + (i - 1.5) * 8,
        radius: 19 + i * 7.5,
        altitude: 17 + i * 4.2,
        speed: 0.24 + i * 0.04,
        phase: i * 1.65,
      });
    }
  }

  _createRollingTumbleweeds() {
    // Organic rounded spherical cage of curved dry desert twigs (no spiky star look!) + single InstancedMesh (1 draw call instead of 4!)
    const rings = [];
    for (let i = 0; i < 7; i++) {
      const r = 0.28 + (i % 3) * 0.05;
      const ring = new THREE.TorusGeometry(r, 0.014, 4, 9);
      ring.rotateX((i * 1.13) % Math.PI);
      ring.rotateY((i * 1.97) % Math.PI);
      ring.rotateZ((i * 0.79) % Math.PI);
      rings.push(ring);
    }
    const weedGeo = this._mergeGeometriesSimple(rings);
    rings.forEach((r) => r.dispose());

    const weedMat = new THREE.MeshStandardMaterial({
      color: 0x7c613d,
      roughness: 0.98,
    });

    this.tumbleweedInst = new THREE.InstancedMesh(weedGeo, weedMat, 4);
    this.tumbleweedInst.frustumCulled = false;
    this.group.add(this.tumbleweedInst);

    for (let i = 0; i < 4; i++) {
      const x = -34 + i * 22;
      const z = -4 + (i % 3) * 14;
      this.tumbleweeds.push({
        x,
        z,
        rotX: 0,
        rotZ: 0,
        speed: 1.85 + (i % 3) * 0.6,
        phase: i * 1.4,
      });
    }
  }

  _createDesertLizards() {
    // 3 small desert monitor lizards (ضب/سحلية صحراوية) that bask near rocks and scurry away when the player approaches!
    const parts = [];
    const body = new THREE.ConeGeometry(0.06, 0.34, 5);
    body.rotateX(Math.PI / 2);
    const tail = new THREE.ConeGeometry(0.035, 0.32, 4);
    tail.rotateX(-Math.PI / 2);
    tail.translate(0, 0, -0.28);
    parts.push(body, tail);
    const lizGeo = this._mergeGeometriesSimple(parts);
    const lizMat = new THREE.MeshStandardMaterial({ color: 0xa68557, roughness: 0.88 });

    this.lizardInst = new THREE.InstancedMesh(lizGeo, lizMat, 3);
    this.lizardInst.frustumCulled = false;
    this.group.add(this.lizardInst);

    const spots = [
      { x: -9.5, z: 9.2, yaw: 0.8 },
      { x: -4.2, z: -2.5, yaw: -1.2 },
      { x: 7.5, z: -8.0, yaw: 2.1 },
    ];
    spots.forEach((s) => {
      this.lizards.push({ x: s.x, z: s.z, yaw: s.yaw, speed: 0 });
    });
  }

  _createFootprintTrail() {
    const footGeo = new THREE.PlaneGeometry(0.3, 0.58);
    footGeo.rotateX(-Math.PI / 2);
    const footMat = new THREE.MeshBasicMaterial({
      map: this.tex.createFootprintTexture(),
      transparent: true,
      depthWrite: false,
      opacity: 0.72,
    });

    const steps = 28;
    const inst = new THREE.InstancedMesh(footGeo, footMat, steps);
    const dummy = this._dummy;

    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      const x = THREE.MathUtils.lerp(-10.5, 0.0, t) + Math.sin(t * Math.PI) * -2.2;
      const z = THREE.MathUtils.lerp(13.8, HOUSE_CENTER_Z + 10.6, t);
      const side = (i % 2 === 0 ? 1 : -1) * 0.16;
      const px = x + side;
      const py = getTerrainHeight(px, z) + 0.03;

      dummy.position.set(px, py, z);
      dummy.rotation.set(0, Math.atan2(10.5, HOUSE_CENTER_Z + 10.6 - 13.8), 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    }
    inst.instanceMatrix.needsUpdate = true;
    this.group.add(inst);
  }

  _createGPUDustParticles() {
    // 100% GPU-driven Vertex Shader Dust Particles — ZERO per-frame CPU loop or buffer uploads!
    const maxCount = 320;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(maxCount * 3);
    const seeds = new Float32Array(maxCount * 3);

    for (let i = 0; i < maxCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 56;
      positions[i * 3 + 1] = 0.2 + Math.random() * 3.8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 56;
      seeds[i * 3] = Math.random() * 6.28;
      seeds[i * 3 + 1] = 0.7 + Math.random() * 1.3;
      seeds[i * 3 + 2] = Math.random();
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 3));
    this.dustMaxCount = maxCount;

    this.dustUniforms = {
      uTime: { value: 0 },
      uPlayerPos: { value: new THREE.Vector3() },
      uColor: { value: new THREE.Color('#efd3a8') },
      uMap: { value: this.tex.createDustParticleTexture() },
    };

    const dustMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: this.dustUniforms,
      vertexShader: /* glsl */ `
        attribute vec3 aSeed;
        uniform float uTime;
        uniform vec3 uPlayerPos;
        void main() {
          vec3 p = position;
          float speed = 2.6 * aSeed.y;
          p.x = mod(p.x + uTime * speed - uPlayerPos.x + 28.0, 56.0) - 28.0 + uPlayerPos.x;
          p.z = mod(p.z + uTime * speed * 0.55 - uPlayerPos.z + 28.0, 56.0) - 28.0 + uPlayerPos.z;
          p.y += sin(uTime * 1.3 + aSeed.x) * 0.25;
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = clamp(110.0 / max(1.0, -mvPosition.z), 2.0, 9.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        uniform sampler2D uMap;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.05) discard;
          gl_FragColor = vec4(uColor * tex.rgb, tex.a * 0.32);
        }
      `,
    });

    this.dustPoints = new THREE.Points(geo, dustMat);
    this.dustPoints.frustumCulled = false;
    this.group.add(this.dustPoints);
  }

  applySettings(preset) {
    if (this.dustPoints) {
      this.dustPoints.geometry.setDrawRange(0, Math.min(this.dustMaxCount, preset.dustCount));
    }
  }

  update(dt, elapsed, playerPos, timeOfDay) {
    const dummy = this._dummy;

    // 1. Animate soaring desert hawks (single InstancedMesh!)
    for (let i = 0; i < this.hawks.length; i++) {
      const h = this.hawks[i];
      const a = elapsed * h.speed + h.phase;
      const nx = h.centerX + Math.cos(a) * h.radius;
      const nz = h.centerZ + Math.sin(a) * h.radius;
      const ny = h.altitude + Math.sin(elapsed * 0.7 + h.phase) * 1.4;
      dummy.position.set(nx, ny, nz);
      dummy.rotation.set(0, -a, 0.24);
      dummy.scale.set(1, 1 + Math.sin(elapsed * 5.0 + h.phase) * 0.15, 1);
      dummy.updateMatrix();
      this.hawkInst.setMatrixAt(i, dummy.matrix);
    }
    this.hawkInst.instanceMatrix.needsUpdate = true;

    // 2. Animate rolling spherical tumbleweeds (single InstancedMesh!)
    for (let i = 0; i < this.tumbleweeds.length; i++) {
      const tw = this.tumbleweeds[i];
      const step = tw.speed * dt;
      tw.x += step;
      tw.z += step * 0.32;
      if (tw.x - playerPos.x > 46) tw.x -= 92;
      if (tw.z - playerPos.z > 46) tw.z -= 92;
      const bounce = Math.abs(Math.sin(elapsed * 3.8 + tw.phase)) * 0.18;
      const y = getTerrainHeight(tw.x, tw.z) + 0.34 + bounce;
      tw.rotZ -= step * 2.1;
      tw.rotX += step * 0.8;

      dummy.position.set(tw.x, y, tw.z);
      dummy.rotation.set(tw.rotX, 0, tw.rotZ);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      this.tumbleweedInst.setMatrixAt(i, dummy.matrix);
    }
    this.tumbleweedInst.instanceMatrix.needsUpdate = true;

    // 3. Animate desert lizards (scurry away when player walks within 5.5m!)
    for (let i = 0; i < this.lizards.length; i++) {
      const l = this.lizards[i];
      const dx = l.x - playerPos.x;
      const dz = l.z - playerPos.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 5.8) {
        l.yaw = Math.atan2(dx, dz);
        l.speed = 4.8;
      } else {
        l.speed *= Math.max(0, 1 - dt * 3.5);
      }
      if (l.speed > 0.05) {
        l.x += Math.sin(l.yaw) * l.speed * dt;
        l.z += Math.cos(l.yaw) * l.speed * dt;
      }
      const ly = getTerrainHeight(l.x, l.z) + 0.04;
      dummy.position.set(l.x, ly, l.z);
      dummy.rotation.set(0, l.yaw, Math.sin(elapsed * 18.0) * (l.speed * 0.03));
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      this.lizardInst.setMatrixAt(i, dummy.matrix);
    }
    this.lizardInst.instanceMatrix.needsUpdate = true;

    // 4. Gently sway desert palm crowns
    for (let i = 0; i < this.palmCrowns.length; i++) {
      const p = this.palmCrowns[i];
      p.crown.rotation.z = Math.sin(elapsed * 1.4 + p.phase) * (0.045 + timeOfDay * 0.03);
      p.crown.rotation.x = Math.cos(elapsed * 1.1 + p.phase) * 0.03;
    }

    // 5. Update GPU shader uniforms for tent cloth & dust particles (O(1) cost!)
    if (this.tentTimeUniform) this.tentTimeUniform.value = elapsed;
    this.dustUniforms.uTime.value = elapsed;
    this.dustUniforms.uPlayerPos.value.copy(playerPos);
    this.dustUniforms.uColor.value.lerpColors(
      new THREE.Color('#eed5ad'),
      new THREE.Color('#f7b56b'),
      Math.pow(timeOfDay, 1.2)
    );
  }

  _mergeGeometriesSimple(geos) {
    let totalVerts = 0;
    let totalIndices = 0;
    let hasUV = true;
    for (const g of geos) {
      totalVerts += g.attributes.position.count;
      totalIndices += g.index ? g.index.count : g.attributes.position.count;
      if (!g.attributes.uv) hasUV = false;
    }

    const posArr = new Float32Array(totalVerts * 3);
    const normArr = new Float32Array(totalVerts * 3);
    const uvArr = hasUV ? new Float32Array(totalVerts * 2) : null;
    const idxArr = new Uint32Array(totalIndices);

    let vOffset = 0;
    let iOffset = 0;
    for (const g of geos) {
      const p = g.attributes.position;
      const n = g.attributes.normal;
      posArr.set(p.array, vOffset * 3);
      normArr.set(n.array, vOffset * 3);
      if (hasUV && g.attributes.uv) {
        uvArr.set(g.attributes.uv.array, vOffset * 2);
      }
      if (g.index) {
        const idx = g.index.array;
        for (let k = 0; k < idx.length; k++) idxArr[iOffset + k] = idx[k] + vOffset;
        iOffset += idx.length;
      } else {
        for (let k = 0; k < p.count; k++) idxArr[iOffset + k] = vOffset + k;
        iOffset += p.count;
      }
      vOffset += p.count;
    }

    const merged = new THREE.BufferGeometry();
    merged.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    merged.setAttribute('normal', new THREE.BufferAttribute(normArr, 3));
    if (uvArr) merged.setAttribute('uv', new THREE.BufferAttribute(uvArr, 2));
    merged.setIndex(new THREE.BufferAttribute(idxArr, 1));
    return merged;
  }
}
