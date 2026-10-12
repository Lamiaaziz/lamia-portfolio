import { asset, type SiteLang } from "../i18n";

export type Role = { title: string; org: string; dates: string; points: string[] };

export type ExperienceContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroTop: string;
  heroRest: string[];
  intro: string;
  scrollLabel: string;
  historyEyebrow: string;
  historyTitle: string;
  historyIntro: string;
  roles: Role[];
  capEyebrow: string;
  capTitle: string[];
  capIntro: string;
  capabilities: { icon: string; title: string; text: string }[];
  bringEyebrow: string;
  bringTitle: string;
  bringIntro: string;
  pillars: { title: string; text: string }[];
  toolsEyebrow: string;
  toolsTitle: string;
};

const TOOL_ICONS = {
  research: asset("/experience/icon-research.svg"),
  flows: asset("/experience/icon-flows.svg"),
  interface: asset("/experience/icon-interface.svg"),
  bilingual: asset("/experience/icon-bilingual.svg"),
};

export const TOOLS = [
  { name: "Figma", mark: "F", color: "#f24e1e" },
  { name: "Miro", mark: "M", color: "#ffd02f", dark: true },
  { name: "Framer", mark: "Fr", color: "#304638" },
  { name: "Webflow", mark: "W", color: "#4353ff" },
  { name: "Illustrator", mark: "Ai", color: "#ff9a00" },
  { name: "Photoshop", mark: "Ps", color: "#31a8ff" },
  { name: "InDesign", mark: "Id", color: "#ff3366" },
];

const en: ExperienceContent = {
  metaTitle: "Experience — Lamia Alrowaished",
  metaDescription:
    "Career history, capabilities and tools of Lamia Alrowaished, a bilingual UX/UI product designer in Riyadh.",
  eyebrow: "Career, capabilities & collaboration",
  heroTop: "Researching.",
  heroRest: ["People.", "Context.", "Needs."],
  intro:
    "Across client development, spatial experience, and digital products, I turn conversations, context, and constraints into clearer decisions.",
  scrollLabel: "Scroll to career history",
  historyEyebrow: "Career history",
  historyTitle: "Professional experience",
  historyIntro: "A research-informed path across client discovery, spatial journeys, bilingual products, and delivery.",
  roles: [
    {
      title: "Freelance UX/UI & Web Designer",
      org: "Techno Farm Est.",
      dates: "Aug 2026 – Present",
      points: [
        "Led a bilingual website from brief to launch: positioning, content, UX, UI and deployment",
        "Wrote all Arabic and English content, product names and B2B messaging for retail buyers",
        "Structured a 40+ product catalog as editable data, ready for future online ordering",
        "Directed an AI-assisted build and published the live site on the client’s own domain",
      ],
    },
    {
      title: "Freelance UX/UI Designer",
      org: "SDM",
      dates: "Jul 2026 – Sep 2026",
      points: [
        "Mapped patient and doctor journeys across appointment booking, visit tracking, medical reports, and AI-assisted support",
        "Reviewed requirements, workflows, and product constraints to identify friction and information needs",
        "Translated findings into RTL flows, reusable components, a design system, and approved high-fidelity screens",
        "Iterated through client and team feedback, then prepared specifications and developer handoff",
      ],
    },
    {
      title: "Experience Designer — Wayfinding & Environmental Design",
      org: "Dar Al Riyadh",
      dates: "Sep 2025 – Sep 2026",
      points: [
        "Mapped visitor journeys and decision points across a 24-floor mixed-use development",
        "Gathered and reconciled spatial requirements from multidisciplinary stakeholders",
        "Structured bilingual information hierarchy, zoning, and wayfinding logic for varied visitor needs",
        "Communicated findings through location plans, signage families, iconography, and color systems",
      ],
    },
    {
      title: "Account Development Specialist",
      org: "Winclex",
      dates: "Dec 2022 – Sep 2025",
      points: [
        "Partnered with sales and marketing to understand client needs, business goals, priorities, and constraints",
        "Led client and stakeholder conversations, documented requirements, and translated them into tailored proposals",
        "Prepared proposals, purchase orders, and follow-up documentation across the account lifecycle",
        "Built Excel tracking dashboards and used client feedback to improve service fit and internal follow-up",
      ],
    },
    {
      title: "Marketing Graphic Designer",
      org: "Casapiu",
      dates: "Jun 2021 – Dec 2022",
      points: [
        "Designed website interfaces and digital campaigns across client and internal needs",
        "Improved visual hierarchy and content clarity across digital and print materials",
        "Created brand identity assets and bilingual marketing communications",
      ],
    },
  ],
  capEyebrow: "Product design capabilities",
  capTitle: ["Capabilities for end-to-end", "product design"],
  capIntro: "Research, product structure, interface systems, and bilingual design—from discovery through developer handoff.",
  capabilities: [
    { icon: TOOL_ICONS.research, title: "UX Research & Product Clarity", text: "Review products, identify friction, and turn findings into prioritized improvements." },
    { icon: TOOL_ICONS.flows, title: "User Flows & Information Architecture", text: "Map tasks, navigation, and information architecture so complex journeys feel clear." },
    { icon: TOOL_ICONS.interface, title: "Interface Design & Design Systems", text: "Create high-fidelity interfaces, reusable systems, and prototypes ready for testing and handoff." },
    { icon: TOOL_ICONS.bilingual, title: "RTL/LTR Product Design", text: "Design coherent Arabic and English experiences with native RTL and LTR patterns." },
  ],
  bringEyebrow: "Working with product teams",
  bringTitle: "What I bring beyond the screens",
  bringIntro: "Clear thinking, bilingual product judgment, and practical support from early definition through delivery.",
  pillars: [
    { title: "Product thinking", text: "Connect user needs, business goals, and constraints before moving into interface design." },
    { title: "Bilingual systems", text: "Design Arabic and English journeys natively, with consistent components and content hierarchy." },
    { title: "Delivery partnership", text: "Prototype, document decisions, and collaborate closely with developers through handoff and iteration." },
  ],
  toolsEyebrow: "Tools",
  toolsTitle: "I work with",
};

