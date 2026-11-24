import * as THREE from 'three';
import {
  getTerrainHeight,
  getTerrainNormal,
  HOUSE_CENTER_X,
  HOUSE_CENTER_Z,
  TERRAIN_SIZE,
  TERRAIN_SEGMENTS,
} from './TerrainMath.js';
import { DESERT_PALETTE, SHARED_GRADE_UNIFORMS, attachDesertGrading } from '../engine/Palette.js';

/**
 * High-FPS Living Arabian Desert World (v4.0):
 * - 96x96 central dune terrain with 100% exact visual-physics triangle parity + 32x32 horizon skirt
 * - Unified desert color grading + frustum-edge shadow fade
 * - Stratified sandstone mesas with aerial perspective (single InstancedMesh draw call)
 * - Distance-LOD photogrammetry boulders (full scans close, low-poly LOD far -> saves ~50k tris!)
 * - Soft radial contact shadow decals (opacity 0.35)
 * - Sun-bleached dusty khaki-rust expedition 4x4 Jeep (merged body+chassis, reflective dusty glass, scanned tyres)
 * - Dense alpha-tested twig-cluster tumbleweeds (1 instanced draw call, zero wire-cage look)
 * - Instanced palm crowns + GPU-fluttering tent + GPU dust particles boosted by DustStorm
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
    this.palmCrownData = [];
    this.jeepWorldPos = new THREE.Vector3(-5.8, 0, 2.2);
    this.tentBarrelWorldPos = new THREE.Vector3();
    this.stormIntensity = 0;
    this._dummy = new THREE.Object3D();
    this._tmpCol = new THREE.Color();

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
      normalScale: new THREE.Vector2(1.05, 1.05),
      roughnessMap: null,
      roughness: 0.91,
      metalness: 0.02,
      vertexColors: true,
      color: DESERT_PALETTE.sandTintNoon,
    });
    mat.name = isFar ? 'sand_far' : 'sand_near';

    if (!isFar) {
      mat.onBeforeCompile = (shader) => {
        shader.uniforms.uShadowFadeCenter = SHARED_GRADE_UNIFORMS.uShadowFadeCenter;
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', `#include <common>\nvarying vec3 vDesertWorldPos;`)
          .replace(
            '#include <worldpos_vertex>',
            `#include <worldpos_vertex>\nvDesertWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`
          );

        shader.fragmentShader = shader.fragmentShader
          .replace(
            '#include <common>',
            `#include <common>\nuniform vec3 uShadowFadeCenter;\nvarying vec3 vDesertWorldPos;`
          )
          .replace(
            '#include <color_fragment>',
            `#include <color_fragment>
             float macroWave = sin(vDesertWorldPos.x * 0.045 + vDesertWorldPos.z * 0.035) * 0.5 + 0.5;
             vec3 warmTint = mix(vec3(0.94, 0.89, 0.81), vec3(1.04, 0.98, 0.90), macroWave);
             diffuseColor.rgb *= warmTint;`
          )
          .replace(
            '#include <lights_fragment_maps>',
            `#include <lights_fragment_maps>`
          );
      };
      attachDesertGrading(mat, { saturation: 0.92, contrast: 1.03 });
    } else {
      attachDesertGrading(mat, { saturation: 0.88, contrast: 1.0, aerialStrength: 0.45, aerialStart: 140, aerialEnd: 520 });
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
        boxDist < 2.4 && boxDist > -7.0 ? THREE.MathUtils.clamp(0.78 + Math.max(0, boxDist) * 0.09, 0.78, 1.0) : 1.0;

      const crestBoost = THREE.MathUtils.clamp(0.92 + y * 0.011 - slope * 0.07, 0.83, 1.06);
      const ao = houseAO * crestBoost;

      colors[i * 3] = ao;
      colors[i * 3 + 1] = ao * 0.985;
      colors[i * 3 + 2] = ao * 0.965;
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
      const shade = THREE.MathUtils.clamp(0.94 + y * 0.004, 0.84, 1.05);
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
    // Watertight stratified Arabian sandstone mesa buttes with talus skirt, cliff ledges & aerial perspective!
    const mesaGeo = new THREE.CylinderGeometry(0.54, 1.08, 1.0, 16, 7, false);
    mesaGeo.translate(0, 0.5, 0);
    const mp = mesaGeo.attributes.position;
    for (let i = 0; i < mp.count; i++) {
      const x = mp.getX(i);
      const y = mp.getY(i);
      const z = mp.getZ(i);
      const ang = Math.atan2(z, x);
      // Geological profile: wide sandy talus base (y < 0.35), stepped sandstone cliff, flat wind-eroded cap
      const talusFlair = y < 0.35 ? 1.0 + (0.35 - y) * 0.42 : 1.0;
      const cliffStep = 1.0 + 0.055 * Math.sin(y * 22.0) + 0.03 * Math.cos(y * 37.0);
      const radialBreakup = 1.0 + 0.14 * Math.sin(ang * 3.0 + 0.7) + 0.09 * Math.cos(ang * 5.0 - 0.4);
      const factor = y > 0.96 ? radialBreakup : radialBreakup * talusFlair * cliffStep;
      mp.setXYZ(i, x * factor, y, z * factor);
    }
    mesaGeo.computeVertexNormals();

    const pbr = this.tex.loadPBRSet('sandstone_rock', 4, 2);
    const mesaMat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: pbr.normalMap,
      normalScale: new THREE.Vector2(0.85, 0.85),
      roughness: 0.96,
      metalness: 0.01,
      color: DESERT_PALETTE.mesaBase,
    });
    mesaMat.name = 'mesa_sandstone';

    // Horizontal geological sandstone strata + sandy talus dust blend + desaturated aerial perspective!
    mesaMat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vMesaWorldPos;\nvarying float vMesaLocalY;`)
        .replace(
          '#include <worldpos_vertex>',
          `#include <worldpos_vertex>
           vMesaLocalY = position.y;
           vec4 _mw = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _mw = instanceMatrix * _mw;
           #endif
           vMesaWorldPos = (modelMatrix * _mw).xyz;`
        );
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vMesaWorldPos;\nvarying float vMesaLocalY;`)
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
           // Desaturate raw texture heavily so mesas never look cartoon-orange
           float _ml = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_ml), diffuseColor.rgb, 0.62);
           // Stratified sedimentary bands along world Y with gentle geological dip
           float bandCoord = vMesaWorldPos.y * 0.42 + sin(vMesaWorldPos.x * 0.03 + vMesaWorldPos.z * 0.025) * 0.8;
           float strata1 = sin(bandCoord * 3.1) * 0.5 + 0.5;
           float strata2 = sin(bandCoord * 8.7 + 1.3) * 0.5 + 0.5;
           vec3 paleLimestone = vec3(0.76, 0.66, 0.52);
           vec3 erodedOchre   = vec3(0.55, 0.43, 0.31);
           vec3 strataTint = mix(erodedOchre, paleLimestone, strata1 * 0.65 + strata2 * 0.35);
           diffuseColor.rgb *= mix(vec3(0.85), strataTint * 1.35, 0.68);
           // Windblown sand talus skirt at the base of the mesa blends directly into dune sand!
           float baseDust = smoothstep(0.32, 0.02, vMesaLocalY);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.74, 0.63, 0.47), baseDust * 0.62);`
        );
    };
    attachDesertGrading(mesaMat, {
      saturation: 0.78,
      contrast: 1.03,
      aerialStrength: 0.48,
      aerialStart: 65,
      aerialEnd: 205,
    });

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

  _createLowPolyRockLODGeo() {
    // Sculpted 80-triangle sandstone boulder matching rock_07 normalized proportions (X:±0.26, Y:0..0.44, Z:±0.49)
    const geo = new THREE.IcosahedronGeometry(0.5, 1);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i);
      let y = p.getY(i);
      let z = p.getZ(i);
      const n = 0.86 + 0.22 * Math.sin(x * 7.1 + z * 5.3) * Math.cos(y * 6.4);
      x *= 0.54 * n;
      y = (y + 0.5) * 0.44 * n;
      z *= 0.96 * n;
      p.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();
    return geo;
  }

  _createRocks() {
    const scanGeo1 = this.models?.getGeometry('rock_07');
    const scanMat1 = this.models?.getMaterial('rock_07');
    const scanGeo2 = this.models?.getGeometry('rock_09') || scanGeo1;
    const scanMat2 = this.models?.getMaterial('rock_09') || scanMat1;

    const lodGeo = this._createLowPolyRockLODGeo();
    const pbr = this.tex.loadPBRSet('sandstone_rock', 2, 2);
    const lodMat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: pbr.normalMap,
      normalScale: new THREE.Vector2(0.7, 0.7),
      roughness: 0.94,
      color: 0x9b8974,
    });
    lodMat.name = 'rock_lod_sandstone';
    lodMat.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
         float _rl = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
         // Desaturate rusty orange tint so far LOD rocks match dark sandstone rock_07/09 scans!
         diffuseColor.rgb = mix(vec3(_rl), diffuseColor.rgb, 0.48) * vec3(0.95, 0.90, 0.82);`
      );
    };
    attachDesertGrading(lodMat, { saturation: 0.78, aerialStrength: 0.42, aerialStart: 45, aerialEnd: 160 });

    const rockGeo1 = scanGeo1 || lodGeo;
    const rockMat1 = scanMat1 || lodMat;
    const rockGeo2 = scanGeo2 || lodGeo;
    const rockMat2 = scanMat2 || lodMat;

    const placements = [
      // Hero rock at (-8.2, 10.2) where the broken compass sits!
      { x: -8.2, z: 10.2, sx: 3.6, sy: 1.55, sz: 2.0, ry: 0.5, type: 0, hero: true },
      { x: -13.5, z: -9.5, sx: 5.5, sy: 3.1, sz: 3.6, ry: 1.1, type: 0, hero: true },
      { x: -15.6, z: -11.2, sx: 3.6, sy: 2.1, sz: 2.4, ry: 2.3, type: 1, hero: true },
      { x: 13.8, z: -12.0, sx: 5.8, sy: 3.3, sz: 3.8, ry: 0.4, type: 0, hero: true },
      { x: 15.8, z: -14.2, sx: 3.8, sy: 2.2, sz: 2.6, ry: 1.9, type: 1, hero: true },
      { x: -13.2, z: -27.5, sx: 6.4, sy: 3.8, sz: 4.2, ry: 2.6, type: 0, hero: true },
      { x: 12.0, z: -29.0, sx: 5.4, sy: 3.0, sz: 3.6, ry: 0.9, type: 1, hero: true },
      { x: -29, z: 4, sx: 9.5, sy: 5.8, sz: 6.4, ry: 0.5, type: 0, hero: false },
      { x: -34, z: -28, sx: 10.5, sy: 6.5, sz: 7.0, ry: 1.4, type: 0, hero: false },
      { x: 31, z: -20, sx: 9.2, sy: 5.5, sz: 6.2, ry: 2.1, type: 1, hero: false },
      { x: 22, z: 16, sx: 7.4, sy: 4.4, sz: 4.8, ry: 1.1, type: 0, hero: false },
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
      const distFromPlay = Math.hypot(x, z + 6);
      placements.push({
        x,
        z,
        sx: s * (0.9 + rand() * 0.35),
        sy: s * (0.65 + rand() * 0.35),
        sz: s * (0.85 + rand() * 0.35),
        ry: rand() * Math.PI * 2,
        type: i % 2,
        hero: distFromPlay < 30,
      });
    }

    // Distance LOD split: full photogrammetry scans near gameplay path, 80-tri sculpted LOD rocks far away!
    const near0 = placements.filter((p) => p.hero && p.type === 0);
    const near1 = placements.filter((p) => p.hero && p.type === 1);
    const farRocks = placements.filter((p) => !p.hero);

    const inst0 = new THREE.InstancedMesh(rockGeo1, rockMat1, Math.max(1, near0.length));
    inst0.count = near0.length;
    inst0.castShadow = true;
    inst0.receiveShadow = true;

    const inst1 = new THREE.InstancedMesh(rockGeo2, rockMat2, Math.max(1, near1.length));
    inst1.count = near1.length;
    inst1.castShadow = true;
    inst1.receiveShadow = true;

    const farInst = new THREE.InstancedMesh(lodGeo, lodMat, Math.max(1, farRocks.length));
    farInst.count = farRocks.length;
    farInst.castShadow = false; // Outside ±22m shadow frustum -> saves shadow pass work!
    farInst.receiveShadow = true;

    // Soft, tight contact shadow decals ONLY for near hero rocks (opacity 0.35, no dark smear!)
    const nearAllCount = near0.length + near1.length;
    const shadowGeo = new THREE.PlaneGeometry(1, 1);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: this.tex.createContactShadowTexture(),
      transparent: true,
      depthWrite: false,
      opacity: 0.35,
      polygonOffset: true,
      polygonOffsetFactor: -2,
    });
    const shadowInst = new THREE.InstancedMesh(shadowGeo, shadowMat, Math.max(1, nearAllCount));
    shadowInst.count = nearAllCount;

    const dummy = this._dummy;
    const upVec = new THREE.Vector3(0, 1, 0);
    const normVec = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const rotYQuat = new THREE.Quaternion();
    const nOut = { x: 0, y: 1, z: 0 };

    let i0 = 0;
    let i1 = 0;
    let iFar = 0;
    let iShad = 0;

    placements.forEach((p) => {
      const y = getTerrainHeight(p.x, p.z);
      const sink = p.sy * 0.04;
      dummy.position.set(p.x, y - sink, p.z);
      dummy.rotation.set(0, p.ry, 0);
      dummy.scale.set(p.sx, p.sy, p.sz);
      dummy.updateMatrix();

      if (p.hero) {
        if (p.type === 0) inst0.setMatrixAt(i0++, dummy.matrix);
        else inst1.setMatrixAt(i1++, dummy.matrix);

        getTerrainNormal(p.x, p.z, nOut);
        normVec.set(nOut.x, nOut.y, nOut.z);
        quat.setFromUnitVectors(upVec, normVec);
        rotYQuat.setFromAxisAngle(upVec, p.ry);
        quat.multiply(rotYQuat);

        dummy.position.set(p.x, y + 0.03, p.z);
        dummy.quaternion.copy(quat);
        const rx = p.sx * 0.265;
        const rz = p.sz * 0.49;
        // Tighter contact footprint (1.92x instead of 2.5x) eliminates dark smear around boulders!
        dummy.scale.set(rx * 1.92, 1, rz * 1.92);
        dummy.updateMatrix();
        shadowInst.setMatrixAt(iShad++, dummy.matrix);
      } else {
        farInst.setMatrixAt(iFar++, dummy.matrix);
      }

      const rx = p.sx * 0.265;
      const rz = p.sz * 0.49;
      const maxHFactor = p.type === 0 ? 0.44 : 0.23;
      const rockTopY = y - sink + p.sy * maxHFactor;
      this.physics.addEllipseCollider(p.x, p.z, rx, rz, p.ry, rockTopY, true);
    });

    inst0.instanceMatrix.needsUpdate = true;
    inst1.instanceMatrix.needsUpdate = true;
    farInst.instanceMatrix.needsUpdate = true;
    shadowInst.instanceMatrix.needsUpdate = true;
    this.group.add(inst0, inst1, farInst, shadowInst);
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
      color: 0x766444,
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
    // Batch all 4 palm trunks into 1 mesh AND all 4 palm crowns into 1 InstancedMesh -> only 2 draw calls total!
    const woodPbr = this.tex.loadPBRSet('desert_wood', 1, 3);
    const trunkMat = new THREE.MeshStandardMaterial({
      map: woodPbr.map,
      roughness: 0.94,
      color: 0x8c7356,
    });
    const frondMat = new THREE.MeshStandardMaterial({
      color: 0x5c693c,
      roughness: 0.9,
      side: THREE.DoubleSide,
    });

    const palmSites = [
      { x: HOUSE_CENTER_X - 10.8, z: HOUSE_CENTER_Z - 9.2, h: 6.2, lean: 0.14, ry: 0.4 },
      { x: HOUSE_CENTER_X - 12.6, z: HOUSE_CENTER_Z - 6.8, h: 4.8, lean: -0.18, ry: 2.1 },
      { x: HOUSE_CENTER_X + 11.4, z: HOUSE_CENTER_Z - 10.5, h: 5.5, lean: 0.16, ry: 1.2 },
      { x: -16.5, z: 7.5, h: 4.6, lean: 0.2, ry: 3.1 },
    ];

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

    this.palmCrownInst = new THREE.InstancedMesh(crownGeo, frondMat, palmSites.length);
    this.palmCrownInst.castShadow = true;

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

      const topX = p.x + Math.cos(p.ry) * (p.h * p.lean);
      const topZ = p.z - Math.sin(p.ry) * (p.h * p.lean);
      this.palmCrownData.push({
        x: topX,
        y: gy + p.h - 0.22,
        z: topZ,
        ry: p.ry,
        phase: idx * 1.7,
      });

      this.physics.addCylinderCollider(p.x, p.z, 0.34, gy + p.h);
    });

    const mergedTrunks = new THREE.Mesh(this._mergeGeometriesSimple(trunkGeos), trunkMat);
    mergedTrunks.castShadow = true;
    mergedTrunks.receiveShadow = true;
    trunkGeos.forEach((g) => g.dispose());
    this.group.add(mergedTrunks, this.palmCrownInst);
  }

  _createBuriedJeep() {
    // Story Mission 2 Landmark: Sun-bleached dusty khaki-rust 1990s Expedition 4x4 Wreck!
    // Merged opaque body+chassis (1 draw call) + semi-reflective dusty glass (1) + 5 instanced tyres (1) = 3 draw calls!
    const jx = this.jeepWorldPos.x;
    const jz = this.jeepWorldPos.z;
    const jy = getTerrainHeight(jx, jz);
    this.jeepWorldPos.y = jy + 0.85;

    const metalPbr = this.tex.loadPBRSet('rusted_metal', 2, 2);
    const bodyMat = new THREE.MeshStandardMaterial({
      map: metalPbr.map,
      normalMap: metalPbr.normalMap,
      normalScale: new THREE.Vector2(0.55, 0.55),
      roughness: 0.78,
      metalness: 0.28,
      vertexColors: true,
    });
    bodyMat.name = 'jeep_weathered';
    // Sun-bleached sand-khaki desert paint + localized rust streaks + dust coating on upper surfaces
    bodyMat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vJeepNormalW;`)
        .replace(
          '#include <worldpos_vertex>',
          `#include <worldpos_vertex>\nvJeepNormalW = normalize(mat3(modelMatrix) * objectNormal);`
        );
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vJeepNormalW;`)
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
           // Keep steel chassis/bullbar dark (vColor < 0.25), lift body panels to weathered desert khaki-tan with rust mottling!
           float _vLuma = dot(vColor.rgb, vec3(0.333));
           float _texLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           float _rustMask = smoothstep(0.18, 0.04, _texLuma);
           vec3 _khakiPaint = vColor.rgb * (0.72 + _texLuma * 1.45);
           vec3 _rustPatch = vec3(0.24, 0.11, 0.055);
           vec3 _panelCol = mix(_khakiPaint, _rustPatch, _rustMask * 0.45);
           diffuseColor.rgb = mix(diffuseColor.rgb * 1.35, _panelCol, smoothstep(0.12, 0.35, _vLuma));
           float topDust = smoothstep(0.35, 0.92, vJeepNormalW.y);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.54, 0.43, 0.28), topDust * 0.48);`
        );
    };
    attachDesertGrading(bodyMat, { saturation: 0.85, contrast: 1.03 });

    // Dusty semi-reflective safety glass (catches procedural sky IBL reflections instead of looking flat transparent!)
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x6a7870,
      roughness: 0.22,
      metalness: 0.72,
      envMapIntensity: 1.55,
      transparent: true,
      opacity: 0.68,
      side: THREE.DoubleSide,
    });

    const jeep = new THREE.Group();
    jeep.position.set(jx, jy - 0.15, jz);
    const rotY = 0.72;
    jeep.rotation.set(0.06, rotY, -0.09);

    const opaqueParts = [];
    const glassParts = [];

    const addColoredPart = (arr, geo, px, py, pz, rx, ry, rz, colorHex) => {
      const m = new THREE.Matrix4();
      m.compose(
        new THREE.Vector3(px, py, pz),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)),
        new THREE.Vector3(1, 1, 1)
      );
      geo.applyMatrix4(m);
      geo.computeVertexNormals();

      if (colorHex !== null) {
        const c = new THREE.Color(colorHex);
        const count = geo.attributes.position.count;
        const cols = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          cols[i * 3] = c.r;
          cols[i * 3 + 1] = c.g;
          cols[i * 3 + 2] = c.b;
        }
        geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
      }
      arr.push(geo);
    };

    const BODY_KHAKI = 0xb9a382;   // Sun-faded desert sand/khaki expedition body
    const BODY_TRIM = 0x8f7c62;    // Weathered fender & pillar trim
    const DARK_STEEL = 0x2f2b27;   // Bullbar, rack, chassis, engine, seats

    // Sculpted 4x4 body panels, fenders, roof, pillars & propped-open hood
    addColoredPart(opaqueParts, new THREE.BoxGeometry(1.92, 0.66, 2.55), 0, 0.58, -0.58, 0, 0, 0, BODY_KHAKI);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(1.82, 0.54, 1.48), 0, 0.54, 1.32, 0, 0, 0, BODY_KHAKI);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(2.14, 0.16, 1.12), 0, 0.68, 1.25, 0, 0, 0, BODY_TRIM);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(2.14, 0.16, 1.12), 0, 0.68, -1.22, 0, 0, 0, BODY_TRIM);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(1.78, 0.09, 2.18), 0, 1.62, -0.55, 0, 0, 0, BODY_KHAKI);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(0.09, 0.72, 0.09), -0.84, 1.25, 0.42, -0.25, 0, 0, BODY_TRIM);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(0.09, 0.72, 0.09), 0.84, 1.25, 0.42, -0.25, 0, 0, BODY_TRIM);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(0.11, 0.7, 0.12), -0.85, 1.26, -0.52, 0, 0, 0, BODY_TRIM);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(0.11, 0.7, 0.12), 0.85, 1.26, -0.52, 0, 0, 0, BODY_TRIM);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(0.14, 0.7, 0.18), -0.85, 1.26, -1.55, 0, 0, 0, BODY_TRIM);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(0.14, 0.7, 0.18), 0.85, 1.26, -1.55, 0, 0, 0, BODY_TRIM);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(1.74, 0.06, 1.36), 0, 1.14, 1.28, -0.38, 0, 0, BODY_KHAKI);

    // Dark steel bullbar, grille, engine block, hood rod, expedition roof rack & seats
    addColoredPart(opaqueParts, new THREE.BoxGeometry(2.04, 0.2, 0.24), 0, 0.36, 2.12, 0, 0, 0, DARK_STEEL);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(2.02, 0.2, 0.22), 0, 0.38, -2.02, 0, 0, 0, DARK_STEEL);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(1.72, 0.46, 0.08), 0, 0.56, 2.02, 0, 0, 0, DARK_STEEL);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(0.75, 0.45, 0.85), 0, 0.66, 1.28, 0, 0, 0, DARK_STEEL);
    addColoredPart(opaqueParts, new THREE.CylinderGeometry(0.02, 0.02, 0.58, 5), -0.72, 1.05, 1.72, 0, 0, 0, DARK_STEEL);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(1.64, 0.08, 1.85), 0, 1.71, -0.58, 0, 0, 0, DARK_STEEL);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(0.55, 0.52, 0.52), -0.45, 0.88, -0.25, 0, 0, 0, DARK_STEEL);
    addColoredPart(opaqueParts, new THREE.BoxGeometry(0.55, 0.52, 0.52), 0.45, 0.88, -0.25, 0, 0, 0, DARK_STEEL);

    // Slanted windshield & side window glass panes
    addColoredPart(glassParts, new THREE.PlaneGeometry(1.62, 0.64), 0, 1.26, 0.42, -0.25, 0, 0, null);
    addColoredPart(glassParts, new THREE.PlaneGeometry(0.84, 0.58), -0.86, 1.26, -0.05, 0, Math.PI / 2, 0, null);
    addColoredPart(glassParts, new THREE.PlaneGeometry(0.84, 0.58), 0.86, 1.26, -0.05, 0, Math.PI / 2, 0, null);

    const bodyMesh = new THREE.Mesh(this._mergeGeometriesSimple(opaqueParts), bodyMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    opaqueParts.forEach((g) => g.dispose());

    const glassMesh = new THREE.Mesh(this._mergeGeometriesSimple(glassParts), glassMat);
    glassParts.forEach((g) => g.dispose());
    jeep.add(bodyMesh, glassMesh);

    // 5 wheels using real Poly Haven scanned `old_tyre` 3D geometry!
    const tyreGeo = this.models?.getGeometry('tyre');
    const tyreMat = this.models?.getMaterial('tyre') || bodyMat;
    const wheelPositions = [
      { x: -0.98, y: 0.02, z: 1.25, ry: Math.PI / 2 },
      { x: 0.98, y: 0.02, z: 1.25, ry: -Math.PI / 2 },
      { x: -0.98, y: 0.02, z: -1.22, ry: Math.PI / 2 },
      { x: 0.98, y: 0.02, z: -1.22, ry: -Math.PI / 2 },
      { x: 0.0, y: 0.48, z: -1.96, ry: 0 },
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
    const woodMat = new THREE.MeshStandardMaterial({ map: woodPbr.map, roughness: 0.92, color: 0xb8a388 });
    const fabPbr = this.tex.loadPBRSet('tattered_fabric', 2, 2);

    this.tentTimeUniform = { value: 0 };
    this.tentStormUniform = { value: 0 };
    const fabMat = new THREE.MeshStandardMaterial({
      map: fabPbr.map,
      roughness: 0.94,
      side: THREE.DoubleSide,
      color: 0xd4be9a,
    });
    fabMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.tentTimeUniform;
      shader.uniforms.uStorm = this.tentStormUniform;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nuniform float uTime;\nuniform float uStorm;`)
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
           float spd = 4.2 + uStorm * 7.5;
           float amp = 0.042 + uStorm * 0.11;
           transformed.y += sin(uTime * spd + position.x * 2.5 + position.z * 2.0) * amp;`
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
    polesMesh.castShadow = false;
    poleGeos.forEach((g) => g.dispose());
    tent.add(polesMesh);

    const clothGeo = new THREE.PlaneGeometry(3.5, 2.7, 6, 4);
    clothGeo.rotateX(-Math.PI / 2 + 0.14);
    const tentCloth = new THREE.Mesh(clothGeo, fabMat);
    tentCloth.position.set(0, 2.28, 0);
    tentCloth.castShadow = true;
    tent.add(tentCloth);

    // Record tent barrel position so AbandonedHouse batches it in the single barrel InstancedMesh (saves 1 draw call!)
    this.tentBarrelWorldPos.set(tx - 0.55, ty, tz - 0.55);
    this.group.add(tent);
    this.physics.addBoxCollider(tx - 0.85, tx - 0.15, tz - 0.85, tz - 0.15, ty, ty + 1.05, true);
  }

  _createSoaringHawks() {
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
    // Organic dense dry-bramble sphere built from 6 intersecting alpha-tested twig cards (1 InstancedMesh draw call, ~12 tris each!)
    // Completely replaces the wireframe torus-cage look!
    const cards = [];
    const rotations = [
      [0, 0, 0],
      [0, Math.PI / 3, 0],
      [0, (Math.PI * 2) / 3, 0],
      [Math.PI / 2, 0.3, 0],
      [Math.PI / 3, 0.4, Math.PI / 4],
      [-Math.PI / 3, -0.4, -Math.PI / 4],
    ];
    for (const [rx, ry, rz] of rotations) {
      const p = new THREE.PlaneGeometry(0.76, 0.76);
      const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz));
      p.applyMatrix4(m);
      cards.push(p);
    }
    const weedGeo = this._mergeGeometriesSimple(cards);
    cards.forEach((c) => c.dispose());

    const weedMat = new THREE.MeshStandardMaterial({
      map: this.tex.createTwigClusterTexture(),
      alphaTest: 0.35,
      side: THREE.DoubleSide,
      roughness: 0.96,
      metalness: 0.0,
      color: 0xc2a47c,
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
      opacity: 0.65,
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
    this.baseDustCount = 240;

    this.dustUniforms = {
      uTime: { value: 0 },
      uStorm: { value: 0 },
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
        uniform float uStorm;
        uniform vec3 uPlayerPos;
        void main() {
          vec3 p = position;
          float speed = (2.6 + uStorm * 10.5) * aSeed.y;
          p.x = mod(p.x + uTime * speed - uPlayerPos.x + 28.0, 56.0) - 28.0 + uPlayerPos.x;
          p.z = mod(p.z + uTime * speed * 0.42 - uPlayerPos.z + 28.0, 56.0) - 28.0 + uPlayerPos.z;
          p.y += sin(uTime * (1.3 + uStorm * 2.4) + aSeed.x) * (0.25 + uStorm * 0.45);
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          float sizeMult = 1.0 + uStorm * 0.85;
          gl_PointSize = clamp((110.0 * sizeMult) / max(1.0, -mvPosition.z), 2.0, 15.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        uniform float uStorm;
        uniform sampler2D uMap;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.05) discard;
          float op = mix(0.28, 0.62, uStorm);
          gl_FragColor = vec4(uColor * tex.rgb, tex.a * op);
        }
      `,
    });

    this.dustPoints = new THREE.Points(geo, dustMat);
    this.dustPoints.frustumCulled = false;
    this.group.add(this.dustPoints);
  }

  applySettings(preset) {
    this.baseDustCount = Math.min(this.dustMaxCount, preset.dustCount);
    if (this.dustPoints) {
      this.dustPoints.geometry.setDrawRange(0, this.baseDustCount);
    }
  }

  setStormIntensity(val) {
    this.stormIntensity = Math.max(0, Math.min(1, val));
    if (this.dustPoints) {
      // During dust storm, reveal up to full maxCount existing GPU dust points (0 extra draw calls!)
      const activeCount = Math.round(
        THREE.MathUtils.lerp(this.baseDustCount, this.dustMaxCount, this.stormIntensity)
      );
      this.dustPoints.geometry.setDrawRange(0, activeCount);
    }
  }

  update(dt, elapsed, playerPos, timeOfDay) {
    const dummy = this._dummy;
    const storm = this.stormIntensity;

    // 1. Animate soaring desert hawks (flee higher during storm)
    for (let i = 0; i < this.hawks.length; i++) {
      const h = this.hawks[i];
      const a = elapsed * h.speed + h.phase;
      const nx = h.centerX + Math.cos(a) * h.radius;
      const nz = h.centerZ + Math.sin(a) * h.radius;
      const ny = h.altitude + storm * 14.0 + Math.sin(elapsed * 0.7 + h.phase) * 1.4;
      dummy.position.set(nx, ny, nz);
      dummy.rotation.set(0, -a, 0.24);
      dummy.scale.set(1, 1 + Math.sin(elapsed * 5.0 + h.phase) * 0.15, 1);
      dummy.updateMatrix();
      this.hawkInst.setMatrixAt(i, dummy.matrix);
    }
    this.hawkInst.instanceMatrix.needsUpdate = true;

    // 2. Animate dense twig tumbleweeds (roll faster in storm wind!)
    const windMult = 1.0 + storm * 2.2;
    for (let i = 0; i < this.tumbleweeds.length; i++) {
      const tw = this.tumbleweeds[i];
      const step = tw.speed * windMult * dt;
      tw.x += step;
      tw.z += step * 0.34;
      if (tw.x - playerPos.x > 46) tw.x -= 92;
      if (tw.z - playerPos.z > 46) tw.z -= 92;
      const bounce = Math.abs(Math.sin(elapsed * (3.8 + storm * 3.0) + tw.phase)) * (0.16 + storm * 0.22);
      const y = getTerrainHeight(tw.x, tw.z) + 0.34 + bounce;
      tw.rotZ -= step * 2.2;
      tw.rotX += step * 0.85;

      dummy.position.set(tw.x, y, tw.z);
      dummy.rotation.set(tw.rotX, 0, tw.rotZ);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      this.tumbleweedInst.setMatrixAt(i, dummy.matrix);
    }
    this.tumbleweedInst.instanceMatrix.needsUpdate = true;

    // 3. Animate desert lizards
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

    // 4. Gently sway instanced palm crowns (bends dramatically in dust storm!)
    for (let i = 0; i < this.palmCrownData.length; i++) {
      const p = this.palmCrownData[i];
      const swayAmp = 0.045 + timeOfDay * 0.025 + storm * 0.16;
      const swayFreq = 1.4 + storm * 3.2;
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(
        Math.cos(elapsed * (swayFreq * 0.8) + p.phase) * swayAmp * 0.7,
        p.ry,
        -storm * 0.14 + Math.sin(elapsed * swayFreq + p.phase) * swayAmp
      );
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      this.palmCrownInst.setMatrixAt(i, dummy.matrix);
    }
    this.palmCrownInst.instanceMatrix.needsUpdate = true;

    // 5. Update GPU shader uniforms (O(1) cost!)
    if (this.tentTimeUniform) this.tentTimeUniform.value = elapsed;
    if (this.tentStormUniform) this.tentStormUniform.value = storm;
    this.dustUniforms.uTime.value = elapsed;
    this.dustUniforms.uStorm.value = storm;
    this.dustUniforms.uPlayerPos.value.copy(playerPos);

    this._tmpCol.lerpColors(
      new THREE.Color('#ecd6b0'),
      new THREE.Color('#f0b672'),
      Math.pow(timeOfDay, 1.2)
    );
    if (storm > 0.001) {
      this._tmpCol.lerp(DESERT_PALETTE.horizonStorm, storm * 0.75);
    }
    this.dustUniforms.uColor.value.copy(this._tmpCol);
  }

  _mergeGeometriesSimple(geos) {
    let totalVerts = 0;
    let totalIndices = 0;
    let hasUV = true;
    let hasColor = true;
    for (const g of geos) {
      totalVerts += g.attributes.position.count;
      totalIndices += g.index ? g.index.count : g.attributes.position.count;
      if (!g.attributes.uv) hasUV = false;
      if (!g.attributes.color) hasColor = false;
    }

    const posArr = new Float32Array(totalVerts * 3);
    const normArr = new Float32Array(totalVerts * 3);
    const uvArr = hasUV ? new Float32Array(totalVerts * 2) : null;
    const colArr = hasColor ? new Float32Array(totalVerts * 3) : null;
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
      if (hasColor && g.attributes.color) {
        colArr.set(g.attributes.color.array, vOffset * 3);
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
    if (colArr) merged.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
    merged.setIndex(new THREE.BufferAttribute(idxArr, 1));
    return merged;
  }
}
