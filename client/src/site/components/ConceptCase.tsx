import { CSSProperties } from "react";
import type { ConceptContent } from "../content/aurafit";
import { SiteLang, usePageMeta } from "../i18n";
import { OverviewCard } from "../components/OverviewCard";
import { SiteLayout } from "../Layout";
import { CaseHead } from "../components/CaseHead";
import "../aurafit.css";
import { useReveal } from "../useReveal";
import { useScrollFx } from "../scrollFx";

const pad = (i: number) => String(i + 1).padStart(2, "0");

/** Shared layout for the product-concept case studies (AuraFit, TravelTales). */
export function ConceptCase({ lang, c, idp }: { lang: SiteLang; c: ConceptContent; idp: string }) {
  usePageMeta(lang, c.metaTitle, c.metaDescription);
  useReveal();
  useScrollFx([lang]);
  const d = (i: number): CSSProperties => ({ ["--i" as string]: i });

  return (
    <SiteLayout lang={lang} active="case-studies">
      {/* 01 — HERO */}
      <section className="lps-hero lpa-hero" aria-labelledby={`${idp}-title`}>
        <div className="lps-hero__text">
          <span className="lpw-rule lp-in" style={d(0)} aria-hidden="true" />
          <p className="lps-eyebrow lps-hero__eyebrow lp-in" style={d(0)}>{c.hero.eyebrow}</p>
          <h1 id={`${idp}-title`} className="lps-hero__title lp-in" style={d(1)} lang="en">
            {c.hero.title}
          </h1>
          <p className="lpa-hero__lead lp-in" style={d(2)}>{c.hero.lead}</p>
          <p className="lpa-hero__body lp-in" style={d(3)}>{c.hero.body}</p>
        </div>
        <figure className="lps-hero__visual lpa-hero__visual lp-in" style={d(2)}>
          <img src={c.hero.visual} alt={c.hero.visualAlt} width={526} height={550} decoding="async" fetchPriority="high" />
        </figure>
      </section>

      {/* 02 — OVERVIEW */}
      <OverviewCard label={c.overviewLabel} items={c.overview} icons={["clock", "person", "pin", "layers"]} />

      {/* 03 — PROBLEM REFRAMING */}
      <section className="lps-sec lps-context lpa-problem" aria-labelledby={`${idp}-problem`}>
        <div className="lps-sec__inner">
          <CaseHead id={`${idp}-problem`} eyebrow={c.problem.eyebrow} title={c.problem.title} />
          <div className="lps-context__cards">
            {c.problem.cards.map((card) => (
              <article key={card.label} className={`lps-card${card.dark ? " is-dark" : ""} lp-reveal`}>
                <p className="lps-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — RESEARCH SYNTHESIS */}
      <section className="lps-sec lpa-research" aria-labelledby={`${idp}-research`}>
        <div className="lps-sec__inner">
          <CaseHead id={`${idp}-research`} eyebrow={c.research.eyebrow} title={c.research.title} intro={c.research.intro} split />
          <ol className="lps-principles lpa-insights">
            {c.research.insights.map((p, i) => (
              <li key={p.title} className={`lp-reveal${i === c.research.highlight ? " is-on" : ""}`} style={d(i)}>
                <span className="lps-num">{pad(i)}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 — BEHAVIORAL FRAMEWORK */}
      <section className="lps-sec lps-sec--dark lps-journeys lpa-framework" aria-labelledby={`${idp}-framework`}>
        <div className="lps-sec__inner">
          <CaseHead id={`${idp}-framework`} eyebrow={c.framework.eyebrow} title={c.framework.title} intro={c.framework.intro} rule={false} split />
          <ol className="lps-rows">
            {c.framework.rows.map((r, i) => (
              <li key={r.title} className="lp-reveal" style={d(i)}>
                <span className="lps-num">{pad(i)}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — DESIGN PROCESS */}
      <section className="lps-sec lpa-process" aria-labelledby={`${idp}-process`}>
        <div className="lps-sec__inner">
          <CaseHead id={`${idp}-process`} eyebrow={c.process.eyebrow} title={c.process.title} />
          <ol className="lpa-steps">
            {c.process.steps.map((s, i) => (
              <li key={s} className={`lp-reveal${i === c.process.highlight ? " is-on" : ""}`} style={d(i)}>
                <span className="lps-num">{pad(i)}</span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 — SELECTED SCREENS */}
      <section className="lps-sec lpa-screens" aria-labelledby={`${idp}-screens`}>
        <div className="lps-sec__inner">
          <CaseHead id={`${idp}-screens`} eyebrow={c.screens.eyebrow} title={c.screens.title} intro={c.screens.intro} split />
          <ul className="lpa-phones">
            {c.screens.items.map((s, i) => (
              <li key={s.title} className="lpa-phone lp-reveal" style={d(i % 3)}>
                <div className="lpa-phone__frame">
                  <img src={s.src} alt={s.alt} width={350} height={560} loading="lazy" decoding="async" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — PERSONA */}
      <section className="lps-sec lpa-persona" aria-labelledby={`${idp}-persona`}>
        <div className="lps-sec__inner">
          <CaseHead id={`${idp}-persona`} eyebrow={c.persona.eyebrow} title={c.persona.title} />
          <div className="lpa-persona__grid">
            <div className="lpa-persona__profile lp-reveal">
              <span className="lpa-persona__initial" aria-hidden="true">{c.persona.initial}</span>
              <ul>
                {c.persona.profile.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
            <div className="lpa-persona__card lp-reveal" style={d(1)}>
              <h3>{c.persona.goalsTitle}</h3>
              <ul>
                {c.persona.goals.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
            <div className="lpa-persona__card is-dark lp-reveal" style={d(2)}>
              <h3>{c.persona.painTitle}</h3>
              <ul>
                {c.persona.pains.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — VISUAL DIRECTION */}
      <section className="lps-sec lpa-visual" aria-labelledby={`${idp}-visual`}>
        <div className="lps-sec__inner">
          <CaseHead id={`${idp}-visual`} eyebrow={c.visual.eyebrow} title={c.visual.title} intro={c.visual.intro} split />
          <figure className="lpa-moodboard lp-reveal">
            <img src={c.visual.moodboard} alt={c.visual.moodboardAlt} width={1152} height={450} loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>

      {/* 10 — IMPACT */}
      <section className="lps-sec lps-sec--dark lps-outcome lpa-impact" aria-labelledby={`${idp}-impact`}>
        <div className="lps-sec__inner">
          <CaseHead id={`${idp}-impact`} eyebrow={c.impact.eyebrow} title={c.impact.title} rule={false} />
          <p className="lps-outcome__text lp-reveal">{c.impact.text}</p>
          <ul className="lps-outcome__cards">
            {c.impact.cards.map((card, i) => (
              <li key={card.label} className="lp-reveal" style={d(i)}>
                <p className="lps-label">{card.label}</p>
                <h3>{card.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
