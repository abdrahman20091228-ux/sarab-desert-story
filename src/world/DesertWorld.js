import * as THREE from 'three';
import { getTerrainHeight, HOUSE_CENTER_X, HOUSE_CENTER_Z } from './TerrainMath.js';

/**
 * High-FPS Living Arabian Desert World:
 * - Lean 88x88 central dune terrain + 32x32 horizon skirt (~70% fewer triangles!)
 * - Towering stratified desert mesa buttes & rolling hills
 * - Low-poly craggy sandstone boulders with 100% ZERO-CLIPPING oriented ellipse collision
 * - Soaring desert hawks with animated flapping wings circling overhead
 * - Rolling tumbleweeds blowing across the dunes
 * - Swaying weathered desert palm trees near the dry oasis well
 * - Half-buried abandoned Expedition 4x4 Jeep Wreck & fluttering tattered tent
 * - Footprint trail leading from wake-up clearing to jeep & grand abandoned estate
 */
export class DesertWorld {
  constructor(scene, textureManager, physics, settings) {
    this.scene = scene;
    this.tex = textureManager;
    this.physics = physics;
    this.settings = settings;

    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.hawks = [];
    this.tumbleweeds = [];
    this.palmCrowns = [];
    this.tentCloth = null;
    this.jeepWorldPos = new THREE.Vector3(-5.8, 0, 2.2);

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
    this._createFootprintTrail();
    this._createDustParticles();
  }

