import { asset, type SiteLang } from "../i18n";

export type CaseCard = {
  num: string;
  meta: string;
  logo: { src: string; alt: string; w: number; h: number; boxed?: boolean };
  title: string;
  body: string;
  tags: string[];
  outcomeLabel: string;
  outcome: string;
  href: string;
  visual: string;
  visualAlt: string;
  tone: "green" | "yellow";
};

export type HomeContent = {
  eyebrow: string;
  h1Top: string;
  h1Rest: string[];
  intro: string;
  ctaWork: string;
  ctaCv: string;
  stats: {
    left: { title: string; sub: string }[];
    right: { value: string; label: string }[];
  };
  clientsLabel: string;
  clients: string[];
  csEyebrow: string;
  csTitle: string;
  csIntro: string;
  cards: CaseCard[];
  viewCase: string;
  viewAll: string;
  approach: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    steps: { title: string; sub: string }[];
    badgeTitle: string;
    badgeText: string;
    imageAlt: string;
  };
  contact: {
    label: string;
    title: string;
    text: string;
    email: string;
    linkedin: string;
  };
};

const en: HomeContent = {
  eyebrow: "UX/UI Product Designer · Riyadh, KSA",
  h1Top: "Designing products",
  h1Rest: ["that go", "beyond", "launch."],
  intro:
    "I design clear Arabic and English products—from user journeys and design systems to high-fidelity interfaces and developer handoff.",
  ctaWork: "View My Work",
  ctaCv: "Download CV",
  stats: {
    left: [
      { title: "RTL/LTR", sub: "Arabic & English Product Design" },
      { title: "UX/UI", sub: "End-to-End Product Design" },
    ],
    right: [
      { value: "5+", label: "Years of Experience" },
      { value: "4+", label: "Industries Worked In" },
    ],
  },
  clientsLabel: "Selected clients, teams & workplaces",
  clients: ["Winclex", "Dar Al Riyadh", "SDM", "Techno Farm Est.", "The Solution Consulting", "Casapiu"],
  csEyebrow: "Case Studies",
  csTitle: "Selected product design work",
  csIntro:
    "Three featured projects showing how I turn complex needs into clear journeys, scalable interface systems, and implementation-ready design.",
  cards: [
    {
      num: "01",
      meta: "Client Project · Live Bilingual Website",
      logo: { src: asset("/home/logo-technofarm.png"), alt: "Techno Farm organic products logo", w: 302, h: 86 },
      title: "A bilingual website and product catalog for a certified organic farm in Riyadh",
      body: "Led the project from brief to launch — positioning, Arabic and English content, UX, UI and an AI-supported build — for a farm that has supplied Saudi Arabia’s leading retailers since 2005.",
      tags: ["Web Design", "Bilingual RTL/LTR", "Content Strategy", "Product Catalog", "AI-Assisted Build"],
      outcomeLabel: "Outcome",
      outcome: "Live on the client’s domain · technofarm.com.sa",
      href: "/technofarm",
      visual: asset("/home/home-technofarm.webp"),
      visualAlt: "TechnoFarm website shown on a desktop browser and a phone",
      tone: "green",
    },
    {
      num: "02",
      meta: "Client Project · Digital Health Platform",
      logo: { src: asset("/home/logo-sdm.webp"), alt: "SDM logo", w: 121, h: 74, boxed: true },
      title: "Connecting patients and doctors through a clear, AI-supported care journey",
      body: "Designed an RTL digital health platform connecting patients and doctors across appointment booking, visit tracking, and access to medical reports. Mapped the connected patient and doctor journeys, shaped the AI-assisted patient experience, built the design system, and delivered high-fidelity interfaces for developer handoff.",
      tags: ["Healthcare UX", "Patient & Doctor Journeys", "AI-Assisted Experience", "RTL Design", "Design System", "Developer Handoff"],
      outcomeLabel: "Outcome",
      outcome: "Approved and handed off for development",
      href: "/sdm",
      visual: asset("/home/home-sdm.webp"),
      visualAlt: "SDM patient platform shown on a laptop and a tablet",
      tone: "yellow",
    },
    {
      num: "03",
      meta: "UX Research · Bootcamp Concept",
      logo: { src: asset("/home/logo-aurafit.png"), alt: "AuraFit logo", w: 175, h: 88 },
      title: "Helping users build consistent fitness habits through AI-driven behavioral insights",
      body: "A behavioral fitness system designed to help Saudi professionals maintain workout consistency despite irregular schedules. Grounded in independent user research, behavioral pattern analysis, and human-centered design — reframing fitness as an adaptive system, not a motivation challenge.",
      tags: ["Behavioral UX", "User Research", "Product Strategy", "Mobile App", "Saudi Market"],
      outcomeLabel: "",
      outcome: "",
      href: "/aurafit",
      visual: asset("/home/home-aurafit.webp"),
      visualAlt: "AuraFit app screens shown on two phones",
      tone: "green",
    },
  ],
  viewCase: "View Case Study",
  viewAll: "View all case studies",
  approach: {
    eyebrow: "How I Work",
    title: "How I approach",
    titleAccent: "design",
    intro: "I connect user needs, product goals, and clear interface systems from discovery through delivery.",
    steps: [
      { title: "Understand the context", sub: "Users, constraints, and business goals" },
      { title: "Structure the journey", sub: "User flows and information architecture" },
      { title: "Design and validate", sub: "Interfaces, prototypes, and feedback" },
      { title: "Support delivery", sub: "Specifications, developer collaboration, and iteration" },
    ],
    badgeTitle: "RTL + LTR",
    badgeText: "Every flow designed natively in both directions",
    imageAlt: "Hand sketching wireframes in a notebook",
  },
  contact: {
    label: "Open to product design roles",
    title: "Let’s design products people can trust.",
    text: "I’m interested in UX/UI product design roles where I can help teams simplify complex journeys and create thoughtful Arabic and English experiences.",
    email: "Email Me",
    linkedin: "LinkedIn",
  },
};

