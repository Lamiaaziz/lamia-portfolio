/*
 * WEB DESIGN PROJECT PAGE — Lamia Portfolio "Soft Blueprint"
 * Showcases: Consulting Website (Desktop-1/2) + Team Website (ProjectPage)
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ExternalLink, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const CONSULTING_1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/AEFfqNJAEHcvuGaJ.png";
const TEAM_PAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/sTLUJIhqnklRssQA.png";

function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.7s ease, transform 0.7s ease", ...style }}>
      {children}
    </div>
  );
}

export default function WebDesign() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "oklch(0.94 0.015 155)" }}>
        <div className="circle-decor" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.3 }} />
        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} /> Back to Portfolio
            </button>
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-num" style={{ letterSpacing: "0.2em" }}>PROJECT 04</span>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.35 0.1 155 / 0.12)", color: "oklch(0.28 0.1 155)", fontFamily: "'DM Sans', sans-serif" }}>
                Web Design · Webflow
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Web Design</h1>
            <p className="text-xl mb-6" style={{ color: "oklch(0.28 0.1 155)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Full Website Design & Webflow Development</p>
            <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
              A collection of full website design and development projects built in Webflow — demonstrating end-to-end product design skills from visual design through to live, responsive web experiences.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[{ label: "Tool", value: "Webflow" }, { label: "Role", value: "Designer & Developer" }, { label: "Projects", value: "2 Websites" }].map((item) => (
                <div key={item.label}>
                  <p className="section-num mb-1" style={{ letterSpacing: "0.1em" }}>{item.label}</p>
                  <p className="text-sm font-medium" style={{ color: "oklch(0.28 0.1 155)", fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY WEBFLOW */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="rounded-2xl p-8 lg:p-12" style={{ background: "oklch(0.96 0.008 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
              <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>SKILLS DEMONSTRATED</p>
              <div className="grid md:grid-cols-4 gap-6">
                {["Full Website Design", "Webflow Development", "Responsive Layout", "Component Systems"].map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.28 0.1 155)" }} />
                    <p className="text-sm" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* PROJECT 1: CONSULTING WEBSITE */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="section-num" style={{ letterSpacing: "0.2em" }}>01</span>
                <div className="h-px flex-1" style={{ background: "oklch(0.88 0.015 230 / 0.5)" }} />
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                <div>
                  <h2 className="text-3xl mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Consulting Website</h2>
                  <p className="text-base font-medium mb-4" style={{ color: "oklch(0.28 0.1 155)", fontFamily: "'DM Sans', sans-serif" }}>Business Consulting Platform</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                    A full website design and build for a business consulting company. The design communicates trust, expertise, and clarity — with a structured layout that guides visitors from hero to services to team to contact.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      "Hero section with clear value proposition",
                      "Services grid (Audit, Finance, Business Growth, Tax, Project Management, Card Processing)",
                      "Team section with professional profiles",
                      "Client testimonials carousel",
                      "Newsletter subscription",
                      "Multi-column footer with navigation",
                    ].map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.28 0.1 155)" }} />
                        <p className="text-sm" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{f}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {["Webflow", "Green + Cream", "Responsive"].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: "oklch(0.94 0.015 155)", color: "oklch(0.28 0.1 155)", fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="rounded-2xl p-4" style={{ background: "oklch(0.96 0.008 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
                    <p className="section-num mb-3" style={{ letterSpacing: "0.1em" }}>DESIGN PALETTE</p>
                    <div className="flex gap-3 mb-4">
                      {[{ name: "Forest Green", color: "oklch(0.35 0.1 155)" }, { name: "Cream", color: "oklch(0.96 0.015 90)" }, { name: "Gold", color: "oklch(0.75 0.12 75)" }].map((c) => (
                        <div key={c.name} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-lg" style={{ background: c.color, border: "1px solid oklch(0.88 0.015 230 / 0.3)" }} />
                          <p className="text-xs text-center" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{c.name}</p>
                        </div>
                      ))}
                    </div>
                    <p className="section-num mb-2" style={{ letterSpacing: "0.1em" }}>SECTIONS</p>
                    <div className="grid grid-cols-3 gap-2">
                      {["Hero", "Services", "Team", "Testimonials", "Newsletter", "Footer"].map((s) => (
                        <div key={s} className="rounded-lg p-2 text-center" style={{ background: "oklch(0.35 0.1 155 / 0.08)" }}>
                          <p className="text-xs" style={{ color: "oklch(0.35 0.1 155)", fontFamily: "'DM Sans', sans-serif" }}>{s}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Screenshot — single full-page high-res image */}
            <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
              <img src={CONSULTING_1} alt="Consulting Website" loading="lazy" decoding="async" className="w-full h-auto block" />
            </div>
          </Section>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.5)" }} /></div>

      {/* PROJECT 2: TEAM WEBSITE */}
      <section className="py-16">
        <div className="container">
          <Section>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="section-num" style={{ letterSpacing: "0.2em" }}>02</span>
                <div className="h-px flex-1" style={{ background: "oklch(0.88 0.015 230 / 0.5)" }} />
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                <div>
                  <h2 className="text-3xl mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>Team Website</h2>
                  <p className="text-base font-medium mb-4" style={{ color: "oklch(0.28 0.1 155)", fontFamily: "'DM Sans', sans-serif" }}>Team Collaboration Platform</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                    A full website design and build for a concept team collaboration platform. This website also includes a beautiful blog — built entirely in Webflow, which has one of the best CMS systems for blog hosting.
                  </p>
                  <div className="space-y-2 mb-6">
                    {[
                      "Hero with clear collaboration value proposition",
                      "Feature showcase: Your hub for teamwork",
                      "Simplest task management section",
                      "Scheduling that actually works",
                      "Client testimonials with star ratings",
                      "Integrated blog with Webflow CMS",
                    ].map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "oklch(0.28 0.1 155)" }} />
                        <p className="text-sm" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{f}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {["Webflow", "Webflow CMS", "Blog"].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full" style={{ background: "oklch(0.94 0.015 155)", color: "oklch(0.28 0.1 155)", fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="rounded-2xl p-4" style={{ background: "oklch(0.96 0.008 230)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
                    <p className="section-num mb-3" style={{ letterSpacing: "0.1em" }}>DESIGN PALETTE</p>
                    <div className="flex gap-3 mb-4">
                      {[{ name: "Cream", color: "oklch(0.96 0.015 90)" }, { name: "Dark Navy", color: "oklch(0.25 0.04 240)" }, { name: "Yellow", color: "oklch(0.85 0.15 90)" }].map((c) => (
                        <div key={c.name} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-lg" style={{ background: c.color, border: "1px solid oklch(0.88 0.015 230 / 0.3)" }} />
                          <p className="text-xs text-center" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{c.name}</p>
                        </div>
                      ))}
                    </div>
                    <p className="section-num mb-2" style={{ letterSpacing: "0.1em" }}>SECTIONS</p>
                    <div className="grid grid-cols-3 gap-2">
                      {["Hero", "Features", "Task Mgmt", "Scheduling", "Reviews", "Blog"].map((s) => (
                        <div key={s} className="rounded-lg p-2 text-center" style={{ background: "oklch(0.28 0.1 155 / 0.08)" }}>
                          <p className="text-xs" style={{ color: "oklch(0.28 0.1 155)", fontFamily: "'DM Sans', sans-serif" }}>{s}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md" style={{ border: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
              <img src={TEAM_PAGE} alt="Team Website" className="w-full object-cover object-top" />
            </div>
          </Section>
        </div>
      </section>

      {/* WEBFLOW EXPERTISE */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>WEBFLOW EXPERTISE</p>
            <h2 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>What I Build in Webflow</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🎨", title: "Visual Design", desc: "Full website design with custom layouts, typography, and color systems" },
                { icon: "📱", title: "Responsive", desc: "Mobile-first responsive design that works across all screen sizes" },
                { icon: "✍️", title: "CMS & Blog", desc: "Webflow CMS integration for dynamic content and blog management" },
                { icon: "⚡", title: "Interactions", desc: "Smooth animations and interactions that enhance the user experience" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.5)" }}>
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="py-16" style={{ background: "oklch(0.94 0.015 155)" }}>
        <div className="container">
          <Section>
            <div className="rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="circle-decor" style={{ width: 350, height: 350, top: -100, right: -80, opacity: 0.3 }} />
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full relative z-10" style={{ background: "oklch(0.28 0.1 155 / 0.1)" }}>
                <Globe size={14} style={{ color: "oklch(0.28 0.1 155)" }} />
                <p className="text-sm font-medium" style={{ color: "oklch(0.28 0.1 155)", fontFamily: "'DM Sans', sans-serif" }}>Built & Deployed in Webflow</p>
              </div>
              <h2 className="text-3xl lg:text-4xl mb-6 relative z-10" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
                "End-to-end web design — from concept to live website."
              </h2>
              <p className="text-base leading-relaxed max-w-2xl mx-auto mb-8 relative z-10" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                These projects demonstrate my ability to take a design from concept to a fully functional, live website — combining UX thinking with visual design and no-code development skills in Webflow.
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 230)" }}>
        <div className="container flex justify-between items-center">
          <Link href="/voko"><button className="inline-flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}><ArrowLeft size={14} /> Previous: VOKO</button></Link>
          <Link href="/"><button className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.35 0.09 230)", fontFamily: "'DM Sans', sans-serif" }}>Back to Home <ArrowRight size={14} /></button></Link>
        </div>
      </section>
    </Layout>
  );
}
