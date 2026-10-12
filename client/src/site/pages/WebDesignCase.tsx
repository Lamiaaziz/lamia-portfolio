import { CSSProperties } from "react";
import { webDesignContent, type WebProject } from "../content/webdesign";
import { SiteLang, usePageMeta } from "../i18n";
import { OverviewCard } from "../components/OverviewCard";
import { SiteLayout } from "../Layout";
import { CaseHead } from "../components/CaseHead";
import "../aurafit.css";
import "../voko.css";
import "../webdesign.css";
import { useReveal } from "../useReveal";
import { useScrollFx } from "../scrollFx";

const pad = (i: number) => String(i + 1).padStart(2, "0");
const d = (i: number): CSSProperties => ({ ["--i" as string]: i });

function Cards({ items, dark = false, className = "" }: { items: { title: string; text: string }[]; dark?: boolean; className?: string }) {
  return (
    <ol className={`lpd-cards${dark ? " lpd-cards--dark" : ""} ${className}`}>
      {items.map((it, i) => (
        <li key={it.title} className="lp-reveal" style={d(i)}>
          <span className="lps-num">{pad(i)}</span>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </li>
      ))}
    </ol>
  );
}

function Project({ p, id, flip }: { p: WebProject; id: string; flip: boolean }) {
  return (
    <section className={`lps-sec lpd-project${flip ? " lpd-project--flip" : ""}`} aria-labelledby={id}>
      <div className="lps-sec__inner lpd-project__grid">
        <div className="lpd-project__text">
          <CaseHead id={id} eyebrow={p.eyebrow} title={p.title} intro={p.intro} />
          <ul className="lpv-chips lpd-chips lp-reveal">
            {p.chips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="lpd-label lp-reveal">{p.listLabel}</p>
          <Cards items={p.list} className="lpd-cards--2" />
          <div className="lpd-note lp-reveal">
            <p className="lpd-label">{p.noteLabel}</p>
            <p className="lpd-note__title">{p.noteTitle}</p>
            <p className="lpd-note__text">{p.noteText}</p>
          </div>
        </div>
        <figure className={`lpd-page lpd-page--${p.tone} lp-reveal`}>
          <img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" />
        </figure>
      </div>
    </section>
  );
}

export default function WebDesignCase({ lang }: { lang: SiteLang }) {
  const c = webDesignContent[lang];
  usePageMeta(lang, c.metaTitle, c.metaDescription);
  useReveal();
  useScrollFx([lang]);

  return (
    <SiteLayout lang={lang} active="case-studies">
      <div className="lpv lpd">
        {/* 01 — HERO */}
        <section className="lpv-hero lpd-hero" aria-labelledby="wd-title">
          <div className="lpv-hero__text">
            <span className="lpw-rule lp-in" style={d(0)} aria-hidden="true" />
            <p className="lps-eyebrow lpv-hero__eyebrow lp-in" style={d(0)}>{c.hero.eyebrow}</p>
            <h1 id="wd-title" className="lps-hero__title lpv-hero__title lp-in" style={d(1)}>{c.hero.title}</h1>
            <p className="lpv-hero__lead lp-in" style={d(2)}>{c.hero.lead}</p>
            <p className="lpv-hero__body lp-in" style={d(3)}>{c.hero.body}</p>
            <ul className="lpv-chips lpd-chips lp-in" style={d(4)}>
              {c.hero.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
          <figure className="lpv-hero__visual lp-in" style={d(2)}>
            <img src={c.hero.visual} alt={c.hero.visualAlt} width={550} height={545} decoding="async" fetchPriority="high" />
          </figure>
        </section>

        {/* 02 — OVERVIEW */}
        <OverviewCard label={c.overviewLabel} items={c.overview} icons={["person", "pages", "screen", "tools"]} />

        {/* 03 — PRACTICE */}
        <section className="lps-sec lpd-practice" aria-labelledby="wd-practice">
          <div className="lps-sec__inner lpd-practice__grid">
            <div>
              <CaseHead id="wd-practice" eyebrow={c.practice.eyebrow} title={c.practice.title} intro={c.practice.text} />
            </div>
            <blockquote className="lpd-quote lp-reveal">
              <span className="lpd-quote__mark" aria-hidden="true">“</span>
              <p>{c.practice.quote}</p>
              <footer className="lpd-label">{c.practice.quoteTag}</footer>
            </blockquote>
          </div>
        </section>

        {/* 04 — WORKFLOW */}
        <section className="lps-sec lps-sec--dark lpd-workflow" aria-labelledby="wd-workflow">
          <div className="lps-sec__inner">
            <CaseHead id="wd-workflow" eyebrow={c.workflow.eyebrow} title={c.workflow.title} intro={c.workflow.intro} rule={false} />
            <Cards items={c.workflow.steps} dark className="lpd-cards--4" />
          </div>
        </section>

        {/* 05–06 — PROJECTS */}
        {c.projects.map((p, i) => (
          <Project key={p.eyebrow} p={p} id={`wd-project-${i + 1}`} flip={i % 2 === 1} />
        ))}

        {/* 07 — CAPABILITIES */}
        <section className="lps-sec lpd-capabilities" aria-labelledby="wd-capabilities">
          <div className="lps-sec__inner">
            <CaseHead id="wd-capabilities" eyebrow={c.capabilities.eyebrow} title={c.capabilities.title} />
            <Cards items={c.capabilities.items} className="lpd-cards--4" />
          </div>
        </section>

        {/* 08 — OUTCOME */}
        <section className="lps-sec lps-sec--dark lpv-outcome lpd-outcome" aria-labelledby="wd-outcome">
          <div className="lps-sec__inner lpv-outcome__grid">
            <div>
              <CaseHead id="wd-outcome" eyebrow={c.outcome.eyebrow} title={c.outcome.title} rule={false} />
              <p className="lpv-outcome__text lp-reveal">{c.outcome.text}</p>
            </div>
            <ul className="lpd-stats">
              {c.outcome.stats.map((s, i) => (
                <li key={s.label} className="lp-reveal" style={d(i)}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
