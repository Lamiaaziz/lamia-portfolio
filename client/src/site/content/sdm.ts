import { asset, type SiteLang } from "../i18n";

const img = (n: string) => asset(`/sdm/${n}.webp`);

export type SdmScreen = { src: string; title: string; caption: string; alt: string };

export type SdmContent = {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string[]; summary: string; note: string; visual: string; visualAlt: string };
  overviewLabel: string;
  overview: { label: string; value: string }[];
  context: {
    eyebrow: string;
    title: string;
    cards: { label: string; title: string; text: string; dark?: boolean }[];
  };
  approach: { eyebrow: string; title: string; intro: string; steps: { title: string; text: string }[]; highlight: number };
  journeys: { eyebrow: string; title: string; intro: string; rows: { title: string; text: string }[] };
  screens: { eyebrow: string; title: string; intro: string; items: SdmScreen[] };
  system: {
    eyebrow: string;
    title: string;
    intro: string;
    preview: string;
    previewAlt: string;
    principles: { title: string; text: string }[];
    highlight: number;
  };
  outcome: { eyebrow: string; title: string; text: string; cards: { label: string; title: string }[] };
};

export const sdmContent: Record<SiteLang, SdmContent> = {
  en: {
    metaTitle: "SDM: Arabic-first patient platform — Lamia Alrowaished",
    metaDescription:
      "Case study: an Arabic-first RTL platform connecting patients and doctors across booking, visit tracking, medical reports and AI-assisted support.",
    hero: {
      eyebrow: "01 · Freelance UX/UI · Digital health",
      title: ["Designing a clearer", "care journey."],
      summary:
        "An Arabic-first RTL platform connecting patients and doctors across appointment booking, visit tracking, medical reports, and AI-assisted support.",
      note: "Selected screens shown. Sensitive functionality and proprietary details are intentionally omitted.",
      visual: img("en-hero"),
      visualAlt: "SDM patient platform: the sign-in screen on a laptop and the patient dashboard on a tablet",
    },
    overviewLabel: "Project overview",
    overview: [
      { label: "Role", value: "Freelance UX/UI Designer" },
      { label: "Users", value: "Patients & doctors" },
      { label: "Platform", value: "Responsive RTL web platform" },
      { label: "Status", value: "Approved & handed off" },
    ],
    context: {
      eyebrow: "Project context",
      title: "The challenge and the response",
      cards: [
        {
          label: "The challenge",
          title: "Fragmented care information",
          text: "Patients needed a clearer way to understand upcoming and previous visits, book appointments, follow medical information, and access support without moving between disconnected touchpoints.",
        },
        {
          label: "The response",
          title: "One connected RTL journey",
          text: "The solution brings essential patient actions into one coherent Arabic-first experience, supported by reusable UI patterns and clear pathways for appointments, reports, preferences, and AI-assisted guidance.",
          dark: true,
        },
      ],
    },
    approach: {
      eyebrow: "Design approach",
      title: "From requirements to handoff",
      intro:
        "The work focused on translating client requirements into connected user journeys and a consistent, implementation-ready interface system.",
      steps: [
        { title: "Align", text: "Clarify stakeholder needs, business goals, scope, and confidentiality." },
        { title: "Map", text: "Connect the patient and doctor journeys across critical tasks." },
        { title: "Structure", text: "Define flows, information hierarchy, and appointment logic." },
        { title: "Design", text: "Create native RTL screens and reusable interface patterns." },
        { title: "Deliver", text: "Document states, specifications, and developer handoff." },
      ],
      highlight: 3,
    },
    journeys: {
      eyebrow: "Patient experience",
      title: "A connected care journey",
      intro:
        "The public case study focuses on the patient experience. The doctor journey was mapped in parallel, while sensitive clinical and AI details remain confidential.",
      rows: [
        { title: "Enter and identify", text: "Bilingual authentication and account access." },
        { title: "Understand care at a glance", text: "Upcoming visits, previous visits, and relevant actions." },
        { title: "Book and manage appointments", text: "Clinic, doctor, date, time, and confirmation in one guided flow." },
        { title: "Maintain continuity", text: "Reports, preferences, and AI-assisted support around previous care." },
      ],
    },
    screens: {
      eyebrow: "Selected product screens",
      title: "The experience in action",
      intro:
        "Six representative screens show how the visual system supports orientation, task completion, status feedback, and Arabic-first interaction.",
      items: [
        { src: img("en-auth"), title: "Authentication", caption: "A clear bilingual entry point.", alt: "Sign-in screen with a bilingual language switch" },
        { src: img("en-dash"), title: "Patient dashboard", caption: "Appointments and visit history at a glance.", alt: "Patient dashboard with upcoming appointments and past visits" },
        { src: img("en-clinic"), title: "Choose a clinic", caption: "The first step in a guided booking flow.", alt: "Booking step one: choosing a clinic from a grid of specialties" },
        { src: img("en-booking"), title: "Complete the booking", caption: "Progressive steps reduce decision load.", alt: "Booking step three: choosing a date and time" },
        { src: img("en-account"), title: "Account & security", caption: "Structured settings and clear risk states.", alt: "Account and security settings with a delete-account warning" },
        { src: img("en-language"), title: "Language & display", caption: "Preference control without losing context.", alt: "Language, text size and theme settings" },
      ],
    },
    system: {
      eyebrow: "System thinking",
      title: "Built for Arabic from the start",
      intro:
        "The interface was designed natively for RTL behavior rather than mirrored after an LTR layout. Direction, hierarchy, navigation, form behavior, and status patterns were considered as one connected system.",
      preview: img("en-rtl"),
      previewAlt: "The Arabic patient dashboard, laid out right to left",
      principles: [
        { title: "Native RTL hierarchy", text: "Reading direction, alignment, and emphasis designed for Arabic." },
        { title: "Bilingual continuity", text: "Language switching without disrupting orientation or task progress." },
        { title: "Reusable interface system", text: "Cards, navigation, controls, and states designed for consistency." },
        { title: "Developer-ready details", text: "Responsive behaviors, states, and handoff specifications documented." },
      ],
      highlight: 0,
    },
    outcome: {
      eyebrow: "Outcome",
      title: "Approved, documented, and ready to build.",
      text: "The completed design direction was approved and handed off for development. The product hasn’t launched yet, so this case study focuses on the design process rather than usage results.",
      cards: [
        { label: "Connected journeys", title: "Patient and doctor flows" },
        { label: "Interface system", title: "RTL patterns and reusable UI" },
        { label: "Delivery", title: "Specifications and developer handoff" },
      ],
    },
  },

  ar: {
    metaTitle: "سدم: منصة رعاية عربية أولًا — لمياء الرويشد",
    metaDescription:
      "دراسة حالة: منصة عربية أولًا تعمل من اليمين إلى اليسار، تربط المرضى بالأطباء في حجز المواعيد ومتابعة الزيارات والتقارير الطبية والمساعدة بالذكاء الاصطناعي.",
    hero: {
      eyebrow: "01 · مصممة UX/UI مستقلة · الصحة الرقمية",
      title: ["تصميم رحلة رعاية", "أكثر وضوحًا."],
      summary:
        "منصة عربية أولًا تعمل من اليمين إلى اليسار، تربط المرضى بالأطباء في حجز المواعيد ومتابعة الزيارات والتقارير الطبية والمساعدة بالذكاء الاصطناعي.",
      note: "تُعرض هنا شاشات مختارة، مع حجب الوظائف الحساسة والتفاصيل الخاصة بالعميل عمدًا.",
      visual: img("ar-hero"),
      visualAlt: "منصة سدم للمرضى: شاشة تسجيل الدخول على حاسوب محمول ولوحة المريض على جهاز لوحي",
    },
    overviewLabel: "نظرة عامة على المشروع",
    overview: [
      { label: "الدور", value: "مصممة UX/UI مستقلة" },
      { label: "المستخدمون", value: "المرضى والأطباء" },
      { label: "المنصة", value: "منصة ويب متجاوبة من اليمين لليسار" },
      { label: "الحالة", value: "معتمد ومُسلَّم للتطوير" },
    ],
    context: {
      eyebrow: "سياق المشروع",
      title: "التحدي والاستجابة",
      cards: [
        {
          label: "التحدي",
          title: "معلومات رعاية مجزّأة",
          text: "احتاج المرضى إلى طريقة أوضح لفهم زياراتهم القادمة والسابقة، وحجز المواعيد، ومتابعة معلوماتهم الطبية، والوصول إلى الدعم دون التنقل بين نقاط تواصل منفصلة.",
        },
        {
          label: "الاستجابة",
          title: "رحلة واحدة مترابطة من اليمين لليسار",
          text: "يجمع الحل أهم إجراءات المريض في تجربة عربية أولًا ومتّسقة، مدعومة بأنماط واجهات قابلة لإعادة الاستخدام ومسارات واضحة للمواعيد والتقارير والتفضيلات والإرشاد بالذكاء الاصطناعي.",
          dark: true,
        },
      ],
    },
    approach: {
      eyebrow: "منهجية التصميم",
      title: "من المتطلبات إلى التسليم",
      intro: "ركّز العمل على تحويل متطلبات العميل إلى رحلات مستخدم مترابطة ونظام واجهات متّسق وجاهز للتنفيذ.",
      steps: [
        { title: "المواءمة", text: "توضيح احتياجات أصحاب المصلحة وأهداف العمل والنطاق ومتطلبات السرية." },
        { title: "رسم الرحلات", text: "ربط رحلتَي المريض والطبيب عبر المهام الأساسية." },
        { title: "الهيكلة", text: "تحديد المسارات وتسلسل المعلومات ومنطق المواعيد." },
        { title: "التصميم", text: "تصميم شاشات أصيلة من اليمين لليسار وأنماط واجهات قابلة لإعادة الاستخدام." },
        { title: "التسليم", text: "توثيق الحالات والمواصفات والتسليم للمطورين." },
      ],
      highlight: 3,
    },
    journeys: {
      eyebrow: "تجربة المريض",
      title: "رحلة رعاية مترابطة",
      intro:
        "تركّز دراسة الحالة المنشورة على تجربة المريض، بينما رُسمت رحلة الطبيب بالتوازي، وتبقى التفاصيل السريرية وتفاصيل الذكاء الاصطناعي الحساسة سرّية.",
      rows: [
        { title: "الدخول والتحقق من الهوية", text: "تسجيل دخول ثنائي اللغة والوصول إلى الحساب." },
        { title: "فهم الرعاية بنظرة سريعة", text: "الزيارات القادمة والسابقة والإجراءات المرتبطة بها." },
        { title: "حجز المواعيد وإدارتها", text: "العيادة والطبيب والتاريخ والوقت والتأكيد في مسار واحد موجَّه." },
        { title: "استمرارية الرعاية", text: "التقارير والتفضيلات والمساعدة بالذكاء الاصطناعي حول الرعاية السابقة." },
      ],
    },
    screens: {
      eyebrow: "شاشات مختارة من المنتج",
      title: "التجربة على أرض الواقع",
      intro:
        "ست شاشات تمثيلية توضّح كيف يدعم النظام البصري التوجّه، وإنجاز المهام، وإظهار الحالة، والتفاعل العربي أولًا.",
      items: [
        { src: img("ar-auth"), title: "تسجيل الدخول", caption: "نقطة دخول واضحة ثنائية اللغة.", alt: "شاشة تسجيل الدخول مع زر تبديل اللغة" },
        { src: img("ar-dash"), title: "لوحة المريض", caption: "المواعيد وسجل الزيارات بنظرة سريعة.", alt: "لوحة المريض مع المواعيد القادمة والزيارات السابقة" },
        { src: img("ar-clinic"), title: "اختيار العيادة", caption: "الخطوة الأولى في مسار حجز موجَّه.", alt: "الخطوة الأولى من الحجز: اختيار العيادة من قائمة التخصصات" },
        { src: img("ar-booking"), title: "إتمام الحجز", caption: "الخطوات المتدرّجة تخفّف عبء اتخاذ القرار.", alt: "الخطوة الثالثة من الحجز: اختيار التاريخ والوقت" },
        { src: img("ar-account"), title: "الحساب والأمان", caption: "إعدادات منظّمة وحالات مخاطر واضحة.", alt: "إعدادات الحساب والأمان مع تنبيه حذف الحساب" },
        { src: img("ar-language"), title: "اللغة والعرض", caption: "التحكم في التفضيلات دون فقدان السياق.", alt: "إعدادات اللغة وحجم النص والمظهر" },
      ],
    },
    system: {
      eyebrow: "التفكير المنظومي",
      title: "مصمّمة للعربية منذ البداية",
      intro:
        "صُمّمت الواجهة أصلًا لسلوك الاتجاه من اليمين لليسار، لا بعكس تصميم إنجليزي. وعولجت الاتجاهات والتسلسل والتنقل وسلوك النماذج وأنماط الحالة كنظام واحد مترابط.",
      preview: img("ar-rtl"),
      previewAlt: "لوحة المريض بالعربية بتخطيط من اليمين إلى اليسار",
      principles: [
        { title: "تسلسل أصيل من اليمين لليسار", text: "اتجاه القراءة والمحاذاة والإبراز مصمّمة للعربية." },
        { title: "استمرارية ثنائية اللغة", text: "التبديل بين اللغتين دون الإخلال بالتوجّه أو تقدّم المهمة." },
        { title: "نظام واجهات قابل لإعادة الاستخدام", text: "البطاقات والتنقل وعناصر التحكم والحالات مصمّمة لتحقيق الاتساق." },
        { title: "تفاصيل جاهزة للمطورين", text: "توثيق السلوك المتجاوب والحالات ومواصفات التسليم." },
      ],
      highlight: 0,
    },
    outcome: {
      eyebrow: "النتيجة",
      title: "معتمد، موثّق، وجاهز للتنفيذ.",
      text: "اعتُمد اتجاه التصميم النهائي وسُلّم للتطوير. لم يُطلق المنتج بعد، لذا تركّز دراسة الحالة هذه على عملية التصميم بدلًا من نتائج الاستخدام.",
      cards: [
        { label: "رحلات مترابطة", title: "مسارات المريض والطبيب" },
        { label: "نظام الواجهات", title: "أنماط عربية وواجهات موحّدة" },
        { label: "التسليم", title: "المواصفات والتسليم للمطورين" },
      ],
    },
  },
};