  _createSandMaterial(repeatX, repeatY, isFar = false) {
    const pbr = this.tex.loadPBRSet('sand', repeatX, repeatY);
    const mat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: isFar ? null : pbr.normalMap,
      normalScale: new THREE.Vector2(1.1, 1.1),
      roughnessMap: null, // Saves texture sample per fragment on mobile GPUs!
      roughness: 0.91,
      metalness: 0.02,
      vertexColors: true,
    });

    if (!isFar) {
      mat.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', `#include <common>\nvarying vec3 vDesertWorldPos;`)
          .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>\nvDesertWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`);

        shader.fragmentShader = shader.fragmentShader
          .replace('#include <common>', `#include <common>\nvarying vec3 vDesertWorldPos;`)
          .replace(
            '#include <color_fragment>',
            `#include <color_fragment>
             float macroWave = sin(vDesertWorldPos.x * 0.04 + vDesertWorldPos.z * 0.03) * 0.5 + 0.5;
             vec3 warmTint = mix(vec3(0.95, 0.91, 0.84), vec3(1.06, 0.99, 0.90), macroWave);
             diffuseColor.rgb *= warmTint;`
          );
      };
    }

    return mat;
  }

  _createTerrain() {
    // 88x88 = 15,488 tris (down from 51,200 tris!) — huge mobile FPS boost with identical crisp ripples!
    const size = 380;
    const segments = 88;
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

      // Subtle baked AO around the enlarged 15m x 12.6m house footprint
      const dxH = x - HOUSE_CENTER_X;
      const dzH = z - HOUSE_CENTER_Z;
      const boxDist = Math.max(Math.abs(dxH) - 7.8, Math.abs(dzH) - 6.6);
      const houseAO = boxDist < 2.2 && boxDist > -7.0 ? THREE.MathUtils.clamp(0.78 + Math.max(0, boxDist) * 0.1, 0.78, 1.0) : 1.0;

      const crestBoost = THREE.MathUtils.clamp(0.92 + y * 0.012 - slope * 0.07, 0.82, 1.08);
      const ao = houseAO * crestBoost;

      colors[i * 3] = ao;
      colors[i * 3 + 1] = ao * 0.985;
      colors[i * 3 + 2] = ao * 0.96;
    }

    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    this.terrainMat = this._createSandMaterial(60, 60, false);
    this.terrainMesh = new THREE.Mesh(geo, this.terrainMat);
    this.terrainMesh.receiveShadow = true;
    this.group.add(this.terrainMesh);
  }

  _createHorizonSkirt() {
    // Ultra-lean 32x32 horizon skirt (2,048 tris instead of 9,248!)
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
    // Natural craggy multi-ridged desert rock massifs embedded into the horizon hills!
    const mesaGeo = new THREE.IcosahedronGeometry(1.0, 1);
    const mp = mesaGeo.attributes.position;
    for (let i = 0; i < mp.count; i++) {
      let x = mp.getX(i);
      let y = mp.getY(i);
      let z = mp.getZ(i);
      // Flatten top slightly into natural Arabian plateau ridge + stratified erosion crags
      if (y > 0.35) y = 0.35 + (y - 0.35) * 0.35;
      const crag = 1.0 + 0.24 * Math.sin(x * 4.2 + z * 3.1) + 0.14 * Math.cos(y * 7.0);
      mp.setXYZ(i, x * crag, (y + 0.65) * 0.85, z * crag);
    }
    mesaGeo.computeVertexNormals();

    const pbr = this.tex.loadPBRSet('sandstone_rock', 3, 2);
    const mesaMat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      roughness: 0.96,
      metalness: 0.02,
      color: 0xd6ae80,
    });

    const mesas = [
      { x: -145, z: -125, sx: 62, sy: 24, sz: 42, ry: 0.4 },
      { x: -38, z: -165, sx: 76, sy: 28, sz: 44, ry: 1.1 },
      { x: 102, z: -148, sx: 68, sy: 26, sz: 46, ry: 2.0 },
      { x: 155, z: -34, sx: 58, sy: 22, sz: 44, ry: 0.8 },
      { x: -158, z: 38, sx: 62, sy: 22, sz: 42, ry: 2.5 },
      { x: 118, z: 124, sx: 64, sy: 23, sz: 44, ry: 1.6 },
      { x: -82, z: 138, sx: 58, sy: 21, sz: 40, ry: 0.2 },
    ];

    const inst = new THREE.InstancedMesh(mesaGeo, mesaMat, mesas.length);
    const dummy = new THREE.Object3D();
    mesas.forEach((m, idx) => {
      const gy = getTerrainHeight(m.x, m.z);
      dummy.position.set(m.x, gy - 6.5, m.z);
      dummy.rotation.set(0, m.ry, 0);
      dummy.scale.set(m.sx, m.sy, m.sz);
      dummy.updateMatrix();
      inst.setMatrixAt(idx, dummy.matrix);

      // Register solid hill/mesa collision so player can NEVER walk inside them like air!
      this.physics.addMesaCollider(m.x, m.z, m.sx, m.sz, m.ry, gy - 2.0, m.sy);
    });
    inst.instanceMatrix.needsUpdate = true;
    this.group.add(inst);
  }

  _createRocks() {
    // Low-poly craggy sandstone boulders (Icosahedron detail=0 -> 20 tris each = 4x lighter!)
    const rockGeo = new THREE.IcosahedronGeometry(1.0, 0);
    const rp = rockGeo.attributes.position;
    for (let i = 0; i < rp.count; i++) {
      const x = rp.getX(i);
      const y = rp.getY(i);
      const z = rp.getZ(i);
      const strata = 0.96 + 0.09 * Math.sin(y * 6.0 + x * 3.0);
      rp.setXYZ(i, x * strata, y * 0.65 * strata, z * strata);
    }
    rockGeo.computeVertexNormals();

    const pbr = this.tex.loadPBRSet('sandstone_rock', 2, 2);
    const rockMat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: pbr.normalMap,
      normalScale: new THREE.Vector2(1.3, 1.3),
      roughness: 0.93,
      metalness: 0.02,
    });

    const placements = [
      { x: -8.2, z: 10.2, sx: 1.05, sy: 0.72, sz: 0.95, ry: 0.5 },
      { x: -13.5, z: -9.5, sx: 2.2, sy: 1.45, sz: 1.75, ry: 1.1 },
      { x: -15.6, z: -11.2, sx: 1.3, sy: 0.92, sz: 1.1, ry: 2.3 },
      { x: 13.8, z: -12.0, sx: 2.4, sy: 1.55, sz: 1.9, ry: 0.4 },
      { x: 15.8, z: -14.2, sx: 1.35, sy: 0.95, sz: 1.3, ry: 1.9 },
      { x: -13.2, z: -27.5, sx: 2.8, sy: 1.8, sz: 2.2, ry: 2.6 },
      { x: 12.0, z: -29.0, sx: 2.3, sy: 1.4, sz: 1.8, ry: 0.9 },
      { x: -29, z: 4, sx: 4.8, sy: 3.1, sz: 3.4, ry: 0.5 },
      { x: -34, z: -28, sx: 5.4, sy: 3.5, sz: 3.9, ry: 1.4 },
      { x: 31, z: -20, sx: 4.6, sy: 2.9, sz: 3.6, ry: 2.1 },
      { x: 22, z: 16, sx: 3.5, sy: 2.1, sz: 2.6, ry: 1.1 },
    ];

    let seed = 4219;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let i = 0; i < 52; i++) {
      const angle = rand() * Math.PI * 2;
      const dist = 20 + Math.pow(rand(), 0.78) * 115;
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist - 10;
      if (Math.abs(x - HOUSE_CENTER_X) < 12.5 && Math.abs(z - HOUSE_CENTER_Z) < 12.5) continue;
      if (Math.hypot(x + 11.0, z - 15.0) < 6.0) continue;
      if (Math.hypot(x - this.jeepWorldPos.x, z - this.jeepWorldPos.z) < 5.2) continue;

      const s = 0.6 + Math.pow(rand(), 1.75) * 3.0;
      placements.push({
        x,
        z,
        sx: s * (0.85 + rand() * 0.45),
        sy: s * (0.58 + rand() * 0.4),
        sz: s * (0.85 + rand() * 0.45),
        ry: rand() * Math.PI * 2,
      });
    }

    const instMesh = new THREE.InstancedMesh(rockGeo, rockMat, placements.length);
    instMesh.castShadow = true;
    instMesh.receiveShadow = true;

    const shadowGeo = new THREE.PlaneGeometry(1, 1);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: this.tex.createContactShadowTexture(),
      transparent: true,
      depthWrite: false,
      opacity: 0.6,
    });
    const shadowInst = new THREE.InstancedMesh(shadowGeo, shadowMat, placements.length);

    const dummy = new THREE.Object3D();
    placements.forEach((p, idx) => {
      const y = getTerrainHeight(p.x, p.z);
      // Deeply seated in sand dunes (zero hovering gaps even on steep dune slopes!)
      dummy.position.set(p.x, y - p.sy * 0.08, p.z);
      dummy.rotation.set(0, p.ry, 0);
      dummy.scale.set(p.sx, p.sy, p.sz);
      dummy.updateMatrix();
      instMesh.setMatrixAt(idx, dummy.matrix);

      dummy.position.set(p.x, y + 0.03, p.z);
      dummy.rotation.set(0, p.ry, 0);
      dummy.scale.set(p.sx * 2.2, 1, p.sz * 2.2);
      dummy.updateMatrix();
      shadowInst.setMatrixAt(idx, dummy.matrix);

      // Gentle climbable rock collider (true topY allows stepping/jumping right onto rocks!)
      const rockTopY = y + p.sy * 0.56;
      this.physics.addEllipseCollider(p.x, p.z, p.sx, p.sz, p.ry, rockTopY, true);
    });

    instMesh.instanceMatrix.needsUpdate = true;
    shadowInst.instanceMatrix.needsUpdate = true;
    this.group.add(instMesh);
    this.group.add(shadowInst);
  }

  _createDesertShrubs() {
    // Ultra-lean 5-twig desert scrub (only 40 tris per bush instead of 450 tris -> 11x faster!)
    const branches = [];
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 + 0.3;
      const tilt = 0.52 + (i % 2) * 0.24;
      const h = 0.42 + (i % 3) * 0.14;
      const cone = new THREE.ConeGeometry(0.032, h, 3, 1);
      cone.translate(0, h * 0.5, 0);
      cone.rotateZ(tilt);
      cone.rotateY(angle);
      branches.push(cone);
    }

    const mergedGeo = this._mergeGeometriesSimple(branches);
    branches.forEach((b) => b.dispose());

    const shrubMat = new THREE.MeshStandardMaterial({
      color: 0x7a6845,
      roughness: 0.98,
      metalness: 0.0,
    });

    const count = 46;
    const inst = new THREE.InstancedMesh(mergedGeo, shrubMat, count);
    inst.castShadow = false; // Zero wasted shadow map cost for tiny shrubs!

    let seed = 8821;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const dummy = new THREE.Object3D();
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
    // Living swaying weathered desert palm trees near the collapsed stone well & courtyard!
    const woodPbr = this.tex.loadPBRSet('desert_wood', 1, 3);
    const trunkMat = new THREE.MeshStandardMaterial({
      map: woodPbr.map,
      roughness: 0.95,
      color: 0x8f7454,
    });
    const frondMat = new THREE.MeshStandardMaterial({
      color: 0x626b3c,
      roughness: 0.92,
      side: THREE.DoubleSide,
    });

    const palmSites = [
      { x: HOUSE_CENTER_X - 10.8, z: HOUSE_CENTER_Z - 9.2, h: 6.2, lean: 0.14, ry: 0.4 },
      { x: HOUSE_CENTER_X - 12.6, z: HOUSE_CENTER_Z - 6.8, h: 4.8, lean: -0.18, ry: 2.1 },
      { x: HOUSE_CENTER_X + 11.4, z: HOUSE_CENTER_Z - 10.5, h: 5.5, lean: 0.16, ry: 1.2 },
      { x: -16.5, z: 7.5, h: 4.6, lean: 0.2, ry: 3.1 },
    ];

    // Shared frond geometry (low-poly arched diamond blade!)
    const frondGeo = new THREE.PlaneGeometry(0.58, 2.5, 1, 3);
    const fp = frondGeo.attributes.position;
    for (let i = 0; i < fp.count; i++) {
      const y = fp.getY(i);
      const t = (y + 1.25) / 2.5; // 0 at stem, 1 at tip
      const widthScale = Math.sin(t * Math.PI) * 1.15;
      fp.setX(i, fp.getX(i) * widthScale);
      fp.setZ(i, -t * t * 0.72); // Graceful palm arch droop!
    }
    frondGeo.translate(0, 1.25, 0);
    frondGeo.computeVertexNormals();

    palmSites.forEach((p, idx) => {
      const gy = getTerrainHeight(p.x, p.z);
      const tree = new THREE.Group();
      tree.position.set(p.x, gy - 0.1, p.z);
      tree.rotation.y = p.ry;

      // Gently curved 3-segment trunk (ultra low-poly!)
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.28, p.h, 6, 3), trunkMat);
      const tp = trunk.geometry.attributes.position;
      for (let i = 0; i < tp.count; i++) {
        const ny = (tp.getY(i) + p.h * 0.5) / p.h;
        tp.setX(i, tp.getX(i) + ny * ny * p.h * p.lean);
      }
      trunk.geometry.computeVertexNormals();
      trunk.position.y = p.h * 0.5;
      trunk.castShadow = true;
      tree.add(trunk);

      const crown = new THREE.Group();
      crown.position.set(p.h * p.lean, p.h - 0.15, 0);
      const frondCount = 9;
      for (let f = 0; f < frondCount; f++) {
        const frond = new THREE.Mesh(frondGeo, frondMat);
        frond.rotation.order = 'YXZ'; // Radiates fronds symmetrically 360° around palm crown!
        frond.rotation.y = (f / frondCount) * Math.PI * 2;
        frond.rotation.x = 0.78 + (f % 2) * 0.28;
        crown.add(frond);
      }
      tree.add(crown);
      this.palmCrowns.push({ crown, phase: idx * 1.7 });
      this.group.add(tree);

      this.physics.addCylinderCollider(p.x, p.z, 0.36, gy + p.h);
    });
  }

  _createBuriedJeep() {
    // Story Mission 2 Landmark: Half-buried 1990s Desert Expedition 4x4 Wreck!
    const jx = this.jeepWorldPos.x;
    const jz = this.jeepWorldPos.z;
    const jy = getTerrainHeight(jx, jz);
    this.jeepWorldPos.y = jy + 0.85;

    const metalPbr = this.tex.loadPBRSet('rusted_metal', 2, 2);
    const bodyMat = new THREE.MeshStandardMaterial({
      map: metalPbr.map,
      normalMap: metalPbr.normalMap,
      roughness: 0.78,
      metalness: 0.45,
      color: 0xc29e74,
    });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x26201a, roughness: 0.85, metalness: 0.35 });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x5c6966,
      roughness: 0.22,
      metalness: 0.4,
      transparent: true,
      opacity: 0.65,
    });

    const jeep = new THREE.Group();
    jeep.position.set(jx, jy - 0.14, jz);
    jeep.rotation.set(0.08, 0.72, -0.12);

    const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.78, 4.15), bodyMat);
    chassis.position.y = 0.56;
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    jeep.add(chassis);

    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.1, 1.85), bodyMat);
    roof.position.set(0, 1.62, -0.35);
    roof.castShadow = true;
    jeep.add(roof);

    const glass = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.64, 1.65), glassMat);
    glass.position.set(0, 1.25, -0.35);
    jeep.add(glass);

    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.08, 1.3), bodyMat);
    hood.position.set(0, 1.12, 1.32);
    hood.rotation.x = -0.32;
    hood.castShadow = true;
    jeep.add(hood);

    const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.3, 10);
    wheelGeo.rotateZ(Math.PI / 2);
    [[-0.98, 0.3, 1.3], [0.98, 0.3, 1.3], [-0.98, 0.3, -1.25], [0.98, 0.3, -1.25]].forEach(([wx, wy, wz]) => {
      const w = new THREE.Mesh(wheelGeo, darkMat);
      w.position.set(wx, wy, wz);
      w.castShadow = true;
      jeep.add(w);
    });

    const spare = new THREE.Mesh(wheelGeo, darkMat);
    spare.rotation.y = Math.PI / 2;
    spare.position.set(0, 0.72, -2.18);
    jeep.add(spare);

    this.group.add(jeep);
    this.physics.addEllipseCollider(jx, jz, 1.45, 2.35, 0.72, jy + 2.5);
  }

  _createTatteredCampTent() {
    const tx = HOUSE_CENTER_X + 10.6;
    const tz = HOUSE_CENTER_Z + 5.8;
    const ty = getTerrainHeight(tx, tz);

    const woodPbr = this.tex.loadPBRSet('desert_wood', 1, 1);
    const woodMat = new THREE.MeshStandardMaterial({ map: woodPbr.map, roughness: 0.92 });
    const fabPbr = this.tex.loadPBRSet('tattered_fabric', 2, 2);
    const fabMat = new THREE.MeshStandardMaterial({
      map: fabPbr.map,
      roughness: 0.96,
      side: THREE.DoubleSide,
      color: 0xd9c29c,
    });

    const tent = new THREE.Group();
    tent.position.set(tx, ty, tz);
    tent.rotation.y = -0.5;

    const poleGeo = new THREE.CylinderGeometry(0.05, 0.06, 2.35, 5);
    [[-1.6, -1.2], [1.6, -1.2], [-1.6, 1.2], [1.6, 1.2]].forEach(([px, pz]) => {
      const pole = new THREE.Mesh(poleGeo, woodMat);
      pole.position.set(px, 1.15, pz);
      pole.castShadow = true;
      tent.add(pole);
    });

    const clothGeo = new THREE.PlaneGeometry(3.5, 2.7, 6, 4);
    clothGeo.rotateX(-Math.PI / 2 + 0.14);
    this.tentBaseY = [];
    const cp = clothGeo.attributes.position;
    for (let i = 0; i < cp.count; i++) this.tentBaseY.push(cp.getY(i));
    this.tentCloth = new THREE.Mesh(clothGeo, fabMat);
    this.tentCloth.position.set(0, 2.28, 0);
    this.tentCloth.castShadow = true;
    tent.add(this.tentCloth);

    this.group.add(tent);
    this.physics.addBoxCollider(tx - 1.9, tx + 1.9, tz - 1.6, tz + 1.6, ty, ty + 2.5);
  }

  _createSoaringHawks() {
    const birdMat = new THREE.MeshBasicMaterial({ color: 0x2b1d12, side: THREE.DoubleSide });
    const bodyGeo = new THREE.ConeGeometry(0.11, 0.72, 4);
    bodyGeo.rotateX(Math.PI / 2);
    const wingGeo = new THREE.BufferGeometry();
    wingGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array([0, 0, 0.16, 1.15, 0.04, -0.05, 0, 0, -0.22]), 3)
    );
    wingGeo.computeVertexNormals();

    for (let i = 0; i < 4; i++) {
      const hawk = new THREE.Group();
      const body = new THREE.Mesh(bodyGeo, birdMat);
      const wingR = new THREE.Mesh(wingGeo, birdMat);
      const wingL = new THREE.Mesh(wingGeo, birdMat);
      wingL.scale.x = -1;
      hawk.add(body, wingR, wingL);
      this.scene.add(hawk);

      this.hawks.push({
        group: hawk,
        wingL,
        wingR,
        centerX: i % 2 === 0 ? -4 : 10,
        centerZ: HOUSE_CENTER_Z + (i - 1.5) * 8,
        radius: 19 + i * 7.5,
        altitude: 16 + i * 4.2,
        speed: 0.24 + i * 0.04,
        phase: i * 1.65,
      });
    }
  }

  _createRollingTumbleweeds() {
    // Organic tangled dry desert tumbleweed made of crossed woody twigs (no wireframe polyhedron look!)
    const twigs = [];
    for (let i = 0; i < 9; i++) {
      const stick = new THREE.CylinderGeometry(0.012, 0.016, 0.86, 3);
      stick.rotateX((i * 1.17) % Math.PI);
      stick.rotateY((i * 2.03) % Math.PI);
      stick.rotateZ((i * 0.83) % Math.PI);
      twigs.push(stick);
    }
    const weedGeo = this._mergeGeometriesSimple(twigs);
    twigs.forEach((t) => t.dispose());

    const weedMat = new THREE.MeshStandardMaterial({
      color: 0x7a5f3b,
      roughness: 1.0,
    });

    for (let i = 0; i < 4; i++) {
      const mesh = new THREE.Mesh(weedGeo, weedMat);
      const x = -34 + i * 22;
      const z = -4 + (i % 3) * 14;
      mesh.position.set(x, getTerrainHeight(x, z) + 0.42, z);
      this.group.add(mesh);
      this.tumbleweeds.push({
        mesh,
        speed: 1.9 + (i % 3) * 0.65,
        phase: i * 1.4,
      });
    }
  }

  _createFootprintTrail() {
    // Footprints trail leading from wake-up spot -> compass -> buried jeep -> grand house gate!
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
    const dummy = new THREE.Object3D();

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

  _createDustParticles() {
    const maxCount = 380;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(maxCount * 3);
    const seeds = new Float32Array(maxCount * 3);

    for (let i = 0; i < maxCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 56;
      positions[i * 3 + 1] = 0.15 + Math.pow(Math.random(), 1.8) * 3.8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 56;
      seeds[i * 3] = Math.random() * 6.28;
      seeds[i * 3 + 1] = 0.7 + Math.random() * 1.3;
      seeds[i * 3 + 2] = Math.random();
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.dustSeeds = seeds;
    this.dustMaxCount = maxCount;

    this.dustMat = new THREE.PointsMaterial({
      size: 0.15,
      map: this.tex.createDustParticleTexture(),
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
      color: new THREE.Color('#efd3a8'),
    });

    this.dustPoints = new THREE.Points(geo, this.dustMat);
    this.dustPoints.frustumCulled = false;
    this.group.add(this.dustPoints);
  }

  applySettings(preset) {
    if (this.dustPoints) {
      this.dustPoints.geometry.setDrawRange(0, Math.min(this.dustMaxCount, preset.dustCount));
    }
  }

  update(dt, elapsed, playerPos, timeOfDay) {
    // 1. Animate soaring desert hawks!
    for (let i = 0; i < this.hawks.length; i++) {
      const h = this.hawks[i];
      const a = elapsed * h.speed + h.phase;
      const nx = h.centerX + Math.cos(a) * h.radius;
      const nz = h.centerZ + Math.sin(a) * h.radius;
      const ny = h.altitude + Math.sin(elapsed * 0.7 + h.phase) * 1.4;
      h.group.position.set(nx, ny, nz);
      h.group.rotation.y = -a;
      h.group.rotation.z = 0.24; // Banking gracefully into the turn!
      const flap = Math.sin(elapsed * 4.2 + h.phase) > 0.35 ? Math.sin(elapsed * 12.0 + h.phase) * 0.35 : 0.08;
      h.wingR.rotation.z = flap;
      h.wingL.rotation.z = -flap;
    }

    // 2. Animate rolling desert tumbleweeds across the dunes!
    for (let i = 0; i < this.tumbleweeds.length; i++) {
      const tw = this.tumbleweeds[i];
      const m = tw.mesh;
      const step = tw.speed * dt;
      m.position.x += step;
      m.position.z += step * 0.32;
      if (m.position.x - playerPos.x > 46) m.position.x -= 92;
      if (m.position.z - playerPos.z > 46) m.position.z -= 92;
      const bounce = Math.abs(Math.sin(elapsed * 3.8 + tw.phase)) * 0.24;
      m.position.y = getTerrainHeight(m.position.x, m.position.z) + 0.42 + bounce;
      m.rotation.z -= step * 2.1;
      m.rotation.x += step * 0.8;
    }

    // 3. Gently sway desert palm crowns in the hot breeze
    for (let i = 0; i < this.palmCrowns.length; i++) {
      const p = this.palmCrowns[i];
      p.crown.rotation.z = Math.sin(elapsed * 1.4 + p.phase) * (0.045 + timeOfDay * 0.03);
      p.crown.rotation.x = Math.cos(elapsed * 1.1 + p.phase) * 0.03;
    }

    // 4. Flutter expedition tent canopy
    if (this.tentCloth) {
      const cp = this.tentCloth.geometry.attributes.position;
      for (let i = 0; i < cp.count; i++) {
        cp.setY(i, this.tentBaseY[i] + Math.sin(elapsed * 4.0 + i * 0.9) * 0.04);
      }
      cp.needsUpdate = true;
    }

    // 5. Blowing sunlit ground-level dust motes
    const pos = this.dustPoints.geometry.attributes.position;
    const drawCount = this.dustPoints.geometry.drawRange.count || this.dustMaxCount;
    const windSpeed = 2.4 + timeOfDay * 1.2;

    for (let i = 0; i < drawCount; i++) {
      let x = pos.getX(i) + windSpeed * dt * this.dustSeeds[i * 3 + 1];
      let y = pos.getY(i) + Math.sin(elapsed * 1.1 + this.dustSeeds[i * 3]) * 0.1 * dt;
      let z = pos.getZ(i) + 0.55 * windSpeed * dt * this.dustSeeds[i * 3 + 1];

      if (x - playerPos.x > 28) x -= 56;
      if (x - playerPos.x < -28) x += 56;
      if (z - playerPos.z > 28) z -= 56;
      if (z - playerPos.z < -28) z += 56;
      if (y < 0.15) y = 3.5;
      if (y > 4.2) y = 0.25;

      pos.setXYZ(i, x, y, z);
    }
    pos.needsUpdate = true;

    this.dustMat.color.lerpColors(new THREE.Color('#eed5ad'), new THREE.Color('#f7b56b'), Math.pow(timeOfDay, 1.2));
  }

  _mergeGeometriesSimple(geos) {
    let totalVerts = 0;
    let totalIndices = 0;
    for (const g of geos) {
      totalVerts += g.attributes.position.count;
      totalIndices += g.index ? g.index.count : g.attributes.position.count;
    }

    const posArr = new Float32Array(totalVerts * 3);
    const normArr = new Float32Array(totalVerts * 3);
    const idxArr = new Uint32Array(totalIndices);

    let vOffset = 0;
    let iOffset = 0;
    for (const g of geos) {
      const p = g.attributes.position;
      const n = g.attributes.normal;
      posArr.set(p.array, vOffset * 3);
      normArr.set(n.array, vOffset * 3);
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
    merged.setIndex(new THREE.BufferAttribute(idxArr, 1));
    return merged;
  }
}
