import { asset, type SiteLang } from "../i18n";
import type { ConceptContent } from "./aurafit";

const img = (n: string) => asset(`/traveltales-cs/${n}.webp`);

const screens = (titles: [string, string][], alts: string[]) =>
  ["splash", "onboarding", "login", "home", "place", "booked"].map((n, i) => ({
    src: img(`screen-${n}`),
    title: titles[i][0],
    caption: titles[i][1],
    alt: alts[i],
  }));

export const travelTalesContent: Record<SiteLang, ConceptContent> = {
  en: {
    metaTitle: "TravelTales: Travel-planning concept — Lamia Alrowaished",
    metaDescription:
      "UX research case study: a travel-planning app for Saudi explorers that brings destination discovery, personalized recommendations and booking into one connected journey.",
    hero: {
      eyebrow: "Project 03 · UX research · Product concept",
      title: "TravelTales",
      lead: "One connected journey from inspiration to booking.",
      body: "A travel-planning app for Saudi explorers, combining destination discovery, personalized recommendations, and a streamlined booking journey in one coherent experience.",
      visual: img("hero"),
      visualAlt: "TravelTales app: the personalized homepage and a place-detail screen on two phones",
    },
    overviewLabel: "Project overview",
    overview: [
      { label: "Timeline", value: "6 weeks" },
      { label: "Role", value: "UX / Experience Designer" },
      { label: "Market", value: "Saudi Arabia" },
      { label: "Type", value: "Independent product concept" },
    ],
    problem: {
      eyebrow: "Problem reframing",
      title: "From fragmented planning to one journey",
      cards: [
        {
          label: "The problem",
          title: "Planning happens everywhere",
          text: "Travelers move between multiple apps for inspiration, destination research, recommendations, and booking—creating friction and making it harder to maintain a coherent plan.",
        },
        {
          label: "The response",
          title: "Discovery and booking together",
          text: "TravelTales combines destination discovery, personalized recommendations, place details, and a guided booking experience from inspiration to confirmation.",
          dark: true,
        },
      ],
    },
    research: {
      eyebrow: "Research synthesis",
      title: "What the research suggested",
      intro:
        "The concept was shaped through market review and journey analysis. These insights remain assumptions to validate through real-user testing.",
      insights: [
        { title: "App switching", text: "Users switch between tools to discover, compare, and book." },
        { title: "Generic discovery", text: "Generic recommendations make relevant places harder to find." },
        { title: "Booking friction", text: "Long or unclear booking steps interrupt momentum." },
        { title: "Trust signals", text: "Reviews, details, and visible progress support confident decisions." },
      ],
      highlight: 0,
    },
    framework: {
      eyebrow: "Journey framework",
      title: "Designing one connected travel journey",
      intro:
        "Four stages turn fragmented travel planning into a clear path from initial inspiration to a confirmed booking.",
      rows: [
        { title: "Discover", text: "Surface relevant destinations and categories." },
        { title: "Personalize", text: "Use preferences to shape recommendations." },
        { title: "Evaluate", text: "Support comparison with photos, reviews, and location context." },
        { title: "Book", text: "Guide dates, guests, summary, and confirmation." },
      ],
    },
    process: {
      eyebrow: "Design process",
      title: "From problem definition to prototype",
      steps: ["Problem definition", "Research synthesis", "Moodboard", "Wireframes", "Hi-fi design", "Prototype"],
      highlight: 4,
    },
    screens: {
      eyebrow: "Selected product screens",
      title: "From inspiration to booking confidence",
      intro:
        "The experience moves from brand introduction and account access into personalized discovery, destination evaluation, and clear booking confirmation.",
      items: screens(
        [
          ["Splash", "Brand introduction"],
          ["Onboarding", "Value proposition"],
          ["Account access", "Login and registration"],
          ["Homepage", "Personalized discovery"],
          ["Place detail", "Reviews, location, and context"],
          ["Booking confirmed", "Clear completion feedback"],
        ],
        [
          "Splash screen with the TravelTales logo",
          "Onboarding screen: a hiker on a suspension bridge with the line Unlock the world",
          "Login screen with email, password and social sign-in",
          "Homepage with search, travel categories, favourite and popular places",
          "Place detail for a beach resort with trip details, photos, map and reviews",
          "Booking confirmed screen with a beach illustration",
        ],
      ),
    },
    persona: {
      eyebrow: "Primary persona",
      title: "Nora, 26 · Content Creator · Jeddah",
      initial: "N",
      profile: ["Curious explorer", "Creates and shares travel content", "Wants simpler planning"],
      goalsTitle: "Goals",
      goals: ["Discover unique destinations", "Plan and book trips in one place", "Share travel experiences"],
      painTitle: "Pain points",
      pains: ["Switching between multiple apps", "Generic recommendations", "Complicated booking process"],
    },
    visual: {
      eyebrow: "Visual direction",
      title: "Bright, calm, and exploratory",
      intro:
        "The moodboard uses white and blue-green tones to communicate openness, freshness, and trust, supported by modern typography and destination-led imagery.",
      moodboard: img("moodboard-en"),
      moodboardAlt:
        "TravelTales moodboard: reference travel apps, the keywords modern, clean, bright, fresh, friendly and calm, the Lato typeface and a palette of #0AC2A1, #ECFBFF and #292E2D",
    },
    impact: {
      eyebrow: "Project outcome & validation",
      title: "One seamless travel-planning journey",
      text: "TravelTales demonstrates how discovery, personalization, destination evaluation, and booking can work as one coherent experience. As an independent concept, its next step is usability testing with Saudi travelers.",
      cards: [
        { label: "Discover", title: "Find relevant destinations" },
        { label: "Decide", title: "Build confidence with richer details" },
        { label: "Book", title: "Complete a guided booking flow" },
      ],
    },
  },

  ar: {
    metaTitle: "TravelTales: مفهوم لتخطيط الرحلات — لمياء الرويشد",
    metaDescription:
      "دراسة حالة في بحث تجربة المستخدم: تطبيق لتخطيط الرحلات للمستكشفين في السعودية يجمع اكتشاف الوجهات والتوصيات المخصّصة والحجز في رحلة واحدة مترابطة.",
    hero: {
      eyebrow: "المشروع 03 · بحث تجربة المستخدم · مشروع مفاهيمي",
      title: "TravelTales",
      lead: "رحلة واحدة مترابطة من الإلهام إلى الحجز.",
      body: "تطبيق لتخطيط الرحلات للمستكشفين في السعودية، يجمع اكتشاف الوجهات والتوصيات المخصّصة ورحلة حجز مبسّطة في تجربة واحدة متّسقة.",
      visual: img("hero"),
      visualAlt: "تطبيق TravelTales: الصفحة الرئيسية المخصّصة وشاشة تفاصيل المكان على هاتفين",
    },
    overviewLabel: "نظرة عامة على المشروع",
    overview: [
      { label: "المدة", value: "6 أسابيع" },
      { label: "الدور", value: "مصممة تجربة مستخدم" },
      { label: "السوق", value: "المملكة العربية السعودية" },
      { label: "النوع", value: "مشروع مفاهيمي مستقل" },
    ],
    problem: {
      eyebrow: "إعادة صياغة المشكلة",
      title: "من تخطيط مجزّأ إلى رحلة واحدة",
      cards: [
        {
          label: "المشكلة",
          title: "التخطيط يحدث في كل مكان",
          text: "يتنقّل المسافرون بين تطبيقات متعددة للإلهام والبحث عن الوجهات والتوصيات والحجز، مما يخلق احتكاكًا ويصعّب الحفاظ على خطة متّسقة.",
        },
        {
          label: "الاستجابة",
          title: "الاكتشاف والحجز في مكان واحد",
          text: "يجمع TravelTales اكتشاف الوجهات والتوصيات المخصّصة وتفاصيل الأماكن وتجربة حجز موجَّهة، من الإلهام حتى التأكيد.",
          dark: true,
        },
      ],
    },
    research: {
      eyebrow: "تحليل نتائج البحث",
      title: "ما أشار إليه البحث",
      intro:
        "تشكّل المفهوم من خلال مراجعة السوق وتحليل الرحلة، وتبقى هذه الرؤى افتراضات تحتاج إلى التحقق عبر اختبار مع مستخدمين حقيقيين.",
      insights: [
        { title: "التنقّل بين التطبيقات", text: "يتنقّل المستخدمون بين أدوات مختلفة للاكتشاف والمقارنة والحجز." },
        { title: "اكتشاف عام", text: "التوصيات العامة تصعّب العثور على الأماكن المناسبة." },
        { title: "صعوبة الحجز", text: "خطوات الحجز الطويلة أو غير الواضحة تقطع الاندفاع." },
        { title: "مؤشرات الثقة", text: "التقييمات والتفاصيل وإظهار التقدّم تدعم اتخاذ قرارات واثقة." },
      ],
      highlight: 0,
    },
    framework: {
      eyebrow: "إطار الرحلة",
      title: "تصميم رحلة سفر واحدة مترابطة",
      intro: "أربع مراحل تحوّل تخطيط السفر المجزّأ إلى مسار واضح من الإلهام الأول حتى تأكيد الحجز.",
      rows: [
        { title: "الاكتشاف", text: "إبراز الوجهات والفئات المناسبة." },
        { title: "التخصيص", text: "استخدام التفضيلات لتشكيل التوصيات." },
        { title: "التقييم", text: "دعم المقارنة بالصور والتقييمات وسياق الموقع." },
        { title: "الحجز", text: "توجيه المستخدم في التواريخ وعدد الضيوف والملخص والتأكيد." },
      ],
    },
    process: {
      eyebrow: "مراحل التصميم",
      title: "من تعريف المشكلة إلى النموذج الأولي",
      steps: ["تعريف المشكلة", "تحليل البحث", "لوحة الإلهام", "الإطارات السلكية", "واجهات عالية الدقة", "النموذج الأولي"],
      highlight: 4,
    },
    screens: {
      eyebrow: "شاشات مختارة من المنتج",
      title: "من الإلهام إلى الثقة في الحجز",
      intro:
        "تنتقل التجربة من التعريف بالعلامة والدخول إلى الحساب، إلى الاكتشاف المخصّص وتقييم الوجهة، ثم تأكيد واضح للحجز.",
      items: screens(
        [
          ["شاشة البداية", "التعريف بالعلامة"],
          ["التعريف بالتطبيق", "القيمة المقدَّمة"],
          ["الدخول إلى الحساب", "تسجيل الدخول وإنشاء حساب"],
          ["الصفحة الرئيسية", "اكتشاف مخصّص"],
          ["تفاصيل المكان", "التقييمات والموقع والسياق"],
          ["تأكيد الحجز", "تغذية راجعة واضحة عند الإتمام"],
        ],
        [
          "شاشة البداية مع شعار TravelTales",
          "شاشة التعريف: مستكشف على جسر معلّق مع عبارة تدعو لاكتشاف العالم",
          "شاشة تسجيل الدخول بالبريد الإلكتروني وكلمة المرور والحسابات الاجتماعية",
          "الصفحة الرئيسية مع البحث وفئات السفر والأماكن المفضّلة والشائعة",
          "تفاصيل منتجع شاطئي مع معلومات الرحلة والصور والخريطة والتقييمات",
          "شاشة تأكيد الحجز مع رسم لشاطئ",
        ],
      ),
    },
    persona: {
      eyebrow: "الشخصية الأساسية",
      title: "نورة، 26 · صانعة محتوى · جدة",
      initial: "ن",
      profile: ["مستكشفة فضولية", "تصنع محتوى السفر وتشاركه", "تريد تخطيطًا أبسط"],
      goalsTitle: "الأهداف",
      goals: ["اكتشاف وجهات فريدة", "تخطيط الرحلات وحجزها في مكان واحد", "مشاركة تجارب السفر"],
      painTitle: "نقاط الألم",
      pains: ["التنقّل بين تطبيقات متعددة", "توصيات عامة", "عملية حجز معقّدة"],
    },
    visual: {
      eyebrow: "الاتجاه البصري",
      title: "مشرق وهادئ ومُلهم",
      intro:
        "يستخدم TravelTales الفيروزي الزاهي والأبيض المائل للأزرق والفحمي الداكن لخلق تجربة سفر منعشة وجديرة بالثقة. وتُبقي الصور المستوحاة من الوجهات الاكتشافَ ملهمًا، بينما يدعم نظام خطوط واضح سهولة التخطيط والحجز.",
      moodboard: img("moodboard-ar"),
      moodboardAlt:
        "لوحة إلهام TravelTales: تطبيقات سفر مرجعية، والكلمات المفتاحية عصري ونظيف ومشرق ومنعش وودود وهادئ، وخط Lato، والألوان #0AC2A1 و#ECFBFF و#292E2D",
    },
    impact: {
      eyebrow: "نتيجة المشروع والتحقق",
      title: "رحلة واحدة سلسة لتخطيط السفر",
      text: "يوضّح TravelTales كيف يمكن للاكتشاف والتخصيص وتقييم الوجهة والحجز أن تعمل كتجربة واحدة متّسقة. وبما أنه مشروع مفاهيمي مستقل، فإن خطوته التالية هي اختبار قابلية الاستخدام مع مسافرين سعوديين.",
      cards: [
        { label: "الاكتشاف", title: "العثور على وجهات مناسبة" },
        { label: "القرار", title: "بناء الثقة بتفاصيل أغنى" },
        { label: "الحجز", title: "إتمام حجز موجَّه" },
      ],
    },
  },
};
