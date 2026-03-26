/*
 * TRAVEL TALES CASE STUDY PAGE — Lamia Portfolio
 * Real screens: Splash → Wireframes → Onboarding (2) → Login → Register →
 *               Homepage → Place Detail → Booking Flow (3) → Booking Success
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const IMG = {
  hifiShowcase: "/traveltales/hifi-showcase.webp",
  splash: "/traveltales/splash.webp",
  onboarding1: "/traveltales/onboarding-1.webp",
  onboarding2: "/traveltales/onboarding-2.webp",
  login: "/traveltales/hifi-login.webp",
  homepage: "/traveltales/hifi-homepage.webp",
  placeDetail: "/traveltales/hifi-place-detail.webp",
  booking1: "/traveltales/booking-1.webp",
  booking2: "/traveltales/booking-2.webp",
  booking3: "/traveltales/booking-3.webp",
  bookingSuccess: "/traveltales/booking-success.webp",
  moodboard: "/traveltales/moodboard.webp",
  wireframeOnboarding: "/traveltales/wireframe-onboarding.webp",
  wireframeHomepage: "/traveltales/wireframe-homepage.webp",
  wireframeRegisterPlaces: "/traveltales/wireframe-register-places.webp",
  wireframePlaceDetail: "/traveltales/wireframe-place-detail.webp",
  wireframeBooking: "/traveltales/wireframe-booking.webp",
};

function PhoneFrame({ src, alt, label, fontFamily }: { src: string; alt: string; label?: string; fontFamily?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="rounded-3xl overflow-hidden shadow-xl"
        style={{
          width: "180px",
          border: "2px solid oklch(0.88 0.015 200 / 0.4)",
          background: "oklch(0.12 0.01 200)",
        }}
      >
        <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto block" />
      </div>
      {label && (
        <p className="text-xs text-center font-medium" style={{ color: "oklch(0.52 0.04 200)", fontFamily: fontFamily || "'DM Sans', sans-serif" }}>
          {label}
        </p>
      )}
    </div>
  );
}

export default function TravelTales() {
  const { t, isRTL } = useLanguage();
  const fontFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Sans', sans-serif";
  const serifFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Serif Display', serif";
  const fw: number | undefined = isRTL ? 600 : undefined;

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "oklch(0.93 0.015 200)" }}>
        <div className="circle-decor" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.3 }} />
        <div className="circle-decor" style={{ width: 280, height: 280, bottom: -80, left: "30%", opacity: 0.2 }} />
        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 200)", fontFamily, fontWeight: fw }}>
              <ArrowLeft size={14} /> {t("tt.back")}
            </button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-num" style={{ fontFamily }}>PROJECT 02</span>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.45 0.10 200 / 0.12)", color: "oklch(0.35 0.10 200)", fontFamily, fontWeight: fw }}>
                  {t("tt.badge")}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>
                {t("tt.title")}
              </h1>
              <p className="text-xl mb-6" style={{ color: "oklch(0.35 0.10 200)", fontFamily, fontWeight: fw ?? 500 }}>
                {t("tt.subtitle")}
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.04 200)", fontFamily, fontWeight: fw }}>
                {t("tt.intro")}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: t("tt.meta.timeline"), value: t("tt.meta.timeline.val") },
                  { label: t("tt.meta.role"), value: t("tt.meta.role.val") },
                  { label: t("tt.meta.market"), value: t("tt.meta.market.val") },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="section-num mb-1">{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.35 0.10 200)", fontFamily, fontWeight: fw }}>{item.value}</p>
                  </div>
                ))}
              </div>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)", fontFamily, fontWeight: fw }}>
                  <ExternalLink size={14} /> {t("tt.prototype")}
                </button>
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "420px", width: "100%" }}>
                <img src={IMG.hifiShowcase} alt="Travel Tales Hi-Fi Screens" width={420} loading="eager" decoding="async" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIBILITIES ── */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-2xl p-8 lg:p-12" style={{ background: "oklch(0.96 0.008 200)", border: "1px solid oklch(0.88 0.015 200 / 0.5)" }}>
            <p className="section-num mb-4">{t("tt.resp.label")}</p>
            <div className="grid md:grid-cols-4 gap-6">
              {[t("tt.resp.1"), t("tt.resp.2"), t("tt.resp.3"), t("tt.resp.4")].map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.45 0.10 200)" }} />
                  <p className="text-sm" style={{ color: "oklch(0.42 0.04 200)", fontFamily, fontWeight: fw }}>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGE & SOLUTION ── */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.93 0.015 200)", border: "1px solid oklch(0.88 0.015 200 / 0.5)" }}>
              <p className="section-num mb-3">{t("tt.challenge.label")}</p>
              <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.challenge.h2")}</h2>
              <ul className="space-y-3">
                {[t("tt.challenge.1"), t("tt.challenge.2"), t("tt.challenge.3")].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.45 0.10 200)" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 200)", fontFamily, fontWeight: fw }}>{p}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)" }}>
              <p className="section-num mb-3" style={{ color: "oklch(0.98 0.005 200 / 0.5)" }}>{t("tt.solution.label")}</p>
              <h2 className="text-3xl mb-4" style={{ fontFamily: serifFamily, fontWeight: fw }}>{t("tt.solution.h2")}</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.98 0.005 200 / 0.8)", fontFamily, fontWeight: fw }}>
                {t("tt.solution.p")}
              </p>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: t("tt.solution.research"), val: t("tt.solution.research.val") },
                  { label: t("tt.solution.design"), val: t("tt.solution.design.val") },
                  { label: t("tt.solution.type"), val: t("tt.solution.type.val") },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "oklch(0.98 0.005 200 / 0.1)" }}>
                    <p className="text-xs mb-1" style={{ color: "oklch(0.98 0.005 200 / 0.5)", fontFamily, fontWeight: fw }}>{s.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.98 0.005 200)", fontFamily, fontWeight: fw }}>{s.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOODBOARD ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container">
          <p className="section-num mb-4">{t("tt.moodboard.label")}</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.moodboard.h2")}</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={IMG.moodboard} alt="Travel Tales Moodboard" loading="lazy" decoding="async" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* ── WIREFRAMES ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4">{t("tt.wireframes.label")}</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.wireframes.h2")}</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily, fontWeight: fw }}>
            {t("tt.wireframes.p")}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.wireframeOnboarding} alt="Onboarding wireframe" label={t("tt.wireframes.ob")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.wireframeRegisterPlaces} alt="Register favourite places wireframe" label={t("tt.wireframes.fav")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.wireframeHomepage} alt="Homepage wireframe" label={t("tt.wireframes.home")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.wireframePlaceDetail} alt="Place detail wireframe" label={t("tt.wireframes.place")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.wireframeBooking} alt="Booking wireframe" label={t("tt.wireframes.booking")} fontFamily={fontFamily} />
          </div>
        </div>
      </section>

      {/* ── DESIGN PROCESS ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container">
          <p className="section-num mb-4">{t("tt.process.label")}</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.process.h2")}</h2>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {[
              t("tt.process.step1"),
              t("tt.process.step2"),
              t("tt.process.step3"),
              t("tt.process.step4"),
              t("tt.process.step5"),
              t("tt.process.step6"),
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)", fontFamily, fontWeight: fw }}>{step}</div>
                {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 200)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HI-FI: SPLASH + ONBOARDING ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4">{t("tt.hifi.label")}</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.hifi.splash.h2")}</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily, fontWeight: fw }}>
            {t("tt.hifi.splash.p")}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.splash} alt="Travel Tales Splash Screen" label={t("tt.hifi.splash.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.onboarding1} alt="Onboarding 1" label={t("tt.hifi.ob1.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.onboarding2} alt="Onboarding 2" label={t("tt.hifi.ob2.label")} fontFamily={fontFamily} />
          </div>
        </div>
      </section>

      {/* ── HI-FI: ACCOUNT SETUP ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container">
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.hifi.account.h2")}</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily, fontWeight: fw }}>
            {t("tt.hifi.account.p")}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.login} alt="Login Screen" label={t("tt.hifi.login.label")} fontFamily={fontFamily} />
          </div>
        </div>
      </section>

      {/* ── HI-FI: DISCOVERY ── */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.hifi.discovery.h2")}</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily, fontWeight: fw }}>
            {t("tt.hifi.discovery.p")}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.homepage} alt="Travel Tales Homepage" label={t("tt.hifi.home.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.placeDetail} alt="Place Detail Screen" label={t("tt.hifi.place.label")} fontFamily={fontFamily} />
          </div>
        </div>
      </section>

      {/* ── HI-FI: BOOKING FLOW ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container">
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.hifi.booking.h2")}</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily, fontWeight: fw }}>
            {t("tt.hifi.booking.p")}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.booking1} alt="Booking Step 1 — Calendar" label={t("tt.hifi.booking1.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.booking2} alt="Booking Step 2 — Guests" label={t("tt.hifi.booking2.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.booking3} alt="Booking Step 3 — Summary" label={t("tt.hifi.booking3.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.bookingSuccess} alt="Booking Success" label={t("tt.hifi.confirm.label")} fontFamily={fontFamily} />
          </div>
        </div>
      </section>

      {/* ── PERSONA ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4">{t("tt.persona.label")}</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.persona.h2")}</h2>
          <div className="rounded-2xl p-8" style={{ background: "oklch(0.35 0.10 200)" }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold" style={{ background: "oklch(0.98 0.005 200 / 0.15)", color: "oklch(0.98 0.005 200)" }}>N</div>
                <h3 className="text-xl font-semibold mb-1" style={{ color: "oklch(0.98 0.005 200)", fontFamily, fontWeight: fw }}>{t("tt.persona.name")}</h3>
                <p className="text-sm" style={{ color: "oklch(0.98 0.005 200 / 0.7)", fontFamily, fontWeight: fw }}>{t("tt.persona.role")}</p>
              </div>
              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 200 / 0.5)", fontFamily, fontWeight: fw }}>{t("tt.persona.goals.label")}</p>
                <ul className="space-y-2">
                  {[t("tt.persona.goal1"), t("tt.persona.goal2"), t("tt.persona.goal3")].map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 200 / 0.5)" }} />
                      <p className="text-sm" style={{ color: "oklch(0.98 0.005 200 / 0.8)", fontFamily, fontWeight: fw }}>{g}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 200 / 0.5)", fontFamily, fontWeight: fw }}>{t("tt.persona.pain.label")}</p>
                <ul className="space-y-2">
                  {[t("tt.persona.pain1"), t("tt.persona.pain2"), t("tt.persona.pain3")].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 200 / 0.5)" }} />
                      <p className="text-sm" style={{ color: "oklch(0.98 0.005 200 / 0.8)", fontFamily, fontWeight: fw }}>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USER FLOW ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container">
          <p className="section-num mb-4">{t("tt.userflow.label")}</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>{t("tt.userflow.h2")}</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              t("tt.flow.splash"),
              t("tt.flow.onboarding"),
              t("tt.flow.login"),
              t("tt.flow.fav"),
              t("tt.flow.home"),
              t("tt.flow.place"),
              t("tt.flow.booking"),
              t("tt.flow.confirm"),
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-full text-sm font-medium text-center" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)", fontFamily, fontWeight: fw }}>{step}</div>
                {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 200)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOME ── */}
      <section className="py-16" style={{ background: "oklch(0.93 0.015 200)" }}>
        <div className="container">
          <div className="rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="circle-decor" style={{ width: 350, height: 350, top: -100, right: -80, opacity: 0.3 }} />
            <h2 className="text-3xl lg:text-4xl mb-6 relative z-10" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily, fontWeight: fw }}>
              {t("tt.outcome.quote")}
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto mb-8 relative z-10" style={{ color: "oklch(0.42 0.04 200)", fontFamily, fontWeight: fw }}>
              {t("tt.outcome.p")}
            </p>
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="relative z-10">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)", fontFamily, fontWeight: fw }}>
                <ExternalLink size={14} /> {t("tt.outcome.cta")}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container flex justify-between items-center">
          <Link href="/aurafit">
            <button className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 200)", fontFamily, fontWeight: fw }}>
              <ArrowLeft size={14} /> {t("tt.nav.prev")}
            </button>
          </Link>
          <Link href="/voko">
            <button className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.35 0.09 200)", fontFamily, fontWeight: fw }}>
              {t("tt.nav.next")} <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>

    </Layout>
  );
}
