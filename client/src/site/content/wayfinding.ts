import type { SiteLang } from "../i18n";

type Item = { title: string; text: string };
export type ZoneTone = "yellow" | "blue" | "orange" | "plum";

export type WayfindingContent = {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string[]; lead: string; body: string; chips: string[]; note: string };
  sign: { marker: string; rows: { en: string; ar: string; arrow: "left" | "right" | "up"; tone: ZoneTone }[]; footer: string };
  overviewLabel: string;
  overview: { label: string; value: string }[];
  context: { eyebrow: string; title: string; text: string; roleLabel: string; roleTitle: string; roleText: string };
  users: { eyebrow: string; title: string; intro: string; items: Item[] };
  glance: {
    eyebrow: string;
    title: string;
    intro: string;
    zones: { level: string; title: string; text: string; tone: ZoneTone }[];
    families: { mark: string; label: string; tone: ZoneTone }[];
    note: string;
  };
  strategy: { eyebrow: string; title: string; intro: string; items: Item[] };
  process: { eyebrow: string; title: string; items: Item[] };
  signage: { eyebrow: string; title: string; intro: string; families: { title: string; list: string[]; tone: ZoneTone }[] };
  zoning: { eyebrow: string; title: string; usersLabel: string; zones: { level: string; title: string; users: string; text: string; tone: ZoneTone }[] };
  principles: { eyebrow: string; title: string; items: Item[] };
  value: { eyebrow: string; title: string; text: string; nextLabel: string; next: Item[] };
};

