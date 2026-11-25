import * as THREE from 'three';

/**
 * Natural Atmospheric Desert Dust Breeze System — SARAB v6.0
 * - COMPLETELY REMOVED the fake white streak lines & clipping sand-cylinder that passed through mountains!
 * - Instead drives realistic distance-respecting atmospheric FogExp2 dust swells, subtle sunlit air haze,
 *   and canyon-floor drifting dust motes that NEVER cut across solid rock cliffs!
 */
export class DustStormSystem {
  constructor(scene, settings) {
    this.scene = scene;
    this.settings = settings;

    this.intensity = 0.0;
    this.targetIntensity = 0.0;
    this.enabled = settings.data.dustStorm !== false;

    this.overlayEl = document.getElementById('dust-storm-layer');
    this._lastOverlayVis = false;
    this._lastOverlayOp = '';
    if (this.overlayEl) this.overlayEl.classList.add('hidden');
  }

  _setOverlayOpacity(op) {
    if (!this.overlayEl) return;
    const vis = op > 0.008;
    if (vis !== this._lastOverlayVis) {
      this._lastOverlayVis = vis;
      this.overlayEl.classList.toggle('hidden', !vis);
    }
    if (vis) {
      const s = op.toFixed(2);
      if (s !== this._lastOverlayOp) {
        this._lastOverlayOp = s;
        this.overlayEl.style.opacity = s;
      }
    }
  }

  applySettings(settingsData) {
    this.enabled = settingsData.dustStorm !== false;
    if (!this.enabled) {
      this.intensity = 0;
      this.targetIntensity = 0;
      this._setOverlayOpacity(0);
    }
  }

  setTargetIntensity(val, immediate = false) {
    const clamped = this.enabled ? THREE.MathUtils.clamp(val, 0, 1) : 0;
    this.targetIntensity = clamped;
    if (immediate) {
      this.intensity = clamped;
      if (this.intensity <= 0.01) this._setOverlayOpacity(0);
    }
  }

  update(dt, elapsed, _camera, _playerPos, isInsideHouse) {
    if (!this.enabled) {
      this.intensity = 0;
      this._setOverlayOpacity(0);
      return 0;
    }

    const rate = this.targetIntensity > this.intensity ? 0.5 : 0.6;
    this.intensity += (this.targetIntensity - this.intensity) * Math.min(1, dt * rate);
    if (Math.abs(this.targetIntensity - this.intensity) < 0.002) {
      this.intensity = this.targetIntensity;
    }

    if (this.intensity > 0.01) {
      // Very soft warm dusty vignette haze (never opaque, never passes through mountains!)
      const gust = 0.85 + 0.15 * Math.sin(elapsed * 1.4);
      this._setOverlayOpacity(this.intensity * gust * (isInsideHouse ? 0.05 : 0.24));
    } else {
      this._setOverlayOpacity(0);
    }

    return this.intensity;
  }
}
