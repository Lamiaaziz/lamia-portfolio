import { CSSProperties } from "react";
import { Link } from "wouter";
import { caseStudiesContent, type SmallCard } from "../content/caseStudies";
import { SiteLang, usePageMeta } from "../i18n";
import { LongArrow } from "../Icons";
import { SiteLayout } from "../Layout";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { useReveal } from "../useReveal";
import { useScrollFx } from "../scrollFx";

function WorkCard({ card, cta }: { card: SmallCard; cta: string }) {
  return (
    <li className={`lpw-card lpw-card--${card.tone} lp-reveal`}>
      <Link href={card.href} className="lpw-card__link">
        <div className="lpw-card__media">
          <img src={card.image} alt={card.imageAlt} width={377} height={204} loading="lazy" decoding="async" />
        </div>
        <div className="lpw-card__body">
          <p className="lpw-card__meta">{card.meta}</p>
          <h3 className="lpw-card__title">{card.title}</h3>
          <p className="lpw-card__text">{card.text}</p>
          <span className="lpw-card__cta">
            <span>{cta}</span>
            <LongArrow />
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function CaseStudies({ lang }: { lang: SiteLang }) {
  const c = caseStudiesContent[lang];
  usePageMeta(lang, c.metaTitle, c.metaDescription);
  useReveal();
  useScrollFx([lang]);
  const d = (i: number): CSSProperties => ({ ["--i" as string]: i });

  return (
    <SiteLayout lang={lang} active="case-studies">
      {/* ── HERO ── */}
      <section className="lpw-hero" aria-labelledby="work-hero-title">
        <div className="lpw-hero__text">
          <span className="lpw-rule" aria-hidden="true" />
          <p className="lpw-hero__eyebrow lp-in" style={d(0)}>{c.eyebrow}</p>
          <h1 id="work-hero-title" className="lpw-hero__title lp-in" style={d(1)}>
            {c.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h1>
        </div>
        <nav className="lpw-panel lp-in" style={d(2)} aria-label={c.panelTitle}>
          <h2 className="lpw-panel__title">{c.panelTitle}</h2>
          <p className="lpw-panel__text">{c.panelText}</p>
          <ol className="lpw-panel__list">
            {c.disciplines.map((dsc, i) => (
              <li key={dsc.name}>
                <a href={dsc.href}>
                  <span className="lpw-panel__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="lpw-panel__name">{dsc.name}</span>
                  <span className="lpw-panel__note">{dsc.note}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      {/* ── PRODUCT DESIGN ── */}
      <section id="product-design" className="lpw-band" aria-labelledby="product-title">
        <div className="lpw-band__inner">
          <h2 id="product-title" className="lpw-band__title">{c.productTitle}</h2>
          <p className="lpw-band__intro">{c.productIntro}</p>
        </div>
      </section>

      <section className="lpw-library" aria-label={c.productTitle}>
        <div className="lp-work__list lpw-featured">
          {c.featured.map((card) => (
            <CaseStudyCard key={card.num} card={card} lang={lang} viewCase={c.viewCase} />
          ))}
        </div>
        <ul className="lpw-grid">
          {c.concepts.map((card) => (
            <WorkCard key={card.title} card={card} cta={c.viewCase} />
          ))}
        </ul>
      </section>

      {/* ── BROADER FOUNDATION ── */}
      <section id="foundation" className="lpw-foundation" aria-labelledby="foundation-title">
        <div className="lpw-foundation__head lp-reveal">
          <span className="lpw-rule" aria-hidden="true" />
          <h2 id="foundation-title" className="lpw-foundation__title">{c.foundationTitle}</h2>
          <p className="lpw-foundation__intro">{c.foundationIntro}</p>
        </div>
        <ul className="lpw-grid lpw-grid--foundation">
          {c.foundation.map((card) => (
            <WorkCard key={card.title} card={card} cta={c.viewProject} />
          ))}
        </ul>
      </section>

      {/* ── HOW THE WORK CONNECTS ── */}
      <section className="lpx-bring lpw-connect" aria-labelledby="connect-title">
        <div className="lpx-bring__inner lp-reveal">
          <p className="lpx-bring__eyebrow">{c.connectEyebrow}</p>
          <h2 id="connect-title" className="lpx-bring__title">{c.connectTitle}</h2>
          <p className="lpx-bring__intro">{c.connectIntro}</p>
          <ol className="lpx-pillars">
            {c.connect.map((p, i) => (
              <li key={p.title}>
                <span className="lpx-pillars__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteLayout>
  );
}
