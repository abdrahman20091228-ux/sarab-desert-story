import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { DESERT_PALETTE, STAGE_ATMOSPHERES, attachDesertGrading } from '../engine/Palette.js';
import {
  bakeTerrainLightingAndContactAO,
  bakeRockContactAO,
  createBakedArchitecturalBox,
  createContactAODecalInstanced,
  disposeHierarchy,
} from '../engine/BakedAO.js';
import {
  STAGE_TERRAIN_CONFIG,
  STAGE4_HOUSE_X,
  STAGE4_HOUSE_Z,
  STAGE4_HOUSE_BASE_Y,
  getCanyonCenterX,
  getCanyonHalfWidth,
  getRidgeCenterX,
  getRidgeHalfWidth,
  getStage1SabkhaMask,
  getStage2RockMask,
  getStage3RockMask,
  getStageAnalyticHeight,
  createStageHeightSampler,
  createStageNormalSampler,
  createStageSurfaceSampler,
  getMesaVisualRadiusAt,
} from './StageTerrain.js';
import { AbandonedHouse } from './AbandonedHouse.js';
import { IS_MOBILE } from '../engine/Settings.js';

export const STAGE_METADATA = {
  1: {
    id: 1,
    title: 'سهول السراب المفتوحة',
    subtitle: 'الظهر • رُجُم حجرية وسبخة متشققة',
    timeLabel: '١٢:٣٠ ظهراً',
    objective: 'اتبع الرُّجُم الحجرية عبر السبخة نحو مدخل الوادي',
    startPos: { x: 0, z: 114, yaw: 0.0, pitch: -0.02 },
    goalPos: { x: 6, z: -116 },
    goalRadius: 9.5,
    whispers: [
      { distZ: 108, text: 'شمس الظهيرة تصهر الأفق... سأتبع هذه الرُّجُم الحجرية شمالاً.' },
      { distZ: 28, text: 'أرض سبخة متشققة تحت قدميّ... كأن بحيرة قديمة جفّت هنا منذ قرون.' },
      { distZ: -64, text: 'البوابة الصخرية تلوح في الأفق... هناك وادٍ ضيق خلف هذه الكثبان.' },
    ],
  },
  2: {
    id: 2,
    title: 'وادي الصخور والتضاريس',
    subtitle: 'العصر • جروف طبقية ونخيل وأطلال وهبّة غبار',
    timeLabel: '٣:٥٠ عصراً',
    objective: 'اعبر وادي الصخور والأطلال نحو ممر الصعود للجبل',
    startPos: { x: getCanyonCenterX(118), z: 118, yaw: 0.0, pitch: -0.02 },
    goalPos: { x: getCanyonCenterX(-122), z: -122 },
    goalRadius: 9.5,
    whispers: [
      { distZ: 112, text: 'ظلال العصر تطول بين هذه الجروف الطبقية... والغبار يهبّ بهدوء.' },
      { distZ: 46, text: 'أطلال قديمة نصف مدفونة في الرمل... من سكن هذا الوادي يوماً؟' },
      { distZ: -8, text: 'نخيل يصمد وسط العطش... الطريق يضيق ويرتفع نحو الجبل.' },
    ],
  },
  3: {
    id: 3,
    title: 'قمة جبل السراب',
    subtitle: 'الغروب والشفق • إطلالة على بحر الكثبان وبصيص نور بعيد',
    timeLabel: '٦:١٢ مغرباً',
    objective: 'اصعد إلى قمة الجبل وتأمل بحر الكثبان والضوء البعيد',
    startPos: { x: getRidgeCenterX(106), z: 106, yaw: 0.0, pitch: 0.04 },
    goalPos: { x: getRidgeCenterX(-102), z: -102 },
    goalRadius: 4.5,
    whispers: [
      { distZ: 98, text: 'الريح تشتد كلما ارتفعت... والشمس تغوص في الشفق.' },
      { distZ: 12, text: 'بحر لا ينتهي من الكثبان يتمدد أسفل الجبل... المنظر يخطف الأنفاس.' },
      { distZ: -62, text: 'أرى بصيص نور دافئ يلمع بعيداً وسط الكثبان في الأسفل... هناك بيت مهجور!' },
    ],
  },
  4: {
    id: 4,
    title: 'البيت المهجور تحت النجوم',
    subtitle: 'الليل • سماء النجوم والمجرة والهلال — اضغط F أو زر الكشاف',
    timeLabel: '١٠:٤٠ ليلاً',
    objective: 'اقترب من البيت المهجور تحت النجوم واستكشفه بالكشاف',
    startPos: { x: -4, z: 122, yaw: 0.02, pitch: -0.02 },
    goalPos: { x: STAGE4_HOUSE_X + 0.1, z: STAGE4_HOUSE_Z - 2.0 },
    goalRadius: 4.0,
    whispers: [
      { distZ: 116, text: 'حلّ الليل وتلألأت المجرة والهلال... سأشعل الكشاف وأسير نحو ذلك الضوء.' },
      { distZ: 34, text: 'أصوات صراصير الليل والنسيم البارد... نور البيت يقترب.' },
      { distZ: -44, text: 'وصلت أخيراً إلى البيت المهجور... مصباح مشتعل ينتظرني في الداخل.' },
    ],
  },
};

export class StageManager {
  constructor(scene, texManager, modelManager, physics, skyLighting, settings) {
    this.scene = scene;
    this.tex = texManager;
    this.models = modelManager;
    this.physics = physics;
    this.sky = skyLighting;
    this.settings = settings;

    this.currentStageId = 0;
    this.stageGroup = null;
    this.getHeight = createStageHeightSampler(1);
    this.getNormal = createStageNormalSampler(this.getHeight);

    this.abandonedHouse = null;
    this.palmTimeUniform = { value: 0 };
    this.palmStormUniform = { value: 0 };
    this.dustUniforms = null;
    this.dustPoints = null;
    this.hawks = [];
    this.hawkInst = null;
    this.beaconSprite = null;
    this.goalRingMesh = null;
    this.stormIntensity = 0;

    this._dummy = new THREE.Object3D();
    this._faunaAccum = 0;
    this._baseDustCount = 200;
    this._dustMaxCount = 300;
  }

  getStageMeta(stageId = this.currentStageId) {
    return STAGE_METADATA[stageId] || STAGE_METADATA[1];
  }

  /**
   * Completely unloads and disposes the previous stage's geometries, materials, lights, and colliders!
   */
  disposeCurrentStage() {
    const { geometries: sharedGeos, materials: sharedMats } = this.models.getSharedSets();

    if (this.abandonedHouse) {
      this.abandonedHouse.dispose(sharedGeos, sharedMats);
      this.abandonedHouse = null;
    }

    if (this.beaconSprite?.material?.map) {
      this.beaconSprite.material.map.dispose();
    }
    this.beaconSprite = null;
    this.goalRingMesh = null;
    this.dustPoints = null;
    this.dustUniforms = null;
    this.hawkInst = null;
    this.hawks.length = 0;

    if (this.stageGroup) {
      disposeHierarchy(this.stageGroup, sharedGeos, sharedMats);
      this.scene.remove(this.stageGroup);
      this.stageGroup = null;
    }

    this.physics.clear();
  }

