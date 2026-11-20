import { toArabicDigits } from '../gameplay/StoryManager.js';

/**
 * Orchestrates all Cinematic Arabic UI Screens, Settings Modal, HUD, Inspect Cards, and Orientation Hints.
 */
export class UIManager {
  constructor(settings, audio) {
    this.settings = settings;
    this.audio = audio;

    this.titleScreen = document.getElementById('title-screen');
    this.hudLayer = document.getElementById('hud-layer');
    this.settingsModal = document.getElementById('settings-modal');
    this.controlsModal = document.getElementById('controls-modal');
    this.inspectModal = document.getElementById('inspect-modal');
    this.endingScreen = document.getElementById('ending-screen');
    this.portraitWarning = document.getElementById('portrait-warning');

    this.clockEl = document.getElementById('hud-clock');
    this.phaseEl = document.getElementById('hud-phase-label');
    this.sunIconEl = document.getElementById('hud-sun-icon');
    this.objTextEl = document.getElementById('hud-objective-text');
    this.cluesCountEl = document.getElementById('hud-clues-count');
    this.fpsEl = document.getElementById('hud-fps-counter');

    this.reticleDot = document.getElementById('reticle-dot');
    this.interactPrompt = document.getElementById('interact-prompt');
    this.interactLabel = document.getElementById('interact-label');
    this.mobileInteractBtn = document.getElementById('btn-mobile-interact');
    this.mobileInteractText = document.getElementById('mobile-interact-text');
    this.mobileSkipTimeBtn = document.getElementById('btn-mobile-skip-time');
    this.returnTitleBtn = document.getElementById('btn-return-title');

    this.onStartGame = null;
    this.onInteract = null;
    this.onSkipTime = null;
    this.onPauseToggle = null;
    this.onReturnToTitle = null;
    this.onFreeRoam = null;
    this.onReplayChapter = null;

    this._inspectCloseCb = null;
    this._portraitDismissed = false;
    this.isModalOpen = false;
    this.inGameplay = false;

    this._bindButtons();
    this._syncSettingsUI();
    this._checkOrientation();
    window.addEventListener('resize', () => this._checkOrientation());
  }