const ar: HomeContent = {
  eyebrow: "مصممة منتجات UX/UI · الرياض",
  h1Top: "أصمّم منتجات رقمية",
  h1Rest: ["تتجاوز", "لحظة", "الإطلاق."],
  intro:
    "أصمّم منتجات رقمية واضحة باللغتين العربية والإنجليزية، بدءًا من رحلات المستخدم وأنظمة التصميم، وصولًا إلى الواجهات عالية الدقة وتسليمها للمطورين.",
  ctaWork: "استعرض أعمالي",
  ctaCv: "تحميل السيرة الذاتية",
  stats: {
    left: [
      { title: "RTL/LTR", sub: "تصميم منتجات بالعربية والإنجليزية" },
      { title: "UX/UI", sub: "تصميم منتجات متكامل" },
    ],
    right: [
      { value: "5+", label: "سنوات من الخبرة" },
      { value: "4+", label: "قطاعات عملتُ بها" },
    ],
  },
  clientsLabel: "عملاء وفرق وجهات عملتُ معها",
  clients: ["Winclex", "دار الرياض", "SDM", "مؤسسة تكنو فارم", "The Solution Consulting", "Casapiu"],
  csEyebrow: "دراسات الحالة",
  csTitle: "أعمال مختارة في تصميم المنتجات",
  csIntro:
    "ثلاثة مشاريع مختارة توضّح كيف أحوّل الاحتياجات المعقّدة إلى رحلات واضحة، وأنظمة واجهات قابلة للتوسّع، وتصاميم جاهزة للتنفيذ.",
  cards: [
    {
      num: "01",
      meta: "مشروع لعميل · موقع ثنائي اللغة منشور",
      logo: { src: asset("/home/logo-technofarm.png"), alt: "شعار تكنو فارم للمنتجات العضوية", w: 302, h: 86 },
      title: "موقع ثنائي اللغة وكتالوج منتجات لمزرعة عضوية معتمدة في الرياض",
      body: "قُدت المشروع من الموجز حتى الإطلاق — التموضع، والمحتوى بالعربية والإنجليزية، وتجربة المستخدم، والواجهات، وبناء مدعوم بالذكاء الاصطناعي — لمزرعة تورّد لكبرى متاجر التجزئة في المملكة منذ عام 2005.",
      tags: ["تصميم المواقع", "عربي وإنجليزي", "استراتيجية المحتوى", "كتالوج المنتجات", "بناء بالذكاء الاصطناعي"],
      outcomeLabel: "النتيجة",
      outcome: "منشور على نطاق العميل · technofarm.com.sa",
      href: "/ar/technofarm",
      visual: asset("/home/home-technofarm-ar.webp"),
      visualAlt: "موقع تكنو فارم معروض على متصفح سطح المكتب والجوال",
      tone: "green",
    },
    {
      num: "02",
      meta: "مشروع لعميل · منصة صحية رقمية",
      logo: { src: asset("/home/logo-sdm.webp"), alt: "شعار سدم", w: 121, h: 74, boxed: true },
      title: "ربط المرضى بالأطباء عبر رحلة رعاية واضحة مدعومة بالذكاء الاصطناعي",
      body: "صمّمتُ منصة صحية رقمية تعمل من اليمين إلى اليسار، تربط المرضى بالأطباء في حجز المواعيد ومتابعة الزيارات والاطلاع على التقارير الطبية. رسمتُ رحلتَي المريض والطبيب المترابطتين، وشكّلتُ تجربة المريض المدعومة بالذكاء الاصطناعي، وبنيتُ نظام التصميم، وسلّمتُ واجهات عالية الدقة جاهزة للتطوير.",
      tags: ["تجربة مستخدم صحية", "رحلات المريض والطبيب", "تجربة مدعومة بالذكاء الاصطناعي", "تصميم من اليمين لليسار", "نظام التصميم", "التسليم للمطورين"],
      outcomeLabel: "النتيجة",
      outcome: "اعتُمد التصميم وسُلّم للتطوير",
      href: "/ar/sdm",
      visual: asset("/home/home-sdm-ar.webp"),
      visualAlt: "منصة سدم للمرضى معروضة على حاسوب محمول وجهاز لوحي",
      tone: "yellow",
    },
    {
      num: "03",
      meta: "بحث تجربة المستخدم · مشروع معسكر تدريبي",
      logo: { src: asset("/home/logo-aurafit.png"), alt: "شعار أورافيت", w: 175, h: 88 },
      title: "مساعدة المستخدمين على بناء عادات رياضية منتظمة عبر رؤى سلوكية مدعومة بالذكاء الاصطناعي",
      body: "نظام لياقة سلوكي يساعد المهنيين في السعودية على الحفاظ على انتظام تمارينهم رغم جداولهم المتغيّرة. يستند إلى بحث مستقل مع المستخدمين، وتحليل للأنماط السلوكية، وتصميم يتمحور حول الإنسان، ليقدّم اللياقة نظامًا يتكيّف مع حياة المستخدم، بدلًا من تحدٍّ يعتمد على الحماس وحده.",
      tags: ["تجربة مستخدم سلوكية", "أبحاث المستخدمين", "استراتيجية المنتج", "تطبيق جوال", "السوق السعودي"],
      outcomeLabel: "",
      outcome: "",
      href: "/ar/aurafit",
      visual: asset("/home/home-aurafit-ar.webp"),
      visualAlt: "شاشات تطبيق أورافيت معروضة على هاتفين",
      tone: "green",
    },
  ],
  viewCase: "عرض دراسة الحالة",
  viewAll: "عرض جميع دراسات الحالة",
  approach: {
    eyebrow: "أسلوب عملي",
    title: "منهجيتي في",
    titleAccent: "التصميم",
    intro: "أربط احتياجات المستخدمين بأهداف المنتج وأنظمة واجهات واضحة، من مرحلة الاستكشاف حتى التسليم.",
    steps: [
      { title: "فهم السياق", sub: "المستخدمون والقيود وأهداف العمل" },
      { title: "هيكلة الرحلة", sub: "مسارات المستخدم وبنية المعلومات" },
      { title: "التصميم والتحقق", sub: "الواجهات والنماذج الأولية والملاحظات" },
      { title: "دعم التنفيذ", sub: "المواصفات والتعاون مع المطورين والتحسين المستمر" },
    ],
    badgeTitle: "RTL + LTR",
    badgeText: "كل رحلة مصمّمة بإتقان في الاتجاهين",
    imageAlt: "يد ترسم مخططات أولية للواجهات في دفتر",
  },
  contact: {
    label: "متاحة لفرص تصميم المنتجات",
    title: "لنصمّم معًا منتجات يثق بها الناس.",
    text: "أتطلّع إلى فرص في تصميم منتجات UX/UI، أساعد فيها الفرق على تبسيط الرحلات المعقّدة وبناء تجارب مدروسة باللغتين العربية والإنجليزية.",
    email: "راسلني",
    linkedin: "LinkedIn",
  },
};

export const homeContent: Record<SiteLang, HomeContent> = { en, ar };
