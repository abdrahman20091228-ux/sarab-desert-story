/**
 * SARAB v6.0 UI Manager — Arabian Cinematic Minimalist HUD & Story Interface:
 * - Live Rotating Architectural Compass Ribbon (ش / ق / ج / غ) + Moving Waypoint Diamond & Distance
 * - Top-Right Borderless RTL Objective Card with Chapter Progress Pips
 * - Interactive Story Clue Discovery Modal (opens on every landmark inspection across all 4 stages)
 * - Zero-blur live HUD (keeps mobile locked at smooth 60 FPS!)
 * - Settings & Chapters Drawer synced with v6.0 defaults (Ultra, 2.8x sensitivity, 140% resolution scale)
 */

const COMPASS_PX_PER_DEG = 2.15; // 1° = 2.15px -> ~160° visible across a ~344px ribbon
const COMPASS_TICKS = [
  { deg: 0, label: 'ش', major: true, cardinal: true },
  { deg: 15 },
  { deg: 30 },
  { deg: 45, label: 'ش.ق', major: true },
  { deg: 60 },
  { deg: 75 },
  { deg: 90, label: 'ق', major: true, cardinal: true },
  { deg: 105 },
  { deg: 120 },
  { deg: 135, label: 'ج.ق', major: true },
  { deg: 150 },
  { deg: 165 },
  { deg: 180, label: 'ج', major: true, cardinal: true },
  { deg: 195 },
  { deg: 210 },
  { deg: 225, label: 'ج.غ', major: true },
  { deg: 240 },
  { deg: 255 },
  { deg: 270, label: 'غ', major: true, cardinal: true },
  { deg: 285 },
  { deg: 300 },
  { deg: 315, label: 'ش.غ', major: true },
  { deg: 330 },
  { deg: 345 },
];

export class UIManager {
  constructor(settings, audio) {
    this.settings = settings;
    this.audio = audio;

    this.fullscreenGate = document.getElementById('fullscreen-gate');
    this.titleScreen = document.getElementById('title-screen');
    this.hudLayer = document.getElementById('hud-layer');
    this.settingsModal = document.getElementById('settings-modal');
    this.controlsModal = document.getElementById('controls-modal');
    this.discoveryModal = document.getElementById('discovery-modal');
    this.endingScreen = document.getElementById('ending-screen');
    this.portraitWarning = document.getElementById('portrait-warning');

    // v6.0 Compass Ribbon elements
    this.compassViewport = document.getElementById('compass-viewport');
    this.compassTrack = document.getElementById('compass-track');
    this.compassWaypoint = document.getElementById('compass-waypoint');
    this.compassDistEl = document.getElementById('compass-dist');

    // v6.0 RTL Objective & Chapter Card elements
    this.chapterLabelEl = document.getElementById('hud-chapter-label');
    this.objectiveTextEl = document.getElementById('hud-objective-text');
    this.stepPipsEl = document.getElementById('hud-step-pips');
    this.clockEl = document.getElementById('hud-clock');
    this.sunIconEl = document.getElementById('hud-sun-icon');
    this.fpsEl = document.getElementById('hud-fps-counter');

    // Discovery Modal elements
    this.discoveryTagEl = document.getElementById('discovery-tag');
    this.discoveryTitleEl = document.getElementById('discovery-title');
    this.discoveryBodyEl = document.getElementById('discovery-body');
    this._discoveryCallback = null;
    this.isDiscoveryOpen = false;

    // Reticle & Action Cluster
    this.reticleDot = document.getElementById('reticle-dot');
    this.mobileInteractBtn = document.getElementById('btn-mobile-interact');
    this.mobileInteractText = document.getElementById('mobile-interact-text');
    this.flashlightBtn = document.getElementById('btn-flashlight');
    this.restoreFsBtn = document.getElementById('btn-restore-fs');
    this.returnTitleBtn = document.getElementById('btn-return-title');

    this.onStartGame = null;
    this.onInteract = null;
    this.onPauseToggle = null;
    this.onDiscoveryToggle = null;
    this.onReturnToTitle = null;
    this.onFreeRoam = null;
    this.onReplayJourney = null;
    this.onSelectStage = null;

    this._portraitDismissed = false;
    this.isModalOpen = false;
    this.inGameplay = false;
    this._lastCompassX = null;
    this._lastWpX = null;
    this._lastDistText = '';
    this._lastInteractId = null;

    this._buildCompassTrack();
    this._bindButtons();
    this._bindFullscreenMonitor();
    this._syncSettingsUI();
    this._checkOrientation();
    window.addEventListener('resize', () => this._checkOrientation());
  }

