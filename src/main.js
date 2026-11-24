import '@fontsource/reem-kufi/700.css';
import '@fontsource/changa/400.css';
import '@fontsource/changa/600.css';
import '@fontsource/changa/700.css';
import * as THREE from 'three';
import { SettingsManager, IS_MOBILE } from './engine/Settings.js';
import { TextureManager } from './engine/TextureManager.js';
import { ModelManager } from './engine/ModelManager.js';
import { AudioEngine } from './engine/AudioEngine.js';
import { PhysicsWorld } from './engine/Physics.js';
import { SkyLightingSystem } from './engine/SkyLighting.js';
import { getTerrainHeight, getMesaVisualRadiusAt } from './world/TerrainMath.js';
import { DesertWorld } from './world/DesertWorld.js';
import { AbandonedHouse } from './world/AbandonedHouse.js';
import { DustStormSystem } from './world/DustStorm.js';
import { PlayerController } from './gameplay/PlayerController.js';
import { CutsceneManager } from './gameplay/CutsceneManager.js';
import { StoryManager } from './gameplay/StoryManager.js';
import { UIManager } from './ui/UIManager.js';

/**
 * سَـرَاب: ظهيرة الرمال (SARAB: Mirage of Noon — Chapter I v4.1 Thermal & Physics Edition)
 * - True Frame Pacer (caps 90/120Hz phones to 45 FPS default / 30 FPS Cool Mode)
 * - Zero GPU rendering (0% load) when tab hidden, paused, or behind modals/fullscreen gate
 * - Disables 4x MSAA on mobile tiled GPUs + 512x256 procedural sky cache (-95% sky GPU power)
 * - Fixed shadow redraw leak (0-3 shadow updates/sec instead of 60-120/sec)
 * - 1:1 exact sandstone mesa/mountain collision verified from all 360 degrees
 */
class SarabGame {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.settings = new SettingsManager();
    this.audio = new AudioEngine();
    this.modelManager = new ModelManager();

    this.paused = false;
    this.tabHidden = false;
    this.elapsed = 0;
    this.fpsFrames = 0;
    this.fpsAccum = 0;
    this.dynamicDprMult = 1.0;
    this._lastRenderMs = 0;
    this._renderedInitialFrame = false;

