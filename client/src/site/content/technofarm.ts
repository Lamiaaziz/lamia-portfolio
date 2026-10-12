import { asset, type SiteLang } from "../i18n";

const shot = (n: string) => asset(`/technofarm/${n}.webp`);

export type Shot = { src: string; label: string; alt: string };

export type TechnoFarmContent = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    chips: string[];
    cta: string;
    desktop: string;
    mobile: string;
    caption: string;
    alt: string;
  };
  overview: { label: string; value: string }[];
  brief: {
    eyebrow: string;
    title: string;
    cards: { label: string; title: string; text: string; dark?: boolean }[];
  };
  ownership: { eyebrow: string; title: string; intro: string; steps: { title: string; text: string; tag: string }[] };
  audience: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: { title: string; text: string }[];
    mapLabel: string;
    home: string;
    pages: string[];
    detail: string;
    note: string;
  };
  screens: { eyebrow: string; title: string; intro: string; large: Shot[]; small: Shot[] };
  catalog: { eyebrow: string; title: string; intro: string; cards: { title: string; text: string }[] };
  bilingual: { eyebrow: string; title: string; intro: string; desktops: Shot[]; phones: Shot[] };
  visual: {
    eyebrow: string;
    title: string;
    intro: string;
    colors: { name: string; hex: string; edge?: boolean }[];
    fonts: { sample: string; family: string; name: string; role: string; ar?: boolean }[];
  };
  ai: {
    eyebrow: string;
    title: string;
    intro: string;
    flow: string[];
    highlight: number;
    cards: { label: string; text: string }[];
  };
  outcome: { eyebrow: string; title: string; text: string; cta: string; stats: { value: string; label: string }[] };
};

const SITE = "https://www.technofarm.com.sa";
export const TECHNOFARM_URL = SITE;

const COLORS = [
  { name: "Brand green", hex: "#033F23" },
  { name: "Forest", hex: "#1E5B3B" },
  { name: "Leaf", hex: "#63A87C" },
  { name: "Cream", hex: "#FBF8F1", edge: true },
  { name: "Sand", hex: "#EBE2CF", edge: true },
];

