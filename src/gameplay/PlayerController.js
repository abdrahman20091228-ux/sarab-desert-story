import * as THREE from 'three';

/**
 * First-Person Player Controller featuring:
 * - True PUBG-Style Floating Dynamic Joystick (spawns wherever thumb touches left zone!)
 * - Integrated PUBG Sprint + Auto-Sprint Lock (push stick up >80% to sprint; push into top lock pill to lock sprint!)
 * - Real Jump Physics (Gravity + Jump Button + Spacebar) with climbing/standing on rocks, jeep, crates & hills!
 * - High-sensitivity landscape mobile touch look + Desktop WASD/Mouse
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
    this.walkSpeed = 4.35;
    this.sprintSpeed = 8.9;
    this.vy = 0;
    this.gravity = -19.5;
    this.jumpVelocity = 7.4; // Crisp athletic jump (~1.4m peak height, lets you hop onto rocks & jeep!)
    this.onGround = true;

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
    this.joyRawUp = 0;
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

    this._bindInputs();
  }

  setPose(x, z, yaw, pitch = 0) {
    const g = this.physics.getGroundInfo(x, z, 0);
    this.position.set(x, g.groundY, z);
    this.vy = 0;
    this.onGround = true;
    this.yaw = yaw;
    this.pitch = pitch;
    this._targetYaw = yaw;
    this._targetPitch = pitch;
    this._applyCameraTransform(0, 0);
  }

  triggerJump() {
    if (!this.enabled || !this.onGround) return;
    this.audio.unlock();
    this.vy = this.jumpVelocity;
    this.onGround = false;
    this.audio.playFootstep(this.currentSurface, true);
  }

  _bindInputs() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.isSprintingKey = true;
      if (e.code === 'Space') {
        e.preventDefault();
        this.triggerJump();
      }
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.isSprintingKey = false;
    });

    // Jump Button (touchstart for zero-latency mobile response + click for desktop)
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

    // ==================== PUBG FLOATING DYNAMIC JOYSTICK + INTEGRATED SPRINT ====================
    const joyZone = document.getElementById('joystick-zone');
    const floatWrap = document.getElementById('joystick-float-wrap');
    const joyBase = document.getElementById('joystick-base');
    const joyKnob = document.getElementById('joystick-knob');
    const sprintLockPill = document.getElementById('joystick-sprint-lock');
    const maxRadius = 46;

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
            this.autoSprintLocked = false; // Touching stick cancels previous auto-sprint lock
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

            // PUBG Sprint-Lock zone: dragging thumb high above stick (rawDy < -98px)
            const lockHover = rawDy < -96 && Math.abs(rawDx) < 55;
            this.joyRawUp = -rawDy;

            let clampedX = rawDx;
            let clampedY = rawDy;
            if (dist > maxRadius) {
              clampedX = (rawDx / dist) * maxRadius;
              clampedY = (rawDy / dist) * maxRadius;
            }

            const nx = clampedX / maxRadius;
            const ny = clampedY / maxRadius;
            this.joyVec.x = Math.abs(nx) < 0.08 ? 0 : nx;
            this.joyVec.y = Math.abs(ny) < 0.08 ? 0 : ny;

            // Integrated PUBG Sprint: push stick forward > 78%
            const sprintingNow = (-ny > 0.78 && Math.abs(nx) < 0.65) || lockHover;
            updateKnob(clampedX, clampedY, sprintingNow, lockHover);
            e.preventDefault();
            break;
          }
        }
      }, { passive: false });

      const endJoy = (e) => {
        for (const t of e.changedTouches) {
          if (t.identifier === this.joyTouchId) {
            // If released while hovering in the top Sprint-Lock pill, lock continuous PUBG auto-sprint!
            if (this.joyRawUp > 96) {
              this.autoSprintLocked = true;
            }
            this.joyTouchId = null;
            this.joyActive = false;
            this.joyVec.x = 0;
            this.joyVec.y = 0;
            this.joyRawUp = 0;
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
      // Integrated PUBG Sprint when thumb pushed forward > 78%!
      if (-this.joyVec.y > 0.78 && Math.abs(this.joyVec.x) < 0.65) {
        joySprinting = true;
      }
    } else if (this.autoSprintLocked) {
      // PUBG Auto-Sprint Lock active!
      moveForward = 1;
      joySprinting = true;
    }

    const inputMag = Math.min(1, Math.hypot(moveForward, moveRight));
    this.isActuallySprinting =
      (this.isSprintingKey || joySprinting) && inputMag > 0.3 && moveForward > 0.1;

    // Smooth Dynamic FOV rush (+8.5°) when sprinting!
    const targetFovBoost = this.isActuallySprinting ? 8.5 : 0;
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

      const hitBoundary = this.physics.resolveHorizontal(this.position, 0.34);
      if (hitBoundary && this.boundaryWarnCooldown <= 0 && this.onBoundaryHit) {
        this.boundaryWarnCooldown = 8.0;
        this.autoSprintLocked = false;
        this.onBoundaryHit();
      }
    }

    // Real Vertical Physics: Gravity, Jumping, and Climbing onto Rocks/Jeep/Crates/Hills!
    const ground = this.physics.getGroundInfo(this.position.x, this.position.z, this.position.y);
    this.currentSurface = ground.surface;

    if (!this.onGround || this.position.y > ground.groundY + 0.06) {
      this.vy += this.gravity * dt;
      this.position.y += this.vy * dt;
      if (this.position.y <= ground.groundY) {
        this.position.y = ground.groundY;
        if (this.vy < -3.0) {
          this.audio.playFootstep(this.currentSurface, true);
        }
        this.vy = 0;
        this.onGround = true;
      }
    } else {
      // Smoothly follow sand dunes & gentle step-up surfaces
      this.position.y += (ground.groundY - this.position.y) * Math.min(1, dt * 18);
      this.vy = 0;
      this.onGround = true;
    }

    this.isInsideHouse = this.physics.isInsideBuilding(this.position);

    // Walking / Sprinting Head-Bob & Footsteps (paused while airborne!)
    let bobY = 0;
    let bobX = 0;
    if (this.onGround && movingSpeed > 0.35) {
      const freq = this.isActuallySprinting ? 13.0 : 7.6;
      const ampY = this.isActuallySprinting ? 0.09 : 0.044;
      const ampX = this.isActuallySprinting ? 0.044 : 0.022;
      this.bobTimer += dt * freq;
      const sinVal = Math.sin(this.bobTimer);
      bobY = sinVal * ampY;
      bobX = Math.cos(this.bobTimer * 0.5) * ampX;

      if (sinVal < -0.82 && this.lastStepSign >= -0.82) {
        this.audio.playFootstep(this.currentSurface, this.isActuallySprinting);
      }
      this.lastStepSign = sinVal;
    } else if (this.onGround) {
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
    this.camera.rotation.z = bobX * (this.isActuallySprinting ? -0.3 : -0.15);
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
