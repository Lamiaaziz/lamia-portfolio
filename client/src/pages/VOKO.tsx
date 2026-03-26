/*
 * VOKO CASE STUDY PAGE — Lamia Portfolio
 * Full case study with real screens: Splash → Onboarding → Welcome → Sign Up → Home → Product Detail → Cart → Checkout → Payment Success
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

// ── CDN image URLs ────────────────────────────────────────────────────────────
const IMG = {
  // Hero / overview
  hifiOverview:   "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/gEEMrpXSzECnHqAi.webp",
  // Moodboard
  moodboard:      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/PzUiXfxIZApHcPBC.webp",
  // Hi-fi flow
  splash:         "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/GunAOhFfQKVvMqnZ.png",
  onboarding1:    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/ogPOCYiVDYYPjqHG.webp",
  onboarding2:    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/wfdyQnsunkJviUVC.webp",
  onboarding3:    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/pkNSFkSzMSMdcXXf.webp",
  welcome:        "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/XsbFuLVqGBdcCAFd.png",
  signup:         "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/NSJPXyOaNLcohGHV.png",
  home:           "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/fTERbQTlfHGSrLGT.webp",
  productDetail:  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/BtWxDNXpnXMMrQIN.webp",
  cart:           "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/ETSmbZhtCIsPwhzr.webp",
  checkout:       "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/NbIhMPnjgUFYRCsh.webp",
  paymentSuccess: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/VMajscanxVRWszys.webp",
  login:          "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/AFvDUukaAzFwqbld.png",
  // Wireframes
  wfHome:         "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/fyQOcztNGVtAabKB.png",
  wfProduct:      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/JUrCoIDWGwkrLTDl.png",
  wfProfile:      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/bcBbclXXUnCayXnu.png",
  wfCheckout:     "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/qywNOXiCDLrrgyXe.png",
  wfFavorites:    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/IzTfYHoJBnIUGaZP.png",
};

// Reusable phone frame wrapper
function PhoneFrame({ src, alt, label }: { src: string; alt: string; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-3xl overflow-hidden shadow-xl" style={{ width: "180px", border: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto block" />
      </div>
      {label && (
        <p className="text-xs text-center font-medium" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{label}</p>
      )}
    </div>
  );
}

export default function VOKO() {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "oklch(0.96 0.018 75)" }}>
        <div className="circle-decor" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.3 }} />
        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} /> Back to Portfolio
            </button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-num" style={{ letterSpacing: "0.2em" }}>PROJECT 03</span>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.55 0.12 75 / 0.12)", color: "oklch(0.42 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}>UX Product Concept</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>VOKO</h1>
              <p className="text-xl mb-6" style={{ color: "oklch(0.42 0.12 75)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Fashion E-commerce Shopping Experience</p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                VOKO is a fashion shopping mobile experience designed to help users discover clothing collections, explore products, and complete purchases through a smooth and intuitive shopping journey.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ label: "Type", value: "UX Concept" }, { label: "Role", value: "UX / Product Designer" }, { label: "Focus", value: "E-commerce" }].map((item) => (
                  <div key={item.label}>
                    <p className="section-num mb-1" style={{ letterSpacing: "0.1em" }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.42 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero — hi-fi overview banner */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "420px", width: "100%" }}>
                <img
                  src={IMG.hifiOverview}
                  alt="VOKO Hi-Fi Overview"
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIBILITIES ─────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-2xl p-8 lg:p-12" style={{ background: "oklch(0.96 0.008 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>RESPONSIBILITIES</p>
            <div className="grid md:grid-cols-4 gap-6">
              {["UX Research Synthesis", "Behavioral Framework Design", "Product Flow Architecture", "UI Interface Design"].map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.42 0.12 75)" }} />
                  <p className="text-sm" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGE & SOLUTION ─────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.96 0.018 75)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
              <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>CHALLENGE</p>
              <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>The Challenge</h2>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                Many fashion shopping apps create friction during product discovery and checkout. Users often struggle with navigating product categories, comparing items, and completing purchases through long or confusing checkout processes.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.42 0.12 75)", color: "oklch(0.98 0.005 230)" }}>
              <p className="section-num mb-3" style={{ letterSpacing: "0.2em", color: "oklch(0.98 0.005 230 / 0.5)" }}>SOLUTION</p>
              <h2 className="text-3xl mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>The Solution</h2>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily: "'DM Sans', sans-serif" }}>
                Design a fashion shopping experience that allows users to discover collections easily, explore product details clearly, add items to cart quickly, and complete checkout with a simple, confident flow — from splash screen to payment confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>DESIGN PROCESS</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Design Process</h2>
          <div className="flex flex-wrap items-center gap-2">
            {["Problem Definition", "Research", "Moodboard", "Wireframes", "Hi-Fi Design", "Prototype"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.42 0.12 75)", color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>{step}</div>
                {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 230)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOODBOARD ────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>MOODBOARD</p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Moodboard</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                The visual direction for VOKO uses an <strong>Orange + White</strong> palette — warm, energetic, and fashion-forward. Orange evokes enthusiasm and action, encouraging users to explore and make purchases. White balances it with clarity and simplicity, ensuring a clean and user-friendly interface.
              </p>
              <div className="flex gap-4 mb-6">
                {[
                  { hex: "#F0BD75", label: "#F0BD75" },
                  { hex: "#F7DEBB", label: "#F7DEBB" },
                  { hex: "#FFFFFF", label: "#FFFFFF" },
                ].map((c) => (
                  <div key={c.hex} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-2xl shadow-sm" style={{ background: c.hex, border: c.hex === "#FFFFFF" ? "1px solid oklch(0.88 0.015 230)" : "none" }} />
                    <p className="text-xs font-mono" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{c.label}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl" style={{ background: "oklch(0.96 0.008 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
                <p className="text-xs mb-1" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>TYPOGRAPHY</p>
                <p className="text-2xl font-bold" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Aa — DM Serif Display</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
              <img
                src={IMG.moodboard}
                alt="VOKO Moodboard"
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSONA ──────────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>PERSONA</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>User Persona</h2>
          <div className="rounded-2xl p-8" style={{ background: "oklch(0.42 0.12 75)" }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-xl font-semibold mb-1" style={{ color: "oklch(0.98 0.005 230)", fontFamily: "'DM Serif Display', serif" }}>Sara, 26</p>
                <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.7)", fontFamily: "'DM Sans', sans-serif" }}>Fashion Enthusiast, Riyadh</p>
              </div>
              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}>GOALS</p>
                <ul className="space-y-2">
                  {["Discover new fashion trends", "Shop quickly on mobile", "Complete checkout without friction"].map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 230 / 0.5)" }} />
                      <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily: "'DM Sans', sans-serif" }}>{g}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}>PAIN POINTS</p>
                <ul className="space-y-2">
                  {["Hard to find specific styles", "Too many steps in checkout", "Unclear size and product details"].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 230 / 0.5)" }} />
                      <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily: "'DM Sans', sans-serif" }}>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WIREFRAMES ───────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>WIREFRAMES</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Wireframes</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
            Low-fidelity wireframes mapped the complete shopping flow — from product discovery and browsing through cart management, checkout, and profile management.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { src: IMG.wfHome,      label: "Home" },
              { src: IMG.wfProduct,   label: "Product Detail" },
              { src: IMG.wfFavorites, label: "Favorites" },
              { src: IMG.wfCheckout,  label: "Checkout" },
              { src: IMG.wfProfile,   label: "Profile" },
            ].map((s) => (
              <PhoneFrame key={s.label} src={s.src} alt={`Wireframe — ${s.label}`} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HI-FI: ONBOARDING FLOW ───────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>HI-FI SCREENS</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Onboarding Flow</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
            The app opens with a bold splash screen, followed by three onboarding slides that introduce the VOKO brand proposition — guiding new users into the fashion experience.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <PhoneFrame src={IMG.splash}      alt="Splash Screen" label="Splash" />
            <PhoneFrame src={IMG.onboarding1} alt="Onboarding 1"  label="Find Your Style" />
            <PhoneFrame src={IMG.onboarding2} alt="Onboarding 2"  label="Wear it First" />
            <PhoneFrame src={IMG.onboarding3} alt="Onboarding 3"  label="Your Way" />
          </div>
        </div>
      </section>

      {/* ── ACCOUNT SETUP ────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>ACCOUNT SETUP</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Account Setup</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
            After onboarding, users are presented with a Welcome screen to either log in to an existing account or create a new one. The Login screen supports email/password sign-in with Google and Facebook social login options, while the Sign Up screen collects name, email, phone, and password to create a new account.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <PhoneFrame src={IMG.welcome} alt="Welcome Screen" label="Welcome" />
            <PhoneFrame src={IMG.login}   alt="Login Screen"   label="Login" />
            <PhoneFrame src={IMG.signup}  alt="Sign Up Screen" label="Sign Up" />
          </div>
        </div>
      </section>

      {/* ── HI-FI: SHOPPING FLOW ─────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>HI-FI SCREENS</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Shopping Flow</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
            From the home feed to product detail, cart, checkout with Mada Card payment, and a clear payment success confirmation — the full purchase journey in five screens.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <PhoneFrame src={IMG.home}           alt="Home Screen"        label="Home" />
            <PhoneFrame src={IMG.productDetail}  alt="Product Detail"     label="Product Detail" />
            <PhoneFrame src={IMG.cart}           alt="My Cart"            label="My Cart" />
            <PhoneFrame src={IMG.checkout}       alt="Checkout"           label="Checkout" />
            <PhoneFrame src={IMG.paymentSuccess} alt="Payment Successful" label="Payment Successful" />
          </div>
        </div>
      </section>

      {/* ── USER FLOW ────────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>USER FLOW</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Shopping Experience Flow</h2>
          <div className="flex flex-wrap items-center gap-2">
            {["Splash", "Onboarding", "Welcome", "Sign Up", "Home", "Product Detail", "Cart", "Checkout", "Payment Success"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.42 0.12 75)", color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>{step}</div>
                {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 230)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOME ──────────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.018 75)" }}>
        <div className="container">
          <div className="rounded-2xl p-10 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl mb-6" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
              "VOKO makes fashion discovery and purchasing effortless."
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
              The design improves product discovery and simplifies the purchasing process, allowing users to browse fashion collections and complete their orders through a clear and efficient shopping flow — from first launch to payment confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION ───────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container flex justify-between items-center">
          <Link href="/traveltales">
            <button className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} /> Previous: Travel Tales
            </button>
          </Link>
          <Link href="/webdesign">
            <button className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.35 0.09 230)", fontFamily: "'DM Sans', sans-serif" }}>
              Next: Web Design <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>

    </Layout>
  );
}
