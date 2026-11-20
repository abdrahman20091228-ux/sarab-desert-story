import * as THREE from 'three';
import { getTerrainHeight } from './TerrainMath.js';

/**
 * Vast Arabian Desert Environment optimized for steady 60FPS:
 * - High-detail central playable dune terrain (380x380m) with baked vertex AO + custom sand sparkle/macro variation
 * - Seamless infinite outer horizon dune skirt (1500x1500m)
 * - Instanced sandstone rock outcrops with baked contact shadow decals
 * - Instanced dry desert acacia shrubs with subtle wind sway
 * - Footprints trail leading from wake-up spot to the abandoned outpost
 * - Sunlit drifting atmospheric desert dust particles
 */
export class DesertWorld {
  constructor(scene, textureManager, physics, settings) {
    this.scene = scene;
    this.tex = textureManager;
    this.physics = physics;
    this.settings = settings;

    this.group = new THREE.Group();
    this.scene.add(this.group);

    this._createTerrain();
    this._createHorizonSkirt();
    this._createRocks();
    this._createDesertShrubs();
    this._createFootprintTrail();
    this._createDustParticles();
  }

  _createSandMaterial(repeatX, repeatY, isFar = false) {
    const pbr = this.tex.loadPBRSet('sand', repeatX, repeatY);
    const mat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: isFar ? null : pbr.normalMap,
      normalScale: new THREE.Vector2(1.15, 1.15),
      roughnessMap: isFar ? null : pbr.roughnessMap,
      roughness: 0.91,
      metalness: 0.02,
      vertexColors: true,
    });

    if (!isFar) {
      // Inject macro dune variation + realistic desert sand micro-glint sparkle without breaking Three.js PBR!
      mat.onBeforeCompile = (shader) => {
        shader.vertexShader = shader.vertexShader
          .replace(
            '#include <common>',
            `#include <common>
             varying vec3 vDesertWorldPos;`
          )
          .replace(
            '#include <worldpos_vertex>',
            `#include <worldpos_vertex>
             vDesertWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`
          );

        shader.fragmentShader = shader.fragmentShader
          .replace(
            '#include <common>',
            `#include <common>
             varying vec3 vDesertWorldPos;
             float sandHash(vec2 p) {
               return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
             }`
          )
          .replace(
            '#include <color_fragment>',
            `#include <color_fragment>
             // Break up texture tiling across vast distances with warm wind-swept macro color shifts
             float macroWave = sin(vDesertWorldPos.x * 0.045 + vDesertWorldPos.z * 0.032) * 0.5 + 0.5;
             float macroWave2 = cos(vDesertWorldPos.x * 0.019 - vDesertWorldPos.z * 0.027) * 0.5 + 0.5;
             vec3 warmTint = mix(vec3(0.95, 0.91, 0.84), vec3(1.06, 0.99, 0.90), macroWave * 0.65 + macroWave2 * 0.35);
             diffuseColor.rgb *= warmTint;`
          )
          .replace(
            '#include <dithering_fragment>',
            `// Subtle silica quartz sand glint when close to the camera
             float camDist = length(cameraPosition - vDesertWorldPos);
             if (camDist < 28.0) {
               vec2 sparkleCell = floor(vDesertWorldPos.xz * 24.0);
               vec3 viewDirW = normalize(cameraPosition - vDesertWorldPos);
               float glint = sandHash(sparkleCell + floor(viewDirW.xz * 18.0));
               float spark = smoothstep(0.994, 0.9995, glint) * (1.0 - camDist / 28.0);
               gl_FragColor.rgb += vec3(1.0, 0.94, 0.78) * spark * 0.38;
             }
             #include <dithering_fragment>`
          );
      };
    }

    return mat;
  }

  _createTerrain() {
    const size = 380;
    const segments = 160;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y = getTerrainHeight(x, z);
      pos.setY(i, y);

      // Compute slope & baked ambient occlusion around house perimeter and dune troughs
      const hR = getTerrainHeight(x + 1.5, z);
      const hF = getTerrainHeight(x, z + 1.5);
      const slope = Math.hypot(hR - y, hF - y) / 1.5;

      // Subtle darker baked AO right around the house walls
      const dxH = x;
      const dzH = z + 12;
      const boxDist = Math.max(Math.abs(dxH) - 5.2, Math.abs(dzH) - 4.4);
      const houseAO = boxDist < 1.8 && boxDist > -4.8 ? THREE.MathUtils.clamp(0.76 + Math.max(0, boxDist) * 0.13, 0.76, 1.0) : 1.0;

      // Dune crest warm highlight vs trough slightly deeper ochre
      const crestBoost = THREE.MathUtils.clamp(0.92 + y * 0.014 - slope * 0.08, 0.82, 1.08);
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
    // Seamless far dunes extending 1500m to the desert horizon with low vertex count
    const size = 1500;
    const segments = 68;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.max(Math.abs(x), Math.abs(z));
      let y = getTerrainHeight(x, z);
      // Drop slightly inside inner zone so high-res terrain cleanly covers it with zero z-fighting
      if (dist < 186) {
        y -= 2.4;
      } else {
        // Dramatic sweeping distant desert ridges on the horizon
        const farFactor = Math.min(1, (dist - 186) / 260);
        const ridge = Math.sin(x * 0.008 + z * 0.006) * 16 + Math.cos(x * 0.005 - z * 0.009) * 14;
        y += ridge * farFactor;
      }
      pos.setY(i, y);

      const shade = THREE.MathUtils.clamp(0.95 + y * 0.004, 0.85, 1.06);
      colors[i * 3] = shade;
      colors[i * 3 + 1] = shade * 0.97;
      colors[i * 3 + 2] = shade * 0.93;
    }

    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    const mat = this._createSandMaterial(90, 90, true);
    const skirt = new THREE.Mesh(geo, mat);
    this.group.add(skirt);
  }

  _createRocks() {
    // Stratified desert sandstone boulders (1 InstancedMesh = 1 draw call!)
    const rockGeo = new THREE.DodecahedronGeometry(1.0, 1);
    const rp = rockGeo.attributes.position;
    // Sculpt organic eroded stratified desert boulders
    for (let i = 0; i < rp.count; i++) {
      let x = rp.getX(i);
      let y = rp.getY(i);
      let z = rp.getZ(i);
      const strata = 1.0 + 0.18 * Math.sin(y * 7.0 + x * 3.0) + 0.14 * Math.cos(z * 5.0);
      y *= 0.62; // Flatter desert mesa/sandstone shape
      rp.setXYZ(i, x * strata, y * strata, z * strata);
    }
    rockGeo.computeVertexNormals();

    const pbr = this.tex.loadPBRSet('sandstone_rock', 2, 2);
    const rockMat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: pbr.normalMap,
      normalScale: new THREE.Vector2(1.4, 1.4),
      roughnessMap: pbr.roughnessMap,
      roughness: 0.92,
      metalness: 0.03,
    });

    // Curated hero rock clusters + deterministic scattered desert outcrops
    const placements = [
      // Compass hero rock near wake-up clearing
      { x: -6.2, z: 4.8, sx: 1.05, sy: 0.65, sz: 0.95, ry: 0.6, collide: true },
      // Framing outcrops near the house (like our moodboard!)
      { x: -9.5, z: -7.5, sx: 1.9, sy: 1.15, sz: 1.6, ry: 1.2, collide: true },
      { x: -11.4, z: -8.6, sx: 1.1, sy: 0.75, sz: 1.0, ry: 2.3, collide: false },
      { x: 9.2, z: -9.0, sx: 2.1, sy: 1.35, sz: 1.8, ry: 0.4, collide: true },
      { x: 11.0, z: -10.8, sx: 1.2, sy: 0.85, sz: 1.3, ry: 1.9, collide: false },
      { x: -8.8, z: -18.5, sx: 2.4, sy: 1.5, sz: 2.0, ry: 2.7, collide: true },
      { x: 7.4, z: -21.2, sx: 1.8, sy: 1.1, sz: 1.5, ry: 0.9, collide: true },
      // Dramatic framing sandstone ridges along the western dune vista
      { x: -24, z: 3, sx: 4.5, sy: 2.5, sz: 3.2, ry: 0.5, collide: true },
      { x: -28, z: -24, sx: 5.2, sy: 3.1, sz: 3.8, ry: 1.4, collide: true },
      { x: 26, z: -16, sx: 4.2, sy: 2.4, sz: 3.6, ry: 2.1, collide: true },
      { x: 18, z: 14, sx: 3.1, sy: 1.6, sz: 2.5, ry: 1.1, collide: true },
    ];

    // Deterministic seeded scatter for 75 additional desert rocks across the expanse
    let seed = 4219;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let i = 0; i < 75; i++) {
      const angle = rand() * Math.PI * 2;
      const dist = 14 + Math.pow(rand(), 0.75) * 125;
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist - 6;
      // Keep clear of house interior & doorway path
      if (Math.abs(x) < 7.5 && z > -17.5 && z < -4.5) continue;
      if (Math.hypot(x + 8.5, z - 9.5) < 4.5) continue;

      const s = 0.45 + Math.pow(rand(), 1.9) * 3.1;
      placements.push({
        x,
        z,
        sx: s * (0.85 + rand() * 0.5),
        sy: s * (0.48 + rand() * 0.45),
        sz: s * (0.85 + rand() * 0.5),
        ry: rand() * Math.PI * 2,
        collide: s > 1.35,
      });
    }

    const instMesh = new THREE.InstancedMesh(rockGeo, rockMat, placements.length);
    instMesh.castShadow = true;
    instMesh.receiveShadow = true;

    // Baked contact shadow discs under rocks (1 InstancedMesh!)
    const shadowGeo = new THREE.PlaneGeometry(1, 1);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: this.tex.createContactShadowTexture(),
      transparent: true,
      depthWrite: false,
      opacity: 0.72,
    });
    const shadowInst = new THREE.InstancedMesh(shadowGeo, shadowMat, placements.length);

    const dummy = new THREE.Object3D();
    placements.forEach((p, idx) => {
      const y = getTerrainHeight(p.x, p.z);
      dummy.position.set(p.x, y + p.sy * 0.22, p.z);
      dummy.rotation.set((idx % 3) * 0.08, p.ry, ((idx + 1) % 3) * 0.07);
      dummy.scale.set(p.sx, p.sy, p.sz);
      dummy.updateMatrix();
      instMesh.setMatrixAt(idx, dummy.matrix);

      // Contact shadow decal flush with sand
      dummy.position.set(p.x, y + 0.04, p.z);
      dummy.rotation.set(0, p.ry, 0);
      dummy.scale.set(p.sx * 2.5, 1, p.sz * 2.5);
      dummy.updateMatrix();
      shadowInst.setMatrixAt(idx, dummy.matrix);

      if (p.collide) {
        this.physics.addCylinderCollider(p.x, p.z, Math.max(p.sx, p.sz) * 0.72, y + p.sy + 1.5);
      }
    });

    instMesh.instanceMatrix.needsUpdate = true;
    shadowInst.instanceMatrix.needsUpdate = true;
    this.group.add(instMesh);
    this.group.add(shadowInst);
  }

  _createDesertShrubs() {
    // Organic gnarled desert scrub bushes (multi-segment bent woody stems)
    const branches = [];
    const twigCount = 14;
    for (let i = 0; i < twigCount; i++) {
      const angle = (i / twigCount) * Math.PI * 2 + (i % 3) * 0.24;
      const tilt = 0.48 + (i % 4) * 0.22;
      const h = 0.28 + (i % 3) * 0.11;
      const cyl = new THREE.CylinderGeometry(0.007, 0.018, h, 4);
      cyl.translate(0, h / 2, 0);
      cyl.rotateZ(tilt);
      cyl.rotateY(angle);
      branches.push(cyl);

      // Forked sub-twig for natural dry desert acacia silhouette
      const sub = new THREE.CylinderGeometry(0.004, 0.01, h * 0.65, 4);
      sub.translate(0, h * 0.32, 0);
      sub.rotateZ(tilt + 0.42);
      sub.rotateY(angle + 0.55);
      sub.translate(Math.sin(angle) * h * 0.35, h * 0.48, Math.cos(angle) * h * 0.35);
      branches.push(sub);
    }

    const mergedGeo = this._mergeGeometriesSimple(branches);
    branches.forEach((b) => b.dispose());

    const shrubMat = new THREE.MeshStandardMaterial({
      color: 0x7c6748,
      roughness: 0.98,
      metalness: 0.0,
    });

    const count = 64;
    this.shrubInst = new THREE.InstancedMesh(mergedGeo, shrubMat, count);
    this.shrubInst.castShadow = true;
    this.shrubBaseMatrices = [];

    let seed = 8821;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const dummy = new THREE.Object3D();
    let placed = 0;
    for (let i = 0; i < 140 && placed < count; i++) {
      const a = rand() * Math.PI * 2;
      const d = 8.5 + Math.pow(rand(), 0.85) * 90;
      const x = Math.cos(a) * d;
      const z = Math.sin(a) * d - 8;
      if (Math.abs(x) < 6.5 && z > -17 && z < -6.5) continue;
      const y = getTerrainHeight(x, z);
      const s = 0.72 + rand() * 0.85;

      dummy.position.set(x, y - 0.04, z);
      dummy.rotation.set(0, rand() * Math.PI * 2, 0);
      dummy.scale.set(s * 1.15, s * 0.78, s * 1.15);
      dummy.updateMatrix();
      this.shrubInst.setMatrixAt(placed, dummy.matrix);
      this.shrubBaseMatrices.push({ x, y: y - 0.04, z, ry: dummy.rotation.y, sx: dummy.scale.x, sy: dummy.scale.y, sz: dummy.scale.z, phase: rand() * 6.28 });
      placed++;
    }
    this.shrubInst.count = placed;
    this.shrubInst.instanceMatrix.needsUpdate = true;
    this.group.add(this.shrubInst);
  }

  _createFootprintTrail() {
    // Subtle mysterious footprints leading from protagonist's wake-up spot toward the abandoned house!
    const footGeo = new THREE.PlaneGeometry(0.28, 0.56);
    footGeo.rotateX(-Math.PI / 2);
    const footMat = new THREE.MeshBasicMaterial({
      map: this.tex.createFootprintTexture(),
      transparent: true,
      depthWrite: false,
      opacity: 0.72,
    });

    const steps = 22;
    const inst = new THREE.InstancedMesh(footGeo, footMat, steps);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      const x = THREE.MathUtils.lerp(-7.8, 0.0, t) + Math.sin(t * Math.PI) * -1.4;
      const z = THREE.MathUtils.lerp(8.4, -7.0, t);
      const side = (i % 2 === 0 ? 1 : -1) * 0.16;
      const px = x + side;
      const pz = z;
      const py = getTerrainHeight(px, pz) + 0.028;

      dummy.position.set(px, py, pz);
      dummy.rotation.set(0, Math.atan2(0 - (-7.8), -7.0 - 8.4), 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    }
    inst.instanceMatrix.needsUpdate = true;
    this.group.add(inst);
  }

  _createDustParticles() {
    const maxCount = 850;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(maxCount * 3);
    const seeds = new Float32Array(maxCount * 3);

    for (let i = 0; i < maxCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 64;
      // Keep blowing sand dust concentrated low over the dunes (0.15m to 4.2m) so it never looks like stars in sky!
      positions[i * 3 + 1] = 0.15 + Math.pow(Math.random(), 1.8) * 4.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 64;
      seeds[i * 3] = Math.random() * 6.28;
      seeds[i * 3 + 1] = 0.7 + Math.random() * 1.4;
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
      blending: THREE.NormalBlending,
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
    // Animate sunlit blowing desert dust around player near ground level
    const pos = this.dustPoints.geometry.attributes.position;
    const drawCount = this.dustPoints.geometry.drawRange.count || this.dustMaxCount;
    const windSpeed = 2.4 + timeOfDay * 1.2;

    for (let i = 0; i < drawCount; i++) {
      let x = pos.getX(i) + windSpeed * dt * this.dustSeeds[i * 3 + 1];
      let y = pos.getY(i) + Math.sin(elapsed * 1.1 + this.dustSeeds[i * 3]) * 0.12 * dt;
      let z = pos.getZ(i) + 0.55 * windSpeed * dt * this.dustSeeds[i * 3 + 1];

      if (x - playerPos.x > 32) x -= 64;
      if (x - playerPos.x < -32) x += 64;
      if (z - playerPos.z > 32) z -= 64;
      if (z - playerPos.z < -32) z += 64;
      if (y < 0.15) y = 3.8;
      if (y > 4.6) y = 0.25;

      pos.setXYZ(i, x, y, z);
    }
    pos.needsUpdate = true;

    this.dustMat.color.lerpColors(
      new THREE.Color('#eed5ad'),
      new THREE.Color('#f7b56b'),
      Math.pow(timeOfDay, 1.2)
    );
    this.dustMat.opacity = THREE.MathUtils.lerp(0.24, 0.36, timeOfDay);
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
        for (let k = 0; k < idx.length; k++) {
          idxArr[iOffset + k] = idx[k] + vOffset;
        }
        iOffset += idx.length;
      } else {
        for (let k = 0; k < p.count; k++) {
          idxArr[iOffset + k] = vOffset + k;
        }
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
