/**
 * Arabic Narrative Engine for SARAB — Chapter 1 (الظهر -> العصر)
 * - Silent protagonist inner monologue displayed at screen bottom
 * - Synchronized procedural typewriter blip SFX per Arabic character
 * - ~5-minute organic Noon -> Asr lighting arc + cinematic Time-Skip story beats
 * - 6 interconnected environmental clues building to the Chapter 1 cliffhanger
 */

const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export function toArabicDigits(input) {
  return String(input).replace(/\d/g, (d) => ARABIC_DIGITS[Number(d)]);
}

const CLUE_DATA = {
  compass: {
    tag: 'الدليل ١ — بجانب صخرة الاستيقاظ',
    title: 'بوصلة نحاسية محطمة',
    inspectText:
      'الزجاج مشقوق بفعل حرارة الصحراء، لكن الإبرة لم تتوقف... إنها ترتجف بعناد وتشير مباشرة نحو برج الهوائي فوق البيت المهجور بدلاً من الشمال.\n\nنُقش على ظهرها: «محطة الرصد — القطاع ٧».',
    lines: [
      { text: 'إبرة البوصلة لا تشير إلى الشمال... إنها تنجذب نحو ذلك الهوائي الصدئ فوق البيت.', style: 'thought' },
      { text: 'ما الذي يبثّ مجالاً بهذه القوة وسط هذه الصحراء الميتة؟', style: 'thought' },
    ],
    timeTarget: 0.14,
    skipClock: null, // First clue advances subtly without full curtain
  },
  canteen: {
    tag: 'الدليل ٢ — مظلة البيت المهجور',
    title: 'حقيبة البعثة وزمزمية فارغة',
    inspectText:
      'الزمزمية جافة تماماً كأنها تُركت منذ أسابيع. داخل الحقيبة الجلدية بطاقة قماشية باهتة:\n\n«بعثة وادي الصمت الجيولوجية — ١٩٩٨»\nوعلى طرفها عبارة محفورة بعجلة:\n«لا تبقَ خارج الجدران إذا مال الظلّ نحو العصر.»',
    lines: [
      { text: 'بعثة وادي الصمت... لماذا يبدو هذا الاسم مألوفاً إلى هذا الحد؟', style: 'thought' },
      { text: 'تحذير من البقاء في الخارج بعد العصر... يجب أن أدخل البيت وأفتّشه قبل أن تنخفض الشمس.', style: 'thought' },
    ],
    timeTarget: 0.30,
    skipClock: '١:٢٥ ظهراً',
    skipPhase: 'بعد الظهيرة — الظلال تبدأ بالامتداد',
  },
  journal: {
    tag: 'الدليل ٣ — المكتب الخشبي داخل البيت',
    title: 'دفتر ملاحظات نادر (مبتور الصفحات)',
    inspectText:
      'الخطّ... إنه خطّ يدي أنا!\n\n«اليوم السادس — اسمي نادر. جئنا أربعة باحثين لتتبع ترددٍ صوتيٍّ غريب ينبعث من عمق الرمال. قبل ثلاث ليالٍ اختفى الجميع أثناء العاصفة.\n\nإذا استيقظتَ في الرمال وفقدتَ ذاكرتك مجدداً... فلا تصدّق السراب. أعد توصيل قاطع برج الهوائي في الجدار الشرقي، ثم افتح المذياع على التردد ٤٤.»',
    lines: [
      { text: 'اسمي نادر... وهذا خطّي! لقد كنتُ جزءاً من هذه البعثة...', style: 'journal' },
      { text: '«أعد توصيل قاطع برج الهوائي في الجدار الشرقي، ثم شغّل المذياع...»', style: 'thought' },
    ],
    timeTarget: 0.52,
    skipClock: '٢:٤٠ بعد الظهر',
    skipPhase: 'الشمس تميل غرباً فوق الكثبان',
  },
  well_photo: {
    tag: 'الدليل ٤ — البئر الجافة خلف البيت',
    title: 'صورة فوتوغرافية باهتة',
    inspectText:
      'صورة تآكلت حوافها بفعل الرمل: أربعة أشخاص يقفون مبتسمين أمام هذا البيت بالذات، وخلفهم برج الهوائي.\n\nأحدهم يقف بجوار بابٍ حديديٍّ أرضيٍّ داخل الغرفة الرئيسية، وقد كُتب خلف الصورة:\n«المفتاح المغناطيسي للقبو يعمل مع تردد المذياع ٤٤.»',
    lines: [
      { text: 'أربعة أشخاص في الصورة... وأنا أحدهم. لكن أين اختفى الثلاثة الآخرون؟', style: 'thought' },
      { text: 'الباب الحديدي في أرضية البيت... إنه مفتاح القبو السري.', style: 'thought' },
    ],
    timeTarget: 0.72,
    skipClock: '٣:٣٥ قبيل العصر',
    skipPhase: 'الرمال تكتسي بوهج ذهبي دافئ',
  },
  antenna_box: {
    tag: 'الدليل ٥ — الجدار الشرقي الخارجي',
    title: 'قاطع برج الهوائي والرياح',
    inspectText:
      'سحبتَ الذراع المعدنية الصدئة بقوة حتى استقرت في موضع التشغيل.\n\nتجاوبت التوربينات الهوائية فوق السطح بأزيزٍ كهربائيٍّ خافت، واندفع التيار الاحتياطي عبر الكابلات إلى داخل البيت.',
    lines: [
      { text: 'أخيراً! عادت الطاقة الاحتياطية من توربينة الرياح إلى داخل البيت.', style: 'thought' },
      { text: 'الشمس اقتربت من العصر... عليّ العودة الآن وتشغيل المذياع القديم.', style: 'thought' },
    ],
    timeTarget: 0.88,
    skipClock: '٤:١٥ عصراً',
    skipPhase: 'وقت العصر — ظلال طويلة وهواء دافئ',
  },
  radio: {
    tag: 'الدليل ٦ — لحظة الحقيقة (العصر)',
    title: 'المذياع التناظري — التردد ٤٤',
    inspectText:
      'توهّج مؤشر المذياع بضوء كهرماني دافئ وسط غبار العصر الذهبي، وارتفع صوت التشويش يتخلله نداء متقطع بإشارات مورس...\n\nوفجأةً، دوّى صوت قفلٍ معدني ثقيل ينفتح في أرضية الغرفة خلفك: باب القبو لم يعد مغلقاً.',
    lines: [
      { text: '«... نـادر... إذا كـنتَ تـسمع التـردد ٤٤... لا تـبقَ فـوق الرمـال بـعد الـغـروب...»', style: 'radio' },
      { text: '«... الإشارة ليست من السماء... إنها من تحت هذا البيت... انزل إلينا...»', style: 'radio' },
      { text: 'باب القبو الحديدي قد انفتح... لقد حلّ العصر، ولم يبقَ أمامي سوى النزول.', style: 'thought' },
    ],
    timeTarget: 1.0,
    skipClock: '٤:٤٥ عصراً',
    skipPhase: 'العصر الذهبي — ختام الفصل الأول',
  },
};

