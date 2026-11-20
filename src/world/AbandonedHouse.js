import * as THREE from 'three';
import { HOUSE_CENTER_X, HOUSE_CENTER_Z, HOUSE_BASE_Y, getTerrainHeight } from './TerrainMath.js';

/**
 * Hero Abandoned Desert Outpost ("محطة الرصد المنسية - القطاع ٧")
 * Built directly from our visual moodboard references:
 * - Two-tier crumbling adobe/mudbrick building with protruding wooden roof beams
 * - Half-collapsed wooden porch awning draped with fluttering burlap canvas
 * - Tall rusted lattice wind-vane & radio antenna tower spinning in the desert wind
 * - Detailed walkable interior (cracked stone floor, sand drifts, desk, lantern, analog radio, iron hatch)
 * - Back courtyard with collapsed stone well, rusted barrels, crates & antenna junction box
 * - Baked vertex AO shading + soft contact shadow decals for grounded lighting on every graphics preset
 */
export class AbandonedHouse {
  constructor(scene, textureManager, physics) {
    this.scene = scene;
    this.tex = textureManager;
    this.physics = physics;

    this.group = new THREE.Group();
    this.group.position.set(HOUSE_CENTER_X, HOUSE_BASE_Y, HOUSE_CENTER_Z);
    this.scene.add(this.group);

    this.interactables = []; // { id, label, worldPos, mesh, radius, ringMesh }
    this.windTurbine = null;
    this.windVane = null;
    this.awningCloth = null;
    this.radioGlowMat = null;
    this.radioLight = null;
    this.hatchMesh = null;
    this.hatchUnlocked = false;
    this.switchLever = null;

    this._createMaterials();
    this._buildStructure();
    this._buildAwning();
    this._buildWindVaneTower();
    this._buildInteriorFurniture();
    this._buildExteriorPropsAndWell();
    this._buildStoryClues();
  }

