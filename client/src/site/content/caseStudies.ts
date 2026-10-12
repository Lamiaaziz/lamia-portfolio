import { asset, type SiteLang } from "../i18n";
import { homeContent, type CaseCard } from "./home";

export type SmallCard = { meta: string; title: string; text: string; href: string; image: string; imageAlt: string; tone: "green" | "yellow" | "grey" };

export type CaseStudiesContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string[];
  panelTitle: string;
  panelText: string;
  disciplines: { name: string; note: string; href: string }[];
  productTitle: string;
  productIntro: string;
  featured: CaseCard[];
  viewCase: string;
  concepts: SmallCard[];
  foundationTitle: string;
  foundationIntro: string;
  foundation: SmallCard[];
  viewProject: string;
  connectEyebrow: string;
  connectTitle: string;
  connectIntro: string;
  connect: { title: string; text: string }[];
};

const img = (n: string) => asset(`/work/${n}.webp`);

const en: CaseStudiesContent = {
  metaTitle: "Case Studies — Lamia Alrowaished",
  metaDescription:
    "Product and digital experience case studies by Lamia Alrowaished: a live bilingual website, a digital health platform and three UX concepts, plus visual and wayfinding work.",
  eyebrow: "Selected work · Product & design",
  title: ["Product work,", "and the foundation", "behind it."],
  panelTitle: "Explore by discipline",
  panelText:
    "The product and digital experience work leads. The broader foundation shows how visual systems, space, and communication strengthen my UX/UI practice.",
  disciplines: [
    { name: "Product & Digital Experiences", note: "5 case studies", href: "#product-design" },
    { name: "Web Design", note: "2 complete websites", href: "#foundation" },
    { name: "Visual Design", note: "Client & personal work", href: "#foundation" },
    { name: "Wayfinding", note: "Real-world project", href: "#foundation" },
  ],
  productTitle: "Product & Digital Experiences",
  productIntro:
    "Five case studies: two client projects — a live bilingual website and a platform approved for development — and three UX concepts.",
  featured: homeContent.en.cards.slice(0, 2),
  viewCase: "View Case Study",
  concepts: [
    { meta: "03 · UX Research · Bootcamp Concept", title: "AuraFit", text: "A behavioral fitness concept for Saudi professionals, shaped by independent research, journey mapping, and adaptive habit support.", href: "/aurafit", image: img("card-aurafit"), imageAlt: "AuraFit app screens on two phones", tone: "green" },
    { meta: "04 · UX Research · Concept", title: "TravelTales", text: "A mobile trip-planning experience structured from discovery through booking confirmation, with clearer flows and information architecture.", href: "/traveltales", image: img("card-traveltales"), imageAlt: "TravelTales app screens on two phones", tone: "yellow" },
    { meta: "05 · E-commerce UX · Concept", title: "VOKO", text: "A fashion-shopping concept focused on product discovery, product selection, and a clearer checkout experience.", href: "/voko", image: img("card-voko"), imageAlt: "VOKO fashion app screens on two phones", tone: "green" },
  ],
  foundationTitle: "Broader Design Foundation",
  foundationIntro:
    "Selected work across web, visual communication, and environmental design—the foundation that strengthens my product thinking and systems approach.",
  foundation: [
    { meta: "01 · Web Design · Webflow", title: "Web Design", text: "Designed and built two responsive Webflow websites with CMS structures, reusable layouts, and complete design-to-development delivery.", href: "/webdesign", image: img("card-webdesign"), imageAlt: "Website pages designed in Webflow", tone: "grey" },
    { meta: "02 · Visual Design · Client & Personal Work", title: "Visual Design", text: "Selected identity, campaign, presentation, packaging, and bilingual communication work across client and personal projects.", href: "/visualdesign", image: img("card-visual"), imageAlt: "Social media campaign designs for The Solution Consulting", tone: "grey" },
    { meta: "03 · Environmental Design · Real-World Project", title: "Wayfinding & Signage Design", text: "Designed a bilingual wayfinding system for a 24-floor mixed-use development, covering zoning, pictograms, sign hierarchy, and location plans.", href: "/wayfinding", image: img("card-wayfinding"), imageAlt: "Wayfinding plans, signage and material samples on a desk", tone: "grey" },
  ],
  viewProject: "View Project",
  connectEyebrow: "What each case study shows",
  connectTitle: "How the work connects",
  connectIntro: "Each study makes the challenge, design reasoning, system decisions, and delivery process visible.",
  connect: [
    { title: "Context & challenge", text: "The users, business needs, constraints, and problem being addressed." },
    { title: "Journey & decisions", text: "How flows, information hierarchy, evidence, and trade-offs guided the solution." },
    { title: "System & delivery", text: "How interfaces, components, RTL considerations, and handoff came together." },
  ],
};

