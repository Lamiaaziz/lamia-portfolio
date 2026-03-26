import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  isRTL: false,
});

export const translations: Record<string, Record<Lang, string>> = {
  // ── NAV ──
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.wayfinding": { en: "Wayfinding", ar: "التوجيه البصري" },
  "nav.aurafit": { en: "AuraFit", ar: "أوراFit" },
  "nav.traveltales": { en: "Travel Tales", ar: "حكايات السفر" },
  "nav.voko": { en: "VOKO", ar: "VOKO" },
  "nav.webdesign": { en: "Web Design", ar: "تصميم المواقع" },
  "nav.visualdesign": { en: "Visual Design", ar: "التصميم البصري" },
  "nav.contact": { en: "Contact Me", ar: "تواصل معي" },

  // ── HERO ──
  "hero.label": { en: "EXPERIENCE DESIGNER · RIYADH, KSA", ar: "مصممة تجارب · الرياض، المملكة العربية السعودية" },
  "hero.name": { en: "Lamia Alrowaished", ar: "لميا الرويشد" },
  "hero.h1.line1": { en: "Designing", ar: "أصمّم" },
  "hero.h1.line2": { en: "experiences", ar: "تجارب" },
  "hero.h1.line3": { en: "that navigate.", ar: "تقود وتُلهم." },
  "hero.subtitle": {
    en: "I transform complex challenges into clear, human-centered experiences — from spatial wayfinding systems to digital products. I design fluently in Arabic and English, facilitate collaborative creative workshops, and bring a unique blend of design thinking, visual storytelling, and consulting expertise to every project.",
    ar: "أُحوّل التحديات المعقدة إلى تجارب واضحة تتمحور حول الإنسان، بدءًا من أنظمة التوجيه المكاني وصولًا إلى المنتجات الرقمية. أتقن التصميم بالعربية والإنجليزية، وأسهّل ورش عمل إبداعية جماعية، وأجمع بين التفكير التصميمي، والسرد البصري، والاستشارات بخبرة فريدة لكل مشروع.",
  },
  "hero.cta.work": { en: "View My Work", ar: "استعرض أعمالي" },
  "hero.cta.contact": { en: "Get in Touch", ar: "تواصل معي" },

  // ── ABOUT ──
  "about.label": { en: "ABOUT ME", ar: "عن لميا" },
  "about.h2.line1": { en: "Where business", ar: "حيث تلتقي الأعمال" },
  "about.h2.line2": { en: "meets design.", ar: "بالتصميم." },
  "about.p1": {
    en: "I'm an Experience Designer based in Riyadh with a background that spans marketing design, business development, and UX — giving me a rare ability to connect user needs with business outcomes.",
    ar: "أنا مصممة تجارب مقيمة في الرياض، تمتد خلفيتي المهنية لتشمل التصميم التسويقي وتطوير الأعمال وتجربة المستخدم — مما يمنحني قدرة نادرة على ربط احتياجات المستخدم بأهداف الأعمال.",
  },
  "about.p2": {
    en: "Currently leading user-centered design for wayfinding and environmental systems — mapping user journeys through physical space, collaborating with cross-functional teams, and translating complex spatial data into clear visual communication.",
    ar: "أقود حاليًا تصميم أنظمة التوجيه البصري والبيئي المتمحورة حول المستخدم — برسم مسارات المستخدمين عبر الفضاء المادي، والتعاون مع فرق متعددة التخصصات، وترجمة البيانات المكانية المعقدة إلى تواصل بصري واضح.",
  },
  "about.p3": {
    en: "My earlier experience in client-facing consulting and account management at Winclex — where I applied UX principles to internal dashboards and drove measurable business results — gives me a consulting mindset that goes beyond aesthetics. I design for impact.",
    ar: "خبرتي السابقة في الاستشارات المباشرة مع العملاء وإدارة الحسابات في Winclex — حيث طبّقت مبادئ تجربة المستخدم على لوحات التحكم الداخلية وحققت نتائج أعمال قابلة للقياس — منحتني عقلية استشارية تتجاوز الجماليات. أصمّم من أجل الأثر.",
  },
  "about.p4": {
    en: "I also bring experience in facilitating co-creation sessions and design workshops — structuring narratives, translating ambiguous challenges into clear visual artifacts, and guiding teams from insight to action. I design fluently in both Arabic and English, with a deep understanding of the Saudi and MENA context.",
    ar: "أمتلك أيضًا خبرة في تيسير جلسات الإبداع المشترك وورش التصميم — بناء السرديات، وترجمة التحديات الغامضة إلى مخرجات بصرية واضحة، وقيادة الفرق من الرؤية إلى التنفيذ. أصمّم بطلاقة بالعربية والإنجليزية، مع فهم عميق للسياق السعودي والإقليمي.",
  },
  "about.stat.years": { en: "Years of Experience", ar: "سنوات خبرة" },
  "about.stat.industries": { en: "Industries Worked In", ar: "قطاعات عملت فيها" },
  "about.stat.mckinsey": { en: "Forward Program", ar: "برنامج فورورد" },
  "about.stat.bilingual": { en: "Bilingual Design — Mandatory", ar: "تصميم ثنائي اللغة — إلزامي" },

  // ── EXPERIENCE ──
  "exp.label": { en: "EXPERIENCE", ar: "الخبرة المهنية" },
  "exp.h3": { en: "Professional Journey", ar: "المسيرة المهنية" },
  "exp.role1": { en: "Experience Designer — Wayfinding & Environmental Design", ar: "مصممة تجارب — التوجيه البصري والتصميم البيئي" },
  "exp.company1": { en: "Current Role", ar: "الدور الحالي" },
  "exp.h1.1": { en: "User journey mapping & spatial flow design for a 24-floor mixed-use development", ar: "رسم مسارات المستخدم وتصميم التدفق المكاني لمشروع متعدد الاستخدامات من 24 طابقًا" },
  "exp.h1.2": { en: "Translating complex spatial challenges into clear bilingual (AR/EN) visual systems", ar: "ترجمة التحديات المكانية المعقدة إلى أنظمة بصرية واضحة ثنائية اللغة (عربي/إنجليزي)" },
  "exp.h1.3": { en: "Cross-functional stakeholder collaboration in a consulting environment", ar: "التعاون مع أصحاب المصلحة من تخصصات متعددة في بيئة استشارية" },
  "exp.h1.4": { en: "Storytelling through visual artifacts: signage hierarchy, iconography, color systems", ar: "السرد البصري عبر المخرجات التصميمية: تسلسل اللافتات، الأيقونات، منظومة الألوان" },
  "exp.role2": { en: "Client-Facing Design & Account Development", ar: "تصميم موجّه للعملاء وتطوير الحسابات" },
  "exp.company2": { en: "Winclex", ar: "Winclex" },
  "exp.h2.1": { en: "Applied UX to internal dashboards — 20% usability improvement", ar: "تطبيق مبادئ تجربة المستخدم على لوحات التحكم الداخلية — تحسين 20% في سهولة الاستخدام" },
  "exp.h2.2": { en: "Led co-creation sessions and facilitated client workshops for design alignment", ar: "قيادة جلسات الإبداع المشترك وتيسير ورش عمل العملاء لتوحيد التوجه التصميمي" },
  "exp.h2.3": { en: "Produced bilingual (AR/EN) campaign visuals and brand materials", ar: "إنتاج مواد بصرية للحملات ومواد العلامة التجارية ثنائية اللغة (عربي/إنجليزي)" },
  "exp.h2.4": { en: "15% growth in account renewals through data-driven, human-centered processes", ar: "نمو 15% في تجديد الحسابات من خلال عمليات مدفوعة بالبيانات ومتمحورة حول الإنسان" },
  "exp.role3": { en: "Marketing Graphic Designer", ar: "مصممة جرافيك تسويقية" },
  "exp.company3": { en: "Casapiu", ar: "Casapiu" },
  "exp.h3.1": { en: "Website interface design & digital campaigns", ar: "تصميم واجهات المواقع والحملات الرقمية" },
  "exp.h3.2": { en: "25% increase in user engagement through visual restructuring", ar: "زيادة 25% في تفاعل المستخدمين من خلال إعادة الهيكلة البصرية" },
  "exp.h3.3": { en: "Brand identity & content hierarchy design", ar: "تصميم هوية العلامة التجارية وتسلسل المحتوى" },

  // ── TOOLS ──
  "tools.label": { en: "TOOLS", ar: "الأدوات" },
  "tools.h3": { en: "I work with", ar: "أعمل بـ" },

  // ── FEATURED WORK ──
  "featured.label": { en: "FEATURED WORK", ar: "العمل المميز" },
  "featured.h2.line1": { en: "Real-World", ar: "مشروع حقيقي" },
  "featured.h2.line2": { en: "Professional Project", ar: "على أرض الواقع" },
  "featured.subtitle": { en: "A live, production-grade wayfinding system for a major mixed-use development.", ar: "نظام توجيه بصري حقيقي ومنفّذ فعليًا لمشروع تطوير متعدد الاستخدامات." },
  "featured.badge": { en: "LIVE PROJECT", ar: "مشروع منفّذ" },
  "featured.client.badge": { en: "Environmental Design · Live Project", ar: "تصميم بيئي · مشروع منفّذ" },
  "featured.project.title": { en: "Wayfinding & Signage Design", ar: "تصميم التوجيه البصري واللافتات" },
  "featured.project.subtitle": { en: "Mixed-Use Tower — 24-Floor Development", ar: "برج متعدد الاستخدامات — مشروع من 24 طابقًا" },
  "featured.project.desc": {
    en: "A comprehensive wayfinding signage system for a contemporary mixed-use high-rise. Designed a complete visual navigation language — color-coding, ISO 7001 pictograms, bilingual (Arabic/English) typography, and modular layout templates — serving residents, hotel guests, medical staff, shoppers, and office workers across parking, commercial, and residential zones.",
    ar: "نظام لافتات توجيه بصري شامل لبرج معاصر متعدد الاستخدامات. صمّمت لغة تنقل بصرية متكاملة — ترميز لوني، أيقونات ISO 7001، طباعة ثنائية اللغة (عربي/إنجليزي)، وقوالب تخطيط معيارية — تخدم السكان وضيوف الفندق والكوادر الطبية والمتسوقين وموظفي المكاتب عبر مناطق الوقوف والتجارة والسكن.",
  },
  "featured.cta": { en: "View Full Case Study", ar: "عرض دراسة الحالة كاملة" },
  "featured.stat.floors": { en: "Floors", ar: "طابقًا" },
  "featured.stat.parking": { en: "Parking Levels", ar: "مستويات وقوف" },
  "featured.stat.groups": { en: "User Groups", ar: "فئات مستخدمين" },
  "featured.stat.bilingual": { en: "Bilingual", ar: "ثنائي اللغة" },

  // ── SELECTED WORK ──
  "work.label": { en: "SELECTED WORK", ar: "أعمال مختارة" },
  "work.h2.line1": { en: "Design Research", ar: "أبحاث التصميم" },
  "work.h2.line2": { en: "& Case Studies", ar: "ودراسات الحالة" },
  "work.subtitle": { en: "Conceptual UX research projects grounded in authentic user research and human-centered design methodology.", ar: "مشاريع بحثية تصميمية مفاهيمية مبنية على بحث حقيقي مع المستخدمين ومنهجية التصميم المتمحور حول الإنسان." },
  "work.cta": { en: "View Case Study", ar: "عرض دراسة الحالة" },

  // ── PROJECT CARDS ──
  "project.aurafit.type": { en: "Conceptual UX Research · Bootcamp Project", ar: "بحث UX مفاهيمي · مشروع بوتكامب" },
  "project.aurafit.subtitle": { en: "Behavioral Fitness System", ar: "نظام لياقة سلوكي" },
  "project.aurafit.desc": {
    en: "A behavioral fitness system designed to help Saudi professionals maintain workout consistency despite irregular schedules. Grounded in independent user research, behavioral pattern analysis, and human-centered design — reframing fitness as an adaptive system, not a motivation challenge.",
    ar: "نظام لياقة بدنية سلوكي مصمم لمساعدة المهنيين السعوديين على الحفاظ على انتظام تمارينهم رغم الجداول غير المنتظمة. مبني على بحث مستقل مع المستخدمين وتحليل الأنماط السلوكية والتصميم المتمحور حول الإنسان — بإعادة تأطير اللياقة كنظام تكيّفي لا تحدٍّ للتحفيز.",
  },
  "project.traveltales.type": { en: "Conceptual UX Research", ar: "بحث UX مفاهيمي" },
  "project.traveltales.subtitle": { en: "Travel Planning Experience", ar: "تجربة تخطيط السفر" },
  "project.traveltales.desc": {
    en: "A mobile travel experience that simplifies destination discovery and booking through a clear, visual, step-by-step flow. Developed through independent research, user flow mapping, and information architecture design — reducing friction from exploration to confirmation.",
    ar: "تجربة سفر على الجوال تُبسّط اكتشاف الوجهات والحجز من خلال تدفق بصري واضح خطوة بخطوة. طوّرت من خلال بحث مستقل ورسم تدفقات المستخدم وتصميم بنية المعلومات — للحد من الاحتكاك من الاستكشاف إلى التأكيد.",
  },
  "project.voko.type": { en: "Conceptual UX Research", ar: "بحث UX مفاهيمي" },
  "project.voko.subtitle": { en: "Fashion E-commerce Experience", ar: "تجربة تسوق أزياء إلكتروني" },
  "project.voko.desc": {
    en: "A fashion shopping mobile experience that streamlines product discovery and checkout. Developed through independent research and iterative prototyping — translating complex purchase journeys into smooth, intuitive flows with clear visual hierarchy.",
    ar: "تجربة تسوق أزياء على الجوال تُبسّط اكتشاف المنتجات وإتمام الشراء. طوّرت من خلال بحث مستقل ونمذجة تكرارية — لترجمة رحلات الشراء المعقدة إلى تدفقات سلسة وبديهية ذات تسلسل بصري واضح.",
  },
  "project.webdesign.type": { en: "Web Design · Webflow", ar: "تصميم مواقع · Webflow" },
  "project.webdesign.subtitle": { en: "Full Website Design & Webflow Development", ar: "تصميم موقع كامل وتطوير Webflow" },
  "project.webdesign.desc": {
    en: "Two complete website designs built and deployed in Webflow — a business consulting platform and a team collaboration website with integrated CMS blog. Demonstrating end-to-end design-to-development skills with responsive layouts and visual systems.",
    ar: "تصميمان كاملان لموقعين منشورين على Webflow — منصة استشارات أعمال وموقع تعاون فريق مع مدونة CMS متكاملة. يُظهران مهارات التصميم الشامل من الفكرة إلى التنفيذ بتخطيطات متجاوبة وأنظمة بصرية متكاملة.",
  },
  "project.visualdesign.type": { en: "Visual Design · Client & Personal Work", ar: "تصميم بصري · أعمال عملاء وشخصية" },
  "project.visualdesign.subtitle": { en: "Brand Identity, Campaigns & Environmental Design", ar: "هوية بصرية، حملات، وتصميم بيئي" },
  "project.visualdesign.desc": {
    en: "A collection of client and personal visual design work spanning brand identity guidelines, bilingual social media campaigns (AR/EN), presentation templates, environmental signage, and packaging design — demonstrating strong visual communication and storytelling across diverse industries.",
    ar: "مجموعة من الأعمال التصميمية البصرية للعملاء والمشاريع الشخصية تشمل دليل الهوية البصرية، والحملات الإعلامية ثنائية اللغة (عربي/إنجليزي)، وقوالب العروض التقديمية، واللافتات البيئية، وتصميم التغليف — تُظهر قدرة قوية على التواصل البصري والسرد عبر قطاعات متنوعة.",
  },

  // ── CONTACT CTA ──
  "contact.label": { en: "LET'S CONNECT", ar: "لنتواصل" },
  "contact.h2.line1": { en: "Ready to create", ar: "مستعدة لصنع" },
  "contact.h2.line2": { en: "meaningful experiences?", ar: "تجارب ذات معنى؟" },
  "contact.p": {
    en: "I bring a unique blend of business development, client management, and experience design to every project. Based in Riyadh, fluent in Arabic and English — let's build something that matters.",
    ar: "أُقدّم مزيجًا فريدًا من تطوير الأعمال وإدارة العملاء وتصميم التجارب في كل مشروع. مقيمة في الرياض، أتحدث العربية والإنجليزية بطلاقة — لنبنِ شيئًا يُحدث فارقًا.",
  },
  "contact.email": { en: "Send an Email", ar: "أرسل بريدًا إلكترونيًا" },
  "contact.linkedin": { en: "LinkedIn", ar: "لينكدإن" },

  // ── FOOTER ──
  "footer.label": { en: "EXPERIENCE DESIGNER · SAUDI ARABIA", ar: "مصممة تجارب · المملكة العربية السعودية" },
  "footer.tagline": { en: "Turns the unimaginable into possible.", ar: "تُحوّل المستحيل إلى ممكن." },
  "footer.copyright": { en: "© 2026 Lamia Alrowaished. All rights reserved.", ar: "© 2026 لميا الرويشد. جميع الحقوق محفوظة." },

  // ── WAYFINDING PAGE ──
  "wf.back": { en: "Back to Portfolio", ar: "العودة إلى المعرض" },
  "wf.badge": { en: "REAL-WORLD PROJECT", ar: "مشروع حقيقي منفّذ" },
  "wf.live": { en: "Live Project · 2025", ar: "مشروع منفّذ · 2025" },
  "wf.title1": { en: "Wayfinding &", ar: "التوجيه البصري" },
  "wf.title2": { en: "Signage Design", ar: "وتصميم اللافتات" },
  "wf.subtitle": { en: "Mixed-Use Tower — Multi-Zone Wayfinding System", ar: "برج متعدد الاستخدامات — نظام توجيه متعدد المناطق" },
  "wf.intro": {
    en: "A comprehensive wayfinding signage system for a 24-floor contemporary mixed-use high-rise. The project involved designing a complete visual navigation language across parking, commercial, and residential zones, serving diverse user groups including residents, hotel guests, medical staff, and international visitors.",
    ar: "نظام لافتات توجيه بصري شامل لبرج معاصر متعدد الاستخدامات من 24 طابقًا. تضمّن المشروع تصميم لغة تنقل بصرية متكاملة عبر مناطق الوقوف والتجارة والسكن، تخدم فئات متنوعة من المستخدمين تشمل السكان وضيوف الفندق والكوادر الطبية والزوار الدوليين.",
  },
  "wf.meta.year": { en: "Year", ar: "السنة" },
  "wf.meta.sector": { en: "Sector", ar: "القطاع" },
  "wf.meta.sector.val": { en: "Mixed-Use Development", ar: "تطوير متعدد الاستخدامات" },
  "wf.meta.role": { en: "Role", ar: "الدور" },
  "wf.meta.role.val": { en: "UX/UI Designer", ar: "مصممة UX/UI" },
  "wf.meta.type": { en: "Type", ar: "النوع" },
  "wf.meta.type.val": { en: "Environmental Design", ar: "تصميم بيئي" },
  "wf.overview.label": { en: "PROJECT OVERVIEW", ar: "نظرة عامة على المشروع" },
  "wf.overview.h2.1": { en: "Navigating a Complex", ar: "التنقل في بيئة" },
  "wf.overview.h2.2": { en: "Urban Development", ar: "حضرية معقدة" },
  "wf.overview.p1": {
    en: "This project is a 24-floor contemporary mixed-use high-rise development. It integrates residential apartments, commercial retail, a hospital, hotels, and underground parking — creating a complex multi-use environment with diverse navigation needs.",
    ar: "هذا المشروع عبارة عن برج معاصر متعدد الاستخدامات من 24 طابقًا، يضم شققًا سكنية ومحلات تجارية ومستشفى وفنادق وموقف سيارات تحت الأرض — مما يخلق بيئة متعددة الاستخدامات ذات احتياجات تنقل متنوعة.",
  },
  "wf.overview.p2": {
    en: "My role was to design and build a comprehensive wayfinding signage system — establishing guidelines and rules that encompass color, typeface, materials, pictograms, arrows, and layouts — ensuring every user group can navigate confidently and efficiently.",
    ar: "كان دوري تصميم وبناء نظام لافتات توجيه بصري شامل — بوضع إرشادات وقواعد تشمل الألوان والخطوط والمواد والأيقونات والأسهم والتخطيطات — لضمان تنقل كل فئة من المستخدمين بثقة وكفاءة.",
  },
  "wf.goals.title": { en: "Project Goals", ar: "أهداف المشروع" },
  "wf.goal.1": { en: "Establish comprehensive design guidelines for a cohesive wayfinding system", ar: "وضع إرشادات تصميم شاملة لنظام توجيه بصري متماسك" },
  "wf.goal.2": { en: "Develop a strategic color system that enhances navigation and accessibility", ar: "تطوير منظومة ألوان استراتيجية تعزز التنقل وإمكانية الوصول" },
  "wf.goal.3": { en: "Create a standardized pictogram system based on ISO 7001", ar: "إنشاء نظام أيقونات معياري وفق معيار ISO 7001" },
  "wf.goal.4": { en: "Design modular layout templates for consistent information presentation", ar: "تصميم قوالب تخطيط معيارية لعرض معلومات متسق" },
  "wf.goal.5": { en: "Serve 5+ distinct user groups with tailored navigation strategies", ar: "خدمة أكثر من 5 فئات مستخدمين مختلفة باستراتيجيات تنقل مخصصة" },

  // ── AURAFIT PAGE ──
  "af.back": { en: "Back to Portfolio", ar: "العودة إلى المعرض" },
  "af.badge": { en: "UX Product Concept · Bootcamp", ar: "مفهوم منتج UX · بوتكامب" },
  "af.title": { en: "AuraFit", ar: "AuraFit" },
  "af.subtitle": { en: "Behavioral Fitness System for Saudi Professionals", ar: "نظام لياقة سلوكي للمهنيين السعوديين" },
  "af.intro": {
    en: "AuraFit is a behavioral fitness app designed to help users maintain workout consistency despite irregular schedules — reframing fitness as an adaptive behavioral system rather than a motivation challenge.",
    ar: "AuraFit تطبيق لياقة بدنية سلوكي مصمم لمساعدة المستخدمين على الحفاظ على انتظام تمارينهم رغم الجداول غير المنتظمة — بإعادة تأطير اللياقة كنظام سلوكي تكيّفي لا تحدٍّ للتحفيز.",
  },
  "af.meta.timeline": { en: "Timeline", ar: "المدة" },
  "af.meta.timeline.val": { en: "6 Weeks", ar: "6 أسابيع" },
  "af.meta.role": { en: "Role", ar: "الدور" },
  "af.meta.role.val": { en: "UX / Experience Designer", ar: "مصممة UX / تجارب" },
  "af.meta.market": { en: "Market", ar: "السوق" },
  "af.meta.market.val": { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
  "af.prototype": { en: "View Prototype", ar: "عرض النموذج الأولي" },
  "af.resp.label": { en: "RESPONSIBILITIES", ar: "المسؤوليات" },
  "af.resp.1": { en: "UX Research Synthesis", ar: "تحليل أبحاث تجربة المستخدم" },
  "af.resp.2": { en: "Behavioral Framework Design", ar: "تصميم الإطار السلوكي" },
  "af.resp.3": { en: "Product Flow Architecture", ar: "هندسة تدفق المنتج" },
  "af.resp.4": { en: "UI Interface Design", ar: "تصميم واجهة المستخدم" },
  "af.challenge.label": { en: "CHALLENGE", ar: "التحدي" },
  "af.challenge.h2": { en: "The Challenge", ar: "التحدي" },
  "af.challenge.1": { en: "Users struggle with inconsistent schedules", ar: "يعاني المستخدمون من الجداول غير المنتظمة" },
  "af.challenge.2": { en: "Motivation-based systems fail long-term", ar: "الأنظمة القائمة على التحفيز تفشل على المدى البعيد" },
  "af.challenge.3": { en: "Users need adaptive structure, not rigid plans", ar: "المستخدمون بحاجة إلى هيكل تكيّفي لا خطط صارمة" },
  "af.solution.label": { en: "SOLUTION", ar: "الحل" },
  "af.solution.h2": { en: "The Solution", ar: "الحل" },
  "af.solution.p": {
    en: "Design an adaptive fitness system that adjusts to real-life schedules and supports sustainable consistency. AuraFit reframes fitness as an adaptive behavioral system — not a motivation challenge.",
    ar: "تصميم نظام لياقة تكيّفي يتكيف مع الجداول الواقعية ويدعم الانتظام المستدام. يُعيد AuraFit تأطير اللياقة كنظام سلوكي تكيّفي — لا تحدٍّ للتحفيز.",
  },
  "af.moodboard.label": { en: "MOODBOARD", ar: "لوحة المزاج" },
  "af.moodboard.h2": { en: "Moodboard", ar: "لوحة المزاج" },
  "af.wireframes.label": { en: "WIREFRAMES", ar: "الإطارات السلكية" },
  "af.wireframes.h2": { en: "Wireframes", ar: "الإطارات السلكية" },
  "af.wireframes.p": {
    en: "Low-fidelity wireframes mapped the complete user flow — from onboarding and behavioral profiling through to the adaptive dashboard, workout scheduling, cart, checkout, and progress tracking.",
    ar: "رسمت الإطارات السلكية منخفضة الدقة تدفق المستخدم الكامل — من الإعداد والتوصيف السلوكي وصولًا إلى لوحة التحكم التكيّفية وجدولة التمارين والسلة والدفع وتتبع التقدم.",
  },
  "af.process.label": { en: "DESIGN PROCESS", ar: "مسار التصميم" },

  // ── TRAVEL TALES PAGE ──
  "tt.back": { en: "Back to Portfolio", ar: "العودة إلى المعرض" },
  "tt.badge": { en: "UX Product Concept · Bootcamp", ar: "مفهوم منتج UX · بوتكامب" },
  "tt.title": { en: "Travel Tales", ar: "حكايات السفر" },
  "tt.subtitle": { en: "Smart Travel Planning App for Saudi Explorers", ar: "تطبيق ذكي لتخطيط السفر للمستكشفين السعوديين" },
  "tt.intro": {
    en: "Travel Tales is a travel planning app designed to help users discover destinations, plan itineraries, and book experiences — combining smart recommendations with a seamless booking flow tailored for the Saudi market.",
    ar: "Travel Tales تطبيق لتخطيط السفر مصمّم لمساعدة المستخدمين على اكتشاف الوجهات وتخطيط الرحلات وحجز التجارب — بدمج توصيات ذكية مع تدفق حجز سلس مصمّم للسوق السعودي.",
  },
  "tt.meta.timeline": { en: "Timeline", ar: "المدة" },
  "tt.meta.timeline.val": { en: "6 Weeks", ar: "6 أسابيع" },
  "tt.meta.role": { en: "Role", ar: "الدور" },
  "tt.meta.role.val": { en: "UX / Experience Designer", ar: "مصممة UX / تجارب" },
  "tt.meta.market": { en: "Market", ar: "السوق" },
  "tt.meta.market.val": { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },

  // ── VOKO PAGE ──
  "voko.back": { en: "Back to Portfolio", ar: "العودة إلى المعرض" },
  "voko.badge": { en: "UX Product Concept", ar: "مفهوم منتج UX" },
  "voko.title": { en: "VOKO", ar: "VOKO" },
  "voko.subtitle": { en: "Fashion E-commerce Shopping Experience", ar: "تجربة تسوق أزياء إلكتروني" },
  "voko.intro": {
    en: "VOKO is a fashion shopping mobile experience designed to help users discover clothing collections, explore products, and complete purchases through a smooth and intuitive shopping journey.",
    ar: "VOKO تجربة تسوق أزياء عبر الجوال مصمّمة لمساعدة المستخدمين على اكتشاف مجموعات الملابس واستكشاف المنتجات وإتمام عمليات الشراء عبر رحلة تسوق سلسة وبديهية.",
  },
  "voko.meta.type": { en: "Type", ar: "النوع" },
  "voko.meta.type.val": { en: "UX Concept", ar: "مفهوم UX" },
  "voko.meta.role": { en: "Role", ar: "الدور" },
  "voko.meta.role.val": { en: "UX / Experience Designer", ar: "مصممة UX / تجارب" },
  "voko.meta.focus": { en: "Focus", ar: "التركيز" },
  "voko.meta.focus.val": { en: "E-commerce", ar: "التجارة الإلكترونية" },

  // ── VISUAL DESIGN PAGE ──
  "vd.hero.badge": { en: "VISUAL DESIGN", ar: "التصميم البصري" },
  "vd.hero.title": { en: "Brand, Campaign & Environmental Design", ar: "تصميم الهوية والحملات والبيئة" },
  "vd.hero.p": {
    en: "A curated collection of visual design work spanning brand identity, social media campaigns, presentation design, environmental graphics, and packaging — crafted for clients across Saudi Arabia and the MENA region.",
    ar: "مجموعة منتقاة من أعمال التصميم البصري تشمل الهوية البصرية وحملات التواصل الاجتماعي وتصميم العروض التقديمية والجرافيك البيئي والتغليف — مصمّمة لعملاء في المملكة العربية السعودية ومنطقة الشرق الأوسط وشمال أفريقيا.",
  },

  // ── WEB DESIGN PAGE ──
  "wd.back": { en: "Back to Portfolio", ar: "العودة إلى المعرض" },
  "wd.title": { en: "Web Design", ar: "تصميم المواقع" },
  "wd.subtitle": { en: "Full Website Design & Webflow Development", ar: "تصميم موقع كامل وتطوير Webflow" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry["en"] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