export const wayfindingContent: Record<SiteLang, WayfindingContent> = {
  en: {
    metaTitle: "Wayfinding & Signage Design — Lamia Alrowaished",
    metaDescription:
      "A bilingual wayfinding and signage system for a 24-floor mixed-use tower, covering zoning, sign families, pictograms and visual standards.",
    hero: {
      eyebrow: "Real-world project · Environmental design",
      title: ["Wayfinding &", "Signage Design"],
      lead: "A bilingual navigation system for a complex mixed-use tower.",
      body: "A comprehensive system spanning parking, commercial, medical, hospitality, and residential zones—designed to help diverse users move with confidence.",
      chips: ["24 floors", "6 parking levels", "AR / EN"],
      note: "Project visuals are confidential under client agreement. The diagrams on this page are simplified illustrations of the system logic, not project artwork.",
    },
    sign: {
      marker: "Bilingual wayfinding",
      rows: [
        { en: "Parking", ar: "مواقف السيارات", arrow: "left", tone: "yellow" },
        { en: "Hospital", ar: "المستشفى", arrow: "right", tone: "blue" },
        { en: "Residences", ar: "السكن", arrow: "up", tone: "orange" },
        { en: "Retail", ar: "المتاجر", arrow: "right", tone: "plum" },
      ],
      footer: "Clear hierarchy · Consistent symbols · Zone color",
    },
    overviewLabel: "Project overview",
    overview: [
      { label: "Year", value: "2025–2026" },
      { label: "Role", value: "Experience Designer" },
      { label: "Context", value: "Mixed-use development" },
      { label: "System", value: "Arabic + English" },
    ],
    context: {
      eyebrow: "Project context",
      title: "One tower, many destinations, very different needs",
      text: "The 24-floor development brings together apartments, retail, a hospital, hotels, offices, and underground parking. The challenge was to establish one navigation language without flattening the distinct needs of each zone.",
      roleLabel: "My role",
      roleTitle: "Build the rules behind every sign",
      roleText:
        "I developed the system guidelines for color, type, bilingual hierarchy, pictograms, arrows, materials, and modular layouts—then defined how those rules adapt across environments.",
    },
    users: {
      eyebrow: "User needs",
      title: "Designing for six navigation mindsets",
      intro:
        "The system had to support familiar daily routines, first-time visits, high-stress medical journeys, and operational movement.",
      items: [
        { title: "Residents", text: "Fast routes for home, parking, amenities, and guests." },
        { title: "Hotel guests", text: "Arrival cues without prior building knowledge." },
        { title: "Patients & staff", text: "Clear paths to clinics, departments, and exits." },
        { title: "Shoppers & visitors", text: "Easy exploration and confident return routes." },
        { title: "Office workers", text: "Efficient circulation between entries and offices." },
        { title: "Service personnel", text: "Operational access separated from public routes." },
      ],
    },
    glance: {
      eyebrow: "System at a glance",
      title: "How the system is organized",
      intro: "Three zones stacked in one tower, and four sign families that share the same visual language.",
      zones: [
        { level: "Upper", title: "Residential zone", text: "Residents & guests: privacy and precise floor and unit ID", tone: "orange" },
        { level: "Ground", title: "Commercial zone", text: "Visitors & customers: easy exploration", tone: "blue" },
        { level: "P0–P5", title: "Parking zone", text: "All users: color memory and clear lift cores", tone: "yellow" },
      ],
      families: [
        { mark: "ID", label: "Identification", tone: "yellow" },
        { mark: "→", label: "Directional", tone: "blue" },
        { mark: "i", label: "Information & regulatory", tone: "orange" },
        { mark: "P", label: "Parking", tone: "plum" },
      ],
      note: "Simplified illustration of the system logic. Not project artwork.",
    },
    strategy: {
      eyebrow: "System strategy",
      title: "Turn complexity into progressive decisions",
      intro: "Users should receive the right information at the right moment—not every possible instruction at once.",
      items: [
        { title: "Zone first", text: "Establish where the user is: parking, commercial, medical, hospitality, or residential." },
        { title: "Decision point", text: "Place guidance before junctions, lifts, entries, and transitions." },
        { title: "Hierarchy next", text: "Separate primary destinations from supporting and regulatory information." },
        { title: "Confirm arrival", text: "Use identification signs to close the loop and reassure the user." },
      ],
    },
    process: {
      eyebrow: "Design process",
      title: "A three-phase approach",
      items: [
        { title: "Assessment & research", text: "Analyze plans, users, traffic flows, decision points, and accessibility needs." },
        { title: "Strategy development", text: "Define zones, content hierarchy, parking color-coding, and information architecture." },
        { title: "Design & visual language", text: "Create the bilingual type system, ISO-based pictograms, arrows, materials, and modular layouts." },
      ],
    },
    signage: {
      eyebrow: "Signage system",
      title: "Four families, one visual language",
      intro:
        "Each family answers a different navigation question while sharing the same hierarchy, typography, symbols, spacing, and material logic.",
      families: [
        { title: "Identification", list: ["External building ID", "Entrance ID", "Reception ID", "Apartment ID", "Lift ID"], tone: "yellow" },
        { title: "Directional", list: ["Vehicular routes", "Apartment directions", "Hospital departments", "Lift & stair guidance", "Zone transitions"], tone: "blue" },
        { title: "Information & regulatory", list: ["Directories", "Floor information", "Emergency exits", "Evacuation plans", "Back-of-house ID"], tone: "orange" },
        { title: "Parking", list: ["Level ID", "Directional signs", "Column & stall ID", "Accessible parking", "Safety notices"], tone: "plum" },
      ],
    },
    zoning: {
      eyebrow: "Zoning strategy",
      title: "Three environments, three navigation priorities",
      usersLabel: "Primary users",
      zones: [
        { level: "P0–P5", title: "Parking zone", users: "All users", text: "Strong color memory, vehicle-to-pedestrian transitions, and clear lift cores.", tone: "yellow" },
        { level: "Ground", title: "Commercial zone", users: "Visitors & customers", text: "Intuitive exploration, visible entries, and seamless transitions between uses.", tone: "blue" },
        { level: "Upper", title: "Residential zone", users: "Residents & guests", text: "Privacy, calm hierarchy, and precise floor and unit identification.", tone: "orange" },
      ],
    },
    principles: {
      eyebrow: "Visual language & standards",
      title: "The rules that keep the system coherent",
      items: [
        { title: "Minimal & clear", text: "Reduce visual noise and keep destination language direct." },
        { title: "Consistent", text: "Repeat grids, icon treatment, arrows, and spacing." },
        { title: "ISO-based pictograms", text: "Use recognized symbols for faster understanding." },
        { title: "Hierarchical", text: "Prioritize destination, direction, then supporting information." },
        { title: "Bilingual", text: "Balance Arabic and English for equal legibility." },
        { title: "Color-coded", text: "Use zone colors as memory anchors—not decoration." },
      ],
    },
    value: {
      eyebrow: "Design value",
      title: "A system built for confidence, safety, and scale",
      text: "The design creates a shared navigation language that can reduce uncertainty, support operations, strengthen accessibility, and reflect the quality of the development.",
      nextLabel: "Next steps",
      next: [
        { title: "User testing", text: "Validate comprehension at high-risk decision points." },
        { title: "Accessibility", text: "Add tactile, braille, high-contrast, and auditory support." },
        { title: "Digital layer", text: "Explore kiosks and mobile guidance for complex journeys." },
        { title: "Lighting study", text: "Test visibility across day and night conditions." },
      ],
    },
  },

  ar: {
    metaTitle: "تصميم أنظمة الإرشاد واللافتات — لمياء الرويشد",
    metaDescription:
      "نظام إرشاد ولافتات ثنائي اللغة لبرج متعدد الاستخدامات من 24 طابقًا، يشمل تقسيم المناطق وعائلات اللافتات والرموز التوضيحية والمعايير البصرية.",
    hero: {
      eyebrow: "مشروع واقعي · التصميم البيئي",
      title: ["تصميم أنظمة", "الإرشاد واللافتات"],
      lead: "نظام إرشاد ثنائي اللغة لبرج متعدد الاستخدامات.",
      body: "نظام شامل يغطي مناطق المواقف والتجارة والرعاية الطبية والضيافة والسكن، صُمّم لمساعدة المستخدمين على اختلافهم في التنقل بثقة.",
      chips: ["24 طابقًا", "6 طوابق مواقف", "عربي / إنجليزي"],
      note: "مواد المشروع المرئية سرية بموجب اتفاقية مع العميل. الرسومات في هذه الصفحة توضيحات مبسّطة لمنطق النظام، وليست من أعمال المشروع الفعلية.",
    },
    sign: {
      marker: "إرشاد ثنائي اللغة",
      rows: [
        { en: "Parking", ar: "مواقف السيارات", arrow: "left", tone: "yellow" },
        { en: "Hospital", ar: "المستشفى", arrow: "right", tone: "blue" },
        { en: "Residences", ar: "السكن", arrow: "up", tone: "orange" },
        { en: "Retail", ar: "المتاجر", arrow: "right", tone: "plum" },
      ],
      footer: "تسلسل واضح · رموز موحّدة · ألوان للمناطق",
    },
    overviewLabel: "نظرة عامة على المشروع",
    overview: [
      { label: "السنة", value: "2025–2026" },
      { label: "الدور", value: "مصممة تجربة" },
      { label: "السياق", value: "مشروع متعدد الاستخدامات" },
      { label: "النظام", value: "عربي + إنجليزي" },
    ],
    context: {
      eyebrow: "سياق المشروع",
      title: "برج واحد، ووجهات متعددة، واحتياجات مختلفة تمامًا",
      text: "يجمع المشروع المكوّن من 24 طابقًا بين الشقق السكنية، والمتاجر، ومستشفى، وفنادق، ومكاتب، ومواقف سيارات تحت الأرض. وكان التحدي هو إرساء لغة إرشاد موحّدة دون إغفال الاحتياجات الخاصة بكل منطقة.",
      roleLabel: "دوري",
      roleTitle: "بناء القواعد خلف كل لافتة",
      roleText:
        "طوّرت إرشادات النظام للألوان، والخطوط، والتسلسل ثنائي اللغة، والرموز التوضيحية، والأسهم، والمواد، والتخطيطات المعيارية، ثم حدّدت كيف تتكيّف هذه القواعد مع البيئات المختلفة.",
    },
    users: {
      eyebrow: "احتياجات المستخدمين",
      title: "التصميم لستة أنماط مختلفة من التنقل",
      intro: "كان على النظام أن يدعم الروتين اليومي المألوف، والزيارات الأولى، والرحلات العلاجية المصحوبة بالتوتر، والحركة التشغيلية.",
      items: [
        { title: "السكان", text: "طرق سريعة إلى المنزل والمواقف والمرافق ولاستقبال الضيوف." },
        { title: "نزلاء الفندق", text: "إشارات واضحة عند الوصول دون معرفة مسبقة بالمبنى." },
        { title: "المرضى والطاقم الطبي", text: "مسارات واضحة إلى العيادات والأقسام والمخارج." },
        { title: "المتسوقون والزوار", text: "استكشاف سهل ومسارات عودة واضحة." },
        { title: "موظفو المكاتب", text: "تنقّل فعّال بين المداخل والمكاتب." },
        { title: "فرق الخدمات", text: "وصول تشغيلي منفصل عن المسارات العامة." },
      ],
    },
    glance: {
      eyebrow: "النظام في لمحة",
      title: "كيف يُنظَّم النظام",
      intro: "ثلاث مناطق متراصّة في برج واحد، وأربع عائلات من اللافتات تتشارك اللغة البصرية نفسها.",
      zones: [
        { level: "الطوابق العليا", title: "المنطقة السكنية", text: "السكان والضيوف: خصوصية وتعريف دقيق للطوابق والوحدات", tone: "orange" },
        { level: "الطابق الأرضي", title: "المنطقة التجارية", text: "الزوار والعملاء: استكشاف سهل", tone: "blue" },
        { level: "P0–P5", title: "منطقة المواقف", text: "جميع المستخدمين: ذاكرة لونية ومحاور مصاعد واضحة", tone: "yellow" },
      ],
      families: [
        { mark: "ID", label: "لافتات التعريف", tone: "yellow" },
        { mark: "←", label: "لافتات الاتجاهات", tone: "blue" },
        { mark: "i", label: "المعلومات والتعليمات", tone: "orange" },
        { mark: "P", label: "المواقف", tone: "plum" },
      ],
      note: "رسم توضيحي مبسّط لمنطق النظام، وليس من أعمال المشروع.",
    },
    strategy: {
      eyebrow: "استراتيجية النظام",
      title: "تحويل التعقيد إلى قرارات متدرّجة",
      intro: "يجب أن يتلقى المستخدم المعلومة الصحيحة في اللحظة المناسبة، لا جميع التعليمات الممكنة دفعة واحدة.",
      items: [
        { title: "المنطقة أولًا", text: "تحديد موقع المستخدم: المواقف، أو المنطقة التجارية، أو الطبية، أو الضيافة، أو السكنية." },
        { title: "نقاط القرار", text: "وضع الإرشاد قبل التقاطعات والمصاعد والمداخل ونقاط الانتقال." },
        { title: "ثم التسلسل", text: "فصل الوجهات الرئيسية عن المعلومات الداعمة والتنظيمية." },
        { title: "تأكيد الوصول", text: "استخدام لافتات التعريف لإتمام الرحلة وطمأنة المستخدم." },
      ],
    },
    process: {
      eyebrow: "مراحل التصميم",
      title: "منهجية من ثلاث مراحل",
      items: [
        { title: "التقييم والبحث", text: "تحليل المخططات، والمستخدمين، وحركة التنقل، ونقاط القرار، واحتياجات إمكانية الوصول." },
        { title: "تطوير الاستراتيجية", text: "تحديد المناطق، وتسلسل المحتوى، وترميز المواقف بالألوان، وهيكلة المعلومات." },
        { title: "التصميم واللغة البصرية", text: "بناء نظام خطوط ثنائي اللغة، ورموز توضيحية وفق معايير ISO، وأسهم، ومواد، وتخطيطات معيارية." },
      ],
    },
    signage: {
      eyebrow: "نظام اللافتات",
      title: "أربع عائلات، ولغة بصرية واحدة",
      intro: "تجيب كل عائلة عن سؤال مختلف في التنقل، مع مشاركة التسلسل والخطوط والرموز والمسافات ومنطق المواد نفسه.",
      families: [
        { title: "التعريف", list: ["تعريف المبنى الخارجي", "تعريف المدخل", "تعريف الاستقبال", "تعريف الشقق", "تعريف المصاعد"], tone: "yellow" },
        { title: "الاتجاهات", list: ["مسارات المركبات", "اتجاهات الشقق", "أقسام المستشفى", "إرشاد المصاعد والسلالم", "الانتقال بين المناطق"], tone: "blue" },
        { title: "المعلومات والتعليمات", list: ["الأدلة الإرشادية", "معلومات الطوابق", "مخارج الطوارئ", "مخططات الإخلاء", "تعريف مناطق الخدمة"], tone: "orange" },
        { title: "المواقف", list: ["تعريف الطوابق", "لافتات الاتجاهات", "تعريف الأعمدة والمواقف", "مواقف ذوي الإعاقة", "تنبيهات السلامة"], tone: "plum" },
      ],
    },
    zoning: {
      eyebrow: "استراتيجية تقسيم المناطق",
      title: "ثلاث بيئات، وثلاث أولويات للتنقل",
      usersLabel: "المستخدمون الرئيسيون",
      zones: [
        { level: "P0–P5", title: "منطقة المواقف", users: "جميع المستخدمين", text: "ذاكرة لونية قوية، وانتقال سلس من المركبة إلى المشي، ومحاور مصاعد واضحة.", tone: "yellow" },
        { level: "الطابق الأرضي", title: "المنطقة التجارية", users: "الزوار والعملاء", text: "استكشاف بديهي، ومداخل واضحة، وانتقال سلس بين الاستخدامات.", tone: "blue" },
        { level: "الطوابق العليا", title: "المنطقة السكنية", users: "السكان والضيوف", text: "خصوصية، وتسلسل هادئ، وتعريف دقيق للطوابق والوحدات.", tone: "orange" },
      ],
    },
    principles: {
      eyebrow: "اللغة البصرية والمعايير",
      title: "القواعد التي تحافظ على تماسك النظام",
      items: [
        { title: "بسيط وواضح", text: "تقليل التشويش البصري واستخدام لغة مباشرة للوجهات." },
        { title: "متّسق", text: "تكرار الشبكات، وأسلوب الأيقونات، والأسهم، والمسافات." },
        { title: "رموز وفق ISO", text: "استخدام رموز معروفة لفهم أسرع." },
        { title: "متدرّج", text: "الأولوية للوجهة، ثم الاتجاه، ثم المعلومات الداعمة." },
        { title: "ثنائي اللغة", text: "توازن بين العربية والإنجليزية لوضوح متساوٍ." },
        { title: "مرمّز بالألوان", text: "ألوان المناطق أدوات للتذكّر، لا للزينة." },
      ],
    },
    value: {
      eyebrow: "قيمة التصميم",
      title: "نظام مبني للثقة والسلامة وقابلية التوسّع",
      text: "يخلق التصميم لغة تنقّل مشتركة تُسهم في تقليل الحيرة، ودعم العمليات، وتعزيز إمكانية الوصول، وتعكس جودة المشروع.",
      nextLabel: "الخطوات التالية",
      next: [
        { title: "اختبار الاستخدام", text: "التحقق من الفهم عند نقاط القرار عالية الخطورة." },
        { title: "إمكانية الوصول", text: "إضافة دعم لمسي، وبرايل، وتباين عالٍ، ودعم صوتي." },
        { title: "طبقة رقمية", text: "استكشاف الأكشاك التفاعلية والإرشاد عبر الجوال للرحلات المعقّدة." },
        { title: "دراسة الإضاءة", text: "اختبار وضوح الرؤية في ظروف النهار والليل." },
      ],
    },
  },
};