const ar: ExperienceContent = {
  metaTitle: "الخبرات — لمياء الرويشد",
  metaDescription: "المسيرة المهنية والقدرات والأدوات لدى لمياء الرويشد، مصممة منتجات UX/UI ثنائية اللغة في الرياض.",
  eyebrow: "المسيرة المهنية · القدرات · التعاون",
  heroTop: "أبحثُ في",
  heroRest: ["تجربة المستخدم.", "أدرس السياق.", "أحدّد الاحتياج."],
  intro:
    "من حلول إدارة علاقات العملاء والتجارب المكانية إلى المنتجات الرقمية، أحوّل الحوارات والسياقات والقيود إلى قرارات تصميمية أكثر وضوحًا.",
  scrollLabel: "انتقل إلى المسيرة المهنية",
  historyEyebrow: "المسيرة المهنية",
  historyTitle: "الخبرات المهنية",
  historyIntro: "مسيرة قائمة على البحث، تمتد من فهم احتياجات العملاء إلى الرحلات المكانية والمنتجات ثنائية اللغة والتسليم.",
  roles: [
    {
      title: "مصممة UX/UI ومواقع مستقلة",
      org: "مؤسسة تكنو فارم",
      dates: "أغسطس 2026 – حتى الآن",
      points: [
        "قُدتُ موقعًا ثنائي اللغة من الموجز حتى الإطلاق: التموضع، والمحتوى، وتجربة المستخدم، والواجهات، والنشر",
        "كتبتُ كامل المحتوى بالعربية والإنجليزية، وأسماء المنتجات، ورسائل قطاع الأعمال لمشتري التجزئة",
        "نظّمتُ كتالوجًا من أكثر من 40 منتجًا كبيانات قابلة للتعديل، جاهزة للطلب عبر الإنترنت مستقبلًا",
        "وجّهتُ بناءً مدعومًا بالذكاء الاصطناعي، ونشرتُ الموقع على نطاق العميل",
      ],
    },
    {
      title: "مصممة UX/UI مستقلة",
      org: "SDM",
      dates: "يوليو 2026 – سبتمبر 2026",
      points: [
        "رسمتُ رحلات المريض والطبيب في حجز المواعيد ومتابعة الزيارات والتقارير الطبية والمساعدة بالذكاء الاصطناعي",
        "راجعتُ المتطلبات وسير العمل وقيود المنتج لتحديد نقاط الاحتكاك واحتياجات المعلومات",
        "حوّلتُ النتائج إلى مسارات من اليمين إلى اليسار، ومكوّنات قابلة لإعادة الاستخدام، ونظام تصميم، وشاشات عالية الدقة معتمدة",
        "طوّرتُ التصميم بناءً على ملاحظات العميل والفريق، ثم أعددتُ المواصفات وسلّمتها للمطورين",
      ],
    },
    {
      title: "مصممة تجارب — التوجيه المكاني والتصميم البيئي",
      org: "دار الرياض",
      dates: "سبتمبر 2025 – سبتمبر 2026",
      points: [
        "رسمتُ رحلات الزوار ونقاط اتخاذ القرار في مشروع متعدد الاستخدامات من 24 طابقًا",
        "جمعتُ المتطلبات المكانية من أصحاب المصلحة متعددي التخصصات ووفّقتُ بينها",
        "نظّمتُ تسلسل المعلومات ثنائي اللغة، وتقسيم المناطق، ومنطق التوجيه لاحتياجات الزوار المختلفة",
        "عرضتُ النتائج من خلال مخططات المواقع، وعائلات اللافتات، والأيقونات، وأنظمة الألوان",
      ],
    },
    {
      title: "أخصائية تطوير حسابات",
      org: "Winclex",
      dates: "ديسمبر 2022 – سبتمبر 2025",
      points: [
        "تعاونتُ مع فريقَي المبيعات والتسويق لفهم احتياجات العملاء وأهدافهم وأولوياتهم وقيودهم",
        "قُدتُ الحوارات مع العملاء وأصحاب المصلحة، ووثّقتُ المتطلبات، وحوّلتها إلى عروض مخصّصة",
        "أعددتُ العروض وأوامر الشراء ووثائق المتابعة طوال دورة حياة الحساب",
        "أنشأتُ لوحات متابعة في Excel، واستفدتُ من ملاحظات العملاء لتحسين ملاءمة الخدمة والمتابعة الداخلية",
      ],
    },
    {
      title: "مصممة جرافيك تسويقي",
      org: "Casapiu",
      dates: "يونيو 2021 – ديسمبر 2022",
      points: [
        "صمّمتُ واجهات مواقع إلكترونية وحملات رقمية لاحتياجات العملاء والاحتياجات الداخلية",
        "حسّنتُ التسلسل البصري ووضوح المحتوى في المواد الرقمية والمطبوعة",
        "أنشأتُ عناصر للهوية البصرية ومواد تسويقية ثنائية اللغة",
      ],
    },
  ],
  capEyebrow: "قدرات تصميم المنتجات",
  capTitle: ["قدرات متكاملة", "في تصميم المنتجات"],
  capIntro: "البحث، وهيكلة المنتج، وأنظمة الواجهات، والتصميم ثنائي اللغة، من الاستكشاف حتى التسليم للمطورين.",
  capabilities: [
    { icon: TOOL_ICONS.research, title: "أبحاث تجربة المستخدم ووضوح المنتج", text: "أراجع المنتجات، وأحدد نقاط الاحتكاك، وأحوّل النتائج إلى تحسينات مرتّبة حسب الأولوية." },
    { icon: TOOL_ICONS.flows, title: "مسارات المستخدم وبنية المعلومات", text: "أرسم المهام والتنقل وبنية المعلومات لتبدو الرحلات المعقّدة واضحة." },
    { icon: TOOL_ICONS.interface, title: "تصميم الواجهات وأنظمة التصميم", text: "أصمّم واجهات عالية الدقة وأنظمة قابلة لإعادة الاستخدام ونماذج أولية جاهزة للاختبار والتسليم." },
    { icon: TOOL_ICONS.bilingual, title: "تصميم المنتجات بالاتجاهين", text: "أصمّم تجارب متّسقة بالعربية والإنجليزية وفق أنماط أصيلة للاتجاهين." },
  ],
  bringEyebrow: "العمل مع فرق المنتجات",
  bringTitle: "ما أقدّمه إلى جانب الشاشات",
  bringIntro: "تفكير واضح، وحسّ ثنائي اللغة في تصميم المنتجات، ودعم عملي من التعريف المبكر حتى التسليم.",
  pillars: [
    { title: "التفكير في المنتج", text: "أربط احتياجات المستخدمين وأهداف العمل والقيود قبل الانتقال إلى تصميم الواجهات." },
    { title: "أنظمة ثنائية اللغة", text: "أصمّم رحلات بالعربية والإنجليزية بشكل أصيل، بمكوّنات متّسقة وتسلسل محتوى واضح." },
    { title: "شراكة في التنفيذ", text: "أبني النماذج الأولية، وأوثّق القرارات، وأعمل عن قرب مع المطورين خلال التسليم والتحسين." },
  ],
  toolsEyebrow: "الأدوات",
  toolsTitle: "أعمل باستخدام",
};

export const experienceContent: Record<SiteLang, ExperienceContent> = { en, ar };