const ar: CaseStudiesContent = {
  metaTitle: "دراسات الحالة — لمياء الرويشد",
  metaDescription:
    "دراسات حالة في المنتجات والتجارب الرقمية للمياء الرويشد: موقع ثنائي اللغة منشور، ومنصة صحية رقمية، وثلاثة مشاريع مفاهيمية، إلى جانب أعمال التصميم البصري والتوجيه المكاني.",
  eyebrow: "أعمال مختارة · المنتجات والتصميم",
  title: ["تصميم المنتجات،", "والأساس الذي", "يقوم عليه."],
  panelTitle: "تصفّح حسب التخصص",
  panelText:
    "تأتي المنتجات والتجارب الرقمية في المقدمة، ويُظهر الأساس الأوسع كيف تعزّز الأنظمة البصرية والمساحات والتواصل ممارستي في تصميم UX/UI.",
  disciplines: [
    { name: "المنتجات والتجارب الرقمية", note: "5 دراسات حالة", href: "#product-design" },
    { name: "تصميم المواقع", note: "موقعان متكاملان", href: "#foundation" },
    { name: "التصميم البصري", note: "أعمال للعملاء وأعمال شخصية", href: "#foundation" },
    { name: "التوجيه المكاني", note: "مشروع واقعي", href: "#foundation" },
  ],
  productTitle: "المنتجات والتجارب الرقمية",
  productIntro:
    "خمس دراسات حالة: مشروعان لعميلين — موقع ثنائي اللغة منشور ومنصة اعتُمدت للتطوير — وثلاثة مشاريع مفاهيمية في تجربة المستخدم.",
  featured: homeContent.ar.cards.slice(0, 2),
  viewCase: "عرض دراسة الحالة",
  concepts: [
    { meta: "03 · بحث تجربة المستخدم · مشروع معسكر تدريبي", title: "AuraFit", text: "مفهوم لياقة سلوكي للمهنيين في السعودية، قائم على بحث مستقل ورسم رحلة المستخدم ودعم مرن لبناء العادات.", href: "/ar/aurafit", image: img("card-aurafit"), imageAlt: "شاشات تطبيق أورافيت على هاتفين", tone: "green" },
    { meta: "04 · بحث تجربة المستخدم · مشروع مفاهيمي", title: "TravelTales", text: "تجربة جوال لتخطيط الرحلات، منظّمة من الاكتشاف حتى تأكيد الحجز، بمسارات أوضح وبنية معلومات مدروسة.", href: "/ar/traveltales", image: img("card-traveltales"), imageAlt: "شاشات تطبيق ترافل تيلز على هاتفين", tone: "yellow" },
    { meta: "05 · تجربة التجارة الإلكترونية · مشروع مفاهيمي", title: "VOKO", text: "مفهوم لتسوّق الأزياء يركّز على اكتشاف المنتجات واختيارها وتجربة دفع أوضح.", href: "/ar/voko", image: img("card-voko"), imageAlt: "شاشات تطبيق فوكو للأزياء على هاتفين", tone: "green" },
  ],
  foundationTitle: "أساس تصميمي أوسع",
  foundationIntro:
    "أعمال مختارة في تصميم المواقع والتواصل البصري والتصميم البيئي، تشكّل الأساس الذي يعزّز تفكيري في المنتجات ونهجي في بناء الأنظمة.",
  foundation: [
    { meta: "01 · تصميم المواقع · Webflow", title: "تصميم المواقع", text: "صمّمت وبنيت موقعين متجاوبين على Webflow، بهياكل لإدارة المحتوى وتخطيطات قابلة لإعادة الاستخدام، وتسليم متكامل من التصميم إلى التطوير.", href: "/ar/webdesign", image: img("card-webdesign"), imageAlt: "صفحات مواقع مصمّمة على Webflow", tone: "grey" },
    { meta: "02 · التصميم البصري · أعمال للعملاء وأعمال شخصية", title: "التصميم البصري", text: "مختارات من الهويات والحملات والعروض التقديمية والتغليف والتواصل ثنائي اللغة، لعملاء ومشاريع شخصية.", href: "/ar/visualdesign", image: img("card-visual"), imageAlt: "تصاميم حملة على وسائل التواصل لشركة The Solution Consulting", tone: "grey" },
    { meta: "03 · التصميم البيئي · مشروع واقعي", title: "تصميم التوجيه واللافتات", text: "صمّمت نظام توجيه ثنائي اللغة لمشروع متعدد الاستخدامات من 24 طابقًا، يشمل تقسيم المناطق والرموز التوضيحية وتسلسل اللافتات ومخططات المواقع.", href: "/ar/wayfinding", image: img("card-wayfinding"), imageAlt: "مخططات التوجيه واللافتات وعينات المواد على مكتب", tone: "grey" },
  ],
  viewProject: "عرض المشروع",
  connectEyebrow: "ما تعرضه كل دراسة حالة",
  connectTitle: "كيف تتكامل مسارات المستخدمين؟",
  connectIntro: "توضّح كل دراسة التحدي، ومنطق التصميم، وقرارات النظام، ومراحل التسليم.",
  connect: [
    { title: "السياق والتحدي", text: "المستخدمون، واحتياجات العمل، والقيود، والمشكلة المطلوب حلّها." },
    { title: "الرحلة والقرارات", text: "كيف وجّهت المسارات وتسلسل المعلومات والأدلة والمفاضلات الحلَّ النهائي." },
    { title: "النظام والتسليم", text: "كيف اجتمعت الواجهات والمكوّنات واعتبارات الاتجاه من اليمين لليسار وعملية التسليم." },
  ],
};

export const caseStudiesContent: Record<SiteLang, CaseStudiesContent> = { en, ar };
