/*
 * VOKO CASE STUDY PAGE — Lamia Portfolio
 * Full case study with real screens: Splash → Onboarding → Welcome → Sign Up → Home → Product Detail → Cart → Checkout → Payment Success
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const IMG = {
  hifiOverview:   "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/gEEMrpXSzECnHqAi.webp",
  moodboard:      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/PzUiXfxIZApHcPBC.webp",
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
  wfHome:         "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/fyQOcztNGVtAabKB.png",
  wfProduct:      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/JUrCoIDWGwkrLTDl.png",
  wfProfile:      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/bcBbclXXUnCayXnu.png",
  wfCheckout:     "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/qywNOXiCDLrrgyXe.png",
  wfFavorites:    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/IzTfYHoJBnIUGaZP.png",
};

function PhoneFrame({ src, alt, label, fontFamily }: { src: string; alt: string; label?: string; fontFamily?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-3xl overflow-hidden shadow-xl" style={{ width: "180px", border: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
        <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto block" />
      </div>
      {label && (
        <p className="text-xs text-center font-medium" style={{ color: "oklch(0.52 0.04 230)", fontFamily: fontFamily || "'DM Sans', sans-serif" }}>{label}</p>
      )}
    </div>
  );
}

export default function VOKO() {
  const { t, isRTL } = useLanguage();
  const fontFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Sans', sans-serif";
  const serifFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Serif Display', serif";
  const fw: number | undefined = isRTL ? 600 : undefined;

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "oklch(0.96 0.018 75)" }}>
        <div className="circle-decor" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.3 }} />
        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily, fontWeight: fw }}>
              <ArrowLeft size={14} /> {t("voko.back")}
            </button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-num" style={{ fontFamily }}>PROJECT 03</span>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.55 0.12 75 / 0.12)", color: "oklch(0.42 0.12 75)", fontFamily, fontWeight: fw }}>{t("voko.badge")}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>VOKO</h1>
              <p className="text-xl mb-6" style={{ color: "oklch(0.42 0.12 75)", fontFamily, fontWeight: fw ?? 500 }}>{t("voko.subtitle")}</p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
                {t("voko.intro")}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: t("voko.meta.type"), value: t("voko.meta.type.val") },
                  { label: t("voko.meta.role"), value: t("voko.meta.role.val") },
                  { label: t("voko.meta.focus"), value: t("voko.meta.focus.val") },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="section-num mb-1">{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.42 0.12 75)", fontFamily, fontWeight: fw }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "420px", width: "100%" }}>
                <img src={IMG.hifiOverview} alt="VOKO Hi-Fi Overview" loading="eager" decoding="async" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIBILITIES ── */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-2xl p-8 lg:p-12" style={{ background: "oklch(0.96 0.008 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
            <p className="section-num mb-4">{t("voko.resp.label")}</p>
            <div className="grid md:grid-cols-4 gap-6">
              {[t("voko.resp.1"), t("voko.resp.2"), t("voko.resp.3"), t("voko.resp.4")].map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.42 0.12 75)" }} />
                  <p className="text-sm" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>{r}</p>
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
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.96 0.018 75)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
              <p className="section-num mb-3">{t("voko.challenge.label")}</p>
              <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.challenge.h2")}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
                {t("voko.challenge.p")}
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.42 0.12 75)", color: "oklch(0.98 0.005 230)" }}>
              <p className="section-num mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)" }}>{t("voko.solution.label")}</p>
              <h2 className="text-3xl mb-4" style={{ fontFamily: serifFamily, fontWeight: fw }}>{t("voko.solution.h2")}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily, fontWeight: fw }}>
                {t("voko.solution.p")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN PROCESS ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <p className="section-num mb-4">{t("voko.process.label")}</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.process.h2")}</h2>
          <div className="flex flex-wrap items-center gap-2">
            {[
              t("voko.process.step1"),
              t("voko.process.step2"),
              t("voko.process.step3"),
              t("voko.process.step4"),
              t("voko.process.step5"),
              t("voko.process.step6"),
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.42 0.12 75)", color: "oklch(0.98 0.005 230)", fontFamily, fontWeight: fw }}>{step}</div>
                {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 230)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOODBOARD ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4">{t("voko.moodboard.label")}</p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.moodboard.h2")}</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
                {t("voko.moodboard.p")}
              </p>
              <div className="flex gap-4 mb-6">
                {[
                  { hex: "#F0BD75", label: "#F0BD75" },
                  { hex: "#F7DEBB", label: "#F7DEBB" },
                  { hex: "#FFFFFF", label: "#FFFFFF" },
                ].map((c) => (
                  <div key={c.hex} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-2xl shadow-sm" style={{ background: c.hex, border: c.hex === "#FFFFFF" ? "1px solid oklch(0.88 0.015 230)" : "none" }} />
                    <p className="text-xs font-mono" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>{c.label}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl" style={{ background: "oklch(0.96 0.008 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
                <p className="text-xs mb-1" style={{ color: "oklch(0.52 0.04 230)", fontFamily, fontWeight: fw }}>{t("voko.moodboard.typo")}</p>
                <p className="text-2xl font-bold" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}>Aa — DM Serif Display</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
              <img src={IMG.moodboard} alt="VOKO Moodboard" loading="lazy" decoding="async" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PERSONA ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <p className="section-num mb-4">{t("voko.persona.label")}</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.persona.h2")}</h2>
          <div className="rounded-2xl p-8" style={{ background: "oklch(0.42 0.12 75)" }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-xl font-semibold mb-1" style={{ color: "oklch(0.98 0.005 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.persona.name")}</p>
                <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.7)", fontFamily, fontWeight: fw }}>{t("voko.persona.role")}</p>
              </div>
              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily, fontWeight: fw }}>{t("voko.persona.goals.label")}</p>
                <ul className="space-y-2">
                  {[t("voko.persona.goal1"), t("voko.persona.goal2"), t("voko.persona.goal3")].map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 230 / 0.5)" }} />
                      <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily, fontWeight: fw }}>{g}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily, fontWeight: fw }}>{t("voko.persona.pain.label")}</p>
                <ul className="space-y-2">
                  {[t("voko.persona.pain1"), t("voko.persona.pain2"), t("voko.persona.pain3")].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 230 / 0.5)" }} />
                      <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily, fontWeight: fw }}>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WIREFRAMES ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4">{t("voko.wireframes.label")}</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.wireframes.h2")}</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
            {t("voko.wireframes.p")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { src: IMG.wfHome,      label: t("voko.wireframes.home") },
              { src: IMG.wfProduct,   label: t("voko.wireframes.product") },
              { src: IMG.wfFavorites, label: t("voko.wireframes.fav") },
              { src: IMG.wfCheckout,  label: t("voko.wireframes.checkout") },
              { src: IMG.wfProfile,   label: t("voko.wireframes.profile") },
            ].map((s) => (
              <PhoneFrame key={s.label} src={s.src} alt={`Wireframe — ${s.label}`} label={s.label} fontFamily={fontFamily} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HI-FI: ONBOARDING FLOW ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <p className="section-num mb-4">{t("voko.hifi.label")}</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.hifi.onboarding.h2")}</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
            {t("voko.hifi.onboarding.p")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <PhoneFrame src={IMG.splash}      alt="Splash Screen"  label={t("voko.hifi.splash.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.onboarding1} alt="Onboarding 1"   label={t("voko.hifi.ob1.label")}    fontFamily={fontFamily} />
            <PhoneFrame src={IMG.onboarding2} alt="Onboarding 2"   label={t("voko.hifi.ob2.label")}    fontFamily={fontFamily} />
            <PhoneFrame src={IMG.onboarding3} alt="Onboarding 3"   label={t("voko.hifi.ob3.label")}    fontFamily={fontFamily} />
          </div>
        </div>
      </section>

      {/* ── ACCOUNT SETUP ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4">{t("voko.account.label")}</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.account.h2")}</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
            {t("voko.account.p")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <PhoneFrame src={IMG.welcome} alt="Welcome Screen" label={t("voko.account.welcome.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.login}   alt="Login Screen"   label={t("voko.account.login.label")}   fontFamily={fontFamily} />
            <PhoneFrame src={IMG.signup}  alt="Sign Up Screen" label={t("voko.account.signup.label")}  fontFamily={fontFamily} />
          </div>
        </div>
      </section>

      {/* ── HI-FI: SHOPPING FLOW ── */}
      <section className="py-16">
        <div className="container">
          <p className="section-num mb-4">{t("voko.hifi.label")}</p>
          <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.shopping.h2")}</h2>
          <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
            {t("voko.shopping.p")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <PhoneFrame src={IMG.home}           alt="Home Screen"        label={t("voko.shopping.home.label")}    fontFamily={fontFamily} />
            <PhoneFrame src={IMG.productDetail}  alt="Product Detail"     label={t("voko.shopping.product.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.cart}           alt="My Cart"            label={t("voko.shopping.cart.label")}    fontFamily={fontFamily} />
            <PhoneFrame src={IMG.checkout}       alt="Checkout"           label={t("voko.shopping.checkout.label")} fontFamily={fontFamily} />
            <PhoneFrame src={IMG.paymentSuccess} alt="Payment Successful" label={t("voko.shopping.success.label")} fontFamily={fontFamily} />
          </div>
        </div>
      </section>

      {/* ── USER FLOW ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <p className="section-num mb-4">{t("voko.userflow.label")}</p>
          <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>{t("voko.userflow.h2")}</h2>
          <div className="flex flex-wrap items-center gap-2">
            {[
              t("voko.flow.splash"),
              t("voko.flow.onboarding"),
              t("voko.flow.welcome"),
              t("voko.flow.signup"),
              t("voko.flow.home"),
              t("voko.flow.product"),
              t("voko.flow.cart"),
              t("voko.flow.checkout"),
              t("voko.flow.success"),
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.42 0.12 75)", color: "oklch(0.98 0.005 230)", fontFamily, fontWeight: fw }}>{step}</div>
                {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 230)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOME ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.018 75)" }}>
        <div className="container">
          <div className="rounded-2xl p-10 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl mb-6" style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily, fontWeight: fw }}>
              {t("voko.outcome.quote")}
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "oklch(0.42 0.04 230)", fontFamily, fontWeight: fw }}>
              {t("voko.outcome.p")}
            </p>
          </div>
        </div>
      </section>

      {/* ── NAVIGATION ── */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container flex justify-between items-center">
          <Link href="/traveltales">
            <button className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily, fontWeight: fw }}>
              <ArrowLeft size={14} /> {t("voko.nav.prev")}
            </button>
          </Link>
          <Link href="/webdesign">
            <button className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.35 0.09 230)", fontFamily, fontWeight: fw }}>
              {t("voko.nav.next")} <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>

    </Layout>
  );
}
