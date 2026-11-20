import * as THREE from 'three';
import { getTerrainHeight, HOUSE_CENTER_X, HOUSE_CENTER_Z } from '../world/TerrainMath.js';

/**
 * Cinematic Camera & Smooth Transition Director:
 * - Sweeping live 3D Title Screen vista of the enlarged desert estate, palms, buried jeep & hills
 * - Signature First-Person Wake-Up Cutscene (eyelids opening -> blazing sun glare -> head duck -> stand up)
 * - Silky non-blocking Time-Shift whisper banners while sunlight smoothly glides from Noon -> Asr!
 */
export class CutsceneManager {
  constructor(camera, skyLighting, audio, player) {
    this.camera = camera;
    this.sky = skyLighting;
    this.audio = audio;
    this.player = player;

    this.mode = 'title';
    this.timer = 0;
    this.onWakeupComplete = null;
    this.onWakeupSubtitle = null;

    this._spokeStep1 = false;
    this._spokeStep2 = false;
    this._spokeStep3 = false;
    this._playedSunSwell = false;

    this.eyelidEl = document.getElementById('eyelid-layer');
    this.blurEl = document.getElementById('vision-blur-layer');
    this.containerEl = document.getElementById('game-container');
    this.skipBtn = document.getElementById('btn-skip-cutscene');
    this.whisperEl = document.getElementById('time-whisper-banner');
    this.whisperClockEl = document.getElementById('whisper-clock');
    this.whisperLabelEl = document.getElementById('whisper-label');
    this._whisperTimeout = null;

    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', () => {
        if (this.mode === 'wakeup') this.finishWakeup();
      });
    }
  }

  startTitleCamera() {
    this.mode = 'title';
    this.timer = 0;
    this._setEyelids(1.0);
    this._setBlur(0, 0);
    this.sky.cutsceneGlareBoost = 0;
    this.containerEl?.classList.remove('cinematic-bars-active');
    this.skipBtn?.classList.add('hidden');
  }

  startWakeupCutscene(onSubtitle, onComplete) {
    this.mode = 'wakeup';
    this.timer = 0;
    this.onWakeupSubtitle = onSubtitle;
    this.onWakeupComplete = onComplete;
    this._spokeStep1 = false;
    this._spokeStep2 = false;
    this._spokeStep3 = false;
    this._playedSunSwell = false;

    this.player.enabled = false;
    this.containerEl?.classList.add('cinematic-bars-active');
    this.skipBtn?.classList.remove('hidden');

    this._wakeBaseY = getTerrainHeight(-11.0, 15.0);
    this._setEyelids(0.0);
    this._setBlur(14, 0.22);
    this.audio.playWakeUpTinnitus();
  }

  finishWakeup() {
    if (this.mode !== 'wakeup') return;
    this.mode = 'gameplay';
    this._setEyelids(1.0);
    this._setBlur(0, 0);
    this.sky.cutsceneGlareBoost = 0;
    this.containerEl?.classList.remove('cinematic-bars-active');
    this.skipBtn?.classList.add('hidden');

    this.player.setPose(-11.0, 15.0, -0.34, -0.02);
    this.player.enabled = true;
    if (this.onWakeupComplete) this.onWakeupComplete();
  }

  startEndingVista() {
    this.mode = 'ending';
    this.timer = 0;
    this.player.enabled = false;
    this.containerEl?.classList.add('cinematic-bars-active');
  }

  /**
   * Seamless non-blocking time shift! Smoothly glides the sun, sky, and shadow angles in real time
   * while displaying an unobtrusive cinema timestamp banner — zero jarring black freeze!
   */
  smoothAdvanceTime(clockText, phaseLabel, targetTimeOfDay) {
    this.sky.setTimeOfDay(targetTimeOfDay, false);
    this.audio.playDesertSting(targetTimeOfDay >= 0.85);

    if (this.whisperEl && this.whisperClockEl && this.whisperLabelEl) {
      this.whisperClockEl.textContent = clockText;
      this.whisperLabelEl.textContent = phaseLabel;
      this.whisperEl.classList.add('visible');
      if (this._whisperTimeout) clearTimeout(this._whisperTimeout);
      this._whisperTimeout = setTimeout(() => {
        this.whisperEl.classList.remove('visible');
      }, 3400);
    }
  }

  _setEyelids(openAmt) {
    if (this.eyelidEl) {
      this.eyelidEl.style.setProperty('--eyelid-open', THREE.MathUtils.clamp(openAmt, 0, 1).toFixed(3));
    }
  }

  _setBlur(px, whiteout) {
    if (this.blurEl) {
      this.blurEl.style.backdropFilter = px > 0.3 ? `blur(${px.toFixed(1)}px)` : 'none';
      this.blurEl.style.webkitBackdropFilter = px > 0.3 ? `blur(${px.toFixed(1)}px)` : 'none';
      this.blurEl.style.background =
        whiteout > 0.01 ? `rgba(255, 246, 224, ${whiteout.toFixed(3)})` : 'rgba(255, 246, 224, 0)';
    }
  }

  update(dt, elapsed) {
    this.timer += dt;

    if (this.mode === 'title') {
      // Grand cinematic camera sweeping across the enlarged estate, courtyard gate, jeep & dunes
      const angle = 0.54 + Math.sin(elapsed * 0.1) * 0.18;
      const dist = 28.0 + Math.sin(elapsed * 0.16) * 1.4;
      const cx = HOUSE_CENTER_X + 4.5 + Math.sin(angle) * dist;
      const cz = HOUSE_CENTER_Z + 2.0 + Math.cos(angle) * dist;
      const gy = getTerrainHeight(cx, cz);
      this.camera.position.set(cx, gy + 5.2 + Math.sin(elapsed * 0.2) * 0.35, cz);
      this.camera.lookAt(HOUSE_CENTER_X - 2.2, 3.2, HOUSE_CENTER_Z);
      return;
    }

    if (this.mode === 'ending') {
      const sway = Math.sin(elapsed * 0.14) * 2.5;
      const cx = -18.5 + sway;
      const cz = 4.0;
      const gy = getTerrainHeight(cx, cz);
      this.camera.position.set(cx, gy + 4.0, cz);
      this.camera.lookAt(HOUSE_CENTER_X + 1.0, 4.2, HOUSE_CENTER_Z);
      return;
    }

    if (this.mode === 'wakeup') {
      const t = this.timer;
      const baseX = -11.0;
      const baseZ = 15.0;
      const baseY = this._wakeBaseY;

      const sunDir = this.sky.sunDirection;
      const sunYaw = Math.atan2(-sunDir.x, -sunDir.z);
      const sunPitch = Math.asin(THREE.MathUtils.clamp(sunDir.y, -0.95, 0.95));

      let camY = baseY + 0.42;
      let yaw = sunYaw + 0.28;
      let pitch = 0.26;
      let roll = 0.14;
      let eyelids = 0.0;
      let blur = 14.0;
      let whiteout = 0.0;
      let glareBoost = 0.0;

      if (t < 2.8) {
        const p = t / 2.8;
        if (t < 1.0) eyelids = THREE.MathUtils.smoothstep(t, 0.15, 1.0) * 0.54;
        else if (t < 1.45) eyelids = THREE.MathUtils.lerp(0.54, 0.12, (t - 1.0) / 0.45);
        else eyelids = THREE.MathUtils.lerp(0.12, 0.95, THREE.MathUtils.smoothstep(t, 1.45, 2.7));
        blur = THREE.MathUtils.lerp(14.0, 2.0, p);
        whiteout = THREE.MathUtils.lerp(0.16, 0.05, p);
        roll = THREE.MathUtils.lerp(0.15, 0.03, p);
        pitch = THREE.MathUtils.lerp(0.24, 0.42, p);

        if (t > 1.2 && !this._spokeStep1) {
          this._spokeStep1 = true;
          this.onWakeupSubtitle?.('حرارة خانقة... رمل جاف يملأ فمي... أين أنا؟');
        }
      } else if (t < 5.6) {
        const p = THREE.MathUtils.smoothstep(t, 2.8, 4.9);
        eyelids = t < 4.7 ? 0.96 : THREE.MathUtils.lerp(0.96, 0.46, (t - 4.7) / 0.9);
        yaw = THREE.MathUtils.lerp(sunYaw + 0.28, sunYaw, p);
        pitch = THREE.MathUtils.lerp(0.42, Math.min(1.18, sunPitch - 0.03), p);
        roll = THREE.MathUtils.lerp(0.03, 0.0, p);
        camY = baseY + THREE.MathUtils.lerp(0.42, 0.68, p);

        const glarePeak = THREE.MathUtils.smoothstep(t, 3.4, 4.85);
        glareBoost = glarePeak * 0.94;
        whiteout = glarePeak * 0.3;
        blur = 2.0 * (1 - p) + glarePeak * 2.2;

        if (t > 3.6 && !this._playedSunSwell) {
          this._playedSunSwell = true;
          this.audio.playSunGlareSwell();
        }
        if (t > 4.1 && !this._spokeStep2) {
          this._spokeStep2 = true;
          this.onWakeupSubtitle?.('آه... شمس الظهيرة حارقة! سطوعها يكاد يعمي عيني...');
        }
      } else if (t < 8.0) {
        const p = THREE.MathUtils.smoothstep(t, 5.6, 7.6);
        eyelids = THREE.MathUtils.lerp(0.46, 1.0, THREE.MathUtils.smoothstep(t, 6.1, 7.5));
        yaw = THREE.MathUtils.lerp(sunYaw, -0.52, p);
        pitch = THREE.MathUtils.lerp(Math.min(1.18, sunPitch - 0.03), -0.56, p);
        roll = Math.sin(p * Math.PI) * -0.07;
        camY = baseY + THREE.MathUtils.lerp(0.68, 1.18, p);
        glareBoost = Math.max(0, 0.94 * (1 - p * 1.45));
        whiteout = Math.max(0, 0.3 * (1 - p * 1.5));
        blur = Math.max(0, 2.2 * (1 - p * 1.35));
      } else if (t < 10.8) {
        const p = THREE.MathUtils.smoothstep(t, 8.0, 10.5);
        eyelids = 1.0;
        blur = 0;
        whiteout = 0;
        glareBoost = 0;
        yaw = THREE.MathUtils.lerp(-0.52, -0.34, p);
        pitch = THREE.MathUtils.lerp(-0.56, -0.02, p);
        roll = 0;
        camY = baseY + THREE.MathUtils.lerp(1.18, this.player.eyeHeight, p);

        if (t > 8.4 && !this._spokeStep3) {
          this._spokeStep3 = true;
          this.onWakeupSubtitle?.('بيت مهجور وسط هذه الكثبان... وهناك بوصلة تلمع على الصخرة أمامي.');
        }
      } else {
        this.finishWakeup();
        return;
      }

      this.camera.position.set(baseX, camY, baseZ);
      this.camera.rotation.order = 'YXZ';
      this.camera.rotation.y = yaw;
      this.camera.rotation.x = pitch;
      this.camera.rotation.z = roll;

      this._setEyelids(eyelids);
      this._setBlur(blur, whiteout);
      this.sky.cutsceneGlareBoost = glareBoost;
    }
  }
}
