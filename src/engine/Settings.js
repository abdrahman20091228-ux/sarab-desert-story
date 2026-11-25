/**
 * High-Fidelity Smooth-60FPS Graphics, Controls & Audio Settings — SARAB v6.0
 * - Default Quality: 'ultra' (فائق)
 * - Default Sensitivity: 2.8x
 * - Default Resolution Scale: 1.4 (أقصى دقة متوفرة — 140% clamped cleanly to native DPR for crisp visuals + 60FPS!)
 * - Zero runtime shader recompilation & zero shadow hitching during movement!
 */

const STORAGE_KEY = 'sarab_settings_v60';

export const IS_MOBILE =
  typeof window !== 'undefined' &&
  (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    ('ontouchstart' in window && Math.min(window.innerWidth, window.innerHeight) < 900));

export const QUALITY_PRESETS = {
  low: {
    label: 'منخفض',
    dprCap: 1.0,
    shadowMapSize: 512,
    shadows: false,
    dustCount: 70,
    cloudOctaves: 2,
    useSkyCache: true,
    useIBL: false,
    anisotropy: 2,
    sunFlare: false,
    resolutionScale: 0.9,
  },
  medium: {
    label: 'متوسط',
    dprCap: 1.25,
    shadowMapSize: 1024,
    shadows: !IS_MOBILE,
    dustCount: 120,
    cloudOctaves: 3,
    useSkyCache: IS_MOBILE,
    useIBL: false,
    anisotropy: 4,
    sunFlare: true,
    resolutionScale: 1.0,
  },
  high: {
    label: 'عالي',
    dprCap: 1.65,
    shadowMapSize: IS_MOBILE ? 1024 : 2048,
    shadows: true,
    dustCount: 190,
    cloudOctaves: 4,
    useSkyCache: false,
    useIBL: true,
    anisotropy: 6,
    sunFlare: true,
    resolutionScale: 1.2,
  },
  ultra: {
    label: 'فائق',
    dprCap: 2.0,
    shadowMapSize: IS_MOBILE ? 1024 : 2048,
    shadows: true,
    dustCount: 240,
    cloudOctaves: 5,
    useSkyCache: false,
    useIBL: true,
    anisotropy: 8,
    sunFlare: true,
    resolutionScale: 1.4,
  },
};

export const DEFAULT_SETTINGS = {
  quality: 'ultra',
  fpsCap: 60,
  batterySaver: false,
  sensitivity: 2.8,
  resolutionScale: 1.4,
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
    const base = QUALITY_PRESETS[this.data.quality] || QUALITY_PRESETS.ultra;
    if (!this.data.batterySaver) return base;
    return {
      ...base,
      shadows: false,
      shadowMapSize: 512,
      useSkyCache: true,
      useIBL: false,
      cloudOctaves: 2,
      dustCount: Math.min(base.dustCount, 65),
      anisotropy: 2,
    };
  }

  getEffectiveFpsCap() {
    if (this.data.batterySaver) return Math.min(30, this.data.fpsCap || 30);
    return this.data.fpsCap || 60;
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
