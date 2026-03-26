/*
 * VISUAL DESIGN PAGE — Lamia Portfolio
 * Sections: Brand Identity · Winclex · Weqaa Center · The Solution Consulting · Telescope Studio · Packaging Design
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// ── CDN URLs ────────────────────────────────────────────────────────────────

const IMG = {
  brand01: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/nSLZVsApcbtjHUUb.png",
  brand02: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/uXrctdKHbZYvGogr.png",
  brand04: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/pvGNpZTxShSmXJMR.png",
  brand06: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/KtHRpfzawtmydvYu.png",
  brand10: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/xxrJydyReBbyomhh.png",
  brand12: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/sdSZWPPZyacHhFcm.png",
  brand16: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/pmDshvTvLmHvkSQw.png",
  winclex01: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/RPENqxnVozVUIoyb.webp",
  winclex02: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/QeHnooDwxZnDScOJ.webp",
  winclex03: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/pqOpHgQlTYVpIuvP.webp",
  winclex04: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/KBPDAqmeORyGANIh.webp",
  winclex05: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/IfWGEArsoeJkBoqp.webp",
  winclex06: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/eByMwGyTJOxOiFLN.webp",
  winclex07: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/jCXNItgpCSsyNhnM.png",
  winclex08: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/lWvRYtUbIpKZOtJc.png",
  weqaa: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/fwLYPmXAMbKYUclC.webp",
  solution: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/CABQxATzIqdwLplU.webp",
  teleBag:       "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/ABCJRigvoFQGQOuI.webp",
  teleSignage2:  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/QLuJaBKqUFXlyJEP.webp",
  teleSignage:   "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/yLyWKtgfnIsnHmfR.webp",
  teleStationary:"https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/OasIMZisaKCfZYiG.webp",
  packCoffee:    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/NpzkukLHBUMhVCPr.webp",
  packSalad:     "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/CVHDDAhMRSJgocTN.png",
  packOatmeal:   "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/HMyvooUKITIgAeZy.webp",
};

function ImgCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-sm ${className}`} style={{ border: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto block" />
    </div>
  );
}

export default function VisualDesign() {
  const { t, isRTL } = useLanguage();
  const fontFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Sans', sans-serif";
  const serifFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Serif Display', serif";

  const sections = [
    {
      num: "01",
      tag: isRTL ? "عمل عميل" : "Client Work",
      title: isRTL ? "هوية بصرية — QR" : "Brand Identity",
      desc: isRTL
        ? "وثيقة إرشادات هوية بصرية متكاملة لـ QR — تغطي بناء الشعار ولوحة الألوان ومنظومة الخطوط وصوت العلامة التجارية وتطبيقات الموكاب عبر نقاط التواصل المطبوعة والرقمية."
        : "A complete brand identity guidelines document for QR — covering logo construction, color palette, typography system, brand voice, and real-world application mockups across print and digital touchpoints.",
    },
    {
      num: "02",
      tag: isRTL ? "عمل عميل" : "Client Work",
      title: "Winclex",
      desc: isRTL
        ? "سلسلة من منشورات حملات التواصل الاجتماعي المصمّمة لـ Winclex — تشمل المناسبات الوطنية والاحتفالات الموسمية وحملات التوعية. صُمّمت كل منشورة لتتوافق مع الهوية البصرية للعلامة التجارية مع توصيل الرسالة بوضوح للجمهور السعودي."
        : "A series of social media campaign posts designed for Winclex — covering national occasions, seasonal celebrations, and awareness campaigns. Each post was crafted to align with the brand's visual identity while communicating clearly to a Saudi audience.",
    },
    {
      num: "03",
      tag: isRTL ? "عمل عميل" : "Client Work",
      title: isRTL ? "مركز وقاء" : "Weqaa Center",
      desc: isRTL
        ? "قالب عرض تقديمي مخصص مصمّم لمركز وقاء — المركز الوطني للوقاية من آفات النبات والأمراض الحيوانية ومكافحتها. يستخدم القالب لغة بصرية مستوحاة من الصحراء مع العلامة التجارية الرسمية للمركز، مبني في Illustrator وPhotoshop."
        : "A custom presentation template designed for Weqaa Center — the National Center for the Prevention & Control of Plants Pests & Animal Diseases. The template uses a desert-inspired visual language with the center's official branding, built in Illustrator and Photoshop.",
    },
    {
      num: "04",
      tag: isRTL ? "عمل عميل" : "Client Work",
      title: isRTL ? "The Solution Consulting" : "The Solution Consulting",
      desc: isRTL
        ? "تصاميم منشورات التواصل الاجتماعي لـ The Solution Consulting (تقنية المعلومات العربية) — تشمل تهاني عيد الفطر وعيد الأضحى ورمضان. صُمّمت المنشورات لتعكس الأسلوب الاحترافي للعلامة التجارية مع الحفاظ على الدفء والملاءمة الثقافية."
        : "Social media post designs for The Solution Consulting (Arabia Information Technology) — including Eid Al-Fitr, Eid Al-Adha, and Ramadan greetings. The posts were designed to reflect the brand's professional tone while maintaining warmth and cultural relevance.",
    },
    {
      num: "05",
      tag: isRTL ? "عمل شخصي" : "Personal Work",
      title: "Telescope Studio",
      desc: isRTL
        ? "مشروع هوية بصرية شخصي لـ Telescope Studio — مفهوم استوديو إبداعي مبني حول الشعار 'تُحوّل المستحيل إلى ممكن.' يشمل المشروع نظام قرطاسية متكامل ولافتات بيئية وتصميم ملصقات وبضائع ذات علامة تجارية."
        : "A personal brand identity project for Telescope Studio — a creative studio concept built around the tagline 'turns the unimaginable into possible.' The project includes a full stationery system, environmental signage, poster design, and branded merchandise.",
    },
    {
      num: "06",
      tag: isRTL ? "عمل شخصي" : "Personal Work",
      title: isRTL ? "تصميم التغليف" : "Packaging Design",
      desc: isRTL
        ? "مجموعة من استكشافات تصميم التغليف الشخصية — تشمل كيس قهوة فاخر بعلامة تجارية فاكهية، ووعاء سلطة Vegy Food بأعمال نمط مُصوَّرة، وسلسلة أكواب حلوى Coffee Premium. يركز كل مشروع على تسلسل الملصق وسياق المواد وجاذبية الرف."
        : "A collection of personal packaging design explorations — including a premium coffee pouch with fruit-forward branding, a Vegy Food salad bowl with illustrated pattern work, and a Coffee Premium dessert cup series. Each project focuses on label hierarchy, material context, and shelf appeal.",
    },
  ];

  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.16 0.04 240) 0%, oklch(0.22 0.06 245) 50%, oklch(0.18 0.05 235) 100%)" }}>
        <div style={{ position: "absolute", width: 500, height: 500, top: -150, right: -100, borderRadius: "50%", background: "oklch(0.35 0.1 230 / 0.08)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 300, height: 300, bottom: -80, left: -60, borderRadius: "50%", background: "oklch(0.55 0.15 200 / 0.06)", pointerEvents: "none" }} />

        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.7 0.05 230)", fontFamily }}>
              <ArrowLeft size={14} /> {t("wd.back")}
            </button>
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-num" style={{ letterSpacing: "0.2em", color: "oklch(0.6 0.05 230)", fontFamily }}>
                {isRTL ? "المشروع 05" : "PROJECT 05"}
              </span>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.55 0.15 200 / 0.2)", color: "oklch(0.75 0.12 200)", fontFamily, border: "1px solid oklch(0.55 0.15 200 / 0.3)" }}>
                {t("vd.hero.badge")}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.97 0.01 230)", fontFamily: serifFamily, lineHeight: 1.15 }}>
              {t("vd.hero.title")}
            </h1>

            <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.72 0.04 230)", fontFamily, maxWidth: "600px" }}>
              {t("vd.hero.p")}
            </p>

            <div className="flex flex-wrap gap-2">
              {(isRTL
                ? ["عمل عميل", "عمل شخصي", "هوية بصرية", "حملات", "تغليف", "تصميم عروض تقديمية"]
                : ["Client Work", "Personal Work", "Brand Identity", "Campaigns", "Packaging", "Presentation Design"]
              ).map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "oklch(1 0 0 / 0.07)", color: "oklch(0.82 0.04 230)", fontFamily, border: "1px solid oklch(1 0 0 / 0.12)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 · BRAND IDENTITY ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-num" style={{ letterSpacing: "0.2em", fontFamily }}>{sections[0].num}</span>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.35 0.1 230 / 0.12)", color: "oklch(0.52 0.12 230)", fontFamily }}>{sections[0].tag}</span>
              <div className="h-px flex-1" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} />
            </div>
            <h2 className="text-3xl mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{sections[0].title}</h2>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{sections[0].desc}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <ImgCard src={IMG.brand01} alt="QR Brand Identity — Cover" />
            <ImgCard src={IMG.brand02} alt="QR Brand Identity — Introduction" />
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <ImgCard src={IMG.brand04} alt="QR Brand Identity — Logo" />
            <ImgCard src={IMG.brand06} alt="QR Brand Identity — Colors" />
            <ImgCard src={IMG.brand16} alt="QR Brand Identity — Applications" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <ImgCard src={IMG.brand10} alt="QR Brand Identity — Mockup 1" />
            <ImgCard src={IMG.brand12} alt="QR Brand Identity — Mockup 2" />
          </div>
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 02 · WINCLEX ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-num" style={{ letterSpacing: "0.2em", fontFamily }}>{sections[1].num}</span>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.35 0.1 230 / 0.12)", color: "oklch(0.52 0.12 230)", fontFamily }}>{sections[1].tag}</span>
              <div className="h-px flex-1" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} />
            </div>
            <h2 className="text-3xl mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{sections[1].title}</h2>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{sections[1].desc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ImgCard src={IMG.winclex01} alt="Winclex — Industrial Workers Day" />
            <ImgCard src={IMG.winclex02} alt="Winclex — Saudi Founding Day" />
            <ImgCard src={IMG.winclex03} alt="Winclex — Eid Al-Adha" />
            <ImgCard src={IMG.winclex04} alt="Winclex — National Day" />
            <ImgCard src={IMG.winclex05} alt="Winclex — Gulf Engineer Day" />
            <ImgCard src={IMG.winclex06} alt="Winclex — Saudi Founding Day 2025" />
            <ImgCard src={IMG.winclex07} alt="Winclex — Heatstroke Awareness" />
            <ImgCard src={IMG.winclex08} alt="Winclex — Ramadan" />
          </div>
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 03 · WEQAA CENTER ────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-num" style={{ letterSpacing: "0.2em", fontFamily }}>{sections[2].num}</span>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.35 0.1 230 / 0.12)", color: "oklch(0.52 0.12 230)", fontFamily }}>{sections[2].tag}</span>
              <div className="h-px flex-1" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} />
            </div>
            <h2 className="text-3xl mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{sections[2].title}</h2>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{sections[2].desc}</p>
          </div>
          <ImgCard src={IMG.weqaa} alt="Weqaa Center — Presentation Template" />
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 04 · THE SOLUTION CONSULTING ─────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-num" style={{ letterSpacing: "0.2em", fontFamily }}>{sections[3].num}</span>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.35 0.1 230 / 0.12)", color: "oklch(0.52 0.12 230)", fontFamily }}>{sections[3].tag}</span>
              <div className="h-px flex-1" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} />
            </div>
            <h2 className="text-3xl mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{sections[3].title}</h2>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{sections[3].desc}</p>
          </div>
          <ImgCard src={IMG.solution} alt="The Solution Consulting — Social Media Posts" />
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 05 · TELESCOPE STUDIO ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-num" style={{ letterSpacing: "0.2em", fontFamily }}>{sections[4].num}</span>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.35 0.1 230 / 0.12)", color: "oklch(0.52 0.12 230)", fontFamily }}>{sections[4].tag}</span>
              <div className="h-px flex-1" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} />
            </div>
            <h2 className="text-3xl mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{sections[4].title}</h2>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{sections[4].desc}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <ImgCard src={IMG.teleStationary} alt="Telescope Studio — Stationery Set" />
            <ImgCard src={IMG.teleSignage2} alt="Telescope Studio — Circular Signage" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <ImgCard src={IMG.teleSignage} alt="Telescope Studio — Poster" />
            <ImgCard src={IMG.teleBag} alt="Telescope Studio — Tote Bag" />
          </div>
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 06 · PACKAGING DESIGN ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="section-num" style={{ letterSpacing: "0.2em", fontFamily }}>{sections[5].num}</span>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.35 0.1 230 / 0.12)", color: "oklch(0.52 0.12 230)", fontFamily }}>{sections[5].tag}</span>
              <div className="h-px flex-1" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} />
            </div>
            <h2 className="text-3xl mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{sections[5].title}</h2>
            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{sections[5].desc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <ImgCard src={IMG.packCoffee}  alt="Coffee Premium — Pouch Packaging" />
            <ImgCard src={IMG.packSalad}   alt="Vegy Food — Salad Bowl Packaging" />
            <ImgCard src={IMG.packOatmeal} alt="Coffee Premium — Dessert Cup Packaging" />
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, oklch(0.16 0.04 240) 0%, oklch(0.22 0.06 245) 100%)" }}>
        <div className="container text-center">
          <p className="text-2xl lg:text-3xl mb-6" style={{ color: "oklch(0.97 0.01 230)", fontFamily: serifFamily, maxWidth: "700px", margin: "0 auto 1.5rem" }}>
            {isRTL
              ? '"التصميم البصري هو الأساس الذي يجعل كل منتج يبدو مقصوداً."'
              : '"Visual design is the foundation that makes every product feel intentional."'}
          </p>
          <p className="text-sm" style={{ color: "oklch(0.62 0.04 230)", fontFamily }}>
            {isRTL
              ? "سنوات من العمل مع العملاء في الهوية البصرية والحملات والتصميم البيئي."
              : "Years of client work across brand identity, campaigns, and environmental design."}
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <Link href="/">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200" style={{ background: "oklch(1 0 0 / 0.08)", color: "oklch(0.9 0.04 230)", fontFamily, border: "1px solid oklch(1 0 0 / 0.15)" }}>
                <ArrowLeft size={14} /> {t("wd.back")}
              </button>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
