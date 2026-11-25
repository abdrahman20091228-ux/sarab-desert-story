import * as THREE from 'three';

/**
 * Clean Cinematic Camera Director — SARAB v6.0
 * - Sweeping live 3D Title Vista across Stage 1's sunlit dunes, abandoned camp, cracked sabkha & sandstone mesas
 * - Gentle atmospheric intro directly into Stage 1 exploration
 */
export class CutsceneManager {
  constructor(camera, stageManager, player) {
    this.camera = camera;
    this.stages = stageManager;
    this.player = player;

    this.mode = 'title';
    this.timer = 0;

    this.containerEl = document.getElementById('game-container');
    this.eyelidEl = document.getElementById('eyelid-layer');
    this.blurEl = document.getElementById('vision-blur-layer');
  }

  startTitleCamera() {
    this.mode = 'title';
    this.timer = 0;
    this.player.enabled = false;
    this._setEyelids(1.0);
    this._setBlur(0);
    this.containerEl?.classList.remove('cinematic-bars-active');
  }

  enterGameplay() {
    this.mode = 'gameplay';
    this.timer = 0;
    this._setEyelids(1.0);
    this._setBlur(0);
    this.containerEl?.classList.remove('cinematic-bars-active');
  }

  _setEyelids(openAmt) {
    if (this.eyelidEl) {
      this.eyelidEl.style.setProperty('--eyelid-open', THREE.MathUtils.clamp(openAmt, 0, 1).toFixed(3));
    }
  }

  _setBlur(px) {
    if (this.blurEl) {
      this.blurEl.style.backdropFilter = px > 0.3 ? `blur(${px.toFixed(1)}px)` : 'none';
      this.blurEl.style.webkitBackdropFilter = px > 0.3 ? `blur(${px.toFixed(1)}px)` : 'none';
      this.blurEl.style.background = 'rgba(255, 246, 224, 0)';
    }
  }

  update(dt, elapsed) {
    this.timer += dt;
    if (this.mode === 'title') {
      // Sweeping vista overlooking Stage 1's open mirage plains, abandoned camp, sabkha stele & sandstone mesas
      const cx = -6.0 + Math.sin(elapsed * 0.1) * 16.0;
      const cz = 74.0 + Math.cos(elapsed * 0.08) * 8.0;
      const gy = this.stages.getHeight(cx, cz);
      this.camera.position.set(cx, gy + 8.0 + Math.sin(elapsed * 0.16) * 0.35, cz);
      this.camera.lookAt(-2.0, gy - 1.2, -16.0);
    }
  }
}
