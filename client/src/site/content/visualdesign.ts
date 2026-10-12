import { asset, type SiteLang } from "../i18n";

const img = (n: string) => asset(`/visualdesign-cs/${n}.webp`);

type Item = { title: string; text: string };
type Pic = { src: string; alt: string };
type Block = { eyebrow: string; title: string; intro: string };

export type VisualDesignContent = {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; lead: string; body: string; chips: string[]; visual: string; visualAlt: string };
  overviewLabel: string;
  overview: { label: string; value: string }[];
  practice: Block & { items: Item[] };
  qr: Block & { pics: Pic[] };
  campaigns: Block & { pics: Pic[] };
  weqaa: Block & { pic: Pic };
  telescope: Block & { pics: Pic[] };
  packaging: Block & { pics: Pic[] };
  reflection: Block & { items: Item[] };
};

const pics = (names: string[], alts: string[]): Pic[] => names.map((n, i) => ({ src: img(n), alt: alts[i] }));

const QR = ["qr-1", "qr-2", "qr-3", "qr-4", "qr-5", "qr-6"];
const CAMP = ["camp-1", "camp-2", "camp-3", "camp-4", "camp-5", "camp-6", "camp-7", "camp-8", "camp-9", "camp-10"];
const TEL = ["tel-bag", "tel-stationery", "tel-sign"];
const PACK = ["pack-beans", "pack-salad", "pack-oat"];

