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
  getStage3DuneSeaHeight,
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
    chapterTag: 'الفصل الأول • الظهر',
    title: 'سهول السراب — القافلة التائهة',
    subtitle: 'ابحث عن أثر أخيك «سالم» عبر المعسكر المهجور والسبخة المتشققة',
    timeLabel: '١٢:٣٠ ظهراً',
    startPos: { x: 0, z: 112, yaw: 0.14, pitch: -0.02 },
    goalPos: { x: 4, z: -112 },
    goalRadius: 9.0,
    steps: [
      {
        id: 'camp_clue',
        objective: 'تفحّص معسكر القافلة المهجور غرب الكثبان',
        tag: 'دليل ١ من ٢ — سهول السراب',
        title: 'معسكر القافلة ورسالة سالم الممزقة',
        sfx: 'paper',
        body: 'رماد النار ما زال دافئاً منذ الفجر... تحت صندوق المؤن وجدتَ قصاصة بخط أخيك «سالم»:\n\n«تفرّقت القافلة حين هبّت الرياح فجراً. سأترك علامتي عند الشاهد الحجري القديم وسط السبخة المتشققة قبل أن أدخل وادي الصخور.»',
        whisper: 'سالم مرّ من هنا هذا الصباح! عليّ التوجه إلى الشاهد الحجري وسط السبخة المتشققة.',
      },
      {
        id: 'sabkha_stele',
        objective: 'اتجه إلى الشاهد الحجري المنقوش وسط السبخة المتشققة',
        tag: 'دليل ٢ من ٢ — السبخة المتشققة',
        title: 'شاهد السبخة وساعة الجيب النحاسية',
        sfx: 'metal',
        body: 'على قاعدة الشاهد الحجري العتيق ترك سالم ساعته النحاسية مشيرة نحو البوابة الصخرية شمالاً، وحفر سهماً على الحجر مع عبارة:\n\n«الماء نفد... سأحتمي بواحة النخيل داخل وادي الصخور. الحق بي قبل العصر!»',
        whisper: 'ترك ساعته هنا ليدلّني على طريقه... مدخل وادي الصخور أمامي شمالاً، سأعبر إليه الآن.',
      },
      {
        id: 'exit_stage1',
        isExit: true,
        objective: 'اعبر البوابة الصخرية شمالاً إلى وادي الصخور',
      },
    ],
  },
  2: {
    id: 2,
    chapterTag: 'الفصل الثاني • العصر',
    title: 'وادي الصخور والواحة — ظلال الأطلال',
    subtitle: 'استكشف أطلال الخان القديم وواحة النخيل للعثور على مسار الجبل',
    timeLabel: '٣:٥٥ عصراً',
    startPos: { x: getCanyonCenterX(116), z: 116, yaw: 0.0, pitch: -0.02 },
    goalPos: { x: getCanyonCenterX(-118), z: -118 },
    goalRadius: 9.0,
    steps: [
      {
        id: 'ruin_note',
        objective: 'استكشف أطلال الخان القديم وابحث عن أثر سالم',
        tag: 'دليل ١ من ٢ — أطلال الخان القديم',
        title: 'مذكرة القافلة داخل الخان',
        sfx: 'paper',
        body: 'بين جدران الخان المهدّمة علّق سالم ورقة مشدودة بحجر:\n\n«سمعتُ همساً غريباً يتردد من جهة الجبل المرتفع... لا بد أن هناك محطة رصد قديمة خلف الكثبان. ارتويتُ عند بئر واحة النخيل وتابعتُ طريقي شمالاً.»',
        whisper: 'همس يتردد من الجبل؟ سأتفقد بئر واحة النخيل القريبة أولاً.',
      },
      {
        id: 'oasis_well',
        objective: 'تفقّد بئر واحة النخيل وسط الوادي',
        tag: 'دليل ٢ من ٢ — واحة النخيل',
        title: 'فانوس القافلة المطفي عند البئر',
        sfx: 'metal',
        body: 'بجوار البئر الحجرية المظللة بسعف النخيل، وجدتَ فانوساً نحاسياً منطفئاً وإبريق ماء فارغاً. آثار خطوات واضحة تصعد الآن نحو الممر الحجري المؤدي إلى قمة الجبل.',
        whisper: 'الوقت يميل نحو الغروب... سأعبر ممر الصعود في نهاية الوادي لألحق به على الجبل.',
      },
      {
        id: 'exit_stage2',
        isExit: true,
        objective: 'تابع نحو ممر الصعود إلى قمة الجبل في نهاية الوادي',
      },
    ],
  },
  3: {
    id: 3,
    chapterTag: 'الفصل الثالث • الغروب والشفق',
    title: 'قمة جبل السراب — بصيص النور',
    subtitle: 'اصعد نحو مأوى الراصد ومرصد القمة لتكتشف مصدر الضوء البعيد',
    timeLabel: '٦:٠٨ مغرباً',
    startPos: { x: getRidgeCenterX(104), z: 104, yaw: 0.0, pitch: 0.03 },
    goalPos: { x: getRidgeCenterX(-96), z: -96 },
    goalRadius: 6.5,
    steps: [
      {
        id: 'ridge_shelter',
        objective: 'تفقّد مأوى الراصد الحجري في منتصف صعود الجبل',
        tag: 'دليل ١ من ٢ — مأوى الراصد',
        title: 'خريطة النجوم وحقيبة سالم',
        sfx: 'paper',
        body: 'داخل هذا المأوى الصخري وجدتَ خريطة نجوم مرسومة بالحبر تحدد موقع بيتٍ صحراوي مهجور في قلب بحر الكثبان أسفل الجبل:\n\n«إلى من يبحث عني... انظر من المنظار النحاسي عند قمة الجبل؛ سأشعل مصباح البيت الليلة ليكون دليلك في العتمة.»',
        whisper: 'سالم ينتظرني في البيت المهجور أسفل الكثبان! سأصعد إلى مرصد القمة لأرى مكانه.',
      },
      {
        id: 'summit_spyglass',
        objective: 'اصعد إلى قمة الجبل واستخدم المنظار النحاسي نحو بحر الكثبان',
        tag: 'دليل ٢ من ٢ — قمة جبل السراب (٩٢م)',
        title: 'بصيص النور في بحر الكثبان',
        sfx: 'metal',
        body: 'من ارتفاع ٩٢ متراً فوق بحر لا متناهٍ من الكثبان الغارقة في الشفق، يلمع بصيص نورٍ ذهبي دافئ من بيتٍ مهجور وحيد في الأسفل...\n\nلقد أوفى سالم بوعده وأشعل المصباح. الليل يوشك أن يحل؛ حان وقت النزول إليه.',
        whisper: 'ها هو نور البيت يلمع أسفل بحر الكثبان... سأنزل إليه الآن تحت سماء الليل.',
        triggersNextStage: true,
      },
    ],
  },
  4: {
    id: 4,
    chapterTag: 'الفصل الرابع • الليل',
    title: 'البيت المهجور تحت النجوم — المصباح الأخير',
    subtitle: 'اقترب تحت ضوء القمر والمجرة واستخدم الكشاف (F) لاكتشاف الحقيقة',
    timeLabel: '١٠:٤٠ ليلاً',
    startPos: { x: -4, z: 108, yaw: 0.02, pitch: -0.01 },
    goalPos: { x: STAGE4_HOUSE_X + 0.1, z: STAGE4_HOUSE_Z - 2.0 },
    goalRadius: 4.0,
    steps: [
      {
        id: 'courtyard_marker',
        objective: 'اقترب من البيت المهجور وتفحّص الشال الأحمر عند المدخل',
        tag: 'دليل ١ من ٣ — فناء البيت المهجور',
        title: 'شال سالم المعلّق تحت الفانوس',
        sfx: 'paper',
        body: 'شال سالم الأحمر مربوط بعناية على عمود الباب الخشبي وتحته ورقة قصيرة:\n\n«أهلاً بوصولك سالماً... تركتُ دفتر الرحلة الكامل على مكتب الغرفة اليسرى، وأبقيتُ مصباح الإنقاذ جاهزاً في الردهة.»',
        whisper: 'كان هنا قبل قليل... سأدخل الغرفة اليسرى وأقرأ دفتر رحلته.',
      },
      {
        id: 'salem_ledger',
        objective: 'ادخل غرفة المكتب (الجهة اليسرى) واقرأ دفتر رحلة سالم',
        tag: 'دليل ٢ من ٣ — غرفة المكتب',
        title: 'دفتر رحلة سالم — سر الرمال المغنية',
        sfx: 'paper',
        body: '«لم نكن تائهين عبثاً... هذه المحطة كانت مرصداً قديماً لظاهرة الرمال المغنية في صحرائنا. حين أصلحتُ الهوائي فجراً استجاب فريق الإنقاذ وسيعبرون الوادي مع الفجر.\n\nخرجتُ لأستقبل القافلة عند التل الشرقي، أشعل المصباح الكبير في الردهة ليروا موقع البيت من بعيد!»',
        whisper: 'سالم بخير وفريق الإنقاذ في طريقه! سأشعل مصباح الإشارة في الردهة الآن.',
      },
      {
        id: 'sanctuary_lantern',
        objective: 'عد إلى الردهة الرئيسية وأشعل مصباح الإشارة للإنقاذ',
        tag: 'ختام الرحلة — تحت سماء النجوم',
        title: 'نور في قلب الصحراء',
        sfx: 'flame',
        body: 'ارتفع وهج المصباح الذهبي ليغمر الردهة وينساب عبر النوافذ نحو الكثبان المضاءة بنور الهلال...\n\nمن لهيب الظهيرة والسبخة، إلى ظلال الوادي وقمة الشفق، انتهت رحلة التيه بسلام تحت سماء النجوم والمجرة.',
        whisper: 'ارتفع نور المصباح عالياً في سماء الليل... اكتملت رحلة السراب.',
        completesJourney: true,
      },
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
    this.stageInteractables = [];
    this.spatialAudioSpots = [];
    this.sunOccluders = [];

    this.palmTimeUniform = { value: 0 };
    this.palmStormUniform = { value: 0 };
    this.dustUniforms = null;
    this.dustPoints = null;
    this.hawks = [];
    this.hawkInst = null;
    this.beaconSprite = null;
    this.waypointMarker = null;
    this.stormIntensity = 0;

    this._dummy = new THREE.Object3D();
    this._faunaAccum = 0;
    this._baseDustCount = 200;
    this._dustMaxCount = 260;
  }

  getStageMeta(stageId = this.currentStageId) {
    return STAGE_METADATA[stageId] || STAGE_METADATA[1];
  }

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
    this.waypointMarker = null;
    this.dustPoints = null;
    this.dustUniforms = null;
    this.hawkInst = null;
    this.hawks.length = 0;
    this.stageInteractables.length = 0;
    this.spatialAudioSpots.length = 0;
    this.sunOccluders.length = 0;

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

    this.sky.applyStage(id, true);
    this.stormIntensity = STAGE_ATMOSPHERES[id].stormBase || 0;

    this.getHeight = createStageHeightSampler(id);
    this.getNormal = createStageNormalSampler(this.getHeight);
    const surfaceSampler = createStageSurfaceSampler(id, this.getHeight);

    let bounds = { type: 'box', minX: -145, maxX: 145, minZ: -145, maxZ: 145 };
    let maxSlope = 0.94;
    if (id === 2) {
      bounds = {
        type: 'corridor',
        minZ: -128,
        maxZ: 128,
        centerXFn: getCanyonCenterX,
        halfWidthFn: (z) => getCanyonHalfWidth(z) + 1.5,
      };
      maxSlope = 0.88;
    } else if (id === 3) {
      bounds = {
        type: 'corridor',
        minZ: -102,
        maxZ: 114,
        centerXFn: getRidgeCenterX,
        halfWidthFn: (z) => getRidgeHalfWidth(z) - 0.5,
      };
      maxSlope = 0.85;
    } else if (id === 4) {
      bounds = { type: 'box', minX: -110, maxX: 110, minZ: -110, maxZ: 132 };
    }

    this.physics.configureStage({
      heightSampler: this.getHeight,
      surfaceSampler,
      bounds,
      maxSlope,
    });

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

    this._buildStageTerrain(id, contactOccluders);
    this._buildHorizonSkirt(id);

    if (decalPlacements.length > 0) {
      const decalOpacity = id === 4 ? 0.42 : 0.44;
      const decalInst = createContactAODecalInstanced(this.tex, decalPlacements, this.getHeight, this.getNormal, decalOpacity);
      if (decalInst) this.stageGroup.add(decalInst);
    }

    this._createGPUDustParticles(id);
    this._createSubtleWaypointMarker();

    // Register solid world occluders with SkyLighting so the sun NEVER shines through mountains/cliffs/buildings!
    this.sky.setSunOcclusionContext(this.sunOccluders, this.getHeight, this.physics);

    this.applySettings(this.settings.getPreset());
    return STAGE_METADATA[id];
  }

  _createSubtleWaypointMarker() {
    // Clean delicate diamond beacon floating softly above the active objective (fades out within 7m!)
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.22, 0.30, 4),
      new THREE.MeshBasicMaterial({
        color: 0xffdf92,
        transparent: true,
        opacity: 0.78,
        side: THREE.DoubleSide,
        depthTest: false,
      })
    );
    ring.renderOrder = 10;
    ring.visible = false;
    this.waypointMarker = ring;
    this.stageGroup.add(ring);
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

    const isNight = stageId === 4;
    const isSunset = stageId === 3;
    bakeTerrainLightingAndContactAO(geo, this.getHeight, this.sky.sunDirection, {
      occluders: contactOccluders,
      sunStrength: isNight ? 0.16 : isSunset ? 0.20 : 0.17,
      cavityStrength: stageId === 2 ? 0.28 : 0.20,
      warmBounce: isNight ? [0.96, 1.0, 1.06] : isSunset ? [1.03, 0.96, 0.91] : [1.02, 0.99, 0.95],
      shadowTint: isNight ? [0.76, 0.82, 0.94] : isSunset ? [0.72, 0.64, 0.74] : [0.80, 0.74, 0.68],
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

    const useLambert = IS_MOBILE && this.settings.data.quality === 'low';
    const mat = useLambert
      ? new THREE.MeshLambertMaterial({
          map: sandPbr.map,
          normalMap: sandPbr.normalMap,
          normalScale: new THREE.Vector2(1.02, 1.02),
          vertexColors: true,
          color: atmos.sandTint,
        })
      : new THREE.MeshStandardMaterial({
          map: sandPbr.map,
          normalMap: sandPbr.normalMap,
          normalScale: new THREE.Vector2(1.05, 1.05),
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
          if (uStageId > 1.5 && uStageId < 2.5) {
            // Stratified desert sedimentary cliff walls in Stage 2!
            float wallGrad = smoothstep(3.8, 13.0, vTerrainWorldPos.y);
            float strata = sin(vTerrainWorldPos.y * 1.45 + sin(vTerrainWorldPos.x * 0.045 + vTerrainWorldPos.z * 0.045) * 1.2) * 0.5 + 0.5;
            vec3 strataCol = mix(vec3(0.46, 0.34, 0.24), vec3(0.72, 0.58, 0.43), strata);
            _secCol = mix(_secCol, strataCol, wallGrad * 0.78);
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
           diffuseColor.rgb *= mix(vec3(0.95, 0.91, 0.86), vec3(1.04, 1.0, 0.95), _macro);`
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
      saturation: stageId === 4 ? 0.88 : 0.92,
      contrast: 1.02,
      aerialStrength: stageId === 3 ? 0.44 : 0.0,
      aerialStart: 120,
      aerialEnd: 460,
    });

    return mat;
  }

  _buildHorizonSkirt(stageId) {
    const atmos = STAGE_ATMOSPHERES[stageId];
    const size = stageId === 3 ? 1900 : 1520;
    const segments = stageId === 3 ? 64 : 36;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);

    const innerHalf = STAGE_TERRAIN_CONFIG[stageId].size * 0.485;
    const pos = geo.attributes.position;
    const cols = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.max(Math.abs(x), Math.abs(z));
      let y;

      if (stageId === 3) {
        // EXACT SAME continuous Dune Sea heightfield as StageTerrain -> ZERO seam or color jump!
        const duneSea = getStage3DuneSeaHeight(x, z);
        const insideDip = dist < innerHalf ? -8.0 * (1.0 - dist / innerHalf) : 0.0;
        y = duneSea + insideDip;
      } else {
        y = getStageAnalyticHeight(stageId, x, z);
        if (dist < innerHalf) {
          y -= 16.0; // Strictly tucked far beneath playable terrain so it NEVER pokes through!
        } else {
          const farFactor = Math.min(1, (dist - innerHalf) / 260);
          y += (Math.sin(x * 0.008 + z * 0.006) * 16 + Math.cos(x * 0.005 - z * 0.009) * 12) * farFactor;
        }
      }

      pos.setY(i, y);
      const shade = THREE.MathUtils.clamp(0.92 + y * 0.004, 0.80, 1.05);
      cols[i * 3] = shade;
      cols[i * 3 + 1] = shade * 0.97;
      cols[i * 3 + 2] = shade * 0.94;
    }

    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    geo.computeVertexNormals();

    const sandPbr = this.tex.loadPBRSet('sand', 92, 92);
    const mat = new THREE.MeshStandardMaterial({
      map: sandPbr.map,
      roughness: 0.93,
      metalness: 0.01,
      vertexColors: true,
      color: atmos.sandTint,
    });
    attachDesertGrading(mat, {
      saturation: stageId === 4 ? 0.86 : 0.90,
      contrast: 1.01,
      aerialStrength: stageId === 3 ? 0.44 : 0.42,
      aerialStart: stageId === 3 ? 120 : 160,
      aerialEnd: stageId === 3 ? 460 : 620,
    });

    const mesh = new THREE.Mesh(geo, mat);
    this.stageGroup.add(mesh);
  }

  // ============================================================================
  // WATERTIGHT SOLID SCULPTED DESERT BOULDERS (Replaces broken open-shell rock_07/09!)
  // ============================================================================
  _createWatertightBoulderGeo(variant = 0) {
    // 100% closed-manifold, beveled stratified desert sandstone boulder with deep submerged base skirt!
    const geo = new THREE.IcosahedronGeometry(1.0, 2);
    const p = geo.attributes.position;
    const phase = variant === 0 ? 0.0 : 2.15;

    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i);
      let y = p.getY(i);
      let z = p.getZ(i);

      // Multi-frequency geological crag & sedimentary strata sculpting
      const n1 = Math.sin(x * 3.1 + phase) * Math.cos(z * 2.8 - phase) * 0.16;
      const n2 = Math.cos(y * 5.2 + x * 4.4 + phase) * 0.09;
      const strata = Math.sin(y * 9.5 + z * 1.8) * 0.045;
      const scale = 1.0 + n1 + n2 + strata;

      x *= (variant === 0 ? 1.18 : 1.32) * scale;
      z *= (variant === 0 ? 0.96 : 0.88) * scale;
      // Flatten upper cap slightly like wind-eroded desert sandstone and extend base smoothly downward
      if (y > 0) {
        y = Math.pow(y, 0.82) * (variant === 0 ? 0.78 : 0.62) * scale;
      } else {
        y = y * 0.65; // Solid deeply-planted bottom half (NEVER open or hollow!)
      }
      p.setXYZ(i, x, y, z);
    }
    geo.computeVertexNormals();
    // Bake rich crevice & ground-contact AO into boulder vertices!
    bakeRockContactAO(geo, { bottomAO: 0.56, topLift: 1.04, undersideAO: 0.22 });
    return geo;
  }

  _placeSolidBoulders(placements, occluders, decals, stageId) {
    if (!placements.length) return;
    const atmos = STAGE_ATMOSPHERES[stageId];
    const geo0 = this._createWatertightBoulderGeo(0);
    const geo1 = this._createWatertightBoulderGeo(1);

    const pbr = this.tex.loadPBRSet('sandstone_rock', 2, 2);
    const rockMat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: pbr.normalMap,
      normalScale: new THREE.Vector2(0.85, 0.85),
      roughness: 0.92,
      metalness: 0.02,
      vertexColors: true,
      color: atmos.rockTint,
    });
    rockMat.name = `solid_boulder_s${stageId}`;
    attachDesertGrading(rockMat, { saturation: 0.84, contrast: 1.03 });

    const list0 = placements.filter((p) => (p.type || 0) === 0);
    const list1 = placements.filter((p) => (p.type || 0) === 1);
    const dummy = this._dummy;

    const buildInst = (list, geo) => {
      if (!list.length) return;
      const inst = new THREE.InstancedMesh(geo, rockMat, list.length);
      inst.castShadow = !IS_MOBILE;
      inst.receiveShadow = true;
      list.forEach((p, i) => {
        const y = this.getHeight(p.x, p.z);
        // Sink boulder 28% into the sand/rock so base is 100% locked into sloped terrain with ZERO gaps!
        const sink = p.sy * 0.24;
        dummy.position.set(p.x, y - sink + p.sy * 0.35, p.z);
        dummy.rotation.set(0, p.ry || 0, 0);
        dummy.scale.set(p.sx, p.sy, p.sz);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);

        const rx = p.sx * 1.08;
        const rz = p.sz * 0.92;
        const topY = y - sink + p.sy * 0.95;
        this.physics.addEllipseCollider(p.x, p.z, rx, rz, p.ry || 0, topY, p.climbable !== false);
        occluders.push({ type: 'circle', x: p.x, z: p.z, rx: rx * 1.1, rz: rz * 1.1, pad: 2.0, strength: 0.36 });
        decals.push({ x: p.x, z: p.z, sx: rx * 2.45, sz: rz * 2.45, ry: p.ry || 0 });
      });
      inst.instanceMatrix.needsUpdate = true;
      this.stageGroup.add(inst);
      this.sunOccluders.push(inst);
    };

    buildInst(list0, geo0);
    buildInst(list1, geo1);
  }

  // ============================================================================
  // NATURAL GROUNDED STRATIFIED MESAS & CLIFFS (Zero washed-out pale bottom!)
  // ============================================================================
  _createStratifiedMesaGeo() {
    const mesaGeo = new THREE.CylinderGeometry(0.52, 1.16, 1.0, 20, 10, false);
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
        const baseLin = 1.16 + (0.52 - 1.16) * y;
        const mult = r0 >= baseLin * 0.9 ? targetR / r0 : targetR / Math.max(0.01, baseLin);
        mp.setXYZ(i, x * mult, y, z * mult);
      }
    }
    mesaGeo.computeVertexNormals();
    bakeRockContactAO(mesaGeo, { bottomAO: 0.58, topLift: 1.04, undersideAO: 0.24 });
    return mesaGeo;
  }

  _placeStratifiedMesas(mesas, occluders, stageId, addColliders = true) {
    if (!mesas.length) return;
    const atmos = STAGE_ATMOSPHERES[stageId];
    const mesaGeo = this._createStratifiedMesaGeo();
    const pbr = this.tex.loadPBRSet('sandstone_rock', 5, 3);
    const mesaMat = new THREE.MeshStandardMaterial({
      map: pbr.map,
      normalMap: pbr.normalMap,
      normalScale: new THREE.Vector2(0.95, 0.95),
      roughness: 0.94,
      metalness: 0.02,
      vertexColors: true,
      color: atmos.rockTint,
    });
    mesaMat.name = `mesa_strata_v6_s${stageId}`;

    // Rich crisp geological strata all the way down into the ground + warm contact grounding (ZERO washed-out pale skirt!)
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
           diffuseColor.rgb = mix(vec3(_ml), diffuseColor.rgb, 0.65);
           float bandCoord = vMesaWorldPos.y * 0.52 + sin(vMesaWorldPos.x * 0.035 + vMesaWorldPos.z * 0.03) * 0.85;
           float strata1 = sin(bandCoord * 3.0) * 0.5 + 0.5;
           float strata2 = sin(bandCoord * 8.5 + 1.3) * 0.5 + 0.5;
           vec3 warmSandstone = vec3(0.84, 0.72, 0.56);
           vec3 deepOchre     = vec3(0.56, 0.42, 0.30);
           vec3 strataTint = mix(deepOchre, warmSandstone, strata1 * 0.64 + strata2 * 0.36);
           diffuseColor.rgb *= mix(vec3(0.86), strataTint * 1.32, 0.72);
           // Natural subtle ground-contact sand-crevice darkening (NEVER pale washed-out!)
           float baseCrevice = smoothstep(0.18, 0.0, vMesaLocalY);
           diffuseColor.rgb *= (1.0 - baseCrevice * 0.18);`
        );
    };
    attachDesertGrading(mesaMat, {
      saturation: 0.84,
      contrast: 1.03,
      aerialStrength: stageId === 2 ? 0.26 : 0.42,
      aerialStart: 68,
      aerialEnd: 245,
    });

    const inst = new THREE.InstancedMesh(mesaGeo, mesaMat, mesas.length);
    inst.castShadow = !IS_MOBILE && stageId === 2;
    inst.receiveShadow = true;

    const dummy = this._dummy;
    mesas.forEach((m, idx) => {
      const gy = m.y !== undefined ? m.y : this.getHeight(m.x, m.z);
      // Plant 7.5m deep into terrain so flared talus meets the desert smoothly from EVERY angle!
      dummy.position.set(m.x, gy - 7.5, m.z);
      dummy.rotation.set(0, m.ry || 0, 0);
      dummy.scale.set(m.sx, m.sy + 3.0, m.sz);
      dummy.updateMatrix();
      inst.setMatrixAt(idx, dummy.matrix);

      if (addColliders) {
        this.physics.addMesaCollider(m.x, m.z, m.sx, m.sz, m.ry || 0, gy - 3.0, m.sy + 3.0);
      }
      occluders.push({ type: 'circle', x: m.x, z: m.z, rx: m.sx * 1.25, rz: m.sz * 1.25, pad: 5.5, strength: 0.44 });
    });
    inst.instanceMatrix.needsUpdate = true;
    this.stageGroup.add(inst);
    this.sunOccluders.push(inst);
  }

  // ============================================================================
  // REALISTIC ARABIAN DATE PALMS (Feathered Pinnate Fronds + Ringed Bark Trunks!)
  // ============================================================================
  _placeDesertPalms(palmSites, occluders, decals) {
    if (!palmSites.length) return;
    const barkTex = this.tex.createPalmBarkTexture();
    const trunkMat = new THREE.MeshStandardMaterial({
      map: barkTex,
      roughness: 0.94,
      metalness: 0.0,
      vertexColors: true,
      color: 0xd8c6ae,
    });
    attachDesertGrading(trunkMat, { saturation: 0.88, contrast: 1.02 });

    const frondTex = this.tex.createPalmFrondTexture();
    const frondMat = new THREE.MeshLambertMaterial({
      map: frondTex,
      alphaTest: 0.36,
      side: THREE.DoubleSide,
      color: 0xe2e4c8,
    });
    frondMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.palmTimeUniform;
      shader.uniforms.uStorm = this.palmStormUniform;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nuniform float uTime;\nuniform float uStorm;`)
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
           float tipDist = length(position.xz);
           float swayAmp = (0.04 + uStorm * 0.14) * tipDist;
           float swayFreq = 1.4 + uStorm * 2.2;
           float phase = instanceMatrix[3][0] * 0.25 + instanceMatrix[3][2] * 0.25;
           transformed.x += sin(uTime * swayFreq + phase) * swayAmp;
           transformed.y += cos(uTime * swayFreq * 0.8 + phase) * swayAmp * 0.45;`
        );
    };

    // Build lush 18-frond 2-tier gracefully arching & drooping date-palm crown!
    const frondParts = [];
    const buildFrond = (length, width, yaw, startPitch, droop) => {
      const fGeo = new THREE.PlaneGeometry(width, length, 2, 7);
      const fp = fGeo.attributes.position;
      for (let i = 0; i < fp.count; i++) {
        const rawY = fp.getY(i);
        const t = THREE.MathUtils.clamp((rawY + length * 0.5) / length, 0, 1); // 0 at stem base -> 1 at tip
        // Natural parabolic gravity arch: rises gently near stem, then gracefully curves OUT & DOWN!
        const archOut = t * length;
        const archUp = Math.sin(t * Math.PI * 0.78) * (length * 0.32) - Math.pow(t, 2.2) * droop;
        // Subtle V-fold along center rachis so frond has real 3D depth!
        const vx = fp.getX(i);
        const vFold = -Math.abs(vx) * 0.24;
        fp.setXYZ(i, vx, archUp + vFold, archOut);
      }
      const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(startPitch, yaw, 0, 'YXZ'));
      fGeo.applyMatrix4(m);
      fGeo.computeVertexNormals();
      return fGeo;
    };

    // Upper sunlit canopy ring (8 fronds arching gently upward & outward)
    for (let i = 0; i < 8; i++) {
      const yaw = (i / 8) * Math.PI * 2 + 0.2;
      frondParts.push(buildFrond(3.4, 1.35, yaw, -0.32, 0.72));
    }
    // Mid-lower lush drooping canopy ring (10 wider fronds gracefully draping downward!)
    for (let i = 0; i < 10; i++) {
      const yaw = (i / 10) * Math.PI * 2 + 0.55;
      frondParts.push(buildFrond(4.0, 1.55, yaw, 0.05, 1.48));
    }
    const crownGeo = mergeGeometries(frondParts, false);
    frondParts.forEach((g) => g.dispose());

    const crownInst = new THREE.InstancedMesh(crownGeo, frondMat, palmSites.length);
    crownInst.castShadow = !IS_MOBILE;

    // Warm golden date clusters + fibrous crown collar at top of trunk
    const dateCollarMat = new THREE.MeshLambertMaterial({ color: 0x9c7238 });
    const collarGeos = [];
    const trunkGeos = [];
    const dummy = this._dummy;

    palmSites.forEach((p, idx) => {
      const gy = this.getHeight(p.x, p.z);
      // Curved organic ringed palm trunk with natural flared root base
      const tGeo = new THREE.CylinderGeometry(0.18, 0.34, p.h + 0.8, 9, 8);
      const tp = tGeo.attributes.position;
      for (let i = 0; i < tp.count; i++) {
        const ny = (tp.getY(i) + (p.h + 0.8) * 0.5) / (p.h + 0.8);
        const rootFlair = ny < 0.18 ? 1.0 + (0.18 - ny) * 1.4 : 1.0;
        tp.setX(i, tp.getX(i) * rootFlair + ny * ny * p.h * p.lean);
        tp.setZ(i, tp.getZ(i) * rootFlair);
      }
      tGeo.translate(0, (p.h + 0.8) * 0.5 - 0.6, 0);
      bakeRockContactAO(tGeo, { bottomAO: 0.58, topLift: 1.02, undersideAO: 0.12 });
      const m = new THREE.Matrix4().makeRotationY(p.ry);
      m.setPosition(p.x, gy, p.z);
      tGeo.applyMatrix4(m);
      tGeo.computeVertexNormals();
      trunkGeos.push(tGeo);

      const topX = p.x + Math.cos(p.ry) * (p.h * p.lean);
      const topZ = p.z - Math.sin(p.ry) * (p.h * p.lean);

      // Fibrous crown heart / hanging dates
      const cGeo = new THREE.SphereGeometry(0.42, 8, 6);
      cGeo.scale(1.0, 1.35, 1.0);
      cGeo.translate(topX, gy + p.h - 0.38, topZ);
      collarGeos.push(cGeo);

      dummy.position.set(topX, gy + p.h - 0.12, topZ);
      dummy.rotation.set(0, p.ry, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      crownInst.setMatrixAt(idx, dummy.matrix);

      this.physics.addCylinderCollider(p.x, p.z, 0.36, gy + p.h, false);
      occluders.push({ type: 'circle', x: p.x, z: p.z, r: 0.9, pad: 2.2, strength: 0.34 });
      decals.push({ x: p.x, z: p.z, sx: 3.0, sz: 3.0, ry: p.ry });
    });
    crownInst.instanceMatrix.needsUpdate = true;

    const mergedTrunks = new THREE.Mesh(mergeGeometries(trunkGeos, false), trunkMat);
    mergedTrunks.castShadow = !IS_MOBILE;
    mergedTrunks.receiveShadow = true;
    trunkGeos.forEach((g) => g.dispose());

    const mergedCollars = new THREE.Mesh(mergeGeometries(collarGeos, false), dateCollarMat);
    collarGeos.forEach((g) => g.dispose());

    this.stageGroup.add(mergedTrunks, mergedCollars, crownInst);
  }

  _placeDesertShrubs(sites) {
    if (!sites.length) return;
    // Soft sun-bleached Arabian desert scrub bushes (rimth / haloxylon) instead of spiky dark cones!
    const puffs = [];
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.4;
      const r = i === 0 ? 0.0 : 0.24;
      const rad = i === 0 ? 0.30 : 0.21 + (i % 2) * 0.05;
      const puff = new THREE.IcosahedronGeometry(rad, 1);
      const pos = puff.attributes.position;
      for (let k = 0; k < pos.count; k++) {
        const vx = pos.getX(k);
        const vy = pos.getY(k);
        const vz = pos.getZ(k);
        const jit = 0.84 + 0.28 * Math.abs(Math.sin(vx * 9.3 + vz * 7.1 + i));
        pos.setXYZ(k, vx * jit * 1.18, vy * jit * 0.68, vz * jit * 1.18);
      }
      puff.computeVertexNormals();
      puff.translate(Math.cos(a) * r, rad * 0.42, Math.sin(a) * r);
      puffs.push(puff);
    }
    const mergedGeo = mergeGeometries(puffs, false);
    puffs.forEach((b) => b.dispose());
    const shrubMat = new THREE.MeshLambertMaterial({ color: 0xa29368 });
    const inst = new THREE.InstancedMesh(mergedGeo, shrubMat, sites.length);

    const dummy = this._dummy;
    sites.forEach((s, idx) => {
      const y = this.getHeight(s.x, s.z);
      const sc = s.scale ?? 1.0;
      dummy.position.set(s.x, y - 0.05, s.z);
      dummy.rotation.set(0, s.ry ?? idx, 0);
      dummy.scale.set(sc * 1.1, sc * 0.85, sc * 1.1);
      dummy.updateMatrix();
      inst.setMatrixAt(idx, dummy.matrix);
    });
    inst.instanceMatrix.needsUpdate = true;
    this.stageGroup.add(inst);
  }

  _createSoaringHawks(centerZ = 0, altitudeBase = 26) {
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
        centerX: i % 2 === 0 ? -14 : 16,
        centerZ: centerZ + (i - 1.5) * 38,
        radius: 26 + i * 9,
        altitude: altitudeBase + i * 5,
        speed: 0.21 + i * 0.035,
        phase: i * 1.65,
      });
    }
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
  // STAGE 1 (NOON): Abandoned Bedouin Camp + Carved Sabkha Stele + Twin Monolith Gate
  // ============================================================================
  _buildStage1Plains(occluders, decals) {
    const wood = this.tex.loadPBRSet('desert_wood', 1, 1);
    const woodMat = new THREE.MeshLambertMaterial({ map: wood.map, color: 0xb49978 });
    const fab = this.tex.loadPBRSet('tattered_fabric', 2, 2);
    const fabMat = new THREE.MeshLambertMaterial({ map: fab.map, side: THREE.DoubleSide, color: 0xd4be9c });
    const stonePbr = this.tex.loadPBRSet('sandstone_rock', 2, 2);
    const steleMat = new THREE.MeshStandardMaterial({
      map: stonePbr.map,
      normalMap: stonePbr.normalMap,
      roughness: 0.9,
      vertexColors: true,
      color: 0xe6d6bc,
    });
    const paperMat = new THREE.MeshLambertMaterial({ color: 0xefe1be, side: THREE.DoubleSide });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd1a44a, roughness: 0.35, metalness: 0.8 });

    // --- LANDMARK 1.1: Abandoned Bedouin Caravan Camp (-14, 72) with shade canopy, embers firepit, crates & note! ---
    const cx = -14;
    const cz = 72;
    const cy = this.getHeight(cx, cz);
    const campGroup = new THREE.Group();
    campGroup.position.set(cx, cy, cz);
    campGroup.rotation.y = 0.38;

    // 4 weathered tent posts + sun-bleached cloth awning
    [[-1.8, -1.3], [1.8, -1.3], [-1.8, 1.3], [1.8, 1.3]].forEach(([px, pz]) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 2.4, 6), woodMat);
      post.position.set(px, 1.15, pz);
      campGroup.add(post);
    });
    const awning = new THREE.Mesh(new THREE.PlaneGeometry(3.9, 2.9, 5, 4), fabMat);
    awning.rotation.x = -Math.PI / 2 + 0.14;
    awning.position.set(0, 2.28, 0);
    campGroup.add(awning);

    // Stone-ringed firepit with glowing warm embers right in front of canopy!
    const emberMat = new THREE.MeshBasicMaterial({ color: 0xff6e24 });
    const emberDisc = new THREE.Mesh(new THREE.CircleGeometry(0.55, 10), emberMat);
    emberDisc.rotation.x = -Math.PI / 2;
    emberDisc.position.set(0.2, 0.05, 2.4);
    campGroup.add(emberDisc);
    const fireLight = new THREE.PointLight(0xff7e30, 2.2, 7.5, 1.8);
    fireLight.position.set(0.2, 0.45, 2.4);
    campGroup.add(fireLight);

    // Supply crate + Salem's torn note resting on top
    const campCrate = this.models.createMesh('crate', 1.25);
    if (campCrate) {
      campCrate.position.set(-0.7, 0, -0.3);
      campGroup.add(campCrate);
    }
    const campBarrel = this.models.createMesh('barrel', 0.72);
    if (campBarrel) {
      campBarrel.position.set(1.05, 0, -0.5);
      campGroup.add(campBarrel);
    }
    const noteSheet = new THREE.Mesh(new THREE.PlaneGeometry(0.38, 0.28), paperMat);
    noteSheet.rotation.x = -Math.PI / 2;
    noteSheet.position.set(-0.7, 0.56, -0.3);
    campGroup.add(noteSheet);
    this.stageGroup.add(campGroup);
    this.physics.addBoxCollider(cx - 1.6, cx + 1.6, cz - 1.4, cz + 1.4, cy, cy + 1.1, true);
    occluders.push({ type: 'box', x: cx, z: cz, hx: 2.2, hz: 1.8, pad: 2.2, strength: 0.34 });
    this.spatialAudioSpots.push({ type: 'campfire', x: cx, y: cy, z: cz + 2.2 });

    this.stageInteractables.push({
      id: 'camp_clue',
      label: 'قراءة رسالة سالم في المعسكر',
      worldPos: new THREE.Vector3(cx - 0.5, cy + 0.8, cz - 0.2),
      radius: 4.5,
    });

    // --- LANDMARK 1.2: Ancient Carved Sabkha Boundary Stele (14, -8) with Salem's Brass Pocket Watch! ---
    const sx = 14;
    const sz = -8;
    const sy = this.getHeight(sx, sz);
    const steleGroup = new THREE.Group();
    steleGroup.position.set(sx, sy, sz);
    const basePlinth = new THREE.Mesh(createBakedArchitecturalBox(1.9, 0.7, 1.5, { bottomAO: 0.54 }), steleMat);
    basePlinth.position.y = 0.25;
    const monolith = new THREE.Mesh(createBakedArchitecturalBox(0.95, 2.75, 0.55, { bottomAO: 0.56 }), steleMat);
    monolith.position.set(0, 1.85, -0.15);
    monolith.rotation.z = 0.04;
    // Glinting brass pocket-watch box resting on the front ledge!
    const watch = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.06, 12), brassMat);
    watch.position.set(0.15, 0.63, 0.42);
    steleGroup.add(basePlinth, monolith, watch);
    this.stageGroup.add(steleGroup);
    this.sunOccluders.push(steleGroup);
    this.physics.addBoxCollider(sx - 1.0, sx + 1.0, sz - 0.85, sz + 0.85, sy, sy + 3.2, false);
    occluders.push({ type: 'box', x: sx, z: sz, hx: 1.2, hz: 1.0, pad: 2.4, strength: 0.38 });
    decals.push({ x: sx, z: sz, sx: 3.4, sz: 3.0, ry: 0 });

    this.stageInteractables.push({
      id: 'sabkha_stele',
      label: 'فحص الشاهد الحجري وساعة سالم',
      worldPos: new THREE.Vector3(sx, sy + 1.1, sz + 0.4),
      radius: 4.5,
    });

    // --- Grounded Twin Sandstone Canyon Entrance Cliffs + Framing Horizon Mesas ---
    const mesas = [
      { x: -13.5, z: -116, sx: 12.5, sy: 21.0, sz: 11.5, ry: 0.5 },
      { x: 21.5, z: -114, sx: 13.0, sy: 22.5, sz: 12.0, ry: 1.7 },
      { x: -128, z: -98, sx: 44, sy: 28, sz: 34, ry: 0.4 },
      { x: 122, z: -110, sx: 48, sy: 30, sz: 38, ry: 2.0 },
      { x: -136, z: 34, sx: 46, sy: 26, sz: 36, ry: 2.5 },
      { x: 134, z: 46, sx: 42, sy: 25, sz: 34, ry: 1.1 },
    ];
    this._placeStratifiedMesas(mesas, occluders, 1, true);

    // --- Watertight Sculpted Desert Boulders (ZERO hollow scans, ZERO stacked pyramids!) ---
    const boulders = [
      { x: -10.5, z: 98, sx: 2.2, sy: 1.4, sz: 1.8, ry: 0.6, type: 0 },
      { x: 12.0, z: 84, sx: 2.6, sy: 1.6, sz: 2.0, ry: 2.0, type: 1 },
      { x: -20.5, z: 52, sx: 3.2, sy: 2.0, sz: 2.5, ry: 1.2, type: 0 },
      { x: 22.0, z: 32, sx: 2.8, sy: 1.7, sz: 2.2, ry: 0.4, type: 1 },
      { x: -26.0, z: -22, sx: 3.5, sy: 2.2, sz: 2.6, ry: 2.5, type: 0 },
      { x: 26.5, z: -42, sx: 3.0, sy: 1.9, sz: 2.3, ry: 1.8, type: 1 },
      { x: -15.5, z: -74, sx: 3.4, sy: 2.1, sz: 2.5, ry: 0.9, type: 0 },
      { x: 17.5, z: -88, sx: 3.2, sy: 2.0, sz: 2.4, ry: 2.3, type: 1 },
    ];
    let seed = 1097;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let i = 0; i < 20; i++) {
      const x = (rand() - 0.5) * 180;
      const z = (rand() - 0.5) * 200;
      if (Math.hypot(x - cx, z - cz) < 8 || Math.hypot(x - sx, z - sz) < 8) continue;
      if (getStage1SabkhaMask(x, z) > 0.50) continue;
      const s = 1.4 + rand() * 2.4;
      boulders.push({ x, z, sx: s * 1.15, sy: s * 0.72, sz: s * 0.95, ry: rand() * 6.28, type: i % 2 });
    }
    this._placeSolidBoulders(boulders, occluders, decals, 1);

    const shrubs = [];
    for (let i = 0; i < 38; i++) {
      const x = (rand() - 0.5) * 160;
      const z = (rand() - 0.5) * 200;
      if (getStage1SabkhaMask(x, z) > 0.35) continue;
      shrubs.push({ x, z, scale: 0.75 + rand() * 0.85, ry: rand() * 6.28 });
    }
    this._placeDesertShrubs(shrubs);
    this._createSoaringHawks(0, 28);
  }

  // ============================================================================
  // STAGE 2 (AFTERNOON): Wide Rocky Canyon + Stratified Cliffs + Realistic Palm Oasis + Ruins!
  // ============================================================================
  _buildStage2Canyon(occluders, decals) {
    // 1. Deeply anchored towering stratified cliffs strictly outside wide walkable canyon floor
    const cliffButtresses = [];
    for (let z = 112; z >= -122; z -= 20) {
      const cx = getCanyonCenterX(z);
      const hw = getCanyonHalfWidth(z);
      const floorY = this.getHeight(cx, z);
      cliffButtresses.push({
        x: cx - hw - 14.5 - Math.sin(z * 0.13) * 2.0,
        z: z + 3,
        y: floorY - 2.0,
        sx: 16.0 + (Math.abs(z) % 5),
        sy: 40 + ((Math.abs(z) * 7) % 12),
        sz: 15.0,
        ry: (z * 0.17) % 6.28,
      });
      cliffButtresses.push({
        x: cx + hw + 14.5 + Math.cos(z * 0.11) * 2.0,
        z: z - 4,
        y: floorY - 2.0,
        sx: 16.5 + ((Math.abs(z) + 2) % 5),
        sy: 42 + ((Math.abs(z) * 5) % 10),
        sz: 15.5,
        ry: (z * 0.23 + 1.2) % 6.28,
      });
    }
    this._placeStratifiedMesas(cliffButtresses, occluders, 2, true);

    // 2. Realistic Arabian Date Palm Oasis (with feathered arching fronds & 3D spatial rustling audio!)
    const oX = getCanyonCenterX(-14);
    const palmSites = [
      { x: oX - 9.5, z: -6, h: 7.2, lean: 0.14, ry: 0.4 },
      { x: oX - 12.2, z: -12, h: 5.8, lean: 0.18, ry: 1.5 },
      { x: oX - 8.4, z: -18, h: 7.6, lean: 0.12, ry: 0.9 },
      { x: oX - 11.4, z: -24, h: 6.2, lean: -0.14, ry: 2.3 },
      { x: oX + 10.2, z: -8, h: 6.6, lean: -0.16, ry: 3.1 },
      { x: oX + 12.4, z: -16, h: 7.4, lean: -0.14, ry: 2.6 },
      { x: oX + 9.2, z: -24, h: 5.6, lean: 0.16, ry: 4.0 },
      { x: getCanyonCenterX(44) + 12.0, z: 44, h: 6.0, lean: -0.14, ry: 1.9 },
      { x: getCanyonCenterX(-64) - 11.4, z: -64, h: 6.4, lean: 0.15, ry: 0.8 },
    ];
    this._placeDesertPalms(palmSites, occluders, decals);
    this.spatialAudioSpots.push({ type: 'palms', x: oX, y: this.getHeight(oX, -14), z: -14 });

    // 3. Ancient Canyon Ruins (squarely on flat rocky plaza!) + Interactive Caravanserai Note + Oasis Well!
    this._buildCanyonRuinsAndLandmarks(occluders, decals);

    // 4. Watertight Sculpted Canyon Edge Boulders
    const boulders = [];
    let seed = 2293;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let z = 104; z >= -108; z -= 11) {
      const cx = getCanyonCenterX(z);
      const hw = getCanyonHalfWidth(z);
      for (const side of [-1, 1]) {
        if (rand() < 0.38) continue;
        const off = (hw * 0.62 + rand() * 3.8) * side;
        const s = 1.6 + rand() * 2.2;
        boulders.push({
          x: cx + off,
          z: z + (rand() - 0.5) * 4.0,
          sx: s * 1.15,
          sy: s * 0.72,
          sz: s * 0.95,
          ry: rand() * 6.28,
          type: Math.floor(rand() * 2),
        });
      }
    }
    this._placeSolidBoulders(boulders, occluders, decals, 2);

    const shrubs = [];
    for (let i = 0; i < 34; i++) {
      const z = -108 + rand() * 216;
      const cx = getCanyonCenterX(z);
      const hw = getCanyonHalfWidth(z);
      shrubs.push({ x: cx + (rand() - 0.5) * hw * 1.45, z, scale: 0.8 + rand() * 0.8, ry: rand() * 6.28 });
    }
    this._placeDesertShrubs(shrubs);
    this._createSoaringHawks(-10, 36);
  }

  _buildCanyonRuinsAndLandmarks(occluders, decals) {
    const adobe = this.tex.loadPBRSet('adobe_wall', 1, 1);
    const ruinMat = new THREE.MeshStandardMaterial({
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
         diffuseColor.rgb = mix(vec3(_rl), diffuseColor.rgb, 0.55) * 1.42 + vec3(0.035, 0.025, 0.015);`
      );
    };
    attachDesertGrading(ruinMat, { saturation: 0.84, contrast: 1.02 });

    const wood = this.tex.loadPBRSet('desert_wood', 1, 1);
    const woodMat = new THREE.MeshLambertMaterial({ map: wood.map, color: 0xd8be9a, emissive: 0x22160a, emissiveIntensity: 0.45 });
    const rock = this.tex.loadPBRSet('sandstone_rock', 2, 2);
    const stoneMat = new THREE.MeshLambertMaterial({ map: rock.map, color: 0xc2ab8e });
    const paperMat = new THREE.MeshLambertMaterial({ color: 0xefe1be, side: THREE.DoubleSide });

    const ruinPieces = [];
    const beamPieces = [];

    const addRuinWall = (wx, wz, w, h, d, ry = 0) => {
      const gy = this.getHeight(wx, wz);
      const foot = 1.6;
      const geo = createBakedArchitecturalBox(w, h + foot, d, { bottomAO: 0.58, topAO: 0.98, cornerAO: 0.20, tileScale: 1.4 });
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

    const addArchway = (wx, wz, span = 5.4, height = 4.1, ry = 0) => {
      const cos = Math.cos(ry);
      const sin = Math.sin(ry);
      const half = span * 0.5;
      const lx = wx - half * cos;
      const lz = wz + half * sin;
      const rx = wx + half * cos;
      const rz = wz - half * sin;
      const baseTop = Math.max(this.getHeight(lx, lz), this.getHeight(rx, rz)) + height;
      addRuinWall(lx, lz, 0.95, Math.max(2.2, baseTop - this.getHeight(lx, lz)), 0.95, ry);
      addRuinWall(rx, rz, 0.95, Math.max(2.2, baseTop - this.getHeight(rx, rz) - 0.1), 0.95, ry);
      const lintel = new THREE.BoxGeometry(span + 1.3, 0.38, 0.76);
      const m = new THREE.Matrix4().compose(
        new THREE.Vector3(wx, baseTop - 0.22, wz),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, -0.02)),
        new THREE.Vector3(1, 1, 1)
      );
      lintel.applyMatrix4(m);
      beamPieces.push(lintel);
    };

    // Ruin Site 1: Caravanserai Courtyard squarely on flat rocky plaza (z = +42)
    const r1x = getCanyonCenterX(42);
    addArchway(r1x, 42, 5.6, 4.1, 0.08);
    addRuinWall(r1x - 7.8, 39.2, 5.8, 2.5, 0.68, 0.20);
    addRuinWall(r1x + 7.6, 43.8, 5.2, 2.2, 0.66, -0.24);
    addRuinWall(r1x - 9.2, 46.2, 0.76, 1.5, 4.2, 0.10);

    // Interactive Note on weathered crate inside Ruins 1!
    const noteX = r1x - 5.2;
    const noteZ = 40.8;
    const noteY = this.getHeight(noteX, noteZ);
    const noteSheet = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.32), paperMat);
    noteSheet.rotation.x = -Math.PI / 2;
    noteSheet.position.set(noteX, noteY + 0.56, noteZ);
    this.stageGroup.add(noteSheet);
    this.stageInteractables.push({
      id: 'ruin_note',
      label: 'قراءة مذكرة سالم في الخان',
      worldPos: new THREE.Vector3(noteX, noteY + 0.8, noteZ),
      radius: 4.4,
    });

    // LANDMARK 2.2: Ancient Oasis Stone Well + Extinguished Brass Caravan Lantern (z = -14)
    const wellX = getCanyonCenterX(-14) - 4.5;
    const wellZ = -14;
    const wellY = this.getHeight(wellX, wellZ);
    const wellGroup = new THREE.Group();
    wellGroup.position.set(wellX, wellY, wellZ);
    const wellRing = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.48, 1.15, 12, 1, true), stoneMat);
    wellRing.position.y = 0.52;
    const wellRim = new THREE.Mesh(new THREE.TorusGeometry(1.38, 0.14, 6, 16), stoneMat);
    wellRim.rotation.x = Math.PI / 2;
    wellRim.position.y = 1.06;
    const wellWater = new THREE.Mesh(new THREE.CircleGeometry(1.25, 12), new THREE.MeshBasicMaterial({ color: 0x162426 }));
    wellWater.rotation.x = -Math.PI / 2;
    wellWater.position.y = 0.35;
    const lanternProp = this.models.createMesh('lantern', 0.17);
    if (lanternProp) {
      lanternProp.position.set(1.18, 1.12, 0.65);
      wellGroup.add(lanternProp);
    }
    wellGroup.add(wellRing, wellRim, wellWater);
    this.stageGroup.add(wellGroup);
    this.physics.addCylinderCollider(wellX, wellZ, 1.55, wellY + 1.5, false);
    occluders.push({ type: 'circle', x: wellX, z: wellZ, r: 1.6, pad: 2.2, strength: 0.36 });
    decals.push({ x: wellX, z: wellZ, sx: 4.2, sz: 4.2, ry: 0 });

    this.stageInteractables.push({
      id: 'oasis_well',
      label: 'فحص بئر الواحة والفانوس',
      worldPos: new THREE.Vector3(wellX + 1.1, wellY + 1.25, wellZ + 0.6),
      radius: 4.5,
    });

    // Ruin Site 2 & Mountain Ascent Gate
    const r2x = getCanyonCenterX(-64);
    addArchway(r2x + 0.5, -64, 5.2, 3.9, -0.14);
    addRuinWall(r2x + 7.6, -60.5, 5.4, 2.7, 0.68, -0.18);
    addRuinWall(r2x - 7.4, -67.0, 4.8, 2.1, 0.66, 0.25);

    const r3x = getCanyonCenterX(-114);
    addArchway(r3x, -114, 5.8, 4.4, 0.04);

    if (ruinPieces.length) {
      const mesh = new THREE.Mesh(mergeGeometries(ruinPieces, false), ruinMat);
      mesh.castShadow = !IS_MOBILE;
      mesh.receiveShadow = true;
      ruinPieces.forEach((g) => g.dispose());
      this.stageGroup.add(mesh);
      this.sunOccluders.push(mesh);
    }
    if (beamPieces.length) {
      const bMesh = new THREE.Mesh(mergeGeometries(beamPieces, false), woodMat);
      bMesh.castShadow = !IS_MOBILE;
      beamPieces.forEach((g) => g.dispose());
      this.stageGroup.add(bMesh);
      this.sunOccluders.push(bMesh);
    }

    const crateGeo = this.models.getGeometry('crate');
    const crateMat = this.models.getMaterial('crate');
    if (crateGeo && crateMat) {
      const cPos = [
        [r1x - 5.2, 40.8, 0.3, 1.28],
        [r1x + 5.2, 43.2, 1.1, 1.1],
        [r2x + 5.4, -62.0, -0.3, 1.3],
      ];
      const inst = new THREE.InstancedMesh(crateGeo, crateMat, cPos.length);
      cPos.forEach(([x, z, ry, sc], i) => {
        const y = this.getHeight(x, z);
        this._dummy.position.set(x, y - 0.05, z);
        this._dummy.rotation.set(0.05, ry, -0.04);
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
        this._dummy.position.set(x, y - 0.06, z);
        this._dummy.rotation.set(0.08, i * 1.4, 0);
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
  // STAGE 3 (SUNSET/DUSK): High Mountain Peak + Mid-Ridge Shelter + Summit Spyglass Overlooking Seamless Dune Sea!
  // ============================================================================
  _buildStage3Summit(occluders, decals) {
    const wood = this.tex.loadPBRSet('desert_wood', 1, 1);
    const woodMat = new THREE.MeshLambertMaterial({ map: wood.map, color: 0xb69c7e });
    const adobe = this.tex.loadPBRSet('adobe_wall', 1, 1);
    const shelterMat = new THREE.MeshStandardMaterial({
      map: adobe.map,
      normalMap: adobe.normalMap,
      roughness: 0.92,
      vertexColors: true,
      color: 0xe2ceb2,
    });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4a64a, roughness: 0.34, metalness: 0.82 });
    const paperMat = new THREE.MeshLambertMaterial({ color: 0xefe1be, side: THREE.DoubleSide });

    // --- LANDMARK 3.1: Mid-Ridge Stone Watch Shelter (z = +20) with Salem's Star Map! ---
    const shX = getRidgeCenterX(20) - 4.8;
    const shZ = 20;
    const shY = this.getHeight(shX, shZ);
    const shGroup = new THREE.Group();
    shGroup.position.set(shX, shY, shZ);
    shGroup.rotation.y = 0.25;
    const backW = new THREE.Mesh(createBakedArchitecturalBox(3.6, 2.8, 0.55), shelterMat);
    backW.position.set(0, 1.0, -1.4);
    const sideW = new THREE.Mesh(createBakedArchitecturalBox(0.55, 2.4, 2.8), shelterMat);
    sideW.position.set(-1.6, 0.8, 0);
    const shCrate = this.models.createMesh('crate', 1.22);
    if (shCrate) {
      shCrate.position.set(0.3, 0, -0.5);
      shGroup.add(shCrate);
    }
    const starMap = new THREE.Mesh(new THREE.PlaneGeometry(0.45, 0.34), paperMat);
    starMap.rotation.x = -Math.PI / 2;
    starMap.position.set(0.3, 0.55, -0.5);
    shGroup.add(backW, sideW, starMap);
    this.stageGroup.add(shGroup);
    this.sunOccluders.push(shGroup);
    this.physics.addBoxCollider(shX - 2.0, shX + 1.8, shZ - 1.8, shZ + 1.2, shY - 1, shY + 2.8, false);
    occluders.push({ type: 'box', x: shX, z: shZ, hx: 2.0, hz: 1.6, pad: 2.4, strength: 0.38 });

    this.stageInteractables.push({
      id: 'ridge_shelter',
      label: 'قراءة خريطة النجوم في المأوى',
      worldPos: new THREE.Vector3(shX + 0.3, shY + 0.8, shZ - 0.4),
      radius: 4.5,
    });

    // --- LANDMARK 3.2: Summit Overlook Brass Spyglass Tripod (z = -96) aimed at the distant Abandoned House! ---
    const sumX = getRidgeCenterX(-96);
    const sumZ = -96;
    const sumY = this.getHeight(sumX, sumZ);
    const spyGroup = new THREE.Group();
    spyGroup.position.set(sumX - 2.2, sumY, sumZ);
    // 3 wooden tripod legs
    [0, 2.1, 4.2].forEach((ang) => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 1.55, 5), woodMat);
      leg.position.set(Math.cos(ang) * 0.32, 0.72, Math.sin(ang) * 0.32);
      leg.rotation.z = Math.cos(ang) * 0.34;
      leg.rotation.x = -Math.sin(ang) * 0.34;
      spyGroup.add(leg);
    });
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.08, 0.85, 10), brassMat);
    tube.rotation.x = Math.PI / 2 + 0.25;
    tube.rotation.z = -0.15;
    tube.position.set(0, 1.48, -0.05);
    spyGroup.add(tube);
    this.stageGroup.add(spyGroup);
    this.physics.addCylinderCollider(sumX - 2.2, sumZ, 0.55, sumY + 1.6, false);

    this.stageInteractables.push({
      id: 'summit_spyglass',
      label: 'النظر عبر المنظار نحو الضوء البعيد',
      worldPos: new THREE.Vector3(sumX - 2.2, sumY + 1.45, sumZ),
      radius: 4.8,
    });

    // Watertight Sculpted Mountain Ridge Boulders flanking the trail (ZERO floating flat far-mesas!)
    const boulders = [];
    let seed = 3407;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let z = 98; z >= -86; z -= 13) {
      const rx = getRidgeCenterX(z);
      const hw = getRidgeHalfWidth(z);
      for (const side of [-1, 1]) {
        if (Math.abs(z - 20) < 12 && side === -1) continue; // Keep mid-ridge shelter clear!
        const off = (hw * 0.72 + rand() * 2.4) * side;
        const s = 1.5 + rand() * 2.1;
        boulders.push({
          x: rx + off,
          z: z + (rand() - 0.5) * 4.0,
          sx: s * 1.18,
          sy: s * 0.70,
          sz: s * 0.94,
          ry: rand() * 6.28,
          type: Math.floor(rand() * 2),
        });
      }
    }
    this._placeSolidBoulders(boulders, occluders, decals, 3);

    // DISTANT ABANDONED HOUSE SILHOUETTE + WARM FLICKERING GLIMMER OF LIGHT grounded in the Seamless Dune Sea!
    const distHouseX = sumX + 24;
    const distHouseZ = -305;
    const skirtDuneY = getStage3DuneSeaHeight(distHouseX, distHouseZ);

    const distantHouseGroup = new THREE.Group();
    distantHouseGroup.position.set(distHouseX, skirtDuneY - 0.8, distHouseZ);
    const darkAdobeMat = new THREE.MeshLambertMaterial({ color: 0x52392d });
    const foundation = new THREE.Mesh(new THREE.BoxGeometry(17.5, 9.0, 14.5), darkAdobeMat);
    foundation.position.y = -4.2;
    const mainBlock = new THREE.Mesh(new THREE.BoxGeometry(15.5, 4.8, 12.2), darkAdobeMat);
    mainBlock.position.y = 2.4;
    const watchBlock = new THREE.Mesh(new THREE.BoxGeometry(6.0, 3.0, 5.0), darkAdobeMat);
    watchBlock.position.set(-2.4, 5.8, -1.8);
    const yardWall = new THREE.Mesh(new THREE.BoxGeometry(18.5, 2.2, 0.8), darkAdobeMat);
    yardWall.position.set(0, 1.1, 9.8);
    distantHouseGroup.add(foundation, mainBlock, watchBlock, yardWall);

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
  // STAGE 4 (NIGHT): Moonlit Desert + 3D Spatial Crickets + Abandoned House Sanctuary!
  // ============================================================================
  _buildStage4Night(occluders, decals) {
    // 1. Full Explorable Abandoned House at (0, 0, -68)
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
    this.sunOccluders.push(this.abandonedHouse.group);
    this.stageInteractables.push(...this.abandonedHouse.getInteractables());
    this.spatialAudioSpots.push(...this.abandonedHouse.lanternWorldPositions);

    occluders.push({
      type: 'box',
      x: STAGE4_HOUSE_X,
      z: STAGE4_HOUSE_Z,
      hx: 8.4,
      hz: 7.2,
      pad: 3.8,
      strength: 0.40,
    });

    // 2. Realistic Moonlit Arabian Date Palms around the House & dunes
    const palms = [
      { x: STAGE4_HOUSE_X - 11.4, z: STAGE4_HOUSE_Z - 9.0, h: 6.8, lean: 0.14, ry: 0.4 },
      { x: STAGE4_HOUSE_X - 13.4, z: STAGE4_HOUSE_Z - 6.0, h: 5.4, lean: -0.16, ry: 2.1 },
      { x: STAGE4_HOUSE_X + 12.0, z: STAGE4_HOUSE_Z - 10.2, h: 6.2, lean: 0.15, ry: 1.2 },
      { x: -16.5, z: 28.0, h: 5.8, lean: 0.16, ry: 2.8 },
      { x: 17.5, z: -18.0, h: 6.2, lean: -0.14, ry: 0.9 },
    ];
    this._placeDesertPalms(palms, occluders, decals);

    // 3. Watertight Moonlit Desert Boulders + 3D Spatial Night Cricket Patches!
    const boulders = [
      { x: -12.5, z: 88, sx: 2.4, sy: 1.5, sz: 1.9, ry: 0.7, type: 0 },
      { x: 14.5, z: 54, sx: 2.8, sy: 1.7, sz: 2.1, ry: 2.2, type: 1 },
      { x: -16.5, z: 18, sx: 3.1, sy: 1.9, sz: 2.3, ry: 1.1, type: 0 },
      { x: 23.5, z: -8, sx: 2.7, sy: 1.6, sz: 2.0, ry: 0.4, type: 1 },
      { x: -14.8, z: -56, sx: 2.9, sy: 1.8, sz: 2.2, ry: 1.5, type: 0 },
      { x: 14.6, z: -58, sx: 2.8, sy: 1.7, sz: 2.1, ry: 2.5, type: 1 },
    ];
    this._placeSolidBoulders(boulders, occluders, decals, 4);

    // Anchor 3D spatialized night cricket patches in the desert rocks & bushes around the approach & yard!
    const cricketSpots = [
      { x: -18, z: 75 },
      { x: 20, z: 42 },
      { x: -22, z: 8 },
      { x: 19, z: -26 },
      { x: -16, z: -52 },
      { x: 18, z: -56 },
    ];
    cricketSpots.forEach((c) => {
      this.spatialAudioSpots.push({ type: 'cricket', x: c.x, y: this.getHeight(c.x, c.z), z: c.z });
    });

    const mesas = [
      { x: -132, z: -118, sx: 44, sy: 28, sz: 34, ry: 0.5 },
      { x: 118, z: -126, sx: 48, sy: 30, sz: 36, ry: 1.8 },
      { x: -126, z: 42, sx: 42, sy: 25, sz: 32, ry: 2.3 },
      { x: 128, z: 54, sx: 44, sy: 25, sz: 34, ry: 0.9 },
    ];
    this._placeStratifiedMesas(mesas, occluders, 4, true);
  }

  _createGPUDustParticles(stageId) {
    const atmos = STAGE_ATMOSPHERES[stageId];
    const maxCount = this._dustMaxCount;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(maxCount * 3);
    const seeds = new Float32Array(maxCount * 3);

    for (let i = 0; i < maxCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 44;
      positions[i * 3 + 1] = 0.25 + Math.random() * 3.4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 44;
      seeds[i * 3] = Math.random() * 6.28;
      seeds[i * 3 + 1] = 0.65 + Math.random() * 1.1;
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
          float speed = (1.6 + uStorm * 4.5) * aSeed.y;
          p.x = mod(p.x + uTime * speed - uPlayerPos.x + 22.0, 44.0) - 22.0 + uPlayerPos.x;
          p.z = mod(p.z + uTime * speed * 0.38 - uPlayerPos.z + 22.0, 44.0) - 22.0 + uPlayerPos.z;
          p.y = uPlayerPos.y - 0.3 + position.y + sin(uTime * 1.1 + aSeed.x) * 0.22;
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = clamp(82.0 / max(1.0, -mvPosition.z), 1.5, 11.0);
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
          float op = mix(uBaseOpacity, 0.36, uStorm);
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

  getInteractableById(id) {
    return this.stageInteractables.find((it) => it.id === id) || null;
  }

  update(dt, elapsed, playerPos, camera, activeTargetPos = null) {
    this.palmTimeUniform.value = elapsed;

    if (this.dustUniforms && playerPos) {
      this.dustUniforms.uTime.value = elapsed;
      this.dustUniforms.uPlayerPos.value.copy(playerPos);
    }

    if (this.abandonedHouse) {
      this.abandonedHouse.update(dt, elapsed, playerPos);
    }

    if (this.beaconSprite && this.currentStageId === 3) {
      const flick = 0.88 + 0.14 * Math.sin(elapsed * 4.8) + 0.08 * Math.cos(elapsed * 11.3);
      this.beaconSprite.scale.set(16.0 * flick, 16.0 * flick, 1);
    }

    // Floating diamond objective marker (visible from medium/far distance, smoothly hides within 5.5m!)
    if (this.waypointMarker && camera) {
      if (activeTargetPos) {
        this.waypointMarker.position.set(activeTargetPos.x, activeTargetPos.y + 0.85, activeTargetPos.z);
        const d = camera.position.distanceTo(this.waypointMarker.position);
        if (d < 5.5) {
          this.waypointMarker.visible = false;
        } else {
          this.waypointMarker.visible = true;
          this.waypointMarker.lookAt(camera.position);
          const sc = THREE.MathUtils.clamp(0.75 + d * 0.012, 0.8, 2.4);
          this.waypointMarker.scale.setScalar(sc * (0.92 + Math.sin(elapsed * 3.4) * 0.1));
        }
      } else {
        this.waypointMarker.visible = false;
      }
    }

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
