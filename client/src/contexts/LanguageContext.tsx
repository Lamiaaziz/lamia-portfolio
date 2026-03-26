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
    en: "I am a User Experience Designer based in Riyadh, with extensive experience in marketing design, business development, and UX — giving me a unique ability to connect user needs with business outcomes.",
    ar: "أنا مصممة تجارب مستخدم في الرياض، ولدي خبرة واسعة في التصميم التسويقي، وتطوير الأعمال، وتجربة المستخدم، مما يمنحني قدرة فريدة على ربط احتياجات المستخدمين بنتائج الأعمال.",
  },
  "about.p2": {
    en: "I currently lead user-centered design for wayfinding and environmental systems — mapping user journeys through physical spaces, collaborating with cross-functional teams, and translating complex spatial data into clear visual communication.",
    ar: "أقود حاليًا تصميمًا يركز على المستخدم لأنظمة التوجيه والأنظمة البيئية، حيث أرسم مسارات المستخدمين في المساحات المادية، وأتعاون مع فرق متعددة التخصصات، وأحوّل البيانات المكانية المعقدة إلى تواصل بصري واضح.",
  },
  "about.p3": {
    en: "My earlier experience in client-facing consulting and account management at Winclex — where I applied UX principles to internal dashboards and delivered measurable business results — gives me a consulting mindset that goes beyond aesthetics. I design for impact.",
    ar: "خبرتي السابقة في الاستشارات المباشرة مع العملاء وإدارة الحسابات في شركة Winclex، حيث طبقت مبادئ تجربة المستخدم على لوحات المعلومات الداخلية وحققت نتائج أعمال ملموسة، تمنحني عقلية استشارية تتجاوز الجماليات. أصمم لإحداث تأثير.",
  },
  "about.p4": {
    en: "I also bring experience in facilitating co-creation innovation sessions and design workshops — structuring narratives, translating ambiguous challenges into clear visual artifacts, and guiding teams from idea to execution. I design fluently in both Arabic and English, with a deep understanding of the Saudi and MENA context.",
    ar: "لديّ أيضًا خبرة في تيسير جلسات الابتكار المشترك وورش عمل التصميم، حيث أقوم بهيكلة السرد، وتحويل التحديات الغامضة إلى عناصر بصرية واضحة، وتوجيه الفرق من الفكرة إلى التنفيذ. أتقن التصميم باللغتين العربية والإنجليزية بطلاقة، مع إلمام وثيق بالسياق السعودي ومنطقة الشرق الأوسط وشمال إفريقيا.",
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
  "af.process.h2": { en: "Design Process", ar: "مسار التصميم" },
  "af.process.step1": { en: "Problem Definition", ar: "تحديد المشكلة" },
  "af.process.step2": { en: "Research", ar: "البحث" },
  "af.process.step3": { en: "Moodboard", ar: "لوحة المزاج" },
  "af.process.step4": { en: "Wireframes", ar: "الإطارات السلكية" },
  "af.process.step5": { en: "Hi-Fi Design", ar: "التصميم عالي الدقة" },
  "af.process.step6": { en: "Prototype", ar: "النموذج الأولي" },
  "af.hifi.label": { en: "HI-FI SCREENS", ar: "الشاشات عالية الدقة" },
  "af.hifi.splash.h2": { en: "Splash & Onboarding", ar: "شاشة البداية والإعداد" },
  "af.hifi.splash.p": {
    en: "The app opens with a bold splash screen, followed by three onboarding screens that introduce AuraFit's core behavioral philosophy — Consistency, Lifestyle, and Progress.",
    ar: "يفتح التطبيق بشاشة بداية جريئة، تليها ثلاث شاشات إعداد تُقدّم الفلسفة السلوكية الجوهرية لـ AuraFit — الانتظام، وأسلوب الحياة، والتقدم.",
  },
  "af.hifi.splash.label": { en: "Splash Screen", ar: "شاشة البداية" },
  "af.hifi.ob1.label": { en: "Onboarding 1", ar: "الإعداد 1" },
  "af.hifi.ob2.label": { en: "Onboarding 2", ar: "الإعداد 2" },
  "af.hifi.ob3.label": { en: "Onboarding 3", ar: "الإعداد 3" },
  "af.hifi.welcome.h2": { en: "Welcome & Account Setup", ar: "الترحيب وإعداد الحساب" },
  "af.hifi.welcome.p": {
    en: "After onboarding, users land on the Welcome screen and complete a 3-step setup: creating their account, answering a quick lifestyle quiz to personalize their plan, and receiving their assigned training mode.",
    ar: "بعد الإعداد، يصل المستخدمون إلى شاشة الترحيب ويكملون إعدادًا من 3 خطوات: إنشاء حسابهم، والإجابة على اختبار أسلوب حياة سريع لتخصيص خطتهم، وتلقّي وضع التدريب المخصص لهم.",
  },
  "af.hifi.welcome.label": { en: "Welcome", ar: "الترحيب" },
  "af.hifi.step1.label": { en: "Step 1 — Sign Up", ar: "الخطوة 1 — التسجيل" },
  "af.hifi.step2.label": { en: "Step 2 — Personalize", ar: "الخطوة 2 — التخصيص" },
  "af.hifi.step3.label": { en: "Step 3 — Your Mode", ar: "الخطوة 3 — وضعك" },
  "af.hifi.dashboard.h2": { en: "Dashboard & Progress Tracking", ar: "لوحة التحكم وتتبع التقدم" },
  "af.hifi.dashboard.p": {
    en: "The main dashboard adapts to the user's assigned mode (e.g. Busy Week Mode), showing consistency scores, training rhythm, and recovery insights. The progress screen provides detailed weekly analytics with behavioural metrics and AI-powered recommendations.",
    ar: "تتكيّف لوحة التحكم الرئيسية مع الوضع المخصص للمستخدم (مثل وضع الأسبوع المزدحم)، وتعرض درجات الانتظام وإيقاع التدريب ورؤى التعافي. توفر شاشة التقدم تحليلات أسبوعية تفصيلية مع مقاييس سلوكية وتوصيات مدعومة بالذكاء الاصطناعي.",
  },
  "af.hifi.dashboard.label": { en: "Dashboard", ar: "لوحة التحكم" },
  "af.hifi.progress.label": { en: "Weekly Progress", ar: "التقدم الأسبوعي" },
  "af.persona.label": { en: "PERSONA", ar: "الشخصية النموذجية" },
  "af.persona.h2": { en: "User Persona", ar: "الشخصية النموذجية للمستخدم" },
  "af.persona.name": { en: "Salma, 28", ar: "سلمى، 28" },
  "af.persona.role": { en: "Marketing Manager, Riyadh", ar: "مديرة تسويق، الرياض" },
  "af.persona.goals.label": { en: "GOALS", ar: "الأهداف" },
  "af.persona.goal1": { en: "Stay consistent with workouts", ar: "الحفاظ على انتظام التمارين" },
  "af.persona.goal2": { en: "Manage fitness around a busy schedule", ar: "إدارة اللياقة مع الجدول المزدحم" },
  "af.persona.goal3": { en: "Track progress without overwhelm", ar: "تتبع التقدم دون إرهاق" },
  "af.persona.pain.label": { en: "PAIN POINTS", ar: "نقاط الألم" },
  "af.persona.pain1": { en: "Irregular work hours disrupt routine", ar: "ساعات العمل غير المنتظمة تعطّل الروتين" },
  "af.persona.pain2": { en: "Motivation drops after missed sessions", ar: "تراجع الدافعية بعد الجلسات الفائتة" },
  "af.persona.pain3": { en: "Apps don't adapt to lifestyle changes", ar: "التطبيقات لا تتكيف مع تغيرات أسلوب الحياة" },
  "af.framework.label": { en: "BEHAVIORAL FRAMEWORK", ar: "الإطار السلوكي" },
  "af.framework.h2": { en: "Behavioral Framework", ar: "الإطار السلوكي" },
  "af.framework.1.title": { en: "Goal Structuring", ar: "هيكلة الأهداف" },
  "af.framework.1.desc": { en: "Define realistic goals based on lifestyle patterns", ar: "تحديد أهداف واقعية بناءً على أنماط أسلوب الحياة" },
  "af.framework.2.title": { en: "Cognitive Load Reduction", ar: "تقليل العبء المعرفي" },
  "af.framework.2.desc": { en: "Simplify daily decisions through guided actions", ar: "تبسيط القرارات اليومية من خلال إجراءات موجّهة" },
  "af.framework.3.title": { en: "Contextual Adaptation", ar: "التكيف السياقي" },
  "af.framework.3.desc": { en: "Workouts adjust to schedule changes and energy levels", ar: "تتكيف التمارين مع تغييرات الجدول ومستويات الطاقة" },
  "af.framework.4.title": { en: "Consistency Reinforcement", ar: "تعزيز الانتظام" },
  "af.framework.4.desc": { en: "Missed sessions trigger adjustments instead of penalties", ar: "الجلسات الفائتة تُطلق تعديلات بدلًا من عقوبات" },
  "af.outcome.quote": {
    en: "\"AuraFit shifts fitness from motivation-driven routines to a behaviour-guided system.\"",
    ar: "\"يُحوّل AuraFit اللياقة من روتين مدفوع بالتحفيز إلى نظام موجَّه بالسلوك.\"",
  },
  "af.outcome.p": {
    en: "AuraFit reframes fitness as an adaptive behavioral system. Instead of relying on motivation, the product structures small behavioral signals that help users maintain long-term consistency despite lifestyle fluctuations.",
    ar: "يُعيد AuraFit تأطير اللياقة كنظام سلوكي تكيّفي. بدلًا من الاعتماد على التحفيز، يُهيكل المنتج إشارات سلوكية صغيرة تساعد المستخدمين على الحفاظ على الانتظام على المدى البعيد رغم تقلبات أسلوب الحياة.",
  },
  "af.outcome.cta": { en: "View Full Prototype", ar: "عرض النموذج الأولي الكامل" },
  "af.nav.all": { en: "All Projects", ar: "جميع المشاريع" },
  "af.nav.next": { en: "Next: Travel Tales", ar: "التالي: Travel Tales" },
  "af.solution.research": { en: "Research", ar: "البحث" },
  "af.solution.research.val": { en: "Secondary", ar: "ثانوي" },
  "af.solution.design": { en: "Design", ar: "التصميم" },
  "af.solution.design.val": { en: "UI Design", ar: "تصميم UI" },
  "af.solution.type": { en: "Type", ar: "النوع" },
  "af.solution.type.val": { en: "App", ar: "تطبيق" },
  "af.wireframes.ob": { en: "Onboarding", ar: "الإعداد" },
  "af.wireframes.login": { en: "Login / Sign Up", ar: "تسجيل الدخول / إنشاء حساب" },
  "af.wireframes.home": { en: "Home", ar: "الرئيسية" },
  "af.wireframes.cart": { en: "Cart", ar: "السلة" },
  "af.wireframes.checkout": { en: "Checkout", ar: "الدفع" },
  "af.wireframes.progress": { en: "Progress", ar: "التقدم" },

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
  "tt.prototype": { en: "View Prototype", ar: "عرض النموذج الأولي" },
  "tt.resp.label": { en: "RESPONSIBILITIES", ar: "المسؤوليات" },
  "tt.resp.1": { en: "UX Research & Discovery", ar: "بحث تجربة المستخدم والاستكشاف" },
  "tt.resp.2": { en: "Information Architecture", ar: "هندسة المعلومات" },
  "tt.resp.3": { en: "Booking Flow Design", ar: "تصميم تدفق الحجز" },
  "tt.resp.4": { en: "UI Interface Design", ar: "تصميم واجهة المستخدم" },
  "tt.challenge.label": { en: "CHALLENGE", ar: "التحدي" },
  "tt.challenge.h2": { en: "The Challenge", ar: "التحدي" },
  "tt.challenge.1": { en: "Fragmented travel planning across multiple apps", ar: "تخطيط السفر مشتت عبر تطبيقات متعددة" },
  "tt.challenge.2": { en: "Lack of personalised destination discovery", ar: "غياب اكتشاف وجهات مخصصة" },
  "tt.challenge.3": { en: "Complex and friction-heavy booking experiences", ar: "تجارب حجز معقدة ومرهقة" },
  "tt.solution.label": { en: "SOLUTION", ar: "الحل" },
  "tt.solution.h2": { en: "The Solution", ar: "الحل" },
  "tt.solution.p": {
    en: "A unified travel app that combines smart destination discovery, personalised recommendations, and a streamlined booking flow — making travel planning effortless from inspiration to confirmation.",
    ar: "تطبيق سفر موحّد يجمع اكتشاف الوجهات الذكي، والتوصيات المخصصة، وتدفق حجز مبسّط — لجعل تخطيط السفر سهلًا من الإلهام إلى التأكيد.",
  },
  "tt.solution.research": { en: "Research", ar: "البحث" },
  "tt.solution.research.val": { en: "User Research", ar: "بحث المستخدم" },
  "tt.solution.design": { en: "Design", ar: "التصميم" },
  "tt.solution.design.val": { en: "UI Design", ar: "تصميم UI" },
  "tt.solution.type": { en: "Type", ar: "النوع" },
  "tt.solution.type.val": { en: "App", ar: "تطبيق" },
  "tt.moodboard.label": { en: "MOODBOARD", ar: "لوحة المزاج" },
  "tt.moodboard.h2": { en: "Moodboard", ar: "لوحة المزاج" },
  "tt.wireframes.label": { en: "WIREFRAMES", ar: "الإطارات السلكية" },
  "tt.wireframes.h2": { en: "Wireframes", ar: "الإطارات السلكية" },
  "tt.wireframes.p": {
    en: "Low-fidelity wireframes mapped the complete user journey — from onboarding and account setup through destination discovery, place detail, and the full booking flow.",
    ar: "رسمت الإطارات السلكية منخفضة الدقة رحلة المستخدم الكاملة — من الإعداد وإنشاء الحساب عبر اكتشاف الوجهات وتفاصيل المكان وتدفق الحجز الكامل.",
  },
  "tt.wireframes.ob": { en: "Onboarding", ar: "الإعداد" },
  "tt.wireframes.fav": { en: "Favourite Places", ar: "الأماكن المفضلة" },
  "tt.wireframes.home": { en: "Homepage", ar: "الصفحة الرئيسية" },
  "tt.wireframes.place": { en: "Place Detail", ar: "تفاصيل المكان" },
  "tt.wireframes.booking": { en: "Booking", ar: "الحجز" },
  "tt.process.label": { en: "DESIGN PROCESS", ar: "مسار التصميم" },
  "tt.process.h2": { en: "Design Process", ar: "مسار التصميم" },
  "tt.process.step1": { en: "Problem Definition", ar: "تحديد المشكلة" },
  "tt.process.step2": { en: "Research", ar: "البحث" },
  "tt.process.step3": { en: "Moodboard", ar: "لوحة المزاج" },
  "tt.process.step4": { en: "Wireframes", ar: "الإطارات السلكية" },
  "tt.process.step5": { en: "Hi-Fi Design", ar: "التصميم عالي الدقة" },
  "tt.process.step6": { en: "Prototype", ar: "النموذج الأولي" },
  "tt.hifi.label": { en: "HI-FI SCREENS", ar: "الشاشات عالية الدقة" },
  "tt.hifi.splash.h2": { en: "Splash & Onboarding", ar: "شاشة البداية والإعداد" },
  "tt.hifi.splash.p": {
    en: "The app opens with a bold splash screen, followed by two onboarding screens that introduce Travel Tales' core value proposition — inspiring users to explore and plan their next adventure.",
    ar: "يفتح التطبيق بشاشة بداية جريئة، تليها شاشتا إعداد تُقدّمان عرض القيمة الجوهري لـ Travel Tales — لإلهام المستخدمين لاستكشاف وتخطيط مغامرتهم القادمة.",
  },
  "tt.hifi.splash.label": { en: "Splash Screen", ar: "شاشة البداية" },
  "tt.hifi.ob1.label": { en: "Onboarding 1", ar: "الإعداد 1" },
  "tt.hifi.ob2.label": { en: "Onboarding 2", ar: "الإعداد 2" },
  "tt.hifi.account.h2": { en: "Account Setup", ar: "إعداد الحساب" },
  "tt.hifi.account.p": {
    en: "Users sign in or create an account, then personalise their experience by selecting their favourite travel destinations — setting the foundation for smart recommendations throughout the app.",
    ar: "يسجّل المستخدمون الدخول أو ينشئون حسابًا، ثم يخصّصون تجربتهم باختيار وجهات سفرهم المفضلة — لوضع أساس التوصيات الذكية عبر التطبيق.",
  },
  "tt.hifi.login.label": { en: "Login", ar: "تسجيل الدخول" },
  "tt.hifi.discovery.h2": { en: "Destination Discovery", ar: "اكتشاف الوجهات" },
  "tt.hifi.discovery.p": {
    en: "The homepage surfaces personalised destination cards, trending places, and curated experiences. Tapping a destination opens a rich place detail view with photos, reviews, and booking options.",
    ar: "تعرض الصفحة الرئيسية بطاقات وجهات مخصصة، وأماكن رائجة، وتجارب منتقاة. النقر على وجهة يفتح عرضًا تفصيليًا غنيًا بالصور والتقييمات وخيارات الحجز.",
  },
  "tt.hifi.home.label": { en: "Homepage", ar: "الصفحة الرئيسية" },
  "tt.hifi.place.label": { en: "Place Detail", ar: "تفاصيل المكان" },
  "tt.hifi.booking.h2": { en: "Booking Flow", ar: "تدفق الحجز" },
  "tt.hifi.booking.p": {
    en: "The booking flow is designed to minimise friction — users select dates on a calendar, choose guest count and room type, review their booking summary, and receive a confirmation screen. Four clear steps from intent to confirmation.",
    ar: "صُمّم تدفق الحجز لتقليل الاحتكاك — يختار المستخدمون التواريخ من تقويم، ويختارون عدد الضيوف ونوع الغرفة، ويراجعون ملخص الحجز، ويتلقّون شاشة تأكيد. أربع خطوات واضحة من النية إلى التأكيد.",
  },
  "tt.hifi.booking1.label": { en: "Step 1 — Dates", ar: "الخطوة 1 — التواريخ" },
  "tt.hifi.booking2.label": { en: "Step 2 — Guests", ar: "الخطوة 2 — الضيوف" },
  "tt.hifi.booking3.label": { en: "Step 3 — Summary", ar: "الخطوة 3 — الملخص" },
  "tt.hifi.confirm.label": { en: "Booking Confirmed", ar: "تأكيد الحجز" },
  "tt.persona.label": { en: "PERSONA", ar: "الشخصية النموذجية" },
  "tt.persona.h2": { en: "User Persona", ar: "الشخصية النموذجية للمستخدم" },
  "tt.persona.name": { en: "Nora, 26", ar: "نورة، 26" },
  "tt.persona.role": { en: "Content Creator, Jeddah", ar: "منشئة محتوى، جدة" },
  "tt.persona.goals.label": { en: "GOALS", ar: "الأهداف" },
  "tt.persona.goal1": { en: "Discover unique travel destinations", ar: "اكتشاف وجهات سفر فريدة" },
  "tt.persona.goal2": { en: "Plan and book trips in one place", ar: "تخطيط الرحلات وحجزها في مكان واحد" },
  "tt.persona.goal3": { en: "Share travel experiences with followers", ar: "مشاركة تجارب السفر مع المتابعين" },
  "tt.persona.pain.label": { en: "PAIN POINTS", ar: "نقاط الألم" },
  "tt.persona.pain1": { en: "Switching between multiple apps to plan", ar: "التنقل بين تطبيقات متعددة للتخطيط" },
  "tt.persona.pain2": { en: "Lack of personalised recommendations", ar: "غياب التوصيات المخصصة" },
  "tt.persona.pain3": { en: "Complicated booking processes", ar: "عمليات حجز معقدة" },
  "tt.userflow.label": { en: "USER FLOW", ar: "تدفق المستخدم" },
  "tt.userflow.h2": { en: "User Flow", ar: "تدفق المستخدم" },
  "tt.flow.splash": { en: "Splash", ar: "شاشة البداية" },
  "tt.flow.onboarding": { en: "Onboarding", ar: "الإعداد" },
  "tt.flow.login": { en: "Login / Register", ar: "تسجيل / إنشاء حساب" },
  "tt.flow.fav": { en: "Select Favourites", ar: "اختيار المفضلات" },
  "tt.flow.home": { en: "Homepage", ar: "الصفحة الرئيسية" },
  "tt.flow.place": { en: "Place Detail", ar: "تفاصيل المكان" },
  "tt.flow.booking": { en: "Booking", ar: "الحجز" },
  "tt.flow.confirm": { en: "Confirmation", ar: "التأكيد" },
  "tt.outcome.quote": {
    en: "\"Travel Tales turns fragmented planning into one seamless journey.\"",
    ar: "\"يحوّل Travel Tales التخطيط المتشتت إلى رحلة واحدة سلسة.\"",
  },
  "tt.outcome.p": {
    en: "By unifying discovery, personalisation, and booking into a single cohesive experience, Travel Tales removes the friction from travel planning — letting users focus on the excitement of the journey ahead.",
    ar: "بدمج الاكتشاف والتخصيص والحجز في تجربة واحدة متماسكة، يُزيل Travel Tales الاحتكاك من تخطيط السفر — ليتمكّن المستخدمون من التركيز على إثارة الرحلة القادمة.",
  },
  "tt.outcome.cta": { en: "View Full Prototype", ar: "عرض النموذج الأولي الكامل" },
  "tt.nav.prev": { en: "Previous: AuraFit", ar: "السابق: AuraFit" },
  "tt.nav.next": { en: "Next: VOKO", ar: "التالي: VOKO" },

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
  "voko.resp.label": { en: "RESPONSIBILITIES", ar: "المسؤوليات" },
  "voko.resp.1": { en: "UX Research Synthesis", ar: "تحليل أبحاث تجربة المستخدم" },
  "voko.resp.2": { en: "Behavioral Framework Design", ar: "تصميم الإطار السلوكي" },
  "voko.resp.3": { en: "Product Flow Architecture", ar: "هندسة تدفق المنتج" },
  "voko.resp.4": { en: "UI Interface Design", ar: "تصميم واجهة المستخدم" },
  "voko.challenge.label": { en: "CHALLENGE", ar: "التحدي" },
  "voko.challenge.h2": { en: "The Challenge", ar: "التحدي" },
  "voko.challenge.p": {
    en: "Many fashion shopping apps create friction during product discovery and checkout. Users often struggle with navigating product categories, comparing items, and completing purchases through long or confusing checkout processes.",
    ar: "تخلق كثير من تطبيقات تسوق الأزياء احتكاكًا أثناء اكتشاف المنتجات وعملية الدفع. يعاني المستخدمون من صعوبة التنقل بين فئات المنتجات، ومقارنة العناصر، وإتمام عمليات الشراء عبر عمليات دفع طويلة أو مربكة.",
  },
  "voko.solution.label": { en: "SOLUTION", ar: "الحل" },
  "voko.solution.h2": { en: "The Solution", ar: "الحل" },
  "voko.solution.p": {
    en: "Design a fashion shopping experience that allows users to discover collections easily, explore product details clearly, add items to cart quickly, and complete checkout with a simple, confident flow — from splash screen to payment confirmation.",
    ar: "تصميم تجربة تسوق أزياء تتيح للمستخدمين اكتشاف المجموعات بسهولة، واستكشاف تفاصيل المنتج بوضوح، وإضافة العناصر إلى السلة بسرعة، وإتمام الدفع بتدفق بسيط وواثق — من شاشة البداية إلى تأكيد الدفع.",
  },
  "voko.process.label": { en: "DESIGN PROCESS", ar: "مسار التصميم" },
  "voko.process.h2": { en: "Design Process", ar: "مسار التصميم" },
  "voko.process.step1": { en: "Problem Definition", ar: "تحديد المشكلة" },
  "voko.process.step2": { en: "Research", ar: "البحث" },
  "voko.process.step3": { en: "Moodboard", ar: "لوحة المزاج" },
  "voko.process.step4": { en: "Wireframes", ar: "الإطارات السلكية" },
  "voko.process.step5": { en: "Hi-Fi Design", ar: "التصميم عالي الدقة" },
  "voko.process.step6": { en: "Prototype", ar: "النموذج الأولي" },
  "voko.moodboard.label": { en: "MOODBOARD", ar: "لوحة المزاج" },
  "voko.moodboard.h2": { en: "Moodboard", ar: "لوحة المزاج" },
  "voko.moodboard.p": {
    en: "The visual direction for VOKO uses an Orange + White palette — warm, energetic, and fashion-forward. Orange evokes enthusiasm and action, encouraging users to explore and make purchases. White balances it with clarity and simplicity, ensuring a clean and user-friendly interface.",
    ar: "يعتمد التوجّه البصري لـ VOKO على لوحة برتقالي + أبيض — دافئة، حيوية، ومواكبة للموضة. يستحضر البرتقالي الحماس والحركة، ويشجّع المستخدمين على الاستكشاف والشراء. يوازنه الأبيض بالوضوح والبساطة، مما يضمن واجهة نظيفة وسهلة الاستخدام.",
  },
  "voko.moodboard.typo": { en: "TYPOGRAPHY", ar: "الخطوط" },
  "voko.persona.label": { en: "PERSONA", ar: "الشخصية النموذجية" },
  "voko.persona.h2": { en: "User Persona", ar: "الشخصية النموذجية للمستخدم" },
  "voko.persona.name": { en: "Sara, 26", ar: "سارة، 26" },
  "voko.persona.role": { en: "Fashion Enthusiast, Riyadh", ar: "محبة موضة، الرياض" },
  "voko.persona.goals.label": { en: "GOALS", ar: "الأهداف" },
  "voko.persona.goal1": { en: "Discover new fashion trends", ar: "اكتشاف صيحات الموضة الجديدة" },
  "voko.persona.goal2": { en: "Shop quickly on mobile", ar: "التسوق بسرعة عبر الجوال" },
  "voko.persona.goal3": { en: "Complete checkout without friction", ar: "إتمام الدفع دون احتكاك" },
  "voko.persona.pain.label": { en: "PAIN POINTS", ar: "نقاط الألم" },
  "voko.persona.pain1": { en: "Hard to find specific styles", ar: "صعوبة إيجاد أساليب محددة" },
  "voko.persona.pain2": { en: "Too many steps in checkout", ar: "خطوات كثيرة في عملية الدفع" },
  "voko.persona.pain3": { en: "Unclear size and product details", ar: "تفاصيل المقاس والمنتج غير واضحة" },
  "voko.wireframes.label": { en: "WIREFRAMES", ar: "الإطارات السلكية" },
  "voko.wireframes.h2": { en: "Wireframes", ar: "الإطارات السلكية" },
  "voko.wireframes.p": {
    en: "Low-fidelity wireframes mapped the complete shopping flow — from product discovery and browsing through cart management, checkout, and profile management.",
    ar: "رسمت الإطارات السلكية منخفضة الدقة تدفق التسوق الكامل — من اكتشاف المنتجات والتصفح عبر إدارة السلة وعملية الدفع وإدارة الملف الشخصي.",
  },
  "voko.wireframes.home": { en: "Home", ar: "الرئيسية" },
  "voko.wireframes.product": { en: "Product Detail", ar: "تفاصيل المنتج" },
  "voko.wireframes.fav": { en: "Favorites", ar: "المفضلات" },
  "voko.wireframes.checkout": { en: "Checkout", ar: "الدفع" },
  "voko.wireframes.profile": { en: "Profile", ar: "الملف الشخصي" },
  "voko.hifi.label": { en: "HI-FI SCREENS", ar: "الشاشات عالية الدقة" },
  "voko.hifi.onboarding.h2": { en: "Onboarding Flow", ar: "تدفق الإعداد" },
  "voko.hifi.onboarding.p": {
    en: "The app opens with a bold splash screen, followed by three onboarding slides that introduce the VOKO brand proposition — guiding new users into the fashion experience.",
    ar: "يفتح التطبيق بشاشة بداية جريئة، تليها ثلاثة شرائح إعداد تُقدّم عرض قيمة علامة VOKO — لتوجيه المستخدمين الجدد إلى تجربة الموضة.",
  },
  "voko.hifi.splash.label": { en: "Splash", ar: "شاشة البداية" },
  "voko.hifi.ob1.label": { en: "Find Your Style", ar: "اعثر على أسلوبك" },
  "voko.hifi.ob2.label": { en: "Wear it First", ar: "البسه أولاً" },
  "voko.hifi.ob3.label": { en: "Your Way", ar: "بطريقتك" },
  "voko.account.label": { en: "ACCOUNT SETUP", ar: "إعداد الحساب" },
  "voko.account.h2": { en: "Account Setup", ar: "إعداد الحساب" },
  "voko.account.p": {
    en: "After onboarding, users are presented with a Welcome screen to either log in to an existing account or create a new one. The Login screen supports email/password sign-in with Google and Facebook social login options, while the Sign Up screen collects name, email, phone, and password to create a new account.",
    ar: "بعد الإعداد، تظهر شاشة الترحيب لتسجيل الدخول بحساب موجود أو إنشاء حساب جديد. تدعم شاشة تسجيل الدخول التسجيل بالبريد/كلمة المرور مع خيارات Google و Facebook، بينما تجمع شاشة التسجيل الاسم والبريد والهاتف وكلمة المرور.",
  },
  "voko.account.welcome.label": { en: "Welcome", ar: "الترحيب" },
  "voko.account.login.label": { en: "Login", ar: "تسجيل الدخول" },
  "voko.account.signup.label": { en: "Sign Up", ar: "إنشاء حساب" },
  "voko.shopping.h2": { en: "Shopping Flow", ar: "تدفق التسوق" },
  "voko.shopping.p": {
    en: "From the home feed to product detail, cart, checkout with Mada Card payment, and a clear payment success confirmation — the full purchase journey in five screens.",
    ar: "من الصفحة الرئيسية إلى تفاصيل المنتج والسلة وعملية الدفع ببطاقة مدى وتأكيد الدفع الواضح — رحلة الشراء كاملة في خمس شاشات.",
  },
  "voko.shopping.home.label": { en: "Home", ar: "الرئيسية" },
  "voko.shopping.product.label": { en: "Product Detail", ar: "تفاصيل المنتج" },
  "voko.shopping.cart.label": { en: "My Cart", ar: "سلتي" },
  "voko.shopping.checkout.label": { en: "Checkout", ar: "الدفع" },
  "voko.shopping.success.label": { en: "Payment Successful", ar: "تم الدفع بنجاح" },
  "voko.userflow.label": { en: "USER FLOW", ar: "تدفق المستخدم" },
  "voko.userflow.h2": { en: "Shopping Experience Flow", ar: "تدفق تجربة التسوق" },
  "voko.flow.splash": { en: "Splash", ar: "شاشة البداية" },
  "voko.flow.onboarding": { en: "Onboarding", ar: "الإعداد" },
  "voko.flow.welcome": { en: "Welcome", ar: "الترحيب" },
  "voko.flow.signup": { en: "Sign Up", ar: "إنشاء حساب" },
  "voko.flow.home": { en: "Home", ar: "الرئيسية" },
  "voko.flow.product": { en: "Product Detail", ar: "تفاصيل المنتج" },
  "voko.flow.cart": { en: "Cart", ar: "السلة" },
  "voko.flow.checkout": { en: "Checkout", ar: "الدفع" },
  "voko.flow.success": { en: "Payment Success", ar: "نجاح الدفع" },
  "voko.outcome.quote": {
    en: "\"VOKO makes fashion discovery and purchasing effortless.\"",
    ar: "\"يجعل VOKO اكتشاف الموضة والتسوق أمرًا سهلاً.\"",
  },
  "voko.outcome.p": {
    en: "The design improves product discovery and simplifies the purchasing process, allowing users to browse fashion collections and complete their orders through a clear and efficient shopping flow — from first launch to payment confirmation.",
    ar: "يُحسّن التصميم اكتشاف المنتجات ويُبسّط عملية الشراء، مما يتيح للمستخدمين تصفح مجموعات الموضة وإتمام طلباتهم عبر تدفق تسوق واضح وفعّال — من أول إطلاق حتى تأكيد الدفع.",
  },
  "voko.nav.prev": { en: "Previous: Travel Tales", ar: "السابق: Travel Tales" },
  "voko.nav.next": { en: "Next: Web Design", ar: "التالي: Web Design" },

  // ── VISUAL DESIGN PAGE ──
  "vd.hero.badge": { en: "VISUAL DESIGN", ar: "التصميم البصري" },
  "vd.hero.title": { en: "Brand, Campaign & Environmental Design", ar: "تصميم العلامة التجارية والحملات والتصميم البيئي" },
  "vd.hero.p": {
    en: "A curated collection of visual design work spanning brand identity, social media campaigns, presentation design, environmental graphics, and packaging — crafted for clients across Saudi Arabia and the MENA region.",
    ar: "مجموعة مختارة من إبداعات التصميم البصري، من هويات الشركات وإعلانات السوشيال ميديا إلى عروض الشرائح، والرسومات المكانية، وتصميم العبوات، مقدمة خصيصاً لعملائنا في السعودية ومنطقة الشرق الأوسط وشمال أفريقيا.",
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
