import { STAGE_METADATA } from '../world/StageManager.js';
import { STAGE_ATMOSPHERES } from '../engine/Palette.js';

const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export function toArabicDigits(input) {
  return String(input).replace(/\d/g, (d) => ARABIC_DIGITS[Number(d)]);
}

/**
 * 4-Stage Desert Exploration Journey Director — SARAB v5.0
 * Completely replaces the old story!
 * - Smooth black screen cinematic transitions between the 4 stages while disposing previous stage memory
 * - Poetic atmospheric desert subtitles triggered along each 50-100s walk
 * - Live compass arrow + distance to next pass/summit/house + Stage 4 sanctuary completion
 */
export class JourneyManager {
  constructor(audio, stageManager, player, flashlight, dustStorm, ui) {
    this.audio = audio;
    this.stages = stageManager;
    this.player = player;
    this.flashlight = flashlight;
    this.dustStorm = dustStorm;
    this.ui = ui;

    this.stageId = 1;
    this.transitioning = false;
    this.journeyComplete = false;
    this.freeRoam = false;
    this._triggeredWhispers = new Set();

    // Subtitle typewriter state
    this.queue = [];
    this.activeLine = null;
    this.charIndex = 0;
    this.charTimer = 0;
    this.holdTimer = 0;
    this.charInterval = 0.04;
    this._hudAccum = 0.2;

    this.subContainer = document.getElementById('subtitle-container');
    this.subText = document.getElementById('subtitle-text');
    this.transEl = document.getElementById('stage-transition-overlay');
    this.transTagEl = document.getElementById('trans-stage-tag');
    this.transTitleEl = document.getElementById('trans-stage-title');
    this.transSubEl = document.getElementById('trans-stage-sub');
  }

  /**
   * Transitions to target stage (1..4) with a cinematic black screen fade,
   * full disposal of the previous stage from memory, and audio/flashlight state sync.
   */
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
      if (this.transTagEl) this.transTagEl.textContent = `المرحلة ${toArabicDigits(meta.id)} من ٤ • ${meta.timeLabel}`;
      if (this.transTitleEl) this.transTitleEl.textContent = meta.title;
      if (this.transSubEl) this.transSubEl.textContent = meta.subtitle;
      this.transEl.classList.remove('hidden');
      // Trigger smooth CSS fade to black
      requestAnimationFrame(() => this.transEl.classList.add('active'));
      await new Promise((r) => setTimeout(r, 680));
    }

    // Unload previous stage from GPU/CPU memory and build the new stage cleanly!
    this.stageId = meta.id;
    this.journeyComplete = false;
    this._triggeredWhispers.clear();
    this.stages.loadStage(meta.id);

    // Sync audio ambience & transition chord
    this.audio.setStage(meta.id);
    if (!immediate) this.audio.playStageTransition(meta.id);

    // Sync Stage 2 light canyon dust gusts (0 in Stages 1, 3, 4)
    this.dustStorm.setTargetIntensity(atmos.stormBase || 0.0, true);

    // Sync Handheld Flashlight: automatically ON for Night Stage 4, OFF for bright daylight stages
    this.flashlight.setStageContext(meta.id);
    this.flashlight.setEnabled(meta.id === 4, false);
    this.ui.setFlashlightUI(meta.id === 4, meta.id === 4);

    // Place explorer cleanly at stage start pose
    this.player.setPose(meta.startPos.x, meta.startPos.z, meta.startPos.yaw, meta.startPos.pitch);
    this.flashlight.update(0.016, 0, true);

    // Update HUD mission & clock immediately
    this.ui.updateMission(meta.objective, '', 0);
    this.ui.updateClock(meta.timeLabel, meta.id, atmos.sunIcon);

    if (showOverlay && !immediate && this.transEl) {
      // Let the player take in the black stage title card briefly
      await new Promise((r) => setTimeout(r, 1150));
      this.transEl.classList.remove('active');
      await new Promise((r) => setTimeout(r, 620));
      this.transEl.classList.add('hidden');
    } else if (this.transEl) {
      this.transEl.classList.remove('active');
      this.transEl.classList.add('hidden');
    }

    this.transitioning = false;
    this.player.enabled = true;
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

  handleInteract(interactable) {
    if (!interactable || this.stageId !== 4) return;
    if (interactable.id === 'sanctuary_lantern' && !this.journeyComplete) {
      this.journeyComplete = true;
      this.audio.playLanternWarmChime();
      this.player.enabled = false;
      this.sayImmediate('دفء المصباح يبدد وحشة الصحراء... اكتملت رحلة السراب تحت سماء النجوم.', 'night');
      setTimeout(() => {
        if (this.stageId === 4 && !this.freeRoam) {
          this.ui.showEndingScreen();
        }
      }, 2800);
    }
  }

  update(dt, elapsed, isGameplay, playerPos, playerYaw = 0) {
    const meta = STAGE_METADATA[this.stageId];

    // Stage 2 periodic light dust gusts (هبّة غبار خفيفة — stays subtle & cinematic 0.16..0.38!)
    if (this.stageId === 2 && !this.transitioning) {
      const gustWave = 0.24 + 0.12 * Math.sin(elapsed * 0.22) + 0.05 * Math.cos(elapsed * 0.51);
      this.dustStorm.setTargetIntensity(Math.max(0.14, Math.min(0.40, gustWave)), false);
    }

    // Trigger poetic landmark whispers as explorer walks along each stage
    if (isGameplay && !this.transitioning && meta && playerPos) {
      for (let i = 0; i < meta.whispers.length; i++) {
        const w = meta.whispers[i];
        const key = `${this.stageId}_${i}`;
        if (!this._triggeredWhispers.has(key) && playerPos.z <= w.distZ) {
          this._triggeredWhispers.add(key);
          this.enqueueLine(w.text, this.stageId === 4 ? 'night' : 'thought');
        }
      }

      // Check stage exit arrival (Stages 1 -> 2 -> 3 -> 4)
      if (this.stageId < 4) {
        const distToGoal = Math.hypot(playerPos.x - meta.goalPos.x, playerPos.z - meta.goalPos.z);
        if (distToGoal <= meta.goalRadius) {
          this.transitionToStage(this.stageId + 1, { immediate: false, showOverlay: true });
          return;
        }
      }
    }

    // Throttled 10Hz HUD directional compass + distance update
    this._hudAccum += dt;
    if (this._hudAccum >= 0.1) {
      this._hudAccum = 0;
      if (isGameplay && meta && playerPos) {
        const dx = meta.goalPos.x - playerPos.x;
        const dz = meta.goalPos.z - playerPos.z;
        const distMeters = Math.max(1, Math.round(Math.hypot(dx, dz)));
        const targetAngle = Math.atan2(-dx, -dz);
        let relRad = playerYaw - targetAngle;
        while (relRad > Math.PI) relRad -= Math.PI * 2;
        while (relRad < -Math.PI) relRad += Math.PI * 2;
        const arrowDeg = Math.round((relRad * 180) / Math.PI);
        const objText =
          this.stageId === 4 && this.journeyComplete
            ? 'تجول بحرية تحت سماء النجوم والبيت المهجور'
            : meta.objective;
        this.ui.updateMission(objText, this.journeyComplete ? '' : `${toArabicDigits(distMeters)}م`, this.journeyComplete ? null : arrowDeg);
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
        const holdDur = Math.max(2.6, full.length * 0.045);
        if (this.holdTimer >= holdDur) this._startNextLine();
      }
    }
  }
}
