import * as THREE from 'three';

const IS_MOBILE =
  typeof window !== 'undefined' &&
  (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '') ||
    ('ontouchstart' in window && Math.min(window.innerWidth, window.innerHeight) < 920));

/**
 * Loads and caches PBR texture sets + high-craft procedural botanical & decal textures (v6.0):
 * - Uses full 1024x1024 WebP on Ultra/High and 512x512 on Low/Medium mobile
 * - Procedural photorealistic pinnate Arabian date-palm frond texture (feathered leaflets!)
 * - Procedural fibrous ringed palm bark texture
 */
export class TextureManager {
  constructor(renderer) {
    this.renderer = renderer;
    this.loader = new THREE.TextureLoader();
    this.sets = new Map();
    this.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
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

    // Keep full sharp 1024x1024 WebP textures so desert sand & canyon rock stay crystal clear!
    const suffix = '.webp';
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
    grad.addColorStop(0.0, 'rgba(28, 18, 10, 0.44)');
    grad.addColorStop(0.42, 'rgba(34, 22, 12, 0.24)');
    grad.addColorStop(0.75, 'rgba(38, 26, 14, 0.06)');
    grad.addColorStop(1.0, 'rgba(38, 26, 14, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    this._shadowTex = tex;
    return tex;
  }

  /**
   * Photorealistic pinnate Arabian date palm frond texture (central woody rachis + 42 pairs of feathered leaflets!)
   * Eliminates the old "spiky flat green triangle" palm tree look completely!
   */
  createPalmFrondTexture() {
    if (this._palmFrondTex) return this._palmFrondTex;
    const w = 256;
    const h = 512;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);

    const cx = w * 0.5;

    // 1. Central woody palm spine (rachis) tapering from base (y=h) to tip (y=12)
    for (let y = h - 6; y >= 14; y -= 2) {
      const t = 1.0 - y / h;
      const spineW = 7.5 * (1.0 - t * 0.78);
      const r = Math.round(118 + t * 24);
      const g = Math.round(108 + t * 26);
      const b = Math.round(64 + t * 14);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(cx - spineW * 0.5, y, spineW, 3);
    }

    // 2. 44 pairs of individual slender sun-dappled desert palm leaflets radiating gracefully from spine
    let seed = 7717;
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

    const pairs = 44;
    for (let i = 0; i < pairs; i++) {
      const t = 0.06 + (i / (pairs - 1)) * 0.90; // 0.06 at base -> 0.96 near tip
      const yBase = h * (1.0 - t);
      // Leaflets longest in the middle of the frond, tapering at base and tip
      const envelope = Math.sin(Math.pow(t, 0.85) * Math.PI);
      const maxLen = (w * 0.47) * (0.28 + 0.72 * envelope);

      for (const side of [-1, 1]) {
        const jitter = (rand() - 0.5) * 0.16;
        const len = maxLen * (0.86 + rand() * 0.22);
        // Swept slightly upward toward frond tip and gently drooping at outer end
        const endX = cx + side * len;
        const endY = yBase - len * (0.34 + t * 0.35) + jitter * 18;
        const ctrlX = cx + side * len * 0.55;
        const ctrlY = yBase - len * (0.32 + t * 0.22) - 4;

        // Natural sunlit desert olive-sage green with subtle warm dry tips
        const sunVar = rand();
        const rBase = Math.round(86 + sunVar * 34 + (t > 0.78 ? 18 : 0));
        const gBase = Math.round(104 + sunVar * 36);
        const bBase = Math.round(54 + sunVar * 20);

        const grad = ctx.createLinearGradient(cx, yBase, endX, endY);
        grad.addColorStop(0.0, `rgb(${Math.round(rBase * 0.84)}, ${Math.round(gBase * 0.88)}, ${Math.round(bBase * 0.82)})`);
        grad.addColorStop(0.65, `rgb(${rBase}, ${gBase}, ${bBase})`);
        grad.addColorStop(1.0, `rgb(${Math.min(220, rBase + 28)}, ${Math.min(210, gBase + 16)}, ${Math.min(140, bBase + 10)})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 4.4 * (0.55 + 0.45 * envelope);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx + side * 2, yBase);
        ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
        ctx.stroke();

        // Crisp midrib highlight line along leaflet
        ctx.strokeStyle = `rgba(175, 185, 118, 0.32)`;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(cx + side * 2, yBase);
        ctx.quadraticCurveTo(ctrlX, ctrlY - 0.8, endX, endY);
        ctx.stroke();
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = this.anisotropy;
    this._palmFrondTex = tex;
    return tex;
  }

  /**
   * Weathered ringed Arabian date-palm trunk bark texture (warm tan-gray diamond leaf scars, NOT dark black!)
   */
  createPalmBarkTexture() {
    if (this._palmBarkTex) return this._palmBarkTex;
    const w = 256;
    const h = 512;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#9c866b';
    ctx.fillRect(0, 0, w, h);

    // Fibrous horizontal leaf-base scars typical of date palms
    const rows = 26;
    const rowH = h / rows;
    for (let r = 0; r < rows; r++) {
      const y = r * rowH;
      const offset = (r % 2) * 32;
      // Dark crevice between bark rings
      ctx.fillStyle = 'rgba(62, 48, 34, 0.58)';
      ctx.fillRect(0, y, w, 3.5);
      // Warm sunlit dry husk ridge
      ctx.fillStyle = 'rgba(186, 162, 132, 0.45)';
      ctx.fillRect(0, y + 3.5, w, 4.5);

      for (let x = -32; x < w + 32; x += 64) {
        ctx.strokeStyle = 'rgba(72, 56, 40, 0.45)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + offset, y + rowH);
        ctx.lineTo(x + offset + 32, y + 4);
        ctx.lineTo(x + offset + 64, y + rowH);
        ctx.stroke();
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 3);
    tex.anisotropy = this.anisotropy;
    this._palmBarkTex = tex;
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
    grad.addColorStop(0.0, 'rgba(255, 246, 228, 0.78)');
    grad.addColorStop(0.38, 'rgba(244, 214, 168, 0.36)');
    grad.addColorStop(0.72, 'rgba(232, 188, 130, 0.08)');
    grad.addColorStop(1.0, 'rgba(232, 188, 130, 0.0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    this._dustTex = tex;
    return tex;
  }
}
