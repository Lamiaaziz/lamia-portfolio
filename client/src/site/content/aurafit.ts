import { asset, type SiteLang } from "../i18n";

const img = (n: string) => asset(`/aurafit-cs/${n}.webp`);

type Item = { title: string; text: string };

export type ConceptContent = {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; lead: string; body: string; visual: string; visualAlt: string };
  overviewLabel: string;
  overview: { label: string; value: string }[];
  problem: { eyebrow: string; title: string; cards: { label: string; title: string; text: string; dark?: boolean }[] };
  research: { eyebrow: string; title: string; intro: string; insights: Item[]; highlight: number };
  framework: { eyebrow: string; title: string; intro: string; rows: Item[] };
  process: { eyebrow: string; title: string; steps: string[]; highlight: number };
  screens: { eyebrow: string; title: string; intro: string; items: { src: string; title: string; caption: string; alt: string }[] };
  persona: {
    eyebrow: string;
    title: string;
    initial: string;
    profile: string[];
    goalsTitle: string;
    goals: string[];
    painTitle: string;
    pains: string[];
  };
  visual: { eyebrow: string; title: string; intro: string; moodboard: string; moodboardAlt: string };
  impact: { eyebrow: string; title: string; text: string; cards: { label: string; title: string }[] };
};

const screens = (titles: [string, string][], alts: string[]) =>
  ["welcome", "identity", "lifestyle", "mode", "results", "progress"].map((n, i) => ({
    src: img(`screen-${n}`),
    title: titles[i][0],
    caption: titles[i][1],
    alt: alts[i],
  }));

