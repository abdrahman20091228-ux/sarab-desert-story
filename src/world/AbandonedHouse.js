import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { DESERT_PALETTE, attachDesertGrading } from '../engine/Palette.js';
import { createBakedArchitecturalBox, disposeHierarchy } from '../engine/BakedAO.js';
import { IS_MOBILE } from '../engine/Settings.js';

/**
 * Night Sanctuary — The Abandoned Desert Estate (v5.0 Stage 4)
 * - Completely cleaned of the old story (compass, jeep, canteen, journal, radio, cellar hatch)
 *   and the old Jug/Vase 3D model!
 * - Enhanced with Baked Corner/Edge & Ground-Junction Contact AO on all adobe walls, buttresses,
 *   courtyard walls, and interior stone floor!
 * - Warm flickering oil lanterns illuminate the porch and main hall under the desert night sky,
 *   creating a welcoming beacon visible from 200m away across the moonlit dunes!
 */
export class AbandonedHouse {
  constructor(parentGroup, textureManager, modelManager, physics, getHeightFn, centerX = 0, centerZ = -68, baseY = 0) {
    this.parentGroup = parentGroup;
    this.tex = textureManager;
    this.models = modelManager;
    this.physics = physics;
    this.getHeight = getHeightFn;
    this.centerX = centerX;
    this.centerZ = centerZ;
    this.baseY = baseY;

    this.group = new THREE.Group();
    this.group.position.set(centerX, baseY, centerZ);
    this.parentGroup.add(this.group);

    this.awningTimeUniform = { value: 0 };
    this.windTurbine = null;
    this.windVane = null;
    this.lanternLights = [];
    this.beaconSprite = null;
    this.sanctuaryInteractable = null;

    this._createMaterials();
    this._buildMainEstate();
    this._buildCourtyardWalls();
    this._buildGrandAwning();
    this._buildWindVaneTower();
    this._buildInteriorSanctuary();
    this._buildBackCourtyardAndWell();
    this._optimizeStaticBatches();
  }

