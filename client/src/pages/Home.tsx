/**
 * HOME PAGE — Lamia Portfolio "Soft Blueprint"
 * Bilingual AR/EN with RTL support
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Intersection observer hook for scroll animations
function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const checkAndSet = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          setInView(true);
          return true;
        }
      }
      return false;
    };
    if (checkAndSet()) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold, rootMargin: "200px 0px 200px 0px" }
    );
    if (ref.current) obs.observe(ref.current);
    const onScroll = () => { if (checkAndSet()) { window.removeEventListener('scroll', onScroll); obs.disconnect(); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [threshold]);
  return { ref, inView };
}

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028447065/ivUzMW4MyeVPMSAbsRH3EF/hero-bg-AmnQD6RqiGopbaWYmbvcd5.webp";
const AURAFIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028447065/ivUzMW4MyeVPMSAbsRH3EF/aurafit-preview-aDDXmmY7Bhcn7ar7cAPefs.webp";
const TRAVEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028447065/ivUzMW4MyeVPMSAbsRH3EF/traveltales-preview-gYMjHtcyp9MKuCHUXoZzr3.webp";
const VOKO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028447065/ivUzMW4MyeVPMSAbsRH3EF/voko-preview-EAzR7gjACG8AqB7YhWBEeZ.webp";
const WEBDESIGN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028447065/ivUzMW4MyeVPMSAbsRH3EF/Desktop-1_d79b0fb8.png";
const VISUALDESIGN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028447065/ivUzMW4MyeVPMSAbsRH3EF/Asset10@4x-8_a3a7e5a8.webp";

export default function Home() {
  const { t, isRTL } = useLanguage();
  const fontFamily = isRTL ? "'IBM Plex Arabic', 'Noto Sans Arabic', sans-serif" : "'DM Sans', sans-serif";
  const serifFamily = isRTL ? "'IBM Plex Arabic', 'Noto Sans Arabic', sans-serif" : "'DM Serif Display', serif";

  const aboutSection = useInView();
  const toolsSection = useInView();
  const featuredSection = useInView();
  const workSection = useInView();
  const experienceSection = useInView();

  const projects = [
    {
      num: "01",
      title: "AuraFit",
      subtitle: t("project.aurafit.subtitle"),
      type: t("project.aurafit.type"),
      description: t("project.aurafit.desc"),
      tags: isRTL
        ? ["سلوك المستخدم", "بحث UX", "استراتيجية المنتج", "تطبيق جوال", "السوق السعودي"]
        : ["Behavioral UX", "User Research", "Product Strategy", "Mobile App", "Saudi Market"],
      href: "/aurafit",
      img: AURAFIT_IMG,
      accent: "oklch(0.35 0.09 230)",
      bg: "oklch(0.93 0.015 230)",
    },
    {
      num: "02",
      title: "Travel Tales",
      subtitle: t("project.traveltales.subtitle"),
      type: t("project.traveltales.type"),
      description: t("project.traveltales.desc"),
      tags: isRTL
        ? ["بحث UX", "تدفق المستخدم", "بنية المعلومات", "تطبيق جوال", "تصميم الإطارات"]
        : ["UX Research", "User Flow", "Information Architecture", "Mobile App", "Wireframing"],
      href: "/traveltales",
      img: TRAVEL_IMG,
      accent: "oklch(0.45 0.1 220)",
      bg: "oklch(0.94 0.012 220)",
    },
    {
      num: "03",
      title: "VOKO",
      subtitle: t("project.voko.subtitle"),
      type: t("project.voko.type"),
      description: t("project.voko.desc"),
      tags: isRTL
        ? ["تجربة التجارة الإلكترونية", "التصميم البصري", "النمذجة", "تطبيق جوال", "تدفق الدفع"]
        : ["E-commerce UX", "Visual Design", "Prototyping", "Mobile App", "Checkout Flow"],
      href: "/voko",
      img: VOKO_IMG,
      accent: "oklch(0.55 0.1 75)",
      bg: "oklch(0.96 0.015 75)",
    },
    {
      num: "04",
      title: isRTL ? "تصميم المواقع" : "Web Design",
      subtitle: t("project.webdesign.subtitle"),
      type: t("project.webdesign.type"),
      description: t("project.webdesign.desc"),
      tags: isRTL
        ? ["Webflow", "تصميم مواقع", "CMS", "متجاوب", "أنظمة بصرية"]
        : ["Webflow", "Web Design", "CMS", "Responsive", "Visual Systems"],
      href: "/webdesign",
      img: WEBDESIGN_IMG,
      accent: "oklch(0.28 0.1 155)",
      bg: "oklch(0.94 0.015 155)",
    },
    {
      num: "05",
      title: isRTL ? "التصميم البصري" : "Visual Design",
      subtitle: t("project.visualdesign.subtitle"),
      type: t("project.visualdesign.type"),
      description: t("project.visualdesign.desc"),
      tags: isRTL
        ? ["هوية بصرية", "ثنائي اللغة", "تصميم حملات", "سرد بصري", "تغليف", "Adobe Suite"]
        : ["Brand Identity", "Bilingual AR/EN", "Campaign Design", "Visual Storytelling", "Packaging", "Adobe Suite"],
      href: "/visualdesign",
      img: VISUALDESIGN_IMG,
      accent: "oklch(0.52 0.12 45)",
      bg: "oklch(0.96 0.015 45)",
    },
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className="circle-decor" style={{ width: 500, height: 500, top: -100, right: -100, opacity: 0.4 }} />
        <div className="circle-decor" style={{ width: 300, height: 300, top: 80, right: 120, opacity: 0.25 }} />
        <div className="circle-decor" style={{ width: 180, height: 180, bottom: 120, left: "40%", opacity: 0.2 }} />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8 fade-up">
              <div className="w-8 h-px" style={{ background: "oklch(0.35 0.09 230 / 0.5)" }} />
              <span className="section-num" style={{ letterSpacing: "0.2em", fontFamily }}>
                {t("hero.label")}
              </span>
            </div>

            <p className="text-base font-medium mb-2 fade-up fade-up-delay-1" style={{ color: "oklch(0.45 0.06 230)", fontFamily }}>
              {t("hero.name")}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 fade-up fade-up-delay-1" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
              {t("hero.h1.line1")}
              <br />
              <em style={{ color: "oklch(0.35 0.09 230)" }}>{t("hero.h1.line2")}</em>
              <br />
              {t("hero.h1.line3")}
            </h1>

            <p className="text-base leading-relaxed mb-10 max-w-lg fade-up fade-up-delay-2" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap items-center gap-4 fade-up fade-up-delay-3">
              <Link href="/aurafit">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  style={{ background: "oklch(0.35 0.09 230)", color: "oklch(0.98 0.005 230)", fontFamily, boxShadow: "0 8px 30px oklch(0.35 0.09 230 / 0.25)" }}
                >
                  {t("hero.cta.work")}
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              <a
                href="mailto:Lamiaaziz90@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                style={{ color: "oklch(0.35 0.09 230)", borderColor: "oklch(0.35 0.09 230 / 0.4)", fontFamily, background: "oklch(1 0 0 / 0.5)", backdropFilter: "blur(8px)" }}
              >
                <ExternalLink size={14} />
                {t("hero.cta.contact")}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.98 0.005 230))" }} />
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div
            ref={aboutSection.ref}
            className="grid lg:grid-cols-2 gap-16 items-center"
            style={{ opacity: aboutSection.inView ? 1 : 0, transform: aboutSection.inView ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            <div>
              <p className="section-num mb-4" style={{ letterSpacing: "0.2em", fontFamily }}>{t("about.label")}</p>
              <h2 className="text-4xl lg:text-5xl mb-6" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
                {t("about.h2.line1")}
                <br />
                <em>{t("about.h2.line2")}</em>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{t("about.p1")}</p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{t("about.p2")}</p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{t("about.p3")}</p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{t("about.p4")}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "4+", labelKey: "about.stat.years" },
                { num: "3", labelKey: "about.stat.industries" },
                { num: "McKinsey", labelKey: "about.stat.mckinsey" },
                { num: "AR / EN", labelKey: "about.stat.bilingual" },
              ].map((stat) => (
                <div key={stat.labelKey} className="rounded-2xl p-6" style={{ background: "oklch(0.93 0.015 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
                  <p className="text-3xl font-light mb-1" style={{ color: "oklch(0.35 0.09 230)", fontFamily: serifFamily }}>{stat.num}</p>
                  <p className="text-sm" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>{t(stat.labelKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE SECTION */}
      <section className="py-20" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <div
            ref={experienceSection.ref}
            style={{ opacity: experienceSection.inView ? 1 : 0, transform: experienceSection.inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em", fontFamily }}>{t("exp.label")}</p>
            <h3 className="text-3xl mb-10" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{t("exp.h3")}</h3>
            <div className="flex flex-col gap-5">
              {[
                {
                  roleKey: "exp.role1",
                  companyKey: "exp.company1",
                  period: "Sep 2025 – Present",
                  highlightKeys: ["exp.h1.1", "exp.h1.2", "exp.h1.3", "exp.h1.4"],
                  accent: "oklch(0.35 0.09 230)",
                },
                {
                  roleKey: "exp.role2",
                  companyKey: "exp.company2",
                  period: "Dec 2022 – Sep 2025",
                  highlightKeys: ["exp.h2.1", "exp.h2.2", "exp.h2.3", "exp.h2.4"],
                  accent: "oklch(0.45 0.1 220)",
                },
                {
                  roleKey: "exp.role3",
                  companyKey: "exp.company3",
                  period: "Jun 2021 – Dec 2022",
                  highlightKeys: ["exp.h3.1", "exp.h3.2", "exp.h3.3"],
                  accent: "oklch(0.28 0.1 155)",
                },
              ].map((exp, i) => (
                <div key={i} className="rounded-2xl p-6 lg:p-8" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <p className="text-lg font-semibold" style={{ color: "oklch(0.2 0.04 230)", fontFamily }}>{t(exp.roleKey)}</p>
                      <p className="text-sm font-medium mt-1" style={{ color: exp.accent, fontFamily }}>{t(exp.companyKey)}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full shrink-0" style={{ background: exp.accent + "15", color: exp.accent, fontFamily }}>
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {exp.highlightKeys.map((hk, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: exp.accent }} />
                        <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{t(hk)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="py-16" style={{ background: "oklch(0.98 0.005 230)" }}>
        <div className="container">
          <div
            ref={toolsSection.ref}
            style={{ opacity: toolsSection.inView ? 1 : 0, transform: toolsSection.inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-48 shrink-0">
                <p className="section-num mb-2" style={{ letterSpacing: "0.2em", fontFamily }}>{t("tools.label")}</p>
                <h3 className="text-2xl" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{t("tools.h3")}</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "Figma", color: "#F24E1E", letter: "F" },
                  { name: "Miro", color: "#FFD02F", letter: "M" },
                  { name: "Canva", color: "#00C4CC", letter: "C" },
                  { name: "Webflow", color: "#4353FF", letter: "W" },
                  { name: "Illustrator", color: "#FF9A00", letter: "Ai" },
                  { name: "Photoshop", color: "#31A8FF", letter: "Ps" },
                  { name: "InDesign", color: "#FF3366", letter: "Id" },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.5)", boxShadow: "0 2px 12px oklch(0.35 0.09 230 / 0.06)" }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: tool.color }}>
                      {tool.letter}
                    </div>
                    <span className="text-sm font-medium" style={{ color: "oklch(0.35 0.09 230)", fontFamily: "'DM Sans', sans-serif" }}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED REAL-WORLD PROJECT */}
      <section className="py-24 lg:py-32" style={{ background: "oklch(0.97 0.006 230)" }}>
        <div className="container">
          <div
            ref={featuredSection.ref}
            style={{ opacity: featuredSection.inView ? 1 : 0, transform: featuredSection.inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="section-num mb-3" style={{ letterSpacing: "0.2em", fontFamily }}>{t("featured.label")}</p>
                <h2 className="text-4xl lg:text-5xl" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
                  {t("featured.h2.line1")}
                  <br />
                  <em style={{ color: "oklch(0.32 0.1 155)" }}>{t("featured.h2.line2")}</em>
                </h2>
              </div>
              <p className="hidden md:block text-sm max-w-xs text-right" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>
                {t("featured.subtitle")}
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden" style={{ background: "oklch(0.94 0.015 155)", border: "1px solid oklch(0.88 0.015 155 / 0.5)", boxShadow: "0 8px 40px oklch(0.32 0.1 155 / 0.12)" }}>
              <div className="flex flex-col lg:flex-row min-h-[480px]">
                <div className="lg:w-2/5 relative flex items-center justify-center p-12" style={{ background: "oklch(0.28 0.1 155)" }}>
                  <div className="text-center">
                    <div className="text-7xl mb-6">🗺️</div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { num: "24", labelKey: "featured.stat.floors" },
                        { num: "6", labelKey: "featured.stat.parking" },
                        { num: "5+", labelKey: "featured.stat.groups" },
                        { num: "AR/EN", labelKey: "featured.stat.bilingual" },
                      ].map((stat) => (
                        <div key={stat.labelKey} className="rounded-xl p-3 text-center" style={{ background: "oklch(1 0 0 / 0.1)" }}>
                          <p className="text-2xl font-light mb-0.5" style={{ color: "oklch(0.95 0.01 155)", fontFamily: serifFamily }}>{stat.num}</p>
                          <p className="text-xs" style={{ color: "oklch(0.75 0.04 155)", fontFamily }}>{t(stat.labelKey)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="section-num" style={{ color: "oklch(0.32 0.1 155)", opacity: 0.7, fontFamily }}>{t("featured.badge")}</span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "oklch(0.32 0.1 155 / 0.15)", color: "oklch(0.28 0.1 155)", fontFamily }}>{t("featured.client.badge")}</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{t("featured.project.title")}</h3>
                  <p className="text-base font-medium mb-4" style={{ color: "oklch(0.32 0.1 155)", fontFamily }}>{t("featured.project.subtitle")}</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{t("featured.project.desc")}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {(isRTL
                      ? ["تصميم بيئي", "تجربة مكانية", "ثنائي اللغة", "معيار ISO 7001", "أنظمة ألوان", "تعاون مع أصحاب المصلحة", "مشروع منفّذ"]
                      : ["Environmental Design", "Spatial UX", "Bilingual AR/EN", "ISO 7001 Standards", "Color Systems", "Stakeholder Collaboration", "Live Project"]
                    ).map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: "oklch(0.32 0.1 155 / 0.12)", color: "oklch(0.28 0.1 155)", fontFamily }}>{tag}</span>
                    ))}
                  </div>

                  <Link href="/wayfinding">
                    <button
                      className="inline-flex items-center gap-2 text-sm font-medium group self-start px-6 py-3 rounded-full transition-all duration-300 hover:gap-3"
                      style={{ background: "oklch(0.32 0.1 155)", color: "oklch(0.98 0.005 230)", fontFamily }}
                    >
                      {t("featured.cta")}
                      <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div
            ref={workSection.ref}
            style={{ opacity: workSection.inView ? 1 : 0, transform: workSection.inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="section-num mb-3" style={{ letterSpacing: "0.2em", fontFamily }}>{t("work.label")}</p>
                <h2 className="text-4xl lg:text-5xl" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>
                  {t("work.h2.line1")}
                  <br />
                  <em>{t("work.h2.line2")}</em>
                </h2>
              </div>
              <p className="hidden md:block text-sm max-w-xs text-right" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>
                {t("work.subtitle")}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map((project, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={project.num}
                  className="project-card rounded-2xl overflow-hidden"
                  style={{ background: project.bg, border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}
                >
                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[420px]`}>
                    <div className="lg:w-2/5 relative overflow-hidden" style={{ minHeight: "280px" }}>
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" style={{ minHeight: "280px" }} />
                      <div className="absolute inset-0" style={{ background: isEven ? "linear-gradient(to right, transparent 60%, " + project.bg + ")" : "linear-gradient(to left, transparent 60%, " + project.bg + ")" }} />
                    </div>
                    <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="section-num" style={{ color: project.accent, opacity: 0.7 }}>{project.num}</span>
                        <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: project.accent + "18", color: project.accent, fontFamily }}>{project.type}</span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>{project.title}</h3>
                      <p className="text-base font-medium mb-4" style={{ color: project.accent, fontFamily }}>{project.subtitle}</p>
                      <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily }}>{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: "oklch(0.88 0.015 230 / 0.5)", color: "oklch(0.42 0.06 230)", fontFamily }}>{tag}</span>
                        ))}
                      </div>
                      <Link href={project.href}>
                        <button
                          className="inline-flex items-center gap-2 text-sm font-medium group self-start px-6 py-3 rounded-full transition-all duration-300 hover:gap-3"
                          style={{ background: "oklch(0.35 0.09 230)", color: "oklch(0.98 0.005 230)", fontFamily }}
                        >
                          {t("work.cta")}
                          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center" style={{ background: "oklch(0.35 0.09 230)" }}>
            <div className="circle-decor" style={{ width: 400, height: 400, top: -100, right: -100, borderColor: "oklch(0.98 0.005 230 / 0.1)" }} />
            <div className="circle-decor" style={{ width: 250, height: 250, bottom: -80, left: -60, borderColor: "oklch(0.98 0.005 230 / 0.08)" }} />

            <p className="section-num mb-4 relative z-10" style={{ color: "oklch(0.98 0.005 230 / 0.5)", letterSpacing: "0.2em", fontFamily }}>{t("contact.label")}</p>
            <h2 className="text-4xl lg:text-5xl mb-4 relative z-10" style={{ color: "oklch(0.98 0.005 230)", fontFamily: serifFamily }}>
              {t("contact.h2.line1")}
              <br />
              <em>{t("contact.h2.line2")}</em>
            </h2>
            <p className="text-base mb-10 max-w-lg mx-auto relative z-10" style={{ color: "oklch(0.98 0.005 230 / 0.7)", fontFamily }}>{t("contact.p")}</p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a
                href="mailto:Lamiaaziz90@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{ background: "oklch(0.98 0.005 230)", color: "oklch(0.35 0.09 230)", fontFamily }}
              >
                {t("contact.email")}
                <ArrowRight size={14} />
              </a>
              <a
                href="https://linkedin.com/in/lamia-alrowaished"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                style={{ color: "oklch(0.98 0.005 230)", borderColor: "oklch(0.98 0.005 230 / 0.4)", fontFamily }}
              >
                <ExternalLink size={14} />
                {t("contact.linkedin")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
