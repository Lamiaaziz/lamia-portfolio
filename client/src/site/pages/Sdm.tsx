import { CSSProperties } from "react";
import { sdmContent } from "../content/sdm";
import { SiteLang, usePageMeta } from "../i18n";
import { OverviewCard } from "../components/OverviewCard";
import { SiteLayout } from "../Layout";
import { CaseHead } from "../components/CaseHead";
import { useReveal } from "../useReveal";
import { useScrollFx } from "../scrollFx";

const pad = (i: number) => String(i + 1).padStart(2, "0");

const Head = CaseHead;

export default function Sdm({ lang }: { lang: SiteLang }) {
  const c = sdmContent[lang];
  usePageMeta(lang, c.metaTitle, c.metaDescription);
  useReveal();
  useScrollFx([lang]);
  const d = (i: number): CSSProperties => ({ ["--i" as string]: i });

  return (
    <SiteLayout lang={lang} active="case-studies">
      {/* 01 — HERO */}
      <section className="lps-hero" aria-labelledby="sdm-title">
        <div className="lps-hero__text">
          <span className="lps-hero__rule lp-in" style={d(0)} aria-hidden="true" />
          <p className="lps-eyebrow lps-hero__eyebrow lp-in" style={d(0)}>{c.hero.eyebrow}</p>
          <h1 id="sdm-title" className="lps-hero__title lp-in" style={d(1)}>
            {c.hero.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h1>
          <p className="lps-hero__summary lp-in" style={d(2)}>{c.hero.summary}</p>
          <p className="lps-note lp-in" style={d(3)}>{c.hero.note}</p>
        </div>
        <figure className="lps-hero__visual lp-in" style={d(2)}>
          <img src={c.hero.visual} alt={c.hero.visualAlt} width={526} height={520} decoding="async" fetchPriority="high" />
        </figure>
      </section>

      {/* 02 — OVERVIEW */}
      <OverviewCard label={c.overviewLabel} items={c.overview} icons={["person", "people", "screen", "check"]} />

      {/* 03 — OWNERSHIP */}
      <section className="lps-sec lps-ownership" aria-labelledby="sdm-ownership">
        <div className="lps-sec__inner">
          <Head id="sdm-ownership" eyebrow={c.ownership.eyebrow} title={c.ownership.title} intro={c.ownership.intro} split />
          <ul className="lps-ownership__list">
            {c.ownership.items.map((item, i) => (
              <li key={item} className="lp-reveal" style={d(i)}>
                <span className="lps-num">{pad(i)}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — CHALLENGE & RESPONSE */}
      <section className="lps-sec lps-context" aria-labelledby="sdm-context">
        <div className="lps-sec__inner">
          <Head id="sdm-context" eyebrow={c.context.eyebrow} title={c.context.title} />
          <div className="lps-context__cards">
            {c.context.cards.map((card) => (
              <article key={card.label} className={`lps-card${card.dark ? " is-dark" : ""} lp-reveal`}>
                <p className="lps-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — DESIGN APPROACH */}
      <section className="lps-sec lps-approach" aria-labelledby="sdm-approach">
        <div className="lps-sec__inner">
          <Head id="sdm-approach" eyebrow={c.approach.eyebrow} title={c.approach.title} intro={c.approach.intro} split />
          <ol className="lps-steps">
            {c.approach.steps.map((s, i) => (
              <li key={s.title} className={`lp-reveal${i === c.approach.highlight ? " is-on" : ""}`} style={d(i)}>
                <span className="lps-num">{pad(i)}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — CONNECTED JOURNEYS */}
      <section className="lps-sec lps-sec--dark lps-journeys" aria-labelledby="sdm-journeys">
        <div className="lps-sec__inner">
          <Head id="sdm-journeys" eyebrow={c.journeys.eyebrow} title={c.journeys.title} intro={c.journeys.intro} rule={false} split />
          <ol className="lps-rows">
            {c.journeys.rows.map((r, i) => (
              <li key={r.title} className="lp-reveal" style={d(i)}>
                <span className="lps-num">{pad(i)}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 — SELECTED SCREENS */}
      <section className="lps-sec lps-screens" aria-labelledby="sdm-screens">
        <div className="lps-sec__inner">
          <Head id="sdm-screens" eyebrow={c.screens.eyebrow} title={c.screens.title} intro={c.screens.intro} split />
          <ul className="lps-shots">
            {c.screens.items.map((s) => (
              <li key={s.title} className="lps-shot lp-reveal">
                <div className="lps-shot__frame">
                  <img src={s.src} alt={s.alt} width={520} height={368} loading="lazy" decoding="async" />
                </div>
                <div className="lps-shot__meta">
                  <h3>{s.title}</h3>
                  <p>{s.caption}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — RTL & DESIGN SYSTEM */}
      <section className="lps-sec lps-system" aria-labelledby="sdm-system">
        <div className="lps-sec__inner">
          <Head id="sdm-system" eyebrow={c.system.eyebrow} title={c.system.title} />
          <div className="lps-system__grid">
            <div className="lps-system__left">
              <p className="lps-intro lps-system__intro lp-reveal">{c.system.intro}</p>
              <figure className="lps-system__preview lp-reveal">
                <img src={c.system.preview} alt={c.system.previewAlt} width={552} height={378} loading="lazy" decoding="async" />
              </figure>
            </div>
            <ol className="lps-principles">
              {c.system.principles.map((p, i) => (
                <li key={p.title} className={`lp-reveal${i === c.system.highlight ? " is-on" : ""}`} style={d(i)}>
                  <span className="lps-num">{pad(i)}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 09 — OUTCOME */}
      <section className="lps-sec lps-sec--dark lps-outcome" aria-labelledby="sdm-outcome">
        <div className="lps-sec__inner">
          <Head id="sdm-outcome" eyebrow={c.outcome.eyebrow} title={c.outcome.title} rule={false} />
          <p className="lps-outcome__text lp-reveal">{c.outcome.text}</p>
          <ul className="lps-outcome__cards">
            {c.outcome.cards.map((card, i) => (
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
