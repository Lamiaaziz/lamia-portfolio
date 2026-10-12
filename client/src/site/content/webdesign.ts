import { asset, type SiteLang } from "../i18n";

const img = (n: string) => asset(`/webdesign-cs/${n}.webp`);

type Item = { title: string; text: string };

export type WebProject = {
  eyebrow: string;
  title: string;
  intro: string;
  chips: string[];
  image: string;
  imageAlt: string;
  tone: "yellow" | "green";
  listLabel: string;
  list: Item[];
  noteLabel: string;
  noteTitle: string;
  noteText: string;
};

export type WebDesignContent = {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; lead: string; body: string; chips: string[]; visual: string; visualAlt: string };
  overviewLabel: string;
  overview: { label: string; value: string }[];
  practice: { eyebrow: string; title: string; text: string; quote: string; quoteTag: string };
  workflow: { eyebrow: string; title: string; intro: string; steps: Item[] };
  projects: WebProject[];
  capabilities: { eyebrow: string; title: string; items: Item[] };
  outcome: { eyebrow: string; title: string; text: string; stats: { value: string; label: string }[] };
};

export const webDesignContent: Record<SiteLang, WebDesignContent> = {
  en: {
    metaTitle: "Web Design & Webflow Development — Lamia Alrowaished",
    metaDescription:
      "Two full website projects showing information hierarchy, visual design, responsive thinking and no-code development in Webflow.",
    hero: {
      eyebrow: "Web design · Webflow development",
      title: "Web Design",
      lead: "From visual concept to a responsive Webflow build.",
      body: "Two full website projects showing how I combine information hierarchy, visual design, responsive thinking, and no-code development in Webflow.",
      chips: ["Webflow", "Responsive", "CMS"],
      visual: img("hero"),
      visualAlt: "Previews of the consulting website and the team collaboration website",
    },
    overviewLabel: "Project overview",
    overview: [
      { label: "Role", value: "Designer & Webflow Developer" },
      { label: "Scope", value: "2 complete websites" },
      { label: "Output", value: "Responsive Webflow websites" },
      { label: "Tools", value: "Figma · Webflow" },
    ],
    practice: {
      eyebrow: "Practice overview",
      title: "Designing the whole website experience",
      text: "My contribution extends beyond isolated screens. I define the visual direction, structure content, build reusable sections, adapt the layout across breakpoints, and translate the approved design into a functioning Webflow website.",
      quote: "The value is not only how a page looks—it is how clearly it guides visitors from first impression to action.",
      quoteTag: "Content hierarchy · Visual system · Build",
    },
    workflow: {
      eyebrow: "End-to-end workflow",
      title: "A repeatable path from brief to launch",
      intro:
        "The workflow keeps visual decisions tied to business communication, responsive behavior, and a maintainable Webflow build.",
      steps: [
        { title: "Discover", text: "Clarify the audience, offer, content priorities, and conversion goal." },
        { title: "Structure", text: "Translate the brief into page hierarchy, sections, and navigation." },
        { title: "Design", text: "Create the visual direction, typography, color, and reusable components." },
        { title: "Build & refine", text: "Develop in Webflow, test responsiveness, and polish interactions." },
      ],
    },
    projects: [
      {
        eyebrow: "Project 01 · Consulting website",
        title: "A clear, credible home for a consulting business",
        intro:
          "A full website design and Webflow build that communicates trust, expertise, and clarity. The structure guides visitors from the value proposition into services, team credibility, social proof, and contact.",
        chips: ["Webflow", "Green + cream", "Responsive"],
        image: img("consulting"),
        imageAlt: "Full-page design of the consulting website: hero, six services, team, client reviews, newsletter and footer",
        tone: "yellow",
        listLabel: "Information architecture",
        list: [
          { title: "Hero & value proposition", text: "Make the business offer understandable within the first viewport." },
          { title: "Service architecture", text: "Organize six service areas into a scannable, consistent grid." },
          { title: "Trust building", text: "Use the team and testimonial sections to strengthen credibility." },
          { title: "Conversion path", text: "End with newsletter and contact routes without visual clutter." },
        ],
        noteLabel: "Visual system",
        noteTitle: "Forest green for authority · cream for warmth · gold for emphasis",
        noteText:
          "The palette and generous spacing create a professional tone without making the brand feel overly corporate.",
      },
      {
        eyebrow: "Project 02 · Team collaboration",
        title: "A product-led website with an integrated blog",
        intro:
          "A concept website for a collaboration platform, designed and built in Webflow. The page explains the product through focused feature sections, supports trust with reviews, and extends the experience through a CMS-powered blog.",
        chips: ["Webflow", "CMS + blog", "Product story"],
        image: img("team"),
        imageAlt: "Full-page design of the team collaboration website: hero, feature sections, reviews and footer",
        tone: "green",
        listLabel: "Product story",
        list: [
          { title: "Collaboration promise", text: "Open with a direct explanation of how the product helps teams." },
          { title: "Feature sequencing", text: "Progress from the team hub into tasks, scheduling, and workflow." },
          { title: "Evidence & trust", text: "Use testimonials and ratings to reinforce product value." },
          { title: "CMS extension", text: "Support ongoing content and discoverability through the blog." },
        ],
        noteLabel: "Build principle",
        noteTitle: "Reusable sections make the experience easier to expand and maintain.",
        noteText: "The layout was treated as a system rather than a collection of disconnected pages.",
      },
    ],
    capabilities: {
      eyebrow: "Capabilities",
      title: "What these projects demonstrate",
      items: [
        { title: "Visual design", text: "Custom layouts, typography, palettes, and polished brand expression." },
        { title: "Responsive systems", text: "Layouts designed to remain clear across desktop, tablet, and mobile." },
        { title: "CMS & blog", text: "Structured dynamic content that the client can continue managing." },
        { title: "Interactions", text: "Purposeful motion and feedback that support, rather than distract from, the content." },
      ],
    },
    outcome: {
      eyebrow: "Outcome & reflection",
      title: "From concept to a functioning website",
      text: "These projects demonstrate my ability to translate a communication goal into a complete digital experience—combining UX thinking, visual design, responsive behavior, and Webflow development.",
      stats: [
        { value: "02", label: "full website experiences" },
        { value: "01", label: "connected design-to-build workflow" },
      ],
    },
  },

  ar: {
    metaTitle: "تصميم المواقع وتطوير Webflow — لمياء الرويشد",
    metaDescription:
      "مشروعان لموقعين متكاملين يوضّحان التسلسل الهرمي للمعلومات، والتصميم البصري، والتفكير المتجاوب، والتطوير دون برمجة في Webflow.",
    hero: {
      eyebrow: "تصميم المواقع · تطوير Webflow",
      title: "تصميم المواقع",
      lead: "من الفكرة البصرية إلى موقع متجاوب مبني على Webflow.",
      body: "مشروعان لموقعين متكاملين يوضّحان كيف أجمع بين التسلسل الهرمي للمعلومات، والتصميم البصري، والتفكير المتجاوب، والتطوير دون برمجة في Webflow.",
      chips: ["Webflow", "تصميم متجاوب", "نظام إدارة المحتوى"],
      visual: img("hero"),
      visualAlt: "معاينة لموقع شركة الاستشارات وموقع منصة تعاون الفرق",
    },
    overviewLabel: "نظرة عامة على المشروع",
    overview: [
      { label: "الدور", value: "مصممة ومطوّرة Webflow" },
      { label: "النطاق", value: "موقعان متكاملان" },
      { label: "المُخرَج", value: "مواقع Webflow متجاوبة" },
      { label: "الأدوات", value: "Figma · Webflow" },
    ],
    practice: {
      eyebrow: "نظرة على الممارسة",
      title: "تصميم تجربة الموقع بالكامل",
      text: "لا تقتصر مساهمتي على شاشات منفصلة؛ فأنا أحدد الاتجاه البصري، وأنظّم المحتوى، وأبني أقسامًا قابلة لإعادة الاستخدام، وأكيّف التصميم عبر مختلف أحجام الشاشات، ثم أحوّل التصميم المعتمد إلى موقع يعمل فعليًا على Webflow.",
      quote: "القيمة لا تكمن في شكل الصفحة فقط، بل في مدى وضوح توجيهها للزائر من الانطباع الأول حتى اتخاذ الإجراء.",
      quoteTag: "تسلسل المحتوى · النظام البصري · التنفيذ",
    },
    workflow: {
      eyebrow: "سير عمل متكامل",
      title: "مسار قابل للتكرار من الموجز إلى الإطلاق",
      intro: "يُبقي سير العمل القرارات البصرية مرتبطة بأهداف التواصل، وبسلوك التصميم المتجاوب، وبموقع Webflow سهل الصيانة.",
      steps: [
        { title: "الاستكشاف", text: "تحديد الجمهور، والعرض، وأولويات المحتوى، وهدف التحويل." },
        { title: "الهيكلة", text: "تحويل الموجز إلى تسلسل للصفحة وأقسامها وطريقة التنقل فيها." },
        { title: "التصميم", text: "بناء الاتجاه البصري، والخطوط، والألوان، والمكوّنات القابلة لإعادة الاستخدام." },
        { title: "التنفيذ والتحسين", text: "التطوير على Webflow، واختبار التجاوب، وصقل التفاعلات." },
      ],
    },
    projects: [
      {
        eyebrow: "المشروع 01 · موقع شركة استشارات",
        title: "منصة واضحة وموثوقة لشركة استشارات",
        intro:
          "تصميم موقع متكامل وتنفيذه على Webflow، يعكس الثقة والخبرة والوضوح. ويقود هيكل الموقع الزائر من القيمة المقدّمة إلى الخدمات، ثم مصداقية الفريق، وآراء العملاء، وصولًا إلى التواصل.",
        chips: ["Webflow", "أخضر + كريمي", "تصميم متجاوب"],
        image: img("consulting"),
        imageAlt: "تصميم الصفحة الكاملة لموقع شركة الاستشارات: الواجهة والخدمات الست والفريق وآراء العملاء والنشرة البريدية",
        tone: "yellow",
        listLabel: "هيكلة المعلومات",
        list: [
          { title: "الواجهة والقيمة المقدّمة", text: "توضيح عرض الشركة من أول شاشة يراها الزائر." },
          { title: "هيكلة الخدمات", text: "تنظيم ستة مجالات خدمية في شبكة متّسقة وسهلة التصفح." },
          { title: "بناء الثقة", text: "توظيف قسمَي الفريق وآراء العملاء لتعزيز المصداقية." },
          { title: "مسار التحويل", text: "الختام بالنشرة البريدية وطرق التواصل دون ازدحام بصري." },
        ],
        noteLabel: "النظام البصري",
        noteTitle: "أخضر داكن للرصانة · كريمي للدفء · ذهبي للتأكيد",
        noteText: "تمنح الألوان والمساحات الواسعة طابعًا احترافيًا دون أن تبدو العلامة رسمية أكثر من اللازم.",
      },
      {
        eyebrow: "المشروع 02 · منصة تعاون الفرق",
        title: "موقع يتمحور حول المنتج مع مدونة مدمجة",
        intro:
          "موقع مفاهيمي لمنصة تعاون، صمّمته ونفّذته على Webflow. تشرح الصفحة المنتج عبر أقسام مركّزة للميزات، وتعزز الثقة بآراء المستخدمين، وتوسّع التجربة بمدونة مدعومة بنظام إدارة المحتوى.",
        chips: ["Webflow", "نظام المحتوى + مدونة", "قصة المنتج"],
        image: img("team"),
        imageAlt: "تصميم الصفحة الكاملة لموقع منصة تعاون الفرق: الواجهة وأقسام الميزات وآراء المستخدمين",
        tone: "green",
        listLabel: "قصة المنتج",
        list: [
          { title: "وعد التعاون", text: "البدء بشرح مباشر لكيفية مساعدة المنتج للفرق." },
          { title: "تسلسل الميزات", text: "التدرّج من مساحة الفريق إلى المهام والجدولة وسير العمل." },
          { title: "الدليل والثقة", text: "استخدام آراء المستخدمين والتقييمات لتعزيز قيمة المنتج." },
          { title: "توسيع المحتوى", text: "دعم المحتوى المستمر وسهولة الوصول إليه عبر المدونة." },
        ],
        noteLabel: "مبدأ التنفيذ",
        noteTitle: "الأقسام القابلة لإعادة الاستخدام تجعل التجربة أسهل في التوسّع والصيانة.",
        noteText: "عوملت الصفحة كنظام متكامل، لا كمجموعة من الصفحات المنفصلة.",
      },
    ],
    capabilities: {
      eyebrow: "القدرات",
      title: "ما تُظهره هذه المشاريع",
      items: [
        { title: "التصميم البصري", text: "تخطيطات مخصّصة، وخطوط، ولوحات ألوان، وتعبير متقن عن العلامة." },
        { title: "أنظمة متجاوبة", text: "تخطيطات تبقى واضحة على الحاسوب والجهاز اللوحي والجوال." },
        { title: "المحتوى والمدونة", text: "محتوى ديناميكي منظّم يستطيع العميل الاستمرار في إدارته." },
        { title: "التفاعلات", text: "حركة وتغذية راجعة هادفة تدعم المحتوى ولا تشتّت عنه." },
      ],
    },
    outcome: {
      eyebrow: "النتيجة والتأمل",
      title: "من الفكرة إلى موقع يعمل فعليًا",
      text: "تُظهر هذه المشاريع قدرتي على تحويل هدف تواصلي إلى تجربة رقمية متكاملة، تجمع بين التفكير في تجربة المستخدم، والتصميم البصري، والتصميم المتجاوب، والتطوير على Webflow.",
      stats: [
        { value: "02", label: "موقعان متكاملان" },
        { value: "01", label: "سير عمل متصل من التصميم إلى التنفيذ" },
      ],
    },
  },
};
