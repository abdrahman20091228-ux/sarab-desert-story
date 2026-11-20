import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { HOUSE_CENTER_X, HOUSE_CENTER_Z, HOUSE_BASE_Y, getTerrainHeight } from './TerrainMath.js';

/**
 * Grand, Realistic Abandoned Desert Estate & Outpost ("محطة الرصد المنسية - القطاع ٧")
 * - Enlarged realistic scale: 15.2m wide x 12.6m deep x 4.35m tall!
 * - Crumbling mudbrick courtyard perimeter wall with arched desert entrance gateway
 * - 3 spacious walkable interior rooms: Main Hall, Nader's Research Study, and Communications Room
 * - Enlarged second-tier watchtower roof room, grand wooden veranda awning, and tall spinning wind-vane mast
 * - Strictly shows ONLY the active mission's glowing beacon (no cluttered markers!)
 * - Aggressive static mesh batching keeps total draw calls ultra-low for 60FPS!
 */
export class AbandonedHouse {
  constructor(scene, textureManager, physics, jeepWorldPos) {
    this.scene = scene;
    this.tex = textureManager;
    this.physics = physics;
    this.jeepWorldPos = jeepWorldPos;

    this.group = new THREE.Group();
    this.group.position.set(HOUSE_CENTER_X, HOUSE_BASE_Y, HOUSE_CENTER_Z);
    this.scene.add(this.group);

    this.interactables = [];
    this.activeMissionId = null;

    this.windTurbine = null;
    this.windVane = null;
    this.awningCloth = null;
    this.radioGlowMat = null;
    this.radioLight = null;
    this.hatchMesh = null;
    this.switchLever = null;
    this.compassNeedle = null;

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
    this.adobeMat = new THREE.MeshStandardMaterial({
      map: adobe.map,
      normalMap: adobe.normalMap,
      normalScale: new THREE.Vector2(1.25, 1.25),
      roughness: 0.94,
      metalness: 0.02,
      vertexColors: true,
    });

    const wood = this.tex.loadPBRSet('desert_wood', 1.6, 1.0);
    this.woodMat = new THREE.MeshStandardMaterial({
      map: wood.map,
      normalMap: wood.normalMap,
      normalScale: new THREE.Vector2(1.0, 1.0),
      roughness: 0.9,
      metalness: 0.04,
    });

    const metal = this.tex.loadPBRSet('rusted_metal', 1.5, 1.5);
    this.metalMat = new THREE.MeshStandardMaterial({
      map: metal.map,
      normalMap: metal.normalMap,
      normalScale: new THREE.Vector2(1.1, 1.1),
      roughness: 0.72,
      metalness: 0.56,
    });

    const floor = this.tex.loadPBRSet('floor_tiles', 5.2, 4.4);
    this.floorMat = new THREE.MeshStandardMaterial({
      map: floor.map,
      normalMap: floor.normalMap,
      normalScale: new THREE.Vector2(1.15, 1.15),
      roughness: 0.9,
      metalness: 0.03,
      vertexColors: true,
    });

    const fabric = this.tex.loadPBRSet('tattered_fabric', 2.4, 2.0);
    this.fabricMat = new THREE.MeshStandardMaterial({
      map: fabric.map,
      roughness: 0.96,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });

    const rock = this.tex.loadPBRSet('sandstone_rock', 2.0, 2.0);
    this.stoneMat = new THREE.MeshStandardMaterial({
      map: rock.map,
      normalMap: rock.normalMap,
      roughness: 0.94,
      metalness: 0.02,
    });

    this.darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x3b3129,
      roughness: 0.65,
      metalness: 0.7,
    });

    this.brassMat = new THREE.MeshStandardMaterial({
      color: 0xc59b48,
      roughness: 0.36,
      metalness: 0.82,
    });
  }

  _createBakedBox(w, h, d, bottomAO = 0.76, topAO = 0.98) {
    const geo = new THREE.BoxGeometry(w, h, d, 1, 1, 1);
    const pos = geo.attributes.position;
    const norm = geo.attributes.normal;
    const uv = geo.attributes.uv;
    const cols = new Float32Array(pos.count * 3);
    const tile = 2.8;

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

  _addBox(x, y, z, w, h, d, addCollider = true, mat = this.adobeMat, castShadow = true) {
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
        wx - w * 0.5, wx + w * 0.5,
        wz - d * 0.5, wz + d * 0.5,
        y - h * 0.5, y + h * 0.5
      );
    }
    return mesh;
  }

  _buildMainEstate() {
    // Grand Realistic Desert Outpost: Width = 15.2m (x: -7.6..7.6), Depth = 12.6m (z: -6.3..6.3), Height = 4.35m!
    const H = 4.35;
    const t = 0.56; // Massive authentic thick adobe mudbrick walls

    // Spacious interior cracked stone floor slab (y top = 0.16)
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
      HOUSE_CENTER_X - 7.3, HOUSE_CENTER_X + 7.3,
      HOUSE_CENTER_Z - 6.0, HOUSE_CENTER_Z + 6.4,
      0.16, 'stone'
    );
    this.physics.addInteriorZone(
      HOUSE_CENTER_X - 7.1, HOUSE_CENTER_X + 7.1,
      HOUSE_CENTER_Z - 5.9, HOUSE_CENTER_Z + 5.9,
      -0.5, 4.6
    );

    // Wide entrance stone threshold
    const step = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.18, 1.6), this.stoneMat);
    step.position.set(0, 0.05, 6.85);
    step.receiveShadow = true;
    this.group.add(step);

    // ---- FRONT WALL (+Z = +6.1) with grand 2.4m wide doorway (x: -1.2..1.2) + 2 shuttered windows ----
    // Left section (x: -7.6 .. -1.2) with window at x: -5.4..-3.4
    this._addBox(-6.5, H / 2, 6.1, 2.2, H, t);
    this._addBox(-2.3, H / 2, 6.1, 2.2, H, t);
    this._addBox(-4.4, 0.65, 6.1, 2.0, 1.3, t);
    this._addBox(-4.4, 3.55, 6.1, 2.0, 1.6, t, false);
    this._addBox(-4.4, 1.32, 6.1, 2.1, 0.11, 0.64, false, this.woodMat);
    this._addBox(-4.4, 2.74, 6.1, 2.1, 0.11, 0.64, false, this.woodMat);

    // Right section (x: +1.2 .. +7.6) with window at x: 3.4..5.4
    this._addBox(2.3, H / 2, 6.1, 2.2, H, t);
    this._addBox(6.5, H / 2, 6.1, 2.2, H, t);
    this._addBox(4.4, 0.65, 6.1, 2.0, 1.3, t);
    this._addBox(4.4, 3.55, 6.1, 2.0, 1.6, t, false);
    this._addBox(4.4, 1.32, 6.1, 2.1, 0.11, 0.64, false, this.woodMat);
    this._addBox(4.4, 2.74, 6.1, 2.1, 0.11, 0.64, false, this.woodMat);

    // Doorway lintel & heavy wooden doorframe
    this._addBox(0, 3.68, 6.1, 2.5, 1.35, t, false);
    this._addBox(0, 2.98, 6.1, 2.75, 0.18, 0.66, false, this.woodMat);
    this._addBox(-1.22, 1.48, 6.1, 0.14, 2.96, 0.6, false, this.woodMat);
    this._addBox(1.22, 1.48, 6.1, 0.14, 2.96, 0.6, false, this.woodMat);

    // ---- BACK WALL (-Z = -6.1) with BACK COURTYARD EXIT DOORWAY (x: -1.1..+1.1) + study/radio windows ----
    this._addBox(-4.35, H / 2, -6.1, 6.5, H, t);
    this._addBox(4.35, H / 2, -6.1, 6.5, H, t);
    this._addBox(0, 3.65, -6.1, 2.3, 1.4, t, false);
    this._addBox(0, 2.92, -6.1, 2.5, 0.16, 0.64, false, this.woodMat);

    // ---- WEST WALL (-X = -7.35) with huge sunlit study window letting golden Asr sun pour in! ----
    this._addBox(-7.35, H / 2, 3.85, t, H, 4.9);
    this._addBox(-7.35, H / 2, -3.85, t, H, 4.9);
    this._addBox(-7.35, 0.65, 0, t, 1.3, 2.8);
    this._addBox(-7.35, 3.55, 0, t, 1.6, 2.8, false);
    this._addBox(-7.35, 1.32, 0, 0.66, 0.12, 2.9, false, this.woodMat);
    this._addBox(-7.35, 2.75, 0, 0.66, 0.12, 2.9, false, this.woodMat);

    // ---- EAST WALL (+X = +7.35) with high ventilation slot ----
    this._addBox(7.35, H / 2, 3.6, t, H, 5.4);
    this._addBox(7.35, H / 2, -3.6, t, H, 5.4);
    this._addBox(7.35, 0.9, 0, t, 1.8, 1.8);
    this._addBox(7.35, 3.65, 0, t, 1.4, 1.8, false);

    // ---- INTERIOR ROOM DIVIDER WALLS (creates 3 distinct spacious rooms!) ----
    // West room divider (Study Room on left: x < -2.3) with wide doorway at z: 1.0..3.4
    this._addBox(-2.3, H / 2, -2.5, 0.42, H, 7.0);
    this._addBox(-2.3, H / 2, 4.75, 0.42, H, 2.6);
    this._addBox(-2.3, 3.65, 2.2, 0.42, 1.4, 2.6, false);

    // East room divider (Communications Room on right: x > +2.6) with wide doorway at z: 1.0..3.4
    this._addBox(2.6, H / 2, -2.5, 0.42, H, 7.0);
    this._addBox(2.6, H / 2, 4.75, 0.42, H, 2.6);
    this._addBox(2.6, 3.65, 2.2, 0.42, 1.4, 2.6, false);

    // ---- ROOF SLAB, CRUMBLING PARAPETS & MASSIVE PROTRUDING TIMBER BEAMS ----
    this._addBox(0, 4.46, 0, 15.2, 0.3, 12.6, false);
    this._addBox(0, 4.88, 6.1, 15.2, 0.56, 0.38, false);
    this._addBox(-7.4, 4.88, 0, 0.38, 0.56, 12.6, false);
    this._addBox(7.4, 4.82, -1.2, 0.38, 0.44, 10.0, false);
    this._addBox(0, 4.92, -6.1, 15.2, 0.62, 0.38, false);

    // Protruding desert roof log beams (low-poly 5-sided trunks)
    const beamGeo = new THREE.CylinderGeometry(0.11, 0.12, 16.4, 5);
    beamGeo.rotateZ(Math.PI / 2);
    for (let z = -4.8; z <= 4.8; z += 1.9) {
      const beam = new THREE.Mesh(beamGeo, this.woodMat);
      beam.position.set(0, 4.18, z);
      beam.castShadow = false;
      this.group.add(beam);
    }

    // ---- GRAND SECOND-TIER ROOFTOP WATCHROOM (like our reference concept art!) ----
    this._addBox(-2.4, 5.9, -2.0, 5.6, 2.6, 4.8, false);
    this._addBox(-2.4, 7.35, -4.25, 5.6, 0.36, 0.32, false);
    this._addBox(-2.4, 5.65, 0.45, 1.25, 1.8, 0.16, false, this.darkMetalMat, false);

    // Drifted desert sand tongue spilling through front doorway
    const sandPbr = this.tex.loadPBRSet('sand', 2, 2);
    const driftGeo = new THREE.ConeGeometry(2.1, 0.32, 10);
    driftGeo.scale(1.25, 1.0, 1.5);
    const doorDrift = new THREE.Mesh(
      driftGeo,
      new THREE.MeshStandardMaterial({ map: sandPbr.map, roughness: 0.92 })
    );
    doorDrift.position.set(-0.2, 0.1, 5.1);
    doorDrift.receiveShadow = true;
    this.group.add(doorDrift);

    // Baked soft ground shadow decal under estate
    const shGeo = new THREE.PlaneGeometry(21, 18);
    shGeo.rotateX(-Math.PI / 2);
    const houseShadow = new THREE.Mesh(
      shGeo,
      new THREE.MeshBasicMaterial({
        map: this.tex.createContactShadowTexture(),
        transparent: true,
        depthWrite: false,
        opacity: 0.56,
      })
    );
    houseShadow.position.set(0, 0.03, 0.4);
    this.group.add(houseShadow);
  }

  _buildCourtyardWalls() {
    // Crumbling desert compound front courtyard wall with grand open gateway! (Makes the house feel HUGE & lived-in!)
    // Front low ruined walls at z = +10.2 with wide 4.2m central gate
    this._addBox(-5.6, 0.95, 10.2, 6.8, 1.9, 0.48);
    this._addBox(5.6, 0.85, 10.2, 6.8, 1.7, 0.48);
    // Gate pillars
    this._addBox(-2.25, 1.45, 10.2, 0.72, 2.9, 0.72);
    this._addBox(2.25, 1.35, 10.2, 0.72, 2.7, 0.72);
    // Weathered wooden arch lintel across courtyard gate!
    this._addBox(0, 2.85, 10.2, 5.2, 0.22, 0.42, false, this.woodMat);

    // Side crumbling courtyard flank walls
    this._addBox(-8.9, 0.85, 8.2, 0.46, 1.7, 4.2);
    this._addBox(8.9, 0.75, 8.2, 0.46, 1.5, 4.2);
  }

  _buildGrandAwning() {
    // Wide front shaded veranda porch with fluttering tattered burlap canopy!
    const postCoords = [
      [-6.6, 9.0], [-3.8, 9.0], [-1.5, 9.0], [1.6, 9.0],
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
    this.clothBaseY = [];
    const cp = clothGeo.attributes.position;
    for (let i = 0; i < cp.count; i++) {
      const sag = Math.abs(Math.sin(cp.getX(i) * 1.1)) * -0.16;
      cp.setY(i, cp.getY(i) + sag);
      this.clothBaseY.push(cp.getY(i));
    }
    clothGeo.computeVertexNormals();

    this.awningCloth = new THREE.Mesh(clothGeo, this.fabricMat);
    this.awningCloth.position.set(-2.5, 3.12, 7.55);
    this.awningCloth.castShadow = true;
    this.group.add(this.awningCloth);
  }

  _buildWindVaneTower() {
    // Tall dramatic rusted lattice wind-vane & radio mast perched atop the enlarged estate!
    const tower = new THREE.Group();
    tower.position.set(3.8, 4.6, -2.4);

    const mastH = 7.4;
    const legs = [[-0.75, -0.75], [0.75, -0.75], [-0.75, 0.75], [0.75, 0.75]];
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

    // Rotating Wind Vane + Multi-blade Turbine
    this.windVane = new THREE.Group();
    this.windVane.position.set(0, mastH + 0.2, 0);
    const tailArm = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.06, 0.06), this.metalMat);
    tailArm.position.set(0.45, 0, 0);
    const tailFin = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.72, 0.04), this.metalMat);
    tailFin.position.set(1.42, 0.05, 0);
    this.windVane.add(tailArm, tailFin);

    this.windTurbine = new THREE.Group();
    this.windTurbine.position.set(-0.58, 0, 0);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.03, 1.0, 0.2), this.metalMat);
      blade.position.set(0, Math.cos(a) * 0.62, Math.sin(a) * 0.62);
      blade.rotation.x = a;
      blade.rotation.y = 0.32;
      this.windTurbine.add(blade);
    }

    this.windVane.add(this.windTurbine);
    tower.add(this.windVane);
    this.group.add(tower);
  }

  _buildInteriorRooms() {
    // ===== ROOM 1: MAIN HALL (Heavy Iron Cellar Hatch + Supply Crates + Fallen Debris) =====
    const hatchFrame = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.12, 2.05), this.darkMetalMat);
    hatchFrame.position.set(0.0, 0.2, -1.6);
    this.group.add(hatchFrame);

    this.hatchMesh = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.09, 1.78), this.metalMat);
    this.hatchMesh.position.set(0.0, 0.26, -1.6);
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.028, 5, 10), this.darkMetalMat);
    handle.rotation.x = Math.PI / 2;
    handle.position.set(0, 0.07, 0.56);
    this.hatchMesh.add(handle);
    this.group.add(this.hatchMesh);

    // Wooden supply crates in Hall corner
    this._addBox(1.5, 0.62, -4.9, 1.05, 0.9, 0.9, true, this.woodMat);
    this._addBox(-1.4, 0.52, -5.0, 0.85, 0.7, 0.85, true, this.woodMat);

    // ===== ROOM 2: NADER'S RESEARCH STUDY (West Room: x < -2.3) =====
    // Large weathered research desk bathed in golden west-window sunlight!
    this._addBox(-5.4, 0.96, -0.4, 1.85, 0.1, 1.05, true, this.woodMat);
    [[-6.2, -0.84], [-4.6, -0.84], [-6.2, 0.04], [-4.6, 0.04]].forEach(([lx, lz]) => {
      this._addBox(lx, 0.54, lz, 0.1, 0.82, 0.1, false, this.woodMat, false);
    });
    // Brass oil lantern & wall expedition board
    const lantern = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 0.34, 8), this.brassMat);
    lantern.position.set(-6.0, 1.18, -0.68);
    this.group.add(lantern);
    // Corkboard map on back wall of study
    this._addBox(-4.8, 2.25, -5.75, 2.4, 1.45, 0.08, false, this.woodMat, false);

    // Tilted wooden study chair
    this._addBox(-4.5, 0.45, 0.85, 0.55, 0.52, 0.55, true, this.woodMat, false);

    // Tall rusted bookshelf along west room partition
    this._addBox(-2.85, 1.35, -3.4, 0.62, 2.4, 2.2, true, this.metalMat);

    // ===== ROOM 3: COMMUNICATIONS ROOM (East Room: x > +2.6) =====
    // Wide communications workbench & heavy battery rack
    this._addBox(5.2, 0.6, -4.4, 2.4, 0.92, 1.05, true, this.woodMat);
    this._addBox(6.4, 1.3, 1.8, 0.85, 2.25, 1.9, true, this.metalMat);

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
    // Rusted oil drums around exterior
    const drumGeo = new THREE.CylinderGeometry(0.36, 0.36, 1.05, 8);
    [[8.3, 2.2], [8.6, 1.15], [-8.3, 4.4], [5.8, -7.8]].forEach(([dx, dz]) => {
      const gy = getTerrainHeight(HOUSE_CENTER_X + dx, HOUSE_CENTER_Z + dz) - HOUSE_BASE_Y;
      const drum = new THREE.Mesh(drumGeo, this.metalMat);
      drum.position.set(dx, gy + 0.52, dz);
      drum.castShadow = true;
      this.group.add(drum);
      this.physics.addCylinderCollider(HOUSE_CENTER_X + dx, HOUSE_CENTER_Z + dz, 0.44, gy + 1.3);
    });

    // Collapsed stone water well in back oasis courtyard near the swaying palms!
    const wellX = -6.8;
    const wellZ = -10.4;
    const wellY = getTerrainHeight(HOUSE_CENTER_X + wellX, HOUSE_CENTER_Z + wellZ) - HOUSE_BASE_Y;
    const wellGroup = new THREE.Group();
    wellGroup.position.set(wellX, wellY, wellZ);

    const wellRing = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.42, 1.05, 10, 1, true), this.stoneMat);
    wellRing.position.y = 0.5;
    wellRing.castShadow = true;
    const wellDark = new THREE.Mesh(new THREE.CircleGeometry(1.22, 10), new THREE.MeshBasicMaterial({ color: 0x090604 }));
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

    // Wind-Vane Antenna Breaker Box on back-east wall near the courtyard exit (Mission 5!)
    const boxGroup = new THREE.Group();
    boxGroup.position.set(4.1, 1.48, -6.58);
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.72, 0.32), this.metalMat);
    housing.castShadow = true;
    this.switchLever = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.34, 0.18), this.brassMat);
    this.switchLever.position.set(0.1, 0.04, -0.2);
    this.switchLever.rotation.x = 0.6; // OFF position
    boxGroup.add(housing, this.switchLever);
    this.group.add(boxGroup);
  }

  _buildStoryClues() {
    const registerClue = (id, label, worldPos, radius = 3.8) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.16, 0.24, 16),
        new THREE.MeshBasicMaterial({
          color: 0xffd47a,
          transparent: true,
          opacity: 0.92,
          side: THREE.DoubleSide,
          depthTest: false,
        })
      );
      ring.position.copy(worldPos).add(new THREE.Vector3(0, 0.55, 0));
      ring.renderOrder = 12;
      ring.visible = false; // Strictly hidden until this EXACT mission is active!
      this.scene.add(ring);

      this.interactables.push({
        id,
        label,
        worldPos: worldPos.clone(),
        radius,
        ringMesh: ring,
      });
    };

    // MISSION 1: Cracked Brass Compass flush on top of boulder near wake-up clearing (-8.2, 10.2)
    const c1Y = getTerrainHeight(-8.2, 10.2) + 0.42;
    const compassGroup = new THREE.Group();
    compassGroup.position.set(-8.2, c1Y, 10.2);
    compassGroup.add(
      new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.06, 12), this.brassMat),
      new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.065, 12), new THREE.MeshStandardMaterial({ color: 0xefe3c8 }))
    );
    const needle = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.024, 0.2), new THREE.MeshBasicMaterial({ color: 0xc2281c }));
    needle.position.y = 0.036;
    this.compassNeedle = needle;
    compassGroup.add(needle);
    this.scene.add(compassGroup);
    registerClue('compass', 'فحص البوصلة المحطمة', new THREE.Vector3(-8.2, c1Y, 10.2), 4.0);

    // MISSION 2: Buried Expedition 4x4 Jeep Wreck along the sand trail
    registerClue('jeep', 'تفتيش حطام سيارة البعثة', this.jeepWorldPos.clone(), 4.8);

    // MISSION 3: Expedition Satchel & Dry Canteen on veranda porch crate
    this._addBox(-3.2, 0.36, 7.6, 0.85, 0.68, 0.72, true, this.woodMat);
    const canteen = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.16, 0.32, 10), this.metalMat);
    canteen.rotation.z = 0.5;
    canteen.position.set(-3.08, 0.82, 7.62);
    const satchel = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.14, 0.32), new THREE.MeshStandardMaterial({ color: 0x6e4b2c, roughness: 0.92 }));
    satchel.position.set(-3.38, 0.77, 7.52);
    this.group.add(canteen, satchel);
    registerClue('canteen', 'فحص حقيبة البعثة والزمزمية', new THREE.Vector3(HOUSE_CENTER_X - 3.2, HOUSE_BASE_Y + 0.85, HOUSE_CENTER_Z + 7.6), 3.8);

    // MISSION 4: Torn Field Journal on Nader's Desk inside the West Study Room
    const journal = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.05, 0.48),
      new THREE.MeshStandardMaterial({ color: 0xe3cf9f, roughness: 0.88 })
    );
    journal.position.set(-5.3, 1.05, -0.32);
    journal.rotation.y = 0.25;
    this.group.add(journal);
    registerClue('journal', 'قراءة دفتر ملاحظات نادر', new THREE.Vector3(HOUSE_CENTER_X - 5.3, HOUSE_BASE_Y + 1.1, HOUSE_CENTER_Z - 0.32), 3.8);

    // MISSION 5: Wind-Vane Breaker Box outside back-east courtyard wall
    registerClue('antenna_box', 'تشغيل قاطع برج الهوائي', new THREE.Vector3(HOUSE_CENTER_X + 4.1, HOUSE_BASE_Y + 1.5, HOUSE_CENTER_Z - 6.75), 3.8);

    // MISSION 6: Analog Field Radio inside East Communications Room
    registerClue('radio', 'تشغيل المذياع التناظري (تردد ٤٤)', new THREE.Vector3(HOUSE_CENTER_X + 5.15, HOUSE_BASE_Y + 1.35, HOUSE_CENTER_Z - 4.35), 4.0);
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
    if (this.switchLever) {
      this.switchLever.rotation.x = powered ? -0.6 : 0.6;
    }
    if (this.radioGlowMat) {
      this.radioGlowMat.emissiveIntensity = powered ? 2.1 : 0.04;
    }
    if (this.radioLight) {
      this.radioLight.intensity = powered ? 2.2 : 0;
    }
  }

  unlockHatch() {
    if (this.hatchMesh) {
      this.hatchMesh.position.y = 0.38;
      this.hatchMesh.rotation.x = -0.26;
    }
  }

  _optimizeStaticBatches() {
    const batchableMats = new Set([this.adobeMat, this.woodMat, this.metalMat, this.darkMetalMat]);
    const dynamicSet = new Set([this.awningCloth, this.hatchMesh, this.switchLever, this.windVane, this.windTurbine]);

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
      if (!child.isMesh || !batchableMats.has(child.material) || isDynamic(child)) return;
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

    for (const [mat, geos] of buckets.entries()) {
      if (geos.length < 2) {
        geos.forEach((g) => g.dispose());
        continue;
      }
      const merged = mergeGeometries(geos, false);
      geos.forEach((g) => g.dispose());
      if (merged) {
        const mesh = new THREE.Mesh(merged, mat);
        mesh.castShadow = true;
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
    if (this.windTurbine) {
      this.windTurbine.rotation.x += dt * (2.6 + timeOfDay * 2.5 + Math.sin(elapsed * 0.7) * 0.8);
    }
    if (this.windVane) {
      this.windVane.rotation.y = 0.35 + Math.sin(elapsed * 0.42) * 0.25;
    }

    if (this.awningCloth) {
      const cp = this.awningCloth.geometry.attributes.position;
      const amp = 0.035 + timeOfDay * 0.025;
      for (let i = 0; i < cp.count; i++) {
        const x = cp.getX(i);
        const z = cp.getZ(i);
        cp.setY(i, this.clothBaseY[i] + Math.sin(elapsed * 3.4 + x * 1.8 + z * 1.5) * amp);
      }
      cp.needsUpdate = true;
    }

    if (this.compassNeedle) {
      this.compassNeedle.rotation.y = 0.4 + Math.sin(elapsed * 5.2) * 0.25 + Math.cos(elapsed * 13.0) * 0.08;
    }

    // Pulse ONLY the single currently active mission beacon!
    const active = this.getActiveInteractable();
    if (active && active.ringMesh) {
      active.ringMesh.visible = true;
      active.ringMesh.lookAt(camera.position);
      const pulse = 0.88 + Math.sin(elapsed * 4.0) * 0.2;
      active.ringMesh.scale.setScalar(pulse);
    }
  }
}
