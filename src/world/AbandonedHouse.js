import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { HOUSE_CENTER_X, HOUSE_CENTER_Z, HOUSE_BASE_Y, getTerrainHeight } from './TerrainMath.js';
import { DESERT_PALETTE, attachDesertGrading } from '../engine/Palette.js';
import { IS_MOBILE } from '../engine/Settings.js';

/**
 * Thermal-Optimized Grand Abandoned Desert Estate ("محطة الرصد المنسية - القطاع ٧") (v4.1):
 * - Uses MeshLambertMaterial (with normalMap!) for matte plaster, rug, fabric, paper, and mobile adobe/stone -> 3x lower GPU heat!
 * - Zero per-frame Color allocations
 */
export class AbandonedHouse {
  constructor(scene, textureManager, modelManager, physics, jeepWorldPos, tentBarrelWorldPos = null) {
    this.scene = scene;
    this.tex = textureManager;
    this.models = modelManager;
    this.physics = physics;
    this.jeepWorldPos = jeepWorldPos;
    this.tentBarrelWorldPos = tentBarrelWorldPos;

    this.group = new THREE.Group();
    this.group.position.set(HOUSE_CENTER_X, HOUSE_BASE_Y, HOUSE_CENTER_Z);
    this.scene.add(this.group);

    this.interactables = [];
    this.activeMissionId = null;

    this.windTurbine = null;
    this.windVane = null;
    this.awningTimeUniform = { value: 0 };
    this.awningStormUniform = { value: 0 };
    this.stormIntensity = 0;
    this.radioGlowMat = null;
    this.radioLight = null;
    this.hatchMesh = null;
    this.hatchTargetAngle = 0;
    this.switchLever = null;
    this.switchTargetAngle = 0.6;
    this.compassNeedle = null;
    this.godRayMat = null;
    this._rayNoonCol = new THREE.Color('#fff0c4');
    this._rayAsrCol = new THREE.Color('#ffae52');

    this._createMaterials();
    this._buildMainEstate();
    this._buildCourtyardWalls();
    this._buildGrandAwning();
    this._buildWindVaneTower();
    this._buildInteriorRooms();
    this._buildBackCourtyardAndWell();
    this._buildStoryClues();
    this._optimizeStaticBatches();
  }

