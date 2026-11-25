import * as THREE from 'three';

/**
 * Zero-Stutter Handheld Desert Flashlight — SARAB v6.0
 * - CRITICAL FIX: `spotLight.visible` and `spillLight.visible` remain ALWAYS TRUE!
 *   Toggling changes ONLY `intensity` (0 <-> peak) so Three.js NEVER recompiles shaders
 *   on toggle -> 0.0ms instant response, ZERO 1-second freeze on mobile!
 */
export class FlashlightSystem {
  constructor(scene, camera, audio) {
    this.scene = scene;
    this.camera = camera;
    this.audio = audio;

    this.enabled = false;
    this.nightStrength = 1.0;

    // ALWAYS visible = true so shader program light count NEVER changes on toggle!
    this.spotLight = new THREE.SpotLight(0xfff2d8, 0.0, 74.0, Math.PI * 0.24, 0.56, 1.32);
    this.spotLight.castShadow = false;
    this.spotLight.visible = true;
    this.scene.add(this.spotLight);
    this.scene.add(this.spotLight.target);

    this.spillLight = new THREE.PointLight(0xffe8c4, 0.0, 10.5, 1.75);
    this.spillLight.visible = true;
    this.scene.add(this.spillLight);

    // Subtle additive volumetric beam cone (visible only when flashlight ON at dusk/night)
    const coneLen = 13.0;
    const coneGeo = new THREE.CylinderGeometry(0.07, 2.9, coneLen, 14, 1, true);
    coneGeo.translate(0, -coneLen * 0.5, 0);
    coneGeo.rotateX(Math.PI / 2);

    this.coneUniforms = {
      uColor: { value: new THREE.Color('#ffebc8') },
      uOpacity: { value: 0.0 },
    };
    const coneMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      uniforms: this.coneUniforms,
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        varying vec3 vNormalV;
        varying vec3 vViewDir;
        void main() {
          vUv = uv;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vNormalV = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec3 vNormalV;
        varying vec3 vViewDir;
        void main() {
          float fresnel = pow(abs(dot(normalize(vNormalV), normalize(vViewDir))), 2.0);
          float lengthFade = smoothstep(0.0, 0.55, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
          float alpha = fresnel * lengthFade * uOpacity;
          if (alpha < 0.003) discard;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
    });

    this.beamMesh = new THREE.Mesh(coneGeo, coneMat);
    this.beamMesh.frustumCulled = false;
    this.beamMesh.visible = true;
    this.beamMesh.scale.setScalar(0.0001);
    this.beamMesh.renderOrder = 7;
    this.scene.add(this.beamMesh);

    this._camDir = new THREE.Vector3();
    this._camRight = new THREE.Vector3();
    this._camUp = new THREE.Vector3();
    this._smoothDir = new THREE.Vector3(0, 0, -1);
    this._targetPos = new THREE.Vector3();
    this._onToggleCallbacks = new Set();
  }

  onToggle(fn) {
    this._onToggleCallbacks.add(fn);
  }

  setStageContext(stageId) {
    this.nightStrength = stageId === 4 ? 1.0 : stageId === 3 ? 0.52 : 0.24;
    this._syncLightPower();
  }

  setEnabled(on, playSound = true) {
    const next = Boolean(on);
    if (this.enabled === next) {
      this._syncLightPower();
      return;
    }
    this.enabled = next;
    if (playSound) {
      this.audio?.unlock();
      this.audio?.playFlashlightClick(this.enabled);
    }
    this._syncLightPower();
    for (const cb of this._onToggleCallbacks) cb(this.enabled);
  }

  toggle() {
    this.setEnabled(!this.enabled, true);
  }

  _syncLightPower() {
    // NEVER flip light.visible OR beamMesh.visible! Modulate intensity & scale only -> ZERO shader recompile stutter even on 1st click!
    const active = this.enabled;
    const showBeam = active && this.nightStrength > 0.4;
    this.beamMesh.scale.setScalar(showBeam ? 1.0 : 0.0001);

    if (active) {
      this.spotLight.intensity = 28.0 * this.nightStrength;
      this.spillLight.intensity = 2.1 * this.nightStrength;
      this.coneUniforms.uOpacity.value = showBeam ? 0.095 * this.nightStrength : 0.0;
    } else {
      this.spotLight.intensity = 0.0;
      this.spillLight.intensity = 0.0;
      this.coneUniforms.uOpacity.value = 0.0;
    }
  }

  update(dt, elapsed, snap = false) {
    if (!this.enabled) return;

    this.camera.getWorldDirection(this._camDir);
    this._camRight.set(1, 0, 0).applyQuaternion(this.camera.quaternion);
    this._camUp.set(0, 1, 0).applyQuaternion(this.camera.quaternion);

    if (snap) {
      this._smoothDir.copy(this._camDir);
    } else {
      this._smoothDir.lerp(this._camDir, Math.min(1, dt * 16.0)).normalize();
    }

    const swayX = Math.sin(elapsed * 2.0) * 0.012;
    const swayY = Math.cos(elapsed * 1.6) * 0.010;

    this.spotLight.position
      .copy(this.camera.position)
      .addScaledVector(this._camRight, 0.24 + swayX)
      .addScaledVector(this._camUp, -0.20 + swayY)
      .addScaledVector(this._smoothDir, 0.14);

    this._targetPos.copy(this.spotLight.position).addScaledVector(this._smoothDir, 12.0);
    this.spotLight.target.position.copy(this._targetPos);
    this.spotLight.target.updateMatrixWorld();

    this.spillLight.position.copy(this.spotLight.position).addScaledVector(this._smoothDir, 0.9);

    if (this.beamMesh.visible) {
      this.beamMesh.position.copy(this.spotLight.position);
      this.beamMesh.lookAt(this._targetPos);
    }
  }
}
