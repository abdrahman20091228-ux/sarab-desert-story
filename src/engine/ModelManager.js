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
      normalScale: new THREE.Vector2(name.startsWith('rock') ? 0.78 : 0.72, name.startsWith('rock') ? 0.78 : 0.72),
      roughness: name === 'compass' || name === 'lantern' ? 0.58 : 0.88,
      metalness: name === 'compass' || name === 'lantern' ? 0.42 : 0.04,
      side: name.startsWith('rock') ? THREE.DoubleSide : THREE.FrontSide,
    });
    mat.name = `scan_${name}`;

    // Re-tint the blue/white painted table & chair photogrammetry scans into sun-bleached weathered desert wood
    // (preserves real wood grain luminance & normal detail while removing the bright blue/white paint!)
    if (name === 'table' || name === 'chair') {
      mat.onBeforeCompile = (shader) => {
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <map_fragment>',
          `#include <map_fragment>
           float _woodLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           float _grain = clamp(_woodLuma * 1.15, 0.16, 0.96);
           vec3 _desertCedar = vec3(0.32, 0.21, 0.11);
           vec3 _bleachedHighlight = vec3(0.54, 0.40, 0.25);
           diffuseColor.rgb = mix(_desertCedar, _bleachedHighlight, smoothstep(0.25, 0.88, _grain)) * (0.68 + _grain * 0.52);`
        );
      };
      mat.customProgramCacheKey = () => `scan_wood_retint_${name}`;
    } else if (name.startsWith('rock')) {
      // Gently warm & dust-coat rock scans so they blend naturally with Arabian desert sand
      mat.color.set('#d8c4a6');
    }

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
