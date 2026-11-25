/**
 * Thermal-Aware Graphics, Controls & Audio Settings (v5.0):
 * - Baked Lighting & Contact AO provides rich grounded shading on mobile WITHOUT needing
 *   real-time shadow-map redraws or lowering display resolution!
 * - True FPS pacer (45 FPS mobile default, 30 FPS Cool Mode) + mobile sky cache (-95% sky GPU power).
 */

const STORAGE_KEY = 'sarab_settings_v50';

export const IS_MOBILE =
  typeof window !== 'undefined' &&
  (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    ('ontouchstart' in window && Math.min(window.innerWidth, window.innerHeight) < 900));

export const QUALITY_PRESETS = {
  low: {
    label: 'منخفض',
    dprCap: 0.95,
    shadowMapSize: 512,
    shadows: false,
    dustCount: 70,
    stormStreaks: 90,
    cloudOctaves: 2,
    useSkyCache: true,
    useIBL: false,
    anisotropy: 2,
    sunFlare: false,
    resolutionScale: 0.9,
  },
  medium: {
    label: 'متوسط',
    dprCap: 1.15,
    shadowMapSize: 512,
    shadows: !IS_MOBILE, // Mobile uses Baked Lighting & Contact AO for ultra-cool battery + full sharp resolution!
    dustCount: 120,
    stormStreaks: 150,
    cloudOctaves: 3,
    useSkyCache: IS_MOBILE,
    useIBL: !IS_MOBILE,
    anisotropy: 2,
    sunFlare: true,
    resolutionScale: 1.0,
  },
  high: {
    label: 'عالي',
    dprCap: 1.4,
    shadowMapSize: IS_MOBILE ? 1024 : 2048,
    shadows: true,
    dustCount: 220,
    stormStreaks: 240,
    cloudOctaves: 4,
    useSkyCache: IS_MOBILE,
    useIBL: true,
    anisotropy: 4,
    sunFlare: true,
    resolutionScale: 1.0,
  },
  ultra: {
    label: 'فائق',
    dprCap: 1.75,
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
  },
};

export const DEFAULT_SETTINGS = {
  quality: IS_MOBILE ? 'medium' : 'high',
  fpsCap: IS_MOBILE ? 45 : 60,
  batterySaver: false,
  sensitivity: 2.2,
  resolutionScale: 1.0, // Keep full crisp display resolution even on mobile!
  fov: 72,
  volume: 0.85,
  shadows: !IS_MOBILE,
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
    // Cool / Battery Saver relies on Baked Lighting & Contact AO + 30 FPS cap + Sky Cache WITHOUT lowering resolution!
    return {
      ...base,
      shadows: false,
      shadowMapSize: 512,
      useSkyCache: true,
      useIBL: false,
      cloudOctaves: 2,
      dustCount: Math.min(base.dustCount, 60),
      stormStreaks: Math.min(base.stormStreaks, 85),
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
