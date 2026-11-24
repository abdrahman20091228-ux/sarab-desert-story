/**
 * Strictly Sequential Guided Arabic Story Engine — SARAB Chapter I (الظهر -> العصر)
 * - Displays ONLY ONE crystal-clear current mission at top-center ("المهمة: ...") + live distance
 * - Future objectives stay completely invisible and locked until the current objective is completed
 * - Cohesive, gripping mystery arc with smooth continuous lighting shifts (no jarring cuts!)
 */

const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export function toArabicDigits(input) {
  return String(input).replace(/\d/g, (d) => ARABIC_DIGITS[Number(d)]);
}

const MISSIONS = [
  {
    id: 'compass',
    objective: 'تفحّص البوصلة الملقاة على الصخرة القريبة لمعرفة اتجاهك',
    tag: 'المهمة ١ من ٦ — الصحراء المفتوحة',
    title: 'بوصلة نحاسية محطمة',
    sfx: 'paper',
    inspectText:
      'الزجاج مشقوق بفعل الشمس، لكن الإبرة لم تتوقف... إنها ترتجف بعناد وتشير مباشرةً نحو برج الهوائي فوق البيت المهجور بدلاً من الشمال.\n\nنُقش على ظهرها: «محطة الرصد — القطاع ٧».',
    lines: [
      { text: 'إبرة البوصلة لا تشير للشمال... شيء ما داخل ذلك البيت المهجور يجذبها بقوة.', style: 'thought' },
      { text: 'هناك آثار أقدام تقود نحو حطام سيارة مدفونة في الرمل... سأتفقدها أولاً.', style: 'thought' },
    ],
    timeTarget: 0.16,
    whisperClock: null,
  },
  {
    id: 'jeep',
    objective: 'اتبع آثار الأقدام وتفتّش حطام سيارة البعثة المدفونة في الرمل',
    tag: 'المهمة ٢ من ٦ — طريق البعثة',
    title: 'حطام سيارة الدفع الرباعي وبطاقة هوية',
    sfx: 'metal',
    inspectText:
      'السيارة غارقة في الرمال منذ أيام، ومحرّكها محترق كأن موجة كهرومغناطيسية ضربتها فجأة.\n\nعلى المقعد الأمامي وجدتَ بطاقة تعريفية تحمل صورتك أنت:\n«المهندس نادر العتيبي — قائد بعثة وادي الصمت الجيولوجية».',
    lines: [
      { text: 'هذه صورتي... اسمي نادر! لماذا لا أذكر شيئاً عن هذه الحادثة؟', style: 'thought' },
      { text: 'المعدات مفقودة من السيارة... لا بد أن الفريق نقلها إلى ساحة البيت المهجور.', style: 'thought' },
    ],
    timeTarget: 0.34,
    whisperClock: '١:٢٥ ظهراً',
    whisperPhase: 'بعد الظهيرة — وهج الرمال يشتد',
  },
  {
    id: 'canteen',
    objective: 'ادخل ساحة البيت المهجور وتفقّد حقيبة البعثة تحت المظلة',
    tag: 'المهمة ٣ من ٦ — فناء البيت المهجور',
    title: 'حقيبة البعثة وتحذير مكتوب بعجلة',
    sfx: 'paper',
    inspectText:
      'الزمزمية جافة تماماً. لكن داخل جيب الحقيبة ورقة مطوية بيدٍ مرتجفة:\n\n«نادر... النبضة الصوتية القادمة من أسفل البيت تمحو الذاكرة القريبة! إذا استيقظتَ تائهاً في الكثبان، ادخل غرفة مكتبك بالداخل واقرأ دفترك فوراً قبل حلول العصر.»',
    lines: [
      { text: 'النبضة تحت البيت هي سبب فقدان ذاكرتي! وأنا من كتب التحذير لنفسي...', style: 'thought' },
      { text: 'يجب أن أدخل البيت الآن وأجد دفتري في غرفة المكتب اليسرى.', style: 'thought' },
    ],
    timeTarget: 0.52,
    whisperClock: '٢:٣٥ بعد الظهر',
    whisperPhase: 'الشمس تبدأ بالميل غرباً',
  },
  {
    id: 'journal',
    objective: 'ادخل غرفة المكتب (الجهة اليسرى داخل البيت) واقرأ دفتر ملاحظاتك',
    tag: 'المهمة ٤ من ٦ — مكتب البحث الداخلي',
    title: 'دفتر ملاحظات نادر — اليوم السادس',
    sfx: 'paper',
    inspectText:
      '«عثرنا على ممرٍّ خرسانيٍّ قديم أسفل هذا البيت، يعلوه باب قبوٍ حديديٍّ وسط الردهة.\n\nنزل زملائي الثلاثة بالأمس لتتبع مصدر الإشارة ثم أُغلق القفل المغناطيسي عليهم!\nلا يُفتح القبو إلا بتشغيل المذياع على التردد ٤٤ — لكن برج الهوائي مفصول. اخرج للباحة الخلفية قرب النخيل وارفع قاطع البرج أولاً.»',
    lines: [
      { text: 'زملائي محاصرون في القبو تحت قدميّ الآن... منذ الأمس!', style: 'journal' },
      { text: 'سأخرج من الباب الخلفي نحو النخيل وأرفع قاطع برج الهوائي فوراً.', style: 'thought' },
    ],
    timeTarget: 0.74,
    whisperClock: '٣:٤٠ قبيل العصر',
    whisperPhase: 'الرمال تكتسي بلون ذهبي دافئ',
  },
  {
    id: 'antenna_box',
    objective: 'اخرج من الباب الخلفي نحو النخيل وشغّل قاطع برج الهوائي',
    tag: 'المهمة ٥ من ٦ — الباحة الخلفية',
    title: 'إعادة التيار الاحتياطي من توربينة الرياح',
    sfx: 'metal',
    inspectText:
      'دفعتَ الذراع المعدنية الثقيلة للأعلى بقوة!\n\nدارت توربينة الرياح فوق السطح بأزيزٍ كهربائي واضح، وعاد التيار الاحتياطي يتدفق نحو غرفة الاتصالات داخل البيت.',
    lines: [
      { text: 'نجحت! الكابلات تنبض بالكهرباء الآن... والشمس تقترب سريعاً من العصر.', style: 'thought' },
      { text: 'عليّ الركض إلى غرفة الاتصالات بالجهة اليمنى داخل البيت وتشغيل المذياع!', style: 'thought' },
    ],
    timeTarget: 0.90,
    whisperClock: '٤:١٨ عصراً',
    whisperPhase: 'وقت العصر — ظلال طويلة فوق الكثبان',
  },
  {
    id: 'radio',
    objective: 'عُد إلى غرفة الاتصالات (الجهة اليمنى داخل البيت) وشغّل المذياع',
    tag: 'المهمة ٦ من ٦ — لحظة الحقيقة (العصر)',
    title: 'التردد ٤٤ — النداء من تحت الرمال',
    sfx: 'radio',
    inspectText:
      'توهّج مؤشر المذياع بضوء كهرماني ساطع وسط غبار العصر الذهبي، واخترق صوت مألوف موجات التشويش!\n\nوفي اللحظة نفسها، دوّى صوت انفتاح القفل المغناطيسي لباب القبو الحديدي في الردهة الرئيسية خلفك...',
    lines: [
      { text: '«... نادر! هل تسمعني؟ نحن بخير أسفل القبو... لكن لا تبقَ في الخارج بعد الغروب...»', style: 'radio' },
      { text: '«... الشيء الذي أيقظناه في الرمال يستفيق كل مساء... انزل إلينا الآن!»', style: 'radio' },
      { text: 'انفتح باب القبو أخيراً... لقد حلّ العصر، والرحلة الحقيقية تبدأ الآن.', style: 'thought' },
    ],
    timeTarget: 1.0,
    whisperClock: '٤:٤٥ عصراً',
    whisperPhase: 'العصر الذهبي — ختام الفصل الأول',
  },
];

