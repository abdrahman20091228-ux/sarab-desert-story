/**
 * Graphics, Controls & Audio settings tuned for locked 60FPS on both mobile & desktop (v4.0).
 * Automatically detects touch/mobile devices to pick a high-FPS default preset!
 */

const STORAGE_KEY = 'sarab_settings_v4';

export const IS_MOBILE =
  typeof window !== 'undefined' &&
  (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    ('ontouchstart' in window && Math.min(window.innerWidth, window.innerHeight) < 900));

export const QUALITY_PRESETS = {
  low: {
    label: 'منخفض',
    dprCap: 0.8,
    shadowMapSize: 512,
    shadows: false,
    dustCount: 90,
    stormStreaks: 120,
    cloudOctaves: 2,
    anisotropy: 1,
    sunFlare: true,
    resolutionScale: 0.78,
    sandSparkle: false,
  },
  medium: {
    label: 'متوسط',
    dprCap: 1.05,
    shadowMapSize: 1024,
    shadows: true,
    dustCount: 160,
    stormStreaks: 200,
    cloudOctaves: 3,
    anisotropy: 2,
    sunFlare: true,
    resolutionScale: 0.9,
    sandSparkle: false,
  },
  high: {
    label: 'عالي',
    dprCap: 1.35,
    shadowMapSize: 2048,
    shadows: true,
    dustCount: 240,
    stormStreaks: 280,
    cloudOctaves: 4,
    anisotropy: 4,
    sunFlare: true,
    resolutionScale: 1.0,
    sandSparkle: true,
  },
  ultra: {
    label: 'فائق',
    dprCap: 1.7,
    shadowMapSize: 2048,
    shadows: true,
    dustCount: 320,
    stormStreaks: 300,
    cloudOctaves: 5,
    anisotropy: 8,
    sunFlare: true,
    resolutionScale: 1.1,
    sandSparkle: true,
  },
};

export const DEFAULT_SETTINGS = {
  quality: IS_MOBILE ? 'medium' : 'high',
  sensitivity: 2.2,
  resolutionScale: IS_MOBILE ? 0.9 : 1.0,
  fov: 72,
  volume: 0.85,
  shadows: true,
  sunFlare: true,
  dustStorm: true,
  showFps: false,
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
      // Ignore storage errors
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
    return QUALITY_PRESETS[this.data.quality] || QUALITY_PRESETS.medium;
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
