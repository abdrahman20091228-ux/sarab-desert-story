import * as THREE from 'three';
import { DESERT_PALETTE } from '../engine/Palette.js';

/**
 * 100% GPU-Driven Desert Dust Storm System (v4.0)
 * - Total cost at peak storm: 2 draw calls (0 draw calls when calm!)
 * - ZERO per-frame CPU vertex/instance buffer uploads (no needsUpdate in update loop)
 * - Drives sky extinction, FogExp2 density/color, existing dust Points, CSS overlay, and wind audio.
 */
export class DustStormSystem {
  constructor(scene, settings) {
    this.scene = scene;
    this.settings = settings;

    this.intensity = 0.0;
    this.targetIntensity = 0.0;
    this.enabled = settings.data.dustStorm !== false;
    this.maxStreaks = 300;

    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.overlayEl = document.getElementById('dust-storm-layer');
    this._colorTmp = new THREE.Color();

    this._createSandWall();
    this._createWindStreaks();
    this._setVisible(false);
  }

  _createSandWall() {
    // Open cylinder around camera with two scrolling wind-blown dust curtain layers (1 draw call)
    const geo = new THREE.CylinderGeometry(18.5, 18.5, 24.0, 20, 1, true);
    this.wallUniforms = {
      uTime: { value: 0 },
      uIntensity: { value: 0 },
      uIndoor: { value: 0 },
      uColor: { value: DESERT_PALETTE.horizonStorm.clone() },
      uSimple: { value: 0.0 },
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide,
      fog: false,
      uniforms: this.wallUniforms,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform float uIntensity;
        uniform float uIndoor;
        uniform vec3 uColor;
        uniform float uSimple;
        varying vec2 vUv;

        float hash21(vec2 p) {
          p = fract(p * vec2(127.1, 311.7));
          p += dot(p, p + 34.5);
          return fract(p.x * p.y);
        }

        float vnoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
            mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        void main() {
          // Seamless periodic U around cylinder circumference (scale = integer 6.0)
          float angU = vUv.x * 6.0;
          float yV = vUv.y;

          vec2 uv1 = vec2(angU - uTime * 0.85, yV * 2.4 + sin(angU * 1.05 + uTime * 0.6) * 0.14);
          float n1 = vnoise(uv1);
          float n2 = uSimple > 0.5 ? n1 : vnoise(vec2(angU * 2.0 - uTime * 1.55, yV * 4.5 - uTime * 0.25));
          float gust = n1 * 0.62 + n2 * 0.38;

          // Denser sand wall near the ground, thinning gently overhead
          float verticalMask = smoothstep(0.0, 0.18, yV) * smoothstep(1.0, 0.22, yV);
          float dustBand = smoothstep(0.28, 0.82, gust) * verticalMask;
          float indoorAtten = 1.0 - uIndoor * 0.82;
          float alpha = dustBand * uIntensity * 0.48 * indoorAtten;
          if (alpha < 0.004) discard;

          vec3 col = uColor * (0.86 + gust * 0.34);
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    });

    this.sandWall = new THREE.Mesh(geo, mat);
    this.sandWall.frustumCulled = false;
    this.sandWall.renderOrder = 4;
    this.group.add(this.sandWall);
  }

  _createWindStreaks() {
    // Single GPU InstancedMesh of elongated wind-blown sand streaks (1 draw call, zero CPU updates!)
    const baseGeo = new THREE.PlaneGeometry(1.65, 0.055);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = baseGeo.index;
    geo.attributes.position = baseGeo.attributes.position;
    geo.attributes.uv = baseGeo.attributes.uv;

    const seeds = new Float32Array(this.maxStreaks * 4);
    let s = 9187;
    const rand = () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };

