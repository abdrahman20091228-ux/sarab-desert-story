/**
 * Orchestrates Mandatory Fullscreen Gate, Title Screen, Ultra-Clean Single-Mission HUD,
 * Settings Modal, Inspection Cards, Ending Screen, and Orientation Hints.
 */
export class UIManager {
  constructor(settings, audio) {
    this.settings = settings;
    this.audio = audio;

    this.fullscreenGate = document.getElementById('fullscreen-gate');
    this.titleScreen = document.getElementById('title-screen');
    this.hudLayer = document.getElementById('hud-layer');
    this.settingsModal = document.getElementById('settings-modal');
    this.controlsModal = document.getElementById('controls-modal');
    this.inspectModal = document.getElementById('inspect-modal');
    this.endingScreen = document.getElementById('ending-screen');
    this.portraitWarning = document.getElementById('portrait-warning');

    this.missionTextEl = document.getElementById('hud-mission-text');
    this.missionDistEl = document.getElementById('hud-mission-dist');
    this.missionArrowEl = document.getElementById('hud-mission-arrow');
    this.clockEl = document.getElementById('hud-clock');
    this.sunIconEl = document.getElementById('hud-sun-icon');
    this.fpsEl = document.getElementById('hud-fps-counter');

    this.reticleDot = document.getElementById('reticle-dot');
    this.mobileInteractBtn = document.getElementById('btn-mobile-interact');
    this.mobileInteractText = document.getElementById('mobile-interact-text');
    this.restoreFsBtn = document.getElementById('btn-restore-fs');
    this.returnTitleBtn = document.getElementById('btn-return-title');

    this.onStartGame = null;
    this.onInteract = null;
    this.onPauseToggle = null;
    this.onReturnToTitle = null;
    this.onFreeRoam = null;
    this.onReplayChapter = null;

    this._inspectCloseCb = null;
    this._portraitDismissed = false;
    this.isModalOpen = false;
    this.inGameplay = false;

    this._bindButtons();
    this._bindFullscreenMonitor();
    this._syncSettingsUI();
    this._checkOrientation();
    window.addEventListener('resize', () => this._checkOrientation());
  }

  async enterMandatoryFullscreen() {
    this.audio.unlock();
    try {
      const el = document.documentElement;
      if (!document.fullscreenElement) {
        if (el.requestFullscreen) await el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      }
      if (screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock('landscape').catch(() => {});
      }
    } catch {
      // Graceful fallback on browsers that block programmatic fullscreen (e.g., iOS Safari)
    }

    this.fullscreenGate?.classList.remove('active');
    setTimeout(() => this.fullscreenGate?.classList.add('hidden'), 380);
    this.showTitleScreen();
  }

  _bindFullscreenMonitor() {
    const syncFsButton = () => {
      const isFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
      this.restoreFsBtn?.classList.toggle('hidden', isFs);
    };
    document.addEventListener('fullscreenchange', syncFsButton);
    document.addEventListener('webkitfullscreenchange', syncFsButton);

    this.restoreFsBtn?.addEventListener('click', () => {
      this.enterMandatoryFullscreen();
    });
  }

