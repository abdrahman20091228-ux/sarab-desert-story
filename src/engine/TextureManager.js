import * as THREE from 'three';

const IS_MOBILE =
  typeof window !== 'undefined' &&
  (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '') ||
    ('ontouchstart' in window && Math.min(window.innerWidth, window.innerHeight) < 920));

/**
 * Loads and caches our real photographed Poly Haven / ambientCG PBR texture sets
 * in ultra-fast WebP format (automatically using 512x512 tier on mobile GPUs to save 75% VRAM & bandwidth).
 */
export class TextureManager {
  constructor(renderer) {
    this.renderer = renderer;
    this.loader = new THREE.TextureLoader();
    this.sets = new Map();
    this.anisotropy = Math.min(IS_MOBILE ? 4 : 8, renderer.capabilities.getMaxAnisotropy());
  }

  setAnisotropy(val) {
    this.anisotropy = Math.min(val, this.renderer.capabilities.getMaxAnisotropy());
    for (const set of this.sets.values()) {
      for (const tex of Object.values(set)) {
        if (tex && tex.isTexture) {
          tex.anisotropy = this.anisotropy;
          tex.needsUpdate = true;
        }
      }
    }
  }

  loadPBRSet(name, repeatX = 1, repeatY = 1) {
    const cacheKey = `${name}_${repeatX}_${repeatY}`;
    if (this.sets.has(cacheKey)) return this.sets.get(cacheKey);

    const configure = (tex, isSRGB) => {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(repeatX, repeatY);
      tex.anisotropy = this.anisotropy;
      tex.colorSpace = isSRGB ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      return tex;
    };

    const suffix = IS_MOBILE ? '_512.webp' : '.webp';
    const base = `./textures/${name}`;
    const map = configure(this.loader.load(`${base}_albedo${suffix}`), true);
    const normalMap = configure(this.loader.load(`${base}_normal${suffix}`), false);
    const roughnessMap = configure(this.loader.load(`${base}_roughness${suffix}`), false);

    const set = { map, normalMap, roughnessMap };
    this.sets.set(cacheKey, set);
    return set;
  }

  createContactShadowTexture() {
    if (this._shadowTex) return this._shadowTex;
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(size / 2, size / 2, 6, size / 2, size / 2, size / 2);
    grad.addColorStop(0.0, 'rgba(22, 12, 5, 0.56)');
    grad.addColorStop(0.45, 'rgba(28, 16, 7, 0.34)');
    grad.addColorStop(0.78, 'rgba(34, 20, 9, 0.10)');
    grad.addColorStop(1.0, 'rgba(34, 20, 9, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    this._shadowTex = tex;
    return tex;
  }

  createDustParticleTexture() {
    if (this._dustTex) return this._dustTex;
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0.0, 'rgba(255, 244, 222, 0.85)');
    grad.addColorStop(0.35, 'rgba(245, 212, 162, 0.45)');
    grad.addColorStop(0.7, 'rgba(232, 185, 124, 0.12)');
    grad.addColorStop(1.0, 'rgba(232, 185, 124, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    this._dustTex = tex;
    return tex;
  }

  createFootprintTexture() {
    if (this._footTex) return this._footTex;
    const w = 64;
    const h = 128;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);

    const drawOval = (cx, cy, rx, ry, alpha) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(rx, ry);
      const grad = ctx.createRadialGradient(0, 0, 0.1, 0, 0, 1);
      grad.addColorStop(0, `rgba(74, 46, 20, ${alpha})`);
      grad.addColorStop(0.7, `rgba(92, 58, 26, ${alpha * 0.65})`);
      grad.addColorStop(1, 'rgba(92, 58, 26, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, 1, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    drawOval(32, 42, 19, 32, 0.48);
    drawOval(32, 92, 15, 22, 0.45);

    const tex = new THREE.CanvasTexture(canvas);
    this._footTex = tex;
    return tex;
  }
}
