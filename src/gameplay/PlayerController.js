import * as THREE from 'three';

/**
 * First-Person Player Controller (v3.0):
 * - True PUBG-Style Floating Dynamic Joystick:
 *   * Inside the base ring (0..46px) = 100% smooth walking (never accidentally triggers sprint!)
 *   * Pushing thumb OUTSIDE the ring (>50px upward) = Sprint!
 *   * Dragging thumb into the top lock pill (>94px upward) and releasing = Auto-Sprint Lock with persistent HUD pill (#auto-sprint-banner)!
 * - Real Jump Physics (Gravity + Jump Button + Spacebar) with downhill ground-snapping so sprinting down sand dunes never stutters!
 * - High-sensitivity landscape mobile touch look + Desktop WASD/Mouse + subtle tactile haptics
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

    // Movement + Real Sprint + Jump Physics
    this.walkSpeed = 4.55;
    this.sprintSpeed = 8.95;
    this.vy = 0;
    this.gravity = -19.5;
    this.jumpVelocity = 7.5;
    this.onGround = true;
    this.isJumping = false;

    this.isActuallySprinting = false;
    this.currentFovBoost = 0;
    this.isSprintingKey = false;
    this.autoSprintLocked = false;

    this.isInsideHouse = false;
    this.currentSurface = 'sand';
    this.bobTimer = 0;
    this.lastStepSign = 0;
    this.boundaryWarnCooldown = 0;
    this.onBoundaryHit = null;

    this.keys = {};
    this.joyVec = { x: 0, y: 0 };
    this.joyBeyondRing = false;
    this.joyLockHover = false;
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

    this.sprintBannerEl = document.getElementById('auto-sprint-banner');
    this._bindInputs();
  }

  _haptic(ms = 12) {
    try {
      if (navigator.vibrate) navigator.vibrate(ms);
    } catch {}
  }

  setAutoSprintLock(locked) {
    this.autoSprintLocked = Boolean(locked);
    if (this.sprintBannerEl) {
      this.sprintBannerEl.classList.toggle('hidden', !this.autoSprintLocked);
    }
  }

  setPose(x, z, yaw, pitch = 0) {
    const g = this.physics.getGroundInfo(x, z, 0);
    this.position.set(x, g.groundY, z);
    this.vy = 0;
    this.onGround = true;
    this.isJumping = false;
    this.setAutoSprintLock(false);
    this.yaw = yaw;
    this.pitch = pitch;
    this._targetYaw = yaw;
    this._targetPitch = pitch;
    this._applyCameraTransform(0, 0);
  }

  triggerJump() {
    if (!this.enabled || !this.onGround) return;
    this.audio.unlock();
    this._haptic(14);
    this.vy = this.jumpVelocity;
    this.onGround = false;
    this.isJumping = true;
    this.audio.playFootstep(this.currentSurface, true);
  }

  _bindInputs() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.isSprintingKey = true;
      if (e.code === 'KeyS' || e.code === 'ArrowDown') this.setAutoSprintLock(false);
      if (e.code === 'Space') {
        e.preventDefault();
        this.triggerJump();
      }
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.isSprintingKey = false;
    });

    if (this.sprintBannerEl) {
      const cancelLock = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setAutoSprintLock(false);
        this._haptic(10);
      };
      this.sprintBannerEl.addEventListener('touchstart', cancelLock, { passive: false });
      this.sprintBannerEl.addEventListener('click', cancelLock);
    }

    const jumpBtn = document.getElementById('btn-mobile-jump');
    if (jumpBtn) {
      jumpBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.triggerJump();
      }, { passive: false });
      jumpBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.triggerJump();
      });
    }

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

    // ==================== TRUE PUBG FLOATING JOYSTICK + OUTER-RING SPRINT & SPRINT-LOCK ====================
    const joyZone = document.getElementById('joystick-zone');
    const floatWrap = document.getElementById('joystick-float-wrap');
    const joyBase = document.getElementById('joystick-base');
    const joyKnob = document.getElementById('joystick-knob');
    const sprintLockPill = document.getElementById('joystick-sprint-lock');
    const walkRadius = 46;
    const sprintTriggerDist = 52; // Must push OUTSIDE the 46px walk ring to sprint!

    const updateKnob = (px, py, sprinting, lockHovered) => {
      if (joyKnob) joyKnob.style.transform = `translate(${px.toFixed(1)}px, ${py.toFixed(1)}px)`;
      if (joyBase) joyBase.classList.toggle('sprinting', sprinting);
      if (sprintLockPill) sprintLockPill.classList.toggle('engaged', lockHovered);
    };

    if (joyZone && floatWrap) {
      joyZone.addEventListener('touchstart', (e) => {
        if (!this.enabled) return;
        this.audio.unlock();
        for (const t of e.changedTouches) {
          if (this.joyTouchId === null) {
            this.joyTouchId = t.identifier;
            this.joyActive = true;
            this.joyBeyondRing = false;
            this.joyLockHover = false;
            this.setAutoSprintLock(false); // Touching stick cancels previous auto-sprint lock
            this.joyOrigin.x = t.clientX;
            this.joyOrigin.y = t.clientY;
            floatWrap.style.left = `${t.clientX}px`;
            floatWrap.style.top = `${t.clientY}px`;
            floatWrap.classList.remove('hidden');
            updateKnob(0, 0, false, false);
            break;
          }
        }
      }, { passive: true });

      joyZone.addEventListener('touchmove', (e) => {
        if (!this.enabled || this.joyTouchId === null) return;
        for (const t of e.changedTouches) {
          if (t.identifier === this.joyTouchId) {
            const rawDx = t.clientX - this.joyOrigin.x;
            const rawDy = t.clientY - this.joyOrigin.y;
            const dist = Math.hypot(rawDx, rawDy);

            // True PUBG Sprint: ONLY when dragged outside the 46px walk ring in the forward sector!
            const inForwardCone = rawDy < -36 && Math.abs(rawDx) < Math.abs(rawDy) * 0.85;
            this.joyBeyondRing = dist > sprintTriggerDist && inForwardCone;

            // PUBG Sprint-Lock zone: dragging thumb high into top lock pill (rawDy < -92px)
            const prevLockHover = this.joyLockHover;
            this.joyLockHover = rawDy < -92 && Math.abs(rawDx) < 56;
            if (this.joyLockHover && !prevLockHover) this._haptic(16);

            const visualRadius = this.joyBeyondRing ? 56 : walkRadius;
            let clampedX = rawDx;
            let clampedY = rawDy;
            if (dist > visualRadius) {
              clampedX = (rawDx / dist) * visualRadius;
              clampedY = (rawDy / dist) * visualRadius;
            }

            const normDist = Math.min(1.0, dist / walkRadius);
            const dirX = dist > 1e-4 ? rawDx / dist : 0;
            const dirY = dist > 1e-4 ? rawDy / dist : 0;
            const nx = dirX * normDist;
            const ny = dirY * normDist;

            this.joyVec.x = Math.abs(nx) < 0.08 ? 0 : nx;
            this.joyVec.y = Math.abs(ny) < 0.08 ? 0 : ny;

            updateKnob(clampedX, clampedY, this.joyBeyondRing || this.joyLockHover, this.joyLockHover);
            e.preventDefault();
            break;
          }
        }
      }, { passive: false });

      const endJoy = (e) => {
        for (const t of e.changedTouches) {
          if (t.identifier === this.joyTouchId) {
            if (this.joyLockHover) {
              this.setAutoSprintLock(true);
              this._haptic(22);
            }
            this.joyTouchId = null;
            this.joyActive = false;
            this.joyBeyondRing = false;
            this.joyLockHover = false;
            this.joyVec.x = 0;
            this.joyVec.y = 0;
            floatWrap.classList.add('hidden');
            updateKnob(0, 0, false, false);
            break;
          }
        }
      };
      joyZone.addEventListener('touchend', endJoy, { passive: true });
      joyZone.addEventListener('touchcancel', endJoy, { passive: true });
    }
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

    let joySprinting = false;
    if (this.joyActive) {
      moveForward -= this.joyVec.y;
      moveRight += this.joyVec.x;
      if (this.joyBeyondRing || this.joyLockHover) {
        joySprinting = true;
      }
    } else if (this.autoSprintLocked) {
      moveForward = 1;
      joySprinting = true;
    }

    const inputMag = Math.min(1, Math.hypot(moveForward, moveRight));
    this.isActuallySprinting =
      (this.isSprintingKey || joySprinting) && inputMag > 0.3 && moveForward > 0.15;

    // Smooth Dynamic FOV rush (+8.0°) when sprinting
    const targetFovBoost = this.isActuallySprinting ? 8.0 : 0;
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

      const hitBoundary = this.physics.resolveHorizontal(this.position, 0.36);
      if (hitBoundary && this.boundaryWarnCooldown <= 0 && this.onBoundaryHit) {
        this.boundaryWarnCooldown = 8.0;
        this.setAutoSprintLock(false);
        this.onBoundaryHit();
      }
    }

    // Vertical Physics: Gravity, Jumping, and Downhill Ground-Snapping (zero downhill stutter!)
    const ground = this.physics.getGroundInfo(this.position.x, this.position.z, this.position.y);
    this.currentSurface = ground.surface;
    const heightAboveGround = this.position.y - ground.groundY;

    if (this.isJumping || !this.onGround || heightAboveGround > 0.38) {
      this.onGround = false;
      this.vy += this.gravity * dt;
      this.position.y += this.vy * dt;
      if (this.position.y <= ground.groundY) {
        this.position.y = ground.groundY;
        if (this.vy < -3.2) {
          this.audio.playFootstep(this.currentSurface, true);
        }
        this.vy = 0;
        this.onGround = true;
        this.isJumping = false;
      }
    } else {
      // Smoothly glue feet to sand dunes both uphill AND downhill when walking/sprinting!
      this.position.y += (ground.groundY - this.position.y) * Math.min(1, dt * 24);
      this.vy = 0;
      this.onGround = true;
    }

    this.isInsideHouse = this.physics.isInsideBuilding(this.position);

    // Walking / Sprinting Head-Bob & Footsteps
    let bobY = 0;
    let bobX = 0;
    if (this.onGround && movingSpeed > 0.35) {
      const freq = this.isActuallySprinting ? 12.8 : 7.6;
      const ampY = this.isActuallySprinting ? 0.082 : 0.042;
      const ampX = this.isActuallySprinting ? 0.04 : 0.02;
      this.bobTimer += dt * freq;
      const sinVal = Math.sin(this.bobTimer);
      bobY = sinVal * ampY;
      bobX = Math.cos(this.bobTimer * 0.5) * ampX;

      if (sinVal < -0.82 && this.lastStepSign >= -0.82) {
        this.audio.playFootstep(this.currentSurface, this.isActuallySprinting);
      }
      this.lastStepSign = sinVal;
    } else if (this.onGround) {
      bobY = Math.sin(elapsed * 1.45) * 0.011;
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
    this.camera.rotation.z = bobX * (this.isActuallySprinting ? -0.28 : -0.14);
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
    this.focusedInteractable = dot > 0.52 || dist < 2.2 ? activeItem : null;
  }
}