export class StoryManager {
  constructor(audio, skyLighting, house, cutscenes, ui) {
    this.audio = audio;
    this.sky = skyLighting;
    this.house = house;
    this.cutscenes = cutscenes;
    this.ui = ui;

    this.discovered = new Set();
    this.antennaPowered = false;
    this.chapterComplete = false;
    this.freeRoam = false;
    this.gameplayElapsed = 0; // Organic ~5 minute (300s) Noon->Asr progression

    // Typewriter Subtitle Queue
    this.queue = [];
    this.activeLine = null;
    this.charIndex = 0;
    this.charTimer = 0;
    this.holdTimer = 0;
    this.charInterval = 0.044; // Snappy readable Arabic pace with crisp procedural blips

    this.subContainer = document.getElementById('subtitle-container');
    this.subSpeaker = document.getElementById('subtitle-speaker');
    this.subText = document.getElementById('subtitle-text');
  }

  reset() {
    this.discovered.clear();
    this.antennaPowered = false;
    this.chapterComplete = false;
    this.freeRoam = false;
    this.gameplayElapsed = 0;
    this.queue = [];
    this.activeLine = null;
    this.house.setAntennaPowered(false);
    for (const item of this.house.interactables) {
      item.collected = false;
    }
    this.sky.setTimeOfDay(0.0);
    this.hideSubtitle();
    this.ui.updateClues(0, 6);
    this.ui.updateObjective('تفقّد محيطك والبوصلة القريبة، ثم توجّه إلى البيت المهجور');
    this.ui.setTimeSkipButtonVisible(false);
  }

