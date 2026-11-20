import '@fontsource/reem-kufi/700.css';
import '@fontsource/changa/400.css';
import '@fontsource/changa/600.css';
import '@fontsource/changa/700.css';
import * as THREE from 'three';
import { SettingsManager, IS_MOBILE } from './engine/Settings.js';
import { TextureManager } from './engine/TextureManager.js';
import { AudioEngine } from './engine/AudioEngine.js';
import { PhysicsWorld } from './engine/Physics.js';
import { SkyLightingSystem } from './engine/SkyLighting.js';
import { getTerrainHeight } from './world/TerrainMath.js';
import { DesertWorld } from './world/DesertWorld.js';
import { AbandonedHouse } from './world/AbandonedHouse.js';
import { PlayerController } from './gameplay/PlayerController.js';
import { CutsceneManager } from './gameplay/CutsceneManager.js';
import { StoryManager } from './gameplay/StoryManager.js';
import { UIManager } from './ui/UIManager.js';

/**
 * سَـرَاب: ظهيرة الرمال (SARAB: Mirage of Noon — Chapter I v2.0)
 * Engineered for locked 60FPS on mobile + desktop with living desert world,
 * enlarged realistic estate, real Sprint, and strictly sequential guided narrative.
 */
class SarabGame {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.settings = new SettingsManager();
    this.audio = new AudioEngine();

    this._initRenderer();
    this._initWorld();
    this._initGameplay();
    this._bindSettings();
    this._exposeDebugAPI();

    this.paused = false;
    this.clock = new THREE.Clock();
    this.elapsed = 0;
    this.fpsFrames = 0;
    this.fpsAccum = 0;

    window.addEventListener('resize', () => this._onResize());
    this._onResize();

    this.cutscenes.startTitleCamera();
    this._animate();
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: !IS_MOBILE, // Disabling MSAA on high-DPI mobile screens doubles GPU FPS cleanly!
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap; // Much faster than PCFSoftShadowMap on mobile GPUs!

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
    this.desert = new DesertWorld(this.scene, this.texManager, this.physics, this.settings);
    this.house = new AbandonedHouse(this.scene, this.texManager, this.physics, this.desert.jeepWorldPos);
  }

  _initGameplay() {
    this.player = new PlayerController(this.camera, this.physics, this.audio, this.settings);
    this.cutscenes = new CutsceneManager(this.camera, this.sky, this.audio, this.player);
    this.ui = new UIManager(this.settings, this.audio);
    this.story = new StoryManager(this.audio, this.sky, this.house, this.cutscenes, this.ui);

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
        this.story.handleInteract(this.player.focusedInteractable);
      }
    };

    this.ui.onPauseToggle = (isPaused) => {
      this.paused = isPaused;
      if (this.cutscenes.mode === 'gameplay') {
        this.player.enabled = !isPaused;
      }
    };

    this.ui.onReturnToTitle = () => {
      this.paused = false;
      this.player.enabled = false;
      this.story.reset();
      this.cutscenes.startTitleCamera();
      this.ui.showTitleScreen();
    };

    this.ui.onFreeRoam = () => {
      this.story.freeRoam = true;
      this.sky.setTimeOfDay(0.96, true);
      this.cutscenes.mode = 'gameplay';
      this.cutscenes.containerEl?.classList.remove('cinematic-bars-active');
      this.player.setPose(-5.0, -4.0, -0.4, -0.02);
      this.player.enabled = true;
      this.story.sayImmediate('وقت العصر الذهبي... تجوّل بحرية في الصحراء وتأمل الأجواء.');
    };

    this.ui.onReplayChapter = () => this.ui.onStartGame();
  }

  _bindSettings() {
    const apply = (data, preset) => {
      const effectiveDpr = Math.min(window.devicePixelRatio || 1, preset.dprCap) * data.resolutionScale;
      this.renderer.setPixelRatio(Math.max(0.5, Math.min(1.85, effectiveDpr)));
      this.camera.fov = data.fov;
      this.camera.updateProjectionMatrix();
      this.audio.setVolume(data.volume);
      this.texManager.setAnisotropy(preset.anisotropy);
      this.sky.applySettings(data, preset);
      this.desert.applySettings(preset);
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

  _animate() {
    requestAnimationFrame(() => this._animate());

    const rawDt = this.clock.getDelta();
    const dt = Math.min(rawDt, 0.05);

    if (!this.paused) {
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

      this.sky.update(dt, this.elapsed, this.camera, activePos, indoor);
      this.desert.update(dt, this.elapsed, activePos, this.sky.timeOfDay);
      this.house.update(dt, this.elapsed, this.camera, this.sky.timeOfDay);
      this.audio.updateAmbience(dt, indoor ? 1 : 0, this.sky.timeOfDay, this.elapsed);
      this.story.update(dt, this.cutscenes.mode === 'gameplay', activePos);
    }

    this.renderer.render(this.scene, this.camera);

    this.fpsFrames++;
    this.fpsAccum += rawDt;
    if (this.fpsAccum >= 0.45) {
      this.ui.updateFPS(this.fpsFrames / this.fpsAccum);
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
      teleport: (x, z, yaw, pitch = 0) => {
        this.ui.dismissGateForDebug();
        this.ui.hideTitleScreen();
        this.cutscenes.mode = 'gameplay';
        this.cutscenes.containerEl?.classList.remove('cinematic-bars-active');
        this.story.reset();
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
        // Walk player into hero rock (-8.2, 10.2) from 8 angles and verify zero clipping!
        const cx = -8.2, cz = 10.2;
        let maxPenetration = 0;
        for (let a = 0; a < 8; a++) {
          const ang = (a / 8) * Math.PI * 2;
          const pos = new THREE.Vector3(cx + Math.cos(ang) * 0.4, 0.5, cz + Math.sin(ang) * 0.4);
          this.physics.resolveHorizontal(pos, 0.46);
          const distAfter = Math.hypot(pos.x - cx, pos.z - cz);
          if (distAfter < 1.35) maxPenetration = Math.max(maxPenetration, 1.35 - distAfter);
        }
        return { rockBlockedCleanly: maxPenetration === 0, maxPenetration };
      },
      getStats: () => ({
        drawCalls: this.renderer.info.render.calls,
        triangles: this.renderer.info.render.triangles,
        timeOfDay: this.sky.timeOfDay,
        pos: this.player.position.toArray(),
        indoor: this.player.isInsideHouse,
      }),
    };
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new SarabGame();
});