  loadStage(stageId) {
    this.disposeCurrentStage();

    const id = STAGE_METADATA[stageId] ? stageId : 1;
    this.currentStageId = id;
    this.stageGroup = new THREE.Group();
    this.stageGroup.name = `stage_${id}`;
    this.scene.add(this.stageGroup);

    // 1. Apply stage sky, sun/moon direction, fog, and lighting palette FIRST so baking uses exact sunDir!
    this.sky.applyStage(id, true);
    this.stormIntensity = STAGE_ATMOSPHERES[id].stormBase || 0;

    // 2. Configure exact visual-physics terrain & surface samplers
    this.getHeight = createStageHeightSampler(id);
    this.getNormal = createStageNormalSampler(this.getHeight);
    const surfaceSampler = createStageSurfaceSampler(id, this.getHeight);

    let bounds = { type: 'box', minX: -145, maxX: 145, minZ: -145, maxZ: 145 };
    let maxSlope = 0.94;
    if (id === 2) {
      bounds = {
        type: 'corridor',
        minZ: -132,
        maxZ: 132,
        centerXFn: getCanyonCenterX,
        halfWidthFn: (z) => getCanyonHalfWidth(z) + 2.5,
      };
      maxSlope = 0.88;
    } else if (id === 3) {
      bounds = {
        type: 'corridor',
        minZ: -112,
        maxZ: 118,
        centerXFn: getRidgeCenterX,
        halfWidthFn: (z) => getRidgeHalfWidth(z) - 0.5,
      };
      maxSlope = 0.85;
    } else if (id === 4) {
      bounds = { type: 'box', minX: -115, maxX: 115, minZ: -115, maxZ: 142 };
    }

    this.physics.configureStage({
      heightSampler: this.getHeight,
      surfaceSampler,
      bounds,
      maxSlope,
    });

    // 3. Collect contact-AO occluders while building landmarks, THEN bake terrain lighting & Contact AO!
    const contactOccluders = [];
    const decalPlacements = [];

    if (id === 1) {
      this._buildStage1Plains(contactOccluders, decalPlacements);
    } else if (id === 2) {
      this._buildStage2Canyon(contactOccluders, decalPlacements);
    } else if (id === 3) {
      this._buildStage3Summit(contactOccluders, decalPlacements);
    } else if (id === 4) {
      this._buildStage4Night(contactOccluders, decalPlacements);
    }

    // 4. Build Terrain with Baked Lighting + Object Contact AO + Dual PBR NormalMap Blending!
    this._buildStageTerrain(id, contactOccluders);
    this._buildHorizonSkirt(id);

    // 5. Instanced Ground Contact AO decals (1 draw call for entire stage!)
    if (decalPlacements.length > 0) {
      const decalOpacity = id === 4 ? 0.52 : 0.44;
      const decalInst = createContactAODecalInstanced(this.tex, decalPlacements, this.getHeight, this.getNormal, decalOpacity);
      if (decalInst) this.stageGroup.add(decalInst);
    }

    // 6. Stage-calibrated GPU ambient dust motes
    this._createGPUDustParticles(id);

    // 7. Subtle landmark ring at stage exit pass (Stages 1-3)
    if (id < 4) {
      const meta = STAGE_METADATA[id];
      const gy = this.getHeight(meta.goalPos.x, meta.goalPos.z);
      this._createGoalBeaconMarker(meta.goalPos.x, gy + 2.4, meta.goalPos.z, id);
    }

    this.applySettings(this.settings.getPreset());
    return STAGE_METADATA[id];
  }

  _buildStageTerrain(stageId, contactOccluders) {
    const cfg = STAGE_TERRAIN_CONFIG[stageId];
    const geo = new THREE.PlaneGeometry(cfg.size, cfg.size, cfg.segments, cfg.segments);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const blendArr = new Float32Array(pos.count);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y = getStageAnalyticHeight(stageId, x, z);
      pos.setY(i, y);

      if (stageId === 1) {
        blendArr[i] = getStage1SabkhaMask(x, z);
      } else if (stageId === 2) {
        blendArr[i] = getStage2RockMask(x, z);
      } else if (stageId === 3) {
        blendArr[i] = getStage3RockMask(x, z, y);
      } else {
        blendArr[i] = 0.0;
      }
    }

    geo.setAttribute('aBlend', new THREE.BufferAttribute(blendArr, 1));
    geo.computeVertexNormals();

    // Bake directional sky/sun lighting + crevice concavity AO + exact Object-to-Ground Contact AO!
    const isNight = stageId === 4;
    const isSunset = stageId === 3;
    bakeTerrainLightingAndContactAO(geo, this.getHeight, this.sky.sunDirection, {
      occluders: contactOccluders,
      sunStrength: isNight ? 0.14 : isSunset ? 0.24 : 0.18,
      cavityStrength: stageId === 2 ? 0.30 : 0.22,
      warmBounce: isNight ? [0.95, 0.98, 1.05] : isSunset ? [1.05, 0.94, 0.88] : [1.02, 0.99, 0.95],
      shadowTint: isNight ? [0.68, 0.74, 0.88] : isSunset ? [0.66, 0.56, 0.72] : [0.80, 0.74, 0.68],
    });