  _buildCompassTrack() {
    if (!this.compassTrack) return;
    this.compassTrack.innerHTML = '';
    // Build 3 full 360° cycles (-360° to +720°) so any heading 0..360° slides cleanly with zero wrap jump!
    const frag = document.createDocumentFragment();
    for (let cycle = -1; cycle <= 1; cycle++) {
      for (const tick of COMPASS_TICKS) {
        const deg = tick.deg + cycle * 360;
        const el = document.createElement('span');
        el.className = tick.cardinal
          ? 'c-tick c-cardinal'
          : tick.major
            ? 'c-tick c-inter'
            : 'c-tick c-minor';
        el.style.left = `${(deg + 360) * COMPASS_PX_PER_DEG}px`;
        if (tick.label) {
          el.textContent = tick.label;
        }
        frag.appendChild(el);
      }
    }
    this.compassTrack.appendChild(frag);
    this.compassTrack.style.width = `${1080 * COMPASS_PX_PER_DEG}px`;
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
      // Graceful fallback
    }

    this.fullscreenGate?.classList.remove('active');
    setTimeout(() => this.fullscreenGate?.classList.add('hidden'), 360);
    this.showTitleScreen();
  }

  _bindFullscreenMonitor() {
    const syncFsButton = () => {
      const isFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
      this.restoreFsBtn?.classList.toggle('hidden', isFs);
    };
    document.addEventListener('fullscreenchange', syncFsButton);
    document.addEventListener('webkitfullscreenchange', syncFsButton);
    this.restoreFsBtn?.addEventListener('click', () => this.enterMandatoryFullscreen());
  }

  _bindButtons() {
    document.getElementById('btn-enter-fullscreen')?.addEventListener('click', () => {
      this.enterMandatoryFullscreen();
    });

    document.getElementById('btn-start-game')?.addEventListener('click', () => {
      this.audio.unlock();
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
      this.isModalOpen = this.isDiscoveryOpen;
      this.onPauseToggle?.(false);
    };
    document.getElementById('btn-close-settings')?.addEventListener('click', closeSettings);
    document.getElementById('btn-resume-from-settings')?.addEventListener('click', closeSettings);

    this.returnTitleBtn?.addEventListener('click', () => {
      this.closeDiscoveryModal(false);
      closeSettings();
      this.onReturnToTitle?.();
    });

    // Discovery Modal close button
    document.getElementById('btn-close-discovery')?.addEventListener('click', () => {
      this.closeDiscoveryModal(true);
    });

    // Quick Stage Jump buttons inside Settings & Ending screen
    document.querySelectorAll('[data-jump-stage]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetStage = Number(btn.dataset.jumpStage);
        this.closeDiscoveryModal(false);
        closeSettings();
        this.endingScreen?.classList.add('hidden');
        this.endingScreen?.classList.remove('active');
        this.hideTitleScreen();
        this.showHUD();
        this.onSelectStage?.(targetStage);
      });
    });

    document.getElementById('btn-open-controls')?.addEventListener('click', () => {
      this.controlsModal?.classList.remove('hidden');
      this.isModalOpen = true;
    });
    const closeControls = () => {
      this.controlsModal?.classList.add('hidden');
      this.isModalOpen = this.isDiscoveryOpen;
    };
    document.getElementById('btn-close-controls')?.addEventListener('click', closeControls);
    document.getElementById('btn-ok-controls')?.addEventListener('click', closeControls);

    this.mobileInteractBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.onInteract?.();
    });

    document.getElementById('btn-free-roam')?.addEventListener('click', () => {
      this.endingScreen?.classList.add('hidden');
      this.endingScreen?.classList.remove('active');
      this.showHUD();
      this.onFreeRoam?.();
    });

    document.getElementById('btn-replay-chapter')?.addEventListener('click', () => {
      this.endingScreen?.classList.add('hidden');
      this.endingScreen?.classList.remove('active');
      this.onReplayJourney?.();
    });

    document.getElementById('btn-dismiss-portrait')?.addEventListener('click', () => {
      this._portraitDismissed = true;
      this.portraitWarning?.classList.add('hidden');
    });

    window.addEventListener('keydown', (e) => {
      if (this.isDiscoveryOpen) {
        if (e.code === 'KeyE' || e.code === 'Enter' || e.code === 'Space' || e.code === 'Escape') {
          e.preventDefault();
          this.closeDiscoveryModal(true);
        }
        return;
      }
      if (e.code === 'KeyE' && this.inGameplay && !this.isModalOpen) {
        this.onInteract?.();
      } else if (e.code === 'Escape' && this.inGameplay) {
        if (!this.settingsModal?.classList.contains('hidden')) {
          closeSettings();
        } else if (!this.controlsModal?.classList.contains('hidden')) {
          closeControls();
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
    this.closeDiscoveryModal(false);
    this.hudLayer?.classList.add('hidden');
    this.endingScreen?.classList.add('hidden');
    this.endingScreen?.classList.remove('active');
    this.titleScreen?.classList.remove('hidden');
    requestAnimationFrame(() => this.titleScreen?.classList.add('active'));
  }

  hideTitleScreen() {
    this.titleScreen?.classList.remove('active');
    setTimeout(() => this.titleScreen?.classList.add('hidden'), 400);
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

  openDiscoveryModal(tag, title, body, onClose = null) {
    if (document.pointerLockElement) document.exitPointerLock?.();
    if (this.discoveryTagEl) this.discoveryTagEl.textContent = tag || '';
    if (this.discoveryTitleEl) this.discoveryTitleEl.textContent = title || '';
    if (this.discoveryBodyEl) this.discoveryBodyEl.textContent = body || '';
    this._discoveryCallback = onClose;
    this.isDiscoveryOpen = true;
    this.isModalOpen = true;
    this.discoveryModal?.classList.remove('hidden');
    this.onDiscoveryToggle?.(true);
  }

  closeDiscoveryModal(invokeCallback = true) {
    if (!this.isDiscoveryOpen) return;
    this.isDiscoveryOpen = false;
    this.discoveryModal?.classList.add('hidden');
    this.isModalOpen = !this.settingsModal?.classList.contains('hidden');
    this.onDiscoveryToggle?.(false);
    const cb = this._discoveryCallback;
    this._discoveryCallback = null;
    if (invokeCallback && typeof cb === 'function') {
      cb();
    }
  }

  showEndingScreen() {
    this.inGameplay = false;
    this.closeDiscoveryModal(false);
    this.hideHUD();
    this.endingScreen?.classList.remove('hidden');
    requestAnimationFrame(() => this.endingScreen?.classList.add('active'));
  }

  setFlashlightUI(isOn, isNightStage) {
    if (!this.flashlightBtn) return;
    this.flashlightBtn.classList.toggle('active', Boolean(isOn));
    this.flashlightBtn.classList.toggle('night-emphasis', Boolean(isNightStage));
    this.flashlightBtn.setAttribute('aria-pressed', String(Boolean(isOn)));
  }

  /**
   * Updates the redesigned v6.0 Top-Right Objective Card, Clock/Icon & Chapter Progress Pips
   */
  updateStageHUD({ stageId, chapterLabel, timeLabel, sunIcon, objective, stepIndex, totalSteps }) {
    if (this.chapterLabelEl) this.chapterLabelEl.textContent = chapterLabel || '';
    if (this.objectiveTextEl) this.objectiveTextEl.textContent = objective || '';

    if (this.clockEl) this.clockEl.textContent = timeLabel || '';
    if (this.sunIconEl) {
      this.sunIconEl.textContent = sunIcon || '☀';
      const col =
        stageId === 4 ? '#9ec6ff' : stageId === 3 ? '#ff8b54' : stageId === 2 ? '#ffbe66' : '#ffe38d';
      this.sunIconEl.style.color = col;
    }

    if (this.stepPipsEl && totalSteps > 0) {
      this.stepPipsEl.innerHTML = '';
      for (let i = 0; i < totalSteps; i++) {
        const pip = document.createElement('span');
        pip.className = 'step-pip';
        if (i < stepIndex) pip.classList.add('done');
        else if (i === stepIndex) pip.classList.add('active');
        this.stepPipsEl.appendChild(pip);
      }
    }
  }

  /**
   * Slides the top Architectural Compass Ribbon (GPU translate3d only, zero layout thrash!)
   * and positions the golden Waypoint Diamond + distance indicator.
   */
  updateCompass(playerYaw, relTargetRad, distText) {
    if (this.compassTrack && this.compassViewport) {
      const vw = this.compassViewport.clientWidth || 320;
      const headingDeg = (((-playerYaw * 180) / Math.PI) % 360 + 360) % 360;
      const centerPixel = (headingDeg + 360) * COMPASS_PX_PER_DEG;
      const tx = Math.round((vw * 0.5 - centerPixel) * 2) * 0.5;
      if (tx !== this._lastCompassX) {
        this._lastCompassX = tx;
        this.compassTrack.style.transform = `translate3d(${tx}px, 0, 0)`;
      }
    }

    if (this.compassWaypoint && this.compassViewport) {
      if (relTargetRad !== null && Number.isFinite(relTargetRad)) {
        const vw = this.compassViewport.clientWidth || 320;
        const relDeg = (relTargetRad * 180) / Math.PI;
        const maxOffset = vw * 0.44;
        const rawOffset = relDeg * COMPASS_PX_PER_DEG;
        const clamped = Math.max(-maxOffset, Math.min(maxOffset, rawOffset));
        const px = Math.round(clamped * 2) * 0.5;
        this.compassWaypoint.classList.remove('hidden');
        this.compassWaypoint.classList.toggle('clamped-edge', Math.abs(rawOffset) > maxOffset);
        if (px !== this._lastWpX) {
          this._lastWpX = px;
          this.compassWaypoint.style.transform = `translate3d(${px}px, 0, 0)`;
        }
      } else {
        this.compassWaypoint.classList.add('hidden');
      }
    }

    if (this.compassDistEl) {
      if (distText) {
        if (this._lastDistText !== distText) {
          this._lastDistText = distText;
          this.compassDistEl.textContent = distText;
        }
        this.compassDistEl.classList.remove('hidden');
      } else {
        this.compassDistEl.classList.add('hidden');
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
