import { STAGE_METADATA } from '../world/StageManager.js';
import { STAGE_ATMOSPHERES } from '../engine/Palette.js';

const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export function toArabicDigits(input) {
  return String(input).replace(/\d/g, (d) => ARABIC_DIGITS[Number(d)]);
}

/**
 * Interactive 4-Chapter Desert Mystery Story Engine — SARAB v6.0 («أثر القافلة المفقودة»)
 * - Rich meaningful story across all 4 stages searching for your brother Salem!
 * - Interactive clue discoveries in EVERY stage (NOT just walking forward!)
 * - Smooth black screen transitions with full GPU stage disposal AND shader pre-compilation (zero hitch!)
 * - Drives the brand-new Compass Ribbon HUD + Chapter Progress Pips!
 */
export class JourneyManager {
  constructor(audio, stageManager, player, flashlight, dustStorm, ui, renderer, scene, camera) {
    this.audio = audio;
    this.stages = stageManager;
    this.player = player;
    this.flashlight = flashlight;
    this.dustStorm = dustStorm;
    this.ui = ui;
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    this.stageId = 1;
    this.stepIndex = 0;
    this.transitioning = false;
    this.journeyComplete = false;
    this.freeRoam = false;

    this.queue = [];
    this.activeLine = null;
    this.charIndex = 0;
    this.charTimer = 0;
    this.holdTimer = 0;
    this.charInterval = 0.038;
    this._hudAccum = 0.2;

    this.subContainer = document.getElementById('subtitle-container');
    this.subText = document.getElementById('subtitle-text');
    this.transEl = document.getElementById('stage-transition-overlay');
    this.transTagEl = document.getElementById('trans-stage-tag');
    this.transTitleEl = document.getElementById('trans-stage-title');
    this.transSubEl = document.getElementById('trans-stage-sub');
  }

  getCurrentStep() {
    const meta = STAGE_METADATA[this.stageId];
    if (!meta || !meta.steps) return null;
    if (this.stepIndex >= meta.steps.length) return null;
    return meta.steps[this.stepIndex];
  }

  getActiveInteractable() {
    const step = this.getCurrentStep();
    if (!step || step.isExit) return null;
    return this.stages.getInteractableById(step.id);
  }

  getActiveTargetWorldPos() {
    const meta = STAGE_METADATA[this.stageId];
    const step = this.getCurrentStep();
    if (!meta || !step) return null;
    if (step.isExit) {
      const gy = this.stages.getHeight(meta.goalPos.x, meta.goalPos.z);
      return { x: meta.goalPos.x, y: gy + 1.6, z: meta.goalPos.z };
    }
    const inter = this.stages.getInteractableById(step.id);
    return inter ? inter.worldPos : null;
  }

