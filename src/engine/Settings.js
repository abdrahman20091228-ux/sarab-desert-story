/**
 * Graphics, Controls & Audio settings with presets optimized for mobile + desktop 60FPS.
 */

const STORAGE_KEY = 'sarab_settings_v1';

export const QUALITY_PRESETS = {
  low: {
    label: 'منخفض',
    dprCap: 0.85,
    shadowMapSize: 512,
    shadows: false,
    dustCount: 160,
    anisotropy: 2,
    fogFar: 260,
    sunFlare: true,
    resolutionScale: 0.75,
  },
  medium: {
    label: 'متوسط',
    dprCap: 1.15,
    shadowMapSize: 1024,
    shadows: true,
    dustCount: 340,
    anisotropy: 4,
    fogFar: 340,
    sunFlare: true,
    resolutionScale: 0.9,
  },
  high: {
    label: 'عالي',
    dprCap: 1.5,
    shadowMapSize: 2048,
    shadows: true,
    dustCount: 560,
    anisotropy: 8,
    fogFar: 440,
    sunFlare: true,
    resolutionScale: 1.0,
  },
  ultra: {
    label: 'فائق',
    dprCap: 2.0,
    shadowMapSize: 2048,
    shadows: true,
    dustCount: 850,
    anisotropy: 16,
    fogFar: 520,
    sunFlare: true,
    resolutionScale: 1.15,
  },
};

export const DEFAULT_SETTINGS = {
  quality: 'high',
  sensitivity: 2.1, // High touch sensitivity by default
  resolutionScale: 1.0,
  fov: 70,
  volume: 0.85,
  shadows: true,
  sunFlare: true,
  showFps: true,
};

export class SettingsManager {
  constructor() {
    this.data = { ...DEFAULT_SETTINGS };
    this.listeners = new Set();
    this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.data = { ...DEFAULT_SETTINGS, ...parsed };
      }
    } catch {
      // Ignore storage errors in sandboxed/private browsers
    }
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch {
      // Ignore storage errors
    }
  }

  getPreset() {
    return QUALITY_PRESETS[this.data.quality] || QUALITY_PRESETS.high;
  }

  applyQualityPreset(quality) {
    const preset = QUALITY_PRESETS[quality];
    if (!preset) return;
    this.data.quality = quality;
    this.data.shadows = preset.shadows;
    this.data.sunFlare = preset.sunFlare;
    this.data.resolutionScale = preset.resolutionScale;
    this.save();
    this.emit();
  }

  set(key, value) {
    this.data[key] = value;
    this.save();
    this.emit();
  }

  onChange(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  emit() {
    for (const fn of this.listeners) {
      fn(this.data, this.getPreset());
    }
  }
}
