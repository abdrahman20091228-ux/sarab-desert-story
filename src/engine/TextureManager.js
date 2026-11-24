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
    const grad = ctx.createRadialGradient(size / 2, size / 2, 4, size / 2, size / 2, size / 2);
    grad.addColorStop(0.0, 'rgba(32, 20, 10, 0.42)');
    grad.addColorStop(0.38, 'rgba(38, 24, 12, 0.24)');
    grad.addColorStop(0.72, 'rgba(42, 28, 14, 0.06)');
    grad.addColorStop(1.0, 'rgba(42, 28, 14, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    this._shadowTex = tex;
    return tex;
  }

  createTwigClusterTexture() {
    if (this._twigTex) return this._twigTex;
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, size, size);

    const cx = size * 0.5;
    const cy = size * 0.5;
    let seed = 31337;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    // Draw dense organic intertwined dry desert brambles filling the entire circular volume (zero center hole!)
    for (let i = 0; i < 210; i++) {
      const a1 = rand() * Math.PI * 2;
      const r1 = Math.pow(rand(), 0.75) * 0.44 * size;
      const a2 = a1 + (rand() - 0.5) * 2.8 + (r1 < size * 0.14 ? Math.PI : 0);
      const r2 = (0.04 + Math.pow(rand(), 0.65) * 0.42) * size;
      const x1 = cx + Math.cos(a1) * r1;
      const y1 = cy + Math.sin(a1) * r1;
      const x2 = cx + Math.cos(a2) * r2;
      const y2 = cy + Math.sin(a2) * r2;
      const mx = (x1 + x2) * 0.5 + (rand() - 0.5) * 28;
      const my = (y1 + y2) * 0.5 + (rand() - 0.5) * 28;

      const shade = Math.round(132 + rand() * 68);
      ctx.strokeStyle = `rgb(${shade}, ${Math.round(shade * 0.84)}, ${Math.round(shade * 0.58)})`;
      ctx.lineWidth = 1.4 + rand() * 2.0;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(mx, my, x2, y2);
      ctx.stroke();

      if (rand() > 0.4) {
        const bx = mx + (rand() - 0.5) * 16;
        const by = my + (rand() - 0.5) * 16;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(mx, my);
        ctx.lineTo(bx, by);
        ctx.stroke();
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    this._twigTex = tex;
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
