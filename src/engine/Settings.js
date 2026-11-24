/**
 * Thermal-Aware Graphics, Controls & Audio Settings (v4.1):
 * - Prevents mobile overheating by capping FPS (45 FPS default on mobile, 30 FPS in Battery/Cool Mode),
 *   enabling procedural sky texture caching (-95% sky GPU power), disabling heavy PMREM IBL on matte mobile presets,
 *   and keeping mobile DPR tightly bounded.
 */

const STORAGE_KEY = 'sarab_settings_v41';

export const IS_MOBILE =
  typeof window !== 'undefined' &&
  (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    ('ontouchstart' in window && Math.min(window.innerWidth, window.innerHeight) < 900));

export const QUALITY_PRESETS = {
  low: {
    label: 'منخفض',
    dprCap: 0.85,
    shadowMapSize: 512,
    shadows: false,
    dustCount: 65,
    stormStreaks: 95,
    cloudOctaves: 2,
    useSkyCache: true,
    useIBL: false,
    anisotropy: 1,
    sunFlare: false,
    resolutionScale: 0.85,
    sandSparkle: false,
  },
  medium: {
    label: 'متوسط',
    dprCap: 1.05,
    shadowMapSize: 512,
    shadows: true,
    dustCount: 110,
    stormStreaks: 150,
    cloudOctaves: 3,
    useSkyCache: IS_MOBILE,
    useIBL: !IS_MOBILE,
    anisotropy: 2,
    sunFlare: true,
    resolutionScale: 0.95,
    sandSparkle: false,
  },
  high: {
    label: 'عالي',
    dprCap: 1.35,
    shadowMapSize: IS_MOBILE ? 1024 : 2048,
    shadows: true,
    dustCount: 220,
    stormStreaks: 260,
    cloudOctaves: 4,
    useSkyCache: IS_MOBILE,
    useIBL: true,
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
    dustCount: 300,
    stormStreaks: 300,
    cloudOctaves: 5,
    useSkyCache: false,
    useIBL: true,
    anisotropy: 8,
    sunFlare: true,
    resolutionScale: 1.1,
    sandSparkle: true,
  },
};

export const DEFAULT_SETTINGS = {
  quality: IS_MOBILE ? 'medium' : 'high',
  fpsCap: IS_MOBILE ? 45 : 60,
  batterySaver: false,
  sensitivity: 2.2,
  resolutionScale: IS_MOBILE ? 0.95 : 1.0,
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
    const base = QUALITY_PRESETS[this.data.quality] || QUALITY_PRESETS.medium;
    if (!this.data.batterySaver) return base;
    // Cool / Battery Saver mode cools CPU/GPU via 30 FPS cap, sky cache & shadow/IBL off WITHOUT pixelating resolution!
    return {
      ...base,
      shadows: false,
      shadowMapSize: 512,
      useSkyCache: true,
      useIBL: false,
      cloudOctaves: 2,
      dustCount: Math.min(base.dustCount, 60),
      stormStreaks: Math.min(base.stormStreaks, 90),
      anisotropy: 2,
    };
  }

  getEffectiveFpsCap() {
    if (this.data.batterySaver) return Math.min(30, this.data.fpsCap || 30);
    return this.data.fpsCap || (IS_MOBILE ? 45 : 60);
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
