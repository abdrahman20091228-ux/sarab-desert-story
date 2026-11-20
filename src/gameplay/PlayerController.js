import * as THREE from 'three';

/**
 * First-Person Player Controller engineered for:
 * - High-sensitivity landscape mobile touch look (right pad) + analog thumbstick (left pad)
 * - Desktop WASD + Mouse PointerLock / Click-Drag fallback
 * - Smooth physics wall sliding, terrain height tracking, head-bob & material-aware footsteps
 */
export class PlayerController {
  constructor(camera, physics, audio, settings) {
    this.camera = camera;
    this.physics = physics;
    this.audio = audio;
    this.settings = settings;

    this.enabled = false;
    this.position = new THREE.Vector3(-8.5, 0, 9.5);
    this.yaw = -0.45;   // Looking toward the abandoned house
    this.pitch = -0.04;
    this.eyeHeight = 1.66;

    this.walkSpeed = 4.35;
    this.sprintSpeed = 6.9;
    this.isSprinting = false;
    this.mobileSprintToggle = false;

    this.isInsideHouse = false;
    this.currentSurface = 'sand';
    this.bobTimer = 0;
    this.lastStepSign = 0;
    this.boundaryWarnCooldown = 0;
    this.onBoundaryHit = null;

    // Input states
    this.keys = {};
    this.joyVec = { x: 0, y: 0 };
    this.joyActive = false;
    this.joyTouchId = null;
    this.joyOrigin = { x: 0, y: 0 };

    this.lookTouchId = null;
    this.lookLast = { x: 0, y: 0 };
    this.mouseDragging = false;
    this.pointerLocked = false;

    // Smooth look velocity target for silky-smooth high-sensitivity touch feel
    this._targetYaw = this.yaw;
    this._targetPitch = this.pitch;

    // Interaction target state
    this.focusedInteractable = null;
    this._forward = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._moveDir = new THREE.Vector3();
    this._toObj = new THREE.Vector3();

    this._bindInputs();
  }

  setPose(x, z, yaw, pitch = 0) {
    const g = this.physics.getGroundInfo(x, z);
    this.position.set(x, g.groundY, z);
    this.yaw = yaw;
    this.pitch = pitch;
    this._targetYaw = yaw;
    this._targetPitch = pitch;
    this._applyCameraTransform(0, 0);
  }