export class StoryManager {
  constructor(audio, skyLighting, house, cutscenes, ui, dustStorm = null) {
    this.audio = audio;
    this.sky = skyLighting;
    this.house = house;
    this.cutscenes = cutscenes;
    this.ui = ui;
    this.dustStorm = dustStorm;

    this.missionIndex = 0;
    this.chapterComplete = false;
    this._pendingEnding = false;
    this.freeRoam = false;

    this.queue = [];
    this.activeLine = null;
    this.charIndex = 0;
    this.charTimer = 0;
    this.holdTimer = 0;
    this.charInterval = 0.042;

    this.subContainer = document.getElementById('subtitle-container');
    this.subSpeaker = document.getElementById('subtitle-speaker');
    this.subText = document.getElementById('subtitle-text');
  }

  reset() {
    this.missionIndex = 0;
    this.chapterComplete = false;
    this._pendingEnding = false;
    this.freeRoam = false;
    this.queue = [];
    this.activeLine = null;
    this.house.setAntennaPowered(false);
    this.sky.setTimeOfDay(0.0, true);
    this.dustStorm?.setTargetIntensity(0.0, true);
    this.hideSubtitle();
    this._activateCurrentMission();
  }

  getCurrentMission() {
    if (this.missionIndex >= MISSIONS.length) return null;
    return MISSIONS[this.missionIndex];
  }

