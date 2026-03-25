/*
 * HOME PAGE — Lamia Portfolio "Soft Blueprint"
 * Updated to reflect real CV background and align with EY Wavespace requirements
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

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

const projects = [
  {
    num: "01",
    title: "AuraFit",
    subtitle: "Behavioral Fitness System",
    type: "Conceptual UX Research · Bootcamp Project",
    description: "A behavioral fitness system designed to help Saudi professionals maintain workout consistency despite irregular schedules. Grounded in independent user research, behavioral pattern analysis, and human-centered design — reframing fitness as an adaptive system, not a motivation challenge.",
    tags: ["Behavioral UX", "User Research", "Product Strategy", "Mobile App", "Saudi Market"],
    href: "/aurafit",
    img: AURAFIT_IMG,
    accent: "oklch(0.35 0.09 230)",
    bg: "oklch(0.93 0.015 230)",
  },
  {
    num: "02",
    title: "Travel Tales",
    subtitle: "Travel Planning Experience",
    type: "Conceptual UX Research",
    description: "A mobile travel experience that simplifies destination discovery and booking through a clear, visual, step-by-step flow. Developed through independent research, user flow mapping, and information architecture design — reducing friction from exploration to confirmation.",
    tags: ["UX Research", "User Flow", "Information Architecture", "Mobile App", "Wireframing"],
    href: "/traveltales",
    img: TRAVEL_IMG,
    accent: "oklch(0.45 0.1 220)",
    bg: "oklch(0.94 0.012 220)",
  },
  {
    num: "03",
    title: "VOKO",
    subtitle: "Fashion E-commerce Experience",
    type: "Conceptual UX Research",
    description: "A fashion shopping mobile experience that streamlines product discovery and checkout. Developed through independent research and iterative prototyping — translating complex purchase journeys into smooth, intuitive flows with clear visual hierarchy.",
    tags: ["E-commerce UX", "Visual Design", "Prototyping", "Mobile App", "Checkout Flow"],
    href: "/voko",
    img: VOKO_IMG,
    accent: "oklch(0.55 0.1 75)",
    bg: "oklch(0.96 0.015 75)",
  },
  {
    num: "04",
    title: "Web Design",
    subtitle: "Full Website Design & Webflow Development",
    type: "Web Design · Webflow",
    description: "Two complete website designs built and deployed in Webflow — a business consulting platform and a team collaboration website with integrated CMS blog. Demonstrating end-to-end design-to-development skills with responsive layouts and visual systems.",
    tags: ["Webflow", "Web Design", "CMS", "Responsive", "Visual Systems"],
    href: "/webdesign",
    img: WEBDESIGN_IMG,
    accent: "oklch(0.28 0.1 155)",
    bg: "oklch(0.94 0.015 155)",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="project-card rounded-2xl overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        background: project.bg,
        border: "1px solid oklch(0.88 0.015 230 / 0.5)",
      }}
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[420px]`}>
        {/* Image */}
        <div className="lg:w-2/5 relative overflow-hidden" style={{ minHeight: "280px" }}>
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
            style={{ minHeight: "280px" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: isEven
                ? "linear-gradient(to right, transparent 60%, " + project.bg + ")"
                : "linear-gradient(to left, transparent 60%, " + project.bg + ")",
            }}
          />
        </div>

        {/* Content */}
        <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="section-num"
              style={{ color: project.accent, opacity: 0.7 }}
            >
              {project.num}
            </span>
            <span
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: project.accent + "18",
                color: project.accent,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {project.type}
            </span>
          </div>

          <h3
            className="text-3xl lg:text-4xl mb-2"
            style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}
          >
            {project.title}
          </h3>
          <p
            className="text-base font-medium mb-4"
            style={{ color: project.accent, fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.subtitle}
          </p>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "oklch(0.88 0.015 230 / 0.5)",
                  color: "oklch(0.42 0.06 230)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href={project.href}>
            <button
              className="inline-flex items-center gap-2 text-sm font-medium group self-start px-6 py-3 rounded-full transition-all duration-300 hover:gap-3"
              style={{
                background: "oklch(0.35 0.09 230)",
                color: "oklch(0.98 0.005 230)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              View Case Study
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const aboutSection = useInView();
  const toolsSection = useInView();
  const workSection = useInView();
  const experienceSection = useInView();

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
        {/* Decorative circles */}
        <div
          className="circle-decor"
          style={{ width: 500, height: 500, top: -100, right: -100, opacity: 0.4 }}
        />
        <div
          className="circle-decor"
          style={{ width: 300, height: 300, top: 80, right: 120, opacity: 0.25 }}
        />
        <div
          className="circle-decor"
          style={{ width: 180, height: 180, bottom: 120, left: "40%", opacity: 0.2 }}
        />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8 fade-up">
              <div
                className="w-8 h-px"
                style={{ background: "oklch(0.35 0.09 230 / 0.5)" }}
              />
              <span
                className="section-num"
                style={{ letterSpacing: "0.2em" }}
              >
                EXPERIENCE DESIGNER · RIYADH, KSA
              </span>
            </div>

            {/* Name */}
            <p
              className="text-base font-medium mb-2 fade-up fade-up-delay-1"
              style={{
                color: "oklch(0.45 0.06 230)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Lamia Alrowaished
            </p>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 fade-up fade-up-delay-1"
              style={{
                color: "oklch(0.2 0.04 230)",
                fontFamily: "'DM Serif Display', serif",
              }}
            >
              Designing
              <br />
              <em style={{ color: "oklch(0.35 0.09 230)" }}>experiences</em>
              <br />
              that navigate.
            </h1>

            <p
              className="text-base leading-relaxed mb-10 max-w-lg fade-up fade-up-delay-2"
              style={{
                color: "oklch(0.42 0.04 230)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              I translate complex challenges into clear, human-centered experiences — from spatial wayfinding systems to digital product design. I bring a rare combination of business acumen, design thinking, and real-world implementation across Saudi Arabia's leading organizations.
            </p>

            <div className="flex flex-wrap items-center gap-4 fade-up fade-up-delay-3">
              <Link href="/aurafit">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  style={{
                    background: "oklch(0.35 0.09 230)",
                    color: "oklch(0.98 0.005 230)",
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: "0 8px 30px oklch(0.35 0.09 230 / 0.25)",
                  }}
                >
                  View My Work
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              <a
                href="mailto:Lamiaaziz90@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                style={{
                  color: "oklch(0.35 0.09 230)",
                  borderColor: "oklch(0.35 0.09 230 / 0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                  background: "oklch(1 0 0 / 0.5)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <ExternalLink size={14} />
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to bottom, transparent, oklch(0.98 0.005 230))",
          }}
        />
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div
            ref={aboutSection.ref}
            className="grid lg:grid-cols-2 gap-16 items-center"
            style={{
              opacity: aboutSection.inView ? 1 : 0,
              transform: aboutSection.inView ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Left: text */}
            <div>
              <p className="section-num mb-4" style={{ letterSpacing: "0.2em" }}>
                ABOUT ME
              </p>
              <h2
                className="text-4xl lg:text-5xl mb-6"
                style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}
              >
                Where business
                <br />
                <em>meets design.</em>
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}
              >
                I'm an Experience Designer based in Riyadh with a background that spans marketing design, business development, and UX — giving me a rare ability to connect user needs with business outcomes.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Currently at <strong style={{ color: "oklch(0.35 0.09 230)" }}>Dar Al Riyadh</strong>, I lead user-centered design for wayfinding and environmental systems — mapping user journeys through physical space, collaborating with cross-functional teams, and translating complex spatial data into clear visual communication.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}
              >
                My earlier experience in <strong style={{ color: "oklch(0.35 0.09 230)" }}>account development and client management</strong> at Winclex — where I applied UX principles to internal dashboards and drove measurable business results — gives me a consulting mindset that goes beyond aesthetics. I design for <strong style={{ color: "oklch(0.35 0.09 230)" }}>impact</strong>.
              </p>
            </div>

            {/* Right: stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "4+", label: "Years of Experience" },
                { num: "3", label: "Industries Worked In" },
                { num: "McKinsey", label: "Forward Program" },
                { num: "AR / EN", label: "Bilingual Designer" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6"
                  style={{
                    background: "oklch(0.93 0.015 230)",
                    border: "1px solid oklch(0.88 0.015 230 / 0.5)",
                  }}
                >
                  <p
                    className="text-3xl font-light mb-1"
                    style={{ color: "oklch(0.35 0.09 230)", fontFamily: "'DM Serif Display', serif" }}
                  >
                    {stat.num}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE SECTION */}
      <section
        className="py-20"
        style={{ background: "oklch(0.96 0.008 230)" }}
      >
        <div className="container">
          <div
            ref={experienceSection.ref}
            style={{
              opacity: experienceSection.inView ? 1 : 0,
              transform: experienceSection.inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>EXPERIENCE</p>
            <h3
              className="text-3xl mb-10"
              style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}
            >
              Professional Journey
            </h3>
            <div className="flex flex-col gap-5">
              {[
                {
                  role: "UX/UI Designer — Wayfinding & Environmental Design",
                  company: "Dar Al Riyadh",
                  period: "Sep 2025 – Present",
                  highlights: ["User journey mapping & spatial flow design", "Cross-functional team collaboration", "Visual systems: signage hierarchy, typography, iconography"],
                  accent: "oklch(0.35 0.09 230)",
                },
                {
                  role: "Account Development Officer",
                  company: "Winclex",
                  period: "Dec 2022 – Sep 2025",
                  highlights: ["Applied UX to internal dashboards — 20% usability improvement", "Client relationship management & business development", "15% growth in account renewals through data-driven processes"],
                  accent: "oklch(0.45 0.1 220)",
                },
                {
                  role: "Marketing Graphic Designer",
                  company: "Casapiu",
                  period: "Jun 2021 – Dec 2022",
                  highlights: ["Website interface design & digital campaigns", "25% increase in user engagement through visual restructuring", "Brand identity & content hierarchy design"],
                  accent: "oklch(0.28 0.1 155)",
                },
              ].map((exp, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 lg:p-8"
                  style={{
                    background: "oklch(1 0 0)",
                    border: "1px solid oklch(0.88 0.015 230 / 0.5)",
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <p
                        className="text-lg font-semibold"
                        style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {exp.role}
                      </p>
                      <p
                        className="text-sm font-medium mt-1"
                        style={{ color: exp.accent, fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: exp.accent + "15",
                        color: exp.accent,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ background: exp.accent }}
                        />
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {h}
                        </p>
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
      <section
        className="py-16"
        style={{ background: "oklch(0.98 0.005 230)" }}
      >
        <div className="container">
          <div
            ref={toolsSection.ref}
            style={{
              opacity: toolsSection.inView ? 1 : 0,
              transform: toolsSection.inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-48 shrink-0">
                <p className="section-num mb-2" style={{ letterSpacing: "0.2em" }}>TOOLS</p>
                <h3
                  className="text-2xl"
                  style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}
                >
                  I work with
                </h3>
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
                    style={{
                      background: "oklch(1 0 0)",
                      border: "1px solid oklch(0.88 0.015 230 / 0.5)",
                      boxShadow: "0 2px 12px oklch(0.35 0.09 230 / 0.06)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: tool.color }}
                    >
                      {tool.letter}
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "oklch(0.35 0.09 230)", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {tool.name}
                    </span>
                  </div>
                ))}
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
            style={{
              opacity: workSection.inView ? 1 : 0,
              transform: workSection.inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="section-num mb-3" style={{ letterSpacing: "0.2em" }}>
                  SELECTED WORK
                </p>
                <h2
                  className="text-4xl lg:text-5xl"
                  style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}
                >
                  Design Research
                  <br />
                  <em>& Case Studies</em>
                </h2>
              </div>
              <p
                className="hidden md:block text-sm max-w-xs text-right"
                style={{ color: "oklch(0.52 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Conceptual UX research projects grounded in authentic user research and human-centered design methodology.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.num} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24">
        <div className="container">
          <div
            className="relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center"
            style={{
              background: "oklch(0.35 0.09 230)",
            }}
          >
            {/* Decorative circles */}
            <div
              className="circle-decor"
              style={{
                width: 400,
                height: 400,
                top: -100,
                right: -100,
                borderColor: "oklch(0.98 0.005 230 / 0.1)",
              }}
            />
            <div
              className="circle-decor"
              style={{
                width: 250,
                height: 250,
                bottom: -80,
                left: -60,
                borderColor: "oklch(0.98 0.005 230 / 0.08)",
              }}
            />

            <p
              className="section-num mb-4 relative z-10"
              style={{ color: "oklch(0.98 0.005 230 / 0.5)", letterSpacing: "0.2em" }}
            >
              LET'S CONNECT
            </p>
            <h2
              className="text-4xl lg:text-5xl mb-4 relative z-10"
              style={{
                color: "oklch(0.98 0.005 230)",
                fontFamily: "'DM Serif Display', serif",
              }}
            >
              Ready to create
              <br />
              <em>meaningful experiences?</em>
            </h2>
            <p
              className="text-base mb-10 max-w-lg mx-auto relative z-10"
              style={{
                color: "oklch(0.98 0.005 230 / 0.7)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              I bring a unique blend of business development, client management, and experience design to every project. Based in Riyadh, fluent in Arabic and English — let's build something that matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a
                href="mailto:Lamiaaziz90@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "oklch(0.98 0.005 230)",
                  color: "oklch(0.35 0.09 230)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Send an Email
                <ArrowRight size={14} />
              </a>
              <a
                href="https://linkedin.com/in/lamia-alrowaished"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                style={{
                  color: "oklch(0.98 0.005 230)",
                  borderColor: "oklch(0.98 0.005 230 / 0.4)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <ExternalLink size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
