import * as THREE from 'three';
import { getTerrainHeight } from '../world/TerrainMath.js';

/**
 * Manages Cinematic Cameras & Story Sequences:
 * 1. Title Screen live 3D sweeping vista of the abandoned desert outpost & dunes
 * 2. Opening Wake-Up Cutscene:
 *    - Eyelids gradually opening + blinking + blur clearing ("عيونه بدأت تصحصح ببصريات جيدة")
 *    - Looking straight up at the blazing Noon sun ("ثم بص للشمس شاف سطوع عالي")
 *    - Squinting and ducking head down from blinding glare ("ونزل راسه لتحت")
 *    - Rising from the hot sand toward the abandoned house & handing off smoothly to gameplay!
 * 3. Smooth Time-Skip Transition Curtain (Noon -> Early Afternoon -> Mid Afternoon -> Asr Golden Hour)
 */
export class CutsceneManager {
  constructor(camera, skyLighting, audio, player) {
    this.camera = camera;
    this.sky = skyLighting;
    this.audio = audio;
    this.player = player;

    this.mode = 'title'; // 'title' | 'wakeup' | 'gameplay' | 'ending'
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
    this.curtainEl = document.getElementById('transition-curtain');
    this.curtainClockEl = document.getElementById('transition-clock');
    this.curtainLabelEl = document.getElementById('transition-label');

    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', () => {
        if (this.mode === 'wakeup') {
          this.finishWakeup();
        }
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

    // Start low on the hot desert sand at (-8.5, 9.5)
    this._wakeBaseY = getTerrainHeight(-8.5, 9.5);
    this._setEyelids(0.0);
    this._setBlur(14, 0.25);
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

    // Seamless handoff to PlayerController facing the abandoned house across the sand!
    this.player.setPose(-8.5, 9.5, -0.38, -0.02);
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
   * Dramatic cinematic Time-Skip fade showing Arabic clock advancing from Noon toward Asr!
   */
  playTimeSkip(clockText, phaseLabel, targetTimeOfDay, onMidpoint) {
    if (!this.curtainEl) {
      this.sky.setTimeOfDay(targetTimeOfDay);
      if (onMidpoint) onMidpoint();
      return;
    }

    this.curtainClockEl.textContent = clockText;
    this.curtainLabelEl.textContent = phaseLabel;
    this.curtainEl.classList.add('visible');
    this.audio.playDesertSting(targetTimeOfDay >= 0.85);

    setTimeout(() => {
      this.sky.setTimeOfDay(targetTimeOfDay);
      if (onMidpoint) onMidpoint();
    }, 780);

    setTimeout(() => {
      this.curtainEl.classList.remove('visible');
    }, 2050);
  }

  _setEyelids(openAmt) {
    if (this.eyelidEl) {
      this.eyelidEl.style.setProperty('--eyelid-open', THREE.MathUtils.clamp(openAmt, 0, 1).toFixed(3));
    }
  }

  _setBlur(px, whiteout) {
    if (this.blurEl) {
      this.blurEl.style.backdropFilter = px > 0.2 ? `blur(${px.toFixed(1)}px)` : 'none';
      this.blurEl.style.webkitBackdropFilter = px > 0.2 ? `blur(${px.toFixed(1)}px)` : 'none';
      this.blurEl.style.background = whiteout > 0.01 ? `rgba(255, 246, 224, ${whiteout.toFixed(3)})` : 'rgba(255, 246, 224, 0)';
    }
  }

  update(dt, elapsed) {
    this.timer += dt;

    if (this.mode === 'title') {
      // Sweeping cinema drone shot framing the abandoned house cleanly in the open left-center vista
      const angle = 0.56 + Math.sin(elapsed * 0.11) * 0.18;
      const dist = 19.2 + Math.sin(elapsed * 0.17) * 1.1;
      const cx = 3.2 + Math.sin(angle) * dist;
      const cz = -10.5 + Math.cos(angle) * dist;
      const gy = getTerrainHeight(cx, cz);
      this.camera.position.set(cx, gy + 3.4 + Math.sin(elapsed * 0.22) * 0.28, cz);
      this.camera.lookAt(-1.8, 2.55, -12.0);
      return;
    }

    if (this.mode === 'ending') {
      // Golden Hour Asr silhouette shot of the abandoned house & spinning wind-vane against the low sun!
      const sway = Math.sin(elapsed * 0.14) * 2.2;
      const cx = -13.5 + sway;
      const cz = 5.5;
      const gy = getTerrainHeight(cx, cz);
      this.camera.position.set(cx, gy + 2.8, cz);
      this.camera.lookAt(0.8, 3.2, -12.4);
      return;
    }

    if (this.mode === 'wakeup') {
      const t = this.timer;
      const baseX = -8.5;
      const baseZ = 9.5;
      const baseY = this._wakeBaseY;

      // Exact yaw/pitch pointing toward the blazing Noon sun in the sky!
      const sunDir = this.sky.sunDirection;
      const sunYaw = Math.atan2(-sunDir.x, -sunDir.z);
      const sunPitch = Math.asin(THREE.MathUtils.clamp(sunDir.y, -0.95, 0.95));

      let camY = baseY + 0.42;
      let yaw = sunYaw + 0.28;
      let pitch = 0.28;
      let roll = 0.14;
      let eyelids = 0.0;
      let blur = 14.0;
      let whiteout = 0.0;
      let glareBoost = 0.0;

      if (t < 3.0) {
        // STAGE 1: Eyes gradually opening & blinking twice, blur clearing ("عيونه بدأت تصحصح ببصريات جيدة")
        const p = t / 3.0;
        // Double natural wake-up blink curve
        if (t < 1.1) {
          eyelids = THREE.MathUtils.smoothstep(t, 0.2, 1.1) * 0.52;
        } else if (t < 1.55) {
          // First slow blink shut
          eyelids = THREE.MathUtils.lerp(0.52, 0.12, (t - 1.1) / 0.45);
        } else {
          // Eyes open wide and crisp!
          eyelids = THREE.MathUtils.lerp(0.12, 0.94, THREE.MathUtils.smoothstep(t, 1.55, 2.9));
        }
        blur = THREE.MathUtils.lerp(15.0, 2.2, p);
        whiteout = THREE.MathUtils.lerp(0.18, 0.06, p);
        roll = THREE.MathUtils.lerp(0.16, 0.04, p);
        pitch = THREE.MathUtils.lerp(0.24, 0.42, p);

        if (t > 1.3 && !this._spokeStep1) {
          this._spokeStep1 = true;
          this.onWakeupSubtitle?.('حرارة... رمل جاف يملأ فمي... أين أنا؟');
        }
      } else if (t < 6.0) {
        // STAGE 2: Looks straight up at the blazing Noon sun -> overwhelming glare! ("ثم بص للشمس شاف سطوع عاليه")
        const p = THREE.MathUtils.smoothstep(t, 3.0, 5.2);
        eyelids = t < 5.0 ? 0.96 : THREE.MathUtils.lerp(0.96, 0.46, (t - 5.0) / 1.0); // Squinting from glare!
        yaw = THREE.MathUtils.lerp(sunYaw + 0.28, sunYaw, p);
        pitch = THREE.MathUtils.lerp(0.42, Math.min(1.18, sunPitch - 0.03), p);
        roll = THREE.MathUtils.lerp(0.04, 0.0, p);
        camY = baseY + THREE.MathUtils.lerp(0.42, 0.65, p);

        const glarePeak = THREE.MathUtils.smoothstep(t, 3.6, 5.15);
        glareBoost = glarePeak * 0.95;
        whiteout = glarePeak * 0.32;
        blur = 2.2 * (1 - p) + glarePeak * 2.4;

        if (t > 3.85 && !this._playedSunSwell) {
          this._playedSunSwell = true;
          this.audio.playSunGlareSwell();
        }
        if (t > 4.4 && !this._spokeStep2) {
          this._spokeStep2 = true;
          this.onWakeupSubtitle?.('آه... الشمس حارقة! سطوعها يكاد يعمي عيني...');
        }
      } else if (t < 8.6) {
        // STAGE 3: Ducks head downward away from sun toward the sand ("ونزل راسه لتحت")
        const p = THREE.MathUtils.smoothstep(t, 6.0, 8.2);
        eyelids = THREE.MathUtils.lerp(0.46, 1.0, THREE.MathUtils.smoothstep(t, 6.5, 8.0));
        yaw = THREE.MathUtils.lerp(sunYaw, -0.58, p);
        pitch = THREE.MathUtils.lerp(Math.min(1.18, sunPitch - 0.03), -0.58, p); // Head drops down to the sand!
        roll = Math.sin(p * Math.PI) * -0.07;
        camY = baseY + THREE.MathUtils.lerp(0.65, 1.15, p);
        glareBoost = Math.max(0, 0.95 * (1 - p * 1.4));
        whiteout = Math.max(0, 0.32 * (1 - p * 1.5));
        blur = Math.max(0, 2.4 * (1 - p * 1.3));
      } else if (t < 11.8) {
        // STAGE 4: Stands up fully and lifts gaze toward the abandoned desert house!
        const p = THREE.MathUtils.smoothstep(t, 8.6, 11.4);
        eyelids = 1.0;
        blur = 0;
        whiteout = 0;
        glareBoost = 0;
        yaw = THREE.MathUtils.lerp(-0.58, -0.38, p);
        pitch = THREE.MathUtils.lerp(-0.58, -0.02, p);
        roll = 0;
        camY = baseY + THREE.MathUtils.lerp(1.15, this.player.eyeHeight, p);

        if (t > 9.1 && !this._spokeStep3) {
          this._spokeStep3 = true;
          this.onWakeupSubtitle?.('صحراء شاسعة... وذلك البيت المهجور أمامي. لا بد أن أجد ماءً... أو إجابة.');
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