  _activateCurrentMission() {
    const m = this.getCurrentMission();
    if (!m) {
      this.house.setActiveMissionId(null);
      this.ui.updateMission('اكتمل الفصل الأول — تجوّل بحرية في وقت العصر', null, null);
      return;
    }
    this.house.setActiveMissionId(m.id);
    this.ui.updateMission(m.objective, null, 0);
  }

  enqueueLine(text, style = 'thought', speaker = '') {
    this.queue.push({ text, style, speaker });
    if (!this.activeLine) this._startNextLine();
  }

  sayImmediate(text, style = 'thought', speaker = '') {
    this.queue = [];
    this.activeLine = null;
    this.enqueueLine(text, style, speaker);
  }

  _startNextLine() {
    if (this.queue.length === 0) {
      this.activeLine = null;
      this.hideSubtitle();
      if (this._pendingEnding && !this.freeRoam) {
        this._pendingEnding = false;
        this.cutscenes.startEndingVista();
        this.ui.showEndingScreen();
      }
      return;
    }
    this.activeLine = this.queue.shift();
    this.charIndex = 0;
    this.charTimer = 0;
    this.holdTimer = 0;

    if (this.subContainer && this.subText) {
      this.subContainer.classList.remove('hidden');
      this.subText.textContent = '';
      this.subText.classList.add('typing');

      if (this.subSpeaker) {
        if (this.activeLine.speaker) {
          this.subSpeaker.textContent = this.activeLine.speaker;
          this.subSpeaker.classList.remove('hidden');
        } else if (this.activeLine.style === 'radio') {
          this.subSpeaker.textContent = 'المذياع — التردد ٤٤';
          this.subSpeaker.classList.remove('hidden');
        } else {
          this.subSpeaker.classList.add('hidden');
        }
      }
    }
  }

  hideSubtitle() {
    if (this.subContainer) this.subContainer.classList.add('hidden');
    if (this.subText) this.subText.classList.remove('typing');
  }