  enqueueLine(text, style = 'thought', speaker = '') {
    this.queue.push({ text, style, speaker });
    if (!this.activeLine) {
      this._startNextLine();
    }
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
    if (!interactable) return;
    const id = interactable.id;

    // Special check: Radio needs Antenna Power first!
    if (id === 'radio' && !this.antennaPowered) {
      this.audio.playMetalSwitch();
      this.sayImmediate('المذياع ميت تماماً... لا تصله كهرباء. لا بد من توصيل قاطع برج الهوائي على الجدار الشرقي للبيت أولاً.');
      this.ui.updateObjective('ابحث عن قاطع برج الهوائي على الجدار الشرقي خارج البيت');
      return;
    }

    const clue = CLUE_DATA[id];
    if (!clue) return;

    const isFirstTime = !this.discovered.has(id);
    if (isFirstTime) {
      this.discovered.add(id);
      interactable.collected = true;
      this.ui.updateClues(this.discovered.size, 6);
    }

    // Play tailored sound effect
    if (id === 'journal' || id === 'well_photo' || id === 'canteen') {
      this.audio.playPaperRustle();
    } else if (id === 'antenna_box') {
      this.audio.playMetalSwitch();
      this.antennaPowered = true;
      this.house.setAntennaPowered(true);
    } else if (id === 'radio') {
      this.audio.playRadioBurst();
      this.house.unlockHatch();
    } else {
      this.audio.playPaperRustle();
    }

    // Show rich Arabic inspection modal, then trigger time-skip + dialogue when closed!
    this.ui.openInspectModal(clue.tag, clue.title, clue.inspectText, () => {
      if (isFirstTime && clue.skipClock && this.sky.timeOfDay < clue.timeTarget) {
        this.cutscenes.playTimeSkip(clue.skipClock, clue.skipPhase, clue.timeTarget, () => {
          this._playCluePostLines(id, clue);
        });
      } else {
        if (isFirstTime && clue.timeTarget > this.sky.timeOfDay) {
          this.sky.setTimeOfDay(clue.timeTarget);
        }
        this._playCluePostLines(id, clue);
      }
    });
  }

  _playCluePostLines(id, clue) {
    for (const line of clue.lines) {
      this.enqueueLine(line.text, line.style);
    }

    // Show optional manual "تأمل ⏳" time-skip once player has explored at least 2 clues
    if (this.discovered.size >= 2 && this.sky.timeOfDay < 0.95) {
      this.ui.setTimeSkipButtonVisible(true);
    }

    // Update contextual Arabic story objective
    if (id === 'compass') {
      this.ui.updateObjective('اتبع آثار الأقدام نحو مظلة البيت المهجور');
    } else if (id === 'canteen') {
      this.ui.updateObjective('ادخل البيت المهجور وفتّش المكتب الخشبي');
    } else if (id === 'journal') {
      this.ui.updateObjective('ابحث عن قاطع برج الهوائي شرق البيت وتفقّد البئر بالخلف');
    } else if (id === 'well_photo') {
      this.ui.updateObjective(this.antennaPowered ? 'ارجع للداخل وشغّل المذياع التناظري' : 'شغّل قاطع برج الهوائي على الجدار الشرقي');
    } else if (id === 'antenna_box') {
      this.ui.updateObjective('ادخل الغرفة الداخلية وشغّل المذياع التناظري');
    } else if (id === 'radio' && !this.chapterComplete) {
      this.chapterComplete = true;
      this.ui.updateObjective('تم كشف لغز الفصل الأول — وقت العصر');
      // After the gripping final radio monologue finishes, trigger Chapter 1 Finale!
      setTimeout(() => {
        if (!this.freeRoam) {
          this.cutscenes.startEndingVista();
          this.ui.showEndingScreen();
        }
      }, 10500);
    }
  }