  _bindInputs() {
    // Keyboard
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.isSprinting = true;
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.isSprinting = false;
    });

    // Desktop Mouse PointerLock + Drag fallback on canvas/look-zone
    const lookZone = document.getElementById('look-zone');
    const canvas = document.getElementById('game-canvas');

    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === canvas;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.enabled) return;
      if (this.pointerLocked || this.mouseDragging) {
        const sens = this.settings.data.sensitivity * 0.0022;
        this._targetYaw -= e.movementX * sens;
        this._targetPitch -= e.movementY * sens;
        this._clampPitch();
      }
    });

    const startMouseDrag = (e) => {
      if (!this.enabled || e.pointerType === 'touch') return;
      if (e.button !== 0) return;
      this.audio.unlock();
      this.mouseDragging = true;
      // Optional pointer lock on double-click or desktop click when not on UI
      if (e.target === canvas || e.target === lookZone) {
        try {
          if (canvas.requestPointerLock && !('ontouchstart' in window)) {
            canvas.requestPointerLock();
          }
        } catch {
          // Pointer lock unsupported; drag fallback works smoothly!
        }
      }
    };

    window.addEventListener('pointerdown', startMouseDrag);
    window.addEventListener('pointerup', () => {
      this.mouseDragging = false;
    });

    // ==================== MOBILE HIGH-SENSITIVITY TOUCH LOOK ====================
    if (lookZone) {
      lookZone.addEventListener('touchstart', (e) => {
        if (!this.enabled) return;
        this.audio.unlock();
        for (const t of e.changedTouches) {
          if (this.lookTouchId === null) {
            this.lookTouchId = t.identifier;
            this.lookLast.x = t.clientX;
            this.lookLast.y = t.clientY;
            break;
          }
        }
      }, { passive: true });

      lookZone.addEventListener('touchmove', (e) => {
        if (!this.enabled || this.lookTouchId === null) return;
        for (const t of e.changedTouches) {
          if (t.identifier === this.lookTouchId) {
            const dx = t.clientX - this.lookLast.x;
            const dy = t.clientY - this.lookLast.y;
            this.lookLast.x = t.clientX;
            this.lookLast.y = t.clientY;

            // High touch sensitivity with gentle speed acceleration for snappy 180° turns!
            const speedMag = Math.hypot(dx, dy);
            const accel = 1.0 + Math.min(0.85, speedMag * 0.018);
            const sens = this.settings.data.sensitivity * 0.0056 * accel;

            this._targetYaw -= dx * sens;
            this._targetPitch -= dy * sens * 0.88;
            this._clampPitch();
            e.preventDefault();
            break;
          }
        }
      }, { passive: false });

      const endLook = (e) => {
        for (const t of e.changedTouches) {
          if (t.identifier === this.lookTouchId) {
            this.lookTouchId = null;
            break;
          }
        }
      };
      lookZone.addEventListener('touchend', endLook, { passive: true });
      lookZone.addEventListener('touchcancel', endLook, { passive: true });
    }

    // ==================== MOBILE LEFT VIRTUAL JOYSTICK ====================
    const joyZone = document.getElementById('joystick-zone');
    const joyBase = document.getElementById('joystick-base');
    const joyKnob = document.getElementById('joystick-knob');
    const maxRadius = 42;

    const updateKnob = (nx, ny) => {
      if (joyKnob) {
        joyKnob.style.transform = `translate(${(nx * maxRadius).toFixed(1)}px, ${(ny * maxRadius).toFixed(1)}px)`;
      }
    };

    if (joyZone && joyBase) {
      joyZone.addEventListener('touchstart', (e) => {
        if (!this.enabled) return;
        this.audio.unlock();
        for (const t of e.changedTouches) {
          if (this.joyTouchId === null) {
            this.joyTouchId = t.identifier;
            this.joyActive = true;
            const rect = joyBase.getBoundingClientRect();
            this.joyOrigin.x = rect.left + rect.width / 2;
            this.joyOrigin.y = rect.top + rect.height / 2;
            joyBase.classList.add('active');
            this._updateJoyFromTouch(t.clientX, t.clientY, maxRadius, updateKnob);
            break;
          }
        }
      }, { passive: true });

      joyZone.addEventListener('touchmove', (e) => {
        if (!this.enabled || this.joyTouchId === null) return;
        for (const t of e.changedTouches) {
          if (t.identifier === this.joyTouchId) {
            this._updateJoyFromTouch(t.clientX, t.clientY, maxRadius, updateKnob);
            e.preventDefault();
            break;
          }
        }
      }, { passive: false });

      const endJoy = (e) => {
        for (const t of e.changedTouches) {
          if (t.identifier === this.joyTouchId) {
            this.joyTouchId = null;
            this.joyActive = false;
            this.joyVec.x = 0;
            this.joyVec.y = 0;
            joyBase.classList.remove('active');
            updateKnob(0, 0);
            break;
          }
        }
      };
      joyZone.addEventListener('touchend', endJoy, { passive: true });
      joyZone.addEventListener('touchcancel', endJoy, { passive: true });
    }

    // Mobile Sprint Toggle Button
    const sprintBtn = document.getElementById('btn-mobile-sprint');
    if (sprintBtn) {
      sprintBtn.addEventListener('click', () => {
        this.mobileSprintToggle = !this.mobileSprintToggle;
        sprintBtn.classList.toggle('toggled', this.mobileSprintToggle);
      });
    }
  }

  _updateJoyFromTouch(cx, cy, maxR, updateKnob) {
    let dx = cx - this.joyOrigin.x;
    let dy = cy - this.joyOrigin.y;
    const dist = Math.hypot(dx, dy);
    if (dist > maxR) {
      dx = (dx / dist) * maxR;
      dy = (dy / dist) * maxR;
    }
    const nx = dx / maxR;
    const ny = dy / maxR;
    // Tiny 8% deadzone
    this.joyVec.x = Math.abs(nx) < 0.08 ? 0 : nx;
    this.joyVec.y = Math.abs(ny) < 0.08 ? 0 : ny;
    updateKnob(nx, ny);
  }

  _clampPitch() {
    this._targetPitch = THREE.MathUtils.clamp(this._targetPitch, -1.32, 1.32);
  }

  update(dt, elapsed, interactables) {
    if (!this.enabled) return;

    if (this.boundaryWarnCooldown > 0) this.boundaryWarnCooldown -= dt;

    // Ultra-responsive smoothing (nearly instant, eliminates micro-jitter on touch screens)
    const lookLerp = Math.min(1, dt * 28);
    this.yaw += (this._targetYaw - this.yaw) * lookLerp;
    this.pitch += (this._targetPitch - this.pitch) * lookLerp;

    // Combine keyboard + analog mobile thumbstick movement
    let moveForward = 0;
    let moveRight = 0;

    if (this.keys['KeyW'] || this.keys['ArrowUp']) moveForward += 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) moveForward -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) moveRight += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) moveRight -= 1;

    if (this.joyActive) {
      moveForward -= this.joyVec.y;
      moveRight += this.joyVec.x;
    }

    const inputMag = Math.min(1, Math.hypot(moveForward, moveRight));
    let movingSpeed = 0;

    if (inputMag > 0.01) {
      // Auto-sprint if joystick pushed past 94% or sprint key/toggle active
      const autoSprint = this.joyActive && inputMag > 0.95;
      const sprint = this.isSprinting || this.mobileSprintToggle || autoSprint;
      const speed = (sprint ? this.sprintSpeed : this.walkSpeed) * inputMag;
      movingSpeed = speed;

      // Forward & Right vectors projected on XZ plane
      this._forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
      this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

      this._moveDir
        .set(0, 0, 0)
        .addScaledVector(this._forward, moveForward)
        .addScaledVector(this._right, moveRight)
        .normalize();

      this.position.x += this._moveDir.x * speed * dt;
      this.position.z += this._moveDir.z * speed * dt;

      const hitBoundary = this.physics.resolveHorizontal(this.position, 0.42);
      if (hitBoundary && this.boundaryWarnCooldown <= 0 && this.onBoundaryHit) {
        this.boundaryWarnCooldown = 8.0;
        this.onBoundaryHit();
      }
    }

    // Smooth ground height tracking (handles sand dunes & house stone threshold cleanly)
    const ground = this.physics.getGroundInfo(this.position.x, this.position.z);
    this.currentSurface = ground.surface;
    this.position.y += (ground.groundY - this.position.y) * Math.min(1, dt * 16);
    this.isInsideHouse = this.physics.isInsideBuilding(this.position);

    // Realistic first-person walking head-bob + footsteps synchronized to trough of bob
    let bobY = 0;
    let bobX = 0;
    if (movingSpeed > 0.35) {
      const freq = movingSpeed > 5.2 ? 10.6 : 7.6;
      this.bobTimer += dt * freq;
      const sinVal = Math.sin(this.bobTimer);
      bobY = sinVal * (movingSpeed > 5.2 ? 0.068 : 0.045);
      bobX = Math.cos(this.bobTimer * 0.5) * 0.025;

      // Trigger footstep at each downward stride trough
      if (sinVal < -0.82 && this.lastStepSign >= -0.82) {
        this.audio.playFootstep(this.currentSurface, movingSpeed > 5.2);
      }
      this.lastStepSign = sinVal;
    } else {
      // Subtle calm idle breathing sway
      bobY = Math.sin(elapsed * 1.45) * 0.012;
      this.lastStepSign = 0;
    }

    this._applyCameraTransform(bobX, bobY);
    this._updateInteractableFocus(interactables);
  }

  _applyCameraTransform(bobX, bobY) {
    this.camera.position.set(
      this.position.x + Math.cos(this.yaw) * bobX,
      this.position.y + this.eyeHeight + bobY,
      this.position.z - Math.sin(this.yaw) * bobX
    );
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
    this.camera.rotation.z = bobX * -0.18;
  }

  _updateInteractableFocus(interactables) {
    if (!interactables) {
      this.focusedInteractable = null;
      return;
    }

    this.camera.getWorldDirection(this._forward);
    let best = null;
    let bestScore = -1;

    for (let i = 0; i < interactables.length; i++) {
      const item = interactables[i];
      const dist = this.camera.position.distanceTo(item.worldPos);
      if (dist > item.radius) continue;

      this._toObj.subVectors(item.worldPos, this.camera.position).normalize();
      const dot = this._forward.dot(this._toObj);
      if (dot > 0.72) {
        const score = dot * 2.0 - dist * 0.25;
        if (score > bestScore) {
          bestScore = score;
          best = item;
        }
      }
    }

    this.focusedInteractable = best;
  }
}
