/*
 * AURAFIT CASE STUDY PAGE — Lamia Portfolio "Soft Blueprint"
 * Full case study: Problem, Research, Strategy, Behavioral Framework, Design Process,
 * Moodboard, Persona, Wireframes, Hi-Fi Screens, Prototype
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

// High-res 1434×1920px WebP — replaces the broken 122px-wide PNG
const AURAFIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028447065/ivUzMW4MyeVPMSAbsRH3EF/aurafit-preview-aDDXmmY7Bhcn7ar7cAPefs.webp";

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

export default function AuraFit() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "oklch(0.93 0.015 270)" }}>
        <div className="circle-decor" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.3 }} />
        <div className="circle-decor" style={{ width: 280, height: 280, bottom: -80, left: "30%", opacity: 0.2 }} />
        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} /> Back to Portfolio
            </button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-num" style={{ letterSpacing: "0.2em" }}>PROJECT 01</span>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.45 0.12 270 / 0.12)", color: "oklch(0.35 0.12 270)", fontFamily: "'DM Sans', sans-serif" }}>
                  UX Product Concept · Bootcamp
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>AuraFit</h1>
              <p className="text-xl mb-6" style={{ color: "oklch(0.35 0.12 270)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Behavioral Fitness System for Saudi Professionals</p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                AuraFit is a behavioral fitness system designed to help users maintain workout consistency despite irregular schedules — reframing fitness as an adaptive behavioral system rather than a motivation challenge.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{ label: "Timeline", value: "6 Weeks" }, { label: "Role", value: "UX / Product Designer" }, { label: "Market", value: "Saudi Arabia" }].map((item) => (
                  <div key={item.label}>
                    <p className="section-num mb-1" style={{ letterSpacing: "0.1em" }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: "oklch(0.35 0.12 270)", fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
                  </div>
                ))}
              </div>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.35 0.12 270)", color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  <ExternalLink size={14} /> View Prototype
                </button>
              </a>
            </div>
            {/* Hero image — portrait phone mockup, contained properly */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "320px", width: "100%" }}>
                <img
                  src={AURAFIT_IMG}
                  alt="AuraFit Case Study"
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
            <div className="rounded-2xl p-8 lg:p-12" style={{ background: "oklch(0.96 0.008 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
              <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>RESPONSIBILITIES</p>
              <div className="grid md:grid-cols-4 gap-6">
                {["UX Research Synthesis", "Behavioral Framework Design", "Product Flow Architecture", "UI Interface Design"].map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.45 0.12 270)" }} />
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
              <div className="rounded-2xl p-8" style={{ background: "oklch(0.93 0.015 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
                <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>CHALLENGE</p>
                <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>The Challenge</h2>
                <ul className="space-y-3">
                  {["Users struggle with inconsistent schedules", "Motivation-based systems fail long-term", "Users need adaptive structure, not rigid plans"].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.45 0.12 270)" }} />
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-8" style={{ background: "oklch(0.45 0.12 270)", color: "oklch(0.98 0.005 230)" }}>
                <p className="section-num mb-3" style={{ letterSpacing: "0.2em", color: "oklch(0.98 0.005 230 / 0.5)" }}>SOLUTION</p>
                <h2 className="text-3xl mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>The Solution</h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.98 0.005 230 / 0.8)", fontFamily: "'DM Sans', sans-serif" }}>
                  Design an adaptive fitness system that adjusts to real-life schedules and supports sustainable consistency. AuraFit reframes fitness as an adaptive behavioral system — not a motivation challenge.
                </p>
                <div className="grid grid-cols-3 gap-3 mt-4">
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
      <section className="py-16" style={{ background: "oklch(0.96 0.008 270)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>DESIGN PROCESS</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Design Process</h2>
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {["Problem Definition", "Research", "Moodboard", "Wireframes", "Prototype", "Focus"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "oklch(0.45 0.12 270)", color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>{step}</div>
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
                  The visual direction for AuraFit draws from a Black + Purple palette — conveying focus, premium quality, and calm energy. The typography uses Mono Sans to reinforce a technical, structured feel that aligns with the behavioral system concept.
                </p>
                <div className="flex gap-3">
                  {[{ name: "Black", color: "oklch(0.15 0.01 270)" }, { name: "Purple", color: "oklch(0.45 0.12 270)" }, { name: "Light", color: "oklch(0.93 0.015 270)" }].map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full" style={{ background: c.color }} />
                      <p className="text-xs" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{c.name}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 rounded-xl" style={{ background: "oklch(0.96 0.008 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
                  <p className="text-xs mb-1" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>TYPOGRAPHY</p>
                  <p className="text-2xl font-mono" style={{ color: "oklch(0.2 0.04 230)" }}>Aa — Mono Sans</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden flex justify-center" style={{ border: "1px solid oklch(0.88 0.015 270 / 0.3)", background: "oklch(0.15 0.01 270)" }}>
                <img
                  src={AURAFIT_IMG}
                  alt="AuraFit Moodboard"
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
      <section className="py-16" style={{ background: "oklch(0.96 0.008 270)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>PERSONA</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>User Persona</h2>
            <div className="rounded-2xl p-8" style={{ background: "oklch(0.45 0.12 270)" }}>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold" style={{ background: "oklch(0.98 0.005 230 / 0.15)", color: "oklch(0.98 0.005 230)" }}>S</div>
                  <h3 className="text-xl font-semibold mb-1" style={{ color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>Sara, 28</h3>
                  <p className="text-sm" style={{ color: "oklch(0.98 0.005 230 / 0.7)", fontFamily: "'DM Sans', sans-serif" }}>Marketing Manager, Riyadh</p>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-3" style={{ color: "oklch(0.98 0.005 230 / 0.5)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}>GOALS</p>
                  <ul className="space-y-2">
                    {["Stay consistent with workouts", "Manage fitness around busy schedule", "Track progress without overwhelm"].map((g) => (
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
                    {["Irregular work hours disrupt routine", "Motivation drops after missed sessions", "Apps don't adapt to lifestyle changes"].map((p) => (
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
                  Low-fidelity wireframes mapped out the core user flows — from onboarding and behavioral profiling through to the adaptive dashboard and workout scheduling system.
                </p>
              </div>
              <div>
                <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>HI-FI SCREENS</p>
                <h2 className="text-3xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>The Design</h2>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  High-fidelity screens refined the visual system — dark mode with purple accents, clear data visualizations, and an adaptive workout interface.
                </p>
              </div>
            </div>
            {/* Full case study image — displayed as a contained portrait strip */}
            <div className="rounded-2xl overflow-hidden flex justify-center" style={{ border: "1px solid oklch(0.88 0.015 270 / 0.3)", background: "oklch(0.15 0.01 270)" }}>
              <img
                src={AURAFIT_IMG}
                alt="AuraFit Full Case Study"
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
      <section className="py-16" style={{ background: "oklch(0.96 0.008 270)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>KEY SCREENS</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Key Screens</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
              {["Onboarding", "Sign In", "Home Page", "Reach Page", "Profile Page", "iWelcome Page"].map((screen, i) => (
                <div key={screen} className="rounded-xl p-4 text-center" style={{ background: i % 2 === 0 ? "oklch(0.45 0.12 270)" : "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 270 / 0.3)" }}>
                  <p className="text-sm font-medium" style={{ color: i % 2 === 0 ? "oklch(0.98 0.005 230)" : "oklch(0.35 0.12 270)", fontFamily: "'DM Sans', sans-serif" }}>{screen}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* BEHAVIORAL FRAMEWORK */}
      <section className="py-16">
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>BEHAVIORAL FRAMEWORK</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Behavioral Framework</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: "01", title: "Goal Structuring", desc: "Define realistic goals based on lifestyle patterns" },
                { num: "02", title: "Cognitive Load Reduction", desc: "Simplify daily decisions through guided actions" },
                { num: "03", title: "Contextual Adaptation", desc: "Workouts adjust to schedule changes and energy levels" },
                { num: "04", title: "Consistency Reinforcement", desc: "Missed sessions trigger adjustments instead of penalties" },
              ].map((f) => (
                <div key={f.num} className="rounded-2xl p-6" style={{ background: "oklch(0.93 0.015 270)", border: "1px solid oklch(0.88 0.015 270 / 0.5)" }}>
                  <p className="text-3xl font-light mb-3" style={{ color: "oklch(0.45 0.12 270 / 0.3)", fontFamily: "'DM Serif Display', serif" }}>{f.num}</p>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* OUTCOME + PROTOTYPE */}
      <section className="py-16" style={{ background: "oklch(0.93 0.015 270)" }}>
        <div className="container">
          <Section>
            <div className="rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="circle-decor" style={{ width: 350, height: 350, top: -100, right: -80, opacity: 0.3 }} />
              <h2 className="text-3xl lg:text-4xl mb-6 relative z-10" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
                "AuraFit shifts fitness from motivation-driven routines to a behavior-guided system."
              </h2>
              <p className="text-base leading-relaxed max-w-2xl mx-auto mb-8 relative z-10" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                AuraFit reframes fitness as an adaptive behavioral system. Instead of relying on motivation, the product structures small behavioral signals that help users maintain long-term consistency despite lifestyle fluctuations.
              </p>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="relative z-10">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80" style={{ background: "oklch(0.45 0.12 270)", color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  <ExternalLink size={14} /> View Full Prototype
                </button>
              </a>
            </div>
          </Section>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 270)" }}>
        <div className="container flex justify-between items-center">
          <Link href="/"><button className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}><ArrowLeft size={14} /> All Projects</button></Link>
          <Link href="/traveltales"><button className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.35 0.09 230)", fontFamily: "'DM Sans', sans-serif" }}>Next: Travel Tales <ArrowRight size={14} /></button></Link>
        </div>
      </section>
    </Layout>
  );
}