    const mat = this._createStageTerrainMaterial(stageId);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    this.stageGroup.add(mesh);
  }

  _createStageTerrainMaterial(stageId) {
    const atmos = STAGE_ATMOSPHERES[stageId];
    const sandRepeat = stageId === 3 ? 72 : 64;
    const sandPbr = this.tex.loadPBRSet('sand', sandRepeat, sandRepeat);

    let secondPbr = null;
    let secondRepeat = 52;
    if (stageId === 1) {
      secondPbr = this.tex.loadPBRSet('sabkha', 56, 56);
      secondRepeat = 56;
    } else if (stageId === 2) {
      secondPbr = this.tex.loadPBRSet('canyon_floor', 54, 54);
      secondRepeat = 54;
    } else if (stageId === 3) {
      secondPbr = this.tex.loadPBRSet('canyon_floor', 62, 62);
      secondRepeat = 62;
    }

    const useLambert = IS_MOBILE;
    const mat = useLambert
      ? new THREE.MeshLambertMaterial({
          map: sandPbr.map,
          normalMap: sandPbr.normalMap,
          normalScale: new THREE.Vector2(1.05, 1.05),
          vertexColors: true,
          color: atmos.sandTint,
        })
      : new THREE.MeshStandardMaterial({
          map: sandPbr.map,
          normalMap: sandPbr.normalMap,
          normalScale: new THREE.Vector2(1.08, 1.08),
          roughness: 0.92,
          metalness: 0.02,
          vertexColors: true,
          color: atmos.sandTint,
        });
    mat.name = `terrain_stage_${stageId}`;

    mat.onBeforeCompile = (shader) => {
      if (secondPbr) {
        shader.uniforms.uSecondMap = { value: secondPbr.map };
        shader.uniforms.uSecondNormal = { value: secondPbr.normalMap };
        shader.uniforms.uSecondRepeat = { value: secondRepeat };
      }
      shader.uniforms.uStageId = { value: stageId };

      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
           attribute float aBlend;
           varying float vBlend;
           varying vec3 vTerrainWorldPos;
           varying vec2 vTerrainRawUv;`
        )
        .replace(
          '#include <uv_vertex>',
          `#include <uv_vertex>
           vBlend = aBlend;
           vTerrainRawUv = uv;`
        )
        .replace(
          '#include <worldpos_vertex>',
          `#include <worldpos_vertex>
           vTerrainWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`
        );

      const secondUniforms = secondPbr
        ? `uniform sampler2D uSecondMap;
           uniform sampler2D uSecondNormal;
           uniform float uSecondRepeat;`
        : '';

      const blendColorCode = secondPbr
        ? `
          vec2 _uv2 = vTerrainRawUv * uSecondRepeat;
          vec3 _secCol = texture2D(uSecondMap, _uv2).rgb;
          // Stage 2 steep canyon walls get sedimentary horizontal strata bands!
          if (uStageId > 1.5 && uStageId < 2.5) {
            float wallGrad = smoothstep(5.5, 18.0, vTerrainWorldPos.y);
            float strata = sin(vTerrainWorldPos.y * 1.35 + sin(vTerrainWorldPos.x * 0.05 + vTerrainWorldPos.z * 0.05) * 1.4) * 0.5 + 0.5;
            vec3 strataCol = mix(vec3(0.42, 0.30, 0.21), vec3(0.68, 0.54, 0.39), strata);
            _secCol = mix(_secCol, strataCol, wallGrad * 0.72);
          }
          diffuseColor.rgb = mix(diffuseColor.rgb, _secCol, clamp(vBlend, 0.0, 1.0));
        `
        : '';

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
           ${secondUniforms}
           uniform float uStageId;
           varying float vBlend;
           varying vec3 vTerrainWorldPos;
           varying vec2 vTerrainRawUv;`
        )
        .replace(
          '#include <map_fragment>',
          `#include <map_fragment>
           ${blendColorCode}
           float _macro = sin(vTerrainWorldPos.x * 0.042 + vTerrainWorldPos.z * 0.036) * 0.5 + 0.5;
           diffuseColor.rgb *= mix(vec3(0.95, 0.91, 0.85), vec3(1.04, 1.0, 0.94), _macro);`
        );

      if (secondPbr) {
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <normal_fragment_maps>',
          `#ifdef USE_NORMALMAP_TANGENTSPACE
             vec3 _n1 = texture2D(normalMap, vNormalMapUv).xyz * 2.0 - 1.0;
             vec3 _n2 = texture2D(uSecondNormal, vTerrainRawUv * uSecondRepeat).xyz * 2.0 - 1.0;
             vec3 mapN = normalize(mix(_n1, _n2, clamp(vBlend, 0.0, 1.0)));
             mapN.xy *= normalScale;
             normal = normalize(tbn * mapN);
           #endif`
        );
      }
    };

    attachDesertGrading(mat, {
      saturation: stageId === 4 ? 0.86 : 0.93,
      contrast: 1.03,
      aerialStrength: stageId === 3 ? 0.38 : 0.0,
      aerialStart: 95,
      aerialEnd: 380,
    });

    return mat;
  }

  _buildHorizonSkirt(stageId) {
    const atmos = STAGE_ATMOSPHERES[stageId];
    const size = stageId === 3 ? 1850 : 1520;
    const segments = stageId === 3 ? 48 : 32;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);

    const innerHalf = STAGE_TERRAIN_CONFIG[stageId].size * 0.48;
    const pos = geo.attributes.position;
    const cols = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.max(Math.abs(x), Math.abs(z));
      let y;

      if (stageId === 3) {
        // Vast sculpted twilight Sea of Arabian Dunes stretching endlessly below the 92m mountain peak!
        const d1 = Math.sin(x * 0.022 + z * 0.017 + Math.sin(z * 0.01) * 1.4);
        const duneSea =
          Math.pow(1.0 - Math.abs(d1), 1.15) * 9.5 +
          Math.sin(x * 0.009 - z * 0.008) * 6.5 +
          Math.cos(x * 0.014 + z * 0.012) * 4.5 +
          5.0;
        y = dist < innerHalf ? duneSea - 4.0 : duneSea;
      } else {
        y = getStageAnalyticHeight(stageId, x, z);
        if (dist < innerHalf) {
          y -= 4.0;
        } else {
          const farFactor = Math.min(1, (dist - innerHalf) / 260);
          y += (Math.sin(x * 0.008 + z * 0.006) * 18 + Math.cos(x * 0.005 - z * 0.009) * 14) * farFactor;
        }
      }

      pos.setY(i, y);
      const shade = THREE.MathUtils.clamp(0.90 + y * 0.004, 0.78, 1.06);
      cols[i * 3] = shade;
      cols[i * 3 + 1] = shade * 0.96;
      cols[i * 3 + 2] = shade * 0.92;
    }

    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    geo.computeVertexNormals();

    const sandPbr = this.tex.loadPBRSet('sand', 88, 88);
    const mat = new THREE.MeshLambertMaterial({
      map: sandPbr.map,
      vertexColors: true,
      color: atmos.sandTint,
    });
    attachDesertGrading(mat, {
      saturation: 0.85,
      contrast: 1.0,
      aerialStrength: stageId === 3 ? 0.56 : 0.45,
      aerialStart: 150,
      aerialEnd: 620,
    });

    const mesh = new THREE.Mesh(geo, mat);
    this.stageGroup.add(mesh);
  }

  // ============================================================================
  // SHARED REUSABLE BUILDERS (Stone Cairns, Stratified Mesas/Cliffs, Palms, Rocks)
  // ============================================================================

  _createCairnGeometry() {
    // Authentic stacked Arabian stone cairn (رُجم حجري) of 5 tapered weathered limestone stones with Baked Contact AO!
    const stones = [];
    const layers = [
      { y: 0.24, rx: 0.72, ry: 0.26, rz: 0.64, ox: 0.0, oz: 0.0, rot: 0.1 },
      { y: 0.64, rx: 0.56, ry: 0.22, rz: 0.52, ox: 0.05, oz: -0.04, rot: 0.8 },
      { y: 0.98, rx: 0.42, ry: 0.19, rz: 0.39, ox: -0.04, oz: 0.03, rot: 1.6 },
      { y: 1.28, rx: 0.30, ry: 0.16, rz: 0.27, ox: 0.02, oz: 0.02, rot: 2.3 },
      { y: 1.54, rx: 0.19, ry: 0.14, rz: 0.18, ox: -0.01, oz: -0.01, rot: 0.5 },
    ];
    for (const l of layers) {
      const g = new THREE.IcosahedronGeometry(1.0, 1);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        let vx = p.getX(i);
        let vy = p.getY(i);
        let vz = p.getZ(i);
        const crag = 0.88 + 0.20 * Math.sin(vx * 5.2 + vz * 4.7) * Math.cos(vy * 3.8);
        vx *= l.rx * crag;
        vy *= l.ry * crag;
        vz *= l.rz * crag;
        p.setXYZ(i, vx, vy, vz);
      }
      g.rotateY(l.rot);
      g.translate(l.ox, l.y, l.oz);
      g.computeVertexNormals();
      // Bake stone-on-stone contact AO inside each stone layer!
      bakeRockContactAO(g, { bottomAO: 0.54, topLift: 1.04, undersideAO: 0.28 });
      stones.push(g);
    }
    const merged = mergeGeometries(stones, false);
    stones.forEach((g) => g.dispose());
    return merged;
  }

  _placeStoneCairns(sites, occluders, decals) {
    if (!sites.length) return;
    const cairnGeo = this._createCairnGeometry();
    const rockPbr = this.tex.loadPBRSet('sandstone_rock', 2, 2);
    const cairnMat = new THREE.MeshLambertMaterial({
      map: rockPbr.map,
      normalMap: IS_MOBILE ? null : rockPbr.normalMap,
      normalScale: new THREE.Vector2(0.75, 0.75),
      vertexColors: true,
      color: 0xeae0cc,
    });
    attachDesertGrading(cairnMat, { saturation: 0.68, contrast: 1.02 });

    const inst = new THREE.InstancedMesh(cairnGeo, cairnMat, sites.length);
    inst.castShadow = !IS_MOBILE;
    inst.receiveShadow = true;

    const dummy = this._dummy;
    sites.forEach((s, idx) => {
      const y = this.getHeight(s.x, s.z);
      const sc = s.scale ?? 1.0;
      dummy.position.set(s.x, y - 0.08 * sc, s.z);
      dummy.rotation.set(0, s.ry ?? idx * 1.1, 0);
      dummy.scale.setScalar(sc);
      dummy.updateMatrix();
      inst.setMatrixAt(idx, dummy.matrix);

      this.physics.addCylinderCollider(s.x, s.z, 0.72 * sc, y + 1.65 * sc, false);
      occluders.push({ type: 'circle', x: s.x, z: s.z, r: 0.85 * sc, pad: 1.6, strength: 0.34 });
      decals.push({ x: s.x, z: s.z, sx: 2.3 * sc, sz: 2.3 * sc, ry: s.ry ?? 0 });
    });
    inst.instanceMatrix.needsUpdate = true;
    this.stageGroup.add(inst);
  }

  _createStratifiedMesaGeo() {
    const mesaGeo = new THREE.CylinderGeometry(0.54, 1.08, 1.0, 16, 8, false);
    mesaGeo.translate(0, 0.5, 0);
    const mp = mesaGeo.attributes.position;
    for (let i = 0; i < mp.count; i++) {
      const x = mp.getX(i);
      const y = mp.getY(i);
      const z = mp.getZ(i);
      const r0 = Math.hypot(x, z);
      if (r0 > 1e-5) {
        const ang = Math.atan2(z, x);
        const targetR = getMesaVisualRadiusAt(ang, y);
        const baseLin = 1.08 + (0.54 - 1.08) * y;
        const mult = r0 >= baseLin * 0.9 ? targetR / r0 : targetR / Math.max(0.01, baseLin);
        mp.setXYZ(i, x * mult, y, z * mult);
      }
    }
    mesaGeo.computeVertexNormals();
    bakeRockContactAO(mesaGeo, { bottomAO: 0.52, topLift: 1.03, undersideAO: 0.25 });
    return mesaGeo;
  }

  _placeStratifiedMesas(mesas, occluders, stageId, addColliders = true) {
    if (!mesas.length) return;
    const mesaGeo = this._createStratifiedMesaGeo();
    const pbr = this.tex.loadPBRSet('sandstone_rock', 4, 2);
    const mesaMat = new THREE.MeshLambertMaterial({
      map: pbr.map,
      normalMap: IS_MOBILE ? null : pbr.normalMap,
      normalScale: new THREE.Vector2(0.85, 0.85),
      vertexColors: true,
      color: DESERT_PALETTE.mesaBase,
    });
    mesaMat.name = `mesa_strata_s${stageId}`;

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
           float _ml = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_ml), diffuseColor.rgb, 0.62);
           float bandCoord = vMesaWorldPos.y * 0.45 + sin(vMesaWorldPos.x * 0.03 + vMesaWorldPos.z * 0.025) * 0.75;
           float strata1 = sin(bandCoord * 3.2) * 0.5 + 0.5;
           float strata2 = sin(bandCoord * 9.0 + 1.3) * 0.5 + 0.5;
           vec3 paleLimestone = vec3(0.76, 0.65, 0.50);
           vec3 erodedOchre   = vec3(0.50, 0.37, 0.25);
           vec3 strataTint = mix(erodedOchre, paleLimestone, strata1 * 0.65 + strata2 * 0.35);
           diffuseColor.rgb *= mix(vec3(0.85), strataTint * 1.38, 0.72);
           // Base sand-dust blend + contact AO darkening where cliff meets ground
           float baseDust = smoothstep(0.26, 0.01, vMesaLocalY);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.58, 0.48, 0.35), baseDust * 0.48);`
        );
    };
    attachDesertGrading(mesaMat, {
      saturation: 0.80,
      contrast: 1.04,
      aerialStrength: stageId === 2 ? 0.32 : 0.48,
      aerialStart: 60,
      aerialEnd: 230,
    });

    const inst = new THREE.InstancedMesh(mesaGeo, mesaMat, mesas.length);
    inst.castShadow = !IS_MOBILE && stageId === 2;
    inst.receiveShadow = true;

    const dummy = this._dummy;
    mesas.forEach((m, idx) => {
      const gy = m.y !== undefined ? m.y : this.getHeight(m.x, m.z);
      dummy.position.set(m.x, gy - 4.5, m.z);
      dummy.rotation.set(0, m.ry || 0, 0);
      dummy.scale.set(m.sx, m.sy, m.sz);
      dummy.updateMatrix();
      inst.setMatrixAt(idx, dummy.matrix);

      if (addColliders) {
        this.physics.addMesaCollider(m.x, m.z, m.sx, m.sz, m.ry || 0, gy, m.sy);
      }
      occluders.push({ type: 'circle', x: m.x, z: m.z, rx: m.sx * 1.15, rz: m.sz * 1.15, pad: 4.5, strength: 0.42 });
    });
    inst.instanceMatrix.needsUpdate = true;
    this.stageGroup.add(inst);
  }

  _placeScannedRocks(placements, occluders, decals) {
    if (!placements.length) return;
    const geo0 = this.models.getGeometry('rock_07');
    const mat0 = this.models.getMaterial('rock_07');
    const geo1 = this.models.getGeometry('rock_09') || geo0;
    const mat1 = this.models.getMaterial('rock_09') || mat0;
    if (!geo0 || !mat0) return;

    const list0 = placements.filter((p) => (p.type || 0) === 0);
    const list1 = placements.filter((p) => (p.type || 0) === 1);
    const dummy = this._dummy;

    const buildInst = (list, geo, mat, type) => {
      if (!list.length) return;
      const inst = new THREE.InstancedMesh(geo, mat, list.length);
      inst.castShadow = !IS_MOBILE;
      inst.receiveShadow = true;
      list.forEach((p, i) => {
        const y = this.getHeight(p.x, p.z);
        const sink = p.sy * 0.05;
        dummy.position.set(p.x, y - sink, p.z);
        dummy.rotation.set(0, p.ry || 0, 0);
        dummy.scale.set(p.sx, p.sy, p.sz);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);

        const rx = p.sx * 0.265;
        const rz = p.sz * 0.49;
        const maxHFactor = type === 0 ? 0.44 : 0.23;
        const topY = y - sink + p.sy * maxHFactor;
        this.physics.addEllipseCollider(p.x, p.z, rx, rz, p.ry || 0, topY, p.climbable !== false);
        occluders.push({ type: 'circle', x: p.x, z: p.z, rx: rx * 1.05, rz: rz * 1.05, pad: 1.8, strength: 0.36 });
        decals.push({ x: p.x, z: p.z, sx: rx * 2.15, sz: rz * 2.15, ry: p.ry || 0 });
      });
      inst.instanceMatrix.needsUpdate = true;
      this.stageGroup.add(inst);
    };

    buildInst(list0, geo0, mat0, 0);
    buildInst(list1, geo1, mat1, 1);
  }

  _placeDesertPalms(palmSites, occluders, decals) {
    if (!palmSites.length) return;
    const woodPbr = this.tex.loadPBRSet('desert_wood', 1, 3);
    const trunkMat = new THREE.MeshLambertMaterial({ map: woodPbr.map, vertexColors: true, color: 0x8e7457 });

    const frondMat = new THREE.MeshLambertMaterial({ color: 0x56643a, side: THREE.DoubleSide });
    frondMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.palmTimeUniform;
      shader.uniforms.uStorm = this.palmStormUniform;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nuniform float uTime;\nuniform float uStorm;`)
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
           float tipDist = length(position.xz);
           float swayAmp = (0.042 + uStorm * 0.16) * tipDist;
           float swayFreq = 1.45 + uStorm * 2.8;
           float phase = instanceMatrix[3][0] * 0.3 + instanceMatrix[3][2] * 0.2;
           transformed.x += (sin(uTime * swayFreq + phase) + uStorm * 0.5) * swayAmp;
           transformed.y += cos(uTime * swayFreq * 0.85 + phase) * swayAmp * 0.5;`
        );
    };

    const frondParts = [];
    const frondCount = 12;
    for (let f = 0; f < frondCount; f++) {
      const fGeo = new THREE.PlaneGeometry(0.62, 2.75, 2, 4);
      const fp = fGeo.attributes.position;
      for (let i = 0; i < fp.count; i++) {
        const y = fp.getY(i);
        const t = (y + 1.375) / 2.75;
        fp.setX(i, fp.getX(i) * Math.sin(t * Math.PI) * 1.18);
        fp.setZ(i, -t * t * 0.8);
      }
      fGeo.translate(0, 1.375, 0);
      const m = new THREE.Matrix4().makeRotationFromEuler(
        new THREE.Euler(0.72 + (f % 3) * 0.22, (f / frondCount) * Math.PI * 2, 0, 'YXZ')
      );
      fGeo.applyMatrix4(m);
      fGeo.computeVertexNormals();
      frondParts.push(fGeo);
    }
    const crownGeo = mergeGeometries(frondParts, false);
    frondParts.forEach((g) => g.dispose());

    const crownInst = new THREE.InstancedMesh(crownGeo, frondMat, palmSites.length);
    crownInst.castShadow = !IS_MOBILE;

    const trunkGeos = [];
    const dummy = this._dummy;
    palmSites.forEach((p, idx) => {
      const gy = this.getHeight(p.x, p.z);
      const tGeo = new THREE.CylinderGeometry(0.14, 0.31, p.h, 7, 5);
      const tp = tGeo.attributes.position;
      for (let i = 0; i < tp.count; i++) {
        const ny = (tp.getY(i) + p.h * 0.5) / p.h;
        tp.setX(i, tp.getX(i) + ny * ny * p.h * p.lean);
      }
      tGeo.translate(0, p.h * 0.5, 0);
      bakeRockContactAO(tGeo, { bottomAO: 0.50, topLift: 1.0, undersideAO: 0.1 });
      const m = new THREE.Matrix4().makeRotationY(p.ry);
      m.setPosition(p.x, gy - 0.12, p.z);
      tGeo.applyMatrix4(m);
      tGeo.computeVertexNormals();
      trunkGeos.push(tGeo);

      const topX = p.x + Math.cos(p.ry) * (p.h * p.lean);
      const topZ = p.z - Math.sin(p.ry) * (p.h * p.lean);
      dummy.position.set(topX, gy + p.h - 0.22, topZ);
      dummy.rotation.set(0, p.ry, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      crownInst.setMatrixAt(idx, dummy.matrix);

      this.physics.addCylinderCollider(p.x, p.z, 0.34, gy + p.h, false);
      occluders.push({ type: 'circle', x: p.x, z: p.z, r: 0.85, pad: 2.2, strength: 0.32 });
      decals.push({ x: p.x, z: p.z, sx: 2.8, sz: 2.8, ry: p.ry });
    });
    crownInst.instanceMatrix.needsUpdate = true;

    const mergedTrunks = new THREE.Mesh(mergeGeometries(trunkGeos, false), trunkMat);
    mergedTrunks.castShadow = !IS_MOBILE;
    mergedTrunks.receiveShadow = true;
    trunkGeos.forEach((g) => g.dispose());
    this.stageGroup.add(mergedTrunks, crownInst);
  }

  _placeDesertShrubs(sites) {
    if (!sites.length) return;
    const branches = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 + 0.3;
      const tilt = 0.48 + (i % 2) * 0.24;
      const h = 0.44 + (i % 3) * 0.14;
      const cone = new THREE.ConeGeometry(0.032, h, 3, 1);
      cone.translate(0, h * 0.5, 0);
      cone.rotateZ(tilt);
      cone.rotateY(angle);
      branches.push(cone);
    }
    const mergedGeo = mergeGeometries(branches, false);
    branches.forEach((b) => b.dispose());
    const shrubMat = new THREE.MeshLambertMaterial({ color: 0x726143 });
    const inst = new THREE.InstancedMesh(mergedGeo, shrubMat, sites.length);

    const dummy = this._dummy;
    sites.forEach((s, idx) => {
      const y = this.getHeight(s.x, s.z);
      const sc = s.scale ?? 1.0;
      dummy.position.set(s.x, y - 0.04, s.z);
      dummy.rotation.set(0, s.ry ?? idx, 0);
      dummy.scale.set(sc * 1.2, sc * 0.88, sc * 1.2);
      dummy.updateMatrix();
      inst.setMatrixAt(idx, dummy.matrix);
    });
    inst.instanceMatrix.needsUpdate = true;
    this.stageGroup.add(inst);
  }

  _createSoaringHawks(centerZ = 0, altitudeBase = 24) {
    const birdMat = new THREE.MeshBasicMaterial({ color: 0x261a10, side: THREE.DoubleSide });
    const rawBody = new THREE.ConeGeometry(0.11, 0.72, 4);
    rawBody.rotateX(Math.PI / 2);
    const bodyGeo = rawBody.toNonIndexed();
    rawBody.dispose();
    bodyGeo.deleteAttribute('uv');

    const wingR = new THREE.BufferGeometry();
    wingR.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0.16, 1.22, 0.06, -0.05, 0, 0, -0.22]), 3));
    wingR.computeVertexNormals();
    const wingL = new THREE.BufferGeometry();
    wingL.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0.16, -1.22, 0.06, -0.05, 0, 0, -0.22]), 3));
    wingL.computeVertexNormals();
    const birdGeo = mergeGeometries([bodyGeo, wingR, wingL], false);
    bodyGeo.dispose();
    wingR.dispose();
    wingL.dispose();

    this.hawkInst = new THREE.InstancedMesh(birdGeo, birdMat, 4);
    this.hawkInst.frustumCulled = false;
    this.stageGroup.add(this.hawkInst);

    for (let i = 0; i < 4; i++) {
      this.hawks.push({
        centerX: (i % 2 === 0 ? -12 : 14),
        centerZ: centerZ + (i - 1.5) * 38,
        radius: 24 + i * 9,
        altitude: altitudeBase + i * 5,
        speed: 0.21 + i * 0.035,
        phase: i * 1.65,
      });
    }
  }

  _createGoalBeaconMarker(x, y, z, stageId) {
    const col = stageId === 3 ? 0xffb366 : 0xffe096;
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.45, 0.62, 24),
      new THREE.MeshBasicMaterial({
        color: col,
        transparent: true,
        opacity: 0.72,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    ring.position.set(x, y, z);
    ring.renderOrder = 8;
    this.goalRingMesh = ring;
    this.stageGroup.add(ring);
  }

  _createGlowSpriteTexture() {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(size / 2, size / 2, 1, size / 2, size / 2, size / 2);
    grad.addColorStop(0.0, 'rgba(255, 248, 220, 1.0)');
    grad.addColorStop(0.24, 'rgba(255, 186, 86, 0.78)');
    grad.addColorStop(0.58, 'rgba(235, 128, 38, 0.26)');
    grad.addColorStop(1.0, 'rgba(200, 90, 20, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // ============================================================================
  // STAGE 1 (NOON): Open Mirage Plains — Stone Cairns + Cracked Sabkha + Monolith Gate
  // ============================================================================
  _buildStage1Plains(occluders, decals) {
    // 1. Guiding Arabian Stone Cairns (رُجُم حجرية) from spawn (0,114) across the cracked sabkha to (6,-116)
    const cairnSites = [
      { x: 2.5, z: 96, scale: 1.12, ry: 0.4 },
      { x: -5.2, z: 72, scale: 1.05, ry: 1.5 },
      { x: 4.5, z: 48, scale: 1.18, ry: 2.2 },
      { x: 9.5, z: 22, scale: 1.02, ry: 0.8 },   // Entering cracked sabkha edge!
      { x: -3.0, z: -2, scale: 1.24, ry: 1.9 },  // Center of cracked sabkha!
      { x: 8.8, z: -26, scale: 1.08, ry: 3.1 },
      { x: 1.8, z: -52, scale: 1.15, ry: 0.6 },  // Leaving sabkha onto dunes
      { x: -4.2, z: -78, scale: 1.12, ry: 2.4 },
      { x: 5.0, z: -100, scale: 1.28, ry: 1.1 }, // Canyon gate approach cairn
      { x: -24.0, z: 12, scale: 0.95, ry: 0.2 }, // Off-trail exploration cairn
      { x: 28.0, z: -18, scale: 0.98, ry: 2.7 },
    ];
    this._placeStoneCairns(cairnSites, occluders, decals);

    // 2. Monumental Twin Sandstone Monoliths framing the Canyon Mouth exit at (6, -116) + Distant Horizon Mesas
    const mesas = [
      // Twin canyon mouth gate pillars!
      { x: -11.5, z: -120, sx: 11.5, sy: 18.0, sz: 10.5, ry: 0.5 },
      { x: 23.5, z: -118, sx: 12.0, sy: 19.5, sz: 11.0, ry: 1.7 },
      // Distant framing desert mesas
      { x: -128, z: -98, sx: 44, sy: 26, sz: 32, ry: 0.4 },
      { x: 122, z: -110, sx: 48, sy: 28, sz: 36, ry: 2.0 },
      { x: -136, z: 34, sx: 46, sy: 24, sz: 34, ry: 2.5 },
      { x: 134, z: 46, sx: 42, sy: 23, sz: 32, ry: 1.1 },
    ];
    this._placeStratifiedMesas(mesas, occluders, 1, true);

    // 3. Natural weathered boulders framing dunes & sabkha rim
    const rocks = [
      { x: -9.5, z: 102, sx: 4.8, sy: 2.4, sz: 3.4, ry: 0.7, type: 0 },
      { x: 11.0, z: 86, sx: 5.4, sy: 2.8, sz: 3.8, ry: 2.1, type: 1 },
      { x: -16.5, z: 54, sx: 6.8, sy: 3.6, sz: 4.6, ry: 1.2, type: 0 },
      { x: 19.5, z: 36, sx: 5.8, sy: 2.9, sz: 4.2, ry: 0.3, type: 1 },
      { x: -28.0, z: -14, sx: 7.4, sy: 4.0, sz: 5.2, ry: 2.6, type: 0 },
      { x: 26.5, z: -38, sx: 6.2, sy: 3.2, sz: 4.4, ry: 1.8, type: 1 },
      { x: -14.5, z: -68, sx: 6.5, sy: 3.4, sz: 4.4, ry: 0.9, type: 0 },
      { x: 18.2, z: -88, sx: 7.0, sy: 3.8, sz: 4.8, ry: 2.4, type: 0 },
    ];
    let seed = 1051;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let i = 0; i < 24; i++) {
      const x = (rand() - 0.5) * 185;
      const z = (rand() - 0.5) * 210;
      if (Math.abs(x) < 12 && z > -115 && z < 118) continue;
      if (getStage1SabkhaMask(x, z) > 0.55) continue; // Keep cracked sabkha open & clean!
      const s = 2.0 + rand() * 4.5;
      rocks.push({ x, z, sx: s * 1.1, sy: s * 0.7, sz: s * 0.9, ry: rand() * 6.28, type: i % 2 });
    }
    this._placeScannedRocks(rocks, occluders, decals);

    // 4. Sparse sun-bleached desert shrubs around dune edges (not inside salt flat)
    const shrubs = [];
    for (let i = 0; i < 42; i++) {
      const x = (rand() - 0.5) * 160;
      const z = (rand() - 0.5) * 210;
      if (getStage1SabkhaMask(x, z) > 0.35) continue;
      shrubs.push({ x, z, scale: 0.75 + rand() * 0.9, ry: rand() * 6.28 });
    }
    this._placeDesertShrubs(shrubs);
    this._createSoaringHawks(0, 26);
  }

  // ============================================================================
  // STAGE 2 (AFTERNOON): Winding Rocky Canyon — Stratified Cliffs, Palms, Ruins & Light Dust Gusts
  // ============================================================================
  _buildStage2Canyon(occluders, decals) {
    // 1. Towering Stratified Canyon Buttress Cliffs anchored deeply into canyon floor level (ZERO floating bases!)
    const cliffButtresses = [];
    for (let z = 112; z >= -124; z -= 20) {
      const cx = getCanyonCenterX(z);
      const hw = getCanyonHalfWidth(z);
      const floorY = this.getHeight(cx, z);
      // Left wall cliff buttress anchored directly into floorY - 3m!
      cliffButtresses.push({
        x: cx - hw - 12.5 - Math.sin(z * 0.13) * 2.5,
        z: z + 3,
        y: floorY - 2.5,
        sx: 15.5 + (Math.abs(z) % 5),
        sy: 38 + ((Math.abs(z) * 7) % 12),
        sz: 14.5,
        ry: (z * 0.17) % 6.28,
      });
      // Right wall cliff buttress anchored directly into floorY - 3m!
      cliffButtresses.push({
        x: cx + hw + 12.5 + Math.cos(z * 0.11) * 2.5,
        z: z - 4,
        y: floorY - 2.5,
        sx: 16.0 + ((Math.abs(z) + 2) % 5),
        sy: 40 + ((Math.abs(z) * 5) % 10),
        sz: 15.0,
        ry: (z * 0.23 + 1.2) % 6.28,
      });
    }
    this._placeStratifiedMesas(cliffButtresses, occluders, 2, true);

    // 2. Oasis Date Palm Groves (نخيل) tucked into the central canyon oasis bend (z ≈ -28 .. +12)
    const palmSites = [
      { x: getCanyonCenterX(-4) - 8.8, z: -4, h: 6.8, lean: 0.16, ry: 0.5 },
      { x: getCanyonCenterX(-9) - 11.2, z: -9, h: 5.4, lean: 0.20, ry: 1.4 },
      { x: getCanyonCenterX(-14) - 7.5, z: -14, h: 7.4, lean: 0.14, ry: 0.9 },
      { x: getCanyonCenterX(-18) - 10.6, z: -18, h: 5.9, lean: -0.15, ry: 2.3 },
      { x: getCanyonCenterX(-6) + 9.4, z: -6, h: 6.2, lean: -0.18, ry: 3.1 },
      { x: getCanyonCenterX(-15) + 11.0, z: -15, h: 7.1, lean: -0.15, ry: 2.6 },
      { x: getCanyonCenterX(-23) + 8.6, z: -23, h: 5.2, lean: 0.18, ry: 4.0 },
      { x: getCanyonCenterX(44) + 10.2, z: 44, h: 5.6, lean: -0.16, ry: 1.9 },
      { x: getCanyonCenterX(-62) - 9.8, z: -62, h: 6.1, lean: 0.17, ry: 0.8 },
    ];
    this._placeDesertPalms(palmSites, occluders, decals);

    // 3. Ancient Desert Canyon Ruins (أطلال): Crumbled Mudbrick Arches, Walls, Pillars & Weathered Crates/Barrels!
    this._buildCanyonRuins(occluders, decals);

    // 4. Trail Cairns & Canyon Floor Boulders
    const cairns = [
      { x: getCanyonCenterX(96) + 3.2, z: 96, scale: 1.05, ry: 0.4 },
      { x: getCanyonCenterX(18) - 3.6, z: 18, scale: 1.12, ry: 1.7 },
      { x: getCanyonCenterX(-40) + 3.5, z: -40, scale: 1.10, ry: 2.5 },
      { x: getCanyonCenterX(-98) - 2.8, z: -98, scale: 1.22, ry: 0.9 },
    ];
    this._placeStoneCairns(cairns, occluders, decals);

    const rocks = [];
    let seed = 2207;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let z = 108; z >= -114; z -= 9.5) {
      const cx = getCanyonCenterX(z);
      const hw = getCanyonHalfWidth(z);
      // Place canyon floor edge boulders close to cliff talus (keeping central 10m path clean!)
      for (const side of [-1, 1]) {
        if (rand() < 0.35) continue;
        const off = (6.8 + rand() * (hw - 7.5)) * side;
        const s = 2.6 + rand() * 3.8;
        rocks.push({
          x: cx + off,
          z: z + (rand() - 0.5) * 4.0,
          sx: s * 1.15,
          sy: s * 0.72,
          sz: s * 0.92,
          ry: rand() * 6.28,
          type: Math.floor(rand() * 2),
        });
      }
    }
    this._placeScannedRocks(rocks, occluders, decals);

    // 5. Oasis shrubs & canyon hawks
    const shrubs = [];
    for (let i = 0; i < 38; i++) {
      const z = -112 + rand() * 224;
      const cx = getCanyonCenterX(z);
      const hw = getCanyonHalfWidth(z);
      const x = cx + (rand() - 0.5) * hw * 1.65;
      shrubs.push({ x, z, scale: 0.8 + rand() * 0.85, ry: rand() * 6.28 });
    }
    this._placeDesertShrubs(shrubs);
    this._createSoaringHawks(-10, 34);
  }

  _buildCanyonRuins(occluders, decals) {
    const adobe = this.tex.loadPBRSet('adobe_wall', 1, 1);
    const ruinMat = IS_MOBILE
      ? new THREE.MeshLambertMaterial({ map: adobe.map, normalMap: adobe.normalMap, vertexColors: true, color: 0xf4e3c8 })
      : new THREE.MeshStandardMaterial({
          map: adobe.map,
          normalMap: adobe.normalMap,
          normalScale: new THREE.Vector2(0.55, 0.55),
          roughness: 0.92,
          vertexColors: true,
          color: 0xf4e3c8,
        });
    ruinMat.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>
         float _rl = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
         diffuseColor.rgb = mix(vec3(_rl), diffuseColor.rgb, 0.55) * 1.45 + vec3(0.04, 0.03, 0.02);`
      );
    };
    attachDesertGrading(ruinMat, { saturation: 0.82, contrast: 1.02 });

    const wood = this.tex.loadPBRSet('desert_wood', 1, 1);
    const woodMat = new THREE.MeshLambertMaterial({ map: wood.map, color: 0xbba282 });

    const ruinPieces = [];
    const beamPieces = [];

    const addRuinWall = (wx, wz, w, h, d, ry = 0) => {
      const gy = this.getHeight(wx, wz);
      // 1.5m subterranean foundation footing guarantees ZERO floating pillars even on sloped canyon banks!
      const foot = 1.5;
      const totalH = h + foot;
      const geo = createBakedArchitecturalBox(w, totalH, d, { bottomAO: 0.56, topAO: 0.98, cornerAO: 0.20, tileScale: 1.4 });
      const m = new THREE.Matrix4().compose(
        new THREE.Vector3(wx, gy + h * 0.5 - foot * 0.5, wz),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)),
        new THREE.Vector3(1, 1, 1)
      );
      geo.applyMatrix4(m);
      ruinPieces.push(geo);

      this.physics.addOBBCollider(wx, wz, w * 0.5, d * 0.5, ry, gy - foot, gy + h, h <= 1.45);
      occluders.push({ type: 'box', x: wx, z: wz, hx: Math.max(w, d) * 0.5, hz: Math.max(w, d) * 0.5, pad: 2.4, strength: 0.38 });
      decals.push({ x: wx, z: wz, sx: w * 1.35, sz: d * 1.45, ry });
    };

    const addArchway = (wx, wz, span = 4.6, height = 3.8, ry = 0) => {
      const cos = Math.cos(ry);
      const sin = Math.sin(ry);
      const half = span * 0.5;
      const lx = wx - half * cos;
      const lz = wz + half * sin;
      const rx = wx + half * cos;
      const rz = wz - half * sin;
      const baseTop = Math.max(this.getHeight(lx, lz), this.getHeight(rx, rz)) + height;
      addRuinWall(lx, lz, 0.95, Math.max(2.2, baseTop - this.getHeight(lx, lz)), 0.95, ry);
      addRuinWall(rx, rz, 0.95, Math.max(2.2, baseTop - this.getHeight(rx, rz) - 0.12), 0.95, ry);
      const lintel = new THREE.BoxGeometry(span + 1.3, 0.38, 0.76);
      const m = new THREE.Matrix4().compose(
        new THREE.Vector3(wx, baseTop - 0.22, wz),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, -0.03)),
        new THREE.Vector3(1, 1, 1)
      );
      lintel.applyMatrix4(m);
      beamPieces.push(lintel);
    };

    // Ruin Site 1: Ancient Caravanserai Gate & Crumbling Walls squarely on canyon floor at z ≈ +42
    const r1x = getCanyonCenterX(42);
    addArchway(r1x, 42, 5.4, 4.1, 0.10);
    addRuinWall(r1x - 7.4, 39.0, 5.6, 2.5, 0.68, 0.22);
    addRuinWall(r1x + 7.2, 44.0, 5.2, 2.2, 0.66, -0.28);
    addRuinWall(r1x - 8.6, 46.2, 0.76, 1.5, 4.2, 0.12);

    // Ruin Site 2: Broken Watchpost & Colonnade at z ≈ -64
    const r2x = getCanyonCenterX(-64);
    addArchway(r2x + 0.8, -64, 5.0, 3.9, -0.15);
    addRuinWall(r2x + 7.4, -60.5, 5.4, 2.7, 0.68, -0.20);
    addRuinWall(r2x - 7.2, -67.0, 4.8, 2.1, 0.66, 0.28);
    addRuinWall(r2x + 6.4, -70.0, 1.0, 3.2, 1.0, 0.1);

    // Ruin Site 3: Mountain Ascent Pass Stone Gate at z ≈ -116
    const r3x = getCanyonCenterX(-116);
    addArchway(r3x, -116, 5.8, 4.4, 0.05);

    if (ruinPieces.length) {
      const mesh = new THREE.Mesh(mergeGeometries(ruinPieces, false), ruinMat);
      mesh.castShadow = !IS_MOBILE;
      mesh.receiveShadow = true;
      ruinPieces.forEach((g) => g.dispose());
      this.stageGroup.add(mesh);
    }
    if (beamPieces.length) {
      const bMesh = new THREE.Mesh(mergeGeometries(beamPieces, false), woodMat);
      bMesh.castShadow = !IS_MOBILE;
      beamPieces.forEach((g) => g.dispose());
      this.stageGroup.add(bMesh);
    }

    const crateGeo = this.models.getGeometry('crate');
    const crateMat = this.models.getMaterial('crate');
    if (crateGeo && crateMat) {
      const cPos = [
        [r1x - 5.2, 40.8, 0.4, 1.25],
        [r1x + 5.0, 43.2, 1.1, 1.1],
        [r2x + 5.4, -62.0, -0.3, 1.3],
      ];
      const inst = new THREE.InstancedMesh(crateGeo, crateMat, cPos.length);
      cPos.forEach(([x, z, ry, sc], i) => {
        const y = this.getHeight(x, z);
        this._dummy.position.set(x, y - 0.06, z);
        this._dummy.rotation.set(0.08, ry, -0.06);
        this._dummy.scale.setScalar(sc);
        this._dummy.updateMatrix();
        inst.setMatrixAt(i, this._dummy.matrix);
        this.physics.addBoxCollider(x - 0.65, x + 0.65, z - 0.5, z + 0.5, y, y + 0.72, true);
      });
      inst.instanceMatrix.needsUpdate = true;
      this.stageGroup.add(inst);
    }

    const barrelGeo = this.models.getGeometry('barrel');
    const barrelMat = this.models.getMaterial('barrel');
    if (barrelGeo && barrelMat) {
      const bPos = [
        [r1x + 5.8, 42.4, 0.72],
        [r2x - 5.6, -65.5, 0.74],
      ];
      const inst = new THREE.InstancedMesh(barrelGeo, barrelMat, bPos.length);
      bPos.forEach(([x, z, sc], i) => {
        const y = this.getHeight(x, z);
        this._dummy.position.set(x, y - 0.08, z);
        this._dummy.rotation.set(0.12, i * 1.4, 0);
        this._dummy.scale.setScalar(sc);
        this._dummy.updateMatrix();
        inst.setMatrixAt(i, this._dummy.matrix);
        this.physics.addCylinderCollider(x, z, 0.42, y + 1.1, false);
      });
      inst.instanceMatrix.needsUpdate = true;
      this.stageGroup.add(inst);
    }
  }

  // ============================================================================
  // STAGE 3 (SUNSET/DUSK): High Mountain Peak (92m) Overlooking Sea of Dunes + Distant House Glimmer!
  // ============================================================================
  _buildStage3Summit(occluders, decals) {
    const cairns = [];
    for (let z = 92; z >= -84; z -= 26) {
      const rx = getRidgeCenterX(z);
      cairns.push({ x: rx + (z % 52 === 0 ? 3.2 : -3.2), z, scale: 1.12, ry: z * 0.2 });
    }
    // Iconic Tall Summit Overlook Cairn framing the left edge of the sheer cliff rim!
    const sumX = getRidgeCenterX(-99);
    cairns.push({ x: sumX - 5.2, z: -99.5, scale: 1.38, ry: 0.7 });
    this._placeStoneCairns(cairns, occluders, decals);

    const rocks = [];
    let seed = 3391;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let z = 104; z >= -96; z -= 11) {
      const rx = getRidgeCenterX(z);
      const hw = getRidgeHalfWidth(z);
      for (const side of [-1, 1]) {
        if (z < -88 && side === 1) continue;
        const off = (hw * 0.72 + rand() * 3.0) * side;
        const s = 2.4 + rand() * 3.4;
        rocks.push({
          x: rx + off,
          z: z + (rand() - 0.5) * 4.0,
          sx: s * 1.15,
          sy: s * 0.68,
          sz: s * 0.9,
          ry: rand() * 6.28,
          type: Math.floor(rand() * 2),
        });
      }
    }
    this._placeScannedRocks(rocks, occluders, decals);

    // Distant flanking mesas far below in the twilight sea of dunes
    const farMesas = [
      { x: -155, z: -220, y: 8, sx: 46, sy: 34, sz: 38, ry: 0.6 },
      { x: 162, z: -205, y: 8, sx: 50, sy: 36, sz: 40, ry: 2.1 },
      { x: -145, z: 25, y: 6, sx: 42, sy: 28, sz: 34, ry: 1.3 },
      { x: 155, z: 40, y: 6, sx: 44, sy: 30, sz: 36, ry: 2.8 },
    ];
    this._placeStratifiedMesas(farMesas, [], 3, false);

    // DISTANT ABANDONED HOUSE SILHOUETTE + WARM FLICKERING GLIMMER OF LIGHT grounded in the Dune Sea!
    // At z=-310 (inside the sculpted horizon dune sea), compute exact horizon skirt dune height so it sits 100% planted!
    const distHouseX = sumX + 26;
    const distHouseZ = -310;
    const d1H = Math.sin(distHouseX * 0.022 + distHouseZ * 0.017 + Math.sin(distHouseZ * 0.01) * 1.4);
    const skirtDuneY =
      Math.pow(1.0 - Math.abs(d1H), 1.15) * 9.5 +
      Math.sin(distHouseX * 0.009 - distHouseZ * 0.008) * 6.5 +
      Math.cos(distHouseX * 0.014 + distHouseZ * 0.012) * 4.5 +
      5.0;

    const distantHouseGroup = new THREE.Group();
    distantHouseGroup.position.set(distHouseX, skirtDuneY - 0.8, distHouseZ);
    const darkAdobeMat = new THREE.MeshLambertMaterial({ color: 0x52392d });
    // Deep foundation plinth extending 8m below dune crest so zero gap ever shows from any angle!
    const foundation = new THREE.Mesh(new THREE.BoxGeometry(17.5, 9.0, 14.5), darkAdobeMat);
    foundation.position.y = -4.2;
    const mainBlock = new THREE.Mesh(new THREE.BoxGeometry(15.5, 4.8, 12.2), darkAdobeMat);
    mainBlock.position.y = 2.4;
    const watchBlock = new THREE.Mesh(new THREE.BoxGeometry(6.0, 3.0, 5.0), darkAdobeMat);
    watchBlock.position.set(-2.4, 5.8, -1.8);
    const yardWall = new THREE.Mesh(new THREE.BoxGeometry(18.5, 2.2, 0.8), darkAdobeMat);
    yardWall.position.set(0, 1.1, 9.8);
    distantHouseGroup.add(foundation, mainBlock, watchBlock, yardWall);

    // Warm golden glimmering lantern beacon clearly visible down in the sea of dunes!
    const glowTex = this._createGlowSpriteTexture();
    const spriteMat = new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xffc857,
      transparent: true,
      opacity: 0.96,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    });
    this.beaconSprite = new THREE.Sprite(spriteMat);
    this.beaconSprite.position.set(1.8, 3.6, 6.5);
    this.beaconSprite.scale.set(16.0, 16.0, 1);
    distantHouseGroup.add(this.beaconSprite);

    const coreDot = new THREE.Mesh(
      new THREE.SphereGeometry(1.05, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xfff6cf, fog: false })
    );
    coreDot.position.set(1.8, 3.5, 6.5);
    distantHouseGroup.add(coreDot);

    this.stageGroup.add(distantHouseGroup);
  }

  // ============================================================================
  // STAGE 4 (NIGHT): Moonlit Approach + Full Explorable Abandoned House Under the Stars
  // ============================================================================
  _buildStage4Night(occluders, decals) {
    // 1. Guiding Moonlit Stone Cairns leading from spawn (-4, 122) to the Abandoned House at (0, -68)
    const cairns = [
      { x: -1.5, z: 102, scale: 1.08, ry: 0.4 },
      { x: 4.5, z: 74, scale: 1.12, ry: 1.5 },
      { x: -3.2, z: 44, scale: 1.15, ry: 2.2 },
      { x: 3.8, z: 14, scale: 1.08, ry: 0.9 },
      { x: -2.4, z: -16, scale: 1.16, ry: 1.8 },
      { x: 2.2, z: -42, scale: 1.10, ry: 2.9 },
    ];
    this._placeStoneCairns(cairns, occluders, decals);

    // 2. Full Abandoned Desert Estate at (0, 0, -68) — Cleaned of Jug/Vase & Jeep, Baked Corner AO + Warm Night Lanterns!
    this.abandonedHouse = new AbandonedHouse(
      this.stageGroup,
      this.tex,
      this.models,
      this.physics,
      this.getHeight,
      STAGE4_HOUSE_X,
      STAGE4_HOUSE_Z,
      STAGE4_HOUSE_BASE_Y
    );
    occluders.push({
      type: 'box',
      x: STAGE4_HOUSE_X,
      z: STAGE4_HOUSE_Z,
      hx: 8.4,
      hz: 7.2,
      pad: 3.8,
      strength: 0.44,
    });

    // 3. Moonlit Oasis Palms around the Abandoned House & approach dunes
    const palms = [
      { x: STAGE4_HOUSE_X - 11.2, z: STAGE4_HOUSE_Z - 9.0, h: 6.4, lean: 0.14, ry: 0.4 },
      { x: STAGE4_HOUSE_X - 13.0, z: STAGE4_HOUSE_Z - 6.2, h: 5.0, lean: -0.18, ry: 2.1 },
      { x: STAGE4_HOUSE_X + 11.8, z: STAGE4_HOUSE_Z - 10.2, h: 5.8, lean: 0.16, ry: 1.2 },
      { x: -15.5, z: 32.0, h: 5.2, lean: 0.18, ry: 2.8 },
      { x: 16.5, z: -18.0, h: 5.6, lean: -0.15, ry: 0.9 },
    ];
    this._placeDesertPalms(palms, occluders, decals);

    // 4. Moonlit Boulders & Distant Silhouetted Mesas
    const rocks = [
      { x: -12.0, z: 96, sx: 4.8, sy: 2.4, sz: 3.4, ry: 0.7, type: 0 },
      { x: 14.5, z: 62, sx: 5.6, sy: 2.8, sz: 4.0, ry: 2.2, type: 1 },
      { x: -16.5, z: 24, sx: 6.2, sy: 3.2, sz: 4.2, ry: 1.1, type: 0 },
      { x: 15.2, z: -6, sx: 5.2, sy: 2.6, sz: 3.8, ry: 0.4, type: 1 },
      { x: -14.2, z: -56, sx: 5.8, sy: 3.0, sz: 3.9, ry: 1.5, type: 0 },
      { x: 14.6, z: -58, sx: 5.6, sy: 2.9, sz: 3.8, ry: 2.5, type: 1 },
    ];
    this._placeScannedRocks(rocks, occluders, decals);

    const mesas = [
      { x: -132, z: -118, sx: 44, sy: 26, sz: 34, ry: 0.5 },
      { x: 118, z: -126, sx: 48, sy: 28, sz: 36, ry: 1.8 },
      { x: -126, z: 42, sx: 42, sy: 24, sz: 32, ry: 2.3 },
      { x: 128, z: 54, sx: 44, sy: 24, sz: 34, ry: 0.9 },
    ];
    this._placeStratifiedMesas(mesas, occluders, 4, true);
  }

  // ============================================================================
  // GPU AMBIENT DUST PARTICLES
  // ============================================================================
  _createGPUDustParticles(stageId) {
    const atmos = STAGE_ATMOSPHERES[stageId];
    const maxCount = this._dustMaxCount;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(maxCount * 3);
    const seeds = new Float32Array(maxCount * 3);

    for (let i = 0; i < maxCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 52;
      positions[i * 3 + 1] = 0.25 + Math.random() * 4.0;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 52;
      seeds[i * 3] = Math.random() * 6.28;
      seeds[i * 3 + 1] = 0.7 + Math.random() * 1.25;
      seeds[i * 3 + 2] = Math.random();
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 3));

    this.dustUniforms = {
      uTime: { value: 0 },
      uStorm: { value: this.stormIntensity },
      uPlayerPos: { value: new THREE.Vector3() },
      uColor: { value: atmos.dustColor.clone() },
      uBaseOpacity: { value: atmos.dustOpacity },
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
          float speed = (2.1 + uStorm * 8.5) * aSeed.y;
          p.x = mod(p.x + uTime * speed - uPlayerPos.x + 26.0, 52.0) - 26.0 + uPlayerPos.x;
          p.z = mod(p.z + uTime * speed * 0.42 - uPlayerPos.z + 26.0, 52.0) - 26.0 + uPlayerPos.z;
          p.y = uPlayerPos.y - 0.4 + position.y + sin(uTime * (1.2 + uStorm * 2.0) + aSeed.x) * (0.22 + uStorm * 0.35);
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          float sizeMult = 1.0 + uStorm * 0.65;
          gl_PointSize = clamp((102.0 * sizeMult) / max(1.0, -mvPosition.z), 2.0, 14.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        uniform float uStorm;
        uniform float uBaseOpacity;
        uniform sampler2D uMap;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.05) discard;
          float op = mix(uBaseOpacity, 0.54, uStorm);
          gl_FragColor = vec4(uColor * tex.rgb, tex.a * op);
        }
      `,
    });

    this.dustPoints = new THREE.Points(geo, dustMat);
    this.dustPoints.frustumCulled = false;
    this.stageGroup.add(this.dustPoints);
  }

  applySettings(preset) {
    this._baseDustCount = Math.min(this._dustMaxCount, preset.dustCount || 150);
    if (this.dustPoints) {
      this.dustPoints.geometry.setDrawRange(0, this._baseDustCount);
    }
  }

  setStormIntensity(val) {
    this.stormIntensity = Math.max(0, Math.min(1, val));
    this.palmStormUniform.value = this.stormIntensity;
    if (this.dustUniforms) this.dustUniforms.uStorm.value = this.stormIntensity;
    if (this.dustPoints) {
      const count = Math.round(THREE.MathUtils.lerp(this._baseDustCount, this._dustMaxCount, this.stormIntensity));
      this.dustPoints.geometry.setDrawRange(0, count);
    }
  }

  getActiveInteractable() {
    if (this.currentStageId === 4 && this.abandonedHouse) {
      return this.abandonedHouse.getSanctuaryInteractable();
    }
    return null;
  }

  update(dt, elapsed, playerPos, camera) {
    this.palmTimeUniform.value = elapsed;

    if (this.dustUniforms && playerPos) {
      this.dustUniforms.uTime.value = elapsed;
      this.dustUniforms.uPlayerPos.value.copy(playerPos);
    }

    if (this.abandonedHouse) {
      this.abandonedHouse.update(dt, elapsed, playerPos);
    }

    // Subtle flicker on Stage 3 distant house lantern glimmer!
    if (this.beaconSprite && this.currentStageId === 3) {
      const flick = 0.88 + 0.14 * Math.sin(elapsed * 4.8) + 0.08 * Math.cos(elapsed * 11.3);
      this.beaconSprite.scale.set(16.0 * flick, 16.0 * flick, 1);
    }

    // Gentle floating goal ring facing camera (fades out cleanly within 14m so vistas stay pure!)
    if (this.goalRingMesh && camera) {
      const d = camera.position.distanceTo(this.goalRingMesh.position);
      if (d < 14.0) {
        this.goalRingMesh.visible = false;
      } else {
        this.goalRingMesh.visible = true;
        this.goalRingMesh.lookAt(camera.position);
        const pulse = 0.92 + Math.sin(elapsed * 2.8) * 0.12;
        this.goalRingMesh.scale.setScalar(pulse);
      }
    }

    // Throttled 30Hz hawk updates
    if (this.hawkInst && this.hawks.length > 0) {
      this._faunaAccum += dt;
      if (this._faunaAccum >= 0.033) {
        this._faunaAccum = 0;
        const dummy = this._dummy;
        for (let i = 0; i < this.hawks.length; i++) {
          const h = this.hawks[i];
          const a = elapsed * h.speed + h.phase;
          const nx = h.centerX + Math.cos(a) * h.radius;
          const nz = h.centerZ + Math.sin(a) * h.radius;
          const ny = h.altitude + Math.sin(elapsed * 0.7 + h.phase) * 1.5;
          dummy.position.set(nx, ny, nz);
          dummy.rotation.set(0, -a, 0.24);
          dummy.scale.set(1, 1 + Math.sin(elapsed * 5.0 + h.phase) * 0.15, 1);
          dummy.updateMatrix();
          this.hawkInst.setMatrixAt(i, dummy.matrix);
        }
        this.hawkInst.instanceMatrix.needsUpdate = true;
      }
    }
  }
}