  handleInteract(interactable) {
    const m = this.getCurrentMission();
    // STRICT SEQUENTIAL GATING: only allow interacting with the exact active mission!
    if (!interactable || !m || interactable.id !== m.id) return;

    if (m.sfx === 'metal') this.audio.playMetalSwitch();
    else if (m.sfx === 'radio') this.audio.playRadioBurst();
    else this.audio.playPaperRustle();

    if (m.id === 'antenna_box') {
      this.house.setAntennaPowered(true);
    } else if (m.id === 'radio') {
      this.house.unlockHatch();
    }

    this.ui.openInspectModal(m.tag, m.title, m.inspectText, () => {
      // Smooth seamless daylight progression without jarring black screens!
      if (m.whisperClock) {
        this.cutscenes.smoothAdvanceTime(m.whisperClock, m.whisperPhase, m.timeTarget);
      } else {
        this.sky.setTimeOfDay(Math.max(this.sky.targetTimeOfDay, m.timeTarget), false);
      }

      // Dramatic Desert Dust Storm story beat: rises after reading journal (Mission 4 -> 5), calms on antenna restore!
      if (m.id === 'journal' && this.dustStorm) {
        this.dustStorm.setTargetIntensity(0.88, false);
        this.enqueueLine('الريح تشتد وعاصفة ترابية تهبّ في الخارج... اتبع سهم البوصلة نحو قاطع الهوائي!', 'thought');
      } else if (m.id === 'antenna_box' && this.dustStorm) {
        this.dustStorm.setTargetIntensity(0.0, false);
      }

      for (const line of m.lines) {
        this.enqueueLine(line.text, line.style);
      }

      this.missionIndex++;
      this._activateCurrentMission();

      if (m.id === 'radio' && !this.chapterComplete) {
        this.chapterComplete = true;
        this._pendingEnding = true;
      }
    });
  }

  getClockDisplay(t = this.sky.timeOfDay) {
    const totalMin = Math.round(735 + t * 270);
    const h24 = Math.floor(totalMin / 60);
    const min = totalMin % 60;
    const h12 = h24 > 12 ? h24 - 12 : h24;
    const mm = min < 10 ? `0${min}` : `${min}`;
    const suffix = h24 >= 15 ? 'عصراً' : 'ظهراً';
    return `${toArabicDigits(h12)}:${toArabicDigits(mm)} ${suffix}`;
  }

  update(dt, isGameplay, playerPos, playerYaw = 0) {
    // Organic ~5-minute (300s) Noon -> Asr continuous sun drift
    if (isGameplay && !this.freeRoam && this.sky.targetTimeOfDay < 0.96) {
      this.sky.targetTimeOfDay = Math.min(0.96, this.sky.targetTimeOfDay + dt / 320);
    }

    // Throttle HUD DOM updates (compass arrow, distance, clock) to 10Hz instead of 60-120Hz!
    this._hudAccum = (this._hudAccum || 0.2) + dt;
    if (this._hudAccum >= 0.1) {
      this._hudAccum = 0;
      const activeTarget = this.house.getActiveInteractable();
      const m = this.getCurrentMission();
      if (isGameplay && m && activeTarget && playerPos) {
        const dx = activeTarget.worldPos.x - playerPos.x;
        const dz = activeTarget.worldPos.z - playerPos.z;
        const distMeters = Math.max(1, Math.round(Math.hypot(dx, dz)));
        const targetAngle = Math.atan2(-dx, -dz);
        let relRad = playerYaw - targetAngle;
        while (relRad > Math.PI) relRad -= Math.PI * 2;
        while (relRad < -Math.PI) relRad += Math.PI * 2;
        const arrowDeg = Math.round((relRad * 180) / Math.PI);
        this.ui.updateMission(m.objective, `${toArabicDigits(distMeters)}م`, arrowDeg);
      }

      this.ui.updateClock(this.getClockDisplay(this.sky.timeOfDay), this.sky.timeOfDay);
    }

    // Typewriter Subtitle Update + Procedural Character Blips
    if (this.activeLine) {
      const full = this.activeLine.text;
      if (this.charIndex < full.length) {
        this.charTimer += dt;
        while (this.charTimer >= this.charInterval && this.charIndex < full.length) {
          this.charTimer -= this.charInterval;
          const ch = full[this.charIndex];
          this.charIndex++;
          if (this.subText) this.subText.textContent = full.slice(0, this.charIndex);
          if (this.charIndex % 2 === 1) {
            this.audio.playTextBlip(this.activeLine.style, ch);
          }
        }
      } else {
        if (this.subText) this.subText.classList.remove('typing');
        this.holdTimer += dt;
        const holdDuration = Math.max(2.3, full.length * 0.042);
        if (this.holdTimer >= holdDuration) this._startNextLine();
      }
    }
  }
}