  _createMaterials() {
    const adobe = this.tex.loadPBRSet('adobe_wall', 1.0, 1.0);
    this.adobeMat = IS_MOBILE
      ? new THREE.MeshLambertMaterial({
          map: adobe.map,
          normalMap: adobe.normalMap,
          normalScale: new THREE.Vector2(0.45, 0.45),
          vertexColors: true,
          color: 0xf2e2c8,
        })
      : new THREE.MeshStandardMaterial({
          map: adobe.map,
          normalMap: adobe.normalMap,
          normalScale: new THREE.Vector2(0.45, 0.45),
          roughness: 0.94,
          metalness: 0.01,
          vertexColors: true,
          color: 0xf2e2c8,
        });
    this.adobeMat.name = 'adobe_wall_v4';

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
           diffuseColor.rgb = mix(vec3(_al), diffuseColor.rgb, 0.62) * 1.38 + vec3(0.035, 0.028, 0.018);
           float patch1 = sin(vAdobeWorldPos.x * 0.55 + vAdobeWorldPos.y * 0.8) * cos(vAdobeWorldPos.z * 0.55 - vAdobeWorldPos.y * 0.6);
           float groundDust = smoothstep(0.95, 0.02, vAdobeWorldPos.y);
           vec3 plasterVariation = mix(vec3(0.92, 0.89, 0.84), vec3(1.04, 1.01, 0.96), patch1 * 0.5 + 0.5);
           diffuseColor.rgb *= plasterVariation;
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.42, 0.32, 0.19), groundDust * 0.34);`
        );
    };
    attachDesertGrading(this.adobeMat, { saturation: 0.86, contrast: 1.02 });

    // Matte warm lime-plaster interior ceiling uses cheap MeshLambertMaterial!
    this.ceilingMat = new THREE.MeshLambertMaterial({
      color: DESERT_PALETTE.ceilingPlaster,
    });
    this.ceilingMat.name = 'interior_plaster_ceiling';
    this.ceilingMat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vCeilPos;`)
        .replace(
          '#include <worldpos_vertex>',
          `#include <worldpos_vertex>\nvCeilPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`
        );
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nvarying vec3 vCeilPos;`)
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
           float mottle = sin(vCeilPos.x * 0.9 + vCeilPos.z * 0.7) * cos(vCeilPos.x * 0.4 - vCeilPos.z * 1.1);
           diffuseColor.rgb *= mix(0.91, 1.03, mottle * 0.5 + 0.5);`
        );
    };

    const wood = this.tex.loadPBRSet('desert_wood', 1.6, 1.0);
    this.woodMat = IS_MOBILE
      ? new THREE.MeshLambertMaterial({ map: wood.map, color: 0xc2ab8e })
      : new THREE.MeshStandardMaterial({
          map: wood.map,
          normalMap: wood.normalMap,
          normalScale: new THREE.Vector2(0.85, 0.85),
          roughness: 0.88,
          metalness: 0.03,
          color: 0xc2ab8e,
        });

    const metal = this.tex.loadPBRSet('rusted_metal', 1.5, 1.5);
    this.metalMat = new THREE.MeshStandardMaterial({
      map: metal.map,
      normalMap: IS_MOBILE ? null : metal.normalMap,
      normalScale: new THREE.Vector2(0.9, 0.9),
      roughness: 0.76,
      metalness: 0.45,
      color: 0xa69480,
    });

    const floor = this.tex.loadPBRSet('floor_tiles', 4.8, 4.0);
    this.floorMat = IS_MOBILE
      ? new THREE.MeshLambertMaterial({
          map: floor.map,
          normalMap: floor.normalMap,
          normalScale: new THREE.Vector2(0.8, 0.8),
          vertexColors: true,
          color: 0xc9b89c,
        })
      : new THREE.MeshStandardMaterial({
          map: floor.map,
          normalMap: floor.normalMap,
          normalScale: new THREE.Vector2(0.85, 0.85),
          roughness: 0.9,
          metalness: 0.02,
          vertexColors: true,
          color: 0xc9b89c,
        });
    attachDesertGrading(this.floorMat, { saturation: 0.88, contrast: 1.03 });

    this.hatchFrameMat = new THREE.MeshLambertMaterial({
      map: floor.map,
      color: 0x7b6b56,
    });

    const fabric = this.tex.loadPBRSet('tattered_fabric', 2.4, 2.0);
    this.fabricMat = new THREE.MeshLambertMaterial({
      map: fabric.map,
      side: THREE.DoubleSide,
      color: 0xd2c0a4,
    });
    this.fabricMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.awningTimeUniform;
      shader.uniforms.uStorm = this.awningStormUniform;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nuniform float uTime;\nuniform float uStorm;`)
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
           float spd = 3.5 + uStorm * 7.5;
           float amp = 0.042 + uStorm * 0.12;
           transformed.y += sin(uTime * spd + position.x * 1.8 + position.z * 1.5) * amp;`
        );
    };

    // Procedural traditional Bedouin Sadu woven rug shader on cheap MeshLambertMaterial!
    this.rugMat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
    });
    this.rugMat.name = 'bedouin_sadu_rug';
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

           vec3 colCrimson = vec3(0.28, 0.055, 0.032);
           vec3 colCream   = vec3(0.56, 0.47, 0.34);
           vec3 colOchre   = vec3(0.44, 0.25, 0.075);
           vec3 colCharcoal= vec3(0.055, 0.048, 0.044);

           vec3 col = colCrimson;
           float outerBorder = step(0.84, max(c.x, c.y));
           float innerBorder = step(0.74, max(c.x, c.y)) * (1.0 - outerBorder);
           col = mix(col, colCharcoal, outerBorder * 0.85);
           col = mix(col, colCream, innerBorder);

           vec2 tile = fract(vec2(p.x * 5.0, p.y * 3.0)) - 0.5;
           float diamond = abs(tile.x) + abs(tile.y);
           float innerMedallion = (1.0 - step(0.74, max(c.x, c.y)));
           if (innerMedallion > 0.5) {
             float dOuter = smoothstep(0.42, 0.38, diamond);
             float dMid   = smoothstep(0.29, 0.25, diamond);
             float dCore  = smoothstep(0.14, 0.10, diamond);
             col = mix(col, colCream, dOuter);
             col = mix(col, colOchre, dMid);
             col = mix(col, colCharcoal, dCore);
           }

           float chev = step(0.5, fract((p.x + p.y) * 18.0));
           col = mix(col, colOchre, innerBorder * chev * 0.55);

           float dustWear = sin(p.x * 7.0 + p.y * 5.0) * 0.5 + 0.5;
           col = mix(col, vec3(0.38, 0.30, 0.19), dustWear * 0.28);
           diffuseColor.rgb = col * weave;`
        );
    };

    const rock = this.tex.loadPBRSet('sandstone_rock', 2.0, 2.0);
    this.stoneMat = new THREE.MeshLambertMaterial({
      map: rock.map,
      color: 0xbba486,
    });

    const sandPbr = this.tex.loadPBRSet('sand', 2.0, 2.0);
    this.sandDriftMat = new THREE.MeshLambertMaterial({
      map: sandPbr.map,
      color: DESERT_PALETTE.sandTintNoon,
    });

    this.darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x3b3129,
      roughness: 0.68,
      metalness: 0.65,
    });

    this.brassMat = new THREE.MeshStandardMaterial({
      color: 0xc59b48,
      roughness: 0.38,
      metalness: 0.8,
    });

    this.paperMat = new THREE.MeshLambertMaterial({
      color: 0xe2d0a8,
      side: THREE.DoubleSide,
    });
  }

  _createBakedBox(w, h, d, bottomAO = 0.74, topAO = 0.99) {
    const geo = new THREE.BoxGeometry(w, h, d, 1, 1, 1);
    const pos = geo.attributes.position;
    const norm = geo.attributes.normal;
    const uv = geo.attributes.uv;
    const cols = new Float32Array(pos.count * 3);
    // Authentic 1.45m plaster/brick UV scale (fixes the giant 2.8m oversized brick look!)
    const tile = 1.45;

    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i);
      const py = pos.getY(i);
      const pz = pos.getZ(i);
      const nx = Math.abs(norm.getX(i));
      const nyAbs = Math.abs(norm.getY(i));

      if (nyAbs > 0.5) {
        uv.setXY(i, (px + w * 0.5) / tile, (pz + d * 0.5) / tile);
      } else if (nx > 0.5) {
        uv.setXY(i, (pz + d * 0.5) / tile, (py + h * 0.5) / tile);
      } else {
        uv.setXY(i, (px + w * 0.5) / tile, (py + h * 0.5) / tile);
      }

      const ny = THREE.MathUtils.clamp((py + h * 0.5) / Math.max(0.001, h), 0.0, 1.0);
      const ao = THREE.MathUtils.lerp(bottomAO, topAO, Math.pow(ny, 0.55));
      cols[i * 3] = ao;
      cols[i * 3 + 1] = ao * 0.985;
      cols[i * 3 + 2] = ao * 0.965;
    }

    uv.needsUpdate = true;
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    return geo;
  }

  _addBox(x, y, z, w, h, d, addCollider = true, mat = this.adobeMat, castShadow = true, forceClimbable = null) {
    const geo = mat === this.adobeMat ? this._createBakedBox(w, h, d) : new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    this.group.add(mesh);

    if (addCollider) {
      const wx = HOUSE_CENTER_X + x;
      const wz = HOUSE_CENTER_Z + z;
      this.physics.addBoxCollider(
        wx - w * 0.5,
        wx + w * 0.5,
        wz - d * 0.5,
        wz + d * 0.5,
        y - h * 0.5,
        y + h * 0.5,
        forceClimbable
      );
    }
    return mesh;
  }

  _buildMainEstate() {
    const H = 4.35;
    const t = 0.56;

    // Spacious interior stone floor slab (y top = 0.16)
    const floorGeo = new THREE.BoxGeometry(14.8, 0.24, 12.2, 4, 1, 4);
    const fp = floorGeo.attributes.position;
    const fc = new Float32Array(fp.count * 3);
    for (let i = 0; i < fp.count; i++) {
      const edge = Math.max(Math.abs(fp.getX(i)) / 7.4, Math.abs(fp.getZ(i)) / 6.1);
      const ao = 1.0 - edge * 0.26;
      fc[i * 3] = ao;
      fc[i * 3 + 1] = ao * 0.98;
      fc[i * 3 + 2] = ao * 0.95;
    }
    floorGeo.setAttribute('color', new THREE.BufferAttribute(fc, 3));
    const floorMesh = new THREE.Mesh(floorGeo, this.floorMat);
    floorMesh.position.set(0, 0.04, 0);
    floorMesh.receiveShadow = true;
    this.group.add(floorMesh);

    this.physics.addFloorZone(
      HOUSE_CENTER_X - 7.3,
      HOUSE_CENTER_X + 7.3,
      HOUSE_CENTER_Z - 6.0,
      HOUSE_CENTER_Z + 6.4,
      0.16,
      'stone'
    );
    this.physics.addInteriorZone(
      HOUSE_CENTER_X - 7.1,
      HOUSE_CENTER_X + 7.1,
      HOUSE_CENTER_Z - 5.9,
      HOUSE_CENTER_Z + 5.9,
      -0.5,
      4.6
    );

    const step = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.18, 1.6), this.stoneMat);
    step.position.set(0, 0.05, 6.85);
    step.receiveShadow = true;
    this.group.add(step);

    // ---- FRONT WALL (+Z = +6.1) with grand 2.4m wide doorway (x: -1.2..1.2) + 2 shuttered windows + architectural pilasters ----
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

    // Doorway lintel, heavy wooden doorframe, and half-broken wooden door leaf swung inward!
    this._addBox(0, 3.68, 6.1, 2.5, 1.35, t, false);
    this._addBox(0, 2.98, 6.1, 2.75, 0.18, 0.66, false, this.woodMat);
    this._addBox(-1.22, 1.48, 6.1, 0.14, 2.96, 0.6, false, this.woodMat);
    this._addBox(1.22, 1.48, 6.1, 0.14, 2.96, 0.6, false, this.woodMat);
    const openDoor = new THREE.Mesh(new THREE.BoxGeometry(1.05, 2.75, 0.08), this.woodMat);
    openDoor.position.set(-1.12, 1.52, 5.45);
    openDoor.rotation.y = 1.18;
    this.group.add(openDoor);

    // Exterior battered corner buttresses / pilasters (gives authentic Najdi/Arabian mudbrick fortress silhouette!)
    this._addBox(-7.45, H * 0.48, 6.15, 0.78, H * 0.96, 0.78, false);
    this._addBox(7.45, H * 0.48, 6.15, 0.78, H * 0.96, 0.78, false);
    this._addBox(-7.45, H * 0.48, -6.15, 0.78, H * 0.96, 0.78, false);
    this._addBox(7.45, H * 0.48, -6.15, 0.78, H * 0.96, 0.78, false);

    // ---- BACK WALL (-Z = -6.1) with BACK COURTYARD EXIT DOORWAY (x: -1.1..+1.1) ----
    this._addBox(-4.35, H / 2, -6.1, 6.5, H, t, true, this.adobeMat, true, false);
    this._addBox(4.35, H / 2, -6.1, 6.5, H, t, true, this.adobeMat, true, false);
    this._addBox(0, 3.65, -6.1, 2.3, 1.4, t, false);
    this._addBox(0, 2.92, -6.1, 2.5, 0.16, 0.64, false, this.woodMat);

    // ---- WEST WALL (-X = -7.35) with large sunlit study window ----
    this._addBox(-7.35, H / 2, 3.85, t, H, 4.9, true, this.adobeMat, true, false);
    this._addBox(-7.35, H / 2, -3.85, t, H, 4.9, true, this.adobeMat, true, false);
    this._addBox(-7.35, 0.65, 0, t, 1.3, 2.8, true, this.adobeMat, true, false);
    this._addBox(-7.35, 3.55, 0, t, 1.6, 2.8, false);
    this._addBox(-7.35, 1.32, 0, 0.66, 0.12, 2.9, false, this.woodMat);
    this._addBox(-7.35, 2.75, 0, 0.66, 0.12, 2.9, false, this.woodMat);

    // ---- EAST WALL (+X = +7.35) with high ventilation window ----
    this._addBox(7.35, H / 2, 3.6, t, H, 5.4, true, this.adobeMat, true, false);
    this._addBox(7.35, H / 2, -3.6, t, H, 5.4, true, this.adobeMat, true, false);
    this._addBox(7.35, 0.9, 0, t, 1.8, 1.8, true, this.adobeMat, true, false);
    this._addBox(7.35, 3.65, 0, t, 1.4, 1.8, false);

    // ---- INTERIOR ROOM DIVIDER WALLS (3 spacious rooms + wooden door headers) ----
    this._addBox(-2.3, H / 2, -2.5, 0.42, H, 7.0, true, this.adobeMat, true, false);
    this._addBox(-2.3, H / 2, 4.75, 0.42, H, 2.6, true, this.adobeMat, true, false);
    this._addBox(-2.3, 3.65, 2.2, 0.42, 1.4, 2.6, false);
    this._addBox(-2.3, 2.92, 2.2, 0.5, 0.14, 2.5, false, this.woodMat);

    this._addBox(2.6, H / 2, -2.5, 0.42, H, 7.0, true, this.adobeMat, true, false);
    this._addBox(2.6, H / 2, 4.75, 0.42, H, 2.6, true, this.adobeMat, true, false);
    this._addBox(2.6, 3.65, 2.2, 0.42, 1.4, 2.6, false);
    this._addBox(2.6, 2.92, 2.2, 0.5, 0.14, 2.5, false, this.woodMat);

    // ---- ROOF SLAB, PLASTER CEILING, CRUMBLING STEPPED PARAPETS & TIMBER BEAMS ----
    this._addBox(0, 4.46, 0, 15.2, 0.3, 12.6, false);
    // Dedicated pale warm lime-plaster interior ceiling panel (distinct from mudbrick walls!)
    const ceilingPanel = new THREE.Mesh(new THREE.PlaneGeometry(14.6, 12.0), this.ceilingMat);
    ceilingPanel.rotation.x = Math.PI / 2;
    ceilingPanel.position.set(0, 4.29, 0);
    ceilingPanel.receiveShadow = true;
    this.group.add(ceilingPanel);

    // Crumbling uneven parapet segments (not a single flat block!)
    this._addBox(-4.2, 4.88, 6.1, 6.4, 0.56, 0.38, false);
    this._addBox(4.4, 4.82, 6.1, 6.0, 0.46, 0.38, false);
    this._addBox(-7.4, 4.88, 0, 0.38, 0.56, 12.6, false);
    this._addBox(7.4, 4.82, -1.2, 0.38, 0.44, 10.0, false);
    this._addBox(0, 4.92, -6.1, 15.2, 0.62, 0.38, false);

    // Protruding desert roof log beams inside hall
    const beamGeo = new THREE.CylinderGeometry(0.11, 0.12, 16.4, 5);
    beamGeo.rotateZ(Math.PI / 2);
    for (let z = -4.8; z <= 4.8; z += 1.9) {
      const beam = new THREE.Mesh(beamGeo, this.woodMat);
      beam.position.set(0, 4.16, z);
      beam.castShadow = false;
      this.group.add(beam);
    }

    // ---- GRAND SECOND-TIER ROOFTOP WATCHROOM ----
    this._addBox(-2.4, 5.9, -2.0, 5.6, 2.6, 4.8, false);
    this._addBox(-2.4, 7.35, -4.25, 5.6, 0.36, 0.32, false);
    this._addBox(-2.4, 5.65, 0.45, 1.25, 1.8, 0.16, false, this.darkMetalMat, false);

    // Exterior Wooden Ladder leaning against East wall up to the roof
    const ladder = new THREE.Group();
    ladder.position.set(7.72, 0, 2.6);
    ladder.rotation.z = 0.14;
    const railL = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 4.6, 5), this.woodMat);
    railL.position.set(0, 2.3, -0.28);
    const railR = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 4.6, 5), this.woodMat);
    railR.position.set(0, 2.3, 0.28);
    ladder.add(railL, railR);
    for (let ry = 0.45; ry <= 4.2; ry += 0.45) {
      const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.58, 5), this.woodMat);
      rung.rotation.x = Math.PI / 2;
      rung.position.set(0, ry, 0);
      ladder.add(rung);
    }
    this.group.add(ladder);

    // Windblown desert sand drifts piled naturally in interior corners
    const driftPositions = [
      { x: -0.2, y: 0.1, z: 5.1, sx: 2.2, sy: 0.32, sz: 2.6 },
      { x: -6.4, y: 0.12, z: -5.1, sx: 1.8, sy: 0.38, sz: 1.8 },
      { x: 6.3, y: 0.12, z: 5.0, sx: 1.6, sy: 0.34, sz: 1.7 },
      { x: -1.6, y: 0.12, z: -5.3, sx: 1.5, sy: 0.28, sz: 1.4 },
    ];
    driftPositions.forEach((d) => {
      const dGeo = new THREE.ConeGeometry(1.0, 1.0, 8);
      dGeo.scale(d.sx, d.sy, d.sz);
      const dm = new THREE.Mesh(dGeo, this.sandDriftMat);
      dm.position.set(d.x, d.y, d.z);
      dm.receiveShadow = true;
      this.group.add(dm);
    });

    // Baked soft ground shadow decal under estate (subtle opacity)
    const shGeo = new THREE.PlaneGeometry(19.5, 16.8);
    shGeo.rotateX(-Math.PI / 2);
    const houseShadow = new THREE.Mesh(
      shGeo,
      new THREE.MeshBasicMaterial({
        map: this.tex.createContactShadowTexture(),
        transparent: true,
        depthWrite: false,
        opacity: 0.38,
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
    const postCoords = [
      [-6.6, 9.0],
      [-3.8, 9.0],
      [-1.5, 9.0],
      [1.6, 9.0],
    ];
    postCoords.forEach(([px, pz]) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 2.85, 5), this.woodMat);
      post.position.set(px, 1.42, pz);
      post.castShadow = true;
      this.group.add(post);
      this.physics.addCylinderCollider(HOUSE_CENTER_X + px, HOUSE_CENTER_Z + pz, 0.22, 3.0);
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
      const sag = Math.abs(Math.sin(cp.getX(i) * 1.1)) * -0.16;
      cp.setY(i, cp.getY(i) + sag);
    }
    clothGeo.computeVertexNormals();

    this.awningCloth = new THREE.Mesh(clothGeo, this.fabricMat);
    this.awningCloth.position.set(-2.5, 3.12, 7.55);
    this.awningCloth.castShadow = true;
    this.group.add(this.awningCloth);
  }

  _buildWindVaneTower() {
    const tower = new THREE.Group();
    tower.position.set(3.8, 4.6, -2.4);

    const mastH = 7.4;
    const legs = [
      [-0.75, -0.75],
      [0.75, -0.75],
      [-0.75, 0.75],
      [0.75, 0.75],
    ];
    legs.forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.07, mastH, 5), this.metalMat);
      leg.position.set(lx * 0.5, mastH * 0.5, lz * 0.5);
      leg.rotation.z = lx > 0 ? 0.095 : -0.095;
      leg.rotation.x = lz > 0 ? -0.095 : 0.095;
      leg.castShadow = true;
      tower.add(leg);
    });

    for (let h = 1.2; h < mastH - 0.8; h += 1.6) {
      const w = 1.48 * (1.0 - (h / mastH) * 0.72);
      const b1 = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, 0.05), this.darkMetalMat);
      b1.position.set(0, h, w * 0.5);
      const b2 = b1.clone();
      b2.position.set(0, h, -w * 0.5);
      const b3 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, w), this.darkMetalMat);
      b3.position.set(w * 0.5, h, 0);
      const b4 = b3.clone();
      b4.position.set(-w * 0.5, h, 0);
      tower.add(b1, b2, b3, b4);
    }

    // Batch tailArm + tailFin into 1 mesh & blades into 1 mesh (2 draw calls total!)
    this.windVane = new THREE.Group();
    this.windVane.position.set(0, mastH + 0.2, 0);
    const armGeo = new THREE.BoxGeometry(2.1, 0.06, 0.06);
    armGeo.translate(0.45, 0, 0);
    const finGeo = new THREE.BoxGeometry(1.05, 0.72, 0.04);
    finGeo.translate(1.42, 0.05, 0);
    const tailMesh = new THREE.Mesh(mergeGeometries([armGeo, finGeo], false), this.metalMat);
    armGeo.dispose();
    finGeo.dispose();
    this.windVane.add(tailMesh);

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
    const mergedBlades = mergeGeometries(bladeGeos, false);
    bladeGeos.forEach((g) => g.dispose());
    this.windTurbine = new THREE.Mesh(mergedBlades, this.metalMat);
    this.windTurbine.position.set(-0.58, 0, 0);

    this.windVane.add(this.windTurbine);
    tower.add(this.windVane);
    this.group.add(tower);
  }

  _buildInteriorRooms() {
    // ===== ROOM 1: MAIN HALL (Bedouin Sadu Rug + Unified Stone Cellar Hatch + Instanced Crates & Jug) =====
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.4), this.rugMat);
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0.1, 0.175, 2.1);
    rug.receiveShadow = true;
    this.group.add(rug);

    // Stone & iron cellar hatch surround (darkened floor-matched stone, NOT bright orange!)
    const cellarPit = new THREE.Mesh(
      new THREE.BoxGeometry(1.68, 0.12, 1.68),
      new THREE.MeshBasicMaterial({ color: 0x0b0704 })
    );
    cellarPit.position.set(0.0, 0.13, -1.6);
    this.group.add(cellarPit);

    this._addBox(-0.94, 0.2, -1.6, 0.18, 0.09, 2.06, false, this.hatchFrameMat, false);
    this._addBox(0.94, 0.2, -1.6, 0.18, 0.09, 2.06, false, this.hatchFrameMat, false);
    this._addBox(0.0, 0.2, -2.54, 1.7, 0.09, 0.18, false, this.hatchFrameMat, false);
    this._addBox(0.0, 0.2, -0.66, 1.7, 0.09, 0.18, false, this.hatchFrameMat, false);

    // Pivot hinged hatch door with batched iron straps (3 draw calls instead of 5!)
    this.hatchMesh = new THREE.Group();
    this.hatchMesh.position.set(0.0, 0.24, -2.45);
    const hatchPlanks = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.08, 1.72), this.woodMat);
    hatchPlanks.position.set(0, 0, 0.85);
    hatchPlanks.receiveShadow = true;
    const s1 = new THREE.BoxGeometry(1.76, 0.1, 0.14);
    s1.translate(0, 0.01, 0.35);
    const s2 = new THREE.BoxGeometry(1.76, 0.1, 0.14);
    s2.translate(0, 0.01, 1.35);
    const s3 = new THREE.BoxGeometry(0.14, 0.1, 1.76);
    s3.translate(0, 0.01, 0.85);
    const strapsMesh = new THREE.Mesh(mergeGeometries([s1, s2, s3], false), this.metalMat);
    s1.dispose();
    s2.dispose();
    s3.dispose();
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.028, 6, 12), this.brassMat);
    handle.rotation.x = Math.PI / 2;
    handle.position.set(0, 0.07, 1.48);
    this.hatchMesh.add(hatchPlanks, strapsMesh, handle);
    this.group.add(this.hatchMesh);

    // Batch Hall Crate + Porch Crate into ONE single InstancedMesh (saves 1 draw call!)
    const crateGeo = this.models?.getGeometry('crate');
    const crateMat = this.models?.getMaterial('crate');
    if (crateGeo && crateMat) {
      const crateInst = new THREE.InstancedMesh(crateGeo, crateMat, 2);
      crateInst.receiveShadow = true;
      const d = new THREE.Object3D();
      // Instance 0: Main Hall supply crate
      d.position.set(1.45, 0.16, -4.85);
      d.rotation.set(0, 0.28, 0);
      d.scale.setScalar(1.35);
      d.updateMatrix();
      crateInst.setMatrixAt(0, d.matrix);
      // Instance 1: Front Porch supply crate (Mission 3!)
      d.position.set(-3.2, 0.02, 7.6);
      d.rotation.set(0, 0, 0);
      d.scale.setScalar(1.15);
      d.updateMatrix();
      crateInst.setMatrixAt(1, d.matrix);
      crateInst.instanceMatrix.needsUpdate = true;
      this.group.add(crateInst);
    } else {
      this._addBox(1.45, 0.52, -4.85, 1.1, 0.75, 0.75, false, this.woodMat);
      this._addBox(-3.2, 0.26, 7.6, 0.85, 0.5, 0.72, false, this.woodMat);
    }
    this.physics.addBoxCollider(
      HOUSE_CENTER_X + 0.8,
      HOUSE_CENTER_X + 2.1,
      HOUSE_CENTER_Z - 5.3,
      HOUSE_CENTER_Z - 4.4,
      0.16,
      0.88,
      true
    );

    const jugMesh = this.models?.createMesh('jug', 0.55);
    if (jugMesh) {
      jugMesh.position.set(1.35, 0.73, -4.82);
      jugMesh.castShadow = false;
      this.group.add(jugMesh);
    }

    // ===== ROOM 2: NADER'S RESEARCH STUDY (West Room: x < -2.3) =====
    // Weathered desert wood re-tinted photogrammetry desk, chair & vintage oil lamp!
    const deskMesh = this.models?.createMesh('table', 2.25);
    if (deskMesh) {
      deskMesh.position.set(-5.35, 0.16, -0.4);
      deskMesh.castShadow = false;
      deskMesh.receiveShadow = true;
      this.group.add(deskMesh);
    } else {
      this._addBox(-5.35, 0.96, -0.4, 2.1, 0.1, 1.05, false, this.woodMat);
    }
    this.physics.addBoxCollider(
      HOUSE_CENTER_X - 6.45,
      HOUSE_CENTER_X - 4.25,
      HOUSE_CENTER_Z - 0.98,
      HOUSE_CENTER_Z + 0.18,
      0.16,
      1.08,
      true
    );

    const chairMesh = this.models?.createMesh('chair', 0.58);
    if (chairMesh) {
      chairMesh.position.set(-4.65, 0.16, 0.78);
      chairMesh.rotation.y = -2.4;
      chairMesh.castShadow = false;
      this.group.add(chairMesh);
    }

    const lampMesh = this.models?.createMesh('lantern', 0.13);
    if (lampMesh) {
      lampMesh.position.set(-6.05, 1.06, -0.62);
      lampMesh.castShadow = false;
      this.group.add(lampMesh);
    }

    // Scattered research papers & maps on the desk and study floor + corkboard on study wall
    this._addBox(-4.8, 2.25, -5.75, 2.4, 1.45, 0.08, false, this.woodMat, false);
    const papers = [
      { x: -4.9, y: 2.3, z: -5.69, rx: 0, ry: 0, rz: 0.06, w: 0.52, h: 0.38 },
      { x: -4.2, y: 2.18, z: -5.69, rx: 0, ry: 0, rz: -0.08, w: 0.42, h: 0.46 },
      { x: -5.55, y: 2.22, z: -5.69, rx: 0, ry: 0, rz: 0.03, w: 0.45, h: 0.34 },
      { x: -4.85, y: 1.07, z: -0.45, rx: -Math.PI / 2, ry: 0, rz: 0.4, w: 0.32, h: 0.24 },
      { x: -5.1, y: 0.175, z: 0.45, rx: -Math.PI / 2, ry: 0, rz: 1.1, w: 0.34, h: 0.25 },
    ];
    papers.forEach((p) => {
      const pm = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.h), this.paperMat);
      pm.position.set(p.x, p.y, p.z);
      pm.rotation.set(p.rx, p.ry, p.rz);
      this.group.add(pm);
    });

    // Tall rusted bookshelf along west room partition
    this._addBox(-2.85, 1.35, -3.4, 0.62, 2.4, 2.2, true, this.metalMat, false, false);

    // Merged Soft Volumetric Golden Sunlight God-Ray Shafts (1 draw call instead of 2!)
    this.godRayUniforms = {
      uColor: { value: new THREE.Color('#ffdfa0') },
      uOpacity: { value: 0.15 },
    };
    this.godRayMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      uniforms: this.godRayUniforms,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vNormalV;
        varying vec3 vViewDir;
        void main() {
          vUv = uv;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vNormalV = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec3 vNormalV;
        varying vec3 vViewDir;
        void main() {
          float fresnel = pow(abs(dot(normalize(vNormalV), normalize(vViewDir))), 1.75);
          float lengthFade = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.72, vUv.y);
          float alpha = fresnel * lengthFade * uOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
    });
    const ray1 = new THREE.CylinderGeometry(0.72, 1.35, 3.8, 12, 1, true);
    ray1.rotateZ(-0.86);
    ray1.translate(-5.65, 1.65, 0.0);
    const ray2 = new THREE.CylinderGeometry(0.72, 1.35, 3.8, 12, 1, true);
    ray2.scale(0.68, 0.78, 0.68);
    ray2.rotateX(-0.82);
    ray2.translate(-4.4, 1.55, 4.4);
    const mergedRays = new THREE.Mesh(mergeGeometries([ray1, ray2], false), this.godRayMat);
    ray1.dispose();
    ray2.dispose();
    this.group.add(mergedRays);

    // ===== ROOM 3: COMMUNICATIONS ROOM (East Room: x > +2.6) =====
    this._addBox(5.2, 0.6, -4.4, 2.4, 0.92, 1.05, true, this.woodMat, false, true);
    this._addBox(6.4, 1.3, 1.8, 0.85, 2.25, 1.9, true, this.metalMat, false, false);

    // Analog Field Radio (Mission 6 Climax!)
    const radioGroup = new THREE.Group();
    radioGroup.position.set(5.15, 1.32, -4.35);
    radioGroup.rotation.y = -0.15;
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.48, 0.44), this.darkMetalMat);
    radioGroup.add(chassis);

    this.radioGlowMat = new THREE.MeshStandardMaterial({
      color: 0x3b2c1a,
      emissive: new THREE.Color('#ff8c2b'),
      emissiveIntensity: 0.04,
      roughness: 0.3,
    });
    const dial = new THREE.Mesh(new THREE.PlaneGeometry(0.48, 0.14), this.radioGlowMat);
    dial.position.set(-0.1, 0.06, 0.225);
    radioGroup.add(dial);

    for (let k = 0; k < 2; k++) {
      const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.05, 8), this.brassMat);
      knob.rotation.x = Math.PI / 2;
      knob.position.set(0.24, -0.05 + k * 0.14, 0.23);
      radioGroup.add(knob);
    }
    const whip = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 1.3, 4), this.darkMetalMat);
    whip.position.set(0.32, 0.82, -0.05);
    radioGroup.add(whip);
    this.group.add(radioGroup);

    this.radioLight = new THREE.PointLight(0xff8e36, 0, 7.5, 2.0);
    this.radioLight.position.set(HOUSE_CENTER_X + 5.15, HOUSE_BASE_Y + 1.5, HOUSE_CENTER_Z - 3.9);
    this.scene.add(this.radioLight);
  }

  _buildBackCourtyardAndWell() {
    // All 5 real Poly Haven scanned wooden barrels (4 around house + 1 under tent!) in ONE InstancedMesh draw call!
    const barrelGeo = this.models?.getGeometry('barrel');
    const barrelMat = this.models?.getMaterial('barrel') || this.metalMat;
    const drumCoords = [
      [8.3, 2.2, 0.72],
      [8.6, 1.15, 0.72],
      [-8.3, 4.4, 0.72],
      [5.8, -7.8, 0.72],
    ];
    if (this.tentBarrelWorldPos) {
      drumCoords.push([
        this.tentBarrelWorldPos.x - HOUSE_CENTER_X,
        this.tentBarrelWorldPos.z - HOUSE_CENTER_Z,
        0.65,
      ]);
    }
    if (barrelGeo) {
      const bInst = new THREE.InstancedMesh(barrelGeo, barrelMat, drumCoords.length);
      bInst.castShadow = true;
      const dummy = new THREE.Object3D();
      drumCoords.forEach(([dx, dz, sc], idx) => {
        const gy = getTerrainHeight(HOUSE_CENTER_X + dx, HOUSE_CENTER_Z + dz) - HOUSE_BASE_Y;
        dummy.position.set(dx, gy, dz);
        dummy.rotation.set(0, idx * 1.1, 0);
        dummy.scale.setScalar(sc);
        dummy.updateMatrix();
        bInst.setMatrixAt(idx, dummy.matrix);
        if (idx < 4) {
          this.physics.addCylinderCollider(HOUSE_CENTER_X + dx, HOUSE_CENTER_Z + dz, 0.42, gy + 1.15);
        }
      });
      bInst.instanceMatrix.needsUpdate = true;
      this.group.add(bInst);
    }

    // Collapsed stone water well in back oasis courtyard
    const wellX = -6.8;
    const wellZ = -10.4;
    const wellY = getTerrainHeight(HOUSE_CENTER_X + wellX, HOUSE_CENTER_Z + wellZ) - HOUSE_BASE_Y;
    const wellGroup = new THREE.Group();
    wellGroup.position.set(wellX, wellY, wellZ);

    const wellRing = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.42, 1.05, 10, 1, true), this.stoneMat);
    wellRing.position.y = 0.5;
    wellRing.castShadow = true;
    const wellDark = new THREE.Mesh(
      new THREE.CircleGeometry(1.22, 10),
      new THREE.MeshBasicMaterial({ color: 0x090604 })
    );
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
    this.physics.addCylinderCollider(HOUSE_CENTER_X + wellX, HOUSE_CENTER_Z + wellZ, 1.5, wellY + 1.8);

    // Wind-Vane Antenna Breaker Box on back-east wall (Mission 5!)
    const boxGroup = new THREE.Group();
    boxGroup.position.set(4.1, 1.48, -6.58);
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.72, 0.32), this.metalMat);
    housing.castShadow = true;
    this.switchLever = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.34, 0.18), this.brassMat);
    this.switchLever.position.set(0.1, 0.04, -0.2);
    this.switchLever.rotation.x = 0.6;
    boxGroup.add(housing, this.switchLever);
    this.group.add(boxGroup);
  }

  _buildStoryClues() {
    const registerClue = (id, label, worldPos, radius = 3.8, ringYOffset = 0.36) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.10, 0.145, 20),
        new THREE.MeshBasicMaterial({
          color: 0xffd982,
          transparent: true,
          opacity: 0.85,
          side: THREE.DoubleSide,
          depthTest: false,
        })
      );
      // Positioned cleanly above the clue object so it never occludes the 3D scanned compass or journal!
      ring.position.copy(worldPos).add(new THREE.Vector3(0, ringYOffset, 0));
      ring.renderOrder = 12;
      ring.visible = false;
      this.scene.add(ring);

      this.interactables.push({
        id,
        label,
        worldPos: worldPos.clone(),
        radius,
        ringMesh: ring,
      });
    };

    // MISSION 1: Real Poly Haven 3D scanned `seadogs_compass` resting on top of the hero boulder (-8.2, 10.2)!
    const c1Y = getTerrainHeight(-8.2, 10.2) + 0.56;
    const compassGroup = new THREE.Group();
    compassGroup.position.set(-8.2, c1Y, 10.2);

    const realCompass = this.models?.createMesh('compass', 0.38);
    if (realCompass) {
      compassGroup.add(realCompass);
    } else {
      compassGroup.add(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.06, 12), this.brassMat));
    }
    const needle = new THREE.Mesh(
      new THREE.BoxGeometry(0.022, 0.022, 0.18),
      new THREE.MeshBasicMaterial({ color: 0xc2281c })
    );
    needle.position.y = 0.065;
    this.compassNeedle = needle;
    compassGroup.add(needle);
    this.scene.add(compassGroup);
    registerClue('compass', 'فحص البوصلة المحطمة', new THREE.Vector3(-8.2, c1Y + 0.04, 10.2), 4.0, 0.36);

    // MISSION 2: Buried Expedition 4x4 Jeep Wreck along the sand trail
    registerClue('jeep', 'تفتيش حطام سيارة البعثة', this.jeepWorldPos.clone(), 4.8, 0.48);

    // MISSION 3: Expedition Satchel & Canteen on the instanced porch crate!
    this.physics.addBoxCollider(
      HOUSE_CENTER_X - 3.75,
      HOUSE_CENTER_X - 2.65,
      HOUSE_CENTER_Z + 7.2,
      HOUSE_CENTER_Z + 8.0,
      0.0,
      0.56,
      true
    );

    const canteen = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.15, 0.3, 10), this.metalMat);
    canteen.rotation.z = 0.5;
    canteen.position.set(-3.08, 0.59, 7.62);
    const satchel = new THREE.Mesh(
      new THREE.BoxGeometry(0.42, 0.14, 0.32),
      this.woodMat
    );
    satchel.position.set(-3.38, 0.55, 7.52);
    this.group.add(canteen, satchel);
    registerClue(
      'canteen',
      'فحص حقيبة البعثة والزمزمية',
      new THREE.Vector3(HOUSE_CENTER_X - 3.2, HOUSE_BASE_Y + 0.62, HOUSE_CENTER_Z + 7.6),
      3.8,
      0.38
    );

    // MISSION 4: Torn Field Journal on Nader's Desk inside the West Study Room
    const journal = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.05, 0.48), this.paperMat);
    journal.position.set(-5.3, 1.07, -0.32);
    journal.rotation.y = 0.25;
    this.group.add(journal);
    registerClue(
      'journal',
      'قراءة دفتر ملاحظات نادر',
      new THREE.Vector3(HOUSE_CENTER_X - 5.3, HOUSE_BASE_Y + 1.1, HOUSE_CENTER_Z - 0.32),
      3.8,
      0.36
    );

    // MISSION 5: Wind-Vane Breaker Box outside back-east courtyard wall
    registerClue(
      'antenna_box',
      'تشغيل قاطع برج الهوائي',
      new THREE.Vector3(HOUSE_CENTER_X + 4.1, HOUSE_BASE_Y + 1.5, HOUSE_CENTER_Z - 6.75),
      3.8,
      0.42
    );

    // MISSION 6: Analog Field Radio inside East Communications Room
    registerClue(
      'radio',
      'تشغيل المذياع التناظري (تردد ٤٤)',
      new THREE.Vector3(HOUSE_CENTER_X + 5.15, HOUSE_BASE_Y + 1.38, HOUSE_CENTER_Z - 4.35),
      4.0,
      0.42
    );
  }

  setActiveMissionId(id) {
    this.activeMissionId = id;
    for (let i = 0; i < this.interactables.length; i++) {
      const item = this.interactables[i];
      if (item.ringMesh) {
        item.ringMesh.visible = item.id === id;
      }
    }
  }

  getActiveInteractable() {
    if (!this.activeMissionId) return null;
    return this.interactables.find((it) => it.id === this.activeMissionId) || null;
  }

  setAntennaPowered(powered) {
    this.switchTargetAngle = powered ? -0.65 : 0.6;
    if (this.radioGlowMat) {
      this.radioGlowMat.emissiveIntensity = powered ? 2.2 : 0.04;
    }
    if (this.radioLight) {
      this.radioLight.intensity = powered ? 2.3 : 0;
    }
  }

  setStormIntensity(val) {
    this.stormIntensity = Math.max(0, Math.min(1, val));
    this.awningStormUniform.value = this.stormIntensity;
  }

  unlockHatch() {
    this.hatchTargetAngle = -0.82;
  }

  _optimizeStaticBatches() {
    const batchableMats = new Set([
      this.adobeMat,
      this.woodMat,
      this.metalMat,
      this.darkMetalMat,
      this.stoneMat,
      this.hatchFrameMat,
      this.brassMat,
      this.paperMat,
      this.sandDriftMat,
    ]);
    const dynamicSet = new Set([
      this.awningCloth,
      this.hatchMesh,
      this.switchLever,
      this.windVane,
      this.windTurbine,
    ]);

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
          const arr = new Float32Array(src.attributes.position.count * 3).fill(1.0);
          clean.setAttribute('color', new THREE.BufferAttribute(arr, 3));
        }
      }
      src.dispose();

      if (!buckets.has(child.material)) buckets.set(child.material, []);
      buckets.get(child.material).push(clean);
      toRemove.push(child);
    });

    const shadowSkipMats = new Set([this.paperMat, this.hatchFrameMat, this.brassMat, this.sandDriftMat]);
    for (const [mat, geos] of buckets.entries()) {
      if (geos.length < 2) {
        geos.forEach((g) => g.dispose());
        continue;
      }
      const merged = mergeGeometries(geos, false);
      geos.forEach((g) => g.dispose());
      if (merged) {
        const mesh = new THREE.Mesh(merged, mat);
        mesh.castShadow = !shadowSkipMats.has(mat);
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

  update(dt, elapsed, camera, timeOfDay) {
    const storm = this.stormIntensity;
    if (this.windTurbine) {
      this.windTurbine.rotation.x += dt * (2.6 + timeOfDay * 2.5 + storm * 9.5 + Math.sin(elapsed * 0.7) * 0.8);
    }
    if (this.windVane) {
      this.windVane.rotation.y = 0.35 + Math.sin(elapsed * (0.42 + storm * 1.4)) * (0.25 + storm * 0.18);
    }

    this.awningTimeUniform.value = elapsed;

    if (this.switchLever) {
      this.switchLever.rotation.x += (this.switchTargetAngle - this.switchLever.rotation.x) * Math.min(1, dt * 10);
    }
    if (this.hatchMesh) {
      this.hatchMesh.rotation.x += (this.hatchTargetAngle - this.hatchMesh.rotation.x) * Math.min(1, dt * 4.5);
    }

    if (this.godRayUniforms) {
      const rayDim = 1.0 - storm * 0.85;
      this.godRayUniforms.uOpacity.value = THREE.MathUtils.lerp(0.13, 0.25, timeOfDay) * rayDim;
      this.godRayUniforms.uColor.value.lerpColors(this._rayNoonCol, this._rayAsrCol, timeOfDay);
    }

    if (this.compassNeedle) {
      this.compassNeedle.rotation.y = 0.4 + Math.sin(elapsed * 5.2) * 0.25 + Math.cos(elapsed * 13.0) * 0.08;
    }

    const active = this.getActiveInteractable();
    if (active && active.ringMesh) {
      const dist = camera.position.distanceTo(active.worldPos);
      // Fade out & hide interaction ring when very close (< 2.2m) so it never overlaps the compass or journal!
      if (dist < 2.2) {
        active.ringMesh.visible = false;
      } else {
        active.ringMesh.visible = true;
        active.ringMesh.lookAt(camera.position);
        const fadeIn = THREE.MathUtils.clamp((dist - 2.2) / 2.8, 0, 1);
        active.ringMesh.material.opacity = 0.78 * fadeIn;
        const pulse = 0.88 + Math.sin(elapsed * 4.0) * 0.14;
        active.ringMesh.scale.setScalar(pulse);
      }
    }
  }
}