  _bindButtons() {
    document.getElementById('btn-start-game')?.addEventListener('click', () => {
      this.audio.unlock();
      this.hideTitleScreen();
      this.onStartGame?.();
    });

    document.getElementById('btn-open-settings')?.addEventListener('click', () => {
      this.audio.unlock();
      this.openSettings(false);
    });

    document.getElementById('btn-hud-pause')?.addEventListener('click', () => {
      this.openSettings(true);
    });

    const closeSettings = () => {
      this.settingsModal?.classList.add('hidden');
      this.isModalOpen = false;
      this.onPauseToggle?.(false);
    };
    document.getElementById('btn-close-settings')?.addEventListener('click', closeSettings);
    document.getElementById('btn-resume-from-settings')?.addEventListener('click', closeSettings);

    this.returnTitleBtn?.addEventListener('click', () => {
      closeSettings();
      this.onReturnToTitle?.();
    });

    document.getElementById('btn-open-controls')?.addEventListener('click', () => {
      this.controlsModal?.classList.remove('hidden');
      this.isModalOpen = true;
    });
    const closeControls = () => {
      this.controlsModal?.classList.add('hidden');
      this.isModalOpen = false;
    };
    document.getElementById('btn-close-controls')?.addEventListener('click', closeControls);
    document.getElementById('btn-ok-controls')?.addEventListener('click', closeControls);

    document.getElementById('btn-close-inspect')?.addEventListener('click', () => {
      this.inspectModal?.classList.add('hidden');
      this.isModalOpen = false;
      const cb = this._inspectCloseCb;
      this._inspectCloseCb = null;
      this.onPauseToggle?.(false);
      cb?.();
    });

    // Interact triggers (both reticle pill tap & mobile right-thumb button)
    this.interactPrompt?.addEventListener('click', () => this.onInteract?.());
    this.mobileInteractBtn?.addEventListener('click', () => this.onInteract?.());
    this.mobileSkipTimeBtn?.addEventListener('click', () => this.onSkipTime?.());

    // Ending buttons
    document.getElementById('btn-free-roam')?.addEventListener('click', () => {
      this.endingScreen?.classList.add('hidden');
      this.endingScreen?.classList.remove('active');
      this.showHUD();
      this.onFreeRoam?.();
    });

    document.getElementById('btn-replay-chapter')?.addEventListener('click', () => {
      this.endingScreen?.classList.add('hidden');
      this.endingScreen?.classList.remove('active');
      this.onReplayChapter?.();
    });

    document.getElementById('btn-dismiss-portrait')?.addEventListener('click', () => {
      this._portraitDismissed = true;
      this.portraitWarning?.classList.add('hidden');
    });

    // Keyboard shortcuts (E to interact, Escape to pause/settings)
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyE' && this.inGameplay && !this.isModalOpen) {
        this.onInteract?.();
      } else if (e.code === 'Escape' && this.inGameplay) {
        if (!this.settingsModal?.classList.contains('hidden')) {
          closeSettings();
        } else if (!this.isModalOpen) {
          this.openSettings(true);
        }
      }
    });

    // Settings Controls Binding
    const qualityGroup = document.getElementById('opt-quality');
    qualityGroup?.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.val;
        this.settings.applyQualityPreset(val);
        this._syncSettingsUI();
      });
    });

    const bindRange = (id, key, valId, fmt) => {
      const el = document.getElementById(id);
      const out = document.getElementById(valId);
      el?.addEventListener('input', () => {
        const num = parseFloat(el.value);
        this.settings.set(key, num);
        if (out) out.textContent = fmt(num);
      });
    };

    bindRange('opt-sensitivity', 'sensitivity', 'val-sensitivity', (v) => `${v.toFixed(1)}x`);
    bindRange('opt-resolution', 'resolutionScale', 'val-resolution', (v) => `${Math.round(v * 100)}%`);
    bindRange('opt-fov', 'fov', 'val-fov', (v) => `${Math.round(v)}°`);
    bindRange('opt-volume', 'volume', 'val-volume', (v) => `${Math.round(v * 100)}%`);

    const bindToggle = (id, key) => {
      const el = document.getElementById(id);
      el?.addEventListener('change', () => {
        this.settings.set(key, el.checked);
        if (key === 'showFps') this._updateFpsVisibility();
      });
    };
    bindToggle('opt-shadows', 'shadows');
    bindToggle('opt-sunflare', 'sunFlare');
    bindToggle('opt-fps', 'showFps');
  }

  _syncSettingsUI() {
    const d = this.settings.data;
    document.querySelectorAll('#opt-quality button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.val === d.quality);
    });
    const setVal = (id, val, outId, fmt) => {
      const el = document.getElementById(id);
      const out = document.getElementById(outId);
      if (el) el.value = String(val);
      if (out) out.textContent = fmt(val);
    };
    setVal('opt-sensitivity', d.sensitivity, 'val-sensitivity', (v) => `${v.toFixed(1)}x`);
    setVal('opt-resolution', d.resolutionScale, 'val-resolution', (v) => `${Math.round(v * 100)}%`);
    setVal('opt-fov', d.fov, 'val-fov', (v) => `${Math.round(v)}°`);
    setVal('opt-volume', d.volume, 'val-volume', (v) => `${Math.round(v * 100)}%`);

    const setChk = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.checked = Boolean(val);
    };
    setChk('opt-shadows', d.shadows);
    setChk('opt-sunflare', d.sunFlare);
    setChk('opt-fps', d.showFps);
    this._updateFpsVisibility();
  }

  _updateFpsVisibility() {
    this.fpsEl?.classList.toggle('hidden', !this.settings.data.showFps);
  }

  _checkOrientation() {
    if (this._portraitDismissed || !this.portraitWarning) return;
    const isNarrowPortrait = window.innerHeight > window.innerWidth && window.innerWidth < 680;
    this.portraitWarning.classList.toggle('hidden', !isNarrowPortrait);
  }

  showTitleScreen() {
    this.inGameplay = false;
    this.hudLayer?.classList.add('hidden');
    this.endingScreen?.classList.add('hidden');
    this.endingScreen?.classList.remove('active');
    this.titleScreen?.classList.remove('hidden');
    requestAnimationFrame(() => this.titleScreen?.classList.add('active'));
  }

  hideTitleScreen() {
    this.titleScreen?.classList.remove('active');
    setTimeout(() => this.titleScreen?.classList.add('hidden'), 650);
  }

  showHUD() {
    this.inGameplay = true;
    this.hudLayer?.classList.remove('hidden');
    this._updateFpsVisibility();
  }

  hideHUD() {
    this.hudLayer?.classList.add('hidden');
  }

  openSettings(fromGameplay) {
    if (document.pointerLockElement) {
      document.exitPointerLock?.();
    }
    this._syncSettingsUI();
    this.returnTitleBtn?.classList.toggle('hidden', !fromGameplay);
    this.settingsModal?.classList.remove('hidden');
    this.isModalOpen = true;
    if (fromGameplay) this.onPauseToggle?.(true);
  }

  openInspectModal(tag, title, body, onClose) {
    if (document.pointerLockElement) {
      document.exitPointerLock?.();
    }
    document.getElementById('inspect-tag').textContent = tag;
    document.getElementById('inspect-title').textContent = title;
    document.getElementById('inspect-body').textContent = body;
    this._inspectCloseCb = onClose;
    this.inspectModal?.classList.remove('hidden');
    this.isModalOpen = true;
    this.onPauseToggle?.(true);
  }

  showEndingScreen() {
    this.inGameplay = false;
    this.hideHUD();
    this.endingScreen?.classList.remove('hidden');
    requestAnimationFrame(() => this.endingScreen?.classList.add('active'));
  }

  updateClock(clockText, phaseText, timeOfDay) {
    if (this.clockEl) this.clockEl.textContent = clockText;
    if (this.phaseEl) this.phaseEl.textContent = phaseText;
    if (this.sunIconEl) {
      this.sunIconEl.style.color = timeOfDay > 0.65 ? '#ff9d42' : '#ffe08a';
    }
  }

  updateObjective(text) {
    if (this.objTextEl) this.objTextEl.textContent = text;
  }

  updateClues(found, total) {
    if (this.cluesCountEl) {
      this.cluesCountEl.textContent = `${toArabicDigits(found)} / ${toArabicDigits(total)}`;
    }
  }

  setTimeSkipButtonVisible(visible) {
    this.mobileSkipTimeBtn?.classList.toggle('hidden', !visible);
  }

  updateInteractPrompt(interactable) {
    if (!interactable) {
      this.reticleDot?.classList.remove('interactive');
      this.interactPrompt?.classList.add('hidden');
      this.mobileInteractBtn?.classList.add('hidden');
      return;
    }
    this.reticleDot?.classList.add('interactive');
    if (this.interactLabel) this.interactLabel.textContent = interactable.label;
    if (this.mobileInteractText) this.mobileInteractText.textContent = interactable.label;
    this.interactPrompt?.classList.remove('hidden');
    this.mobileInteractBtn?.classList.remove('hidden');
  }

  updateFPS(fps) {
    if (this.fpsEl && this.settings.data.showFps) {
      this.fpsEl.textContent = `${Math.round(fps)} FPS`;
    }
  }
}