    for (let i = 0; i < this.maxStreaks; i++) {
      seeds[i * 4] = (rand() - 0.5) * 34.0;      // x offset
      seeds[i * 4 + 1] = 0.25 + rand() * 5.2;    // height above player ground
      seeds[i * 4 + 2] = (rand() - 0.5) * 34.0;  // z offset
      seeds[i * 4 + 3] = 0.75 + rand() * 0.9;    // speed & length multiplier
    }
    geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 4));
    geo.instanceCount = this.maxStreaks;

    this.streakUniforms = {
      uTime: { value: 0 },
      uIntensity: { value: 0 },
      uIndoor: { value: 0 },
      uPlayerPos: { value: new THREE.Vector3() },
      uColor: { value: DESERT_PALETTE.horizonStorm.clone() },
    };

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      uniforms: this.streakUniforms,
      vertexShader: /* glsl */ `
        attribute vec4 aSeed;
        uniform float uTime;
        uniform float uIntensity;
        uniform vec3 uPlayerPos;
        varying vec2 vUv;
        varying float vFade;

        void main() {
          vUv = uv;
          float spd = (12.0 + uIntensity * 14.0) * aSeed.w;
          vec3 windDir = normalize(vec3(1.0, -0.05, 0.34));

          // Wrap particle smoothly inside 34m box around player purely on GPU
          vec3 center;
          center.x = mod(aSeed.x + uTime * spd - uPlayerPos.x + 17.0, 34.0) - 17.0 + uPlayerPos.x;
          center.z = mod(aSeed.z + uTime * spd * 0.34 - uPlayerPos.z + 17.0, 34.0) - 17.0 + uPlayerPos.z;
          center.y = uPlayerPos.y - 0.6 + aSeed.y + sin(uTime * 2.6 + aSeed.x) * 0.25;

          // Orient quad lengthwise along wind direction and face camera vertically
          vec3 toCam = normalize(cameraPosition - center);
          vec3 side = normalize(cross(windDir, toCam));
          float lenScale = (0.75 + uIntensity * 0.95) * aSeed.w;
          vec3 worldPos = center + windDir * (position.x * lenScale) + side * position.y;

          float dist = length(cameraPosition - center);
          vFade = smoothstep(1.2, 4.0, dist) * smoothstep(17.5, 11.0, dist);

          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uIntensity;
        uniform float uIndoor;
        uniform vec3 uColor;
        varying vec2 vUv;
        varying float vFade;

        void main() {
          float along = sin(vUv.x * 3.14159265);
          float across = sin(vUv.y * 3.14159265);
          float alpha = along * across * across * vFade * uIntensity * 0.52 * (1.0 - uIndoor * 0.85);
          if (alpha < 0.01) discard;
          vec3 col = uColor * 1.18;
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
    });

    this.streakMesh = new THREE.Mesh(geo, mat);
    this.streakMesh.frustumCulled = false;
    this.streakMesh.renderOrder = 5;
    this.group.add(this.streakMesh);
  }

  _setVisible(vis) {
    this.sandWall.visible = vis;
    this.streakMesh.visible = vis;
  }

  applySettings(settingsData, preset) {
    this.enabled = settingsData.dustStorm !== false;
    const count = preset.stormStreaks ?? 240;
    this.streakMesh.geometry.instanceCount = Math.min(this.maxStreaks, count);
    this.wallUniforms.uSimple.value = settingsData.quality === 'low' ? 1.0 : 0.0;
    if (!this.enabled) {
      this.intensity = 0;
      this.targetIntensity = 0;
      this._setVisible(false);
      if (this.overlayEl) this.overlayEl.style.opacity = '0';
    }
  }

  setTargetIntensity(val, immediate = false) {
    const clamped = this.enabled ? THREE.MathUtils.clamp(val, 0, 1) : 0;
    this.targetIntensity = clamped;
    if (immediate) {
      this.intensity = clamped;
      this._setVisible(this.intensity > 0.01);
    }
  }

  update(dt, elapsed, camera, playerPos, isInsideHouse, timeOfDay) {
    if (!this.enabled) {
      this.intensity = 0;
      this._setVisible(false);
      if (this.overlayEl) this.overlayEl.style.opacity = '0';
      return 0;
    }

    // Smooth organic storm buildup and calming
    const rate = this.targetIntensity > this.intensity ? 0.45 : 0.55;
    this.intensity += (this.targetIntensity - this.intensity) * Math.min(1, dt * rate);
    if (Math.abs(this.targetIntensity - this.intensity) < 0.002) {
      this.intensity = this.targetIntensity;
    }

    const active = this.intensity > 0.01;
    this._setVisible(active);

    const indoorVal = isInsideHouse ? 1.0 : 0.0;

    if (active) {
      this.sandWall.position.set(camera.position.x, camera.position.y + 1.5, camera.position.z);

      this._colorTmp.copy(DESERT_PALETTE.horizonStorm).lerp(
        DESERT_PALETTE.horizonAsr,
        THREE.MathUtils.clamp(timeOfDay * 0.35, 0, 0.35)
      );

      this.wallUniforms.uTime.value = elapsed;
      this.wallUniforms.uIntensity.value = this.intensity;
      this.wallUniforms.uIndoor.value += (indoorVal - this.wallUniforms.uIndoor.value) * Math.min(1, dt * 5);
      this.wallUniforms.uColor.value.copy(this._colorTmp);

      this.streakUniforms.uTime.value = elapsed;
      this.streakUniforms.uIntensity.value = this.intensity;
      this.streakUniforms.uIndoor.value = this.wallUniforms.uIndoor.value;
      this.streakUniforms.uPlayerPos.value.copy(playerPos);
      this.streakUniforms.uColor.value.copy(this._colorTmp);

      if (this.overlayEl) {
        const gust = 0.88 + 0.12 * Math.sin(elapsed * 2.3) * Math.cos(elapsed * 1.1);
        const op = this.intensity * gust * (isInsideHouse ? 0.16 : 0.55);
        this.overlayEl.style.opacity = op.toFixed(3);
      }
    } else if (this.overlayEl) {
      this.overlayEl.style.opacity = '0';
    }

    return this.intensity;
  }
}
