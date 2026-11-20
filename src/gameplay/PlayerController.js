import * as THREE from 'three';

/**
 * First-Person Player Controller with:
 * - REAL visceral Sprint (4.3 m/s walk -> 8.8 m/s sprint + smooth +9° FOV rush + stamina meter + energetic head-bob!)
 * - High-sensitivity landscape mobile touch look + minimal floating virtual thumbstick
 * - Desktop WASD + PointerLock / Click-Drag + Shift Sprint
 * - Strictly targets ONLY the currently active story mission interactable!
 */
export class PlayerController {
  constructor(camera, physics, audio, settings) {
    this.camera = camera;
    this.physics = physics;
    this.audio = audio;
    this.settings = settings;

    this.enabled = false;
    this.position = new THREE.Vector3(-11.0, 0, 15.0);
    this.yaw = -0.34;
    this.pitch = -0.02;
    this.eyeHeight = 1.72;

    this.walkSpeed = 4.3;
    this.sprintSpeed = 8.8; // True unmistakable 2x running speed!
    this.stamina = 1.0;
    this.staminaExhausted = false;
    this.isActuallySprinting = false;
    this.currentFovBoost = 0;

    this.isSprintingKey = false;
    this.mobileSprintActive = false;

    this.isInsideHouse = false;
    this.currentSurface = 'sand';
    this.bobTimer = 0;
    this.lastStepSign = 0;
    this.boundaryWarnCooldown = 0;
    this.onBoundaryHit = null;

    this.keys = {};
    this.joyVec = { x: 0, y: 0 };
    this.joyActive = false;
    this.joyTouchId = null;
    this.joyOrigin = { x: 0, y: 0 };

    this.lookTouchId = null;
    this.lookLast = { x: 0, y: 0 };
    this.mouseDragging = false;
    this.pointerLocked = false;

    this._targetYaw = this.yaw;
    this._targetPitch = this.pitch;

    this.focusedInteractable = null;
    this._forward = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._moveDir = new THREE.Vector3();
    this._toObj = new THREE.Vector3();

    this._staminaRingEl = document.getElementById('sprint-stamina-arc');
    this._sprintBtnEl = document.getElementById('btn-mobile-sprint');

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
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.isSprintingKey = true;
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.isSprintingKey = false;
    });

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

    window.addEventListener('pointerdown', (e) => {
      if (!this.enabled || e.pointerType === 'touch' || e.button !== 0) return;
      this.audio.unlock();
      this.mouseDragging = true;
      if (e.target === canvas || e.target === lookZone) {
        try {
          if (canvas.requestPointerLock && !('ontouchstart' in window)) {
            canvas.requestPointerLock();
          }
        } catch {}
      }
    });
    window.addEventListener('pointerup', () => {
      this.mouseDragging = false;
    });

    // High-sensitivity mobile touch look (right half)
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

            const speedMag = Math.hypot(dx, dy);
            const accel = 1.0 + Math.min(0.85, speedMag * 0.02);
            const sens = this.settings.data.sensitivity * 0.0058 * accel;

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

    // Minimalist Floating Virtual Thumbstick (left zone)
    const joyZone = document.getElementById('joystick-zone');
    const joyBase = document.getElementById('joystick-base');
    const joyKnob = document.getElementById('joystick-knob');
    const maxRadius = 40;

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

    // Mobile Sprint Button: supports BOTH Hold-to-Sprint and Tap Toggle!
    if (this._sprintBtnEl) {
      this._sprintBtnEl.addEventListener('click', (e) => {
        e.stopPropagation();
        this.mobileSprintActive = !this.mobileSprintActive;
        this._sprintBtnEl.classList.toggle('active', this.mobileSprintActive);
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
    this.joyVec.x = Math.abs(nx) < 0.08 ? 0 : nx;
    this.joyVec.y = Math.abs(ny) < 0.08 ? 0 : ny;
    updateKnob(nx, ny);
  }

  _clampPitch() {
    this._targetPitch = THREE.MathUtils.clamp(this._targetPitch, -1.32, 1.32);
  }

  update(dt, elapsed, activeInteractable) {
    if (!this.enabled) return;

    if (this.boundaryWarnCooldown > 0) this.boundaryWarnCooldown -= dt;

    const lookLerp = Math.min(1, dt * 28);
    this.yaw += (this._targetYaw - this.yaw) * lookLerp;
    this.pitch += (this._targetPitch - this.pitch) * lookLerp;

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
    const wantsSprint = (this.isSprintingKey || this.mobileSprintActive) && inputMag > 0.25 && moveForward > -0.15;

    // Realistic Stamina System for Real Sprinting!
    if (wantsSprint && !this.staminaExhausted && this.stamina > 0.02) {
      this.isActuallySprinting = true;
      this.stamina = Math.max(0, this.stamina - dt * 0.16);
      if (this.stamina <= 0.01) {
        this.staminaExhausted = true;
        this.mobileSprintActive = false;
        this._sprintBtnEl?.classList.remove('active');
      }
    } else {
      this.isActuallySprinting = false;
      this.stamina = Math.min(1, this.stamina + dt * 0.24);
      if (this.staminaExhausted && this.stamina > 0.28) {
        this.staminaExhausted = false;
      }
    }

    // Update circular stamina arc SVG on Sprint button
    if (this._staminaRingEl) {
      const circ = 150.8; // 2 * PI * 24
      this._staminaRingEl.style.strokeDashoffset = (circ * (1 - this.stamina)).toFixed(1);
    }

    // Visceral Dynamic FOV Rush when sprinting (+9° smooth widen!)
    const targetFovBoost = this.isActuallySprinting ? 9.5 : 0;
    this.currentFovBoost += (targetFovBoost - this.currentFovBoost) * Math.min(1, dt * 7.5);
    const desiredFov = this.settings.data.fov + this.currentFovBoost;
    if (Math.abs(this.camera.fov - desiredFov) > 0.05) {
      this.camera.fov = desiredFov;
      this.camera.updateProjectionMatrix();
    }

    let movingSpeed = 0;
    if (inputMag > 0.01) {
      const speed = (this.isActuallySprinting ? this.sprintSpeed : this.walkSpeed) * inputMag;
      movingSpeed = speed;

      this._forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
      this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

      this._moveDir
        .set(0, 0, 0)
        .addScaledVector(this._forward, moveForward)
        .addScaledVector(this._right, moveRight)
        .normalize();

      this.position.x += this._moveDir.x * speed * dt;
      this.position.z += this._moveDir.z * speed * dt;

      const hitBoundary = this.physics.resolveHorizontal(this.position, 0.46);
      if (hitBoundary && this.boundaryWarnCooldown <= 0 && this.onBoundaryHit) {
        this.boundaryWarnCooldown = 8.0;
        this.onBoundaryHit();
      }
    }

    const ground = this.physics.getGroundInfo(this.position.x, this.position.z);
    this.currentSurface = ground.surface;
    this.position.y += (ground.groundY - this.position.y) * Math.min(1, dt * 16);
    this.isInsideHouse = this.physics.isInsideBuilding(this.position);

    // Distinct Walk vs Real Sprint Head-Bob + Synchronized Footsteps!
    let bobY = 0;
    let bobX = 0;
    if (movingSpeed > 0.35) {
      const freq = this.isActuallySprinting ? 13.4 : 7.6;
      const ampY = this.isActuallySprinting ? 0.095 : 0.044;
      const ampX = this.isActuallySprinting ? 0.048 : 0.022;
      this.bobTimer += dt * freq;
      const sinVal = Math.sin(this.bobTimer);
      bobY = sinVal * ampY;
      bobX = Math.cos(this.bobTimer * 0.5) * ampX;

      if (sinVal < -0.82 && this.lastStepSign >= -0.82) {
        this.audio.playFootstep(this.currentSurface, this.isActuallySprinting);
      }
      this.lastStepSign = sinVal;
    } else {
      bobY = Math.sin(elapsed * 1.45) * 0.012;
      this.lastStepSign = 0;
    }

    this._applyCameraTransform(bobX, bobY);
    this._updateActiveInteractable(activeInteractable);
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
    this.camera.rotation.z = bobX * (this.isActuallySprinting ? -0.32 : -0.16);
  }

  _updateActiveInteractable(activeItem) {
    if (!activeItem) {
      this.focusedInteractable = null;
      return;
    }

    const dist = this.camera.position.distanceTo(activeItem.worldPos);
    if (dist > activeItem.radius) {
      this.focusedInteractable = null;
      return;
    }

    this.camera.getWorldDirection(this._forward);
    this._toObj.subVectors(activeItem.worldPos, this.camera.position).normalize();
    const dot = this._forward.dot(this._toObj);
    // Generous comfortable cone on mobile touch so interacting feels effortless
    this.focusedInteractable = dot > 0.52 || dist < 2.2 ? activeItem : null;
  }
}