  _createMaterials() {
    const adobe = this.tex.loadPBRSet('adobe_wall', 1.0, 1.0);
    this.adobeMat = IS_MOBILE
      ? new THREE.MeshLambertMaterial({
          map: adobe.map,
          normalMap: adobe.normalMap,
          normalScale: new THREE.Vector2(0.5, 0.5),
          vertexColors: true,
          color: 0xe6d6bc,
        })
      : new THREE.MeshStandardMaterial({
          map: adobe.map,
          normalMap: adobe.normalMap,
          normalScale: new THREE.Vector2(0.5, 0.5),
          roughness: 0.93,
          metalness: 0.02,
          vertexColors: true,
          color: 0xe6d6bc,
        });
    this.adobeMat.name = 'adobe_wall_v5';

    this.adobeMat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vAdobeWorldPos;`)
        .replace(
          '#include <worldpos_vertex>',
          `#include <worldpos_vertex>\nvAdobeWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`
        );
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vAdobeWorldPos;`)
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
           float _al = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_al), diffuseColor.rgb, 0.62) * 1.28 + vec3(0.025, 0.02, 0.015);
           float groundDust = smoothstep(0.95, 0.02, vAdobeWorldPos.y);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.32, 0.25, 0.17), groundDust * 0.36);`
        );
    };
    attachDesertGrading(this.adobeMat, { saturation: 0.88, contrast: 1.03 });

    this.ceilingMat = new THREE.MeshLambertMaterial({
      color: DESERT_PALETTE.ceilingPlaster,
      vertexColors: true,
    });

    const wood = this.tex.loadPBRSet('desert_wood', 1.6, 1.0);
    this.woodMat = IS_MOBILE
      ? new THREE.MeshLambertMaterial({ map: wood.map, color: 0xb89f80 })
      : new THREE.MeshStandardMaterial({
          map: wood.map,
          normalMap: wood.normalMap,
          normalScale: new THREE.Vector2(0.85, 0.85),
          roughness: 0.88,
          metalness: 0.03,
          color: 0xb89f80,
        });

    const metal = this.tex.loadPBRSet('rusted_metal', 1.5, 1.5);
    this.metalMat = new THREE.MeshStandardMaterial({
      map: metal.map,
      normalMap: IS_MOBILE ? null : metal.normalMap,
      roughness: 0.76,
      metalness: 0.42,
      color: 0x9c8c78,
    });

    const floor = this.tex.loadPBRSet('floor_tiles', 4.8, 4.0);
    this.floorMat = IS_MOBILE
      ? new THREE.MeshLambertMaterial({
          map: floor.map,
          normalMap: floor.normalMap,
          normalScale: new THREE.Vector2(0.82, 0.82),
          vertexColors: true,
          color: 0xc2b296,
        })
      : new THREE.MeshStandardMaterial({
          map: floor.map,
          normalMap: floor.normalMap,
          normalScale: new THREE.Vector2(0.85, 0.85),
          roughness: 0.9,
          metalness: 0.02,
          vertexColors: true,
          color: 0xc2b296,
        });
    attachDesertGrading(this.floorMat, { saturation: 0.88, contrast: 1.03 });

    const fabric = this.tex.loadPBRSet('tattered_fabric', 2.4, 2.0);
    this.fabricMat = new THREE.MeshLambertMaterial({
      map: fabric.map,
      side: THREE.DoubleSide,
      color: 0xc8b498,
    });
    this.fabricMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.awningTimeUniform;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nuniform float uTime;`)
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
           transformed.y += sin(uTime * 2.2 + position.x * 1.7 + position.z * 1.4) * 0.032;`
        );
    };

    // Procedural traditional Bedouin Sadu woven rug
    this.rugMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.rugMat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nvarying vec2 vRugUv;`)
        .replace('#include <uv_vertex>', `#include <uv_vertex>\nvRugUv = uv;`);
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nvarying vec2 vRugUv;`)
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
           vec2 p = vRugUv;
           vec2 c = abs(p - 0.5) * 2.0;
           float weave = 0.92 + 0.08 * sin(p.x * 240.0) * sin(p.y * 160.0);
           vec3 colCrimson = vec3(0.30, 0.06, 0.035);
           vec3 colCream   = vec3(0.56, 0.47, 0.34);
           vec3 colOchre   = vec3(0.45, 0.26, 0.08);
           vec3 colCharcoal= vec3(0.06, 0.052, 0.048);
           vec3 col = colCrimson;
           float outerBorder = step(0.84, max(c.x, c.y));
           float innerBorder = step(0.74, max(c.x, c.y)) * (1.0 - outerBorder);
           col = mix(col, colCharcoal, outerBorder * 0.85);
           col = mix(col, colCream, innerBorder);
           vec2 tile = fract(vec2(p.x * 5.0, p.y * 3.0)) - 0.5;
           float diamond = abs(tile.x) + abs(tile.y);
           if (max(c.x, c.y) < 0.74) {
             col = mix(col, colCream, smoothstep(0.42, 0.38, diamond));
             col = mix(col, colOchre, smoothstep(0.29, 0.25, diamond));
             col = mix(col, colCharcoal, smoothstep(0.14, 0.10, diamond));
           }
           diffuseColor.rgb = col * weave;`
        );
    };

    const rock = this.tex.loadPBRSet('sandstone_rock', 2.0, 2.0);
    this.stoneMat = new THREE.MeshLambertMaterial({ map: rock.map, color: 0xb6a084 });

    const sandPbr = this.tex.loadPBRSet('sand', 2.0, 2.0);
    this.sandDriftMat = new THREE.MeshLambertMaterial({ map: sandPbr.map, color: 0xdccaa8 });

    this.darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x3b3129,
      roughness: 0.68,
      metalness: 0.65,
    });

    this.lanternGlowMat = new THREE.MeshBasicMaterial({
      color: 0xffc86e,
    });
  }

  _addBox(x, y, z, w, h, d, addCollider = true, mat = this.adobeMat, castShadow = true, forceClimbable = null) {
    const geo =
      mat === this.adobeMat
        ? createBakedArchitecturalBox(w, h, d, { bottomAO: 0.54, topAO: 0.92, cornerAO: 0.20, tileScale: 1.45 })
        : new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    this.group.add(mesh);

    if (addCollider) {
      const wx = this.centerX + x;
      const wz = this.centerZ + z;
      this.physics.addBoxCollider(
        wx - w * 0.5,
        wx + w * 0.5,
        wz - d * 0.5,
        wz + d * 0.5,
        this.baseY + y - h * 0.5,
        this.baseY + y + h * 0.5,
        forceClimbable
      );
    }
    return mesh;
  }

  _buildMainEstate() {
    const H = 4.35;
    const t = 0.56;

    // Subdivided interior stone floor slab with deep Baked Wall-Junction Contact AO!
    const floorGeo = new THREE.BoxGeometry(14.8, 0.24, 12.2, 8, 1, 8);
    const fp = floorGeo.attributes.position;
    const fc = new Float32Array(fp.count * 3);
    for (let i = 0; i < fp.count; i++) {
      const px = fp.getX(i);
      const pz = fp.getZ(i);
      const outerEdge = Math.max(Math.abs(px) / 7.4, Math.abs(pz) / 6.1);
      // Darken along outer walls AND along interior divider walls at x=-2.3 and x=+2.6!
      const div1 = Math.max(0, 1.0 - Math.abs(px + 2.3) / 1.35) * (pz < 1.2 || pz > 3.2 ? 0.24 : 0.06);
      const div2 = Math.max(0, 1.0 - Math.abs(px - 2.6) / 1.35) * (pz < 1.2 || pz > 3.2 ? 0.24 : 0.06);
      const wallSeam = Math.pow(Math.max(0, outerEdge - 0.62) / 0.38, 1.6) * 0.42;
      const ao = THREE.MathUtils.clamp(1.0 - wallSeam - div1 - div2, 0.48, 1.0);
      fc[i * 3] = ao;
      fc[i * 3 + 1] = ao * 0.985;
      fc[i * 3 + 2] = ao * 0.96;
    }
    floorGeo.setAttribute('color', new THREE.BufferAttribute(fc, 3));
    const floorMesh = new THREE.Mesh(floorGeo, this.floorMat);
    floorMesh.position.set(0, 0.04, 0);
    floorMesh.receiveShadow = true;
    this.group.add(floorMesh);

    this.physics.addFloorZone(
      this.centerX - 7.3,
      this.centerX + 7.3,
      this.centerZ - 6.0,
      this.centerZ + 6.4,
      this.baseY + 0.16,
      'stone'
    );
    this.physics.addInteriorZone(
      this.centerX - 7.1,
      this.centerX + 7.1,
      this.centerZ - 5.9,
      this.centerZ + 5.9,
      this.baseY - 0.5,
      this.baseY + 4.6
    );

    const step = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.18, 1.6), this.stoneMat);
    step.position.set(0, 0.05, 6.85);
    step.receiveShadow = true;
    this.group.add(step);

    // Front wall (+Z = +6.1) with grand open doorway + 2 windows
    this._addBox(-6.5, H / 2, 6.1, 2.2, H, t, true, this.adobeMat, true, false);
    this._addBox(-2.3, H / 2, 6.1, 2.2, H, t, true, this.adobeMat, true, false);
    this._addBox(-4.4, 0.65, 6.1, 2.0, 1.3, t, true, this.adobeMat, true, false);
    this._addBox(-4.4, 3.55, 6.1, 2.0, 1.6, t, false);
    this._addBox(-4.4, 1.32, 6.1, 2.1, 0.11, 0.64, false, this.woodMat);
    this._addBox(-4.4, 2.74, 6.1, 2.1, 0.11, 0.64, false, this.woodMat);

    this._addBox(2.3, H / 2, 6.1, 2.2, H, t, true, this.adobeMat, true, false);
    this._addBox(6.5, H / 2, 6.1, 2.2, H, t, true, this.adobeMat, true, false);
    this._addBox(4.4, 0.65, 6.1, 2.0, 1.3, t, true, this.adobeMat, true, false);
    this._addBox(4.4, 3.55, 6.1, 2.0, 1.6, t, false);
    this._addBox(4.4, 1.32, 6.1, 2.1, 0.11, 0.64, false, this.woodMat);
    this._addBox(4.4, 2.74, 6.1, 2.1, 0.11, 0.64, false, this.woodMat);

    // Doorway lintel & half-open weathered wooden door
    this._addBox(0, 3.68, 6.1, 2.5, 1.35, t, false);
    this._addBox(0, 2.98, 6.1, 2.75, 0.18, 0.66, false, this.woodMat);
    this._addBox(-1.22, 1.48, 6.1, 0.14, 2.96, 0.6, false, this.woodMat);
    this._addBox(1.22, 1.48, 6.1, 0.14, 2.96, 0.6, false, this.woodMat);
    const openDoor = new THREE.Mesh(new THREE.BoxGeometry(1.05, 2.75, 0.08), this.woodMat);
    openDoor.position.set(-1.12, 1.52, 5.45);
    openDoor.rotation.y = 1.18;
    this.group.add(openDoor);

    // Corner buttresses
    this._addBox(-7.45, H * 0.48, 6.15, 0.78, H * 0.96, 0.78, false);
    this._addBox(7.45, H * 0.48, 6.15, 0.78, H * 0.96, 0.78, false);
    this._addBox(-7.45, H * 0.48, -6.15, 0.78, H * 0.96, 0.78, false);
    this._addBox(7.45, H * 0.48, -6.15, 0.78, H * 0.96, 0.78, false);

    // Back wall (-Z = -6.1) with rear archway
    this._addBox(-4.35, H / 2, -6.1, 6.5, H, t, true, this.adobeMat, true, false);
    this._addBox(4.35, H / 2, -6.1, 6.5, H, t, true, this.adobeMat, true, false);
    this._addBox(0, 3.65, -6.1, 2.3, 1.4, t, false);
    this._addBox(0, 2.92, -6.1, 2.5, 0.16, 0.64, false, this.woodMat);

    // West & East walls
    this._addBox(-7.35, H / 2, 3.85, t, H, 4.9, true, this.adobeMat, true, false);
    this._addBox(-7.35, H / 2, -3.85, t, H, 4.9, true, this.adobeMat, true, false);
    this._addBox(-7.35, 0.65, 0, t, 1.3, 2.8, true, this.adobeMat, true, false);
    this._addBox(-7.35, 3.55, 0, t, 1.6, 2.8, false);
    this._addBox(-7.35, 1.32, 0, 0.66, 0.12, 2.9, false, this.woodMat);
    this._addBox(-7.35, 2.75, 0, 0.66, 0.12, 2.9, false, this.woodMat);

    this._addBox(7.35, H / 2, 3.6, t, H, 5.4, true, this.adobeMat, true, false);
    this._addBox(7.35, H / 2, -3.6, t, H, 5.4, true, this.adobeMat, true, false);
    this._addBox(7.35, 0.9, 0, t, 1.8, 1.8, true, this.adobeMat, true, false);
    this._addBox(7.35, 3.65, 0, t, 1.4, 1.8, false);

    // Interior room dividers
    this._addBox(-2.3, H / 2, -2.5, 0.42, H, 7.0, true, this.adobeMat, true, false);
    this._addBox(-2.3, H / 2, 4.75, 0.42, H, 2.6, true, this.adobeMat, true, false);
    this._addBox(-2.3, 3.65, 2.2, 0.42, 1.4, 2.6, false);
    this._addBox(-2.3, 2.92, 2.2, 0.5, 0.14, 2.5, false, this.woodMat);

    this._addBox(2.6, H / 2, -2.5, 0.42, H, 7.0, true, this.adobeMat, true, false);
    this._addBox(2.6, H / 2, 4.75, 0.42, H, 2.6, true, this.adobeMat, true, false);
    this._addBox(2.6, 3.65, 2.2, 0.42, 1.4, 2.6, false);
    this._addBox(2.6, 2.92, 2.2, 0.5, 0.14, 2.5, false, this.woodMat);

    // Roof + Baked Corner-AO Plaster Ceiling + Parapets + Timber Beams
    this._addBox(0, 4.46, 0, 15.2, 0.3, 12.6, false);
    const ceilGeo = new THREE.PlaneGeometry(14.6, 12.0, 6, 6);
    const cp = ceilGeo.attributes.position;
    const cc = new Float32Array(cp.count * 3);
    for (let i = 0; i < cp.count; i++) {
      const edge = Math.max(Math.abs(cp.getX(i)) / 7.3, Math.abs(cp.getY(i)) / 6.0);
      const ao = THREE.MathUtils.clamp(1.0 - Math.pow(Math.max(0, edge - 0.55) / 0.45, 1.5) * 0.38, 0.58, 1.0);
      cc[i * 3] = ao;
      cc[i * 3 + 1] = ao * 0.98;
      cc[i * 3 + 2] = ao * 0.95;
    }
    ceilGeo.setAttribute('color', new THREE.BufferAttribute(cc, 3));
    const ceilingPanel = new THREE.Mesh(ceilGeo, this.ceilingMat);
    ceilingPanel.rotation.x = Math.PI / 2;
    ceilingPanel.position.set(0, 4.29, 0);
    this.group.add(ceilingPanel);

    this._addBox(-4.2, 4.88, 6.1, 6.4, 0.56, 0.38, false);
    this._addBox(4.4, 4.82, 6.1, 6.0, 0.46, 0.38, false);
    this._addBox(-7.4, 4.88, 0, 0.38, 0.56, 12.6, false);
    this._addBox(7.4, 4.82, -1.2, 0.38, 0.44, 10.0, false);
    this._addBox(0, 4.92, -6.1, 15.2, 0.62, 0.38, false);

    const beamGeo = new THREE.CylinderGeometry(0.11, 0.12, 16.4, 5);
    beamGeo.rotateZ(Math.PI / 2);
    for (let z = -4.8; z <= 4.8; z += 1.9) {
      const beam = new THREE.Mesh(beamGeo, this.woodMat);
      beam.position.set(0, 4.16, z);
      this.group.add(beam);
    }

    // Second-tier rooftop watchroom silhouette
    this._addBox(-2.4, 5.9, -2.0, 5.6, 2.6, 4.8, false);
    this._addBox(-2.4, 7.35, -4.25, 5.6, 0.36, 0.32, false);

    // Windblown sand drifts in interior corners
    [
      { x: -0.2, y: 0.1, z: 5.1, sx: 2.0, sy: 0.28, sz: 2.3 },
      { x: -6.4, y: 0.12, z: -5.1, sx: 1.7, sy: 0.34, sz: 1.7 },
      { x: 6.3, y: 0.12, z: 5.0, sx: 1.5, sy: 0.30, sz: 1.6 },
    ].forEach((d) => {
      const dGeo = new THREE.ConeGeometry(1.0, 1.0, 8);
      dGeo.scale(d.sx, d.sy, d.sz);
      const dm = new THREE.Mesh(dGeo, this.sandDriftMat);
      dm.position.set(d.x, d.y, d.z);
      this.group.add(dm);
    });

    // Baked soft ground Contact AO perimeter shadow decal under the estate
    const shGeo = new THREE.PlaneGeometry(21.0, 18.0);
    shGeo.rotateX(-Math.PI / 2);
    const houseShadow = new THREE.Mesh(
      shGeo,
      new THREE.MeshBasicMaterial({
        map: this.tex.createContactShadowTexture(),
        transparent: true,
        depthWrite: false,
        opacity: 0.56,
        polygonOffset: true,
        polygonOffsetFactor: -2,
      })
    );
    houseShadow.position.set(0, 0.03, 0.4);
    this.group.add(houseShadow);
  }

  _buildCourtyardWalls() {
    this._addBox(-5.6, 0.95, 10.2, 6.8, 1.9, 0.48, true, this.adobeMat, true, true);
    this._addBox(5.6, 0.85, 10.2, 6.8, 1.7, 0.48, true, this.adobeMat, true, true);
    this._addBox(-2.25, 1.45, 10.2, 0.72, 2.9, 0.72, true, this.adobeMat, true, false);
    this._addBox(2.25, 1.35, 10.2, 0.72, 2.7, 0.72, true, this.adobeMat, true, false);
    this._addBox(0, 2.85, 10.2, 5.2, 0.22, 0.42, false, this.woodMat);
    this._addBox(-8.9, 0.85, 8.2, 0.46, 1.7, 4.2, true, this.adobeMat, true, true);
    this._addBox(8.9, 0.75, 8.2, 0.46, 1.5, 4.2, true, this.adobeMat, true, true);
  }

  _buildGrandAwning() {
    [
      [-6.6, 9.0],
      [-3.8, 9.0],
      [-1.5, 9.0],
      [1.6, 9.0],
    ].forEach(([px, pz]) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 2.85, 5), this.woodMat);
      post.position.set(px, 1.42, pz);
      this.group.add(post);
      this.physics.addCylinderCollider(this.centerX + px, this.centerZ + pz, 0.22, this.baseY + 3.0);
    });

    this._addBox(-2.5, 2.82, 9.0, 8.5, 0.16, 0.16, false, this.woodMat);
    for (let rx = -6.4; rx <= 1.6; rx += 1.3) {
      const rafter = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.11, 3.1), this.woodMat);
      rafter.position.set(rx, 3.08, 7.6);
      rafter.rotation.x = 0.18;
      this.group.add(rafter);
    }

    const clothGeo = new THREE.PlaneGeometry(8.2, 3.0, 8, 4);
    clothGeo.rotateX(-Math.PI / 2 + 0.18);
    const cp = clothGeo.attributes.position;
    for (let i = 0; i < cp.count; i++) {
      cp.setY(i, cp.getY(i) + Math.abs(Math.sin(cp.getX(i) * 1.1)) * -0.16);
    }
    clothGeo.computeVertexNormals();
    this.awningCloth = new THREE.Mesh(clothGeo, this.fabricMat);
    this.awningCloth.position.set(-2.5, 3.12, 7.55);
    this.group.add(this.awningCloth);
  }

  _buildWindVaneTower() {
    const tower = new THREE.Group();
    tower.position.set(3.8, 4.6, -2.4);
    const mastH = 7.4;
    [
      [-0.75, -0.75],
      [0.75, -0.75],
      [-0.75, 0.75],
      [0.75, 0.75],
    ].forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.07, mastH, 5), this.metalMat);
      leg.position.set(lx * 0.5, mastH * 0.5, lz * 0.5);
      leg.rotation.z = lx > 0 ? 0.095 : -0.095;
      leg.rotation.x = lz > 0 ? -0.095 : 0.095;
      tower.add(leg);
    });

    this.windVane = new THREE.Group();
    this.windVane.position.set(0, mastH + 0.2, 0);
    const armGeo = new THREE.BoxGeometry(2.1, 0.06, 0.06);
    armGeo.translate(0.45, 0, 0);
    const finGeo = new THREE.BoxGeometry(1.05, 0.72, 0.04);
    finGeo.translate(1.42, 0.05, 0);
    this.windVane.add(new THREE.Mesh(mergeGeometries([armGeo, finGeo], false), this.metalMat));
    armGeo.dispose();
    finGeo.dispose();

    const bladeGeos = [];
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const bGeo = new THREE.BoxGeometry(0.03, 1.0, 0.2);
      const m = new THREE.Matrix4();
      m.makeRotationFromEuler(new THREE.Euler(a, 0.32, 0));
      m.setPosition(0, Math.cos(a) * 0.62, Math.sin(a) * 0.62);
      bGeo.applyMatrix4(m);
      bladeGeos.push(bGeo);
    }
    this.windTurbine = new THREE.Mesh(mergeGeometries(bladeGeos, false), this.metalMat);
    bladeGeos.forEach((g) => g.dispose());
    this.windTurbine.position.set(-0.58, 0, 0);
    this.windVane.add(this.windTurbine);
    tower.add(this.windVane);
    this.group.add(tower);
  }

  _createGlowingLantern(x, y, z, intensity = 5.5, distance = 16) {
    const g = new THREE.Group();
    g.position.set(x, y, z);

    const mesh = this.models?.createMesh('lantern', 0.16);
    if (mesh) g.add(mesh);

    // Glowing flame core inside glass
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), this.lanternGlowMat);
    core.position.y = 0.24;
    g.add(core);

    const light = new THREE.PointLight(0xffa748, intensity, distance, 1.55);
    light.position.set(0, 0.34, 0);
    g.add(light);
    this.lanternLights.push({ light, baseIntensity: intensity, phase: Math.random() * 6.28 });

    this.group.add(g);
    return g;
  }

  _buildInteriorSanctuary() {
    // Main Hall Bedouin Sadu Rug
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 2.6), this.rugMat);
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0.1, 0.175, 1.4);
    rug.receiveShadow = true;
    this.group.add(rug);

    // Instanced weathered crates (NO Jug/Vase!)
    const crateGeo = this.models?.getGeometry('crate');
    const crateMat = this.models?.getMaterial('crate');
    if (crateGeo && crateMat) {
      const crateInst = new THREE.InstancedMesh(crateGeo, crateMat, 2);
      const d = new THREE.Object3D();
      d.position.set(1.35, 0.16, -4.65);
      d.rotation.set(0, 0.28, 0);
      d.scale.setScalar(1.32);
      d.updateMatrix();
      crateInst.setMatrixAt(0, d.matrix);

      d.position.set(-3.2, 0.02, 7.6);
      d.rotation.set(0, 0.1, 0);
      d.scale.setScalar(1.12);
      d.updateMatrix();
      crateInst.setMatrixAt(1, d.matrix);
      crateInst.instanceMatrix.needsUpdate = true;
      this.group.add(crateInst);
    }
    this.physics.addBoxCollider(
      this.centerX + 0.7,
      this.centerX + 2.0,
      this.centerZ - 5.1,
      this.centerZ - 4.2,
      this.baseY + 0.16,
      this.baseY + 0.88,
      true
    );

    // Low wooden sanctuary table in center-north of Main Hall holding the Guiding Night Lantern!
    const centerTable = this.models?.createMesh('table', 1.85);
    if (centerTable) {
      centerTable.position.set(0.1, 0.16, -2.0);
      this.group.add(centerTable);
    } else {
      this._addBox(0.1, 0.56, -2.0, 1.6, 0.8, 0.9, false, this.woodMat);
    }
    this.physics.addBoxCollider(
      this.centerX - 0.85,
      this.centerX + 1.05,
      this.centerZ - 2.5,
      this.centerZ - 1.5,
      this.baseY + 0.16,
      this.baseY + 0.96,
      true
    );

    // 1. Primary Sanctuary Lantern on central hall table (final interactive destination!)
    this._createGlowingLantern(0.1, 0.90, -2.0, 8.5, 19.0);
    this.sanctuaryInteractable = {
      id: 'sanctuary_lantern',
      label: 'تأمل المصباح المضيء',
      worldPos: new THREE.Vector3(this.centerX + 0.1, this.baseY + 1.18, this.centerZ - 2.0),
      radius: 4.0,
    };

    // 2. Warm welcoming Front Porch Lantern right beside the doorway — guides player across 200m of night dunes!
    this._createGlowingLantern(1.75, 2.38, 6.55, 10.5, 24.0);

    // Distant warm glow halo sprite above the porch lantern so the house glimmers like a star across the night dunes!
    const glowTex = this._createGlowSpriteTexture();
    const spriteMat = new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xffb352,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    });
    this.beaconSprite = new THREE.Sprite(spriteMat);
    this.beaconSprite.position.set(1.75, 2.65, 6.65);
    this.beaconSprite.scale.set(2.8, 2.8, 1);
    this.group.add(this.beaconSprite);

    // West Room: weathered desert table & chair + subtle warm lantern
    const deskMesh = this.models?.createMesh('table', 2.2);
    if (deskMesh) {
      deskMesh.position.set(-5.35, 0.16, -0.4);
      this.group.add(deskMesh);
    }
    this.physics.addBoxCollider(
      this.centerX - 6.45,
      this.centerX - 4.25,
      this.centerZ - 0.98,
      this.centerZ + 0.18,
      this.baseY + 0.16,
      this.baseY + 1.06,
      true
    );
    const chairMesh = this.models?.createMesh('chair', 0.58);
    if (chairMesh) {
      chairMesh.position.set(-4.65, 0.16, 0.78);
      chairMesh.rotation.y = -2.4;
      this.group.add(chairMesh);
    }
    this._createGlowingLantern(-5.65, 1.04, -0.45, 4.2, 12.0);

    // East Room: weathered wooden bench & shelves
    this._addBox(5.2, 0.6, -4.4, 2.4, 0.92, 1.05, true, this.woodMat, false, true);
    this._addBox(6.4, 1.3, 1.8, 0.85, 2.25, 1.9, true, this.metalMat, false, false);
  }

  _buildBackCourtyardAndWell() {
    const barrelGeo = this.models?.getGeometry('barrel');
    const barrelMat = this.models?.getMaterial('barrel') || this.metalMat;
    const drumCoords = [
      [8.3, 2.2, 0.72],
      [8.6, 1.15, 0.72],
      [-8.3, 4.4, 0.72],
      [5.8, -7.8, 0.72],
    ];
    if (barrelGeo) {
      const bInst = new THREE.InstancedMesh(barrelGeo, barrelMat, drumCoords.length);
      const dummy = new THREE.Object3D();
      drumCoords.forEach(([dx, dz, sc], idx) => {
        const gy = this.getHeight(this.centerX + dx, this.centerZ + dz) - this.baseY;
        dummy.position.set(dx, gy, dz);
        dummy.rotation.set(0, idx * 1.1, 0);
        dummy.scale.setScalar(sc);
        dummy.updateMatrix();
        bInst.setMatrixAt(idx, dummy.matrix);
        this.physics.addCylinderCollider(this.centerX + dx, this.centerZ + dz, 0.42, this.baseY + gy + 1.15);
      });
      bInst.instanceMatrix.needsUpdate = true;
      this.group.add(bInst);
    }

    // Old desert stone well in back courtyard
    const wellX = -6.8;
    const wellZ = -10.4;
    const wellY = this.getHeight(this.centerX + wellX, this.centerZ + wellZ) - this.baseY;
    const wellGroup = new THREE.Group();
    wellGroup.position.set(wellX, wellY, wellZ);
    const wellRing = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.42, 1.05, 10, 1, true), this.stoneMat);
    wellRing.position.y = 0.5;
    const wellDark = new THREE.Mesh(new THREE.CircleGeometry(1.22, 10), new THREE.MeshBasicMaterial({ color: 0x050406 }));
    wellDark.rotation.x = -Math.PI / 2;
    wellDark.position.y = 0.42;
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.3, 0.14), this.woodMat);
    p1.position.set(-1.26, 1.15, 0);
    const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.85, 0.14), this.woodMat);
    p2.position.set(1.26, 0.92, 0);
    p2.rotation.z = -0.15;
    const cross = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.7, 5), this.woodMat);
    cross.rotation.z = Math.PI / 2 - 0.12;
    cross.position.set(0, 2.02, 0);
    wellGroup.add(wellRing, wellDark, p1, p2, cross);
    this.group.add(wellGroup);
    this.physics.addCylinderCollider(this.centerX + wellX, this.centerZ + wellZ, 1.5, this.baseY + wellY + 1.8);
  }

  _createGlowSpriteTexture() {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(size / 2, size / 2, 1, size / 2, size / 2, size / 2);
    grad.addColorStop(0.0, 'rgba(255, 246, 215, 1.0)');
    grad.addColorStop(0.22, 'rgba(255, 186, 86, 0.72)');
    grad.addColorStop(0.58, 'rgba(235, 128, 38, 0.22)');
    grad.addColorStop(1.0, 'rgba(200, 90, 20, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  _optimizeStaticBatches() {
    const batchableMats = new Set([this.adobeMat, this.woodMat, this.metalMat, this.stoneMat, this.sandDriftMat]);
    const dynamicSet = new Set([this.awningCloth, this.windVane, this.windTurbine]);
    const isDynamic = (obj) => {
      let cur = obj;
      while (cur && cur !== this.group) {
        if (dynamicSet.has(cur)) return true;
        cur = cur.parent;
      }
      return false;
    };

    this.group.updateMatrixWorld(true);
    const invGroup = new THREE.Matrix4().copy(this.group.matrixWorld).invert();
    const buckets = new Map();
    const toRemove = [];

    this.group.traverse((child) => {
      if (!child.isMesh || child.isInstancedMesh || !batchableMats.has(child.material) || isDynamic(child)) return;
      const src = child.geometry.index ? child.geometry.toNonIndexed() : child.geometry.clone();
      const relMat = new THREE.Matrix4().multiplyMatrices(invGroup, child.matrixWorld);
      src.applyMatrix4(relMat);

      const clean = new THREE.BufferGeometry();
      clean.setAttribute('position', src.attributes.position.clone());
      if (src.attributes.normal) clean.setAttribute('normal', src.attributes.normal.clone());
      if (src.attributes.uv) clean.setAttribute('uv', src.attributes.uv.clone());
      if (child.material.vertexColors) {
        if (src.attributes.color) {
          clean.setAttribute('color', src.attributes.color.clone());
        } else {
          clean.setAttribute('color', new THREE.BufferAttribute(new Float32Array(src.attributes.position.count * 3).fill(1.0), 3));
        }
      }
      src.dispose();

      if (!buckets.has(child.material)) buckets.set(child.material, []);
      buckets.get(child.material).push(clean);
      toRemove.push(child);
    });

    for (const [mat, geos] of buckets.entries()) {
      if (geos.length < 2) {
        geos.forEach((g) => g.dispose());
        continue;
      }
      const merged = mergeGeometries(geos, false);
      geos.forEach((g) => g.dispose());
      if (merged) {
        const mesh = new THREE.Mesh(merged, mat);
        mesh.castShadow = mat === this.adobeMat || mat === this.woodMat;
        mesh.receiveShadow = true;
        this.group.add(mesh);
      }
    }

    for (const m of toRemove) {
      const bucket = buckets.get(m.material);
      if (bucket && bucket.length >= 2 && m.parent) {
        m.parent.remove(m);
        m.geometry.dispose();
      }
    }
  }

  getSanctuaryInteractable() {
    return this.sanctuaryInteractable;
  }

  update(dt, elapsed, playerPos) {
    this.awningTimeUniform.value = elapsed;
    if (this.windTurbine) {
      this.windTurbine.rotation.x += dt * (1.2 + Math.sin(elapsed * 0.5) * 0.35);
    }
    if (this.windVane) {
      this.windVane.rotation.y = 0.35 + Math.sin(elapsed * 0.32) * 0.18;
    }

    // Gentle organic oil-lantern flicker
    for (let i = 0; i < this.lanternLights.length; i++) {
      const l = this.lanternLights[i];
      const flick = 0.90 + 0.08 * Math.sin(elapsed * 6.8 + l.phase) + 0.04 * Math.sin(elapsed * 15.2 + l.phase * 2.1);
      l.light.intensity = l.baseIntensity * flick;
    }

    // Scale beacon halo gently with distance so it glimmers clearly from 200m away yet shrinks naturally up close
    if (this.beaconSprite && playerPos) {
      const dist = Math.hypot(playerPos.x - (this.centerX + 1.75), playerPos.z - (this.centerZ + 6.65));
      const scale = THREE.MathUtils.clamp(0.9 + dist * 0.042, 0.9, 8.5);
      const flick = 0.92 + 0.08 * Math.sin(elapsed * 5.2);
      this.beaconSprite.scale.set(scale * flick, scale * flick, 1);
    }
  }

  dispose(sharedGeos, sharedMats) {
    if (this.beaconSprite?.material?.map) {
      this.beaconSprite.material.map.dispose();
    }
    disposeHierarchy(this.group, sharedGeos, sharedMats);
    this.parentGroup.remove(this.group);
    this.lanternLights.length = 0;
  }
}
