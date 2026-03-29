/*
 * AURAFIT CASE STUDY PAGE — Lamia Portfolio
 * Real screens: Splash → Onboarding (3) → Welcome → Step 1-2-3 → Dashboard → Progress
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// All real design assets
const IMG = {
  hifiShowcase: "/aurafit/hifi-showcase.webp",
  splash: "/aurafit/splash.png",
  onboarding1: "/aurafit/onboarding-1.webp",
  onboarding2: "/aurafit/onboarding-2.webp",
  onboarding3: "/aurafit/onboarding-3.webp",
  welcome: "/aurafit/welcome.webp",
  step1: "/aurafit/step1.webp",
  step2: "/aurafit/step2.webp",
  step3: "/aurafit/step3.png",
  dashboard: "/aurafit/dashboard.webp",
  progress: "/aurafit/progress.webp",
  moodboard: "/aurafit/moodboard.webp",
  wireframeHome: "/aurafit/wireframe-home.png",
  wireframeLogin: "/aurafit/wireframe-login.png",
  wireframeOnboarding: "/aurafit/wireframe-onboarding.png",
  wireframeCart: "/aurafit/wireframe-cart.png",
  wireframeCheckout: "/aurafit/wireframe-checkout.png",
  wireframeProgress: "/aurafit/wireframe-progress.png",
};

// Phone mockup wrapper — portrait, with device frame feel
function PhoneFrame({ src, alt, label, fontFamily }: { src: string; alt: string; label?: string; fontFamily?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-3xl overflow-hidden shadow-xl" style={{ width: "180px", border: "2px solid oklch(0.88 0.015 270 / 0.4)", background: "oklch(0.12 0.01 270)" }}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto block" />
      </div>
      {label && <p className="text-xs text-center font-medium" style={{ color: "oklch(0.52 0.04 230)", fontFamily: fontFamily || "'DM Sans', sans-serif" }}>{label}</p>}
    </div>
  );
}

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default function AuraFit() {
  const { t, isRTL } = useLanguage();
  const fontFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Sans', sans-serif";
  const serifFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Serif Display', serif";
  const fw: number | undefined = isRTL ? 600 : undefined;

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "oklch(0.93 0.015 270)" }}>
        <div className="circle-decor" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.3 }} />
        <div className="circle-decor" style={{ width: 280, height: 280, bottom: -80, left: "30%", opacity: 0.2 }} />
        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily, fontWeight: fw }}>
              <ArrowLeft size={14} /> {t("af.back")}
            </button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-num" style={{ fontFamily }}>PROJECT 01</span>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.45 0.12 270 / 0.12)", color: "oklch(0.35 0.12 270)", fontFamily, fontWeight: fw }}>
                  {t("af.badge")}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.title")}</h1>
              <p className="text-xl mb-6" style={{ color: "oklch(0.35 0.12 270)", fontFamily, fontWeight: fw ?? 500 }}>{t("af.subtitle")}</p>
              {t("af.intro").split("\n\n").map((para, i) => (
                <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
                  {para}
                </p>
              ))}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: t("af.meta.timeline"), value: t("af.meta.timeline.val") },
                  { label: t("af.meta.role"), value: t("af.meta.role.val") },
                  { label: t("af.meta.market"), value: t("af.meta.market.val") },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="section-num mb-1">{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.35 0.12 270)", fontFamily, fontWeight: fw }}>{item.value}</p>
                  </div>
                ))}
              </div>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.35 0.12 270)", color: "oklch(0.98 0.005 230)", fontFamily, fontWeight: fw }}>
                  <ExternalLink size={14} /> {t("af.prototype")}
                </button>
              </a>
            </div>
            {/* Hi-Fi showcase image */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "420px", width: "100%" }}>
                <img src={IMG.hifiShowcase} alt="AuraFit Hi-Fi Screens" width={420} loading="eager" decoding="async" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIBILITIES ── */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="rounded-2xl p-8 lg:p-12" style={{ background: "oklch(0.96 0.008 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
              <p className="section-num mb-4">{t("af.resp.label")}</p>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  t("af.resp.1"),
                  t("af.resp.2"),
                  t("af.resp.3"),
                  t("af.resp.4"),
                ].map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.45 0.12 270)" }} />
                    <p className="text-sm" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="rounded-2xl p-8 lg:p-12" style={{ background: "oklch(0.93 0.015 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
              <p className="section-num mb-4">{t("af.problem.label")}</p>
              <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.problem.h2")}</h2>
              {t("af.problem.p").split("\n\n").map((para, i) => (
                <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
                  {para}
                </p>
              ))}
              <div className="rounded-xl p-6 mb-4" style={{ background: "oklch(0.35 0.09 230 / 0.07)", borderLeft: "3px solid oklch(0.35 0.09 230)" }}>
                <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.35 0.09 230)", fontFamily, letterSpacing: "0.1em" }}>{t("af.key.insight.label")}</p>
                {t("af.key.insight.p").split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-2" style={{ color: "oklch(0.28 0.06 230)", fontFamily, fontWeight: fw }}>
                    {para}
                  </p>
                ))}
              </div>
              <div className="rounded-xl p-6" style={{ background: "oklch(0.45 0.12 270 / 0.08)", borderLeft: "3px solid oklch(0.45 0.12 270)" }}>
                <p className="text-xs font-semibold mb-2" style={{ color: "oklch(0.45 0.12 270)", fontFamily, letterSpacing: "0.1em" }}>{t("af.insight.label")}</p>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
                  {t("af.insight.p")}
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ── CHALLENGE & SOLUTION ── */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl p-8" style={{ background: "oklch(0.93 0.015 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
                <p className="section-num mb-3">{t("af.challenge.label")}</p>
                <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.challenge.h2")}</h2>
                <ul className="space-y-3">
                  {[t("af.challenge.1"), t("af.challenge.2"), t("af.challenge.3")].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.45 0.12 270)" }} />
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-8" style={{ background: "oklch(0.45 0.12 270)", color: "oklch(0.98 0.005 230)" }}>
                <p className="section-num mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)" }}>{t("af.solution.label")}</p>
                <h2 className="text-3xl mb-4" style={{ fontFamily: serifFamily, fontWeight: fw }}>{t("af.solution.h2")}</h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily, fontWeight: fw }}>
                  {t("af.solution.p")}
                </p>
                <p className="text-xs font-semibold mb-4" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily, letterSpacing: "0.1em" }}>{t("af.solution.feat.label")}</p>
                <div className="space-y-4 mb-6">
                  {[
                    { titleKey: "af.solution.feat.1.title", whyKey: "af.solution.feat.1.why" },
                    { titleKey: "af.solution.feat.2.title", whyKey: "af.solution.feat.2.why" },
                    { titleKey: "af.solution.feat.3.title", whyKey: "af.solution.feat.3.why" },
                    { titleKey: "af.solution.feat.4.title", whyKey: "af.solution.feat.4.why" },
                  ].map((feat) => (
                    <div key={feat.titleKey}>
                      <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.98 0.005 230)", fontFamily, fontWeight: fw }}>{t(feat.titleKey)}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "oklch(0.98 0.005 230 / 0.75)", fontFamily, fontWeight: fw }}>{t(feat.whyKey)}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { label: t("af.solution.research"), val: t("af.solution.research.val") },
                    { label: t("af.solution.design"), val: t("af.solution.design.val") },
                    { label: t("af.solution.type"), val: t("af.solution.type.val") },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "oklch(0.98 0.005 230 / 0.1)" }}>
                      <p className="text-xs mb-1" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily, fontWeight: fw }}>{s.label}</p>
                      <p className="text-sm font-medium" style={{ color: "oklch(0.98 0.005 230)", fontFamily, fontWeight: fw }}>{s.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ── MOODBOARD ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 270)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4">{t("af.moodboard.label")}</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.moodboard.h2")}</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={IMG.moodboard} alt="AuraFit Moodboard" loading="lazy" decoding="async" className="w-full h-auto block" />
            </div>
          </Section>
        </div>
      </section>

      {/* ── WIREFRAMES ── */}
      <section className="py-16">
        <div className="container">
          <Section>
            <p className="section-num mb-4">{t("af.wireframes.label")}</p>
            <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.wireframes.h2")}</h2>
            <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
              {t("af.wireframes.p")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
              <PhoneFrame src={IMG.wireframeOnboarding} alt="Onboarding wireframe" label={t("af.wireframes.ob")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.wireframeLogin} alt="Login wireframe" label={t("af.wireframes.login")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.wireframeHome} alt="Home wireframe" label={t("af.wireframes.home")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.wireframeCart} alt="Cart wireframe" label={t("af.wireframes.cart")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.wireframeCheckout} alt="Checkout wireframe" label={t("af.wireframes.checkout")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.wireframeProgress} alt="Progress wireframe" label={t("af.wireframes.progress")} fontFamily={fontFamily} />
            </div>
          </Section>
        </div>
      </section>

      {/* ── DESIGN PROCESS ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 270)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4">{t("af.process.label")}</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.process.h2")}</h2>
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {[
                t("af.process.step1"),
                t("af.process.step2"),
                t("af.process.step3"),
                t("af.process.step4"),
                t("af.process.step5"),
                t("af.process.step6"),
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.45 0.12 270)", color: "oklch(0.98 0.005 230)", fontFamily, fontWeight: fw }}>{step}</div>
                  {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 230)" }} />}
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── HI-FI SCREENS: SPLASH + ONBOARDING ── */}
      <section className="py-16">
        <div className="container">
          <Section>
            <p className="section-num mb-4">{t("af.hifi.label")}</p>
            <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.hifi.splash.h2")}</h2>
            <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
              {t("af.hifi.splash.p")}
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-10">
              <PhoneFrame src={IMG.splash} alt="AuraFit Splash Screen" label={t("af.hifi.splash.label")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.onboarding1} alt="Onboarding 1" label={t("af.hifi.ob1.label")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.onboarding2} alt="Onboarding 2" label={t("af.hifi.ob2.label")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.onboarding3} alt="Onboarding 3" label={t("af.hifi.ob3.label")} fontFamily={fontFamily} />
            </div>
            <div className="rounded-xl p-6" style={{ background: "oklch(0.96 0.008 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
                {t("af.onboarding.note")}
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* ── HI-FI SCREENS: WELCOME + STEPS ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 270)" }}>
        <div className="container">
          <Section>
            <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.hifi.welcome.h2")}</h2>
            <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
              {t("af.hifi.welcome.p")}
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-10">
              <PhoneFrame src={IMG.welcome} alt="Welcome Screen" label={t("af.hifi.welcome.label")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.step1} alt="Step 1 — Sign Up" label={t("af.hifi.step1.label")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.step2} alt="Step 2 — Personalization Quiz" label={t("af.hifi.step2.label")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.step3} alt="Step 3 — Mode Assignment" label={t("af.hifi.step3.label")} fontFamily={fontFamily} />
            </div>
            <div className="rounded-xl p-6" style={{ background: "oklch(0.93 0.012 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
                {t("af.welcome.note")}
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* ── HI-FI SCREENS: DASHBOARD + PROGRESS ── */}
      <section className="py-16">
        <div className="container">
          <Section>
            <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.hifi.dashboard.h2")}</h2>
            <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
              {t("af.hifi.dashboard.p")}
            </p>
            <div className="flex flex-wrap gap-8 justify-center mb-10">
              <PhoneFrame src={IMG.dashboard} alt="AuraFit Dashboard" label={t("af.hifi.dashboard.label")} fontFamily={fontFamily} />
              <PhoneFrame src={IMG.progress} alt="Weekly Progress" label={t("af.hifi.progress.label")} fontFamily={fontFamily} />
            </div>
            <div className="rounded-xl p-6" style={{ background: "oklch(0.96 0.008 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-lg font-bold shrink-0" style={{ color: "oklch(0.45 0.12 270)", fontFamily }}>1.</span>
                <h3 className="text-base font-semibold" style={{ color: "oklch(0.2 0.04 230)", fontFamily, fontWeight: fw }}>{t("af.tracking.title")}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw, paddingLeft: isRTL ? 0 : "1.75rem", paddingRight: isRTL ? "1.75rem" : 0 }}>
                {t("af.tracking.p")}
              </p>
              <div className="mt-5 pt-5" style={{ borderTop: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-lg font-bold shrink-0" style={{ color: "oklch(0.45 0.12 270)", fontFamily }}>2.</span>
                  <h3 className="text-base font-semibold" style={{ color: "oklch(0.2 0.04 230)", fontFamily, fontWeight: fw }}>{t("af.ai.title")}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw, paddingLeft: isRTL ? 0 : "1.75rem", paddingRight: isRTL ? "1.75rem" : 0 }}>
                  {t("af.ai.p")}
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ── PERSONA ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 270)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4">{t("af.persona.label")}</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.persona.h2")}</h2>
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.45 0.12 270)" }}>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold" style={{ background: "oklch(0.98 0.005 230 / 0.15)", color: "oklch(0.98 0.005 230)" }}>S</div>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: "oklch(0.98 0.005 230)", fontFamily, fontWeight: fw }}>{t("af.persona.name")}</h3>
                  <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.7)", fontFamily, fontWeight: fw }}>{t("af.persona.role")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily, fontWeight: fw }}>{t("af.persona.goals.label")}</p>
                  <ul className="space-y-2">
                    {[t("af.persona.goal1"), t("af.persona.goal2"), t("af.persona.goal3")].map((g) => (
                      <li key={g} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 230 / 0.5)" }} />
                        <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily, fontWeight: fw }}>{g}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily, fontWeight: fw }}>{t("af.persona.pain.label")}</p>
                  <ul className="space-y-2">
                    {[t("af.persona.pain1"), t("af.persona.pain2"), t("af.persona.pain3")].map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 230 / 0.5)" }} />
                        <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily, fontWeight: fw }}>{p}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ── BEHAVIORAL FRAMEWORK ── */}
      <section className="py-16">
        <div className="container">
          <Section>
            <p className="section-num mb-4">{t("af.framework.label")}</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.framework.h2")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "01", title: t("af.framework.1.title"), desc: t("af.framework.1.desc") },
                { num: "02", title: t("af.framework.2.title"), desc: t("af.framework.2.desc") },
                { num: "03", title: t("af.framework.3.title"), desc: t("af.framework.3.desc") },
                { num: "04", title: t("af.framework.4.title"), desc: t("af.framework.4.desc") },
              ].map((f) => (
                <div key={f.num} className="rounded-2xl p-6" style={{ background: "oklch(0.93 0.015 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
                  <p className="text-3xl font-light mb-3" style={{ color: "oklch(0.45 0.12 270 / 0.3)", fontFamily: serifFamily }}>{f.num}</p>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily, fontWeight: fw }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily, fontWeight: fw }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="py-16">
        <div className="container">
          <Section>
            <p className="section-num mb-4">{t("af.impact.label")}</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.impact.h2")}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                t("af.impact.1"),
                t("af.impact.2"),
                t("af.impact.3"),
                t("af.impact.4"),
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl p-5" style={{ background: "oklch(0.96 0.008 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
                  <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: "oklch(0.45 0.12 270)" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.35 0.06 230)", fontFamily, fontWeight: fw }}>{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
              {t("af.impact.closing")}
            </p>
          </Section>
        </div>
      </section>

      {/* ── OUTCOME + PROTOTYPE ── */}
      <section className="py-16" style={{ background: "oklch(0.93 0.015 270)" }}>
        <div className="container">
          <Section>
            <div className="rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="circle-decor" style={{ width: 350, height: 350, top: -100, right: -80, opacity: 0.3 }} />
              <h2 className="text-3xl lg:text-4xl mb-6 relative z-10" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>
                {t("af.outcome.quote")}
              </h2>
              <p className="text-base leading-relaxed max-w-2xl mx-auto mb-8 relative z-10" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
                {t("af.outcome.p")}
              </p>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="relative z-10">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.45 0.12 270)", color: "oklch(0.98 0.005 230)", fontFamily, fontWeight: fw }}>
                  <ExternalLink size={14} /> {t("af.outcome.cta")}
                </button>
              </a>
            </div>
          </Section>
        </div>
      </section>

      {/* ── AFTER LAUNCH ── */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="rounded-2xl p-8 lg:p-12" style={{ background: "oklch(0.93 0.015 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
              <p className="section-num mb-4">{t("af.afterlaunch.label")}</p>
              <h2 className="text-3xl mb-6" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("af.afterlaunch.h2")}</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>{t("af.afterlaunch.p1")}</p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>{t("af.afterlaunch.p2")}</p>
            </div>
          </Section>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 270)" }}>
        <div className="container flex justify-between items-center">
          <Link href="/"><button className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily, fontWeight: fw }}><ArrowLeft size={14} /> {t("af.nav.all")}</button></Link>
          <Link href="/traveltales"><button className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.35 0.09 230)", fontFamily, fontWeight: fw }}>{t("af.nav.next")} <ArrowRight size={14} /></button></Link>
        </div>
      </section>

    </Layout>
  );
}
