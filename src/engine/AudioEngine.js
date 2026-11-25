/**
 * Procedural 4-Stage Desert Audio Engine — SARAB v5.0
 * Completely transforms the soundscape across every stage of the journey:
 *  - Stage 1 (Noon Plains): Open midday desert wind + high fine drifting sand hiss
 *  - Stage 2 (Afternoon Canyon): Hollow resonant canyon wall echo + soft periodic dust gusts
 *  - Stage 3 (Sunset Summit): High-altitude ridge wind rush + deep alpine-desert sub-rumble
 *  - Stage 4 (Starry Night): Calm cool night breeze + multi-voice procedural night crickets (صراصير الليل)
 *    that softly attenuate when entering the Abandoned House!
 * - Surface-dependent footsteps: 'sand' | 'sabkha' (crisp dry salt crust!) | 'rock' (canyon gravel!) | 'stone'
 * - Crisp tactile mechanical Flashlight toggle click (`playFlashlightClick`)
 * - Poetic desert dialogue blips & stage transition chords
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

    // Continuous ambient graph nodes
    this.windGain = null;
    this.windFilterLow = null;
    this.windFilterHigh = null;
    this.canyonResGain = null;
    this.canyonResFilter = null;
    this.summitRushGain = null;
    this.nightBreezeGain = null;
    this.cricketBusGain = null;

    this._noiseBuffer = null;
    this._blipCounter = 0;
    this._ambAccum = 0.2;
    this._cricketTimer = 0.35;
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
    this._setupStageAmbienceGraph();
    this.unlocked = true;

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

  setStage(stageId) {
    this.stageId = stageId;
    this._ambAccum = 1.0; // Force immediate target transition on next tick
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

  _setupStageAmbienceGraph() {
    const now = this.ctx.currentTime;

    // 1. Base Open Desert Wind (Low air bed + high sand hiss)
    this.windGain = this.ctx.createGain();
    this.windGain.gain.value = 0.22;
    this.windGain.connect(this.masterGain);

    const src1 = this.ctx.createBufferSource();
    src1.buffer = this._noiseBuffer;
    src1.loop = true;
    this.windFilterLow = this.ctx.createBiquadFilter();
    this.windFilterLow.type = 'bandpass';
    this.windFilterLow.frequency.value = 250;
    this.windFilterLow.Q.value = 1.3;
    const g1 = this.ctx.createGain();
    g1.gain.value = 0.72;
    src1.connect(this.windFilterLow);
    this.windFilterLow.connect(g1);
    g1.connect(this.windGain);
    src1.start(now);

    const src2 = this.ctx.createBufferSource();
    src2.buffer = this._noiseBuffer;
    src2.loop = true;
    this.windFilterHigh = this.ctx.createBiquadFilter();
    this.windFilterHigh.type = 'bandpass';
    this.windFilterHigh.frequency.value = 1550;
    this.windFilterHigh.Q.value = 2.4;
    const g2 = this.ctx.createGain();
    g2.gain.value = 0.24;
    src2.connect(this.windFilterHigh);
    this.windFilterHigh.connect(g2);
    g2.connect(this.windGain);
    src2.start(now + 0.9);

    const lfo1 = this.ctx.createOscillator();
    lfo1.frequency.value = 0.11;
    const lfo1G = this.ctx.createGain();
    lfo1G.gain.value = 95;
    lfo1.connect(lfo1G);
    lfo1G.connect(this.windFilterLow.frequency);
    lfo1.start(now);

    // 2. Stage 2 Canyon Hollow Wind Formant Resonance
    const srcCanyon = this.ctx.createBufferSource();
    srcCanyon.buffer = this._noiseBuffer;
    srcCanyon.loop = true;
    this.canyonResFilter = this.ctx.createBiquadFilter();
    this.canyonResFilter.type = 'bandpass';
    this.canyonResFilter.frequency.value = 370;
    this.canyonResFilter.Q.value = 6.2; // Hollow echoing canyon walls!
    this.canyonResGain = this.ctx.createGain();
    this.canyonResGain.gain.value = 0.0;
    srcCanyon.connect(this.canyonResFilter);
    this.canyonResFilter.connect(this.canyonResGain);
    this.canyonResGain.connect(this.masterGain);
    srcCanyon.start(now + 1.7);

    // 3. Stage 3 High-Altitude Mountain Ridge Wind Rush
    const srcSummit = this.ctx.createBufferSource();
    srcSummit.buffer = this._noiseBuffer;
    srcSummit.loop = true;
    const summitFilter = this.ctx.createBiquadFilter();
    summitFilter.type = 'bandpass';
    summitFilter.frequency.value = 640;
    summitFilter.Q.value = 1.65;
    this.summitRushGain = this.ctx.createGain();
    this.summitRushGain.gain.value = 0.0;
    srcSummit.connect(summitFilter);
    summitFilter.connect(this.summitRushGain);
    this.summitRushGain.connect(this.masterGain);
    srcSummit.start(now + 2.3);

    const summitLfo = this.ctx.createOscillator();
    summitLfo.frequency.value = 0.19;
    const summitLfoG = this.ctx.createGain();
    summitLfoG.gain.value = 260;
    summitLfo.connect(summitLfoG);
    summitLfoG.connect(summitFilter.frequency);
    summitLfo.start(now);

    // 4. Stage 4 Calm Cool Night Breeze + Crickets Bus
    const srcNight = this.ctx.createBufferSource();
    srcNight.buffer = this._noiseBuffer;
    srcNight.loop = true;
    const nightFilter = this.ctx.createBiquadFilter();
    nightFilter.type = 'lowpass';
    nightFilter.frequency.value = 390;
    this.nightBreezeGain = this.ctx.createGain();
    this.nightBreezeGain.gain.value = 0.0;
    srcNight.connect(nightFilter);
    nightFilter.connect(this.nightBreezeGain);
    this.nightBreezeGain.connect(this.masterGain);
    srcNight.start(now + 0.4);

    this.cricketBusGain = this.ctx.createGain();
    this.cricketBusGain.gain.value = 0.0;
    this.cricketBusGain.connect(this.masterGain);
  }

  /**
   * Synthesizes a single authentic desert night cricket chirp burst (3-4 crisp resonant pulses around 4.3-4.7 kHz).
   */
  _triggerNightCricket() {
    if (!this.unlocked || !this.ctx || !this.cricketBusGain) return;
    const now = this.ctx.currentTime;
    const baseFreq = 4150 + Math.random() * 680;
    const pulses = 3 + Math.floor(Math.random() * 2);
    const pulseLen = 0.028;
    const pulseGap = 0.044;
    const peakAmp = 0.016 + Math.random() * 0.018;

    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const env = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.value = baseFreq;
    osc2.type = 'triangle';
    osc2.frequency.value = baseFreq * 1.995; // Subtle insect overtone

    filter.type = 'bandpass';
    filter.frequency.value = baseFreq;
    filter.Q.value = 5.0;

    env.gain.setValueAtTime(0.0001, now);
    for (let i = 0; i < pulses; i++) {
      const t0 = now + i * pulseGap;
      env.gain.setValueAtTime(0.0001, t0);
      env.gain.linearRampToValueAtTime(peakAmp, t0 + 0.006);
      env.gain.exponentialRampToValueAtTime(0.0001, t0 + pulseLen);
    }

    const totalDur = pulses * pulseGap + 0.04;
    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(env);
    env.connect(this.cricketBusGain);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + totalDur);
    osc2.stop(now + totalDur);
  }

  updateAmbience(dt, indoorFactor, elapsed) {
    if (!this.unlocked || !this.ctx || !this.windGain || this.ctx.state !== 'running') return;
    this.indoorFactor += (indoorFactor - this.indoorFactor) * Math.min(1, dt * 4.5);

    // Stage 4 Procedural Night Crickets scheduler (runs smoothly when outdoors or dimly indoors)
    if (this.stageId === 4) {
      this._cricketTimer -= dt;
      if (this._cricketTimer <= 0) {
        this._triggerNightCricket();
        this._cricketTimer = 0.42 + Math.random() * 1.15;
      }
    }

    // Throttle Web Audio AudioParam updates to 8Hz for low CPU power
    this._ambAccum += dt;
    if (this._ambAccum < 0.125) return;
    this._ambAccum = 0;

    const now = this.ctx.currentTime;
    const storm = this.stormIntensity || 0;
    const indoorAtten = 1.0 - this.indoorFactor * 0.62;
    const gust = 0.85 + 0.2 * Math.sin(elapsed * 0.42) + 0.12 * Math.sin(elapsed * 1.05);

    let dayWindVol = 0;
    let lowFreq = 250;
    let highFreq = 1520;
    let canyonVol = 0;
    let summitVol = 0;
    let nightBreezeVol = 0;
    let cricketVol = 0;

    if (this.stageId === 1) {
      // Stage 1: Open Noon Mirage Plains
      dayWindVol = 0.23 * gust;
      lowFreq = 240;
      highFreq = 1650;
    } else if (this.stageId === 2) {
      // Stage 2: Rocky Canyon + Echoing Wind + Light Dust Gusts
      dayWindVol = (0.20 + storm * 0.36) * gust;
      lowFreq = 290 + storm * 140;
      highFreq = 1480 + storm * 520;
      canyonVol = (0.19 + storm * 0.18) * (0.78 + 0.22 * Math.sin(elapsed * 0.58));
      this.canyonResFilter.frequency.setTargetAtTime(340 + Math.sin(elapsed * 0.33) * 85, now, 0.2);
    } else if (this.stageId === 3) {
      // Stage 3: High Mountain Summit Wind Rush
      dayWindVol = 0.18 * gust;
      lowFreq = 310;
      highFreq = 1850;
      summitVol = 0.34 * (0.8 + 0.25 * Math.sin(elapsed * 0.65));
    } else {
      // Stage 4: Desert Night — Calm Night Breeze + Night Crickets!
      dayWindVol = 0.025;
      nightBreezeVol = 0.16 * (0.85 + 0.15 * Math.sin(elapsed * 0.28)) * indoorAtten;
      cricketVol = 0.95 * (1.0 - this.indoorFactor * 0.72);
    }

    this.windGain.gain.setTargetAtTime(dayWindVol * indoorAtten, now, 0.22);
    this.windFilterLow.frequency.setTargetAtTime(lowFreq * indoorAtten, now, 0.22);
    this.windFilterHigh.frequency.setTargetAtTime(highFreq * (1 - this.indoorFactor * 0.55), now, 0.22);
    this.canyonResGain.gain.setTargetAtTime(canyonVol * indoorAtten, now, 0.25);
    this.summitRushGain.gain.setTargetAtTime(summitVol * indoorAtten, now, 0.25);
    this.nightBreezeGain.gain.setTargetAtTime(nightBreezeVol, now, 0.25);
    this.cricketBusGain.gain.setTargetAtTime(cricketVol, now, 0.25);
  }

  /**
   * Surface-dependent realistic footsteps:
   * - 'sand'   : Soft granular loose Arabian desert sand sink
   * - 'sabkha' : Crisp dry brittle cracked salt-flat crust crunch
   * - 'rock'   : Gritty rocky canyon floor & gravel scuff
   * - 'stone'  : Firm echoing stone floor inside ruins & abandoned house
   */
  playFootstep(surface = 'sand', isRunning = false) {
    if (!this.unlocked || !this.ctx || !this._noiseBuffer) return;
    const now = this.ctx.currentTime;

    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuffer;
    const offset = Math.random() * 2.4;

    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    const amp = isRunning ? 0.22 : 0.15;

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
      // Brittle dry salt-flat crackle + hollow dry earth tap
      filter.type = 'highpass';
      filter.frequency.value = 1850 + Math.random() * 480;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp * 1.1, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

      const crust = this.ctx.createOscillator();
      const crustG = this.ctx.createGain();
      crust.type = 'triangle';
      crust.frequency.setValueAtTime(210 + Math.random() * 40, now);
      crust.frequency.exponentialRampToValueAtTime(75, now + 0.045);
      crustG.gain.setValueAtTime(amp * 0.36, now);
      crustG.gain.exponentialRampToValueAtTime(0.001, now + 0.052);
      crust.connect(crustG);
      crustG.connect(this.masterGain);
      crust.start(now);
      crust.stop(now + 0.06);
    } else if (surface === 'rock') {
      // Rocky wadi gravel scuff + hard boot sole contact
      filter.type = 'bandpass';
      filter.frequency.value = 1380 + Math.random() * 420;
      filter.Q.value = 1.45;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp * 1.08, now + 0.014);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.125);

      const grit = this.ctx.createOscillator();
      const gritG = this.ctx.createGain();
      grit.type = 'sine';
      grit.frequency.setValueAtTime(145, now);
      grit.frequency.exponentialRampToValueAtTime(58, now + 0.05);
      gritG.gain.setValueAtTime(amp * 0.34, now);
      gritG.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
      grit.connect(gritG);
      gritG.connect(this.masterGain);
      grit.start(now);
      grit.stop(now + 0.06);
    } else {
      // Soft loose Arabian desert sand sink
      filter.type = 'bandpass';
      filter.frequency.value = 920 + Math.random() * 320;
      filter.Q.value = 0.82;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp * 0.96, now + 0.032);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.175);
    }

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    src.start(now, offset, 0.21);
  }

  /**
   * Crisp tactile mechanical two-stage click sound for the handheld flashlight switch!
   */
  playFlashlightClick(isOn = true) {
    if (!this.unlocked || !this.ctx) return;
    const now = this.ctx.currentTime;

    // Stage 1: sharp spring contact snap
    const osc1 = this.ctx.createOscillator();
    const g1 = this.ctx.createGain();
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(isOn ? 1450 : 1120, now);
    osc1.frequency.exponentialRampToValueAtTime(isOn ? 420 : 280, now + 0.022);
    g1.gain.setValueAtTime(0.14, now);
    g1.gain.exponentialRampToValueAtTime(0.001, now + 0.026);
    osc1.connect(g1);
    g1.connect(this.masterGain);
    osc1.start(now);
    osc1.stop(now + 0.03);

    // Stage 2: metallic barrel detent pop 18ms later
    const t2 = now + 0.018;
    const osc2 = this.ctx.createOscillator();
    const g2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(isOn ? 2350 : 1680, t2);
    osc2.frequency.exponentialRampToValueAtTime(isOn ? 680 : 420, t2 + 0.03);
    g2.gain.setValueAtTime(0.16, t2);
    g2.gain.exponentialRampToValueAtTime(0.001, t2 + 0.036);
    osc2.connect(g2);
    g2.connect(this.masterGain);
    osc2.start(t2);
    osc2.stop(t2 + 0.04);

    // Tiny filtered click transient burst
    if (this._noiseBuffer) {
      const n = this.ctx.createBufferSource();
      n.buffer = this._noiseBuffer;
      const hp = this.ctx.createBiquadFilter();
      hp.type = 'bandpass';
      hp.frequency.value = isOn ? 3200 : 2400;
      hp.Q.value = 1.6;
      const ng = this.ctx.createGain();
      ng.gain.setValueAtTime(0.18, now);
      ng.gain.exponentialRampToValueAtTime(0.001, now + 0.028);
      n.connect(hp);
      hp.connect(ng);
      ng.connect(this.masterGain);
      n.start(now, 0.3, 0.035);
    }
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
    gain.gain.linearRampToValueAtTime(0.072, now + 0.004);
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
    const dur = 3.2;

    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      osc.type = idx === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(f, now);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(idx === 0 ? 280 : 680, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.05 / (idx * 0.35 + 1), now + 0.55);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + dur + 0.1);
    });
  }

  playLanternWarmChime() {
    if (!this.unlocked || !this.ctx) return;
    const now = this.ctx.currentTime;
    [293.7, 370.0, 440.0, 587.3].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.14);
      gain.gain.setValueAtTime(0.0001, now + i * 0.14);
      gain.gain.linearRampToValueAtTime(0.065, now + i * 0.14 + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.14 + 2.4);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + i * 0.14);
      osc.stop(now + i * 0.14 + 2.5);
    });
  }
}