export const visualDesignContent: Record<SiteLang, VisualDesignContent> = {
  en: {
    metaTitle: "Visual Design — Lamia Alrowaished",
    metaDescription:
      "Brand, campaign, presentation, environmental and packaging work: client and personal projects showing how visual systems create recognition and communicate clearly.",
    hero: {
      eyebrow: "Visual design · Client & personal work",
      title: "Visual Design",
      lead: "Brand, campaign, presentation, environmental, and packaging work.",
      body: "A curated collection of client and personal projects showing how visual systems create recognition, organize information, and communicate clearly across physical and digital touchpoints.",
      chips: ["Client work", "Personal work", "AR / EN"],
      visual: img("hero-en"),
      visualAlt: "Telescope Studio hanging sign, a Coffee Premium cup and QR Holding stationery",
    },
    overviewLabel: "Project overview",
    overview: [
      { label: "Scope", value: "Client + personal work" },
      { label: "Market", value: "Saudi Arabia + MENA" },
      { label: "Disciplines", value: "Brand · campaign · print" },
      { label: "Approach", value: "Systematic visual storytelling" },
    ],
    practice: {
      eyebrow: "Practice overview",
      title: "Visual craft that supports the wider experience",
      intro:
        "The collection spans different industries and formats, but the underlying work is consistent: establish hierarchy, preserve brand character, and adapt the system to its communication context.",
      items: [
        { title: "Identity systems", text: "Logo construction, color, typography, voice, and applications." },
        { title: "Campaign adaptation", text: "Consistent communication across cultural and seasonal moments." },
        { title: "Presentation storytelling", text: "Structured layouts that make complex information easier to follow." },
        { title: "Physical applications", text: "Environmental graphics, merchandise, and packaging in context." },
      ],
    },
    qr: {
      eyebrow: "Project 01 · Client work",
      title: "QR brand identity system",
      intro:
        "A complete guideline system covering logo construction, color, typography, voice, and application across print and digital touchpoints.",
      pics: pics(QR, [
        "QR Holding Group brand guidelines cover",
        "QR Holding Group bilingual logo on dark green",
        "Logo dimensions and clear-space page",
        "Security guard uniform applications",
        "QR logo on a building facade",
        "QR stationery: letterhead, envelopes and business cards",
      ]),
    },
    campaigns: {
      eyebrow: "Project 02 · Client campaigns",
      title: "Campaign systems with cultural relevance",
      intro:
        "Winclex and The Solution Consulting required consistent brand expression across national occasions, seasonal celebrations, and awareness communication for Saudi audiences.",
      pics: pics(CAMP, [
        "Winclex Saudi National Day post",
        "Winclex Ramadan post",
        "Winclex Industrial Workers Day post",
        "Winclex World Day for Safety and Health at Work post",
        "Winclex Labour Day post",
        "Winclex Founding Day post",
        "Winclex heat stroke awareness post",
        "Winclex new year 2025 post",
        "Winclex Gulf Engineer Day post",
        "The Solution Consulting brand applications on phone and print",
      ]),
    },
    weqaa: {
      eyebrow: "Project 03 · Client work",
      title: "Weqaa Center presentation system",
      intro:
        "A desert-inspired presentation template for the National Center for the Prevention and Control of Plant Pests and Animal Diseases (Weqaa), balancing official branding with a clear, reusable slide language.",
      pic: { src: img("weqaa"), alt: "Six Weqaa Center presentation slides with desert backgrounds and the Weqaa logo" },
    },
    telescope: {
      eyebrow: "Project 04 · Personal brand concept",
      title: "Telescope Studio across identity and space",
      intro:
        "A creative-studio identity built around the idea of turning the unimaginable into possible, extended through stationery, circular signage, posters, and branded merchandise.",
      pics: pics(TEL, [
        "Telescope Studio tote bag on a red armchair",
        "Telescope Studio stationery set",
        "Telescope Studio poster: turns the unimaginable into possible",
      ]),
    },
    packaging: {
      eyebrow: "Project 05 · Personal explorations",
      title: "Packaging designed for hierarchy and shelf presence",
      intro:
        "Three explorations investigate label hierarchy, illustrated pattern, material context, and how a brand can stay recognizable across very different packaging formats.",
      pics: pics(PACK, [
        "Coffee bean pouch with fruit and beans",
        "October speciality salad bowl",
        "Healthy dessert cups",
      ]),
    },
    reflection: {
      eyebrow: "Reflection",
      title: "Visual design makes every touchpoint feel intentional",
      intro:
        "Across these projects, visual design is not treated as decoration. It creates hierarchy, reinforces identity, and helps information remain coherent as it moves between formats, audiences, and environments.",
      items: [
        { title: "Consistency", text: "Carry recognizable rules across every format." },
        { title: "Context", text: "Adapt the system to audience, medium, and moment." },
        { title: "Hierarchy", text: "Make the most important message visible first." },
        { title: "Craft", text: "Use spacing, imagery, and typography with purpose." },
      ],
    },
  },

  ar: {
    metaTitle: "التصميم البصري — لمياء الرويشد",
    metaDescription:
      "هويات تجارية وحملات وعروض تقديمية وتصميم بيئي وتغليف: مشاريع للعملاء ومشاريع شخصية توضّح كيف تبني الأنظمة البصرية التميّز وتتواصل بوضوح.",
    hero: {
      eyebrow: "التصميم البصري · أعمال للعملاء وأعمال شخصية",
      title: "التصميم البصري",
      lead: "هويات تجارية، وحملات، وعروض تقديمية، وتصميم بيئي، وتغليف.",
      body: "مجموعة مختارة من مشاريع العملاء والمشاريع الشخصية، توضّح كيف تبني الأنظمة البصرية التميّز، وتنظّم المعلومات، وتتواصل بوضوح عبر نقاط التواصل المطبوعة والرقمية.",
      chips: ["أعمال للعملاء", "أعمال شخصية", "عربي / إنجليزي"],
      visual: img("hero-ar"),
      visualAlt: "لافتة Telescope Studio المعلّقة، وكوب Coffee Premium، وقرطاسية مجموعة كيو آر",
    },
    overviewLabel: "نظرة عامة على المشروع",
    overview: [
      { label: "النطاق", value: "أعمال للعملاء + أعمال شخصية" },
      { label: "السوق", value: "المملكة العربية السعودية" },
      { label: "المجالات", value: "هوية · حملات · مطبوعات" },
      { label: "المنهجية", value: "سرد بصري منهجي" },
    ],
    practice: {
      eyebrow: "نظرة على الممارسة",
      title: "حِرفة بصرية تدعم التجربة الأشمل",
      intro:
        "تتنوّع هذه المجموعة بين قطاعات وصيغ مختلفة، لكن جوهر العمل ثابت: بناء تسلسل واضح، والحفاظ على شخصية العلامة، وتكييف النظام مع سياق التواصل.",
      items: [
        { title: "أنظمة الهوية", text: "بناء الشعار، والألوان، والخطوط، ونبرة الصوت، والتطبيقات." },
        { title: "تكييف الحملات", text: "تواصل متّسق عبر المناسبات الوطنية والموسمية." },
        { title: "سرد العروض التقديمية", text: "تخطيطات منظّمة تجعل المعلومات المعقّدة أسهل في المتابعة." },
        { title: "التطبيقات المادية", text: "الجرافيك البيئي، والمنتجات الترويجية، والتغليف في سياقها الفعلي." },
      ],
    },
    qr: {
      eyebrow: "المشروع 01 · عمل لعميل",
      title: "نظام هوية QR البصرية",
      intro:
        "دليل هوية متكامل يغطي بناء الشعار، والألوان، والخطوط، ونبرة الصوت، وتطبيقاتها عبر نقاط التواصل المطبوعة والرقمية.",
      pics: pics(QR, [
        "غلاف دليل الهوية لمجموعة كيو آر القابضة",
        "شعار مجموعة كيو آر القابضة ثنائي اللغة على خلفية خضراء",
        "صفحة أبعاد الشعار والمساحة المحيطة",
        "تطبيق الهوية على زي حراس الأمن",
        "شعار كيو آر على واجهة مبنى",
        "قرطاسية كيو آر: ورق رسمي وأظرف وبطاقات عمل",
      ]),
    },
    campaigns: {
      eyebrow: "المشروع 02 · حملات للعملاء",
      title: "أنظمة حملات مرتبطة بالثقافة المحلية",
      intro:
        "احتاجت شركتا Winclex و The Solution Consulting إلى تعبير متّسق عن العلامة عبر المناسبات الوطنية والاحتفالات الموسمية وحملات التوعية الموجّهة للجمهور السعودي.",
      pics: pics(CAMP, [
        "تصميم Winclex لليوم الوطني السعودي",
        "تصميم Winclex لشهر رمضان",
        "تصميم Winclex ليوم العمال الصناعيين",
        "تصميم Winclex لليوم العالمي للسلامة والصحة المهنية",
        "تصميم Winclex ليوم العمال",
        "تصميم Winclex ليوم التأسيس",
        "تصميم Winclex للتوعية بضربات الشمس",
        "تصميم Winclex للعام الجديد 2025",
        "تصميم Winclex ليوم المهندس الخليجي",
        "تطبيقات هوية The Solution Consulting على الجوال والمطبوعات",
      ]),
    },
    weqaa: {
      eyebrow: "المشروع 03 · عمل لعميل",
      title: "نظام العروض التقديمية لمركز وقاء",
      intro:
        "قالب عروض تقديمية مستوحى من الصحراء للمركز الوطني للوقاية من الآفات النباتية والأمراض الحيوانية ومكافحتها (وقاء)، يوازن بين الهوية الرسمية ولغة شرائح واضحة وقابلة لإعادة الاستخدام.",
      pic: { src: img("weqaa"), alt: "ست شرائح من عروض مركز وقاء بخلفيات صحراوية وشعار المركز" },
    },
    telescope: {
      eyebrow: "المشروع 04 · هوية مفاهيمية شخصية",
      title: "Telescope Studio: من الهوية إلى المساحة",
      intro:
        "هوية لاستوديو إبداعي قائمة على فكرة تحويل ما لا يُتخيَّل إلى ممكن، تمتد إلى القرطاسية، واللافتات الدائرية، والملصقات، والمنتجات الترويجية.",
      pics: pics(TEL, [
        "حقيبة قماشية لـ Telescope Studio على كرسي أحمر",
        "مجموعة قرطاسية Telescope Studio",
        "ملصق Telescope Studio",
      ]),
    },
    packaging: {
      eyebrow: "المشروع 05 · تجارب شخصية",
      title: "تغليف مصمَّم للتسلسل البصري والحضور على الرف",
      intro:
        "ثلاث تجارب تستكشف تسلسل معلومات الملصق، والنقوش المرسومة، وسياق المواد، وكيف تحافظ العلامة على تميّزها عبر صيغ تغليف مختلفة تمامًا.",
      pics: pics(PACK, ["كيس حبوب قهوة مع فواكه وحبوب", "علبة سلطة October", "أكواب حلوى صحية"]),
    },
    reflection: {
      eyebrow: "التأمل",
      title: "التصميم البصري يجعل كل نقطة تواصل مقصودة",
      intro:
        "في هذه المشاريع، لا يُعامَل التصميم البصري كزينة؛ بل يبني التسلسل، ويعزّز الهوية، ويحافظ على تماسك المعلومات أثناء انتقالها بين الصيغ والجماهير والبيئات.",
      items: [
        { title: "الاتساق", text: "تطبيق قواعد مميّزة عبر كل صيغة." },
        { title: "السياق", text: "تكييف النظام مع الجمهور والوسيط واللحظة." },
        { title: "التسلسل", text: "إظهار الرسالة الأهم أولًا." },
        { title: "الإتقان", text: "توظيف المسافات والصور والخطوط بهدف." },
      ],
    },
  },
};