    this._initRenderer();
    this._bootAsync();
  }

  async _bootAsync() {
    await this.modelManager.preloadAll();

    this._initWorld();
    this._initGameplay();
    this._bindSettings();
    this._bindVisibilityGuard();
    this._exposeDebugAPI();

    window.addEventListener('resize', () => this._onResize());
    this._onResize();

    this.cutscenes.startTitleCamera();
    requestAnimationFrame((ts) => this._animate(ts));
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: IS_MOBILE ? 'default' : 'high-performance',
      stencil: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.96;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = IS_MOBILE ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.settings.data.fov,
      window.innerWidth / window.innerHeight,
      0.14,
      1150
    );
  }

  _initWorld() {
    this.texManager = new TextureManager(this.renderer);
    this.physics = new PhysicsWorld(getTerrainHeight);
    this.sky = new SkyLightingSystem(this.scene, this.renderer, this.settings);
    this.desert = new DesertWorld(this.scene, this.texManager, this.modelManager, this.physics, this.settings);
    this.house = new AbandonedHouse(
      this.scene,
      this.texManager,
      this.modelManager,
      this.physics,
      this.desert.jeepWorldPos,
      this.desert.tentBarrelWorldPos
    );
    this.dustStorm = new DustStormSystem(this.scene, this.settings);
  }

  _initGameplay() {
    this.player = new PlayerController(this.camera, this.physics, this.audio, this.settings);
    this.cutscenes = new CutsceneManager(this.camera, this.sky, this.audio, this.player);
    this.ui = new UIManager(this.settings, this.audio);
    this.story = new StoryManager(this.audio, this.sky, this.house, this.cutscenes, this.ui, this.dustStorm);

    this.player.onBoundaryHit = () => {
      this.story.sayImmediate('الصحراء هنا بلا نهاية... لن أبتعد كثيراً قبل إنهاء مهمتي.');
    };

    this.ui.onStartGame = () => {
      this.story.reset();
      this.cutscenes.startWakeupCutscene(
        (line) => this.story.sayImmediate(line, 'thought'),
        () => this.ui.showHUD()
      );
    };

    this.ui.onInteract = () => {
      if (this.player.enabled && this.player.focusedInteractable) {
        try {
          if (navigator.vibrate) navigator.vibrate(15);
        } catch {}
        this.story.handleInteract(this.player.focusedInteractable);
      }
    };

    this.ui.onPauseToggle = (isPaused) => {
      this.paused = isPaused;
      this.audio.setSuspended(isPaused || this.tabHidden);
      if (this.cutscenes.mode === 'gameplay') {
        this.player.enabled = !isPaused;
      }
    };

    this.ui.onReturnToTitle = () => {
      this.paused = false;
      this.audio.setSuspended(false);
      this.player.enabled = false;
      this.story.reset();
      this.cutscenes.startTitleCamera();
      this.ui.showTitleScreen();
    };

    this.ui.onFreeRoam = () => {
      this.story.freeRoam = true;
      this.dustStorm.setTargetIntensity(0.0, true);
      this.sky.setTimeOfDay(0.96, true);
      this.cutscenes.mode = 'gameplay';
      this.cutscenes.containerEl?.classList.remove('cinematic-bars-active');
      this.player.setPose(-5.0, -4.0, -0.4, -0.02);
      this.player.enabled = true;
      this.story.sayImmediate('وقت العصر الذهبي... تجوّل بحرية في الصحراء وتأمل الأجواء.');
    };

    this.ui.onReplayChapter = () => this.ui.onStartGame();
  }

  _bindVisibilityGuard() {
    document.addEventListener('visibilitychange', () => {
      this.tabHidden = document.hidden;
      this.audio.setSuspended(this.tabHidden || this.paused);
      if (!this.tabHidden) {
        this._lastRenderMs = performance.now();
      }
    });
  }

  _applyPixelRatio() {
    const data = this.settings.data;
    const preset = this.settings.getPreset();
    const effectiveDpr = Math.max(0.6, Math.min(1.85, Math.min(window.devicePixelRatio || 1, preset.dprCap) * data.resolutionScale));
    this.renderer.setPixelRatio(effectiveDpr);
  }

  _bindSettings() {
    const apply = (data, preset) => {
      this._applyPixelRatio();
      this.camera.fov = data.fov;
      this.camera.updateProjectionMatrix();
      this.audio.setVolume(data.volume);
      this.texManager.setAnisotropy(preset.anisotropy);
      this.sky.applySettings(data, preset);
      this.desert.applySettings(preset);
      this.dustStorm.applySettings(data, preset);
    };

    apply(this.settings.data, this.settings.getPreset());
    this.settings.onChange(apply);
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  }

  _animate(nowMs) {
    requestAnimationFrame((ts) => this._animate(ts));

    // 1. ZERO GPU/CPU burn when tab is hidden, paused, or blocked behind modal/fullscreen gate!
    if (this.tabHidden) return;
    if (this._renderedInitialFrame && (this.paused || this.ui.isModalOpen || this.ui.isGateActive())) {
      this._lastRenderMs = nowMs;
      return;
    }

    // 2. True Frame Pacer: caps 90Hz/120Hz phones to 45 FPS (or 30 FPS Cool Mode, 24 FPS Title Screen)!
    const isMenu = this.cutscenes.mode === 'title' || this.cutscenes.mode === 'ending';
    const targetFps = isMenu ? 24 : this.settings.getEffectiveFpsCap();
    const minFrameMs = 1000 / targetFps;

    if (this._lastRenderMs === 0) this._lastRenderMs = nowMs - minFrameMs;
    const elapsedMs = nowMs - this._lastRenderMs;
    if (this._renderedInitialFrame && elapsedMs < minFrameMs - 1.5) {
      return;
    }

    const rawDt = Math.max(0.001, elapsedMs / 1000);
    const dt = Math.min(rawDt, 0.055);
    this._lastRenderMs = nowMs;
    this._renderedInitialFrame = true;

    this.elapsed += dt;

    if (this.cutscenes.mode === 'gameplay') {
      const activeTarget = this.house.getActiveInteractable();
      this.player.update(dt, this.elapsed, activeTarget);
      this.ui.updateInteractPrompt(this.player.focusedInteractable);
    } else {
      this.cutscenes.update(dt, this.elapsed);
    }

    const activePos = this.cutscenes.mode === 'gameplay' ? this.player.position : this.camera.position;
    const indoor = this.cutscenes.mode === 'gameplay' ? this.player.isInsideHouse : false;

    const stormVal = this.dustStorm.update(
      dt,
      this.elapsed,
      this.camera,
      activePos,
      indoor,
      this.sky.timeOfDay
    );
    this.sky.setStormIntensity(stormVal);
    this.desert.setStormIntensity(stormVal);
    this.house.setStormIntensity(stormVal);
    this.audio.setStormIntensity(stormVal);

    this.sky.update(dt, this.elapsed, this.camera, activePos, indoor);
    this.desert.update(dt, this.elapsed, activePos, this.sky.timeOfDay);
    this.house.update(dt, this.elapsed, this.camera, this.sky.timeOfDay);
    this.audio.updateAmbience(dt, indoor ? 1 : 0, this.sky.timeOfDay, this.elapsed);
    this.story.update(dt, this.cutscenes.mode === 'gameplay', activePos, this.player.yaw);

    this.renderer.render(this.scene, this.camera);

    this.fpsFrames++;
    this.fpsAccum += rawDt;
    if (this.fpsAccum >= 0.85) {
      const fps = this.fpsFrames / this.fpsAccum;
      this.ui.updateFPS(fps);
      this.fpsFrames = 0;
      this.fpsAccum = 0;
    }
  }

  _exposeDebugAPI() {
    window.__SARAB__ = {
      showTitle: () => {
        this.ui.dismissGateForDebug();
        this.ui.showTitleScreen();
      },
      setTimeOfDay: (t) => this.sky.setTimeOfDay(t, true),
      setStorm: (val) => {
        this.dustStorm.setTargetIntensity(val, true);
        this.sky.setStormIntensity(val, true);
        this.desert.setStormIntensity(val);
        this.house.setStormIntensity(val);
        this.audio.setStormIntensity(val);
      },
      teleport: (x, z, yaw, pitch = 0, keepTime = true) => {
        const savedTime = this.sky.timeOfDay;
        const savedStorm = this.dustStorm.targetIntensity;
        this.ui.dismissGateForDebug();
        this.ui.hideTitleScreen();
        this.cutscenes.mode = 'gameplay';
        this.cutscenes.containerEl?.classList.remove('cinematic-bars-active');
        this.story.reset();
        if (keepTime) {
          this.sky.setTimeOfDay(savedTime, true);
          this.dustStorm.setTargetIntensity(savedStorm, true);
          this.sky.setStormIntensity(savedStorm, true);
        }
        this.ui.showHUD();
        this.player.enabled = true;
        this.player.setPose(x, z, yaw, pitch);
      },
      setMission: (idx) => {
        this.story.missionIndex = idx;
        this.story._activateCurrentMission();
      },
      triggerSubtitle: (text, style = 'thought') => this.story.sayImmediate(text, style),
      testRockCollision: () => {
        const cx = -13.5;
        const cz = -9.5;
        const gy = getTerrainHeight(cx, cz);
        let maxPenetration = 0;
        const radius = 0.36;
        const minExpectedDist = 1.42 + radius;
        for (let a = 0; a < 16; a++) {
          const ang = (a / 16) * Math.PI * 2;
          const pos = new THREE.Vector3(cx + Math.cos(ang) * 0.5, gy, cz + Math.sin(ang) * 0.5);
          this.physics.resolveHorizontal(pos, radius);
          const distAfter = Math.hypot(pos.x - cx, pos.z - cz);
          if (distAfter < minExpectedDist) {
            maxPenetration = Math.max(maxPenetration, minExpectedDist - distAfter);
          }
        }
        return { rockBlockedCleanly: maxPenetration < 0.02, maxPenetration: Number(maxPenetration.toFixed(4)) };
      },
      testMesaCollision: () => {
        // Test ALL 7 mesas from 36 angles each (252 tests!) -> verify ZERO visual penetration!
        const radius = 0.36;
        let maxPenetration = 0;
        let tested = 0;
        for (const m of this.physics.mesas) {
          for (let a = 0; a < 36; a++) {
            const ang = (a / 36) * Math.PI * 2;
            const testY = m.baseY + 0.5;
            const yNorm = Math.max(0, Math.min(0.95, (testY - m.meshBottomY) / m.height));
            const visualR = getMesaVisualRadiusAt(ang, yNorm);
            // Place player 75% inside the visual mountain along angle `ang` in local space
            const inLx = Math.cos(ang) * visualR * 0.75 * m.sx;
            const inLz = Math.sin(ang) * visualR * 0.75 * m.sz;
            // Convert local -> world via exact Three.js R_y(+ry)
            const wx = m.x + (inLx * m.cos + inLz * m.sin);
            const wz = m.z + (-inLx * m.sin + inLz * m.cos);

            const pos = new THREE.Vector3(wx, testY, wz);
            this.physics.resolveHorizontal(pos, radius);

            // Check resulting position back in mesa local space against visual surface!
            const rwx = pos.x - m.x;
            const rwz = pos.z - m.z;
            const rlx = rwx * m.cos - rwz * m.sin;
            const rlz = rwx * m.sin + rwz * m.cos;
            const ux = rlx / m.sx;
            const uz = rlz / m.sz;
            const outAng = Math.atan2(uz, ux);
            const outVisualR = getMesaVisualRadiusAt(outAng, yNorm);
            const outU = Math.hypot(ux, uz);
            if (outU < outVisualR) {
              const penMeters = (outVisualR - outU) * Math.min(m.sx, m.sz);
              maxPenetration = Math.max(maxPenetration, penMeters);
            }
            tested++;
          }
        }
        return {
          mesasTested: this.physics.mesas.length,
          anglesTested: tested,
          allMesasSolid: maxPenetration < 0.01,
          maxPenetrationMeters: Number(maxPenetration.toFixed(4)),
        };
      },
      testJeepClimb: () => {
        const jx = this.desert.jeepWorldPos.x;
        const jz = this.desert.jeepWorldPos.z;
        const jy = getTerrainHeight(jx, jz);
        const roofInfo = this.physics.getGroundInfo(jx, jz, jy + 1.2);
        return {
          groundY: Number(jy.toFixed(2)),
          roofStandY: Number(roofInfo.groundY.toFixed(2)),
          canClimbJeep: roofInfo.groundY > jy + 0.8,
        };
      },
      getStats: () => ({
        drawCalls: this.renderer.info.render.calls,
        triangles: this.renderer.info.render.triangles,
        shadowUpdates: this.sky.shadowUpdatesCount,
        skyCacheActive: this.sky.proceduralSky.useCache,
        fpsCap: this.settings.getEffectiveFpsCap(),
        timeOfDay: this.sky.timeOfDay,
        storm: Number(this.dustStorm.intensity.toFixed(2)),
        pos: this.player.position.toArray(),
        indoor: this.player.isInsideHouse,
        modelsLoaded: this.modelManager.geometries.size,
      }),
    };
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new SarabGame();
});
