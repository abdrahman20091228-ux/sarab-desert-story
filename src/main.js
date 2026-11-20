import * as THREE from 'three';
import { SettingsManager } from './engine/Settings.js';
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
 * سَـرَاب: ظهيرة الرمال (SARAB: Mirage of Noon — Chapter I)
 * Main 3D Narrative Game Bootstrap & Render Loop
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

    // Start live 3D cinematic title screen!
    this.cutscenes.startTitleCamera();
    this._animate();
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.settings.data.fov,
      window.innerWidth / window.innerHeight,
      0.12,
      1150
    );
  }

  _initWorld() {
    this.texManager = new TextureManager(this.renderer);
    this.physics = new PhysicsWorld(getTerrainHeight);
    this.sky = new SkyLightingSystem(this.scene, this.renderer, this.settings);
    this.desert = new DesertWorld(this.scene, this.texManager, this.physics, this.settings);
    this.house = new AbandonedHouse(this.scene, this.texManager, this.physics);
  }

  _initGameplay() {
    this.player = new PlayerController(this.camera, this.physics, this.audio, this.settings);
    this.cutscenes = new CutsceneManager(this.camera, this.sky, this.audio, this.player);
    this.ui = new UIManager(this.settings, this.audio);
    this.story = new StoryManager(this.audio, this.sky, this.house, this.cutscenes, this.ui);

    // Soft vast desert boundary monologue
    this.player.onBoundaryHit = () => {
      this.story.sayImmediate('الصحراء هنا بلا نهاية... لن أبتعد كثيراً عن البيت المهجور قبل أن أجد ماءً وإجابة.');
    };

    this.ui.onStartGame = () => {
      this.story.reset();
      this.cutscenes.startWakeupCutscene(
        (line) => this.story.sayImmediate(line, 'thought'),
        () => {
          this.ui.showHUD();
        }
      );
    };

    this.ui.onInteract = () => {
      if (this.player.enabled && this.player.focusedInteractable) {
        this.story.handleInteract(this.player.focusedInteractable);
      }
    };

    this.ui.onSkipTime = () => {
      if (this.player.enabled) {
        this.story.triggerManualTimeAdvance();
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
      this.sky.setTimeOfDay(0.96);
      this.cutscenes.mode = 'gameplay';
      this.cutscenes.containerEl?.classList.remove('cinematic-bars-active');
      this.player.setPose(-5.0, -3.0, -0.45, -0.02);
      this.player.enabled = true;
      this.story.sayImmediate('وقت العصر الذهبي... يمكنك التجول بحرية في الصحراء وتأمل الأجواء.');
    };

    this.ui.onReplayChapter = () => {
      this.ui.onStartGame();
    };
  }

  _bindSettings() {
    const apply = (data, preset) => {
      const effectiveDpr = Math.min(window.devicePixelRatio || 1, preset.dprCap) * data.resolutionScale;
      this.renderer.setPixelRatio(Math.max(0.5, Math.min(2.0, effectiveDpr)));
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
        this.player.update(dt, this.elapsed, this.house.interactables);
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
      this.story.update(dt, this.cutscenes.mode === 'gameplay');
    }

    this.renderer.render(this.scene, this.camera);

    // Smooth FPS readout
    this.fpsFrames++;
    this.fpsAccum += rawDt;
    if (this.fpsAccum >= 0.45) {
      this.ui.updateFPS(this.fpsFrames / this.fpsAccum);
      this.fpsFrames = 0;
      this.fpsAccum = 0;
    }
  }

  _exposeDebugAPI() {
    // Clean inspection hook for automated visual verification & screenshot testing
    window.__SARAB__ = {
      setTimeOfDay: (t) => this.sky.setTimeOfDay(t),
      teleport: (x, z, yaw, pitch = 0) => {
        this.cutscenes.finishWakeup();
        this.ui.hideTitleScreen();
        this.ui.showHUD();
        this.player.setPose(x, z, yaw, pitch);
      },
      setWakeupAt: (sec) => {
        this.ui.hideTitleScreen();
        this.story.reset();
        this.cutscenes.startWakeupCutscene((line) => this.story.sayImmediate(line, 'thought'), () => this.ui.showHUD());
        this.cutscenes.timer = sec;
        this.cutscenes.update(0.016, sec);
      },
      triggerSubtitle: (text, style = 'thought') => this.story.sayImmediate(text, style),
      powerAntenna: () => {
        this.story.antennaPowered = true;
        this.house.setAntennaPowered(true);
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