  async transitionToStage(targetStageId, { immediate = false, showOverlay = true } = {}) {
    if (this.transitioning && !immediate) return;
    this.transitioning = true;
    this.player.enabled = false;
    this.player.setAutoSprintLock(false);
    this.hideSubtitle();
    this.queue = [];
    this.activeLine = null;

    const meta = STAGE_METADATA[targetStageId] || STAGE_METADATA[1];
    const atmos = STAGE_ATMOSPHERES[targetStageId] || STAGE_ATMOSPHERES[1];

    if (showOverlay && !immediate && this.transEl) {
      if (this.transTagEl) this.transTagEl.textContent = `${meta.chapterTag} • ${meta.timeLabel}`;
      if (this.transTitleEl) this.transTitleEl.textContent = meta.title;
      if (this.transSubEl) this.transSubEl.textContent = meta.subtitle;
      this.transEl.classList.remove('hidden');
      requestAnimationFrame(() => this.transEl.classList.add('active'));
      await new Promise((r) => setTimeout(r, 620));
    }

    // 1. Completely dispose previous stage & construct new stage
    this.stageId = meta.id;
    this.stepIndex = 0;
    this.journeyComplete = false;
    this.stages.loadStage(meta.id);

    // 2. Sync 3D spatial soundscape spots for the new stage
    this.audio.setStage(meta.id, this.stages.spatialAudioSpots);
    if (!immediate) this.audio.playStageTransition(meta.id);

    // 3. Sync gentle desert breeze intensity
    this.dustStorm.setTargetIntensity(atmos.stormBase || 0.0, true);

    // 4. Sync Handheld Flashlight (pre-warmed zero-stutter intensities!)
    this.flashlight.setStageContext(meta.id);
    this.flashlight.setEnabled(meta.id === 4, false);
    this.ui.setFlashlightUI(meta.id === 4, meta.id === 4);

    // 5. Place player at start pose & pre-compile ALL stage shaders while screen is black -> ZERO mid-game stutters!
    this.player.setPose(meta.startPos.x, meta.startPos.z, meta.startPos.yaw, meta.startPos.pitch);
    this.flashlight.update(0.016, 0, true);
    if (this.renderer && this.scene && this.camera) {
      this.renderer.compile(this.scene, this.camera);
    }

    // 6. Sync new Compass HUD & Chapter Progress Pips
    const step = this.getCurrentStep();
    this.ui.updateStageHUD({
      stageId: meta.id,
      chapterLabel: meta.chapterTag,
      timeLabel: meta.timeLabel,
      sunIcon: atmos.sunIcon,
      objective: step ? step.objective : '',
      stepIndex: this.stepIndex,
      totalSteps: meta.steps.length,
    });

    if (showOverlay && !immediate && this.transEl) {
      await new Promise((r) => setTimeout(r, 1100));
      this.transEl.classList.remove('active');
      await new Promise((r) => setTimeout(r, 580));
      this.transEl.classList.add('hidden');
    } else if (this.transEl) {
      this.transEl.classList.remove('active');
      this.transEl.classList.add('hidden');
    }

    this.transitioning = false;
    this.player.enabled = true;

    if (!immediate) {
      const intros = {
        1: 'شمس الظهيرة حارقة... هناك معسكر مهجور غرب هذه الكثبان، ربما ترك أخي سالم أثراً فيه.',
        2: 'دخلتُ وادي الصخور... أطلال الخان القديم أمامي، سأبحث فيها عن إشارة من سالم.',
        3: 'هواء الجبل بارد والشمس تغيب... سأتفقد مأوى الراصد في منتصف الصعود أولاً.',
        4: 'تتلألأ النجوم والمجرة فوق البيت المهجور... نور الفانوس يدلّني، سأتقدم بحذر.',
      };
      this.sayImmediate(intros[meta.id] || '', meta.id === 4 ? 'night' : 'thought');
    }
  }

  handleInteract(interactable) {
    const step = this.getCurrentStep();
    if (!interactable || !step || step.isExit || interactable.id !== step.id) return;

    this.audio.playDiscoverySFX(step.sfx || 'paper');

    this.ui.openDiscoveryModal(step.tag, step.title, step.body, () => {
      if (step.whisper) {
        this.sayImmediate(step.whisper, this.stageId === 4 ? 'night' : 'thought');
      }
      this.stepIndex++;
      const meta = STAGE_METADATA[this.stageId];
      const atmos = STAGE_ATMOSPHERES[this.stageId];
      const nextStep = this.getCurrentStep();

      this.ui.updateStageHUD({
        stageId: meta.id,
        chapterLabel: meta.chapterTag,
        timeLabel: meta.timeLabel,
        sunIcon: atmos.sunIcon,
        objective: nextStep ? nextStep.objective : 'اكتملت الرحلة — تجول بحرية تحت النجوم',
        stepIndex: this.stepIndex,
        totalSteps: meta.steps.length,
      });

      if (step.triggersNextStage && this.stageId < 4) {
        setTimeout(() => {
          this.transitionToStage(this.stageId + 1, { immediate: false, showOverlay: true });
        }, 1600);
      } else if (step.completesJourney) {
        this.journeyComplete = true;
        setTimeout(() => {
          if (this.stageId === 4 && !this.freeRoam) {
            this.player.enabled = false;
            this.ui.showEndingScreen();
          }
        }, 2400);
      }
    });
  }

