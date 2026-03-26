/*
 * WAYFINDING CASE STUDY PAGE — Lamia Portfolio
 * Real-world project: Mixed-Use Tower Wayfinding Signage System (Confidential Client)
 * Dar Al Riyadh | Sep 2025 – Present
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
function Section({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

const ACCENT = "oklch(0.32 0.1 155)";
const ACCENT_LIGHT = "oklch(0.94 0.015 155)";
const ACCENT_MID = "oklch(0.28 0.1 155)";

export default function Wayfinding() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: ACCENT_LIGHT }}>
        <div className="circle-decor" style={{ width: 500, height: 500, top: -150, right: -100, opacity: 0.3 }} />
        <div className="circle-decor" style={{ width: 280, height: 280, bottom: -80, left: "30%", opacity: 0.2 }} />
        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} /> Back to Portfolio
            </button>
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-num" style={{ letterSpacing: "0.2em" }}>REAL-WORLD PROJECT</span>
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: ACCENT + "18", color: ACCENT, fontFamily: "'DM Sans', sans-serif" }}>
                  Dar Al Riyadh · 2025
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
                Wayfinding &
                <br />
                <em style={{ color: ACCENT }}>Signage Design</em>
              </h1>
              <p className="text-xl mb-6 font-medium" style={{ color: ACCENT, fontFamily: "'DM Sans', sans-serif" }}>
                Mixed-Use Tower — Multi-Zone Wayfinding System, Amman
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                A comprehensive wayfinding signage system for a 24-floor contemporary mixed-use high-rise in Amman, Jordan. The project involved designing a complete visual navigation language across parking, commercial, and residential zones, serving diverse user groups including residents, hotel guests, medical staff, and international visitors.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Client", value: "Dar Al Riyadh" },
                  { label: "Location", value: "Amman, Jordan" },
                  { label: "Role", value: "UX/UI Designer" },
                  { label: "Type", value: "Environmental Design" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="section-num mb-1" style={{ letterSpacing: "0.1em" }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: ACCENT, fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "24", label: "Floors" },
                { num: "6", label: "Parking Levels" },
                { num: "5+", label: "User Groups" },
                { num: "AR/EN", label: "Bilingual System" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl p-6 text-center" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 155 / 0.4)" }}>
                  <p className="text-4xl font-light mb-1" style={{ color: ACCENT, fontFamily: "'DM Serif Display', serif" }}>{stat.num}</p>
                  <p className="text-sm" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="py-20">
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>PROJECT OVERVIEW</p>
            <h2 className="text-3xl lg:text-4xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
              Navigating a Complex
              <br />
              <em>Urban Development</em>
            </h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  This project is one of the first contemporary high-rise towers in Jordan, rising 24 floors in central Amman. The development integrates residential apartments, commercial retail, a hospital, hotels, and underground parking — creating a complex multi-use environment with diverse navigation needs.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
                  My role was to design and build a comprehensive wayfinding signage system — establishing guidelines and rules that encompass color, typeface, materials, pictograms, arrows, and layouts — ensuring every user group can navigate confidently and efficiently.
                </p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: ACCENT_LIGHT, border: "1px solid oklch(0.88 0.015 155 / 0.4)" }}>
                <p className="text-sm font-semibold mb-4" style={{ color: ACCENT, fontFamily: "'DM Sans', sans-serif" }}>Project Goals</p>
                <div className="flex flex-col gap-3">
                  {[
                    "Establish comprehensive design guidelines for a cohesive wayfinding system",
                    "Develop a strategic color system that enhances navigation and accessibility",
                    "Create a standardized pictogram system based on ISO 7001",
                    "Design modular layout templates for consistent information presentation",
                    "Serve 5+ distinct user groups with tailored navigation strategies",
                  ].map((goal, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white" style={{ background: ACCENT }}>
                        {i + 1}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* SIGNAGE TYPES */}
      <section className="py-16" style={{ background: "oklch(0.97 0.006 230)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>SIGNAGE SYSTEM</p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
              Four Categories of Signage
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Identification Signage",
                  items: ["External Building ID", "Entrance Building ID", "Reception Building ID", "Apartment ID", "Lift ID"],
                  icon: "🏢",
                },
                {
                  title: "External Signage",
                  items: ["Vehicular Directional", "Assembly Point Regulatory", "Apartment Directional", "Emergency Exit", "Evacuation Plan"],
                  icon: "🚗",
                },
                {
                  title: "Internal Signage",
                  items: ["Reception ID", "Directory", "Floor Regulatory", "Back of House ID", "Toilet ID"],
                  icon: "🏠",
                },
                {
                  title: "Parking Signage",
                  items: ["Parking ID", "Parking Directional", "Column & Stall ID", "Disabled Parking", "No Smoking Regulatory"],
                  icon: "🅿️",
                },
              ].map((cat) => (
                <div key={cat.title} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.4)" }}>
                  <div className="text-2xl mb-3">{cat.icon}</div>
                  <p className="text-sm font-semibold mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{cat.title}</p>
                  <div className="flex flex-col gap-1.5">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full" style={{ background: ACCENT }} />
                        <p className="text-xs" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-20">
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>DESIGN PROCESS</p>
            <h3 className="text-3xl mb-10" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
              A Three-Phase Approach
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  phase: "01",
                  title: "Assessment & Research",
                  color: ACCENT,
                  items: [
                    "Site analysis of the master plan and architectural layouts",
                    "User needs mapping across 5 distinct groups (residents, hotel guests, medical staff, shoppers, office workers)",
                    "Traffic flow patterns — both vehicular and pedestrian",
                    "Identification of key wayfinding decision points",
                  ],
                },
                {
                  phase: "02",
                  title: "Strategy Development",
                  color: "oklch(0.45 0.1 220)",
                  items: [
                    "Zoning strategy across parking, commercial, and residential areas",
                    "Content hierarchy for each zone and user group",
                    "Color-coding system for 6 parking levels",
                    "Information architecture: primary vs. secondary vs. tertiary content",
                  ],
                },
                {
                  phase: "03",
                  title: "Design & Visual Language",
                  color: "oklch(0.55 0.1 75)",
                  items: [
                    "Minimalist, clean visual language aligned with modern architecture",
                    "ISO 7001-compliant pictogram system for universal understanding",
                    "Bilingual typography (Arabic + English) with clear legibility standards",
                    "Modular layout templates for consistent application across all zones",
                  ],
                },
              ].map((phase) => (
                <div key={phase.phase} className="rounded-2xl p-7" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.4)", boxShadow: "0 4px 20px oklch(0.35 0.09 230 / 0.06)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-light" style={{ color: phase.color, fontFamily: "'DM Serif Display', serif", opacity: 0.4 }}>{phase.phase}</span>
                    <p className="text-base font-semibold" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{phase.title}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: phase.color }} />
                        <p className="text-sm leading-relaxed" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* USER GROUPS */}
      <section className="py-16" style={{ background: ACCENT_LIGHT }}>
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>USER RESEARCH</p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
              Five Distinct User Groups
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { group: "Residents", icon: "🏡", need: "Clear, consistent, efficient navigation for daily routines — amenities, parking, visitor access." },
                { group: "Hotel Guests", icon: "🧳", need: "Comprehensive orientation for unfamiliar visitors — hotel amenities, conference facilities, nearby attractions." },
                { group: "Medical Patients & Staff", icon: "🏥", need: "Unambiguous, critical wayfinding to departments, clinics, and emergency exits — especially for those in distress." },
                { group: "Shoppers & Visitors", icon: "🛍️", need: "Intuitive exploration of extensive commercial areas — store directories, food courts, entrances and exits." },
                { group: "Office Workers", icon: "💼", need: "Efficient routes to workplaces, specific floors, meeting rooms, and dining options during breaks." },
                { group: "Service Personnel", icon: "🔧", need: "Back-of-house navigation, service access points, and emergency route clarity." },
              ].map((u) => (
                <div key={u.group} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 155 / 0.3)" }}>
                  <div className="text-2xl mb-2">{u.icon}</div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{u.group}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{u.need}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* BUILDING ZONES */}
      <section className="py-20">
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>ZONING STRATEGY</p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
              Three Zones, Three Strategies
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid oklch(0.88 0.015 230 / 0.5)" }}>
                    {["Zone", "Floors", "Primary Users", "Key Function", "Wayfinding Challenge"].map((h) => (
                      <th key={h} className="text-left py-3 pr-6 text-xs font-semibold" style={{ color: "oklch(0.52 0.04 230)", letterSpacing: "0.1em" }}>{h.toUpperCase()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { zone: "Parking Zone", floors: "6 levels (P1–P6)", users: "All building users", function: "Vehicle storage & pedestrian transition", challenge: "Multi-level orientation, vehicle/pedestrian separation" },
                    { zone: "Commercial Zone", floors: "Ground level", users: "Visitors, customers, residents", function: "Commercial activity & building entry", challenge: "Intuitive exploration, seamless zone transitions" },
                    { zone: "Residential Zone", floors: "Multiple residential levels", users: "Residents, guests", function: "Private residential living", challenge: "Balance of privacy, clarity, and unit identification" },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
                      <td className="py-4 pr-6 font-semibold" style={{ color: ACCENT }}>{row.zone}</td>
                      <td className="py-4 pr-6" style={{ color: "oklch(0.42 0.04 230)" }}>{row.floors}</td>
                      <td className="py-4 pr-6" style={{ color: "oklch(0.42 0.04 230)" }}>{row.users}</td>
                      <td className="py-4 pr-6" style={{ color: "oklch(0.42 0.04 230)" }}>{row.function}</td>
                      <td className="py-4 pr-6" style={{ color: "oklch(0.42 0.04 230)" }}>{row.challenge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className="py-16" style={{ background: "oklch(0.97 0.006 230)" }}>
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>DESIGN PRINCIPLES</p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
              Visual Language & Standards
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Minimalist & Clean", desc: "Clean lines, ample negative space, and streamlined aesthetics to avoid visual clutter and ensure information is easily digestible.", icon: "◻" },
                { title: "Consistent", desc: "Unified visual style across all signage types — directional, identification, informational, regulatory — with consistent iconography and layout grids.", icon: "⊞" },
                { title: "ISO 7001 Pictograms", desc: "Universal, internationally recognized icons for restrooms, elevators, stairs, parking, and key amenities — standardized for diverse international visitors.", icon: "♿" },
                { title: "Hierarchical", desc: "Clear visual differentiation between primary and secondary messages using font size, weight, and strategic placement.", icon: "≡" },
                { title: "Bilingual (AR/EN)", desc: "Arabic and English throughout, with layouts carefully designed to accommodate both scripts without appearing cluttered.", icon: "ع" },
                { title: "Color-Coded Zones", desc: "Distinct colors for each of the 6 parking levels create strong memory anchors, while zone-specific treatments maintain overall coherence.", icon: "🎨" },
              ].map((p) => (
                <div key={p.title} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.4)" }}>
                  <div className="text-2xl mb-3" style={{ color: ACCENT }}>{p.icon}</div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{p.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-20">
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>PROJECT IMPACT</p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
              Outcomes & Value Delivered
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "Operational Efficiency", desc: "Streamlined movement reduces congestion and reliance on staff for directions.", color: ACCENT },
                { title: "User Experience", desc: "Intuitive navigation creates a positive emotional connection with the environment.", color: "oklch(0.45 0.1 220)" },
                { title: "Market Value", desc: "Professional wayfinding reflects the quality and prestige of the entire facility.", color: "oklch(0.55 0.1 75)" },
                { title: "Accessibility", desc: "Clear visual differentiation and logical organization benefit all users regardless of familiarity.", color: "oklch(0.35 0.09 230)" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 230 / 0.4)", borderTop: `3px solid ${item.color}` }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* FUTURE IMPROVEMENTS */}
      <section className="py-16" style={{ background: ACCENT_LIGHT }}>
        <div className="container">
          <Section>
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>FUTURE IMPROVEMENTS</p>
            <h3 className="text-3xl mb-8" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>
              Strategic Next Steps
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { num: "01", title: "Digital Integration", desc: "Interactive digital kiosks and mobile wayfinding apps with real-time navigation and multilingual support." },
                { num: "02", title: "Enhanced Accessibility", desc: "Tactile and braille signage, high-contrast elements, and auditory cues for users with visual or cognitive impairments." },
                { num: "03", title: "Strategic Lighting", desc: "Thoughtful illumination of key signage elements to improve wayfinding effectiveness during evening hours." },
                { num: "04", title: "User Testing & Iteration", desc: "Post-occupancy evaluation with diverse participants to identify real-world navigation challenges and refine the system." },
              ].map((item) => (
                <div key={item.num} className="rounded-2xl p-6" style={{ background: "oklch(1 0 0)", border: "1px solid oklch(0.88 0.015 155 / 0.3)" }}>
                  <p className="text-3xl font-light mb-3" style={{ color: ACCENT, fontFamily: "'DM Serif Display', serif", opacity: 0.5 }}>{item.num}</p>
                  <p className="text-sm font-semibold mb-2" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/">
              <button className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border transition-all duration-200 hover:scale-105" style={{ color: ACCENT, borderColor: ACCENT + "40", fontFamily: "'DM Sans', sans-serif" }}>
                <ArrowLeft size={14} /> Back to Portfolio
              </button>
            </Link>
            <Link href="/aurafit">
              <button className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:scale-105" style={{ background: ACCENT, color: "oklch(0.98 0.005 230)", fontFamily: "'DM Sans', sans-serif" }}>
                View AuraFit Case Study →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
