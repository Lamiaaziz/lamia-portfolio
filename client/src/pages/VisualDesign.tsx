/*
 * VISUAL DESIGN PAGE — Lamia Portfolio
 * Sections: Brand Identity · Winclex · Weqaa Center · The Solution Consulting · Telescope Studio · Packaging Design
 */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

// ── CDN URLs ────────────────────────────────────────────────────────────────

const IMG = {
  // Brand Identity (QR)
  brand01: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/nSLZVsApcbtjHUUb.png",
  brand02: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/uXrctdKHbZYvGogr.png",
  brand04: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/pvGNpZTxShSmXJMR.png",
  brand06: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/KtHRpfzawtmydvYu.png",
  brand10: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/xxrJydyReBbyomhh.png",
  brand12: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/sdSZWPPZyacHhFcm.png",
  brand16: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/pmDshvTvLmHvkSQw.png",
  // Winclex
  winclex01: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/RPENqxnVozVUIoyb.webp",
  winclex02: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/QeHnooDwxZnDScOJ.webp",
  winclex03: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/pqOpHgQlTYVpIuvP.webp",
  winclex04: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/KBPDAqmeORyGANIh.webp",
  winclex05: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/IfWGEArsoeJkBoqp.webp",
  winclex06: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/eByMwGyTJOxOiFLN.webp",
  winclex07: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/jCXNItgpCSsyNhnM.png",
  winclex08: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/lWvRYtUbIpKZOtJc.png",
  // Weqaa Center
  weqaa: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/fwLYPmXAMbKYUclC.webp",
  // The Solution Consulting
  solution: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/CABQxATzIqdwLplU.webp",
  // Telescope Studio
  teleBag:       "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/ABCJRigvoFQGQOuI.webp",
  teleSignage2:  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/QLuJaBKqUFXlyJEP.webp",
  teleSignage:   "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/yLyWKtgfnIsnHmfR.webp",
  teleStationary:"https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/OasIMZisaKCfZYiG.webp",
  // Packaging
  packCoffee:    "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/NpzkukLHBUMhVCPr.webp",
  packSalad:     "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/CVHDDAhMRSJgocTN.png",
  packOatmeal:   "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028614438/HMyvooUKITIgAeZy.webp",
};

// ── Reusable components ──────────────────────────────────────────────────────

function SectionHeader({ num, tag, title, desc }: { num: string; tag: string; title: string; desc: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="section-num" style={{ letterSpacing: "0.2em" }}>{num}</span>
        <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.35 0.1 230 / 0.12)", color: "oklch(0.52 0.12 230)", fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
        <div className="h-px flex-1" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} />
      </div>
      <h2 className="text-3xl mb-3" style={{ color: "oklch(0.2 0.04 230)", fontFamily: "'DM Serif Display', serif" }}>{title}</h2>
      <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "oklch(0.42 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
    </div>
  );
}

function ImgCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-sm ${className}`} style={{ border: "1px solid oklch(0.88 0.015 230 / 0.3)" }}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto block" />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function VisualDesign() {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.16 0.04 240) 0%, oklch(0.22 0.06 245) 50%, oklch(0.18 0.05 235) 100%)" }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", width: 500, height: 500, top: -150, right: -100, borderRadius: "50%", background: "oklch(0.35 0.1 230 / 0.08)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 300, height: 300, bottom: -80, left: -60, borderRadius: "50%", background: "oklch(0.55 0.15 200 / 0.06)", pointerEvents: "none" }} />

        <div className="container relative z-10">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-sm mb-10 transition-all duration-200 hover:gap-3" style={{ color: "oklch(0.7 0.05 230)", fontFamily: "'DM Sans', sans-serif" }}>
              <ArrowLeft size={14} /> Back to Portfolio
            </button>
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-num" style={{ letterSpacing: "0.2em", color: "oklch(0.6 0.05 230)" }}>PROJECT 05</span>
              <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "oklch(0.55 0.15 200 / 0.2)", color: "oklch(0.75 0.12 200)", fontFamily: "'DM Sans', sans-serif", border: "1px solid oklch(0.55 0.15 200 / 0.3)" }}>
                Visual Design
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-4" style={{ color: "oklch(0.97 0.01 230)", fontFamily: "'DM Serif Display', serif", lineHeight: 1.15 }}>
              Brand, Campaign &<br />Environmental Design
            </h1>

            <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.72 0.04 230)", fontFamily: "'DM Sans', sans-serif", maxWidth: "600px" }}>
              Before moving into product design, I spent years building visual systems for real clients — from brand identities and presentation templates to social media campaigns and packaging. This foundation shapes how I think about hierarchy, clarity, and communication in every digital product I design today.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Client Work", "Personal Work", "Brand Identity", "Campaigns", "Packaging", "Presentation Design"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "oklch(1 0 0 / 0.07)", color: "oklch(0.82 0.04 230)", fontFamily: "'DM Sans', sans-serif", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 · BRAND IDENTITY ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            num="01"
            tag="Client Work"
            title="Brand Identity"
            desc="A complete brand identity guidelines document for QR — covering logo construction, color palette, typography system, brand voice, and real-world application mockups across print and digital touchpoints."
          />
          {/* 2-col grid for first two cover pages */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <ImgCard src={IMG.brand01} alt="QR Brand Identity — Cover" />
            <ImgCard src={IMG.brand02} alt="QR Brand Identity — Introduction" />
          </div>
          {/* 3-col grid for inner pages */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <ImgCard src={IMG.brand04} alt="QR Brand Identity — Logo" />
            <ImgCard src={IMG.brand06} alt="QR Brand Identity — Colors" />
            <ImgCard src={IMG.brand16} alt="QR Brand Identity — Applications" />
          </div>
          {/* Full-width mockup pages */}
          <div className="grid md:grid-cols-2 gap-4">
            <ImgCard src={IMG.brand10} alt="QR Brand Identity — Mockup 1" />
            <ImgCard src={IMG.brand12} alt="QR Brand Identity — Mockup 2" />
          </div>
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 02 · WINCLEX ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            num="02"
            tag="Client Work"
            title="Winclex"
            desc="A series of social media campaign posts designed for Winclex — covering national occasions, seasonal celebrations, and awareness campaigns. Each post was crafted to align with the brand's visual identity while communicating clearly to a Saudi audience."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ImgCard src={IMG.winclex01} alt="Winclex — Industrial Workers Day" />
            <ImgCard src={IMG.winclex02} alt="Winclex — Saudi Founding Day" />
            <ImgCard src={IMG.winclex03} alt="Winclex — Eid Al-Adha" />
            <ImgCard src={IMG.winclex04} alt="Winclex — National Day" />
            <ImgCard src={IMG.winclex05} alt="Winclex — Gulf Engineer Day" />
            <ImgCard src={IMG.winclex06} alt="Winclex — Saudi Founding Day 2025" />
            <ImgCard src={IMG.winclex07} alt="Winclex — Heatstroke Awareness" />
            <ImgCard src={IMG.winclex08} alt="Winclex — Ramadan" />
          </div>
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 03 · WEQAA CENTER ────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            num="03"
            tag="Client Work"
            title="Weqaa Center"
            desc="A custom presentation template designed for Weqaa Center — the National Center for the Prevention & Control of Plants Pests & Animal Diseases. The template uses a desert-inspired visual language with the center's official branding, built in Illustrator and Photoshop."
          />
          <ImgCard src={IMG.weqaa} alt="Weqaa Center — Presentation Template" />
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 04 · THE SOLUTION CONSULTING ─────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            num="04"
            tag="Client Work"
            title="The Solution Consulting"
            desc="Social media post designs for The Solution Consulting (Arabia Information Technology) — including Eid Al-Fitr, Eid Al-Adha, and Ramadan greetings. The posts were designed to reflect the brand's professional tone while maintaining warmth and cultural relevance."
          />
          <ImgCard src={IMG.solution} alt="The Solution Consulting — Social Media Posts" />
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 05 · TELESCOPE STUDIO ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            num="05"
            tag="Personal Work"
            title="Telescope Studio"
            desc="A personal brand identity project for Telescope Studio — a creative studio concept built around the tagline 'turns the unimaginable into possible.' The project includes a full stationery system, environmental signage, poster design, and branded merchandise."
          />
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <ImgCard src={IMG.teleStationary} alt="Telescope Studio — Stationery Set" />
            <ImgCard src={IMG.teleSignage2} alt="Telescope Studio — Circular Signage" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <ImgCard src={IMG.teleSignage} alt="Telescope Studio — Poster" />
            <ImgCard src={IMG.teleBag} alt="Telescope Studio — Tote Bag" />
          </div>
        </div>
      </section>

      <div className="container"><div className="h-px" style={{ background: "oklch(0.88 0.015 230 / 0.4)" }} /></div>

      {/* ── 06 · PACKAGING DESIGN ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            num="06"
            tag="Personal Work"
            title="Packaging Design"
            desc="A collection of personal packaging design explorations — including a premium coffee pouch with fruit-forward branding, a Vegy Food salad bowl with illustrated pattern work, and a Coffee Premium dessert cup series. Each project focuses on label hierarchy, material context, and shelf appeal."
          />
          <div className="grid md:grid-cols-3 gap-4">
            <ImgCard src={IMG.packCoffee}  alt="Coffee Premium — Pouch Packaging" />
            <ImgCard src={IMG.packSalad}   alt="Vegy Food — Salad Bowl Packaging" />
            <ImgCard src={IMG.packOatmeal} alt="Coffee Premium — Dessert Cup Packaging" />
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, oklch(0.16 0.04 240) 0%, oklch(0.22 0.06 245) 100%)" }}>
        <div className="container text-center">
          <p className="text-2xl lg:text-3xl mb-6" style={{ color: "oklch(0.97 0.01 230)", fontFamily: "'DM Serif Display', serif", maxWidth: "700px", margin: "0 auto 1.5rem" }}>
            "Visual design is the foundation that makes every product feel intentional."
          </p>
          <p className="text-sm" style={{ color: "oklch(0.62 0.04 230)", fontFamily: "'DM Sans', sans-serif" }}>
            Years of client work across brand identity, campaigns, and environmental design.
          </p>
          <div className="flex justify-center gap-4 mt-10">
            <Link href="/">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200" style={{ background: "oklch(1 0 0 / 0.08)", color: "oklch(0.9 0.04 230)", fontFamily: "'DM Sans', sans-serif", border: "1px solid oklch(1 0 0 / 0.15)" }}>
                <ArrowLeft size={14} /> Back to Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
