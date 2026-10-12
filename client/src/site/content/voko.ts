import { asset, type SiteLang } from "../i18n";

const img = (n: string) => asset(`/voko-cs/${n}.webp`);

type Item = { title: string; text: string };
type Shot = { src: string; label: string; alt: string };

export type VokoContent = {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; lead: string; body: string; chips: string[]; visual: string; visualAlt: string };
  overviewLabel: string;
  overview: { label: string; value: string }[];
  problem: { eyebrow: string; title: string; cards: { label: string; title: string; text: string; dark?: boolean }[] };
  persona: {
    eyebrow: string;
    title: string;
    intro: string;
    name: string;
    role: string;
    goalsTitle: string;
    goals: string[];
    painTitle: string;
    pains: string[];
  };
  flow: { eyebrow: string; title: string; intro: string; steps: Item[] };
  process: { eyebrow: string; title: string; steps: string[] };
  onboarding: { eyebrow: string; title: string; intro: string; screens: Shot[] };
  account: { eyebrow: string; title: string; intro: string; principlesTitle: string; principles: string[]; screens: Shot[] };
  shopping: { eyebrow: string; title: string; intro: string; screens: Shot[]; noteTitle: string; noteText: string };
  outcome: { eyebrow: string; title: string; text: string; cards: Item[] };
};

const shots = (names: string[], labels: string[], alts: string[]): Shot[] =>
  names.map((n, i) => ({ src: img(n), label: labels[i], alt: alts[i] }));

const ONBOARDING_ALTS = [
  "VOKO splash screen: a woman in a felt hat with the line Shop the most elegant with Voko",
  "Onboarding screen one: Find Your Style",
  "Onboarding screen two: Wear it First",
  "Onboarding screen three: Your Way",
];
const ACCOUNT_ALTS = [
  "Welcome screen with a clothes rail and Login and Sign Up buttons",
  "Login screen with email, password and Google or Facebook sign-in",
  "Sign-up screen with name, email, phone number and password fields",
];
const SHOP_ALTS = [
  "Home feed with a new-collection banner, category tabs and a product grid",
  "Product detail for an ombre wrap midi dress with size options and Add to Cart",
  "Cart with three items, a discount code field and the order total",
  "Checkout with delivery address, a Mada card and the order summary",
  "Payment successful screen with a large check mark",
];