const en: TechnoFarmContent = {
  metaTitle: "TechnoFarm case study — Lamia Alrowaished",
  metaDescription:
    "How Lamia Alrowaished led TechnoFarm’s bilingual website and product catalog from brief to launch: positioning, Arabic and English content, UX, UI and an AI-supported build.",
  hero: {
    eyebrow: "Real client · Bilingual website · 2026",
    title: "TechnoFarm",
    lead: "A bilingual website and product catalog for a certified organic farm in Riyadh.",
    body: "I led this project from brief to launch — positioning, Arabic and English content, UX, UI and an AI-supported build — for a farm that has supplied Saudi Arabia’s leading retailers since 2005.",
    chips: ["Real client", "Arabic + English", "Live website"],
    cta: "Visit technofarm.com.sa",
    desktop: shot("d-en-home"),
    mobile: shot("m-en-product-detail"),
    caption: "Brief · Content · UX · UI · Build · Launch",
    alt: "TechnoFarm home page on desktop and a product page on mobile",
  },
  overview: [
    { label: "Client", value: "Techno Farm Est. · Riyadh" },
    { label: "Role", value: "Sole designer & project lead" },
    { label: "Scope", value: "7 pages · 40+ product catalog" },
    { label: "Tools", value: "AI-assisted build · GitHub · Cloudflare" },
  ],
  brief: {
    eyebrow: "The brief",
    title: "An established farm needed a website that matched its reputation",
    cards: [
      {
        label: "The challenge",
        title: "Premium, trusted and easy to buy from",
        text: "Techno Farm supplies major Saudi retailers. The site had to show its scale, certifications and 40+ products clearly — in Arabic and English — and turn visits into supply inquiries.",
      },
      {
        label: "The response",
        title: "A bilingual catalog built to grow",
        text: "A seven-page site with a structured product catalog, clear B2B paths and a full Arabic right-to-left experience — planned so ordering, payments and accounts can be added later without a redesign.",
        dark: true,
      },
    ],
  },
  ownership: {
    eyebrow: "End-to-end ownership",
    title: "One project, every part of my experience",
    intro:
      "TechnoFarm brought my business development, marketing and design background together. I handled every stage myself — from understanding the client to publishing the live site.",
    steps: [
      { title: "Brief & positioning", text: "Understood the client and positioned the farm as premium and trustworthy.", tag: "Business development" },
      { title: "Content", text: "Wrote all English and Arabic copy, product names and page messaging.", tag: "Marketing" },
      { title: "UX", text: "Planned the site map, catalog structure and B2B inquiry paths.", tag: "UX" },
      { title: "UI", text: "Built the visual system: greens, cream, type, cards and layouts.", tag: "UI design" },
      { title: "Build with AI", text: "Directed AI step by step to build the site the way I imagined it.", tag: "AI-assisted" },
      { title: "Launch", text: "Published on the client’s domain with hosting and security set up.", tag: "Deployment" },
    ],
  },
  audience: {
    eyebrow: "Audience & structure",
    title: "Designed for buyers, partners and families",
    intro:
      "The site serves three groups with different goals, so the structure gives each one a clear path: browse the catalog, check certifications, or request supply.",
    groups: [
      { title: "Retail & B2B buyers", text: "Need certifications, product range and a fast way to request supply." },
      { title: "Restaurants & hotels", text: "Need availability, packing options and a direct line to the farm." },
      { title: "Households", text: "Need fresh, trusted produce and clear product details." },
    ],
    mapLabel: "Site map",
    home: "Home",
    pages: ["About", "Products", "Certifications", "B2B / Clients", "Founder", "Contact"],
    detail: "Product detail · 40+ items",
    note: "Every product page is generated from one structured data source.",
  },
  screens: {
    eyebrow: "Selected screens · Desktop",
    title: "Real farm photos, calm layouts, clear next steps",
    intro:
      "Each page leads with the farm’s own imagery and keeps one clear next step — explore products, check certifications or send an inquiry.",
    large: [
      { src: shot("d-en-home"), label: "Home", alt: "TechnoFarm home page" },
      { src: shot("d-en-products"), label: "Product catalog", alt: "TechnoFarm product catalog page" },
      { src: shot("d-en-product-detail"), label: "Product detail", alt: "TechnoFarm product detail page" },
    ],
    small: [
      { src: shot("d-en-about-s"), label: "About", alt: "TechnoFarm about page" },
      { src: shot("d-en-certifications-s"), label: "Certifications", alt: "TechnoFarm certifications page" },
      { src: shot("d-en-b2b-s"), label: "B2B / Clients", alt: "TechnoFarm B2B and clients page" },
      { src: shot("d-en-contact-s"), label: "Contact", alt: "TechnoFarm contact page" },
    ],
  },
  catalog: {
    eyebrow: "Product thinking",
    title: "A catalog today, ready for e-commerce tomorrow",
    intro:
      "The client wasn’t ready to sell online yet, so I designed the catalog as the foundation: every product is structured data, and every card already carries what a future cart will need.",
    cards: [
      { title: "Structured product data", text: "Names, categories, pack sizes and prices live in one editable source, not hard-coded pages." },
      { title: "Bilingual product cards", text: "Arabic and English names side by side, so every buyer reads in their own language." },
      { title: "Clear price & pack size", text: "Price per pack on every card helps retail buyers compare quickly." },
      { title: "Ready to scale", text: "Cart, checkout, payments and accounts can plug in later without a redesign." },
    ],
  },
  bilingual: {
    eyebrow: "Arabic + English",
    title: "One website, two native experiences",
    intro:
      "Arabic isn’t a translated layer. The language switch flips the whole layout to right-to-left, uses Almarai for Arabic text, and keeps product names, prices and navigation clear in both directions.",
    desktops: [
      { src: shot("d-en-home"), label: "English · left to right", alt: "TechnoFarm home page in English" },
      { src: shot("d-ar-home"), label: "Arabic · right to left", alt: "TechnoFarm home page in Arabic" },
    ],
    phones: [
      { src: shot("m-en-product-detail"), label: "Product · English", alt: "Product page in English on mobile" },
      { src: shot("m-ar-product-detail"), label: "Product · Arabic", alt: "Product page in Arabic on mobile" },
      { src: shot("m-ar-founder"), label: "Founder · Arabic", alt: "Founder page in Arabic on mobile" },
      { src: shot("m-ar-contact"), label: "Contact · Arabic", alt: "Contact page in Arabic on mobile" },
    ],
  },
  visual: {
    eyebrow: "Visual system",
    title: "Deep greens, warm cream and real produce",
    intro:
      "A restrained palette and an editorial serif give the farm an established, premium voice, while generous spacing lets the produce photography lead.",
    colors: COLORS,
    fonts: [
      { sample: "Aa", family: "Fraunces", name: "Fraunces", role: "Display · headings" },
      { sample: "Aa", family: "Inter", name: "Inter", role: "Body · interface" },
      { sample: "أب", family: "Almarai", name: "Almarai", role: "Arabic · all text", ar: true },
    ],
  },
  ai: {
    eyebrow: "How I worked with AI",
    title: "I led the vision. AI supported the build.",
    intro:
      "I shaped the idea, arranged the structure and defined the visual direction — then directed AI step by step to build the website the way I imagined it, without hand-coding. At every step I reviewed, corrected and decided what moved forward, from content and layout to the bilingual experience. AI handled the technical build and deployment; the vision, decisions and final quality were mine.",
    flow: ["Idea", "Content", "UX", "UI", "Build with AI", "Launch"],
    highlight: 4,
    cards: [
      { label: "What I led", text: "The vision, site structure, Arabic and English content, visual design, and every review and final decision." },
      { label: "What AI supported", text: "Writing the code, setting up hosting and deployment, and speeding up each round of changes." },
    ],
  },
  outcome: {
    eyebrow: "Outcome",
    title: "Live, bilingual and ready to grow",
    text: "TechnoFarm is now live on the client’s own domain, giving the farm a credible digital home for retailers, partners and families — and a solid foundation for online ordering when the business is ready.",
    cta: "Visit the live website",
    stats: [
      { value: "7", label: "pages, brief to launch" },
      { value: "40+", label: "products in the catalog" },
      { value: "2", label: "languages, full RTL" },
      { value: "1", label: "designer across every stage" },
    ],
  },
};

