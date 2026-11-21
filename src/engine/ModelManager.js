import * as THREE from 'three';

/**
 * Loads pre-processed real Poly Haven CC0 photogrammetry 3D scans
 * from ultra-compact binary buffers (`public/models/<name>.bin` + `manifest.json`)
 * and 512x512 WebP Diffuse/Normal maps.
 */
export class ModelManager {
  constructor() {
    this.manifest = {};
    this.geometries = new Map();
    this.materials = new Map();
    this.loader = new THREE.TextureLoader();
  }

  async preloadAll() {
    try {
      const res = await fetch('./models/manifest.json');
      if (!res.ok) return;
      this.manifest = await res.json();
      const names = Object.keys(this.manifest);
      await Promise.all(names.map((name) => this._loadModel(name, this.manifest[name])));
    } catch (err) {
      console.warn('ModelManager preload warning:', err);
    }
  }

  async _loadModel(name, meta) {
    const [bufRes, diffTex, norTex] = await Promise.all([
      fetch(`./models/${name}.bin`).then((r) => r.arrayBuffer()),
      meta.hasDiff ? this._loadTex(`./models/${name}_diff.webp`, true) : Promise.resolve(null),
      meta.hasNor ? this._loadTex(`./models/${name}_nor.webp`, false) : Promise.resolve(null),
    ]);

    const header = new Uint32Array(bufRes, 0, 2);
    const vcount = header[0];
    const icount = header[1];

    const floatData = new Float32Array(bufRes, 8, vcount * 8);
    const indexData = new Uint16Array(bufRes, 8 + vcount * 32, icount);

    const positions = new Float32Array(vcount * 3);
    const normals = new Float32Array(vcount * 3);
    const uvs = new Float32Array(vcount * 2);

    for (let i = 0; i < vcount; i++) {
      const base = i * 8;
      positions[i * 3] = floatData[base];
      positions[i * 3 + 1] = floatData[base + 1];
      positions[i * 3 + 2] = floatData[base + 2];

      normals[i * 3] = floatData[base + 3];
      normals[i * 3 + 1] = floatData[base + 4];
      normals[i * 3 + 2] = floatData[base + 5];

      uvs[i * 2] = floatData[base + 6];
      uvs[i * 2 + 1] = 1.0 - floatData[base + 7]; // glTF V is top-down; flip for Three.js TextureLoader default flipY=true
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geo.setIndex(new THREE.BufferAttribute(indexData.slice(), 1));
    geo.computeBoundingBox();
    geo.computeBoundingSphere();

    const mat = new THREE.MeshStandardMaterial({
      map: diffTex || null,
      normalMap: norTex || null,
      normalScale: new THREE.Vector2(0.85, 0.85),
      roughness: 0.84,
      metalness: name === 'compass' || name === 'lantern' ? 0.35 : 0.06,
      side: name.startsWith('rock') ? THREE.DoubleSide : THREE.FrontSide,
    });

    this.geometries.set(name, geo);
    this.materials.set(name, mat);
  }

  _loadTex(url, isSrgb) {
    return new Promise((resolve) => {
      this.loader.load(
        url,
        (tex) => {
          tex.colorSpace = isSrgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
          tex.wrapS = THREE.RepeatWrapping;
          tex.wrapT = THREE.RepeatWrapping;
          resolve(tex);
        },
        undefined,
        () => resolve(null)
      );
    });
  }

  getGeometry(name) {
    return this.geometries.get(name) || null;
  }

  getMaterial(name) {
    return this.materials.get(name) || null;
  }

  getMeta(name) {
    return this.manifest[name] || null;
  }

  createMesh(name, scale = 1.0) {
    const geo = this.getGeometry(name);
    const mat = this.getMaterial(name);
    if (!geo || !mat) return null;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.setScalar(scale);
    return mesh;
  }
}