export const vokoContent: Record<SiteLang, VokoContent> = {
  en: {
    metaTitle: "VOKO: Fashion e-commerce concept — Lamia Alrowaished",
    metaDescription:
      "UX case study: a mobile fashion e-commerce concept that simplifies browsing, product details, cart management and checkout, from first launch to payment confirmation.",
    hero: {
      eyebrow: "Project 04 · UX product concept",
      title: "VOKO",
      lead: "A clearer fashion discovery and checkout experience.",
      body: "A mobile e-commerce concept that simplifies how users browse collections, understand product details, manage their cart, and complete a purchase—from first launch to payment confirmation.",
      chips: ["E-commerce UX", "Mobile app", "Prototyping"],
      visual: img("hero-en"),
      visualAlt: "VOKO app: the home feed, a product page and the payment-successful screen on three phones",
    },
    overviewLabel: "Project overview",
    overview: [
      { label: "Type", value: "Independent UX concept" },
      { label: "Role", value: "UX / Experience Designer" },
      { label: "Focus", value: "Fashion e-commerce" },
      { label: "Output", value: "End-to-end mobile flow" },
    ],
    problem: {
      eyebrow: "Problem reframing",
      title: "Fashion shopping should feel exploratory—not exhausting",
      cards: [
        {
          label: "The challenge",
          title: "Friction breaks purchase confidence",
          text: "Users can lose momentum when categories are difficult to scan, product details are unclear, or checkout requires too many steps.",
        },
        {
          label: "The response",
          title: "One continuous shopping journey",
          text: "Connect discovery, product evaluation, cart management, payment, and confirmation through a clear visual hierarchy and predictable actions.",
          dark: true,
        },
      ],
    },
    persona: {
      eyebrow: "Research synthesis",
      title: "Designing around a focused shopping mindset",
      intro:
        "Sara is a working persona used to organize the concept’s assumptions. These needs should be validated through interviews and usability testing before product decisions are finalized.",
      name: "Sara, 26",
      role: "Fashion enthusiast · Riyadh",
      goalsTitle: "Goals",
      goals: ["Discover trends", "Shop efficiently on mobile", "Complete checkout confidently"],
      painTitle: "Pain points",
      pains: ["Hard-to-find styles", "Too many checkout steps", "Unclear sizing and product details"],
    },
    flow: {
      eyebrow: "User flow",
      title: "A nine-step journey from interest to confirmation",
      intro:
        "The flow is structured so each screen answers one primary question and moves the user toward the next confident action.",
      steps: [
        { title: "Splash", text: "Enter the brand" },
        { title: "Onboarding", text: "Understand the offer" },
        { title: "Welcome", text: "Choose an account path" },
        { title: "Sign up", text: "Create access" },
        { title: "Home", text: "Discover collections" },
        { title: "Product", text: "Review details" },
        { title: "Cart", text: "Check selections" },
        { title: "Checkout", text: "Confirm payment" },
        { title: "Success", text: "Close the loop" },
      ],
    },
    process: {
      eyebrow: "Design process",
      title: "From problem definition to prototype",
      steps: ["Problem definition", "Research synthesis", "Moodboard", "Wireframes", "High-fidelity UI", "Prototype"],
    },
    onboarding: {
      eyebrow: "Selected screens · Onboarding",
      title: "Set the tone before asking for commitment",
      intro:
        "A bold splash introduces the brand, followed by three concise messages that explain the experience before users reach account setup.",
      screens: shots(["splash", "walk-1", "walk-2", "walk-3"], ["Splash", "Find your style", "Wear it first", "Your way"], ONBOARDING_ALTS),
    },
    account: {
      eyebrow: "Account setup",
      title: "A clear choice, then only the information needed",
      intro:
        "The welcome screen separates returning and new users. Login supports email and social options, while sign-up collects the essential details needed to create an account.",
      principlesTitle: "Design principles",
      principles: [
        "Separate login from registration",
        "Keep field labels explicit",
        "Show social sign-in as an option",
        "Maintain consistent primary actions",
      ],
      screens: shots(["welcome", "login", "signup"], ["Welcome", "Login", "Sign up"], ACCOUNT_ALTS),
    },
    shopping: {
      eyebrow: "Selected screens · Purchase journey",
      title: "From product discovery to payment success",
      intro:
        "Five screens carry the core commerce journey: explore the home feed, evaluate a product, review the cart, confirm payment, and receive a clear success state.",
      screens: shots(
        ["home", "product", "cart", "checkout", "success"],
        ["Home", "Product detail", "My cart", "Checkout", "Payment success"],
        SHOP_ALTS,
      ),
      noteTitle: "Continuity matters more than adding more steps.",
      noteText:
        "Repeated button placement, clear price visibility, and explicit confirmation help users understand where they are and what happens next.",
    },
    outcome: {
      eyebrow: "Outcome & reflection",
      title: "A complete concept, ready for validation",
      text: "VOKO demonstrates an end-to-end commerce flow and a consistent visual direction. Because this is a concept project, the next meaningful step is evidence: test whether users can find products, understand sizing, edit the cart, and finish checkout without hesitation.",
      cards: [
        { title: "Validate discovery", text: "Can users find a specific item or category quickly?" },
        { title: "Test clarity", text: "Do size, price, imagery, and actions answer purchase questions?" },
        { title: "Measure checkout", text: "Where do users pause, backtrack, or abandon the flow?" },
        { title: "Refine accessibility", text: "Check contrast, targets, labels, and form feedback." },
      ],
    },
  },

  ar: {
    metaTitle: "VOKO: مفهوم تسوّق أزياء إلكتروني — لمياء الرويشد",
    metaDescription:
      "دراسة حالة في تجربة المستخدم: مفهوم لتطبيق تسوّق أزياء على الجوال يُبسّط التصفّح وتفاصيل المنتج وإدارة السلة وإتمام الدفع، من أول تشغيل حتى تأكيد الدفع.",
    hero: {
      eyebrow: "المشروع 04 · منتج مفاهيمي لتجربة المستخدم",
      title: "VOKO",
      lead: "تجربة أوضح لاكتشاف الأزياء وإتمام الشراء.",
      body: "مفهوم لتطبيق تسوّق إلكتروني يُبسّط طريقة تصفّح المستخدمين للمجموعات، وفهم تفاصيل المنتجات، وإدارة السلة، وإتمام الشراء — من أول تشغيل للتطبيق حتى تأكيد الدفع.",
      chips: ["تجربة التجارة الإلكترونية", "تطبيق جوال", "النماذج الأولية"],
      visual: img("hero-ar"),
      visualAlt: "تطبيق VOKO: الصفحة الرئيسية وصفحة المنتج وشاشة نجاح الدفع على ثلاثة هواتف",
    },
    overviewLabel: "نظرة عامة على المشروع",
    overview: [
      { label: "النوع", value: "مشروع مفاهيمي مستقل" },
      { label: "الدور", value: "مصممة تجربة مستخدم" },
      { label: "المجال", value: "التجارة الإلكترونية للأزياء" },
      { label: "المُخرَج", value: "رحلة كاملة على الجوال" },
    ],
    problem: {
      eyebrow: "إعادة صياغة المشكلة",
      title: "تسوّق الأزياء يجب أن يكون استكشافًا ممتعًا — لا تجربة مُرهِقة",
      cards: [
        {
          label: "التحدي",
          title: "التعقيد يُضعف الثقة في الشراء",
          text: "قد يفقد المستخدمون حماسهم عندما يصعب تصفّح الفئات، أو تكون تفاصيل المنتج غير واضحة، أو تتطلب عملية الدفع خطوات كثيرة.",
        },
        {
          label: "الاستجابة",
          title: "رحلة تسوّق واحدة متصلة",
          text: "ربط الاكتشاف، وتقييم المنتج، وإدارة السلة، والدفع، والتأكيد من خلال تسلسل بصري واضح وإجراءات متوقَّعة.",
          dark: true,
        },
      ],
    },
    persona: {
      eyebrow: "تحليل البحث",
      title: "التصميم حول عقلية تسوّق مُركّزة",
      intro:
        "سارة شخصية افتراضية استُخدمت لتنظيم افتراضات المفهوم، ويجب التحقق من هذه الاحتياجات عبر المقابلات واختبارات قابلية الاستخدام قبل اعتماد قرارات المنتج.",
      name: "سارة، 26",
      role: "مهتمة بالأزياء · الرياض",
      goalsTitle: "الأهداف",
      goals: ["اكتشاف أحدث الصيحات", "التسوّق بكفاءة عبر الجوال", "إتمام الدفع بثقة"],
      painTitle: "نقاط الألم",
      pains: ["صعوبة العثور على الأنماط المطلوبة", "كثرة خطوات الدفع", "عدم وضوح المقاسات وتفاصيل المنتج"],
    },
    flow: {
      eyebrow: "رحلة المستخدم",
      title: "رحلة من تسع خطوات، من الاهتمام إلى التأكيد",
      intro: "صُمّمت الرحلة بحيث تجيب كل شاشة عن سؤال رئيسي واحد، وتنقل المستخدم إلى الخطوة التالية بثقة.",
      steps: [
        { title: "البداية", text: "الدخول إلى عالم العلامة" },
        { title: "التعريف", text: "فهم ما يقدّمه التطبيق" },
        { title: "الترحيب", text: "اختيار طريقة الدخول" },
        { title: "التسجيل", text: "تسجيل بيانات الدخول" },
        { title: "الرئيسية", text: "استكشاف المجموعات" },
        { title: "المنتج", text: "مراجعة التفاصيل" },
        { title: "السلة", text: "مراجعة المختارات" },
        { title: "الدفع", text: "تأكيد الدفع" },
        { title: "نجاح الطلب", text: "إتمام الرحلة" },
      ],
    },
    process: {
      eyebrow: "مراحل التصميم",
      title: "من تعريف المشكلة إلى النموذج الأولي",
      steps: ["تعريف المشكلة", "تحليل البحث", "لوحة الإلهام", "الإطارات السلكية", "واجهات عالية الدقة", "النموذج الأولي"],
    },
    onboarding: {
      eyebrow: "شاشات مختارة · التعريف بالتطبيق",
      title: "رسم الانطباع الأول قبل طلب أي التزام",
      intro:
        "تُقدّم شاشة البداية العلامة بأسلوب جريء، تليها ثلاث رسائل موجزة توضّح التجربة قبل وصول المستخدم إلى إعداد الحساب.",
      screens: shots(
        ["splash", "walk-1", "walk-2", "walk-3"],
        ["شاشة البداية", "اكتشفي أسلوبك", "جرّبيه أولًا", "على طريقتك"],
        [
          "شاشة البداية في VOKO: امرأة بقبعة مع عبارة تدعو للتسوّق بأناقة",
          "شاشة التعريف الأولى: اكتشفي أسلوبك",
          "شاشة التعريف الثانية: جرّبيه أولًا",
          "شاشة التعريف الثالثة: على طريقتك",
        ],
      ),
    },
    account: {
      eyebrow: "إعداد الحساب",
      title: "خيار واضح، ثم البيانات الضرورية فقط",
      intro:
        "تفصل شاشة الترحيب بين المستخدمين العائدين والجدد. ويدعم تسجيل الدخول البريد الإلكتروني والحسابات الاجتماعية، بينما يجمع إنشاء الحساب البيانات الأساسية اللازمة فقط.",
      principlesTitle: "مبادئ التصميم",
      principles: [
        "فصل تسجيل الدخول عن إنشاء الحساب",
        "تسميات واضحة وصريحة للحقول",
        "الدخول عبر الحسابات الاجتماعية كخيار إضافي",
        "توحيد الإجراءات الرئيسية في كل الشاشات",
      ],
      screens: shots(
        ["welcome", "login", "signup"],
        ["الترحيب", "تسجيل الدخول", "إنشاء حساب"],
        [
          "شاشة الترحيب مع رفّ ملابس وزرّي تسجيل الدخول وإنشاء حساب",
          "شاشة تسجيل الدخول بالبريد الإلكتروني وكلمة المرور أو عبر Google وFacebook",
          "شاشة إنشاء حساب بالاسم والبريد الإلكتروني ورقم الجوال وكلمة المرور",
        ],
      ),
    },
    shopping: {
      eyebrow: "شاشات مختارة · رحلة الشراء",
      title: "من اكتشاف المنتج إلى نجاح الدفع",
      intro:
        "خمس شاشات تحمل رحلة التسوّق الأساسية: استكشاف الصفحة الرئيسية، وتقييم المنتج، ومراجعة السلة، وتأكيد الدفع، ثم حالة نجاح واضحة.",
      screens: shots(
        ["home", "product", "cart", "checkout", "success"],
        ["الرئيسية", "تفاصيل المنتج", "سلّتي", "الدفع", "نجاح الدفع"],
        [
          "الصفحة الرئيسية مع إعلان المجموعة الجديدة وتبويبات الفئات وشبكة المنتجات",
          "تفاصيل فستان ميدي متدرّج مع خيارات المقاس وزر الإضافة إلى السلة",
          "السلة بثلاثة منتجات وحقل كود الخصم والمجموع",
          "صفحة الدفع مع عنوان التوصيل وبطاقة مدى وملخص الطلب",
          "شاشة نجاح الدفع مع علامة صح كبيرة",
        ],
      ),
      noteTitle: "الاستمرارية أهم من إضافة المزيد من الخطوات.",
      noteText:
        "ثبات موضع الأزرار، ووضوح الأسعار، والتأكيد الصريح؛ كلها تساعد المستخدم على معرفة موقعه وما سيحدث بعد ذلك.",
    },
    outcome: {
      eyebrow: "النتيجة والتأمل",
      title: "مفهوم متكامل، جاهز للتحقق",
      text: "يقدّم VOKO رحلة تسوّق متكاملة من البداية إلى النهاية، مع اتجاه بصري متّسق. ولأنه مشروع مفاهيمي، فالخطوة التالية الأهم هي جمع الأدلة: اختبار قدرة المستخدمين على العثور على المنتجات، وفهم المقاسات، وتعديل السلة، وإتمام الدفع دون تردد.",
      cards: [
        { title: "اختبار الاكتشاف", text: "هل يجد المستخدمون منتجًا أو فئة محددة بسرعة؟" },
        { title: "اختبار الوضوح", text: "هل تجيب المقاسات والأسعار والصور والإجراءات عن أسئلة الشراء؟" },
        { title: "قياس تجربة الدفع", text: "أين يتوقف المستخدمون أو يتراجعون أو يتركون الرحلة؟" },
        { title: "إمكانية الوصول", text: "مراجعة التباين، ومساحات اللمس، والتسميات، ورسائل النماذج." },
      ],
    },
  },
};
