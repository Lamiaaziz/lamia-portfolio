import { CSSProperties } from "react";
import { Link } from "wouter";
import { homeContent, CaseCard } from "../content/home";
import { asset, CONTACT, localPath, SiteLang, usePageMeta } from "../i18n";
import { ArrowRight, Download, LongArrow } from "../Icons";
import { SiteLayout } from "../Layout";
import { ContactCta } from "../components/ContactCta";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { useReveal } from "../useReveal";
import { ScrollFxPanel, useScrollFx } from "../scrollFx";

const META = {
  en: {
    title: "Lamia Alrowaished — UX/UI Product Designer",
    description:
      "Portfolio of Lamia Alrowaished, a bilingual UX/UI product designer in Riyadh designing clear Arabic and English products from user journeys and design systems to developer handoff.",
  },
  ar: {
    title: "لمياء الرويشد — مصممة منتجات UX/UI",
    description:
      "معرض أعمال لمياء الرويشد، مصممة منتجات UX/UI في الرياض تصمّم منتجات رقمية واضحة بالعربية والإنجليزية من رحلات المستخدم حتى التسليم للمطورين.",
  },
};

export default function Home({ lang }: { lang: SiteLang }) {
  const c = homeContent[lang];
  usePageMeta(lang, META[lang].title, META[lang].description);
  useReveal();
  useScrollFx([lang]);

  const floatStyle = (i: number): CSSProperties => ({ ["--i" as string]: i });

  return (
    <SiteLayout lang={lang} active="home">
      {/* ── HERO ── */}
      <section className="lp-hero" aria-labelledby="hero-title">
        <div className="lp-hero__stage">
          <div className="lp-hero__head">
          <div className="lp-hero__arch" aria-hidden="true" />
          <p className="lp-hero__eyebrow lp-in" style={floatStyle(0)}>
            <span className="lp-hero__rule" aria-hidden="true" />
            <span>{c.eyebrow}</span>
            <span className="lp-hero__rule" aria-hidden="true" />
          </p>
          <h1 id="hero-title" className="lp-hero__title">
            <span className="lp-hero__top lp-in" style={floatStyle(1)}>{c.h1Top}</span>
            <span className="lp-hero__rest lp-in" style={floatStyle(2)}>
              {c.h1Rest.map((l, i) => (
                <span key={i}>{l}</span>
              ))}
            </span>
          </h1>
          </div>

          <ul className="lp-hero__cards" aria-label={lang === "en" ? "Highlights" : "أبرز المعلومات"}>
            {c.stats.left.map((s, i) => (
              <li key={s.title} className={`lp-float lp-float--l${i + 1}`}>
                <div className="lp-stat lp-stat--left">
                  <span className="lp-stat__dot" aria-hidden="true" />
                  <strong dir="ltr">{s.title}</strong>
                  <span>{s.sub}</span>
                </div>
              </li>
            ))}
            {c.stats.right.map((s, i) => (
              <li key={s.label} className={`lp-float lp-float--r${i + 1}`}>
                <div className="lp-stat lp-stat--right">
                  <span className="lp-stat__dot" aria-hidden="true" />
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="lp-hero__intro lp-in" style={floatStyle(3)}>{c.intro}</p>
          <div className="lp-hero__ctas lp-in" style={floatStyle(4)}>
            <a href="#work" className="lp-btn lp-btn--dark lp-btn--lg">
              <span>{c.ctaWork}</span>
              <ArrowRight />
            </a>
            <a href={CONTACT.cv} download className="lp-btn lp-btn--ghost lp-btn--lg">
              <Download />
              <span>{c.ctaCv}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="lp-clients" aria-label={c.clientsLabel}>
        <p className="lp-clients__label">{c.clientsLabel}</p>
        <div className="lp-marquee">
          <div className="lp-marquee__track">
            {[0, 1].map((copy) => (
              <ul key={copy} className="lp-marquee__list" aria-hidden={copy === 1}>
                {c.clients.map((name) => (
                  <li key={name}>
                    <span>{name}</span>
                    <span className="lp-marquee__dot" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="work" className="lp-work" aria-labelledby="work-title">
        <div className="lp-work__head lp-reveal">
          <div>
            <p className="lp-eyebrow">{c.csEyebrow}</p>
            <h2 id="work-title" className="lp-h2">{c.csTitle}</h2>
          </div>
          <p className="lp-work__intro">{c.csIntro}</p>
        </div>
        <div className="lp-work__list">
          {c.cards.map((card) => (
            <CaseStudyCard key={card.num} card={card} lang={lang} viewCase={c.viewCase} />
          ))}
        </div>
        <div className="lp-work__all">
          <Link href={localPath("/case-studies", lang)} className="lp-btn lp-btn--ghost lp-btn--lg">{c.viewAll}</Link>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section id="how-i-work" className="lp-approach lp-reveal" aria-labelledby="approach-title">
        <div className="lp-approach__text">
          <p className="lp-approach__eyebrow">{c.approach.eyebrow}</p>
          <h2 id="approach-title" className="lp-approach__title">
            {c.approach.title} <em>{c.approach.titleAccent}</em>
          </h2>
          <p className="lp-approach__intro">{c.approach.intro}</p>
          <ol className="lp-steps">
            {c.approach.steps.map((s, i) => (
              <li key={s.title}>
                <span className="lp-steps__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.sub}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="lp-approach__media">
          <img src={asset("/home/approach.webp")} alt={c.approach.imageAlt} width={378} height={534} loading="lazy" decoding="async" />
          <div className="lp-approach__badge lp-float lp-float--badge">
            <strong dir="ltr">{c.approach.badgeTitle}</strong>
            <span>{c.approach.badgeText}</span>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <ContactCta lang={lang} />
      {import.meta.env.VITE_FX_PANEL === "1" && <ScrollFxPanel />}
    </SiteLayout>
  );
}