  _createMaterials() {
    const adobe = this.tex.loadPBRSet('adobe_wall', 1.0, 1.0);
    this.adobeMat = new THREE.MeshStandardMaterial({
      map: adobe.map,
      normalMap: adobe.normalMap,
      normalScale: new THREE.Vector2(1.3, 1.3),
      roughnessMap: adobe.roughnessMap,
      roughness: 0.94,
      metalness: 0.02,
      vertexColors: true,
    });

    const wood = this.tex.loadPBRSet('desert_wood', 1.6, 1.0);
    this.woodMat = new THREE.MeshStandardMaterial({
      map: wood.map,
      normalMap: wood.normalMap,
      normalScale: new THREE.Vector2(1.1, 1.1),
      roughnessMap: wood.roughnessMap,
      roughness: 0.9,
      metalness: 0.04,
    });

    const metal = this.tex.loadPBRSet('rusted_metal', 1.5, 1.5);
    this.metalMat = new THREE.MeshStandardMaterial({
      map: metal.map,
      normalMap: metal.normalMap,
      normalScale: new THREE.Vector2(1.2, 1.2),
      roughnessMap: metal.roughnessMap,
      roughness: 0.72,
      metalness: 0.58,
    });

    const floor = this.tex.loadPBRSet('floor_tiles', 3.5, 3.0);
    this.floorMat = new THREE.MeshStandardMaterial({
      map: floor.map,
      normalMap: floor.normalMap,
      normalScale: new THREE.Vector2(1.25, 1.25),
      roughnessMap: floor.roughnessMap,
      roughness: 0.9,
      metalness: 0.03,
      vertexColors: true,
    });

    const fabric = this.tex.loadPBRSet('tattered_fabric', 2.0, 2.0);
    this.fabricMat = new THREE.MeshStandardMaterial({
      map: fabric.map,
      normalMap: fabric.normalMap,
      normalScale: new THREE.Vector2(0.85, 0.85),
      roughness: 0.96,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });

    const rock = this.tex.loadPBRSet('sandstone_rock', 2.0, 2.0);
    this.stoneMat = new THREE.MeshStandardMaterial({
      map: rock.map,
      normalMap: rock.normalMap,
      roughnessMap: rock.roughnessMap,
      roughness: 0.94,
      metalness: 0.02,
    });

    this.darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x3b3129,
      roughness: 0.65,
      metalness: 0.72,
    });

    this.brassMat = new THREE.MeshStandardMaterial({
      color: 0xc59b48,
      roughness: 0.36,
      metalness: 0.82,
    });
  }

  /**
   * Creates a box geometry with:
   * 1) Clamped baked bottom-to-top ambient occlusion vertex colors (zero NaN blackouts!)
   * 2) World-scaled box UVs (every 2.4m = 1 tile) so mudbrick walls, headers, pillars, and ceilings NEVER stretch!
   */
  _createBakedBox(w, h, d, bottomAO = 0.74, topAO = 0.98) {
    const geo = new THREE.BoxGeometry(w, h, d, 1, 2, 1);
    const pos = geo.attributes.position;
    const norm = geo.attributes.normal;
    const uv = geo.attributes.uv;
    const cols = new Float32Array(pos.count * 3);
    const tile = 2.5;

    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i);
      const py = pos.getY(i);
      const pz = pos.getZ(i);
      const nx = Math.abs(norm.getX(i));
      const nyAbs = Math.abs(norm.getY(i));

      // World-scaled triplanar UV mapping per face
      if (nyAbs > 0.5) {
        uv.setXY(i, (px + w * 0.5) / tile, (pz + d * 0.5) / tile);
      } else if (nx > 0.5) {
        uv.setXY(i, (pz + d * 0.5) / tile, (py + h * 0.5) / tile);
      } else {
        uv.setXY(i, (px + w * 0.5) / tile, (py + h * 0.5) / tile);
      }

      // Clamped vertical AO gradient (prevents Math.pow(negative, 0.55) => NaN blackout!)
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

  _addWallBox(x, y, z, w, h, d, addCollider = true, mat = this.adobeMat) {
    const geo = mat === this.adobeMat ? this._createBakedBox(w, h, d) : new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
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

  _buildStructure() {
    // House footprint: width 9.2m (x: -4.6..4.6), depth 7.6m (z: -3.8..3.8), wall height 3.55m
    // Front faces +Z (towards the player's wake-up spot!)
    const wallH = 3.55;
    const t = 0.46; // Thick authentic desert adobe walls

    // Interior cracked stone floor slab (elevated gently at y = 0.12)
    const floorGeo = new THREE.BoxGeometry(8.8, 0.24, 7.2, 6, 1, 6);
    const fp = floorGeo.attributes.position;
    const fc = new Float32Array(fp.count * 3);
    for (let i = 0; i < fp.count; i++) {
      const fx = fp.getX(i);
      const fz = fp.getZ(i);
      // Baked interior corner ambient occlusion!
      const edgeX = Math.abs(fx) / 4.4;
      const edgeZ = Math.abs(fz) / 3.6;
      const cornerAO = 1.0 - Math.max(edgeX, edgeZ) * 0.28;
      fc[i * 3] = cornerAO;
      fc[i * 3 + 1] = cornerAO * 0.98;
      fc[i * 3 + 2] = cornerAO * 0.95;
    }
    floorGeo.setAttribute('color', new THREE.BufferAttribute(fc, 3));
    const floorMesh = new THREE.Mesh(floorGeo, this.floorMat);
    floorMesh.position.set(0, 0.04, 0);
    floorMesh.receiveShadow = true;
    this.group.add(floorMesh);

    // Register walkable stone floor & interior acoustic/eye-adaptation volume
    this.physics.addFloorZone(
      HOUSE_CENTER_X - 4.4, HOUSE_CENTER_X + 4.4,
      HOUSE_CENTER_Z - 3.6, HOUSE_CENTER_Z + 3.8,
      0.16, 'stone'
    );
    this.physics.addInteriorZone(
      HOUSE_CENTER_X - 4.2, HOUSE_CENTER_X + 4.2,
      HOUSE_CENTER_Z - 3.4, HOUSE_CENTER_Z + 3.4,
      -0.5, 3.9
    );

    // Front porch threshold step
    const step = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.16, 1.3), this.stoneMat);
    step.position.set(0, 0.04, 4.25);
    step.receiveShadow = true;
    this.group.add(step);

    // ---- FRONT WALL (+Z = +3.6) with wide open doorway (x: -0.95 .. +0.95) & left window ----
    // Right of doorway (x: 0.95 to 4.6 -> w=3.65, center=2.775)
    this._addWallBox(2.78, wallH / 2, 3.6, 3.65, wallH, t);
    // Above doorway lintel (x: -1.0 to 1.0, y: 2.55 to 3.55)
    this._addWallBox(0, 3.05, 3.6, 2.0, 1.0, t, false);
    // Wooden doorway lintel beam & side jambs
    this._addWallBox(0, 2.52, 3.6, 2.25, 0.16, 0.54, false, this.woodMat);
    this._addWallBox(-0.96, 1.25, 3.6, 0.12, 2.5, 0.5, false, this.woodMat);
    this._addWallBox(0.96, 1.25, 3.6, 0.12, 2.5, 0.5, false, this.woodMat);

    // Left of doorway with window opening (x: -3.2..-1.9, y: 1.1..2.25)
    this._addWallBox(-1.42, wallH / 2, 3.6, 0.96, wallH, t);
    this._addWallBox(-3.9, wallH / 2, 3.6, 1.4, wallH, t);
    this._addWallBox(-2.55, 0.55, 3.6, 1.35, 1.1, t); // Under window
    this._addWallBox(-2.55, 2.9, 3.6, 1.35, 1.3, t, false); // Above window
    // Window wooden sill & broken shutter slats
    this._addWallBox(-2.55, 1.12, 3.6, 1.42, 0.09, 0.56, false, this.woodMat);
    this._addWallBox(-2.55, 2.26, 3.6, 1.42, 0.09, 0.56, false, this.woodMat);
    const slat = this._addWallBox(-2.45, 1.72, 3.64, 1.28, 0.11, 0.06, false, this.woodMat);
    slat.rotation.z = 0.14;

    // ---- BACK WALL (-Z = -3.6) with a recessed window letting golden Asr sunbeams stream in! ----
    this._addWallBox(-2.8, wallH / 2, -3.6, 3.6, wallH, t);
    this._addWallBox(2.9, wallH / 2, -3.6, 3.4, wallH, t);
    this._addWallBox(0.1, 0.6, -3.6, 2.2, 1.2, t);
    this._addWallBox(0.1, 2.95, -3.6, 2.2, 1.2, t, false);
    this._addWallBox(0.1, 1.22, -3.6, 2.25, 0.1, 0.54, false, this.woodMat);
    this._addWallBox(0.1, 2.35, -3.6, 2.25, 0.1, 0.54, false, this.woodMat);

    // ---- WEST WALL (-X = -4.4) with dramatic afternoon Asr sun window! ----
    this._addWallBox(-4.4, wallH / 2, 2.15, t, wallH, 3.1);
    this._addWallBox(-4.4, wallH / 2, -2.15, t, wallH, 3.1);
    this._addWallBox(-4.4, 0.58, 0, t, 1.16, 1.5);
    this._addWallBox(-4.4, 2.95, 0, t, 1.2, 1.5, false);
    this._addWallBox(-4.4, 1.18, 0, 0.56, 0.1, 1.58, false, this.woodMat);
    this._addWallBox(-4.4, 2.36, 0, 0.56, 0.1, 1.58, false, this.woodMat);

    // ---- EAST WALL (+X = +4.4) solid weathered mudbrick with buttress ----
    this._addWallBox(4.4, wallH / 2, 0, t, wallH, 7.5);
    // Crumbling exterior wing wall ruin on right front (just like our moodboard!)
    this._addWallBox(4.4, 1.05, 5.1, 0.44, 2.1, 2.7);
    this._addWallBox(4.4, 0.55, 6.7, 0.42, 1.1, 1.1);

    // ---- INTERIOR PARTIAL DIVIDER WALL (creates main room + radio alcove!) ----
    this._addWallBox(1.3, wallH / 2, -1.65, 0.36, wallH, 3.7);
    // Archway lintel across interior divider gap
    this._addWallBox(1.3, 3.05, 1.85, 0.36, 1.0, 3.4, false);

    // ---- ROOF SLAB, CRUMBLING PARAPETS & PROTRUDING TIMBER BEAMS ----
    this._addWallBox(0, 3.68, 0, 9.25, 0.28, 7.65, false);
    // Parapet walls around rooftop
    this._addWallBox(0, 4.02, 3.65, 9.2, 0.42, 0.32, false);
    this._addWallBox(-4.45, 4.02, 0, 0.32, 0.42, 7.6, false);
    this._addWallBox(4.45, 3.96, -0.8, 0.32, 0.3, 5.8, false);
    this._addWallBox(0, 4.05, -3.65, 9.2, 0.48, 0.32, false);

    // Protruding desert roof log beams (iconic Arabian mudbrick architectural detail!)
    const beamGeo = new THREE.CylinderGeometry(0.085, 0.095, 10.3, 7);
    beamGeo.rotateZ(Math.PI / 2);
    for (let z = -3.0; z <= 3.0; z += 1.2) {
      const beam = new THREE.Mesh(beamGeo, this.woodMat);
      beam.position.set(0, 3.45, z);
      beam.castShadow = true;
      this.group.add(beam);
    }

    // ---- SECOND-TIER ROOFTOP WATCH ROOM (matches desert_reference_moodboard!) ----
    this._addWallBox(-1.4, 4.82, -1.3, 3.8, 2.15, 3.2, false);
    // Small roof doorway frame on upper tier
    this._addWallBox(-1.4, 4.65, 0.34, 0.95, 1.45, 0.14, false, this.darkMetalMat);
    // Leaning wooden roof ladder from lower roof up to watch-room
    this._buildLadder(1.15, 3.8, -0.3, 2.4, 0.28);

    // Interior drifted sand tongues spilling through front doorway!
    const sandPbr = this.tex.loadPBRSet('sand', 2, 2);
    const driftMat = new THREE.MeshStandardMaterial({
      map: sandPbr.map,
      normalMap: sandPbr.normalMap,
      roughness: 0.92,
    });
    const driftGeo = new THREE.ConeGeometry(1.7, 0.34, 14);
    driftGeo.scale(1.2, 1.0, 1.6);
    const doorDrift = new THREE.Mesh(driftGeo, driftMat);
    doorDrift.position.set(-0.2, 0.1, 2.6);
    doorDrift.receiveShadow = true;
    this.group.add(doorDrift);

    // Baked soft ground shadow decals around house foundation
    const shadowGeo = new THREE.PlaneGeometry(13.5, 11.5);
    shadowGeo.rotateX(-Math.PI / 2);
    const houseShadow = new THREE.Mesh(
      shadowGeo,
      new THREE.MeshBasicMaterial({
        map: this.tex.createContactShadowTexture(),
        transparent: true,
        depthWrite: false,
        opacity: 0.58,
      })
    );
    houseShadow.position.set(0, 0.03, 0.3);
    this.group.add(houseShadow);
  }

  _buildLadder(x, y, z, height, tilt) {
    const ladder = new THREE.Group();
    ladder.position.set(x, y, z);
    ladder.rotation.z = tilt;
    const railGeo = new THREE.CylinderGeometry(0.04, 0.04, height, 6);
    const leftRail = new THREE.Mesh(railGeo, this.woodMat);
    leftRail.position.set(0, height / 2, -0.24);
    const rightRail = new THREE.Mesh(railGeo, this.woodMat);
    rightRail.position.set(0, height / 2, 0.24);
    ladder.add(leftRail, rightRail);

    const rungGeo = new THREE.CylinderGeometry(0.028, 0.028, 0.5, 5);
    rungGeo.rotateX(Math.PI / 2);
    for (let r = 0.25; r < height - 0.15; r += 0.36) {
      const rung = new THREE.Mesh(rungGeo, this.woodMat);
      rung.position.set(0, r, 0);
      ladder.add(rung);
    }
    this.group.add(ladder);
  }

  _buildAwning() {
    // Weathered front porch wooden awning draped with fluttering burlap cloth (just like moodboard!)
    const postPositions = [
      [-4.1, 5.75],
      [-1.35, 5.75],
      [1.45, 5.75],
    ];
    postPositions.forEach(([px, pz]) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.095, 2.38, 7), this.woodMat);
      post.position.set(px, 1.18, pz);
      post.castShadow = true;
      post.receiveShadow = true;
      this.group.add(post);
      this.physics.addCylinderCollider(HOUSE_CENTER_X + px, HOUSE_CENTER_Z + pz, 0.16, 2.5);
    });

    // Slanted wooden roof rafters
    const frontBeam = new THREE.Mesh(new THREE.BoxGeometry(6.1, 0.13, 0.13), this.woodMat);
    frontBeam.position.set(-1.3, 2.34, 5.75);
    frontBeam.castShadow = true;
    this.group.add(frontBeam);

    for (let rx = -4.0; rx <= 1.5; rx += 0.9) {
      const rafter = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.09, 2.35), this.woodMat);
      rafter.position.set(rx, 2.55, 4.78);
      rafter.rotation.x = 0.19;
      rafter.castShadow = true;
      this.group.add(rafter);
    }

    // Draped burlap canvas cloth (segmented plane so vertices flutter gently in wind!)
    const clothGeo = new THREE.PlaneGeometry(5.5, 2.25, 12, 6);
    clothGeo.rotateX(-Math.PI / 2 + 0.19);
    this.clothBaseY = [];
    const cp = clothGeo.attributes.position;
    for (let i = 0; i < cp.count; i++) {
      // Natural sagging drape between wooden rafters
      const x = cp.getX(i);
      const sag = Math.abs(Math.sin(x * 1.4)) * -0.14;
      cp.setY(i, cp.getY(i) + sag);
      this.clothBaseY.push(cp.getY(i));
    }
    clothGeo.computeVertexNormals();

    this.awningCloth = new THREE.Mesh(clothGeo, this.fabricMat);
    this.awningCloth.position.set(-1.35, 2.6, 4.75);
    this.awningCloth.castShadow = true;
    this.awningCloth.receiveShadow = true;
    this.group.add(this.awningCloth);
  }

  _buildWindVaneTower() {
    // Iconic silhouetted lattice wind-vane & radio mast on rooftop (matching both Noon & Asr references!)
    const tower = new THREE.Group();
    tower.position.set(2.35, 3.82, -1.65);

    const mastH = 5.4;
    // 4 tapered steel lattice legs
    const legOffsets = [
      [-0.55, -0.55], [0.55, -0.55],
      [-0.55, 0.55], [0.55, 0.55],
    ];
    legOffsets.forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.055, mastH, 6), this.metalMat);
      leg.position.set(lx * 0.5, mastH * 0.5, lz * 0.5);
      leg.rotation.z = lx > 0 ? 0.095 : -0.095;
      leg.rotation.x = lz > 0 ? -0.095 : 0.095;
      leg.castShadow = true;
      tower.add(leg);
    });

    // Horizontal lattice cross-braces
    for (let h = 0.8; h < mastH - 0.5; h += 1.1) {
      const shrink = 1.0 - (h / mastH) * 0.72;
      const w = 1.08 * shrink;
      const b1 = new THREE.Mesh(new THREE.BoxGeometry(w, 0.04, 0.04), this.darkMetalMat);
      b1.position.set(0, h, w * 0.5);
      const b2 = b1.clone();
      b2.position.set(0, h, -w * 0.5);
      const b3 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, w), this.darkMetalMat);
      b3.position.set(w * 0.5, h, 0);
      const b4 = b3.clone();
      b4.position.set(-w * 0.5, h, 0);
      tower.add(b1, b2, b3, b4);
    }

    // Side radio Yagi antenna crossbars
    const yagiBoom = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.9, 5), this.darkMetalMat);
    yagiBoom.rotation.z = Math.PI / 2;
    yagiBoom.position.set(-0.7, 3.6, 0);
    tower.add(yagiBoom);
    for (let d = -0.8; d <= 0.6; d += 0.45) {
      const elem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.95 - (d + 0.8) * 0.2, 4), this.darkMetalMat);
      elem.rotation.x = Math.PI / 2;
      elem.position.set(-0.7 + d, 3.6, 0);
      tower.add(elem);
    }

    // Rotating Wind Vane Head
    this.windVane = new THREE.Group();
    this.windVane.position.set(0, mastH + 0.15, 0);

    const tailArm = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.05, 0.05), this.metalMat);
    tailArm.position.set(0.35, 0, 0);
    const tailFin = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.52, 0.03), this.metalMat);
    tailFin.position.set(1.05, 0.04, 0);
    this.windVane.add(tailArm, tailFin);

    // Spinning Multi-blade Wind Turbine Wheel
    this.windTurbine = new THREE.Group();
    this.windTurbine.position.set(-0.42, 0, 0);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.16, 8), this.darkMetalMat);
    hub.rotation.z = Math.PI / 2;
    this.windTurbine.add(hub);

    const bladeCount = 10;
    for (let i = 0; i < bladeCount; i++) {
      const a = (i / bladeCount) * Math.PI * 2;
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.72, 0.16), this.metalMat);
      blade.position.set(0, Math.cos(a) * 0.44, Math.sin(a) * 0.44);
      blade.rotation.x = a;
      blade.rotation.y = 0.32;
      blade.castShadow = true;
      this.windTurbine.add(blade);
    }

    this.windVane.add(this.windTurbine);
    tower.add(this.windVane);
    this.group.add(tower);

    // Electrical conduit cable running down exterior east wall to Antenna Junction Box
    const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 4.8, 5), this.darkMetalMat);
    cable.position.set(4.68, 2.2, -1.65);
    this.group.add(cable);
  }

  _buildInteriorFurniture() {
    // 1. Weathered wooden field desk under the west window (dramatic light shaft falls right onto the Journal!)
    const desk = new THREE.Group();
    desk.position.set(-2.95, 0.16, -0.3);
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.09, 0.86), this.woodMat);
    top.position.y = 0.82;
    top.castShadow = true;
    top.receiveShadow = true;
    desk.add(top);
    [[-0.68, -0.34], [0.68, -0.34], [-0.68, 0.34], [0.68, 0.34]].forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.82, 0.09), this.woodMat);
      leg.position.set(lx, 0.41, lz);
      leg.castShadow = true;
      desk.add(leg);
    });
    // Brass oil lantern resting on desk
    const lanternBase = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.14, 10), this.brassMat);
    lanternBase.position.set(-0.5, 0.93, -0.18);
    const lanternGlass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 0.2, 10),
      new THREE.MeshStandardMaterial({ color: 0xf4dca8, transparent: true, opacity: 0.45, roughness: 0.2 })
    );
    lanternGlass.position.set(-0.5, 1.09, -0.18);
    desk.add(lanternBase, lanternGlass);
    this.group.add(desk);
    this.physics.addBoxCollider(
      HOUSE_CENTER_X - 3.78, HOUSE_CENTER_X - 2.12,
      HOUSE_CENTER_Z - 0.78, HOUSE_CENTER_Z + 0.18,
      0, 1.2
    );

    // Tilted wooden chair near desk
    const chair = new THREE.Group();
    chair.position.set(-2.25, 0.16, 0.65);
    chair.rotation.y = 0.55;
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.06, 0.46), this.woodMat);
    seat.position.y = 0.46;
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.52, 0.06), this.woodMat);
    back.position.set(0, 0.72, 0.2);
    chair.add(seat, back);
    [[-0.19, -0.19], [0.19, -0.19], [-0.19, 0.19], [0.19, 0.19]].forEach(([lx, lz]) => {
      const cl = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.46, 0.05), this.woodMat);
      cl.position.set(lx, 0.23, lz);
      chair.add(cl);
    });
    this.group.add(chair);

    // 2. Radio Table & Vintage Analog Field Radio inside the right alcove (x: +2.9, z: -2.5)
    const radioTable = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.84, 0.78), this.woodMat);
    radioTable.position.set(2.9, 0.58, -2.75);
    radioTable.castShadow = true;
    radioTable.receiveShadow = true;
    this.group.add(radioTable);
    this.physics.addBoxCollider(
      HOUSE_CENTER_X + 2.15, HOUSE_CENTER_X + 3.65,
      HOUSE_CENTER_Z - 3.2, HOUSE_CENTER_Z - 2.3,
      0, 1.3
    );

    const radioGroup = new THREE.Group();
    radioGroup.position.set(2.88, 1.19, -2.72);
    radioGroup.rotation.y = -0.18;
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.36, 0.34), this.darkMetalMat);
    chassis.castShadow = true;
    radioGroup.add(chassis);

    // Glowing amber analog frequency dial (dims off until antenna power is restored!)
    this.radioGlowMat = new THREE.MeshStandardMaterial({
      color: 0x3b2c1a,
      emissive: new THREE.Color('#ff8c2b'),
      emissiveIntensity: 0.05,
      roughness: 0.3,
    });
    const dial = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.11), this.radioGlowMat);
    dial.position.set(-0.08, 0.04, 0.174);
    radioGroup.add(dial);

    // Knobs & whip antenna
    for (let k = 0; k < 2; k++) {
      const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.04, 10), this.brassMat);
      knob.rotation.x = Math.PI / 2;
      knob.position.set(0.18, -0.04 + k * 0.11, 0.18);
      radioGroup.add(knob);
    }
    const whip = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.01, 0.95, 5), this.darkMetalMat);
    whip.position.set(0.24, 0.62, -0.05);
    radioGroup.add(whip);
    this.group.add(radioGroup);

    // Warm radio indicator light (activated when powered!)
    this.radioLight = new THREE.PointLight(0xff8e36, 0, 5.5, 2.0);
    this.radioLight.position.set(HOUSE_CENTER_X + 2.88, HOUSE_BASE_Y + 1.32, HOUSE_CENTER_Z - 2.42);
    this.scene.add(this.radioLight);

    // 3. Heavy Rusted Iron Cellar Hatch set into the interior stone floor (center-back of main room)
    const hatchFrame = new THREE.Mesh(new THREE.BoxGeometry(1.58, 0.1, 1.58), this.darkMetalMat);
    hatchFrame.position.set(-1.05, 0.19, -2.15);
    hatchFrame.receiveShadow = true;
    this.group.add(hatchFrame);

    this.hatchMesh = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.08, 1.36), this.metalMat);
    this.hatchMesh.position.set(-1.05, 0.24, -2.15);
    this.hatchMesh.receiveShadow = true;
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.022, 6, 12), this.darkMetalMat);
    handle.rotation.x = Math.PI / 2;
    handle.position.set(0, 0.06, 0.42);
    this.hatchMesh.add(handle);
    this.group.add(this.hatchMesh);

    // 4. Interior wooden supply crates stacked in corner
    const c1 = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.72, 0.75), this.woodMat);
    c1.position.set(3.45, 0.52, 2.45);
    c1.rotation.y = 0.18;
    c1.castShadow = true;
    c1.receiveShadow = true;
    const c2 = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.55, 0.62), this.woodMat);
    c2.position.set(3.4, 1.15, 2.48);
    c2.rotation.y = -0.25;
    c2.castShadow = true;
    this.group.add(c1, c2);
    this.physics.addBoxCollider(
      HOUSE_CENTER_X + 2.95, HOUSE_CENTER_X + 3.95,
      HOUSE_CENTER_Z + 1.98, HOUSE_CENTER_Z + 2.92,
      0, 1.6
    );
  }

  _buildExteriorPropsAndWell() {
    // Rusted oil drums beside east ruin wall
    const drumGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.94, 12);
    const drumPositions = [
      [5.35, 0.45, 1.8],
      [5.65, 0.45, 0.95],
      [-5.35, 0.45, 3.6],
    ];
    drumPositions.forEach(([dx, dy, dz]) => {
      const drum = new THREE.Mesh(drumGeo, this.metalMat);
      const gy = getTerrainHeight(HOUSE_CENTER_X + dx, HOUSE_CENTER_Z + dz) - HOUSE_BASE_Y;
      drum.position.set(dx, gy + dy, dz);
      drum.castShadow = true;
      drum.receiveShadow = true;
      this.group.add(drum);
      this.physics.addCylinderCollider(HOUSE_CENTER_X + dx, HOUSE_CENTER_Z + dz, 0.38, gy + 1.2);
    });

    // Collapsed stone water well in back-west courtyard (Story Clue #4 location!)
    const wellX = -6.8;
    const wellZ = -7.6;
    const wellY = getTerrainHeight(HOUSE_CENTER_X + wellX, HOUSE_CENTER_Z + wellZ) - HOUSE_BASE_Y;
    const wellGroup = new THREE.Group();
    wellGroup.position.set(wellX, wellY, wellZ);

    const wellRing = new THREE.Mesh(new THREE.CylinderGeometry(1.18, 1.28, 0.95, 12, 1, true), this.stoneMat);
    wellRing.position.y = 0.45;
    wellRing.castShadow = true;
    wellRing.receiveShadow = true;
    const wellRim = new THREE.Mesh(new THREE.TorusGeometry(1.18, 0.16, 7, 14), this.stoneMat);
    wellRim.rotation.x = Math.PI / 2;
    wellRim.position.y = 0.92;
    wellRim.castShadow = true;
    const wellDark = new THREE.Mesh(
      new THREE.CircleGeometry(1.06, 12),
      new THREE.MeshBasicMaterial({ color: 0x0b0704 })
    );
    wellDark.rotation.x = -Math.PI / 2;
    wellDark.position.y = 0.35;
    // Wooden pulley frame (one side broken)
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.0, 0.12), this.woodMat);
    p1.position.set(-1.12, 1.0, 0);
    p1.castShadow = true;
    const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.45, 0.12), this.woodMat);
    p2.position.set(1.12, 0.72, 0);
    p2.rotation.z = -0.18;
    p2.castShadow = true;
    const cross = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 2.35, 6), this.woodMat);
    cross.rotation.z = Math.PI / 2 - 0.15;
    cross.position.set(0, 1.72, 0);
    wellGroup.add(wellRing, wellRim, wellDark, p1, p2, cross);
    this.group.add(wellGroup);
    this.physics.addCylinderCollider(HOUSE_CENTER_X + wellX, HOUSE_CENTER_Z + wellZ, 1.32, wellY + 1.5);

    // Half-buried weathered wooden fence posts along the desert path
    const fenceCoords = [
      [-10.5, 4.0, 0.14], [-11.8, 1.2, -0.12], [-12.6, -2.0, 0.22],
      [9.5, 3.8, -0.18], [10.8, 0.6, 0.1],
    ];
    fenceCoords.forEach(([fx, fz, tilt]) => {
      const fy = getTerrainHeight(HOUSE_CENTER_X + fx, HOUSE_CENTER_Z + fz) - HOUSE_BASE_Y;
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.075, 1.35, 6), this.woodMat);
      post.position.set(fx, fy + 0.55, fz);
      post.rotation.z = tilt;
      post.castShadow = true;
      this.group.add(post);
    });

    // Antenna Electrical Junction Box on Exterior East Wall (Story Clue #5!)
    const boxGroup = new THREE.Group();
    boxGroup.position.set(4.78, 1.38, -1.65);
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.56, 0.44), this.metalMat);
    housing.castShadow = true;
    this.switchLever = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.28, 0.06), this.brassMat);
    this.switchLever.position.set(0.16, 0.04, 0.08);
    this.switchLever.rotation.z = -0.55; // OFF position initially
    boxGroup.add(housing, this.switchLever);
    this.group.add(boxGroup);
  }

  _buildStoryClues() {
    // Helper to register an interactive story object + subtle golden shimmer marker
    const registerClue = (id, label, worldPos, mesh, radius = 3.2) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.11, 0.16, 18),
        new THREE.MeshBasicMaterial({
          color: 0xffd27d,
          transparent: true,
          opacity: 0.78,
          side: THREE.DoubleSide,
          depthTest: false,
        })
      );
      ring.position.copy(worldPos).add(new THREE.Vector3(0, 0.34, 0));
      ring.renderOrder = 10;
      this.scene.add(ring);

      this.interactables.push({
        id,
        label,
        worldPos: worldPos.clone(),
        mesh,
        radius,
        ringMesh: ring,
        collected: false,
      });
    };

    // CLUE 1: Cracked Brass Compass resting on the sandstone boulder near wake-up spot (-6.2, 4.8)
    const c1Y = getTerrainHeight(-6.2, 4.8) + 0.66;
    const compassGroup = new THREE.Group();
    compassGroup.position.set(-6.2, c1Y, 4.8);
    const cBody = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.05, 16), this.brassMat);
    const cFace = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.11, 0.055, 16),
      new THREE.MeshStandardMaterial({ color: 0xefe3c8, roughness: 0.4 })
    );
    const needle = new THREE.Mesh(
      new THREE.BoxGeometry(0.02, 0.02, 0.17),
      new THREE.MeshBasicMaterial({ color: 0xb52b1d })
    );
    needle.position.y = 0.032;
    this.compassNeedle = needle;
    compassGroup.add(cBody, cFace, needle);
    this.scene.add(compassGroup);
    registerClue('compass', 'فحص البوصلة المحطمة', new THREE.Vector3(-6.2, c1Y, 4.8), compassGroup, 3.6);

    // CLUE 2: Abandoned Expedition Canteen & Satchel on porch crate under the awning
    const porchCrate = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.56, 0.64), this.woodMat);
    porchCrate.position.set(-2.65, 0.3, 4.9);
    porchCrate.castShadow = true;
    porchCrate.receiveShadow = true;
    this.group.add(porchCrate);

    const canteen = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.15, 0.28, 12), this.metalMat);
    canteen.rotation.z = 0.52;
    canteen.position.set(-2.55, 0.68, 4.92);
    const satchel = new THREE.Mesh(
      new THREE.BoxGeometry(0.36, 0.12, 0.28),
      new THREE.MeshStandardMaterial({ color: 0x6e4b2c, roughness: 0.92 })
    );
    satchel.position.set(-2.82, 0.63, 4.84);
    satchel.rotation.y = 0.35;
    this.group.add(canteen, satchel);

    const c2World = new THREE.Vector3(HOUSE_CENTER_X - 2.65, HOUSE_BASE_Y + 0.72, HOUSE_CENTER_Z + 4.9);
    registerClue('canteen', 'فحص حقيبة البعثة والزمزمية', c2World, canteen, 3.4);

    // CLUE 3: Torn Field Journal on the interior wooden desk
    const journal = new THREE.Mesh(
      new THREE.BoxGeometry(0.32, 0.04, 0.42),
      new THREE.MeshStandardMaterial({ color: 0xdcc79c, roughness: 0.88 })
    );
    journal.position.set(-2.82, 1.05, -0.22);
    journal.rotation.y = 0.26;
    this.group.add(journal);

    const c3World = new THREE.Vector3(HOUSE_CENTER_X - 2.82, HOUSE_BASE_Y + 1.08, HOUSE_CENTER_Z - 0.22);
    registerClue('journal', 'قراءة دفتر الملاحظات الممزق', c3World, journal, 3.4);

    // CLUE 4: Faded Expedition Photograph & Metal Box on the collapsed stone well rim
    const wellX = HOUSE_CENTER_X - 6.8;
    const wellZ = HOUSE_CENTER_Z - 7.6;
    const wellY = getTerrainHeight(wellX, wellZ);
    const photoBox = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.14, 0.26), this.metalMat);
    photoBox.position.set(wellX + 0.95, wellY + 1.02, wellZ + 0.55);
    photoBox.rotation.y = 0.4;
    this.scene.add(photoBox);
    registerClue('well_photo', 'فحص الصندوق القديم عند البئر', new THREE.Vector3(wellX + 0.95, wellY + 1.06, wellZ + 0.55), photoBox, 3.6);

    // CLUE 5: Wind-Vane Antenna Junction Box Switch on East Exterior Wall
    const c5World = new THREE.Vector3(HOUSE_CENTER_X + 4.82, HOUSE_BASE_Y + 1.38, HOUSE_CENTER_Z - 1.65);
    registerClue('antenna_box', 'تشغيل قاطع برج الهوائي', c5World, this.switchLever, 3.4);

    // CLUE 6: Analog Field Radio inside the right alcove (Chapter 1 Climax!)
    const c6World = new THREE.Vector3(HOUSE_CENTER_X + 2.88, HOUSE_BASE_Y + 1.24, HOUSE_CENTER_Z - 2.72);
    registerClue('radio', 'تشغيل المذياع التناظري', c6World, this.radioLight, 3.4);
  }

  setAntennaPowered(powered) {
    if (this.switchLever) {
      this.switchLever.rotation.z = powered ? 0.55 : -0.55;
    }
    if (this.radioGlowMat) {
      this.radioGlowMat.emissiveIntensity = powered ? 1.85 : 0.05;
    }
    if (this.radioLight) {
      this.radioLight.intensity = powered ? 1.6 : 0;
    }
  }

  unlockHatch() {
    this.hatchUnlocked = true;
    if (this.hatchMesh) {
      // Slightly ajar metallic cellar hatch hinting at Chapter 2!
      this.hatchMesh.position.y = 0.34;
      this.hatchMesh.rotation.x = -0.22;
    }
  }

  _optimizeStaticBatches() {
    // Merge non-animated meshes sharing adobeMat / woodMat / metalMat / darkMetalMat into 1 draw call each!
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

      // Build clean attribute-matched BufferGeometry so mergeGeometries never rejects mismatches
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
    // Spin wind-vane turbine smoothly in the desert breeze (faster at Asr!)
    if (this.windTurbine) {
      this.windTurbine.rotation.x += dt * (2.6 + timeOfDay * 2.2 + Math.sin(elapsed * 0.7) * 0.8);
    }
    if (this.windVane) {
      this.windVane.rotation.y = 0.35 + Math.sin(elapsed * 0.42) * 0.28;
    }

    // Gentle breeze ripple on the tattered burlap porch awning
    if (this.awningCloth) {
      const cp = this.awningCloth.geometry.attributes.position;
      const amp = 0.032 + timeOfDay * 0.022;
      for (let i = 0; i < cp.count; i++) {
        const x = cp.getX(i);
        const z = cp.getZ(i);
        const flutter = Math.sin(elapsed * 3.4 + x * 2.1 + z * 1.8) * amp;
        cp.setY(i, this.clothBaseY[i] + flutter);
      }
      cp.needsUpdate = true;
    }

    // Erratic compass needle trembling toward the antenna
    if (this.compassNeedle) {
      this.compassNeedle.rotation.y = 0.4 + Math.sin(elapsed * 5.2) * 0.25 + Math.cos(elapsed * 13.0) * 0.08;
    }

    // Subtle pulsing interaction markers oriented toward camera when player is within 18m
    for (let i = 0; i < this.interactables.length; i++) {
      const item = this.interactables[i];
      if (!item.ringMesh) continue;
      if (item.collected) {
        item.ringMesh.visible = false;
        continue;
      }
      const dist = camera.position.distanceTo(item.worldPos);
      if (dist < 18) {
        item.ringMesh.visible = true;
        item.ringMesh.lookAt(camera.position);
        const pulse = 0.85 + Math.sin(elapsed * 3.6 + i) * 0.18;
        item.ringMesh.scale.setScalar(pulse);
        item.ringMesh.material.opacity = THREE.MathUtils.clamp((1 - dist / 18) * 0.9, 0.1, 0.85);
      } else {
        item.ringMesh.visible = false;
      }
    }
  }
}