  sayImmediate(text, style = 'thought') {
    this.queue = [];
    this.activeLine = null;
    this.enqueueLine(text, style);
  }

  enqueueLine(text, style = 'thought') {
    this.queue.push({ text, style });
    if (!this.activeLine) this._startNextLine();
  }

  _startNextLine() {
    if (this.queue.length === 0) {
      this.activeLine = null;
      this.hideSubtitle();
      return;
    }
    this.activeLine = this.queue.shift();
    this.charIndex = 0;
    this.charTimer = 0;
    this.holdTimer = 0;
    if (this.subContainer && this.subText) {
      this.subContainer.classList.remove('hidden');
      this.subText.textContent = '';
      this.subText.classList.add('typing');
    }
  }

  hideSubtitle() {
    if (this.subContainer) this.subContainer.classList.add('hidden');
    if (this.subText) this.subText.classList.remove('typing');
  }

  update(dt, elapsed, isGameplay, playerPos, playerYaw = 0) {
    const meta = STAGE_METADATA[this.stageId];
    const step = this.getCurrentStep();

    // Gentle Stage 2 canyon warm dust breeze wave (no harsh streak lines!)
    if (this.stageId === 2 && !this.transitioning) {
      const gustWave = 0.16 + 0.08 * Math.sin(elapsed * 0.24);
      this.dustStorm.setTargetIntensity(Math.max(0.10, Math.min(0.28, gustWave)), false);
    }

    // Check stage exit gate arrival ONLY once stage clues are done (step.isExit === true)!
    if (isGameplay && !this.transitioning && meta && step && step.isExit && playerPos) {
      const distToGoal = Math.hypot(playerPos.x - meta.goalPos.x, playerPos.z - meta.goalPos.z);
      if (distToGoal <= meta.goalRadius && this.stageId < 4) {
        this.transitionToStage(this.stageId + 1, { immediate: false, showOverlay: true });
        return;
      }
    }

    // Throttled 12Hz Compass Ribbon + Objective Distance HUD update
    this._hudAccum += dt;
    if (this._hudAccum >= 0.083) {
      this._hudAccum = 0;
      if (isGameplay && playerPos) {
        const targetPos = this.getActiveTargetWorldPos();
        if (targetPos && !this.journeyComplete) {
          const dx = targetPos.x - playerPos.x;
          const dz = targetPos.z - playerPos.z;
          const distMeters = Math.max(1, Math.round(Math.hypot(dx, dz)));
          const targetAngle = Math.atan2(-dx, -dz);
          let relRad = playerYaw - targetAngle;
          while (relRad > Math.PI) relRad -= Math.PI * 2;
          while (relRad < -Math.PI) relRad += Math.PI * 2;
          this.ui.updateCompass(playerYaw, relRad, `${toArabicDigits(distMeters)}م`);
        } else {
          this.ui.updateCompass(playerYaw, null, '');
        }
      }
    }

    // Typewriter subtitles
    if (this.activeLine) {
      const full = this.activeLine.text;
      if (this.charIndex < full.length) {
        this.charTimer += dt;
        while (this.charTimer >= this.charInterval && this.charIndex < full.length) {
          this.charTimer -= this.charInterval;
          const ch = full[this.charIndex];
          this.charIndex++;
          if (this.subText) this.subText.textContent = full.slice(0, this.charIndex);
          if (this.charIndex % 2 === 1) {
            this.audio.playTextBlip(this.activeLine.style, ch);
          }
        }
      } else {
        if (this.subText) this.subText.classList.remove('typing');
        this.holdTimer += dt;
        const holdDur = Math.max(2.6, full.length * 0.044);
        if (this.holdTimer >= holdDur) this._startNextLine();
      }
    }
  }
}
