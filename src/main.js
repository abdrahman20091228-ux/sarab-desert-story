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
import { StageManager } from './world/StageManager.js';
import { DustStormSystem } from './world/DustStorm.js';
import { FlashlightSystem } from './gameplay/Flashlight.js';
import { PlayerController } from './gameplay/PlayerController.js';
import { CutsceneManager } from './gameplay/CutsceneManager.js';
import { JourneyManager } from './gameplay/JourneyManager.js';
import { UIManager } from './ui/UIManager.js';

/**
 * سَـرَاب v5.0 (SARAB v5.0 — 4-Stage Desert Exploration Journey: Noon -> Afternoon -> Sunset -> Starry Night)
 * - 4 separate rich walking stages (50–100s each at realistic ~3.4 m/s walk speed) with black transition & full GPU disposal
 * - Nano Banana Arabian desert sand, rocky canyon floor & cracked sabkha textures + clean derived Sobel normalMaps
 * - Baked Lighting & Contact AO on terrain, cairns, cliffs, ruins & walls (keeps phones cool without lowering resolution!)
 * - Stage-aware procedural audio (Noon wind, echoing Canyon, Summit ridge rush, Night crickets & breeze, 4-surface footsteps, Flashlight click)
 * - Handheld Flashlight (F key & on-screen HUD button) for Starry Night Stage 4
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

    // Load Stage 1 for the live 3D Title Vista
    this.stages.loadStage(1);
    this.cutscenes.startTitleCamera();
    requestAnimationFrame((ts) => this._animate(ts));
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: !IS_MOBILE,
      powerPreference: IS_MOBILE ? 'default' : 'high-performance',
      stencil: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.96;
    this.renderer.shadowMap.enabled = !IS_MOBILE;
    this.renderer.shadowMap.type = IS_MOBILE ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.settings.data.fov,
      window.innerWidth / window.innerHeight,
      0.14,
      1450
    );
  }

  _initWorld() {
    this.texManager = new TextureManager(this.renderer);
    this.physics = new PhysicsWorld(() => 0);
    this.sky = new SkyLightingSystem(this.scene, this.renderer, this.settings);
    this.stages = new StageManager(this.scene, this.texManager, this.modelManager, this.physics, this.sky, this.settings);
    this.dustStorm = new DustStormSystem(this.scene, this.settings);
    this.flashlight = new FlashlightSystem(this.scene, this.camera, this.audio);
  }

  _initGameplay() {
    this.player = new PlayerController(this.camera, this.physics, this.audio, this.settings, this.flashlight);
    this.cutscenes = new CutsceneManager(this.camera, this.stages, this.player);
    this.ui = new UIManager(this.settings, this.audio);
    this.journey = new JourneyManager(
      this.audio,
      this.stages,
      this.player,
      this.flashlight,
      this.dustStorm,
      this.ui
    );

    this.flashlight.onToggle((isOn) => {
      this.ui.setFlashlightUI(isOn, this.journey.stageId === 4);
    });

    this.player.onBoundaryHit = () => {
      this.journey.sayImmediate('التضاريس هنا وعرة... سأبقى على المسار الصحراوي.', this.journey.stageId === 4 ? 'night' : 'thought');
    };

    this.ui.onStartGame = async () => {
      this.cutscenes.enterGameplay();
      this.ui.showHUD();
      await this.journey.transitionToStage(1, { immediate: false, showOverlay: true });
    };

    this.ui.onSelectStage = async (stageId) => {
      this.cutscenes.enterGameplay();
      this.ui.showHUD();
      await this.journey.transitionToStage(stageId, { immediate: false, showOverlay: true });
    };

    this.ui.onInteract = () => {
      if (this.player.enabled && this.player.focusedInteractable) {
        try {
          if (navigator.vibrate) navigator.vibrate(15);
        } catch {}
        this.journey.handleInteract(this.player.focusedInteractable);
      }
    };

    this.ui.onPauseToggle = (isPaused) => {
      this.paused = isPaused;
      this.audio.setSuspended(isPaused || this.tabHidden);
      if (this.cutscenes.mode === 'gameplay' && !this.journey.transitioning) {
        this.player.enabled = !isPaused;
      }
    };

    this.ui.onReturnToTitle = () => {
      this.paused = false;
      this.audio.setSuspended(false);
      this.player.enabled = false;
      this.flashlight.setEnabled(false, false);
      this.stages.loadStage(1);
      this.cutscenes.startTitleCamera();
      this.ui.showTitleScreen();
    };

    this.ui.onFreeRoam = () => {
      this.journey.freeRoam = true;
      this.cutscenes.enterGameplay();
      this.player.enabled = true;
      this.journey.sayImmediate('تجول بحرية تحت النجوم والمجرة حول البيت المهجور.', 'night');
    };

    this.ui.onReplayJourney = () => this.ui.onStartGame();
  }

  _bindVisibilityGuard() {
    document.addEventListener('visibilitychange', () => {
      this.tabHidden = document.hidden;
      this.audio.setSuspended(this.tabHidden || this.paused);
      if (!this.tabHidden) this._lastRenderMs = performance.now();
    });
  }

  _applyPixelRatio() {
    const data = this.settings.data;
    const preset = this.settings.getPreset();
    const effectiveDpr = Math.max(0.7, Math.min(1.85, Math.min(window.devicePixelRatio || 1, preset.dprCap) * data.resolutionScale));
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
      this.stages.applySettings(preset);
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

    if (this.tabHidden) return;
    if (this._renderedInitialFrame && (this.paused || this.ui.isModalOpen || this.ui.isGateActive())) {
      this._lastRenderMs = nowMs;
      return;
    }

    const isMenu = this.cutscenes.mode === 'title';
    const targetFps = isMenu ? 24 : this.settings.getEffectiveFpsCap();
    const minFrameMs = 1000 / targetFps;

    if (this._lastRenderMs === 0) this._lastRenderMs = nowMs - minFrameMs;
    const elapsedMs = nowMs - this._lastRenderMs;
    if (this._renderedInitialFrame && elapsedMs < minFrameMs - 1.5) return;

    const rawDt = Math.max(0.001, elapsedMs / 1000);
    const dt = Math.min(rawDt, 0.055);
    this._lastRenderMs = nowMs;
    this._renderedInitialFrame = true;

    this.elapsed += dt;

    if (this.cutscenes.mode === 'gameplay') {
      const activeTarget = this.stages.getActiveInteractable();
      this.player.update(dt, this.elapsed, activeTarget);
      this.ui.updateInteractPrompt(this.player.focusedInteractable);
    } else {
      this.cutscenes.update(dt, this.elapsed);
    }

    this.flashlight.update(dt, this.elapsed, false);

    const activePos = this.cutscenes.mode === 'gameplay' ? this.player.position : this.camera.position;
    const indoor = this.cutscenes.mode === 'gameplay' ? this.player.isInsideHouse : false;
    const stormVal = this.dustStorm.update(
      dt,
      this.elapsed,
      this.camera,
      activePos,
      indoor,
      this.journey.stageId === 2 ? 0.65 : 0.0
    );
    this.sky.setStormIntensity(stormVal);
    this.stages.setStormIntensity(stormVal);
    this.audio.setStormIntensity(stormVal);

    this.sky.update(dt, this.elapsed, this.camera, activePos, indoor);
    this.stages.update(dt, this.elapsed, activePos, this.camera);
    this.audio.updateAmbience(dt, indoor ? 1 : 0, this.elapsed);
    this.journey.update(dt, this.elapsed, this.cutscenes.mode === 'gameplay', activePos, this.player.yaw);

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
      loadStage: async (stageId) => {
        this.ui.dismissGateForDebug();
        this.ui.hideTitleScreen();
        this.cutscenes.enterGameplay();
        this.ui.showHUD();
        await this.journey.transitionToStage(stageId, { immediate: true, showOverlay: false });
      },
      teleport: (x, z, yaw, pitch = 0) => {
        this.ui.dismissGateForDebug();
        this.ui.hideTitleScreen();
        this.cutscenes.enterGameplay();
        this.ui.showHUD();
        this.player.enabled = true;
        this.player.setPose(x, z, yaw, pitch);
        this.flashlight.update(0.016, this.elapsed, true);
      },
      setFlashlight: (on) => {
        this.flashlight.setEnabled(Boolean(on), false);
        this.flashlight.update(0.016, this.elapsed, true);
        this.ui.setFlashlightUI(this.flashlight.enabled, this.journey.stageId === 4);
      },
      setStorm: (val) => {
        this.dustStorm.setTargetIntensity(val, true);
        this.sky.setStormIntensity(val, true);
        this.stages.setStormIntensity(val);
      },
      triggerSubtitle: (text, style = 'thought') => this.journey.sayImmediate(text, style),
      testCollision: () => {
        // Test cylinder cairns & ellipse rocks & mesas & house walls in current stage
        const radius = 0.36;
        let maxPen = 0;
        let checks = 0;
        for (const c of this.physics.cylinders) {
          for (let a = 0; a < 8; a++) {
            const ang = (a / 8) * Math.PI * 2;
            const gy = this.stages.getHeight(c.x, c.z);
            const pos = new THREE.Vector3(c.x + Math.cos(ang) * (c.r * 0.4), gy, c.z + Math.sin(ang) * (c.r * 0.4));
            this.physics.resolveHorizontal(pos, radius);
            const d = Math.hypot(pos.x - c.x, pos.z - c.z);
            if (d < c.r + radius - 0.02) maxPen = Math.max(maxPen, c.r + radius - d);
            checks++;
          }
        }
        return {
          stageId: this.journey.stageId,
          checks,
          collidersCount:
            this.physics.cylinders.length +
            this.physics.ellipses.length +
            this.physics.aabbs.length +
            this.physics.obbs.length +
            this.physics.mesas.length,
          solid: maxPen < 0.03,
          maxPen: Number(maxPen.toFixed(4)),
        };
      },
      getStats: () => ({
        stageId: this.journey.stageId,
        walkSpeed: this.player.walkSpeed,
        surface: this.player.currentSurface,
        flashlightOn: this.flashlight.enabled,
        drawCalls: this.renderer.info.render.calls,
        triangles: this.renderer.info.render.triangles,
        geometriesInMemory: this.renderer.info.memory.geometries,
        texturesInMemory: this.renderer.info.memory.textures,
        shadowUpdates: this.sky.shadowUpdatesCount,
        skyCacheActive: this.sky.proceduralSky.useCache,
        pos: this.player.position.toArray().map((n) => Number(n.toFixed(2))),
        indoor: this.player.isInsideHouse,
        modelsLoaded: Array.from(this.modelManager.geometries.keys()),
      }),
    };
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new SarabGame();
});