  _bindButtons() {
    document.getElementById('btn-enter-fullscreen')?.addEventListener('click', () => {
      this.enterMandatoryFullscreen();
    });

    document.getElementById('btn-start-game')?.addEventListener('click', () => {
      this.audio.unlock();
      // Re-assert fullscreen on game start if not already active
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
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

    this.mobileInteractBtn?.addEventListener('click', () => this.onInteract?.());

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

    const qualityGroup = document.getElementById('opt-quality');
    qualityGroup?.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.settings.applyQualityPreset(btn.dataset.val);
        this._syncSettingsUI();
      });
    });

    const fpsCapGroup = document.getElementById('opt-fpscap');
    fpsCapGroup?.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.settings.set('fpsCap', Number(btn.dataset.val));
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
        if (key === 'batterySaver') this._syncSettingsUI();
      });
    };
    bindToggle('opt-battery', 'batterySaver');
    bindToggle('opt-shadows', 'shadows');
    bindToggle('opt-sunflare', 'sunFlare');
    bindToggle('opt-storm', 'dustStorm');
    bindToggle('opt-fps', 'showFps');
  }

  _syncSettingsUI() {
    const d = this.settings.data;
    document.querySelectorAll('#opt-quality button').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.val === d.quality);
    });
    document.querySelectorAll('#opt-fpscap button').forEach((btn) => {
      btn.classList.toggle('active', Number(btn.dataset.val) === Number(d.fpsCap));
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
    setChk('opt-battery', d.batterySaver);
    setChk('opt-shadows', d.shadows);
    setChk('opt-sunflare', d.sunFlare);
    setChk('opt-storm', d.dustStorm);
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

  isGateActive() {
    return Boolean(this.fullscreenGate && !this.fullscreenGate.classList.contains('hidden'));
  }

  dismissGateForDebug() {
    this.fullscreenGate?.classList.remove('active');
    this.fullscreenGate?.classList.add('hidden');
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
    setTimeout(() => this.titleScreen?.classList.add('hidden'), 450);
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
    if (document.pointerLockElement) document.exitPointerLock?.();
    this._syncSettingsUI();
    this.returnTitleBtn?.classList.toggle('hidden', !fromGameplay);
    this.settingsModal?.classList.remove('hidden');
    this.isModalOpen = true;
    if (fromGameplay) this.onPauseToggle?.(true);
  }

  openInspectModal(tag, title, body, onClose) {
    if (document.pointerLockElement) document.exitPointerLock?.();
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

  updateMission(text, distText, arrowDeg = null) {
    if (this.missionTextEl && this.missionTextEl.textContent !== text) {
      this.missionTextEl.textContent = text;
    }
    if (this.missionArrowEl) {
      if (arrowDeg !== null && Number.isFinite(arrowDeg)) {
        const rounded = Math.round(arrowDeg);
        if (rounded !== this._lastArrowDeg) {
          this._lastArrowDeg = rounded;
          this.missionArrowEl.style.transform = `rotate(${rounded}deg)`;
        }
        if (this._arrowHidden !== false) {
          this._arrowHidden = false;
          this.missionArrowEl.classList.remove('hidden');
        }
      } else if (this._arrowHidden !== true) {
        this._arrowHidden = true;
        this.missionArrowEl.classList.add('hidden');
      }
    }
    if (this.missionDistEl) {
      if (distText) {
        if (this._lastDistText !== distText) {
          this._lastDistText = distText;
          this.missionDistEl.textContent = distText;
        }
        if (this._distHidden !== false) {
          this._distHidden = false;
          this.missionDistEl.classList.remove('hidden');
        }
      } else if (this._distHidden !== true) {
        this._distHidden = true;
        this.missionDistEl.classList.add('hidden');
      }
    }
  }

  updateClock(clockText, timeOfDay) {
    if (this.clockEl && this._lastClockText !== clockText) {
      this._lastClockText = clockText;
      this.clockEl.textContent = clockText;
    }
    if (this.sunIconEl) {
      const col = timeOfDay > 0.65 ? '#ff9d42' : '#ffe08a';
      if (this._lastSunColor !== col) {
        this._lastSunColor = col;
        this.sunIconEl.style.color = col;
      }
    }
  }

  updateInteractPrompt(interactable) {
    const id = interactable ? interactable.id : null;
    if (id === this._lastInteractId) return;
    this._lastInteractId = id;
    if (!interactable) {
      this.reticleDot?.classList.remove('interactive');
      this.mobileInteractBtn?.classList.add('hidden');
      return;
    }
    this.reticleDot?.classList.add('interactive');
    if (this.mobileInteractText) this.mobileInteractText.textContent = interactable.label;
    this.mobileInteractBtn?.classList.remove('hidden');
  }

  updateFPS(fps) {
    if (this.fpsEl && this.settings.data.showFps) {
      this.fpsEl.textContent = `${Math.round(fps)} FPS`;
    }
  }
}