  /**
   * Optional manual "تأمل ⏳" time jump so players can experience Asr lighting anytime!
   */
  triggerManualTimeAdvance() {
    if (this.sky.timeOfDay >= 0.96) {
      this.sayImmediate('الشمس قد مالت بالفعل إلى وقت العصر الذهبي...');
      return;
    }
    const nextT = Math.min(1.0, this.sky.timeOfDay + 0.34);
    const { clock, phase } = this.getClockDisplay(nextT);
    this.cutscenes.playTimeSkip(clock, phase, nextT, () => {
      if (nextT >= 0.85) {
        this.sayImmediate('انكسرت حدة الظهيرة وحلّ العصر... ظلال الكثبان تطول بسرعة.');
      } else {
        this.sayImmediate('مضى الوقت سريعاً تحت هذه الشمس...');
      }
    });
  }

  getClockDisplay(t = this.sky.timeOfDay) {
    // Maps t in [0, 1] => 12:15 PM (735 min) to 4:45 PM (1005 min)
    const totalMin = Math.round(735 + t * 270);
    const h24 = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    const h12 = h24 > 12 ? h24 - 12 : h24;
    const mm = m < 10 ? `0${m}` : `${m}`;
    const suffix = h24 >= 15 ? 'عصراً' : 'ظهراً';

    let phase = 'الظهر — شمس عمودية حارقة';
    if (t >= 0.82) phase = 'العصر — سكون ذهبي وظلال طويلة';
    else if (t >= 0.56) phase = 'قبيل العصر — حرارة تنكسر';
    else if (t >= 0.25) phase = 'بعد الظهيرة — وهج الصحراء';

    return {
      clock: `${toArabicDigits(h12)}:${toArabicDigits(mm)} ${suffix}`,
      phase,
    };
  }

  update(dt, isGameplay) {
    // Organic ~5-minute (300s) Noon -> Asr daylight progression during active play!
    if (isGameplay && !this.freeRoam && this.sky.timeOfDay < 0.96) {
      this.gameplayElapsed += dt;
      // Gentle real-time sun drift (1.0 full arc in ~300 seconds even without story skips!)
      const nextT = Math.min(0.96, this.sky.timeOfDay + dt / 300);
      this.sky.setTimeOfDay(nextT);
    }

    // Update HUD clock smoothly
    const info = this.getClockDisplay(this.sky.timeOfDay);
    this.ui.updateClock(info.clock, info.phase, this.sky.timeOfDay);

    // Typewriter Subtitle Update + Procedural Character Blips
    if (this.activeLine) {
      const full = this.activeLine.text;
      if (this.charIndex < full.length) {
        this.charTimer += dt;
        while (this.charTimer >= this.charInterval && this.charIndex < full.length) {
          this.charTimer -= this.charInterval;
          const ch = full[this.charIndex];
          this.charIndex++;
          if (this.subText) {
            this.subText.textContent = full.slice(0, this.charIndex);
          }
          // Play iconic procedural blip every 2 non-space characters for crisp rhythmic speech!
          if (this.charIndex % 2 === 1) {
            this.audio.playTextBlip(this.activeLine.style, ch);
          }
        }
      } else {
        if (this.subText) this.subText.classList.remove('typing');
        this.holdTimer += dt;
        const holdDuration = Math.max(2.3, full.length * 0.042);
        if (this.holdTimer >= holdDuration) {
          this._startNextLine();
        }
      }
    }
  }
}
