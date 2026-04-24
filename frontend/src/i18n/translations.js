// Bilingual translations — EN / AR. RTL applied automatically when lang === "ar".
const t = {
  en: {
    "nav.surface": "Surface",
    "nav.story": "Story",
    "nav.log": "/log",
    "nav.toggle_lang": "العربية",

    "hero.coords": "N 24° 28′ · E 54° 22′ · Abu Dhabi",
    "hero.edition": "Logbook · Edition MMXXVI",
    "hero.name": "— Sara Abouelkassem",
    "hero.title_a": "Naval",
    "hero.title_b": "Depth",
    "hero.subtitle":
      "I once trained to navigate ships at the Arab Academy for Science, Technology & Maritime Transport. Now I'm learning to navigate systems at",
    "hero.subtitle_after": ".",
    "hero.subtitle_line2": "This is the logbook in between.",
    "hero.tag.past": "Past",
    "hero.tag.past_v": "Marine Navigation, AASTMT",
    "hero.tag.now": "Now",
    "hero.tag.now_v": "Software Cadet, 42 Abu Dhabi",
    "hero.tag.course": "Course",
    "hero.tag.course_v": "Choosing the next port",
    "hero.scroll": "Scroll — descend",
    "hero.cta": "Read the log",
    "hero.plate": "Plate 01 · Sara A. · 42 AD · 2025",

    "b1.chapter": "Chapter I · Origin",
    "b1.tag": "Two oceans",
    "b1.title_1": "First, the",
    "b1.title_1_em": "sea",
    "b1.title_2": "Then, the",
    "b1.title_2_em": "silicon",
    "b1.p1":
      "I came up studying Marine Navigation at AASTMT — charts, bearings, the lonely arithmetic of getting a vessel from one coordinate to another. The sea taught me a kind of patience that had nothing to do with motivation.",
    "b1.p2":
      "The screen, it turns out, is also an ocean. Same fog. Same need for reckoning. Same long stretches of nothing followed by a sudden landmark. I'm not switching disciplines so much as changing the ship.",

    "b2.chapter": "Chapter II · The harbor",
    "b2.title_1": "42 Abu Dhabi —",
    "b2.title_2": "the harbor I sailed into.",
    "b2.body":
      "No teachers. No grades. Peer-to-peer combat with C, with algorithms, with your own stamina. You build the ship while you're already at sea.",
    "b2.tag": "Cadet · piscine veteran · still on deck",
    "b2.caption": "Plate 02 · 42 Abu Dhabi · the new harbor",

    "b3.chapter": "Chapter III · Fellow voyagers",
    "b3.title_1": "Nobody crosses",
    "b3.title_2": "the deep",
    "b3.title_2_em": "alone",
    "b3.body":
      "The cohort is the ship. The certificates are landmarks, not destinations. The real artifact is the people you can call at 3 AM when a segfault doesn't make sense.",
    "b3.tag": "Cohort · 42 Abu Dhabi",
    "b3.caption": "Plate 03 · cohort · the crew",

    "b4.label": "Logbook · entry IV",
    "b4.subject": "On failure",
    "b4.quote":
      "I have surfaced eleven times to take the same exam. I have fallen back into the deep eleven times. The eleventh failure does not weigh more than the first — the sea does not keep score. What it teaches is patience, and patience is the navigator's only real instrument.",
    "b4.stat_1": "rank-2 attempts",
    "b4.stat_2": "piscines (so far)",
    "b4.stat_3": "black hole · survived",
    "b4.outro_1":
      "If you're reading this in the middle of your own crossing — the hundredth failed test, the rejected application, the night where quitting feels reasonable —",
    "b4.outro_em": "stay on deck.",
    "b4.outro_2":
      "The story is not the failure. The story is that the log keeps going.",
    "b4.read_full": "Read the full story",

    "b5.chapter": "Chapter V · Making port",
    "b5.title_1": "The world I'm",
    "b5.title_em": "preparing",
    "b5.title_2": "for.",
    "b5.body":
      "Industry events, security floors, conversations with the people already doing the work. Not credentials. Reconnaissance.",
    "b5.tag": "Field · GISEC · Google Cloud Security",
    "b5.cap_4": "Plate 04 · HackSphere · GISEC",
    "b5.cap_5": "Plate 05 · Google Cloud · landfall",

    "b6.chapter": "Chapter VI · Descend",
    "b6.title_1": "Surface ends here.",
    "b6.title_2": "The",
    "b6.title_em": "log",
    "b6.title_3": "begins below.",
    "b6.body":
      "From here on, the atmosphere changes. Cormorant yields to Plex Mono. Parchment to cyan. Stories become entries. Read what I'm learning, the failures included.",
    "b6.cta": "Descend to /log",

    "footer.signoff": "Stay on deck.",
    "footer.author": "— Sara Abouelkassem",
    "footer.edition": "Soundings · MMXXVI",
    "footer.repo": "Logbook on GitHub",

    // /story page
    "story.eyebrow": "The eleventh crossing",
    "story.title_1": "On failing",
    "story.title_em": "the same exam",
    "story.title_2": "eleven times.",
    "story.lede":
      "A long-form logbook entry for anyone navigating the same waters.",
    "story.author": "By Sara Abouelkassem · 2026",
    "story.h1": "I. Before code, there was the sea.",
    "story.p1":
      "Most people who meet me at 42 Abu Dhabi don't know my first compass was literal. At AASTMT — the Arab Academy for Science, Technology & Maritime Transport — I trained as a marine navigator. Charts, dead reckoning, the slow patience of moving a ship across a coordinate system that doesn't care whether you're tired. Years before I wrote my first segfault, I had already learned that the ocean keeps no score of how many times you got it wrong before you got home.",
    "story.h2": "II. Then 42 happened.",
    "story.p2":
      "42 Abu Dhabi looks like a campus and behaves like an ocean. No teachers, no grades, no one to blame. You either learn to swim or you fail, and then — because 42 is generous in its cruelty — you fail in public, in front of your peers, in a system that logs every attempt with a timestamp.",
    "story.p3":
      "I did the piscine. Twice. I'm registered to consider it a third time. I cleared rank 1. I started rank 2. And then, the exam I have now taken eleven times.",
    "story.h3": "III. The eleventh attempt.",
    "story.p4":
      "I want to be honest about what eleven attempts feels like, because I think people read about resilience in clean, edited sentences and assume the experience itself is clean. It is not. The first three failures sting. The fifth and sixth feel personal, like a verdict on whether you belong in this room. By the eighth, you start sitting at exam stations with a flatness that even you cannot explain.",
    "story.p5":
      "By the eleventh, you stop telling people. You walk in, you write, you walk out. You know the seat. You know the proctor. You know which validator is going to flag which edge case. You also know — and this is the strange part — that you are still, somehow, walking in.",
    "story.h4": "IV. The black hole.",
    "story.p6":
      "42 has a thing called the black hole. If your activity drops below a threshold, the system spits you out. I fell into it. I survived being spat out. There are people who don't, and I think about them often.",
    "story.h5": "V. Why I haven't quit.",
    "story.p7":
      "Right now I am genuinely considering KFU. I am genuinely considering a third piscine. I am genuinely considering walking away from coding for six months and going back to the sea. I do not know yet which port I am sailing for. What I know is this:",
    "story.p8_a": "Eleven attempts is not a story about failure.",
    "story.p8_b":
      "It is a story about a person who, with no good reason, kept showing up. That is not a flaw on a CV. That is the only thing on a CV that cannot be faked.",
    "story.h6": "VI. If you are in the middle of this — read me.",
    "story.p9":
      "I am writing this from the inside. I haven't won yet. I might not win in the way the system defines winning. But I have already won the only thing I have control over, which is whether I get on the ship tomorrow.",
    "story.p10":
      "If you are reading this on a bad night — your hundredth failed test, your rejected application, your tenth job interview that went nowhere, the silent week after a layoff — I am writing to you specifically. Stay on deck. The ocean is not personal. It is just deep, and it is fine to be slow.",
    "story.signoff": "— Sara, between ports",
    "story.back": "← Back to surface",
  },
  ar: {
    "nav.surface": "السطح",
    "nav.story": "القصة",
    "nav.log": "السجل",
    "nav.toggle_lang": "English",

    "hero.coords": "خط ٢٤°٢٨′ شمالاً · ٥٤°٢٢′ شرقاً · أبوظبي",
    "hero.edition": "كرّاسة الرحلة · إصدار ٢٠٢٦",
    "hero.name": "— سارة أبو القاسم",
    "hero.title_a": "عُمق",
    "hero.title_b": "بحري",
    "hero.subtitle":
      "تدرّبتُ يوماً على الملاحة البحرية في الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري. واليوم أتعلّم الملاحة في الأنظمة في",
    "hero.subtitle_after": ".",
    "hero.subtitle_line2": "وهذه هي الكرّاسة التي بينهما.",
    "hero.tag.past": "ماضٍ",
    "hero.tag.past_v": "ملاحة بحرية، الأكاديمية العربية",
    "hero.tag.now": "الآن",
    "hero.tag.now_v": "طالبة برمجة، ٤٢ أبوظبي",
    "hero.tag.course": "الوجهة",
    "hero.tag.course_v": "اختيار الميناء التالي",
    "hero.scroll": "انزل — إلى الأعماق",
    "hero.cta": "اقرأ السجل",
    "hero.plate": "اللوحة ٠١ · سارة · ٤٢ أبوظبي · ٢٠٢٥",

    "b1.chapter": "الفصل الأول · الأصل",
    "b1.tag": "محيطان",
    "b1.title_1": "أولاً،",
    "b1.title_1_em": "البحر",
    "b1.title_2": "ثم،",
    "b1.title_2_em": "السيليكون",
    "b1.p1":
      "نشأتُ على دراسة الملاحة البحرية في الأكاديمية العربية — خرائط، اتجاهات، حساب وحيد لنقل السفينة من إحداثية إلى أخرى. علّمني البحر صبراً لا علاقة له بالحماسة.",
    "b1.p2":
      "والشاشة، اتضح، محيط أيضاً. الضباب نفسه. الحاجة نفسها للحساب. مسافات طويلة من اللاشيء يقطعها معلَم مفاجئ. لستُ أبدّل تخصصاً بقدر ما أبدّل سفينة.",

    "b2.chapter": "الفصل الثاني · الميناء",
    "b2.title_1": "٤٢ أبوظبي —",
    "b2.title_2": "الميناء الذي رسوتُ فيه.",
    "b2.body":
      "لا أساتذة. لا درجات. اشتباك ندّ-بندّ مع لغة C، مع الخوارزميات، مع طاقتك أنت. تبني السفينة وأنت بالفعل في عرض البحر.",
    "b2.tag": "طالبة · مرّت بالـPiscine · ما زالت على ظهر السفينة",
    "b2.caption": "اللوحة ٠٢ · ٤٢ أبوظبي · الميناء الجديد",

    "b3.chapter": "الفصل الثالث · رفاق الرحلة",
    "b3.title_1": "لا أحد يعبر",
    "b3.title_2": "العمق",
    "b3.title_2_em": "وحيداً",
    "b3.body":
      "الدفعة هي السفينة. الشهادات معالم لا وجهات. المنتج الحقيقي هو الناس الذين تتصل بهم في الثالثة فجراً حين لا يفسّر segfault نفسه.",
    "b3.tag": "الدفعة · ٤٢ أبوظبي",
    "b3.caption": "اللوحة ٠٣ · الدفعة · الطاقم",

    "b4.label": "كرّاسة الرحلة · إدخال ٤",
    "b4.subject": "في الفشل",
    "b4.quote":
      "صعدتُ إلى السطح إحدى عشرة مرة لخوض الامتحان نفسه. سقطتُ إلى العمق إحدى عشرة مرة. الفشل الحادي عشر لا يزن أكثر من الأول — البحر لا يحفظ النتائج. ما يعلّمه هو الصبر، والصبر هو أداة الملاح الحقيقية الوحيدة.",
    "b4.stat_1": "محاولات في rank-2",
    "b4.stat_2": "Piscines (حتى الآن)",
    "b4.stat_3": "ثقب أسود · نجوت",
    "b4.outro_1":
      "إذا كنتَ تقرأ هذا في منتصف عبورك أنت — الاختبار الفاشل المئة، الطلب المرفوض، الليلة التي يبدو فيها الانسحاب معقولاً —",
    "b4.outro_em": "ابقَ على ظهر السفينة.",
    "b4.outro_2":
      "القصة ليست في الفشل. القصة في أن الكرّاسة تستمر.",
    "b4.read_full": "اقرأ القصة كاملةً",

    "b5.chapter": "الفصل الخامس · الرسوّ في الميناء",
    "b5.title_1": "العالم الذي",
    "b5.title_em": "أستعد",
    "b5.title_2": "له.",
    "b5.body":
      "فعاليات الصناعة، طوابق الأمن السيبراني، أحاديث مع من يعمل بالفعل. ليست شهاداتٍ. هي استطلاع.",
    "b5.tag": "الميدان · GISEC · أمن Google Cloud",
    "b5.cap_4": "اللوحة ٠٤ · HackSphere · GISEC",
    "b5.cap_5": "اللوحة ٠٥ · Google Cloud · رسوّ",

    "b6.chapter": "الفصل السادس · انزل",
    "b6.title_1": "السطح ينتهي هنا.",
    "b6.title_2": "ويبدأ",
    "b6.title_em": "السجل",
    "b6.title_3": "في الأسفل.",
    "b6.body":
      "من هنا، يتغيّر الجوّ. خطّ Cormorant يفسح المجال لـPlex Mono. الورق الكريمي إلى السماوي. القصص تصبح إدخالات. اقرأ ما أتعلّمه، بما في ذلك إخفاقاتي.",
    "b6.cta": "انزل إلى /log",

    "footer.signoff": "ابقَ على ظهر السفينة.",
    "footer.author": "— سارة أبو القاسم",
    "footer.edition": "قياسات · ٢٠٢٦",
    "footer.repo": "السجل على GitHub",

    "story.eyebrow": "العبور الحادي عشر",
    "story.title_1": "عن الرسوب في",
    "story.title_em": "الامتحان نفسه",
    "story.title_2": "إحدى عشرة مرة.",
    "story.lede":
      "إدخال طويل في الكرّاسة لكلِّ من يبحر في المياه نفسها.",
    "story.author": "بقلم سارة أبو القاسم · ٢٠٢٦",
    "story.h1": "أولاً. قبل الكود، كان البحر.",
    "story.p1":
      "أغلب من يقابلني في ٤٢ أبوظبي لا يعرفون أن أوّل بوصلة لي كانت بوصلة فعلية. في الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري، تدرّبتُ ملاحةً بحرية. خرائط، حساب الموقع التقريبي، الصبر البطيء لتحريك سفينة عبر إحداثيات لا تكترث لتعبك. قبل سنوات من أوّل segfault كتبته، كنتُ قد تعلّمتُ أنّ المحيط لا يحفظ كم مرة أخطأتَ قبل أن تصل البيت.",
    "story.h2": "ثانياً. ثم جاءت ٤٢.",
    "story.p2":
      "تبدو ٤٢ أبوظبي حرماً جامعياً وتتصرّف كمحيط. لا أساتذة، لا درجات، لا أحد تُلقي عليه اللوم. إمّا أن تتعلّم السباحة وإمّا أن تفشل، ثمّ — لأن ٤٢ كريمة في قسوتها — تفشل علناً، أمام أقرانك، في نظام يسجّل كلّ محاولة بختمها الزمني.",
    "story.p3":
      "خضتُ الـPiscine. مرّتين. وأفكّر في خوضها مرّة ثالثة. أنهيتُ rank 1. بدأتُ rank 2. ثمّ، الامتحان الذي خضتُه الآن إحدى عشرة مرة.",
    "story.h3": "ثالثاً. المحاولة الحادية عشرة.",
    "story.p4":
      "أريد أن أكون صادقة بشأن ما تعنيه إحدى عشرة محاولة، لأنّ الناس يقرؤون عن الصمود في جُمل نظيفة محرَّرة، ويظنّون أنّ التجربة نفسها نظيفة. إنّها ليست كذلك. الإخفاقات الثلاثة الأولى توجع. الخامس والسادس يبدوان شخصيَّين، كحُكم على ما إذا كنتَ تنتمي إلى هذه الغرفة. بحلول الثامن، تجلس في محطّة الامتحان بسطحيّةٍ لا تستطيع أنت تفسيرها.",
    "story.p5":
      "بحلول الحادي عشر، تتوقّف عن إخبار الناس. تدخل، تكتب، تخرج. تعرف المقعد. تعرف المراقب. تعرف أيّ validator سيُعلِم بأيّ حالة طرفية. وتعرف أيضاً — وهذا هو الجزء الغريب — أنّك ما زلتَ، بطريقةٍ ما، تدخل.",
    "story.h4": "رابعاً. الثقب الأسود.",
    "story.p6":
      "في ٤٢ شيء يُسمّى الثقب الأسود. إذا انخفض نشاطك تحت عتبة معيّنة، يلفظك النظام. وقعتُ فيه. ونجوتُ من اللفظ. ثمّة أناس لم ينجوا، وأفكّر فيهم كثيراً.",
    "story.h5": "خامساً. لمَ لم أنسحب.",
    "story.p7":
      "أفكّر الآن جديّاً في جامعة الملك فيصل. أفكّر جديّاً في Piscine ثالثة. أفكّر جديّاً في الابتعاد عن البرمجة لستّة أشهر والعودة إلى البحر. لا أعرف بعد إلى أيّ ميناء أنا متّجهة. ما أعرفه:",
    "story.p8_a": "إحدى عشرة محاولة ليست قصة عن الفشل.",
    "story.p8_b":
      "إنّها قصة عن شخصٍ، بلا سبب وجيه، استمرّ في الحضور. هذا ليس عيباً في السيرة الذاتية. هذا الشيء الوحيد في السيرة الذاتية الذي لا يمكن تزويره.",
    "story.h6": "سادساً. إذا كنتَ في منتصف هذا — اقرأني.",
    "story.p9":
      "أكتب هذا من الداخل. لم أفز بعد. ربّما لن أفوز بالطريقة التي يعرّف بها النظام الفوز. لكنّني فزتُ بالفعل بالشيء الوحيد الذي أملك السيطرة عليه: هل أصعد على ظهر السفينة غداً.",
    "story.p10":
      "إن كنتَ تقرأ هذا في ليلة سيّئة — اختبارك الفاشل المئة، طلبك المرفوض، مقابلتك العاشرة التي لم تُفضِ إلى شيء، الأسبوع الصامت بعد فقدان وظيفة — أكتب لك أنت بالذات. ابقَ على ظهر السفينة. المحيط ليس شخصياً. هو فقط عميق، ولا بأس بأن تكون بطيئاً.",
    "story.signoff": "— سارة، بين الموانئ",
    "story.back": "← العودة إلى السطح",
  },
};

export default t;