export const auraFitContent: Record<SiteLang, ConceptContent> = {
  en: {
    metaTitle: "AuraFit: Behavioral fitness concept — Lamia Alrowaished",
    metaDescription:
      "UX research case study: a behavioral fitness system for Saudi professionals, built around consistency through adaptive planning, visible progress and personalized insights.",
    hero: {
      eyebrow: "Project 02 · UX research · Bootcamp concept",
      title: "AuraFit",
      lead: "A behavioral fitness system built around consistency—not motivation.",
      body: "Designed for Saudi professionals whose schedules change from week to week, AuraFit uses adaptive planning, visible progress, and personalized insights to support sustainable fitness habits.",
      visual: img("hero"),
      visualAlt: "AuraFit app: the adaptive dashboard and the weekly progress screen on two phones",
    },
    overviewLabel: "Project overview",
    overview: [
      { label: "Timeline", value: "6 weeks" },
      { label: "Role", value: "UX / Experience Designer" },
      { label: "Market", value: "Saudi Arabia" },
      { label: "Type", value: "UX bootcamp concept" },
    ],
    problem: {
      eyebrow: "Problem reframing",
      title: "Consistency is a system-design problem",
      cards: [
        {
          label: "The problem",
          title: "Rigid routines break first",
          text: "Many fitness products depend on fixed routines and motivation-based engagement. That model does not fit professionals whose work hours, energy, and availability change unpredictably.",
        },
        {
          label: "The response",
          title: "An adaptive behavioral system",
          text: "AuraFit replaces rigid schedules with flexible structures, progress visibility, and contextual recommendations—reducing the distance between intention and action.",
          dark: true,
        },
      ],
    },
    research: {
      eyebrow: "Research synthesis",
      title: "What the research suggested",
      intro:
        "The concept was shaped through independent research and synthesis. These insights remain hypotheses to validate through real-user testing.",
      insights: [
        { title: "Schedule instability", text: "Irregular work hours repeatedly interrupt routines." },
        { title: "Motivation decay", text: "Missed sessions often reduce confidence and continuation." },
        { title: "Poor adaptation", text: "Most apps do not respond to changing lifestyles." },
        { title: "Progress ambiguity", text: "Users need clear feedback without information overload." },
      ],
      highlight: 0,
    },
    framework: {
      eyebrow: "Behavioral framework",
      title: "Designing for behavior over time",
      intro:
        "Four principles translate the research into a system that supports realistic action instead of punishing inconsistency.",
      rows: [
        { title: "Goal structuring", text: "Define realistic goals around lifestyle patterns." },
        { title: "Cognitive-load reduction", text: "Simplify daily decisions through guided actions." },
        { title: "Contextual adaptation", text: "Adjust routines to schedule changes and energy levels." },
        { title: "Consistency reinforcement", text: "Use missed sessions as signals for adjustment—not failure." },
      ],
    },
    process: {
      eyebrow: "Design process",
      title: "From problem definition to prototype",
      steps: ["Problem definition", "Research synthesis", "Moodboard", "Wireframes", "High-fidelity UI", "Prototype"],
      highlight: 4,
    },
    screens: {
      eyebrow: "Selected product screens",
      title: "The adaptive experience in action",
      intro:
        "The flow moves from account setup and behavioral profiling into an adaptive dashboard with clear progress feedback.",
      items: screens(
        [
          ["Welcome", "Entry and account choice"],
          ["Identity anchor", "Account setup"],
          ["Lifestyle profile", "Schedule and preference inputs"],
          ["Mode allocation", "Adaptive starting mode"],
          ["Results dashboard", "Weekly consistency overview"],
          ["Progress tracking", "Behavioral metrics and insights"],
        ],
        [
          "Welcome screen with log in and sign up buttons",
          "Step 1: creating an account with email and password",
          "Step 2: three quick questions about the user's typical week",
          "Step 3: the app assigns the Busy Week starting mode",
          "Dashboard showing 95% weekly consistency and adaptive cards",
          "Weekly progress chart with behavior metrics and an insight",
        ],
      ),
    },
    persona: {
      eyebrow: "Primary persona",
      title: "Salma, 28 · Marketing Manager · Riyadh",
      initial: "S",
      profile: ["Busy professional", "Irregular weekly schedule", "Wants progress without overwhelm"],
      goalsTitle: "Goals",
      goals: ["Stay consistent with workouts", "Manage fitness around a busy schedule", "Track progress without overwhelm"],
      painTitle: "Pain points",
      pains: ["Irregular hours disrupt routines", "Motivation drops after missed sessions", "Apps do not adapt to lifestyle changes"],
    },
    visual: {
      eyebrow: "Visual direction",
      title: "A calmer language for progress",
      intro:
        "The original moodboard explored light blue and purple to communicate calm guidance, clarity, and personalized progress rather than high-pressure fitness culture.",
      moodboard: img("moodboard-en"),
      moodboardAlt:
        "AuraFit moodboard: reference fitness apps, the keywords AI-powered, smart, personalized, dynamic, wellness and flexible, the Mona Sans typeface and a palette of #B7BBEA, #D0EEF9 and #2F3030",
    },
    impact: {
      eyebrow: "Intended impact & validation",
      title: "Designed to evolve beyond launch",
      text: "AuraFit is intended to improve consistency by reducing planning friction and making progress visible. As a bootcamp concept, these are hypotheses to test with real users, not measured results.",
      cards: [
        { label: "Retention", title: "Do users return over time?" },
        { label: "Consistency", title: "Do workout patterns become steadier?" },
        { label: "Adaptive features", title: "Do users engage with contextual guidance?" },
      ],
    },
  },

  ar: {
    metaTitle: "AuraFit: مفهوم لياقة سلوكي — لمياء الرويشد",
    metaDescription:
      "دراسة حالة في بحث تجربة المستخدم: نظام لياقة سلوكي للمهنيين في السعودية قائم على الانتظام، عبر التخطيط المرن وإظهار التقدّم والرؤى المخصّصة.",
    hero: {
      eyebrow: "المشروع 02 · بحث تجربة المستخدم · مشروع معسكر تدريبي",
      title: "AuraFit",
      lead: "نظام لياقة سلوكي قائم على الانتظام، لا على الحماس.",
      body: "صُمّم للمهنيين في السعودية الذين تتغيّر جداولهم من أسبوع لآخر، ويعتمد AuraFit على التخطيط المرن، وإظهار التقدّم، والرؤى المخصّصة لدعم عادات رياضية مستدامة.",
      visual: img("hero"),
      visualAlt: "تطبيق AuraFit: اللوحة المتكيّفة وشاشة التقدّم الأسبوعي على هاتفين",
    },
    overviewLabel: "نظرة عامة على المشروع",
    overview: [
      { label: "المدة", value: "6 أسابيع" },
      { label: "الدور", value: "مصممة تجربة مستخدم" },
      { label: "السوق", value: "المملكة العربية السعودية" },
      { label: "النوع", value: "مشروع معسكر تدريبي في UX" },
    ],
    problem: {
      eyebrow: "إعادة صياغة المشكلة",
      title: "الانتظام مشكلة في تصميم النظام",
      cards: [
        {
          label: "المشكلة",
          title: "الروتين الصارم ينهار أولًا",
          text: "تعتمد كثير من منتجات اللياقة على روتين ثابت وتفاعل قائم على الحماس، وهو نموذج لا يناسب المهنيين الذين تتغيّر ساعات عملهم وطاقتهم ووقتهم المتاح بشكل غير متوقّع.",
        },
        {
          label: "الاستجابة",
          title: "نظام سلوكي متكيّف",
          text: "يستبدل AuraFit الجداول الصارمة بهياكل مرنة، وإظهار واضح للتقدّم، وتوصيات مرتبطة بالسياق، ليقرّب المسافة بين النية والفعل.",
          dark: true,
        },
      ],
    },
    research: {
      eyebrow: "تحليل نتائج البحث",
      title: "ما أشار إليه البحث",
      intro:
        "تشكّل المفهوم من خلال بحث وتحليل مستقلَّين، وتبقى هذه الرؤى فرضيات تحتاج إلى التحقق عبر اختبار مع مستخدمين حقيقيين.",
      insights: [
        { title: "عدم استقرار الجدول", text: "ساعات العمل غير المنتظمة تقطع الروتين مرارًا." },
        { title: "تراجع الحماس", text: "الجلسات الفائتة كثيرًا ما تُضعف الثقة والاستمرار." },
        { title: "ضعف التكيّف", text: "معظم التطبيقات لا تستجيب لتغيّر نمط الحياة." },
        { title: "غموض التقدّم", text: "يحتاج المستخدمون إلى ملاحظات واضحة دون تكدّس المعلومات." },
      ],
      highlight: 0,
    },
    framework: {
      eyebrow: "الإطار السلوكي",
      title: "التصميم للسلوك على المدى الطويل",
      intro: "أربعة مبادئ تحوّل نتائج البحث إلى نظام يدعم أفعالًا واقعية بدلًا من معاقبة عدم الانتظام.",
      rows: [
        { title: "هيكلة الأهداف", text: "تحديد أهداف واقعية تتناسب مع نمط الحياة." },
        { title: "تخفيف العبء الذهني", text: "تبسيط القرارات اليومية عبر خطوات موجَّهة." },
        { title: "التكيّف مع السياق", text: "تعديل الروتين وفق تغيّر الجدول ومستوى الطاقة." },
        { title: "تعزيز الانتظام", text: "التعامل مع الجلسات الفائتة كإشارات للتعديل، لا كفشل." },
      ],
    },
    process: {
      eyebrow: "مراحل التصميم",
      title: "من تعريف المشكلة إلى النموذج الأولي",
      steps: ["تعريف المشكلة", "تحليل البحث", "لوحة الإلهام", "الإطارات السلكية", "واجهات عالية الدقة", "النموذج الأولي"],
      highlight: 4,
    },
    screens: {
      eyebrow: "شاشات مختارة من المنتج",
      title: "التجربة المتكيّفة على أرض الواقع",
      intro: "يبدأ المسار من إعداد الحساب وبناء الملف السلوكي، وصولًا إلى لوحة متكيّفة تعرض التقدّم بوضوح.",
      items: screens(
        [
          ["الترحيب", "الدخول واختيار الحساب"],
          ["تثبيت الهوية", "إعداد الحساب"],
          ["ملف نمط الحياة", "مدخلات الجدول والتفضيلات"],
          ["تحديد النمط", "نمط البداية المتكيّف"],
          ["لوحة النتائج", "نظرة عامة على الانتظام الأسبوعي"],
          ["تتبّع التقدّم", "المؤشرات السلوكية والرؤى"],
        ],
        [
          "شاشة الترحيب مع زرّي تسجيل الدخول وإنشاء حساب",
          "الخطوة 1: إنشاء حساب بالبريد الإلكتروني وكلمة المرور",
          "الخطوة 2: ثلاثة أسئلة سريعة عن الأسبوع المعتاد للمستخدم",
          "الخطوة 3: يحدّد التطبيق نمط البداية «أسبوع مزدحم»",
          "لوحة تعرض انتظامًا أسبوعيًا بنسبة 95% وبطاقات متكيّفة",
          "رسم بياني للتقدّم الأسبوعي مع مؤشرات سلوكية ورؤية",
        ],
      ),
    },
    persona: {
      eyebrow: "الشخصية الأساسية",
      title: "سلمى، 28 · مديرة تسويق · الرياض",
      initial: "س",
      profile: ["مهنية مشغولة", "جدول أسبوعي غير منتظم", "تريد تقدّمًا دون ضغط"],
      goalsTitle: "الأهداف",
      goals: ["الانتظام في التمارين", "إدارة اللياقة حول جدول مزدحم", "تتبّع التقدّم دون ضغط"],
      painTitle: "نقاط الألم",
      pains: ["ساعات العمل غير المنتظمة تقطع الروتين", "يتراجع الحماس بعد الجلسات الفائتة", "التطبيقات لا تتكيّف مع تغيّر نمط الحياة"],
    },
    visual: {
      eyebrow: "الاتجاه البصري",
      title: "لغة أهدأ للتعبير عن التقدّم",
      intro:
        "اخترتُ درجات الخزامى والأزرق الفاتح بعد مراجعة تطبيقات اللياقة، حيث تشيع هذه الألوان الهادئة. فهي تجعل AuraFit مريحًا لا مرهقًا، فيرغب الناس في البقاء ومواصلة الاستخدام.",
      moodboard: img("moodboard-ar"),
      moodboardAlt:
        "لوحة الإلهام لـ AuraFit: تطبيقات لياقة مرجعية، والكلمات المفتاحية ذكاء اصطناعي وذكي ومخصّص وديناميكي وصحي ومرن، وخط Mona Sans، ولوحة ألوان #B7BBEA و#D0EEF9 و#2F3030",
    },
    impact: {
      eyebrow: "الأثر المتوقّع والتحقق",
      title: "مصمَّم ليتطوّر بعد الإطلاق",
      text: "يهدف AuraFit إلى تحسين الانتظام عبر تقليل عناء التخطيط وإظهار التقدّم. وبما أنه مشروع معسكر تدريبي، فهذه فرضيات للاختبار مع مستخدمين حقيقيين، وليست نتائج مقيسة.",
      cards: [
        { label: "الاستمرار", title: "هل يعود المستخدمون مع الوقت؟" },
        { label: "الانتظام", title: "هل تصبح أنماط التمرين أكثر ثباتًا؟" },
        { label: "الميزات المتكيّفة", title: "هل يتفاعل المستخدمون مع الإرشاد المرتبط بالسياق؟" },
      ],
    },
  },
};

/** @deprecated use ConceptContent */
export type AuraFitContent = ConceptContent;
