// Bilingual translations — EN / AR. RTL applied automatically when lang === "ar".
const t = {
  en: {
    "nav.surface": "Surface",
    "nav.story": "Story",
    "nav.log": "/log",
    "nav.toggle_lang": "العربية",

    "hero.coords": "Khorfakkan → Dubai → Abu Dhabi",
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

    "b_dubai.chapter": "Chapter II · Dubai",
    "b_dubai.tag": "The crossing",
    "b_dubai.title_1": "Before the piscine,",
    "b_dubai.title_2": "the",
    "b_dubai.title_em": "classroom",
    "b_dubai.title_3": "in Dubai.",
    "b_dubai.p1":
      "Before 42 Abu Dhabi, there was a year in Dubai that quietly taught me the alphabet of this trade — databases, forensic cybersecurity, C# and Python, diagrams in StarUML, the inside of a machine taken apart and put back together.",
    "b_dubai.p2":
      "I walked out of the University of Dubai with a BTEC HND Level 5 in Computer Science & Cybersecurity. It wasn't the ocean. It wasn't 42 either. It was the crossing — the place where I first learned that code is its own kind of navigation.",
    "b_dubai.diploma_label": "Diploma · University of Dubai",
    "b_dubai.diploma_title": "BTEC HND Level 5",
    "b_dubai.diploma_sub": "Computer Science & Cybersecurity",
    "b_dubai.caption": "Plate 02 · Dubai · the crossing",

    "b2.chapter": "Chapter III · The harbor",
    "b2.title_1": "42 Abu Dhabi —",
    "b2.title_2": "the harbor I sailed into.",
    "b2.body":
      "No teachers. No grades. Peer-to-peer combat with C, with algorithms, with your own stamina. You build the ship while you're already at sea.",
    "b2.tag": "Cadet · piscine veteran · still on deck",
    "b2.caption": "Plate 03 · 42 Abu Dhabi · the new harbor",

    "b3.chapter": "Chapter IV · Fellow voyagers",
    "b3.title_1": "Nobody crosses",
    "b3.title_2": "the deep",
    "b3.title_2_em": "alone",
    "b3.body":
      "The cohort is the ship. The certificates are landmarks, not destinations. The real artifact is the people you can call at 3 AM when a segfault doesn't make sense.",
    "b3.tag": "Cohort · 42 Abu Dhabi",
    "b3.caption": "Plate 04 · cohort · the crew",

    "b4.label": "Logbook · entry V",
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
    "b5.cap_4": "Plate 05 · HackSphere · GISEC",
    "b5.cap_5": "Plate 06 · Google Cloud · landfall",

    "b5.ops_label": "Field log · 2025",
    "b5.ops_title": "Not just a visitor — on the floor.",
    "b5.ops_body":
      "I walked into cybersecurity as a practitioner, not a spectator. Four credentials from 2025 alone.",
    "b5.op1_title": "Attack / Defence CTF",
    "b5.op1_org": "42 Abu Dhabi · UAE Cyber Security Council",
    "b5.op1_date": "01 May 2025",
    "b5.op2_title": "CTF Level 1 · The Beginning",
    "b5.op2_org": "Exploit3rs × Zayed University CE71",
    "b5.op2_date": "15 Mar 2025",
    "b5.op3_title": "Sharjah Police CTF",
    "b5.op3_org": "Sharjah Police × Exploit3rs",
    "b5.op3_date": "2025",
    "b5.op3_note": "\"Your engagement made the event a great success.\"",
    "b5.op4_title": "Student Hackathon · Mentor",
    "b5.op4_org": "PISA Charter School (42 AD outreach)",
    "b5.op4_date": "26–27 Feb 2025",
    "b5.op4_note": "Endorsed by Mr. Enrico V. Angeles · Asst. Professor · 42 AD",
    "b5.ops_more": "Also in 2025 · AI Hackathon · 42 Abu Dhabi · 28 May 2025",

    "b6.chapter": "Chapter VII · Descend",
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
    "story.h7": "VII. The one line I'd whisper to my past self.",
    "story.p11_quote": "I failed because I didn't control the emotions I felt.",
    "story.p12":
      "If I could send one sentence back through the line — to the me who walked into the exam station on the first try, the fifth, the ninth — it would be that. The problem was never the code. The problem was the cortisol. I showed up to every exam in a body that was already drowning. The sea wasn't the rank-2 exam. The sea was inside my chest, and I hadn't learned to navigate it yet.",
    "story.p13":
      "That is the real skill 42 was trying to teach me — and the one I am still learning, now, at home in Khorfakkan.",
  },
  ar: {
    "nav.surface": "السطح",
    "nav.story": "القصة",
    "nav.log": "السجل",
    "nav.toggle_lang": "English",

    "hero.coords": "خورفكّان ← دبي ← أبوظبي",
    "hero.edition": "كرّاسة الرحلة · إصدار ٢٠٢٦",
    "hero.name": "— سارة أبو القاسم",
    "hero.title_a": "عُمق",
    "hero.title_b": "بحري",
    "hero.subtitle":
      "تدرّبتُ يوماً على الملاحة البحرية في الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري. واليوم أتعلّم ملاحةً من نوعٍ آخر في",
    "hero.subtitle_after": ".",
    "hero.subtitle_line2": "وهذه هي كرّاسة الرحلة بين الاثنتين.",
    "hero.tag.past": "ماضٍ",
    "hero.tag.past_v": "ملاحة بحرية · الأكاديمية العربية",
    "hero.tag.now": "الآن",
    "hero.tag.now_v": "طالبة برمجة · ٤٢ أبوظبي",
    "hero.tag.course": "الوجهة",
    "hero.tag.course_v": "اختيار الميناء التالي",
    "hero.scroll": "انزل — إلى العُمق",
    "hero.cta": "اقرأ السجل",
    "hero.plate": "اللوحة ٠١ · سارة · ٤٢ أبوظبي · ٢٠٢٥",

    "b1.chapter": "الفصل الأول · الأصل",
    "b1.tag": "محيطان",
    "b1.title_1": "أوّلاً،",
    "b1.title_1_em": "البحر",
    "b1.title_2": "ثمّ،",
    "b1.title_2_em": "السيليكون",
    "b1.p1":
      "نشأتُ على دراسة الملاحة البحرية في الأكاديمية العربية: خرائط، واتجاهات، وحسابٌ صامت يحمل السفينة من إحداثيةٍ إلى أخرى. علّمني البحر صبراً لا صلة له بالحماس.",
    "b1.p2":
      "واتّضح أنّ الشاشة محيطٌ أيضاً: الضباب ذاته، والحاجة ذاتها إلى الحساب، ومسافاتٌ طويلة من اللاشيء تقطعها معالمُ مفاجئة. لم أبدّل تخصّصاً، بل بدّلتُ سفينة.",

    "b_dubai.chapter": "الفصل الثاني · دبي",
    "b_dubai.tag": "العبور",
    "b_dubai.title_1": "قبل الـPiscine،",
    "b_dubai.title_2": "كان",
    "b_dubai.title_em": "الفصل",
    "b_dubai.title_3": "في دبي.",
    "b_dubai.p1":
      "قبل ٤٢ أبوظبي، كان في دبي عامٌ علّمني بهدوءٍ أبجديّة هذه المهنة: قواعد البيانات، والأمن السيبراني الجنائي، وC# وPython، ومخطّطات StarUML، وآلةٌ تُفكَّك من الداخل ثمّ تُعاد.",
    "b_dubai.p2":
      "خرجتُ من جامعة دبي بشهادة BTEC HND Level 5 في علوم الحاسوب والأمن السيبراني. لم يكن المحيط. ولم تكن ٤٢. كان العبور — الموضع الذي تعلّمتُ فيه أوّلاً أنّ الكود ملاحةٌ من نوعٍ آخر.",
    "b_dubai.diploma_label": "شهادة · جامعة دبي",
    "b_dubai.diploma_title": "BTEC HND Level 5",
    "b_dubai.diploma_sub": "علوم الحاسوب والأمن السيبراني",
    "b_dubai.caption": "اللوحة ٠٢ · دبي · العبور",

    "b2.chapter": "الفصل الثالث · الميناء",
    "b2.title_1": "٤٢ أبوظبي —",
    "b2.title_2": "الميناء الذي رسوتُ فيه.",
    "b2.body":
      "لا أساتذة. لا درجات. مواجهةٌ نِدّ إلى نِدّ مع لغة C، ومع الخوارزميات، ومع طاقتكِ نفسها. تبنين السفينة وأنتِ في عرض البحر.",
    "b2.tag": "طالبة · خريجة بيسيناتٍ سابقة · لا تزال على ظهر السفينة",
    "b2.caption": "اللوحة ٠٣ · ٤٢ أبوظبي · الميناء الجديد",

    "b3.chapter": "الفصل الرابع · رفاق الرحلة",
    "b3.title_1": "لا أحد يعبر",
    "b3.title_2": "العُمق",
    "b3.title_2_em": "وحيداً",
    "b3.body":
      "الدفعة هي السفينة، والشهادات معالمٌ لا وجهات. ما يبقى فعلاً هم الأشخاص الذين تتّصلين بهم في الثالثة فجراً حين لا يفسّر segfault نفسه.",
    "b3.tag": "الدفعة · ٤٢ أبوظبي",
    "b3.caption": "اللوحة ٠٤ · الدفعة · الطاقم",

    "b4.label": "كرّاسة الرحلة · الإدخال الخامس",
    "b4.subject": "في الفشل",
    "b4.quote":
      "صعدتُ إلى السطح إحدى عشرة مرّة لأخوض الامتحان نفسه. وسقطتُ إلى العُمق إحدى عشرة مرّة. الفشل الحادي عشر لا يزن أكثر من الأوّل؛ البحر لا يحتفظ بالنتائج. ما يعلّمه هو الصبر، والصبر هو الأداة الوحيدة الحقيقية للملّاح.",
    "b4.stat_1": "محاولة في rank 2",
    "b4.stat_2": "بيسينات · حتى الآن",
    "b4.stat_3": "ثقب أسود · ونجاة",
    "b4.outro_1":
      "إن كنتَ تقرأ هذا في منتصف عبورك أنت — الاختبار الفاشل المئة، الطلب المرفوض، الليلة التي يبدو فيها الانسحاب معقولاً —",
    "b4.outro_em": "ابقَ على ظهر السفينة.",
    "b4.outro_2": "القصة ليست في الفشل؛ القصّة في أنّ الكرّاسة تمضي.",
    "b4.read_full": "اقرأ القصة كاملةً",

    "b5.chapter": "الفصل السادس · الرسوّ",
    "b5.title_1": "العالم الذي",
    "b5.title_em": "أستعدّ",
    "b5.title_2": "له.",
    "b5.body":
      "فعاليات الصناعة، طوابق الأمن السيبراني، أحاديث مع مَن يمارس المهنة فعلاً. ليست شهاداتٍ — بل استطلاع.",
    "b5.tag": "الميدان · GISEC · أمن Google Cloud",
    "b5.cap_4": "اللوحة ٠٥ · HackSphere · GISEC",
    "b5.cap_5": "اللوحة ٠٦ · Google Cloud · رسوّ",

    "b5.ops_label": "سجلّ الميدان · ٢٠٢٥",
    "b5.ops_title": "لستُ زائرة — بل مشتبكة.",
    "b5.ops_body":
      "دخلتُ الأمن السيبراني ممارِسةً لا متفرّجة. أربع شهادات في عام ٢٠٢٥ وحده.",
    "b5.op1_title": "Attack / Defence CTF",
    "b5.op1_org": "٤٢ أبوظبي · مجلس الأمن السيبراني الإماراتي",
    "b5.op1_date": "١ مايو ٢٠٢٥",
    "b5.op2_title": "CTF Level 1 · The Beginning",
    "b5.op2_org": "Exploit3rs × جامعة زايد CE71",
    "b5.op2_date": "١٥ مارس ٢٠٢٥",
    "b5.op3_title": "Sharjah Police CTF",
    "b5.op3_org": "شرطة الشارقة × Exploit3rs",
    "b5.op3_date": "٢٠٢٥",
    "b5.op3_note": "«مشاركتكِ جعلت الفعالية نجاحاً كبيراً.»",
    "b5.op4_title": "Student Hackathon · مرشِدة",
    "b5.op4_org": "PISA Charter School (مبادرة ٤٢ أبوظبي)",
    "b5.op4_date": "٢٦-٢٧ فبراير ٢٠٢٥",
    "b5.op4_note": "بتزكية من الأستاذ Enrico V. Angeles · أستاذ مساعد · ٤٢ أبوظبي",
    "b5.ops_more": "وأيضاً في ٢٠٢٥ · AI Hackathon · ٤٢ أبوظبي · ٢٨ مايو ٢٠٢٥",

    "b6.chapter": "الفصل السابع · انزل",
    "b6.title_1": "السطح ينتهي هنا.",
    "b6.title_2": "ويبدأ",
    "b6.title_em": "السجل",
    "b6.title_3": "في الأسفل.",
    "b6.body":
      "من هنا يتغيّر الجوّ. ينسحب خطّ Cormorant ليحلّ محلّه Plex Mono. ويتحوّل الورق الكريميّ إلى السماويّ. وتصير القصص إدخالات. اقرئي ما أتعلّمه — بما في ذلك إخفاقاتي.",
    "b6.cta": "انزل إلى /log",

    "footer.signoff": "ابقَ على ظهر السفينة.",
    "footer.author": "— سارة أبو القاسم",
    "footer.edition": "قياسات · ٢٠٢٦",
    "footer.repo": "السجل على GitHub",

    "story.eyebrow": "العبور الحادي عشر",
    "story.title_1": "عن الرسوب في",
    "story.title_em": "الامتحان نفسه",
    "story.title_2": "إحدى عشرة مرّة.",
    "story.lede": "إدخالٌ مطوَّل في الكرّاسة، لكلِّ مَن يعبر المياه ذاتها.",
    "story.author": "بقلم سارة أبو القاسم · ٢٠٢٦",

    "story.h1": "أوّلاً. قبل الكود، كان البحر.",
    "story.p1":
      "لا يعرف معظم مَن يقابلونني في ٤٢ أبوظبي أنّ أوّل بوصلةٍ لي كانت بوصلةً حقيقية. في الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري تدرّبتُ ملّاحةً بحرية: خرائط، وحسابُ موقعٍ تقريبي، والصبر البطيء لتحريك سفينةٍ عبر إحداثيّاتٍ لا تكترث لتعبك. قبل سنواتٍ من أوّل segfault كتبته، كنتُ قد تعلّمتُ أنّ المحيط لا يُحصي كم مرّةً أخطأتَ قبل أن تبلغ البيت.",

    "story.h2": "ثانياً. ثمّ جاءت ٤٢.",
    "story.p2":
      "تبدو ٤٢ أبوظبي حرماً جامعياً، وتتصرّف كمحيط. لا أساتذة، ولا درجات، ولا أحدَ تُلقين عليه اللوم. إمّا أن تتعلّمي السباحة، وإمّا أن تفشلي، ثمّ — لأنّ ٤٢ كريمةٌ في قسوتها — تفشلين علناً، أمام زملائك، في نظامٍ يسجّل كلّ محاولة بطابعها الزمني.",
    "story.p3":
      "خضتُ الـPiscine مرّتين. وأفكّر في خوضها ثالثة. أنهيتُ rank 1. وبدأتُ rank 2. ثمّ جاء الامتحان الذي خضتُه الآن إحدى عشرة مرّة.",

    "story.h3": "ثالثاً. المحاولة الحادية عشرة.",
    "story.p4":
      "أريد أن أكون صادقةً بشأن ما تعنيه إحدى عشرة محاولة، لأنّ الناس يقرؤون عن الصمود في جُملٍ نظيفةٍ محرَّرة، فيحسبون التجربة نفسها نظيفة. إنّها ليست كذلك. تلسع الإخفاقات الثلاث الأولى. يبدو الخامس والسادس شخصيَّين كحُكمٍ على انتمائك لهذه الغرفة. بحلول الثامن، تجلسين في محطّة الامتحان بسطحيّةٍ لا تستطيعين أنتِ نفسكِ تفسيرها.",
    "story.p5":
      "بحلول الحادي عشر، تتوقّفين عن إخبار الناس. تدخلين، وتكتبين، وتخرجين. تعرفين المقعد. تعرفين المراقب. تعرفين أيّ validator سيُعلِم بأيّ حالةٍ طرفيّة. وتعرفين كذلك — وهذا هو الأغرب — أنّكِ ما زلتِ، بطريقةٍ ما، تدخلين.",

    "story.h4": "رابعاً. الثقب الأسود.",
    "story.p6":
      "في ٤٢ شيءٌ يُسمّى الثقب الأسود. إذا انخفض نشاطكِ تحت عتبةٍ معيّنة، يلفظكِ النظام. وقعتُ فيه، ونجوتُ من لفظه. وثمّة مَن لم ينجُ، وأفكّر فيهم كثيراً.",

    "story.h5": "خامساً. لماذا لم أنسحب.",
    "story.p7":
      "أفكّر الآن جدّياً في جامعة الملك فيصل. وأفكّر جدّياً في Piscine ثالثة. وأفكّر جدّياً في أن أبتعد عن البرمجة ستّة أشهر، وأعود إلى البحر. لا أعرف بعد إلى أيّ ميناءٍ أنا متّجهة. ما أعرفه هو التالي:",
    "story.p8_a": "إحدى عشرة محاولةً ليست قصّةً عن الفشل.",
    "story.p8_b":
      "إنّها قصّةٌ عن شخصٍ، بلا سببٍ وجيه، واصل الحضور. هذا ليس عيباً في السيرة الذاتية؛ هذا الشيء الوحيد فيها الذي لا يمكن تزويره.",

    "story.h6": "سادساً. إن كنتِ في منتصف هذا — اقرئيني.",
    "story.p9":
      "أكتب هذا من الداخل. لم أفز بعد. وقد لا أفوز بالطريقة التي يعرِّف بها النظام الفوز. لكنّني فزتُ بالفعل بالشيء الوحيد الذي أملك السيطرة عليه: هل أصعد على ظهر السفينة غداً.",
    "story.p10":
      "إن كنتَ تقرأ هذا في ليلةٍ سيّئة — اختبارك الفاشل المئة، طلبك المرفوض، مقابلتك العاشرة التي لم تُفضِ إلى شيء، الأسبوع الصامت بعد فقدان وظيفة — فأنا أكتب لك أنت بالذات. ابقَ على ظهر السفينة. المحيط ليس شخصيّاً. هو فقط عميق، ولا بأس بأن تكون بطيئاً.",

    "story.h7": "سابعاً. الجملة التي سأهمس بها لنفسي السابقة.",
    "story.p11_quote": "فشلتُ لأنّني لم أسيطر على المشاعر التي شعرتُ بها.",
    "story.p12":
      "لو أمكنني أن أرسل جملةً واحدةً عبر الخطّ — إلى نفسي التي دخلت محطّة الامتحان في المحاولة الأولى، والخامسة، والتاسعة — لكانت هذه. لم تكن المشكلةُ في الكود يوماً. كانت في الكورتيزول. كنتُ أدخل كلّ امتحانٍ في جسدٍ يغرق بالفعل. لم يكن البحرُ هو امتحانَ rank 2؛ كان البحر في داخل صدري، ولم أكن قد تعلّمتُ الملاحةَ فيه بعد.",
    "story.p13":
      "تلك هي المهارة الحقيقيّة التي كانت ٤٢ تحاول تعليمي إيّاها — والتي لا أزال أتعلّمها الآن، في البيت في خورفكّان.",

    "story.signoff": "— سارة، بين الموانئ",
    "story.back": "← العودة إلى السطح",
  },
};

export default t;