const ar: TechnoFarmContent = {
  metaTitle: "دراسة حالة تكنو فارم — لمياء الرويشد",
  metaDescription:
    "كيف قادت لمياء الرويشد موقع تكنو فارم ثنائي اللغة وكتالوج منتجاتها من الموجز حتى الإطلاق: التموضع، والمحتوى بالعربية والإنجليزية، وتجربة المستخدم، والواجهات، والبناء بمساعدة الذكاء الاصطناعي.",
  hero: {
    eyebrow: "عميل حقيقي · موقع ثنائي اللغة · 2026",
    title: "تكنو فارم",
    lead: "موقع ثنائي اللغة وكتالوج منتجات لمزرعة عضوية معتمدة في الرياض.",
    body: "قدت مشروع تكنو فارم من مرحلة التخطيط وحتى الإطلاق، بدءًا من تطوير الهوية التسويقية وصياغة المحتوى باللغتين العربية والإنجليزية، وصولًا إلى تصميم تجربة المستخدم وواجهات الموقع وتنفيذه بالاستعانة بأدوات الذكاء الاصطناعي، لصالح مزرعة سعودية تورّد منتجاتها لكبرى متاجر التجزئة في المملكة منذ عام 2005.",
    chips: ["عميل حقيقي", "عربي + إنجليزي", "موقع منشور"],
    cta: "زيارة technofarm.com.sa",
    desktop: shot("d-ar-home"),
    mobile: shot("m-ar-product-detail"),
    caption: "الموجز · المحتوى · تجربة المستخدم · الواجهات · البناء · الإطلاق",
    alt: "الصفحة الرئيسية لموقع تكنو فارم على سطح المكتب وصفحة منتج على الجوال",
  },
  overview: [
    { label: "العميل", value: "مؤسسة تكنو فارم · الرياض" },
    { label: "الدور", value: "المصممة الوحيدة وقائدة المشروع" },
    { label: "النطاق", value: "7 صفحات · كتالوج من +40 منتجًا" },
    { label: "الأدوات", value: "بناء بمساعدة الذكاء الاصطناعي · GitHub \u200F· Cloudflare" },
  ],
  brief: {
    eyebrow: "الموجز",
    title: "مزرعة راسخة تحتاج موقعًا يليق بسمعتها",
    cards: [
      {
        label: "التحدي",
        title: "حضور فاخر وموثوق وسهل للشراء",
        text: "تورّد تكنو فارم لكبرى متاجر التجزئة في المملكة، وكان على الموقع أن يُظهر حجمها وشهاداتها وأكثر من 40 منتجًا بوضوح — بالعربية والإنجليزية — وأن يحوّل الزيارات إلى طلبات توريد.",
      },
      {
        label: "الاستجابة",
        title: "كتالوج ثنائي اللغة مبني للنمو",
        text: "موقع من سبع صفحات بكتالوج منتجات منظّم، ومسارات واضحة لقطاع الأعمال، وتجربة عربية كاملة من اليمين إلى اليسار — مخطط بحيث يمكن إضافة الطلب والدفع والحسابات لاحقًا دون إعادة تصميم.",
        dark: true,
      },
    ],
  },
  ownership: {
    eyebrow: "ملكية كاملة للمشروع",
    title: "مشروع واحد يجمع كل خبراتي",
    intro:
      "جمع مشروع تكنو فارم بين خبرتي في تطوير الأعمال والتسويق والتصميم، وتولّيت كل مرحلة بنفسي — من فهم العميل حتى نشر الموقع.",
    steps: [
      { title: "الموجز والتموضع", text: "فهمت العميل، وقدّمت المزرعة بصورة فاخرة وموثوقة.", tag: "تطوير الأعمال" },
      { title: "المحتوى", text: "كتبت كل النصوص بالعربية والإنجليزية، وأسماء المنتجات ورسائل الصفحات.", tag: "التسويق" },
      { title: "تجربة المستخدم", text: "خطّطت خريطة الموقع وهيكل الكتالوج ومسارات استفسارات الشركات.", tag: "تجربة المستخدم" },
      { title: "الواجهات", text: "بنيت النظام البصري: الأخضر والكريمي والخطوط والبطاقات والتخطيطات.", tag: "تصميم الواجهات" },
      { title: "البناء بالذكاء الاصطناعي", text: "وجّهت الذكاء الاصطناعي خطوة بخطوة لبناء الموقع كما تصوّرته.", tag: "بمساعدة الذكاء الاصطناعي" },
      { title: "الإطلاق", text: "نشرت الموقع على نطاق العميل مع إعداد الاستضافة والحماية.", tag: "النشر" },
    ],
  },
  audience: {
    eyebrow: "الجمهور والهيكل",
    title: "مصمَّم للمشترين والشركاء والعائلات",
    intro:
      "يخدم الموقع ثلاث فئات بأهداف مختلفة، لذا يمنح الهيكل كل فئة مسارًا واضحًا: تصفّح الكتالوج، أو مراجعة الشهادات، أو طلب التوريد.",
    groups: [
      { title: "مشترو التجزئة والشركات", text: "يحتاجون إلى الشهادات وتنوّع المنتجات وطريقة سريعة لطلب التوريد." },
      { title: "المطاعم والفنادق", text: "يحتاجون إلى معرفة التوفّر وخيارات التعبئة وتواصل مباشر مع المزرعة." },
      { title: "العائلات", text: "يحتاجون إلى منتجات طازجة وموثوقة وتفاصيل واضحة." },
    ],
    mapLabel: "خريطة الموقع",
    home: "الرئيسية",
    pages: ["عن المزرعة", "منتجاتنا", "الشهادات", "قطاع الأعمال", "المؤسس", "اتصل بنا"],
    detail: "تفاصيل المنتج · +40 منتجًا",
    note: "كل صفحة منتج تُولَّد من مصدر بيانات منظّم واحد.",
  },
  screens: {
    eyebrow: "شاشات مختارة · سطح المكتب",
    title: "صور حقيقية، وتخطيط هادئ، وخطوة تالية واضحة",
    intro:
      "تبدأ كل صفحة بصور المزرعة نفسها، وتحافظ على خطوة تالية واحدة واضحة — استكشاف المنتجات، أو مراجعة الشهادات، أو إرسال استفسار.",
    large: [
      { src: shot("d-ar-home"), label: "الرئيسية", alt: "الصفحة الرئيسية لموقع تكنو فارم" },
      { src: shot("d-ar-products"), label: "كتالوج المنتجات", alt: "صفحة كتالوج المنتجات" },
      { src: shot("d-ar-product-detail"), label: "تفاصيل المنتج", alt: "صفحة تفاصيل المنتج" },
    ],
    small: [
      { src: shot("d-ar-about-s"), label: "عن المزرعة", alt: "صفحة عن المزرعة" },
      { src: shot("d-ar-certifications-s"), label: "الشهادات", alt: "صفحة الشهادات" },
      { src: shot("d-ar-b2b-s"), label: "قطاع الأعمال", alt: "صفحة قطاع الأعمال والعملاء" },
      { src: shot("d-ar-contact-s"), label: "اتصل بنا", alt: "صفحة اتصل بنا" },
    ],
  },
  catalog: {
    eyebrow: "التفكير في المنتج",
    title: "كتالوج اليوم، جاهز للتجارة الإلكترونية غدًا",
    intro:
      "لم يكن العميل مستعدًا للبيع عبر الإنترنت بعد، لذا صمّمت الكتالوج ليكون الأساس: كل منتج بيانات منظّمة، وكل بطاقة تحمل مسبقًا ما ستحتاجه سلة الشراء مستقبلًا.",
    cards: [
      { title: "بيانات منتجات منظّمة", text: "الأسماء والفئات وأحجام العبوات والأسعار في مصدر واحد قابل للتعديل، لا في صفحات ثابتة." },
      { title: "بطاقات منتجات ثنائية اللغة", text: "الاسم العربي والإنجليزي جنبًا إلى جنب، ليقرأ كل مشترٍ بلغته." },
      { title: "سعر وحجم عبوة واضحان", text: "سعر العبوة على كل بطاقة يساعد مشتري التجزئة على المقارنة بسرعة." },
      { title: "جاهز للتوسّع", text: "يمكن إضافة السلة والدفع والحسابات لاحقًا دون إعادة تصميم." },
    ],
  },
  bilingual: {
    eyebrow: "عربي + إنجليزي",
    title: "موقع واحد، وتجربتان أصيلتان",
    intro:
      "العربية ليست طبقة مترجمة؛ إذ يقلب زر تبديل اللغة التخطيط بالكامل من اليمين إلى اليسار، ويستخدم خط المراعي للنصوص العربية، ويحافظ على وضوح أسماء المنتجات والأسعار والتنقّل في الاتجاهين.",
    desktops: [
      { src: shot("d-en-home"), label: "الإنجليزية · من اليسار إلى اليمين", alt: "الصفحة الرئيسية بالإنجليزية" },
      { src: shot("d-ar-home"), label: "العربية · من اليمين إلى اليسار", alt: "الصفحة الرئيسية بالعربية" },
    ],
    phones: [
      { src: shot("m-en-product-detail"), label: "المنتج · بالإنجليزية", alt: "صفحة منتج بالإنجليزية على الجوال" },
      { src: shot("m-ar-product-detail"), label: "المنتج · بالعربية", alt: "صفحة منتج بالعربية على الجوال" },
      { src: shot("m-ar-founder"), label: "المؤسس · بالعربية", alt: "صفحة المؤسس بالعربية على الجوال" },
      { src: shot("m-ar-contact"), label: "اتصل بنا · بالعربية", alt: "صفحة اتصل بنا بالعربية على الجوال" },
    ],
  },
  visual: {
    eyebrow: "النظام البصري",
    title: "أخضر عميق، وكريمي دافئ، ومنتجات حقيقية",
    intro:
      "تمنح لوحة الألوان المتّزنة والخط الكلاسيكي المزرعة حضورًا راسخًا وفاخرًا، بينما تفسح المساحات الواسعة المجال لصور المنتجات.",
    colors: [
      { name: "أخضر العلامة", hex: "#033F23" },
      { name: "أخضر الغابة", hex: "#1E5B3B" },
      { name: "أخضر الورق", hex: "#63A87C" },
      { name: "كريمي", hex: "#FBF8F1", edge: true },
      { name: "رملي", hex: "#EBE2CF", edge: true },
    ],
    fonts: [
      { sample: "Aa", family: "Fraunces", name: "Fraunces", role: "العناوين" },
      { sample: "Aa", family: "Inter", name: "Inter", role: "النصوص والواجهة" },
      { sample: "أب", family: "Almarai", name: "Almarai", role: "كل النصوص العربية", ar: true },
    ],
  },
  ai: {
    eyebrow: "كيف عملت مع الذكاء الاصطناعي",
    title: "قُدت الرؤية، ودعم الذكاء الاصطناعي البناء.",
    intro:
      "صغتُ الفكرة، ورتّبتُ هيكل الموقع، وحدّدتُ الاتجاه البصري، ثم وجّهتُ الذكاء الاصطناعي خطوة بخطوة لبناء الموقع كما تصوّرته، دون كتابة برمجة يدوية. وفي كل مرحلة كنتُ أراجع النتيجة، وأصحّحها، وأقرّر ما يُعتمد، من المحتوى والتصميم إلى التجربة ثنائية اللغة. تولّى الذكاء الاصطناعي الجانب التقني من البناء والنشر، بينما كانت الرؤية والقرارات والجودة النهائية مسؤوليتي.",
    flow: ["الفكرة", "المحتوى", "تجربة المستخدم", "الواجهات", "البناء بالذكاء الاصطناعي", "الإطلاق"],
    highlight: 4,
    cards: [
      { label: "ما قُدته", text: "الرؤية، وهيكل الموقع، والمحتوى بالعربية والإنجليزية، والتصميم البصري، وكل مراجعة وقرار نهائي." },
      { label: "ما دعمه الذكاء الاصطناعي", text: "كتابة الشيفرة البرمجية، وإعداد الاستضافة والنشر، وتسريع كل جولة من التعديلات." },
    ],
  },
  outcome: {
    eyebrow: "النتيجة",
    title: "منشور، ثنائي اللغة، وجاهز للنمو",
    text: "أصبح موقع تكنو فارم منشورًا على نطاق العميل، ليمنح المزرعة حضورًا رقميًا موثوقًا لمتاجر التجزئة والشركاء والعائلات — وأساسًا متينًا للطلب عبر الإنترنت حين تكون المؤسسة مستعدة.",
    cta: "زيارة الموقع المنشور",
    stats: [
      { value: "7", label: "صفحات، من الموجز حتى الإطلاق" },
      { value: "+40", label: "منتجًا في الكتالوج" },
      { value: "2", label: "لغتان، مع دعم كامل للاتجاهين" },
      { value: "1", label: "مصممة واحدة في كل المراحل" },
    ],
  },
};

export const technofarmContent: Record<SiteLang, TechnoFarmContent> = { en, ar };
