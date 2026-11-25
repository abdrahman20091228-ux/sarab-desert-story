import * as THREE from 'three';

/**
 * Handheld Desert Flashlight System — SARAB v5.0 (Night Stage 4 + Manual Toggle)
 * - Realistic SpotLight cone with soft penumbra + subtle close-range bounce fill
 * - Lightweight 1-draw-call additive fresnel volumetric beam cone (visible in night desert air!)
 * - Subtle organic hand-sway lag following the first-person camera
 * - Toggleable via on-screen HUD button (#btn-flashlight) and keyboard `F` key with tactile click SFX
 */
export class FlashlightSystem {
  constructor(scene, camera, audio) {
    this.scene = scene;
    this.camera = camera;
    this.audio = audio;

    this.enabled = false;
    this.nightStrength = 1.0;

    // Main handheld LED spotlight
    this.spotLight = new THREE.SpotLight(0xfff1d6, 0.0, 62.0, Math.PI * 0.21, 0.56, 1.35);
    this.spotLight.castShadow = false; // Zero shadow-map overhead -> keeps mobile phones cool!
    this.spotLight.visible = false;
    this.scene.add(this.spotLight);
    this.scene.add(this.spotLight.target);

    // Subtle soft close spill light so the ground right at player's feet and room corners read naturally
    this.spillLight = new THREE.PointLight(0xffe6bd, 0.0, 9.5, 1.8);
    this.spillLight.visible = false;
    this.scene.add(this.spillLight);

    // Ultra-lightweight volumetric beam cone (1 draw call, additive fresnel fade)
    const coneLen = 14.0;
    const coneGeo = new THREE.CylinderGeometry(0.08, 3.1, coneLen, 16, 1, true);
    coneGeo.translate(0, -coneLen * 0.5, 0);
    coneGeo.rotateX(Math.PI / 2);

    this.coneUniforms = {
      uColor: { value: new THREE.Color('#ffe9c2') },
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
          float fresnel = pow(abs(dot(normalize(vNormalV), normalize(vViewDir))), 1.9);
          // Fade softly near handheld emitter (vUv.y -> 1) and far end (vUv.y -> 0)
          float lengthFade = smoothstep(0.0, 0.55, vUv.y) * smoothstep(1.0, 0.86, vUv.y);
          float alpha = fresnel * lengthFade * uOpacity;
          if (alpha < 0.003) discard;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
    });

    this.beamMesh = new THREE.Mesh(coneGeo, coneMat);
    this.beamMesh.frustumCulled = false;
    this.beamMesh.visible = false;
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
    // Full beam brilliance at Night (Stage 4), subtle warm beam at Sunset (Stage 3), mild during Day
    this.nightStrength = stageId === 4 ? 1.0 : stageId === 3 ? 0.55 : 0.25;
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
    const active = this.enabled;
    this.spotLight.visible = active;
    this.spillLight.visible = active;
    this.beamMesh.visible = active && this.nightStrength > 0.4;

    if (active) {
      this.spotLight.intensity = 28.0 * this.nightStrength;
      this.spotLight.distance = 72.0;
      this.spotLight.angle = Math.PI * 0.24;
      this.spillLight.intensity = 2.1 * this.nightStrength;
      this.coneUniforms.uOpacity.value = 0.11 * this.nightStrength;
    } else {
      this.spotLight.intensity = 0;
      this.spillLight.intensity = 0;
      this.coneUniforms.uOpacity.value = 0;
    }
  }

  update(dt, elapsed, snap = false) {
    if (!this.enabled) return;

    this.camera.getWorldDirection(this._camDir);
    this._camRight.set(1, 0, 0).applyQuaternion(this.camera.quaternion);
    this._camUp.set(0, 1, 0).applyQuaternion(this.camera.quaternion);

    // Smooth natural handheld lag
    if (snap) {
      this._smoothDir.copy(this._camDir);
    } else {
      this._smoothDir.lerp(this._camDir, Math.min(1, dt * 15.0)).normalize();
    }

    const swayX = Math.sin(elapsed * 2.1) * 0.014;
    const swayY = Math.cos(elapsed * 1.7) * 0.012;

    // Held slightly right & below eye height (natural right-hand torch hold)
    this.spotLight.position
      .copy(this.camera.position)
      .addScaledVector(this._camRight, 0.24 + swayX)
      .addScaledVector(this._camUp, -0.22 + swayY)
      .addScaledVector(this._smoothDir, 0.14);

    this._targetPos.copy(this.spotLight.position).addScaledVector(this._smoothDir, 12.0);
    this.spotLight.target.position.copy(this._targetPos);
    this.spotLight.target.updateMatrixWorld();

    this.spillLight.position.copy(this.spotLight.position).addScaledVector(this._smoothDir, 0.9);

    this.beamMesh.position.copy(this.spotLight.position);
    this.beamMesh.lookAt(this._targetPos);
  }
}
