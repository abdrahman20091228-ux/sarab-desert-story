/**
 * True 3D Spatial & Surround Procedural Audio Engine — SARAB v6.0
 * - Syncs Web Audio `AudioListener` to player camera position & heading every tick!
 * - True 3D world-positioned `PannerNode` emitters per stage (NO mono sounds stuck to your head!):
 *   * Stage 1: Stereo open desert wind + spatialized distant soaring hawk cries + dry sabkha heat crackle
 *   * Stage 2: Spatialized canyon wall echoes + 3D localized rustling Oasis Palm fronds + creaking ruins
 *   * Stage 3: High-altitude stereo mountain wind sweep + deep valley resonance + distant summit sand-singing hum
 *   * Stage 4: True 3D spatialized Night Crickets anchored in distant desert patches (pan smoothly left/right
 *     and attenuate with distance & indoor walls!) + 3D warm oil-lantern fire crackle + distant desert owl hoots!
 * - 4 surface-aware footsteps ('sand' | 'sabkha' | 'rock' | 'stone')
 * - Rich story & interaction SFX: parchment rustle, brass clink, lantern ignition whoosh, oud discovery chord, flashlight click
 */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.volume = 0.85;
    this.unlocked = false;

    this.stageId = 1;
    this.indoorFactor = 0;
    this.stormIntensity = 0;

    // Continuous ambient stereo beds
    this.windGain = null;
    this.windFilterL = null;
    this.windFilterR = null;
    this.canyonResGain = null;
    this.canyonResFilter = null;
    this.summitRushGain = null;
    this.nightBreezeGain = null;

    // Dynamic 3D spatial PannerNodes for the active stage
    this._spatialSpots = []; // { type, x, y, z }
    this._spatialNodes = []; // active continuous WebAudio nodes to tear down on stage change

    this._noiseBuffer = null;
    this._blipCounter = 0;
    this._ambAccum = 0.2;
    this._listenerAccum = 0.1;
    this._cricketTimer = 0.8;
    this._wildlifeTimer = 6.5;
  }

  unlock() {
    if (this.unlocked && this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return;
    }

    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.volume;
    this.masterGain.connect(this.ctx.destination);

    this._noiseBuffer = this._createNoiseBuffer(4.0);
    this._setupStereoAmbienceGraph();
    this.unlocked = true;

    // If stage emitters were registered before audio unlock, instantiate them now!
    if (this._spatialSpots.length > 0) {
      this._rebuildContinuousSpatialLoops();
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  setStage(stageId, spatialSpots = []) {
    this.stageId = stageId;
    this._spatialSpots = spatialSpots || [];
    this._ambAccum = 1.0;
    this._cricketTimer = 0.7;
    this._wildlifeTimer = 4.5 + Math.random() * 4.0;
    this._rebuildContinuousSpatialLoops();
  }

  setStormIntensity(val) {
    this.stormIntensity = Math.max(0, Math.min(1, val));
  }

  setSuspended(suspended) {
    if (!this.ctx) return;
    if (suspended && this.ctx.state === 'running') {
      this.ctx.suspend().catch(() => {});
    } else if (!suspended && this.unlocked && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  _createNoiseBuffer(seconds) {
    const sampleRate = this.ctx.sampleRate;
    const length = Math.floor(sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.055;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  _setupStereoAmbienceGraph() {
    const now = this.ctx.currentTime;

    // True Stereo Decorrelated Desert Wind Bed (independent L & R filtered pink noise -> wide enveloping soundstage!)
    this.windGain = this.ctx.createGain();
    this.windGain.gain.value = 0.18;
    this.windGain.connect(this.masterGain);

    const makeChannel = (panVal, offsetSec, freq, lfoRate) => {
      const src = this.ctx.createBufferSource();
      src.buffer = this._noiseBuffer;
      src.loop = true;
      const filt = this.ctx.createBiquadFilter();
      filt.type = 'bandpass';
      filt.frequency.value = freq;
      filt.Q.value = 1.2;
      const pan = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
      if (pan) pan.pan.value = panVal;

      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = lfoRate;
      const lg = this.ctx.createGain();
      lg.gain.value = 95;
      lfo.connect(lg);
      lg.connect(filt.frequency);

      src.connect(filt);
      if (pan) {
        filt.connect(pan);
        pan.connect(this.windGain);
      } else {
        filt.connect(this.windGain);
      }
      src.start(now + offsetSec);
      lfo.start(now);
      return filt;
    };

    this.windFilterL = makeChannel(-0.68, 0.0, 240, 0.11);
    this.windFilterR = makeChannel(0.68, 1.85, 290, 0.085);

    // Stage 2 Canyon Wall Hollow Resonance (subtle stereo drift)
    const srcCanyon = this.ctx.createBufferSource();
    srcCanyon.buffer = this._noiseBuffer;
    srcCanyon.loop = true;
    this.canyonResFilter = this.ctx.createBiquadFilter();
    this.canyonResFilter.type = 'bandpass';
    this.canyonResFilter.frequency.value = 340;
    this.canyonResFilter.Q.value = 5.4;
    this.canyonResGain = this.ctx.createGain();
    this.canyonResGain.gain.value = 0.0;
    srcCanyon.connect(this.canyonResFilter);
    this.canyonResFilter.connect(this.canyonResGain);
    this.canyonResGain.connect(this.masterGain);
    srcCanyon.start(now + 1.2);

    // Stage 3 Mountain Peak Airy Wind Sweep
    const srcSummit = this.ctx.createBufferSource();
    srcSummit.buffer = this._noiseBuffer;
    srcSummit.loop = true;
    const sumFilt = this.ctx.createBiquadFilter();
    sumFilt.type = 'bandpass';
    sumFilt.frequency.value = 560;
    sumFilt.Q.value = 1.5;
    this.summitRushGain = this.ctx.createGain();
    this.summitRushGain.gain.value = 0.0;
    srcSummit.connect(sumFilt);
    sumFilt.connect(this.summitRushGain);
    this.summitRushGain.connect(this.masterGain);
    srcSummit.start(now + 2.1);

    const sumLfo = this.ctx.createOscillator();
    sumLfo.frequency.value = 0.17;
    const sumLfoG = this.ctx.createGain();
    sumLfoG.gain.value = 220;
    sumLfo.connect(sumLfoG);
    sumLfoG.connect(sumFilt.frequency);
    sumLfo.start(now);

    // Stage 4 Soft Cool Night Breeze Bed
    const srcNight = this.ctx.createBufferSource();
    srcNight.buffer = this._noiseBuffer;
    srcNight.loop = true;
    const nightFilt = this.ctx.createBiquadFilter();
    nightFilt.type = 'lowpass';
    nightFilt.frequency.value = 360;
    this.nightBreezeGain = this.ctx.createGain();
    this.nightBreezeGain.gain.value = 0.0;
    srcNight.connect(nightFilt);
    nightFilt.connect(this.nightBreezeGain);
    this.nightBreezeGain.connect(this.masterGain);
    srcNight.start(now + 0.5);
  }

  _clearContinuousSpatialLoops() {
    for (const item of this._spatialNodes) {
      try {
        item.src?.stop();
        item.src?.disconnect();
        item.panner?.disconnect();
        item.gain?.disconnect();
      } catch {}
    }
    this._spatialNodes.length = 0;
  }

  _createPannerAt(x, y, z, refDist = 6, maxDist = 75, rolloff = 1.45) {
    const panner = this.ctx.createPanner();
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = refDist;
    panner.maxDistance = maxDist;
    panner.rolloffFactor = rolloff;
    panner.positionX ? panner.positionX.setValueAtTime(x, this.ctx.currentTime) : panner.setPosition(x, y, z);
    if (panner.positionY) {
      panner.positionY.setValueAtTime(y, this.ctx.currentTime);
      panner.positionZ.setValueAtTime(z, this.ctx.currentTime);
    }
    return panner;
  }

  _rebuildContinuousSpatialLoops() {
    this._clearContinuousSpatialLoops();
    if (!this.unlocked || !this.ctx || !this._noiseBuffer) return;
    const now = this.ctx.currentTime;

    for (const s of this._spatialSpots) {
      if (s.type === 'palms') {
        // 3D localized rustling date-palm fronds in Stage 2 Oasis!
        const src = this.ctx.createBufferSource();
        src.buffer = this._noiseBuffer;
        src.loop = true;
        const filt = this.ctx.createBiquadFilter();
        filt.type = 'bandpass';
        filt.frequency.value = 1850;
        filt.Q.value = 1.6;
        const gain = this.ctx.createGain();
        gain.gain.value = 0.22;
        const panner = this._createPannerAt(s.x, s.y + 4.5, s.z, 5, 48, 1.5);
        src.connect(filt);
        filt.connect(gain);
        gain.connect(panner);
        panner.connect(this.masterGain);
        src.start(now + Math.random() * 2);
        this._spatialNodes.push({ src, panner, gain });
      } else if (s.type === 'lantern' || s.type === 'campfire') {
        // Warm 3D crackling oil-lantern / campfire embers!
        const src = this.ctx.createBufferSource();
        src.buffer = this._noiseBuffer;
        src.loop = true;
        const filt = this.ctx.createBiquadFilter();
        filt.type = 'bandpass';
        filt.frequency.value = s.type === 'campfire' ? 520 : 880;
        filt.Q.value = 1.9;
        const gain = this.ctx.createGain();
        gain.gain.value = s.type === 'campfire' ? 0.14 : 0.08;
        const panner = this._createPannerAt(s.x, s.y + 0.8, s.z, 2.5, 22, 1.8);
        src.connect(filt);
        filt.connect(gain);
        gain.connect(panner);
        panner.connect(this.masterGain);
        src.start(now + Math.random() * 2);
        this._spatialNodes.push({ src, panner, gain });
      }
    }
  }

  /**
   * True 3D World-Anchored Desert Night Cricket Chirp!
   * Anchored in distant desert patches around the dunes/rocks so turning your head pans them smoothly
   * left/right, and walking away or stepping indoors naturally softens & distances them!
   */
  _triggerSpatialCricket() {
    if (!this.unlocked || !this.ctx) return;
    const patches = this._spatialSpots.filter((s) => s.type === 'cricket');
    if (patches.length === 0) return;

    const spot = patches[Math.floor(Math.random() * patches.length)];
    const now = this.ctx.currentTime;
    const baseFreq = 3750 + Math.random() * 580; // Warmer, softer natural cricket fundamental
    const pulses = 3 + Math.floor(Math.random() * 2);
    const pulseGap = 0.056;
    const peakAmp = 0.048 * (1.0 - this.indoorFactor * 0.72);
    if (peakAmp < 0.004) return;

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = baseFreq;

    // Soft natural bandpass + warm rolloff so it sounds organic & distant, NEVER harsh clicks!
    const filt = this.ctx.createBiquadFilter();
    filt.type = 'bandpass';
    filt.frequency.value = baseFreq;
    filt.Q.value = 6.5;

    const env = this.ctx.createGain();
    env.gain.setValueAtTime(0.0001, now);
    for (let i = 0; i < pulses; i++) {
      const t0 = now + i * pulseGap;
      env.gain.setValueAtTime(0.0001, t0);
      env.gain.linearRampToValueAtTime(peakAmp, t0 + 0.012);
      env.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.044);
    }

    const panner = this._createPannerAt(
      spot.x + (Math.random() - 0.5) * 6,
      spot.y + 0.5,
      spot.z + (Math.random() - 0.5) * 6,
      8.0,
      95.0,
      1.35
    );

    osc.connect(filt);
    filt.connect(env);
    env.connect(panner);
    panner.connect(this.masterGain);

    const totalDur = pulses * pulseGap + 0.06;
    osc.start(now);
    osc.stop(now + totalDur);
  }

  /**
   * Atmospheric 3D Wildlife & Desert Environmental One-Shots:
   * - Stage 1/2: Distant desert falcon/hawk cry soaring overhead in 3D space
   * - Stage 3: Soft singing-sand low desert harmonic swell from the dune sea below
   * - Stage 4: Soft distant desert owl hoot across the moonlit valley
   */
  _triggerSpatialWildlife(playerPos) {
    if (!this.unlocked || !this.ctx || !playerPos) return;
    const now = this.ctx.currentTime;
    const ang = Math.random() * Math.PI * 2;
    const dist = 28 + Math.random() * 24;
    const wx = playerPos.x + Math.cos(ang) * dist;
    const wz = playerPos.z + Math.sin(ang) * dist;

    if (this.stageId === 1 || this.stageId === 2) {
      // Distant desert hawk cry overhead
      const osc = this.ctx.createOscillator();
      const filt = this.ctx.createBiquadFilter();
      const g = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(2150, now);
      osc.frequency.exponentialRampToValueAtTime(1420, now + 0.75);
      filt.type = 'bandpass';
      filt.frequency.value = 1800;
      filt.Q.value = 4.5;
      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(0.045, now + 0.08);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.82);

      const panner = this._createPannerAt(wx, playerPos.y + 24, wz, 14, 140, 1.1);
      osc.connect(filt);
      filt.connect(g);
      g.connect(panner);
      panner.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.88);
    } else if (this.stageId === 3) {
      // Eerie natural "singing dunes" warm resonant desert hum rising from the valley below!
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(104, now);
      osc.frequency.linearRampToValueAtTime(110, now + 1.8);
      osc.frequency.linearRampToValueAtTime(98, now + 3.6);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(0.042, now + 1.2);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 3.7);
      const panner = this._createPannerAt(wx, playerPos.y - 25, wz, 18, 160, 1.0);
      osc.connect(g);
      g.connect(panner);
      panner.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 3.8);
    } else if (this.stageId === 4 && this.indoorFactor < 0.5) {
      // Soft distant desert owl double-hoot in 3D night space
      [0, 0.52].forEach((off, i) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(i === 0 ? 410 : 375, now + off);
        osc.frequency.exponentialRampToValueAtTime(i === 0 ? 360 : 325, now + off + 0.36);
        g.gain.setValueAtTime(0.0001, now + off);
        g.gain.linearRampToValueAtTime(0.045, now + off + 0.06);
        g.gain.exponentialRampToValueAtTime(0.0001, now + off + 0.42);
        const panner = this._createPannerAt(wx, playerPos.y + 8, wz, 12, 120, 1.2);
        osc.connect(g);
        g.connect(panner);
        panner.connect(this.masterGain);
        osc.start(now + off);
        osc.stop(now + off + 0.46);
      });
    }
  }

  /**
   * Updates 3D AudioListener pose + stereo wind beds + spatialized wildlife/crickets!
   */
  updateAmbience(dt, indoorFactor, elapsed, camera = null, playerPos = null) {
    if (!this.unlocked || !this.ctx || !this.windGain || this.ctx.state !== 'running') return;
    this.indoorFactor += (indoorFactor - this.indoorFactor) * Math.min(1, dt * 4.5);

    // 1. Update 3D Web Audio Listener orientation & position at 15Hz
    this._listenerAccum += dt;
    if (camera && this._listenerAccum >= 0.066) {
      this._listenerAccum = 0;
      const listener = this.ctx.listener;
      const now = this.ctx.currentTime;
      const p = camera.position;
      if (listener.positionX) {
        listener.positionX.setValueAtTime(p.x, now);
        listener.positionY.setValueAtTime(p.y, now);
        listener.positionZ.setValueAtTime(p.z, now);
      } else if (listener.setPosition) {
        listener.setPosition(p.x, p.y, p.z);
      }
      // Forward vector from camera matrixWorld (-Z column)
      const e = camera.matrixWorld.elements;
      const fx = -e[8], fy = -e[9], fz = -e[10];
      const ux = e[4], uy = e[5], uz = e[6];
      if (listener.forwardX) {
        listener.forwardX.setValueAtTime(fx, now);
        listener.forwardY.setValueAtTime(fy, now);
        listener.forwardZ.setValueAtTime(fz, now);
        listener.upX.setValueAtTime(ux, now);
        listener.upY.setValueAtTime(uy, now);
        listener.upZ.setValueAtTime(uz, now);
      } else if (listener.setOrientation) {
        listener.setOrientation(fx, fy, fz, ux, uy, uz);
      }
    }

    // 2. Stage 4 Spatialized Night Crickets (organic staggered intervals from 3D world patches!)
    if (this.stageId === 4) {
      this._cricketTimer -= dt;
      if (this._cricketTimer <= 0) {
        this._triggerSpatialCricket();
        this._cricketTimer = 0.65 + Math.random() * 1.45;
      }
    }

    // 3. Spatialized desert wildlife & ambient world calls
    this._wildlifeTimer -= dt;
    if (this._wildlifeTimer <= 0) {
      this._triggerSpatialWildlife(playerPos);
      this._wildlifeTimer = 9.0 + Math.random() * 10.0;
    }

    // 4. Stereo wind bed modulation at 8Hz
    this._ambAccum += dt;
    if (this._ambAccum < 0.125) return;
    this._ambAccum = 0;

    const now = this.ctx.currentTime;
    const storm = this.stormIntensity || 0;
    const indoorAtten = 1.0 - this.indoorFactor * 0.65;
    const gust = 0.85 + 0.2 * Math.sin(elapsed * 0.39) + 0.12 * Math.sin(elapsed * 0.98);

    let dayWindVol = 0;
    let freqL = 240;
    let freqR = 290;
    let canyonVol = 0;
    let summitVol = 0;
    let nightBreezeVol = 0;

    if (this.stageId === 1) {
      dayWindVol = 0.19 * gust;
      freqL = 230;
      freqR = 285;
    } else if (this.stageId === 2) {
      dayWindVol = (0.17 + storm * 0.26) * gust;
      freqL = 275 + storm * 110;
      freqR = 335 + storm * 120;
      canyonVol = (0.15 + storm * 0.14) * (0.8 + 0.2 * Math.sin(elapsed * 0.54));
      this.canyonResFilter.frequency.setTargetAtTime(320 + Math.sin(elapsed * 0.3) * 75, now, 0.25);
    } else if (this.stageId === 3) {
      dayWindVol = 0.16 * gust;
      freqL = 295;
      freqR = 365;
      summitVol = 0.28 * (0.82 + 0.2 * Math.sin(elapsed * 0.62));
    } else {
      dayWindVol = 0.02;
      nightBreezeVol = 0.14 * (0.86 + 0.14 * Math.sin(elapsed * 0.26)) * indoorAtten;
    }

    this.windGain.gain.setTargetAtTime(dayWindVol * indoorAtten, now, 0.22);
    this.windFilterL.frequency.setTargetAtTime(freqL * indoorAtten, now, 0.22);
    this.windFilterR.frequency.setTargetAtTime(freqR * indoorAtten, now, 0.22);
    this.canyonResGain.gain.setTargetAtTime(canyonVol * indoorAtten, now, 0.25);
    this.summitRushGain.gain.setTargetAtTime(summitVol * indoorAtten, now, 0.25);
    this.nightBreezeGain.gain.setTargetAtTime(nightBreezeVol, now, 0.25);
  }

  playFootstep(surface = 'sand', isRunning = false) {
    if (!this.unlocked || !this.ctx || !this._noiseBuffer) return;
    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuffer;
    const offset = Math.random() * 2.4;

    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    const amp = isRunning ? 0.21 : 0.14;

    if (surface === 'stone') {
      filter.type = 'bandpass';
      filter.frequency.value = 720 + Math.random() * 190;
      filter.Q.value = 2.1;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp * 1.15, now + 0.007);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.088);

      const thud = this.ctx.createOscillator();
      const thudGain = this.ctx.createGain();
      thud.frequency.setValueAtTime(118, now);
      thud.frequency.exponentialRampToValueAtTime(48, now + 0.055);
      thudGain.gain.setValueAtTime(amp * 0.48, now);
      thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      thud.connect(thudGain);
      thudGain.connect(this.masterGain);
      thud.start(now);
      thud.stop(now + 0.065);
    } else if (surface === 'sabkha') {
      filter.type = 'highpass';
      filter.frequency.value = 1850 + Math.random() * 480;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp * 1.08, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

      const crust = this.ctx.createOscillator();
      const crustG = this.ctx.createGain();
      crust.type = 'triangle';
      crust.frequency.setValueAtTime(210 + Math.random() * 40, now);
      crust.frequency.exponentialRampToValueAtTime(75, now + 0.045);
      crustG.gain.setValueAtTime(amp * 0.34, now);
      crustG.gain.exponentialRampToValueAtTime(0.001, now + 0.052);
      crust.connect(crustG);
      crustG.connect(this.masterGain);
      crust.start(now);
      crust.stop(now + 0.06);
    } else if (surface === 'rock') {
      filter.type = 'bandpass';
      filter.frequency.value = 1380 + Math.random() * 420;
      filter.Q.value = 1.45;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp * 1.05, now + 0.014);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    } else {
      filter.type = 'bandpass';
      filter.frequency.value = 920 + Math.random() * 320;
      filter.Q.value = 0.82;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp * 0.94, now + 0.032);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.175);
    }

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    src.start(now, offset, 0.21);
  }

  playFlashlightClick(isOn = true) {
    if (!this.unlocked || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const g1 = this.ctx.createGain();
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(isOn ? 1450 : 1120, now);
    osc1.frequency.exponentialRampToValueAtTime(isOn ? 420 : 280, now + 0.022);
    g1.gain.setValueAtTime(0.13, now);
    g1.gain.exponentialRampToValueAtTime(0.001, now + 0.026);
    osc1.connect(g1);
    g1.connect(this.masterGain);
    osc1.start(now);
    osc1.stop(now + 0.03);

    const t2 = now + 0.018;
    const osc2 = this.ctx.createOscillator();
    const g2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(isOn ? 2350 : 1680, t2);
    osc2.frequency.exponentialRampToValueAtTime(isOn ? 680 : 420, t2 + 0.03);
    g2.gain.setValueAtTime(0.15, t2);
    g2.gain.exponentialRampToValueAtTime(0.001, t2 + 0.036);
    osc2.connect(g2);
    g2.connect(this.masterGain);
    osc2.start(t2);
    osc2.stop(t2 + 0.04);
  }

  playDiscoverySFX(kind = 'paper') {
    if (!this.unlocked || !this.ctx) return;
    const now = this.ctx.currentTime;

    if (kind === 'paper' && this._noiseBuffer) {
      const n = this.ctx.createBufferSource();
      n.buffer = this._noiseBuffer;
      const hp = this.ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 1900;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.001, now);
      g.gain.linearRampToValueAtTime(0.15, now + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
      n.connect(hp);
      hp.connect(g);
      g.connect(this.masterGain);
      n.start(now, 0.4, 0.3);
    } else if (kind === 'metal') {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1180, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.22);
      g.gain.setValueAtTime(0.12, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (kind === 'flame' && this._noiseBuffer) {
      const n = this.ctx.createBufferSource();
      n.buffer = this._noiseBuffer;
      const bp = this.ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(320, now);
      bp.frequency.exponentialRampToValueAtTime(980, now + 0.45);
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(0.001, now);
      g.gain.linearRampToValueAtTime(0.18, now + 0.14);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.72);
      n.connect(bp);
      bp.connect(g);
      g.connect(this.masterGain);
      n.start(now, 0.2, 0.8);
    }

    // Subtle Arabian Hijaz plucked oud harmonic accent
    [293.7, 369.99, 440.0].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const filt = this.ctx.createBiquadFilter();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + idx * 0.09);
      filt.type = 'lowpass';
      filt.frequency.setValueAtTime(1400, now + idx * 0.09);
      filt.frequency.exponentialRampToValueAtTime(420, now + idx * 0.09 + 0.9);
      g.gain.setValueAtTime(0.001, now + idx * 0.09);
      g.gain.linearRampToValueAtTime(0.055, now + idx * 0.09 + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.09 + 1.15);
      osc.connect(filt);
      filt.connect(g);
      g.connect(this.masterGain);
      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 1.2);
    });
  }

  playTextBlip(style = 'thought', char = '') {
    if (!this.unlocked || !this.ctx) return;
    if (!char || /[\s،.؟!…—\-:]/.test(char)) return;
    this._blipCounter++;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    const scale = style === 'night' ? [220, 247, 262, 294, 262] : [262, 277, 311, 330, 294, 277];
    osc.type = 'triangle';
    const base = scale[this._blipCounter % scale.length];
    const jitter = (Math.random() - 0.5) * 14;
    osc.frequency.setValueAtTime(base + jitter, now);
    osc.frequency.exponentialRampToValueAtTime((base + jitter) * 0.89, now + 0.042);

    filter.type = 'bandpass';
    filter.frequency.value = style === 'night' ? 760 : 920;
    filter.Q.value = 1.1;

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.068, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.046);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.052);
  }

  playStageTransition(stageId = 1) {
    if (!this.unlocked || !this.ctx) return;
    const now = this.ctx.currentTime;
    const chords = {
      1: [146.8, 220.0, 293.7],
      2: [130.8, 196.0, 277.2],
      3: [123.5, 185.0, 246.9, 293.7],
      4: [110.0, 164.8, 220.0, 261.6],
    };
    const freqs = chords[stageId] || chords[1];
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      osc.type = idx === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(f, now);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(idx === 0 ? 280 : 680, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.048 / (idx * 0.35 + 1), now + 0.55);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.1);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 3.2);
    });
  }
}
