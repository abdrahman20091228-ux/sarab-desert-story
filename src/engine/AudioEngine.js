/**
 * Procedural Web Audio Engine calibrated for Arabian Desert Narrative Experience:
 * - Iconic procedural dialogue typewriter blips (per-character speech cadence)
 * - Layered desert wind & blowing sand ambience with interior acoustic occlusion
 * - Material-aware footsteps (loose desert sand vs cracked interior stone)
 * - Cinematic SFX: wake-up tinnitus, sun glare swell, paper rustle, metal switch,
 *   analog radio static + distant Morse signal, and desert oud/drone transitions.
 */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.volume = 0.85;
    this.unlocked = false;

    // Continuous ambient nodes
    this.windGain = null;
    this.windFilterLow = null;
    this.windFilterHigh = null;
    this.indoorFactor = 0; // 0 = outdoors, 1 = indoors
    this.timeOfDay = 0;    // 0 = noon, 1 = asr

    // Radio ambient loop
    this.radioActive = false;
    this.radioGain = null;

    this._noiseBuffer = null;
    this._blipCounter = 0;
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
    this._setupDesertWind();
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

  _createNoiseBuffer(seconds) {
    const sampleRate = this.ctx.sampleRate;
    const length = Math.floor(sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    // Pink-ish noise (Paul Kellet filter) — warm & natural for desert wind & sand
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

  _setupDesertWind() {
    const now = this.ctx.currentTime;
    this.windGain = this.ctx.createGain();
    this.windGain.gain.value = 0.24;
    this.windGain.connect(this.masterGain);

    // Layer 1: Deep open desert air bed
    const src1 = this.ctx.createBufferSource();
    src1.buffer = this._noiseBuffer;
    src1.loop = true;

    this.windFilterLow = this.ctx.createBiquadFilter();
    this.windFilterLow.type = 'bandpass';
    this.windFilterLow.frequency.value = 260;
    this.windFilterLow.Q.value = 1.4;

    const gain1 = this.ctx.createGain();
    gain1.gain.value = 0.72;

    src1.connect(this.windFilterLow);
    this.windFilterLow.connect(gain1);
    gain1.connect(this.windGain);
    src1.start(now);

    // Layer 2: Soft blowing sand hiss across dunes
    const src2 = this.ctx.createBufferSource();
    src2.buffer = this._noiseBuffer;
    src2.loop = true;

    this.windFilterHigh = this.ctx.createBiquadFilter();
    this.windFilterHigh.type = 'bandpass';
    this.windFilterHigh.frequency.value = 1450;
    this.windFilterHigh.Q.value = 2.6;

    const gain2 = this.ctx.createGain();
    gain2.gain.value = 0.22;

    src2.connect(this.windFilterHigh);
    this.windFilterHigh.connect(gain2);
    gain2.connect(this.windGain);
    src2.start(now + 1.1);

    // Slow organic wind gust LFO
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.11;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 110;
    lfo.connect(lfoGain);
    lfoGain.connect(this.windFilterLow.frequency);
    lfo.start(now);

    const lfo2 = this.ctx.createOscillator();
    lfo2.type = 'sine';
    lfo2.frequency.value = 0.07;
    const lfoGain2 = this.ctx.createGain();
    lfoGain2.gain.value = 420;
    lfo2.connect(lfoGain2);
    lfoGain2.connect(this.windFilterHigh.frequency);
    lfo2.start(now);

    // Layer 3: Low storm whistle (silent unless dust storm is active)
    this.stormWhistleGain = this.ctx.createGain();
    this.stormWhistleGain.gain.value = 0.0;
    const whistleOsc = this.ctx.createOscillator();
    whistleOsc.type = 'sine';
    whistleOsc.frequency.value = 185;
    const whistleLfo = this.ctx.createOscillator();
    whistleLfo.type = 'sine';
    whistleLfo.frequency.value = 0.23;
    const whistleLfoGain = this.ctx.createGain();
    whistleLfoGain.gain.value = 38;
    whistleLfo.connect(whistleLfoGain);
    whistleLfoGain.connect(whistleOsc.frequency);
    whistleOsc.connect(this.stormWhistleGain);
    this.stormWhistleGain.connect(this.masterGain);
    whistleOsc.start(now);
    whistleLfo.start(now);

    this.stormIntensity = 0;
    this._ambAccum = 0.2;
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

  updateAmbience(dt, indoorFactor, timeOfDay, elapsed) {
    if (!this.unlocked || !this.ctx || !this.windGain || this.ctx.state !== 'running') return;
    this.indoorFactor += (indoorFactor - this.indoorFactor) * Math.min(1, dt * 4.5);
    this.timeOfDay = timeOfDay;

    // Throttle Web Audio AudioParam updates to 8Hz (every 125ms) -> saves 300-600 DSP events/sec!
    this._ambAccum += dt;
    if (this._ambAccum < 0.125) return;
    this._ambAccum = 0;

    const now = this.ctx.currentTime;
    const storm = this.stormIntensity || 0;
    const gust = 0.85 + 0.22 * Math.sin(elapsed * (0.37 + storm * 0.8)) + 0.14 * Math.sin(elapsed * (0.91 + storm * 1.4));
    const outdoorVol = (0.24 + timeOfDay * 0.09 + storm * 0.52) * gust;
    const targetVol = outdoorVol * (1 - this.indoorFactor * (0.56 - storm * 0.12));
    this.windGain.gain.setTargetAtTime(targetVol, now, 0.14);

    const lowFreq = (250 + timeOfDay * 65 + storm * 210) * (1 - this.indoorFactor * 0.42);
    const highFreq = (1520 + storm * 680) * (1 - this.indoorFactor * 0.65);
    this.windFilterLow.frequency.setTargetAtTime(lowFreq, now, 0.18);
    this.windFilterHigh.frequency.setTargetAtTime(highFreq, now, 0.18);

    if (this.stormWhistleGain) {
      const whistleVol = storm * storm * 0.055 * (1 - this.indoorFactor * 0.6);
      this.stormWhistleGain.gain.setTargetAtTime(whistleVol, now, 0.18);
    }
  }

  /**
   * Iconic procedural dialogue blip synchronized to each typed character!
   * Sounds crisp, atmospheric, and musical without ever being harsh.
   */
  playTextBlip(style = 'thought', char = '') {
    if (!this.unlocked || !this.ctx) return;
    if (!char || /[\s،.؟!…—\-:]/.test(char)) return;

    this._blipCounter++;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    // Subtle Hijaz/desert-inspired micro-pitch cadence
    const thoughtScale = [262, 277, 311, 330, 294, 277];
    const journalScale = [349, 370, 415, 392, 349];
    const radioScale = [520, 610, 480, 680, 560];

    if (style === 'radio') {
      osc.type = 'sawtooth';
      const base = radioScale[this._blipCounter % radioScale.length];
      osc.frequency.setValueAtTime(base + (Math.random() - 0.5) * 35, now);
      filter.type = 'bandpass';
      filter.frequency.value = 1450;
      filter.Q.value = 3.2;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.055, now + 0.006);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.048);
    } else if (style === 'journal') {
      osc.type = 'triangle';
      const base = journalScale[this._blipCounter % journalScale.length];
      osc.frequency.setValueAtTime(base + (Math.random() - 0.5) * 14, now);
      filter.type = 'lowpass';
      filter.frequency.value = 1350;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.07, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.046);
    } else {
      // Protagonist inner monologue: warm tactile woody-digital narrative blip
      osc.type = 'triangle';
      const base = thoughtScale[this._blipCounter % thoughtScale.length];
      const jitter = (Math.random() - 0.5) * 18;
      osc.frequency.setValueAtTime(base + jitter, now);
      osc.frequency.exponentialRampToValueAtTime((base + jitter) * 0.88, now + 0.042);

      filter.type = 'bandpass';
      filter.frequency.value = 920;
      filter.Q.value = 1.1;

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.088, now + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.048);
    }

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.055);
  }

  playFootstep(surface = 'sand', isRunning = false) {
    if (!this.unlocked || !this.ctx || !this._noiseBuffer) return;
    const now = this.ctx.currentTime;

    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuffer;
    const offset = Math.random() * 2.4;

    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    const amp = isRunning ? 0.24 : 0.16;

    if (surface === 'stone') {
      // Crisp dusty stone tile tap indoors
      filter.type = 'bandpass';
      filter.frequency.value = 680 + Math.random() * 190;
      filter.Q.value = 2.0;

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp * 1.15, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      // Subtle low heel thud
      const thud = this.ctx.createOscillator();
      const thudGain = this.ctx.createGain();
      thud.frequency.setValueAtTime(115, now);
      thud.frequency.exponentialRampToValueAtTime(48, now + 0.06);
      thudGain.gain.setValueAtTime(amp * 0.5, now);
      thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);
      thud.connect(thudGain);
      thudGain.connect(this.masterGain);
      thud.start(now);
      thud.stop(now + 0.07);
    } else {
      // Soft loose desert sand sink & granular crunch
      filter.type = 'bandpass';
      filter.frequency.value = 950 + Math.random() * 340;
      filter.Q.value = 0.85;

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(amp, now + 0.032);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    }

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    src.start(now, offset, 0.22);
  }

  playWakeUpTinnitus() {
    if (!this.unlocked || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(3400, now);
    osc.frequency.exponentialRampToValueAtTime(2600, now + 3.2);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.032, now + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 4.0);
  }

  playSunGlareSwell() {
    if (!this.unlocked || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 0.7);
    osc.frequency.exponentialRampToValueAtTime(140, now + 1.8);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.09, now + 0.55);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.9);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 2.0);
  }

  playPaperRustle() {
    if (!this.unlocked || !this.ctx || !this._noiseBuffer) return;
    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1800;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    src.start(now, 0.5, 0.28);
  }

  playMetalSwitch() {
    if (!this.unlocked || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(65, now + 0.14);
    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.2);

    // Electrical hum surge
    const hum = this.ctx.createOscillator();
    const humGain = this.ctx.createGain();
    hum.type = 'sawtooth';
    hum.frequency.setValueAtTime(60, now + 0.12);
    humGain.gain.setValueAtTime(0.001, now + 0.12);
    humGain.gain.linearRampToValueAtTime(0.05, now + 0.35);
    humGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
    hum.connect(humGain);
    humGain.connect(this.masterGain);
    hum.start(now + 0.12);
    hum.stop(now + 1.25);
  }

  playRadioBurst() {
    if (!this.unlocked || !this.ctx || !this._noiseBuffer) return;
    const now = this.ctx.currentTime;

    // Static crackle
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1600, now);
    filter.frequency.linearRampToValueAtTime(2600, now + 0.8);
    filter.frequency.linearRampToValueAtTime(1200, now + 1.8);
    filter.Q.value = 3.5;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.12);
    gain.gain.setValueAtTime(0.15, now + 1.6);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.4);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    src.start(now, 0.2, 2.5);

    // Eerie Morse-like carrier beeps (S-A-R)
    const pattern = [0.25, 0.45, 0.65, 1.05, 1.45];
    pattern.forEach((offset, idx) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 780;
      const dur = idx >= 3 ? 0.24 : 0.11;
      g.gain.setValueAtTime(0.001, now + offset);
      g.gain.linearRampToValueAtTime(0.06, now + offset + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, now + offset + dur);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(now + offset);
      osc.stop(now + offset + dur + 0.02);
    });
  }

  /**
   * Deep atmospheric desert drone / Hijaz chord for Time-Skip transitions & Chapter Climax.
   */
  playDesertSting(dramatic = false) {
    if (!this.unlocked || !this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = dramatic ? [110, 164.8, 220, 233.1] : [146.8, 220, 293.7];
    const dur = dramatic ? 4.4 : 2.6;

    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      osc.type = idx === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(f, now);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(idx === 0 ? 320 : 780, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.055 / (idx * 0.35 + 1), now + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + dur + 0.1);
    });
  }
}
