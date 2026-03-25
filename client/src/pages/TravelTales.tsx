/*
 * TRAVEL TALES CASE STUDY PAGE — Lamia Portfolio "Soft Blueprint"
 * Full case study: Project Summary, Design Process, Moodboard, Persona, Wireframes, Hi-Fi, Prototype
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const checkAndSet = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight + 80 && rect.bottom > -80) {
          setInView(true);
          return true;
        }
      }
      return false;
    };
    if (checkAndSet()) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold, rootMargin: "100px 0px 100px 0px" }
    );
    if (ref.current) obs.observe(ref.current);
    const onScroll = () => { if (checkAndSet()) { window.removeEventListener("scroll", onScroll); obs.disconnect(); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [threshold]);
  return { ref, inView };
}

// High-res 1434×1920px WebP — replaces the broken 132px-wide PNG
const TRAVEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028447065/ivUzMW4MyeVPMSAbsRH3EF/traveltales-preview-gYMjHtcyp9MKuCHUXoZzr3.webp";

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function TravelTales() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "oklch(0.94 0.018 195)" }}>
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
                <span className="section-num" style={{ letterSpacing: "0.2em" }}>PROJECT 02</span>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.38 0.1 195 / 0.12)", color: "oklch(0.28 0.1 195)", fontFamily: "'DM Sans', sans-serif" }}>UX Product Concept</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Travel Tales</h1>
              <p className="text-xl mb-6" style={{ color: "oklch(0.28 0.1 195)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Travel Planning Experience</p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                Travel Tales is a mobile experience designed to help users discover destinations and organize their travel plans in a simple and inspiring way — turning a complex planning process into a clear, visual journey.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ label: "Type", value: "UX Concept" }, { label: "Role", value: "UX / Product Designer" }, { label: "Focus", value: "Mobile App" }].map((item) => (
                  <div key={item.label}>
                    <p className="section-num mb-1" style={{ letterSpacing: "0.1em" }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.28 0.1 195)", fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
                  </div>
                ))}
              </div>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.28 0.1 195)", color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  <ExternalLink size={14} /> View Prototype
                </button>
              </a>
            </div>
            {/* Hero image — portrait phone mockup, contained properly */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "320px", width: "100%" }}>
                <img
                  src={TRAVEL_IMG}
                  alt="Travel Tales Case Study"
                  width={320}
                  height={428}
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto block"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="rounded-2xl p-8 lg:p-12" style={{ background: "oklch(0.96 0.008 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
              <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>RESPONSIBILITIES</p>
              <div className="grid md:grid-cols-4 gap-6">
                {["UX Research Synthesis", "Behavioral Framework Design", "Product Flow Architecture", "UI Interface Design"].map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.28 0.1 195)" }} />
                    <p className="text-sm" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* PROJECT SUMMARY */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl p-8" style={{ background: "oklch(0.94 0.018 195)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
                <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>CHALLENGE</p>
                <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>The Challenge</h2>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  Travel planning apps often present too many options and complex booking flows, making it difficult for users to quickly discover destinations and complete their travel booking. Users need a simpler way to explore places, choose activities, and complete bookings in a clear flow.
                </p>
              </div>
              <div className="rounded-2xl p-8" style={{ background: "oklch(0.28 0.1 195)", color: "oklch(0.98 0.005 230)" }}>
                <p className="section-num mb-3" style={{ letterSpacing: "0.2em", color: "oklch(0.98 0.005 230 / 0.5)" }}>SOLUTION</p>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>The Solution</h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily: "'DM Sans', sans-serif" }}>
                  Design a travel experience that allows users to discover destinations easily, explore activities visually, and complete bookings with a simple step-by-step flow.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[{ label: "Research", val: "Secondary" }, { label: "Design", val: "UI Design" }, { label: "Type", val: "App" }].map((s) => (
                    <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "oklch(0.98 0.005 230 / 0.1)" }}>
                      <p className="text-xs mb-1" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</p>
                      <p className="text-sm font-medium" style={{ color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>{s.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>DESIGN PROCESS</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Design Process</h2>
            <div className="flex flex-wrap items-center gap-2">
              {["Problem Definition", "Research", "Moodboard", "Wireframes", "Prototype", "Focus"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.28 0.1 195)", color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>{step}</div>
                  {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 230)" }} />}
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* MOODBOARD */}
      <section className="py-16">
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>MOODBOARD</p>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Moodboard</h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  The visual direction for Travel Tales uses a White + Blue palette — evoking clarity, openness, and the feeling of sky and sea. The clean typography reinforces a modern, accessible travel experience.
                </p>
                <div className="flex gap-3 mb-4">
                  {[{ name: "White", color: "oklch(0.98 0.005 230)", border: true }, { name: "Blue", color: "oklch(0.28 0.1 195)" }, { name: "Teal", color: "oklch(0.55 0.12 195)" }].map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full" style={{ background: c.color, border: c.border ? "1px solid oklch(0.88 0.015 230)" : "none" }} />
                      <p className="text-xs" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{c.name}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl" style={{ background: "oklch(0.96 0.008 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
                  <p className="text-xs mb-1" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>TYPOGRAPHY</p>
                  <p className="text-2xl" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Aa — Clean Sans</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden flex justify-center" style={{ border: "1px solid oklch(0.88 0.015 230 / 0.3)", background: "oklch(0.94 0.018 195)" }}>
                <img
                  src={TRAVEL_IMG}
                  alt="Travel Tales Moodboard"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={533}
                  className="block"
                  style={{ maxHeight: "400px", width: "auto", objectFit: "contain" }}
                />
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* PERSONA */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>PERSONA</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>User Persona</h2>
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.28 0.1 195)" }}>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold" style={{ background: "oklch(0.98 0.005 230 / 0.15)", color: "oklch(0.98 0.005 230)" }}>C</div>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>Clara, 30</h3>
                  <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.7)", fontFamily: "'DM Sans', sans-serif" }}>Travel Enthusiast, Dubai</p>
                  <p className="text-xs mt-2" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily: "'DM Sans', sans-serif" }}>Pain Points: Lots of tabs</p>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}>GOALS</p>
                  <ul className="space-y-2">
                    {["Discover new destinations quickly", "Plan trips without switching apps", "Get clear booking confirmation"].map((g) => (
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
                    {["Too many tabs and apps to manage", "Confusing booking flows", "Hard to compare destinations visually"].map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.98 0.005 230 / 0.5)" }} />
                        <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily: "'DM Sans', sans-serif" }}>{p}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* WIREFRAMES + HI-FI */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>WIREFRAMES</p>
                <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Wireframes</h2>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  Low-fidelity wireframes mapped the core user flow — from destination discovery through activity selection to booking confirmation.
                </p>
              </div>
              <div>
                <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>HI-FI SCREENS</p>
                <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>The Design</h2>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  High-fidelity screens refined the visual system — clean white backgrounds with teal accents, rich destination photography, and a clear step-by-step booking flow.
                </p>
              </div>
            </div>
            {/* Full case study image — displayed as a contained portrait strip */}
            <div className="rounded-2xl overflow-hidden flex justify-center" style={{ border: "1px solid oklch(0.88 0.015 230 / 0.3)", background: "oklch(0.94 0.018 195)" }}>
              <img
                src={TRAVEL_IMG}
                alt="Travel Tales Full Case Study"
                loading="lazy"
                decoding="async"
                width={600}
                height={800}
                className="block w-full"
                style={{ maxHeight: "700px", objectFit: "contain", objectPosition: "top" }}
              />
            </div>
          </Section>
        </div>
      </section>

      {/* KEY SCREENS */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>KEY SCREENS</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Key Screens</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {["Onboarding", "Sign In", "Home Page", "Product Detail", "Checkout"].map((screen, i) => (
                <div key={screen} className="rounded-xl p-4 text-center" style={{ background: i % 2 === 0 ? "oklch(0.28 0.1 195)" : "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
                  <p className="text-sm font-medium" style={{ color: i % 2 === 0 ? "oklch(0.98 0.005 230)" : "oklch(0.28 0.1 195)", fontFamily: "'DM Sans', sans-serif" }}>{screen}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* USER FLOW */}
      <section className="py-16">
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>USER FLOW</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Shopping Experience Flow</h2>
            <div className="flex flex-wrap items-center gap-2">
              {["Explore", "Discover", "Select Destination", "Book", "Payment", "Confirmation"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.28 0.1 195)", color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>{step}</div>
                  {i < arr.length - 1 && <ArrowRight size={14} style={{ color: "oklch(0.52 0.04 230)" }} />}
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="py-16" style={{ background: "oklch(0.94 0.018 195)" }}>
        <div className="container">
          <Section>
            <div className="rounded-2xl p-10 lg:p-16 text-center">
              <h2 className="text-3xl lg:text-4xl mb-6" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
                "Travel Tales simplifies the planning process into a clear, visual journey."
              </h2>
              <p className="text-base leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                The design reduces friction at every step — from discovery to confirmation — making travel planning feel inspiring rather than overwhelming.
              </p>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.28 0.1 195)", color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  <ExternalLink size={14} /> View Full Prototype
                </button>
              </a>
            </div>
          </Section>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container flex justify-between items-center">
          <Link href="/aurafit"><button className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}><ArrowLeft size={14} /> Previous: AuraFit</button></Link>
          <Link href="/voko"><button className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.35 0.09 230)", fontFamily: "'DM Sans', sans-serif" }}>Next: VOKO <ArrowRight size={14} /></button></Link>
        </div>
      </section>
    </Layout>
  );
}
