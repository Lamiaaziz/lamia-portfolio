/*
 * WAYFINDING CASE STUDY PAGE — Lamia Portfolio
 * Real-world project: Mixed-Use Tower Wayfinding Signage System (Confidential Client)
 * Live Project | Sep 2025 – Present
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

const ACCENT = "oklch(0.32 0.1 155)";
const ACCENT_LIGHT = "oklch(0.94 0.015 155)";

export default function Wayfinding() {
  const { t, isRTL } = useLanguage();
  const fontFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Sans', sans-serif";
  const serifFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Serif Display', serif";

  // ── Stats ──────────────────────────────────────────────────────────────────
  const stats = [
    { num: "24", label: isRTL ? "طابق" : "Floors" },
    { num: "6", label: isRTL ? "مستويات مواقف" : "Parking Levels" },
    { num: "5+", label: isRTL ? "مجموعات مستخدمين" : "User Groups" },
    { num: "AR/EN", label: isRTL ? "نظام ثنائي اللغة" : "Bilingual System" },
  ];

  // ── Signage categories ─────────────────────────────────────────────────────
  const signageCategories = isRTL ? [
    {
      title: "لافتات التعريف",
      items: ["هوية المبنى الخارجية", "هوية مدخل المبنى", "هوية الاستقبال", "هوية الشقة", "هوية المصعد"],
      icon: "🏢",
    },
    {
      title: "اللافتات الخارجية",
      items: ["توجيه المركبات", "نقطة التجمع التنظيمية", "توجيه الشقق", "مخرج الطوارئ", "خطة الإخلاء"],
      icon: "🚗",
    },
    {
      title: "اللافتات الداخلية",
      items: ["هوية الاستقبال", "الدليل", "تنظيم الطابق", "هوية الخدمة الخلفية", "هوية دورات المياه"],
      icon: "🏠",
    },
    {
      title: "لافتات المواقف",
      items: ["هوية الموقف", "توجيه الموقف", "هوية العمود والمكان", "مواقف ذوي الإعاقة", "ممنوع التدخين"],
      icon: "🅿️",
    },
  ] : [
    {
      title: "Identification Signage",
      items: ["External Building ID", "Entrance Building ID", "Reception Building ID", "Apartment ID", "Lift ID"],
      icon: "🏢",
    },
    {
      title: "External Signage",
      items: ["Vehicular Directional", "Assembly Point Regulatory", "Apartment Directional", "Emergency Exit", "Evacuation Plan"],
      icon: "🚗",
    },
    {
      title: "Internal Signage",
      items: ["Reception ID", "Directory", "Floor Regulatory", "Back of House ID", "Toilet ID"],
      icon: "🏠",
    },
    {
      title: "Parking Signage",
      items: ["Parking ID", "Parking Directional", "Column & Stall ID", "Disabled Parking", "No Smoking Regulatory"],
      icon: "🅿️",
    },
  ];

  // ── Design process phases ──────────────────────────────────────────────────
  const processPhases = isRTL ? [
    {
      phase: "01",
      title: "التقييم والبحث",
      color: ACCENT,
      items: [
        "تحليل الموقع للمخططات الرئيسية والتخطيطات المعمارية",
        "رسم خريطة احتياجات المستخدمين عبر 5 مجموعات مختلفة (السكان، ضيوف الفندق، الكوادر الطبية، المتسوقون، موظفو المكاتب)",
        "أنماط تدفق الحركة — للمركبات والمشاة على حد سواء",
        "تحديد نقاط القرار الرئيسية في نظام التوجيه",
      ],
    },
    {
      phase: "02",
      title: "تطوير الاستراتيجية",
      color: "oklch(0.45 0.1 220)",
      items: [
        "استراتيجية التقسيم عبر مناطق المواقف والتجارية والسكنية",
        "تسلسل المحتوى لكل منطقة ومجموعة مستخدمين",
        "نظام ترميز الألوان لـ 6 مستويات مواقف",
        "هندسة المعلومات: المحتوى الأساسي والثانوي والثالثي",
      ],
    },
    {
      phase: "03",
      title: "التصميم واللغة البصرية",
      color: "oklch(0.55 0.1 75)",
      items: [
        "لغة بصرية بسيطة ونظيفة تتوافق مع العمارة الحديثة",
        "نظام رموز متوافق مع ISO 7001 للفهم الشامل",
        "طباعة ثنائية اللغة (عربي + إنجليزي) بمعايير وضوح واضحة",
        "قوالب تخطيط معيارية للتطبيق المتسق عبر جميع المناطق",
      ],
    },
  ] : [
    {
      phase: "01",
      title: "Assessment & Research",
      color: ACCENT,
      items: [
        "Site analysis of the master plan and architectural layouts",
        "User needs mapping across 5 distinct groups (residents, hotel guests, medical staff, shoppers, office workers)",
        "Traffic flow patterns — both vehicular and pedestrian",
        "Identification of key wayfinding decision points",
      ],
    },
    {
      phase: "02",
      title: "Strategy Development",
      color: "oklch(0.45 0.1 220)",
      items: [
        "Zoning strategy across parking, commercial, and residential areas",
        "Content hierarchy for each zone and user group",
        "Color-coding system for 6 parking levels",
        "Information architecture: primary vs. secondary vs. tertiary content",
      ],
    },
    {
      phase: "03",
      title: "Design & Visual Language",
      color: "oklch(0.55 0.1 75)",
      items: [
        "Minimalist, clean visual language aligned with modern architecture",
        "ISO 7001-compliant pictogram system for universal understanding",
        "Bilingual typography (Arabic + English) with clear legibility standards",
        "Modular layout templates for consistent application across all zones",
      ],
    },
  ];

  // ── User groups ────────────────────────────────────────────────────────────
  const userGroups = isRTL ? [
    { group: "السكان", icon: "🏡", need: "تنقل واضح ومتسق وفعّال للروتين اليومي — المرافق والمواقف وصول الزوار." },
    { group: "ضيوف الفندق", icon: "🧳", need: "توجيه شامل للزوار غير المألوفين — مرافق الفندق وقاعات المؤتمرات والمعالم القريبة." },
    { group: "المرضى والكوادر الطبية", icon: "🏥", need: "توجيه حيوي وواضح للأقسام والعيادات ومخارج الطوارئ — خاصةً لمن يعانون من ضائقة." },
    { group: "المتسوقون والزوار", icon: "🛍️", need: "استكشاف بديهي للمناطق التجارية الواسعة — أدلة المتاجر وصالات الطعام والمداخل والمخارج." },
    { group: "موظفو المكاتب", icon: "💼", need: "مسارات فعّالة لأماكن العمل والطوابق المحددة وغرف الاجتماعات وخيارات الطعام أثناء الاستراحات." },
    { group: "موظفو الخدمة", icon: "🔧", need: "التنقل في المناطق الخلفية ونقاط الوصول للخدمة ووضوح مسارات الطوارئ." },
  ] : [
    { group: "Residents", icon: "🏡", need: "Clear, consistent, efficient navigation for daily routines — amenities, parking, visitor access." },
    { group: "Hotel Guests", icon: "🧳", need: "Comprehensive orientation for unfamiliar visitors — hotel amenities, conference facilities, nearby attractions." },
    { group: "Medical Patients & Staff", icon: "🏥", need: "Unambiguous, critical wayfinding to departments, clinics, and emergency exits — especially for those in distress." },
    { group: "Shoppers & Visitors", icon: "🛍️", need: "Intuitive exploration of extensive commercial areas — store directories, food courts, entrances and exits." },
    { group: "Office Workers", icon: "💼", need: "Efficient routes to workplaces, specific floors, meeting rooms, and dining options during breaks." },
    { group: "Service Personnel", icon: "🔧", need: "Back-of-house navigation, service access points, and emergency route clarity." },
  ];

  // ── Zoning table ───────────────────────────────────────────────────────────
  const zoneHeaders = isRTL
    ? ["المنطقة", "الطوابق", "المستخدمون الرئيسيون", "الوظيفة الأساسية", "تحدي التوجيه"]
    : ["Zone", "Floors", "Primary Users", "Key Function", "Wayfinding Challenge"];

  const zoneRows = isRTL ? [
    { zone: "منطقة المواقف", floors: "6 مستويات (P1–P6)", users: "جميع مستخدمي المبنى", function: "تخزين المركبات والانتقال للمشاة", challenge: "التوجيه متعدد المستويات، الفصل بين المركبات والمشاة" },
    { zone: "المنطقة التجارية", floors: "الطابق الأرضي", users: "الزوار والعملاء والسكان", function: "النشاط التجاري ومدخل المبنى", challenge: "استكشاف بديهي، انتقالات سلسة بين المناطق" },
    { zone: "المنطقة السكنية", floors: "طوابق سكنية متعددة", users: "السكان والضيوف", function: "الحياة السكنية الخاصة", challenge: "التوازن بين الخصوصية والوضوح وتعريف الوحدة" },
  ] : [
    { zone: "Parking Zone", floors: "6 levels (P1–P6)", users: "All building users", function: "Vehicle storage & pedestrian transition", challenge: "Multi-level orientation, vehicle/pedestrian separation" },
    { zone: "Commercial Zone", floors: "Ground level", users: "Visitors, customers, residents", function: "Commercial activity & building entry", challenge: "Intuitive exploration, seamless zone transitions" },
    { zone: "Residential Zone", floors: "Multiple residential levels", users: "Residents, guests", function: "Private residential living", challenge: "Balance of privacy, clarity, and unit identification" },
  ];

  // ── Design principles ──────────────────────────────────────────────────────
  const principles = isRTL ? [
    { title: "بسيط ونظيف", desc: "خطوط نظيفة ومساحة سلبية وفيرة وجماليات مبسطة لتجنب الفوضى البصرية وضمان سهولة هضم المعلومات.", icon: "◻" },
    { title: "متسق", desc: "أسلوب بصري موحد عبر جميع أنواع اللافتات — التوجيهية والتعريفية والإعلامية والتنظيمية — مع أيقونات وشبكات تخطيط متسقة.", icon: "⊞" },
    { title: "رموز ISO 7001", desc: "أيقونات عالمية ومعترف بها دولياً للمراحيض والمصاعد والسلالم والمواقف والمرافق الرئيسية — موحدة للزوار الدوليين المتنوعين.", icon: "♿" },
    { title: "هرمي", desc: "تمييز بصري واضح بين الرسائل الأساسية والثانوية باستخدام حجم الخط ووزنه والتموضع الاستراتيجي.", icon: "≡" },
    { title: "ثنائي اللغة (ع/EN)", desc: "العربية والإنجليزية في كل مكان، مع تخطيطات مصممة بعناية لاستيعاب كلا النصين دون أن تبدو مزدحمة.", icon: "ع" },
    { title: "مناطق مرمّزة بالألوان", desc: "ألوان مميزة لكل من مستويات المواقف الـ 6 تخلق مراسي ذاكرة قوية، بينما تحافظ المعالجات الخاصة بالمنطقة على التماسك العام.", icon: "🎨" },
  ] : [
    { title: "Minimalist & Clean", desc: "Clean lines, ample negative space, and streamlined aesthetics to avoid visual clutter and ensure information is easily digestible.", icon: "◻" },
    { title: "Consistent", desc: "Unified visual style across all signage types — directional, identification, informational, regulatory — with consistent iconography and layout grids.", icon: "⊞" },
    { title: "ISO 7001 Pictograms", desc: "Universal, internationally recognized icons for restrooms, elevators, stairs, parking, and key amenities — standardized for diverse international visitors.", icon: "♿" },
    { title: "Hierarchical", desc: "Clear visual differentiation between primary and secondary messages using font size, weight, and strategic placement.", icon: "≡" },
    { title: "Bilingual (AR/EN)", desc: "Arabic and English throughout, with layouts carefully designed to accommodate both scripts without appearing cluttered.", icon: "ع" },
    { title: "Color-Coded Zones", desc: "Distinct colors for each of the 6 parking levels create strong memory anchors, while zone-specific treatments maintain overall coherence.", icon: "🎨" },
  ];

  // ── Impact ─────────────────────────────────────────────────────────────────
  const impacts = isRTL ? [
    { title: "الكفاءة التشغيلية", desc: "تبسيط الحركة يقلل الازدحام والاعتماد على الموظفين للإرشاد.", color: ACCENT },
    { title: "تجربة المستخدم", desc: "التنقل البديهي يخلق ارتباطاً عاطفياً إيجابياً مع البيئة.", color: "oklch(0.45 0.1 220)" },
    { title: "القيمة السوقية", desc: "نظام التوجيه الاحترافي يعكس جودة وهيبة المنشأة بأكملها.", color: "oklch(0.55 0.1 75)" },
    { title: "إمكانية الوصول", desc: "التمييز البصري الواضح والتنظيم المنطقي يفيد جميع المستخدمين بغض النظر عن مدى معرفتهم.", color: "oklch(0.35 0.09 230)" },
  ] : [
    { title: "Operational Efficiency", desc: "Streamlined movement reduces congestion and reliance on staff for directions.", color: ACCENT },
    { title: "User Experience", desc: "Intuitive navigation creates a positive emotional connection with the environment.", color: "oklch(0.45 0.1 220)" },
    { title: "Market Value", desc: "Professional wayfinding reflects the quality and prestige of the entire facility.", color: "oklch(0.55 0.1 75)" },
    { title: "Accessibility", desc: "Clear visual differentiation and logical organization benefit all users regardless of familiarity.", color: "oklch(0.35 0.09 230)" },
  ];

  // ── Future improvements ────────────────────────────────────────────────────
  const futureItems = isRTL ? [
    { num: "01", title: "التكامل الرقمي", desc: "أكشاك رقمية تفاعلية وتطبيقات توجيه على الهاتف مع دعم التنقل في الوقت الفعلي ومتعدد اللغات." },
    { num: "02", title: "تعزيز إمكانية الوصول", desc: "لافتات لمسية وبرايل وعناصر عالية التباين وإشارات صوتية للمستخدمين ذوي الإعاقات البصرية أو المعرفية." },
    { num: "03", title: "الإضاءة الاستراتيجية", desc: "إضاءة مدروسة لعناصر اللافتات الرئيسية لتحسين فعالية التوجيه خلال ساعات المساء." },
    { num: "04", title: "اختبار المستخدم والتكرار", desc: "تقييم ما بعد الإشغال مع مشاركين متنوعين لتحديد تحديات التنقل الواقعية وتحسين النظام." },
  ] : [
    { num: "01", title: "Digital Integration", desc: "Interactive digital kiosks and mobile wayfinding apps with real-time navigation and multilingual support." },
    { num: "02", title: "Enhanced Accessibility", desc: "Tactile and braille signage, high-contrast elements, and auditory cues for users with visual or cognitive impairments." },
    { num: "03", title: "Strategic Lighting", desc: "Thoughtful illumination of key signage elements to improve wayfinding effectiveness during evening hours." },
    { num: "04", title: "User Testing & Iteration", desc: "Post-occupancy evaluation with diverse participants to identify real-world navigation challenges and refine the system." },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: ACCENT_LIGHT }}>
        <div className="circle-decor" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.3 }} />
        <div className="circle-decor" style={{ width: 280, height: 280, bottom: -80, left: "30%", opacity: 0.2 }} />
        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>
              <ArrowLeft size={14} /> {t("wf.back")}
            </button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-num" style={{ fontFamily }}>{t("wf.badge")}</span>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: ACCENT + "18", color: ACCENT, fontFamily }}>
                  {t("wf.live")}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
                {t("wf.title1")}
                <br />
                <em style={{ color: ACCENT }}>{t("wf.title2")}</em>
              </h1>
              <p className="text-xl mb-6 font-medium" style={{ color: ACCENT, fontFamily }}>
                {t("wf.subtitle")}
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>
                {t("wf.intro")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: t("wf.meta.year"), value: "2025" },
                  { label: t("wf.meta.sector"), value: t("wf.meta.sector.val") },
                  { label: t("wf.meta.role"), value: t("wf.meta.role.val") },
                  { label: t("wf.meta.type"), value: t("wf.meta.type.val") },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="section-num mb-1" style={{ fontFamily }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: ACCENT, fontFamily }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl p-6 text-center" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 155 / 0.4)" }}>
                  <p className="text-4xl font-light mb-1" style={{ color: ACCENT, fontFamily: serifFamily }}>{stat.num}</p>
                  <p className="text-sm" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="py-20">
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ fontFamily }}>{t("wf.overview.label")}</p>
            <h2 className="text-3xl lg:text-4xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
              {t("wf.overview.h2.1")}
              <br />
              <em>{t("wf.overview.h2.2")}</em>
            </h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>
                  {t("wf.overview.p1")}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>
                  {t("wf.overview.p2")}
                </p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: ACCENT_LIGHT, border: "1px solid oklch(0.88 0.015 155 / 0.4)" }}>
                <p className="text-sm font-semibold mb-4" style={{ color: ACCENT, fontFamily }}>{t("wf.goals.title")}</p>
                <div className="flex flex-col gap-3">
                  {[t("wf.goal.1"), t("wf.goal.2"), t("wf.goal.3"), t("wf.goal.4"), t("wf.goal.5")].map((goal, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white" style={{ background: ACCENT }}>
                        {i + 1}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* SIGNAGE TYPES */}
      <section className="py-16" style={{ background: "oklch(0.97 0.006 230)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ fontFamily }}>
              {isRTL ? "نظام اللافتات" : "SIGNAGE SYSTEM"}
            </p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
              {isRTL ? "أربع فئات من اللافتات" : "Four Categories of Signage"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {signageCategories.map((cat) => (
                <div key={cat.title} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.4)" }}>
                  <div className="text-2xl mb-3">{cat.icon}</div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily }}>{cat.title}</p>
                  <div className="flex flex-col gap-1.5">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
                        <p className="text-xs" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-20">
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ fontFamily }}>
              {isRTL ? "عملية التصميم" : "DESIGN PROCESS"}
            </p>
            <h3 className="text-3xl mb-10" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
              {isRTL ? "نهج ثلاثي المراحل" : "A Three-Phase Approach"}
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {processPhases.map((phase) => (
                <div key={phase.phase} className="rounded-2xl p-7" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.4)" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-4xl font-light" style={{ color: phase.color, fontFamily: serifFamily, opacity: 0.4 }}>{phase.phase}</span>
                    <p className="text-base font-semibold" style={{ color: "oklch(0.2 0.04 230)", fontFamily }}>{phase.title}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: phase.color }} />
                        <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* USER GROUPS */}
      <section className="py-16" style={{ background: ACCENT_LIGHT }}>
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ fontFamily }}>
              {isRTL ? "بحث المستخدمين" : "USER RESEARCH"}
            </p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
              {isRTL ? "خمس مجموعات مستخدمين مختلفة" : "Five Distinct User Groups"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {userGroups.map((u) => (
                <div key={u.group} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 155 / 0.3)" }}>
                  <div className="text-2xl mb-2">{u.icon}</div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily }}>{u.group}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>{u.need}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* BUILDING ZONES */}
      <section className="py-20">
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ fontFamily }}>
              {isRTL ? "استراتيجية التقسيم" : "ZONING STRATEGY"}
            </p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
              {isRTL ? "ثلاث مناطق، ثلاث استراتيجيات" : "Three Zones, Three Strategies"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid oklch(0.88 0.015 230 / 0.5)" }}>
                    {zoneHeaders.map((h) => (
                      <th key={h} className="text-left py-3 pr-6 text-xs font-semibold" style={{ color: "oklch(0.52 0.04 230)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {zoneRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
                      <td className="py-4 pr-6 font-semibold" style={{ color: ACCENT, fontFamily }}>{row.zone}</td>
                      <td className="py-4 pr-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{row.floors}</td>
                      <td className="py-4 pr-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{row.users}</td>
                      <td className="py-4 pr-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{row.function}</td>
                      <td className="py-4 pr-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{row.challenge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className="py-16" style={{ background: "oklch(0.97 0.006 230)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ fontFamily }}>
              {isRTL ? "مبادئ التصميم" : "DESIGN PRINCIPLES"}
            </p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
              {isRTL ? "اللغة البصرية والمعايير" : "Visual Language & Standards"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {principles.map((p) => (
                <div key={p.title} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.4)" }}>
                  <div className="text-2xl mb-3" style={{ color: ACCENT }}>{p.icon}</div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily }}>{p.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-20">
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ fontFamily }}>
              {isRTL ? "أثر المشروع" : "PROJECT IMPACT"}
            </p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
              {isRTL ? "النتائج والقيمة المُقدَّمة" : "Outcomes & Value Delivered"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {impacts.map((item) => (
                <div key={item.title} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.4)", borderTop: `3px solid ${item.color}` }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* FUTURE IMPROVEMENTS */}
      <section className="py-16" style={{ background: ACCENT_LIGHT }}>
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ fontFamily }}>
              {isRTL ? "التحسينات المستقبلية" : "FUTURE IMPROVEMENTS"}
            </p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
              {isRTL ? "الخطوات الاستراتيجية التالية" : "Strategic Next Steps"}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {futureItems.map((item) => (
                <div key={item.num} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 155 / 0.3)" }}>
                  <p className="text-3xl font-light mb-3" style={{ color: ACCENT, fontFamily: serifFamily, opacity: 0.5 }}>{item.num}</p>
                  <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/">
              <button className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border transition-all duration-200 hover:scale-105" style={{ color: ACCENT, borderColor: ACCENT + "40", fontFamily }}>
                <ArrowLeft size={14} /> {t("wf.back")}
              </button>
            </Link>
            <Link href="/aurafit">
              <button className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:scale-105" style={{ background: ACCENT, color: "oklch(0.98 0.005 230)", fontFamily }}>
                {isRTL ? "عرض دراسة حالة AuraFit ←" : "View AuraFit Case Study →"}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
