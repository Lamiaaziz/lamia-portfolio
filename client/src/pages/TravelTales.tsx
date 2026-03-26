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
  // Wireframes — all 6 screens
  wireframeOnboarding: "/traveltales/wireframe-onboarding.webp",
  wireframeHomepage: "/traveltales/wireframe-homepage.webp",
  wireframeRegisterPlaces: "/traveltales/wireframe-register-places.webp",
  wireframePlaceDetail: "/traveltales/wireframe-place-detail.webp",
  wireframeBooking: "/traveltales/wireframe-booking.webp",
};

function PhoneFrame({ src, alt, label }: { src: string; alt: string; label?: string }) {
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
        <p className="text-xs text-center font-medium" style={{ color: "oklch(0.52 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>
          {label}
        </p>
      )}
    </div>
  );
}

export default function TravelTales() {
  const { t, isRTL } = useLanguage();
  const fontFamily = isRTL ? "'IBM Plex Arabic', 'Noto Sans Arabic', sans-serif" : "'DM Sans', sans-serif";
  const serifFamily = isRTL ? "'IBM Plex Arabic', 'Noto Sans Arabic', sans-serif" : "'DM Serif Display', serif";
  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "oklch(0.93 0.015 200)" }}>
        <div className="circle-decor" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.3 }} />
        <div className="circle-decor" style={{ width: 280, height: 280, bottom: -80, left: "30%", opacity: 0.2 }} />
        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} /> {t("tt.back")}
            </button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-num" style={{ letterSpacing: "0.2em", fontFamily }}>PROJECT 02</span>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.45 0.10 200 / 0.12)", color: "oklch(0.35 0.10 200)", fontFamily }}>
                  {t("tt.badge")}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: serifFamily }}>
                {t("tt.title")}
              </h1>
              <p className="text-xl mb-6" style={{ color: "oklch(0.35 0.10 200)", fontFamily, fontWeight: 500 }}>
                {t("tt.subtitle")}
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.04 200)", fontFamily }}>
                {t("tt.intro")}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ label: t("tt.meta.timeline"), value: t("tt.meta.timeline.val") }, { label: t("tt.meta.role"), value: t("tt.meta.role.val") }, { label: t("tt.meta.market"), value: t("tt.meta.market.val") }].map((item) => (
                  <div key={item.label}>
                    <p className="section-num mb-1" style={{ letterSpacing: "0.1em" }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.35 0.10 200)", fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
                  </div>
                ))}
              </div>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)", fontFamily: "'DM Sans', sans-serif" }}>
                  <ExternalLink size={14} /> View Prototype
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
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>RESPONSIBILITIES</p>
            <div className="grid md:grid-cols-4 gap-6">
              {["UX Research & Discovery", "Information Architecture", "Booking Flow Design", "UI Interface Design"].map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.45 0.10 200)" }} />
                  <p className="text-sm" style={{ color: "oklch(0.42 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>{r}</p>
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
              <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>CHALLENGE</p>
              <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>The Challenge</h2>
              <ul className="space-y-3">
                {["Fragmented travel planning across multiple apps", "Lack of personalised destination discovery", "Complex and friction-heavy booking experiences"].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.45 0.10 200)" }} />
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>{p}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)" }}>
              <p className="section-num mb-3" style={{ letterSpacing: "0.2em", color: "oklch(0.98 0.005 200 / 0.5)" }}>SOLUTION</p>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>The Solution</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.98 0.005 200 / 0.8)", fontFamily: "'DM Sans', sans-serif" }}>
                A unified travel app that combines smart destination discovery, personalised recommendations, and a streamlined booking flow — making travel planning effortless from inspiration to confirmation.
              </p>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[{ label: "Research", val: "User Research" }, { label: "Design", val: "UI Design" }, { label: "Type", val: "App" }].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "oklch(0.98 0.005 200 / 0.1)" }}>
                    <p className="text-xs mb-1" style={{ color: "oklch(0.98 0.005 200 / 0.5)", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.98 0.005 200)", fontFamily: "'DM Sans', sans-serif" }}>{s.val}</p>
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
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>MOODBOARD</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>Moodboard</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={IMG.moodboard} alt="Travel Tales Moodboard — color palette and visual references" loading="lazy" decoding="async" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* ── WIREFRAMES ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>WIREFRAMES</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>Wireframes</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>
            Low-fidelity wireframes mapped the complete user journey — from onboarding and account setup through destination discovery, place detail, and the full booking flow.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.wireframeOnboarding} alt="Onboarding wireframe" label="Onboarding" />
            <PhoneFrame src={IMG.wireframeRegisterPlaces} alt="Register favourite places wireframe" label="Favourite Places" />
            <PhoneFrame src={IMG.wireframeHomepage} alt="Homepage wireframe" label="Homepage" />
            <PhoneFrame src={IMG.wireframePlaceDetail} alt="Place detail wireframe" label="Place Detail" />
            <PhoneFrame src={IMG.wireframeBooking} alt="Booking wireframe" label="Booking" />
          </div>
        </div>
      </section>

      {/* ── DESIGN PROCESS ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>DESIGN PROCESS</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>Design Process</h2>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {["Problem Definition", "Research", "Moodboard", "Wireframes", "Hi-Fi Design", "Prototype"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)", fontFamily: "'DM Sans', sans-serif" }}>{step}</div>
                {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 200)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HI-FI: SPLASH + ONBOARDING ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>HI-FI SCREENS</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>Splash & Onboarding</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>
            The app opens with a bold splash screen, followed by two onboarding screens that introduce Travel Tales' core value proposition — inspiring users to explore and plan their next adventure.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.splash} alt="Travel Tales Splash Screen" label="Splash Screen" />
            <PhoneFrame src={IMG.onboarding1} alt="Onboarding 1" label="Onboarding 1" />
            <PhoneFrame src={IMG.onboarding2} alt="Onboarding 2" label="Onboarding 2" />
          </div>
        </div>
      </section>

      {/* ── HI-FI: ACCOUNT SETUP ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container">
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>Account Setup</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>
            Users sign in or create an account, then personalise their experience by selecting their favourite travel destinations — setting the foundation for smart recommendations throughout the app.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.login} alt="Login Screen" label="Login" />
          </div>
        </div>
      </section>

      {/* ── HI-FI: DISCOVERY ── */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>Destination Discovery</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>
            The homepage surfaces personalised destination cards, trending places, and curated experiences. Tapping a destination opens a rich place detail view with photos, reviews, and booking options.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.homepage} alt="Travel Tales Homepage" label="Homepage" />
            <PhoneFrame src={IMG.placeDetail} alt="Place Detail Screen" label="Place Detail" />
          </div>
        </div>
      </section>

      {/* ── HI-FI: BOOKING FLOW ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container">
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>Booking Flow</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>
            The booking flow is designed to minimise friction — users select dates on a calendar, choose guest count and room type, review their booking summary, and receive a confirmation screen. Four clear steps from intent to confirmation.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <PhoneFrame src={IMG.booking1} alt="Booking Step 1 — Calendar" label="Step 1 — Dates" />
            <PhoneFrame src={IMG.booking2} alt="Booking Step 2 — Guests" label="Step 2 — Guests" />
            <PhoneFrame src={IMG.booking3} alt="Booking Step 3 — Summary" label="Step 3 — Summary" />
            <PhoneFrame src={IMG.bookingSuccess} alt="Booking Success" label="Booking Confirmed" />
          </div>
        </div>
      </section>

      {/* ── PERSONA ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>PERSONA</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>User Persona</h2>
          <div className="rounded-2xl p-8" style={{ background: "oklch(0.35 0.10 200)" }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold" style={{ background: "oklch(0.98 0.005 200 / 0.15)", color: "oklch(0.98 0.005 200)" }}>N</div>
                <h3 className="text-xl font-semibold mb-1" style={{ color: "oklch(0.98 0.005 200)", fontFamily: "'DM Sans', sans-serif" }}>Nora, 26</h3>
                <p className="text-sm" style={{ color: "oklch(0.98 0.005 200 / 0.7)", fontFamily: "'DM Sans', sans-serif" }}>Content Creator, Jeddah</p>
              </div>
              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 200 / 0.5)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}>GOALS</p>
                <ul className="space-y-2">
                  {["Discover unique travel destinations", "Plan and book trips in one place", "Share travel experiences with followers"].map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 200 / 0.5)" }} />
                      <p className="text-sm" style={{ color: "oklch(0.98 0.005 200 / 0.8)", fontFamily: "'DM Sans', sans-serif" }}>{g}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 200 / 0.5)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}>PAIN POINTS</p>
                <ul className="space-y-2">
                  {["Switching between multiple apps to plan", "Lack of personalised recommendations", "Complicated booking processes"].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 200 / 0.5)" }} />
                      <p className="text-sm" style={{ color: "oklch(0.98 0.005 200 / 0.8)", fontFamily: "'DM Sans', sans-serif" }}>{p}</p>
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
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>USER FLOW</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>User Flow</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Splash", "Onboarding", "Login / Register", "Select Favourites", "Homepage", "Place Detail", "Booking", "Confirmation"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-full text-sm font-medium text-center" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)", fontFamily: "'DM Sans', sans-serif" }}>{step}</div>
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
            <h2 className="text-3xl lg:text-4xl mb-6 relative z-10" style={{ color: "oklch(0.2 0.04 200)", fontFamily: "'DM Serif Display', serif" }}>
              "Travel Tales turns fragmented planning into one seamless journey."
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto mb-8 relative z-10" style={{ color: "oklch(0.42 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>
              By unifying discovery, personalisation, and booking into a single cohesive experience, Travel Tales removes the friction from travel planning — letting users focus on the excitement of the journey ahead.
            </p>
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="relative z-10">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.35 0.10 200)", color: "oklch(0.98 0.005 200)", fontFamily: "'DM Sans', sans-serif" }}>
                <ExternalLink size={14} /> View Full Prototype
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 200)" }}>
        <div className="container flex justify-between items-center">
          <Link href="/aurafit">
            <button className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 200)", fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} /> Previous: AuraFit
            </button>
          </Link>
          <Link href="/voko">
            <button className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.35 0.09 200)", fontFamily: "'DM Sans', sans-serif" }}>
              Next: VOKO <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>

    </Layout>
  );
}
