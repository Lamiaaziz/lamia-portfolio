import { CSSProperties } from "react";
import { vokoContent } from "../content/voko";
import { SiteLang, usePageMeta } from "../i18n";
import { OverviewCard } from "../components/OverviewCard";
import { SiteLayout } from "../Layout";
import { CaseHead } from "../components/CaseHead";
import "../aurafit.css";
import "../voko.css";
import { useReveal } from "../useReveal";
import { useScrollFx } from "../scrollFx";

const pad = (i: number) => String(i + 1).padStart(2, "0");

function Screens({ items, className }: { items: { src: string; label: string; alt: string }[]; className: string }) {
  return (
    <ul className={`lpv-screens ${className}`}>
      {items.map((s, i) => (
        <li key={s.label} className="lpv-screen lp-reveal" style={{ ["--i" as string]: i } as CSSProperties}>
          <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
          <p>{s.label}</p>
        </li>
      ))}
    </ul>
  );
}

export default function VokoCase({ lang }: { lang: SiteLang }) {
  const c = vokoContent[lang];
  usePageMeta(lang, c.metaTitle, c.metaDescription);
  useReveal();
  useScrollFx([lang]);
  const d = (i: number): CSSProperties => ({ ["--i" as string]: i });

  return (
    <SiteLayout lang={lang} active="case-studies">
      <div className="lpv">
        {/* 01 — HERO */}
        <section className="lpv-hero" aria-labelledby="vk-title">
          <div className="lpv-hero__text">
            <span className="lpw-rule lp-in" style={d(0)} aria-hidden="true" />
            <p className="lps-eyebrow lpv-hero__eyebrow lp-in" style={d(0)}>{c.hero.eyebrow}</p>
            <h1 id="vk-title" className="lps-hero__title lpv-hero__title lp-in" style={d(1)} lang="en">
              {c.hero.title}
            </h1>
            <p className="lpv-hero__lead lp-in" style={d(2)}>{c.hero.lead}</p>
            <p className="lpv-hero__body lp-in" style={d(3)}>{c.hero.body}</p>
            <ul className="lpv-chips lp-in" style={d(4)}>
              {c.hero.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
          <figure className="lpv-hero__visual lp-in" style={d(2)}>
            <img src={c.hero.visual} alt={c.hero.visualAlt} width={580} height={586} decoding="async" fetchPriority="high" />
          </figure>
        </section>

        {/* 02 — OVERVIEW */}
        <OverviewCard label={c.overviewLabel} items={c.overview} icons={["layers", "person", "tag", "phone"]} />

        {/* 03 — PROBLEM REFRAMING */}
        <section className="lps-sec lpv-problem" aria-labelledby="vk-problem">
          <div className="lps-sec__inner">
            <CaseHead id="vk-problem" eyebrow={c.problem.eyebrow} title={c.problem.title} />
            <div className="lpv-problem__cards">
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

        {/* 04 — PERSONA */}
        <section className="lps-sec lpv-persona" aria-labelledby="vk-persona">
          <div className="lps-sec__inner">
            <CaseHead id="vk-persona" eyebrow={c.persona.eyebrow} title={c.persona.title} intro={c.persona.intro} />
            <div className="lpv-persona__card lp-reveal">
              <div className="lpv-persona__who">
                <span className="lpv-persona__avatar" aria-hidden="true">{c.persona.name.charAt(0)}</span>
                <h3>{c.persona.name}</h3>
                <p>{c.persona.role}</p>
              </div>
              <div>
                <p className="lps-label">{c.persona.goalsTitle}</p>
                <ul>
                  {c.persona.goals.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="lps-label">{c.persona.painTitle}</p>
                <ul>
                  {c.persona.pains.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — USER FLOW */}
        <section className="lps-sec lps-sec--dark lpv-flow" aria-labelledby="vk-flow">
          <div className="lps-sec__inner">
            <CaseHead id="vk-flow" eyebrow={c.flow.eyebrow} title={c.flow.title} intro={c.flow.intro} rule={false} />
            <ol className="lpv-flow__grid">
              {c.flow.steps.map((s, i) => (
                <li key={s.title} className="lp-reveal" style={d(i % 3)}>
                  <span className="lpv-flow__top">
                    <span className="lps-num">{pad(i)}</span>
                    <h3>{s.title}</h3>
                  </span>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 06 — DESIGN PROCESS */}
        <section className="lps-sec lpa-process lpv-process" aria-labelledby="vk-process">
          <div className="lps-sec__inner">
            <CaseHead id="vk-process" eyebrow={c.process.eyebrow} title={c.process.title} />
            <ol className="lpa-steps">
              {c.process.steps.map((s, i) => (
                <li key={s} className="lp-reveal" style={d(i)}>
                  <span className="lps-num">{pad(i)}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 07 — ONBOARDING */}
        <section className="lps-sec lpv-onboarding" aria-labelledby="vk-onboarding">
          <div className="lps-sec__inner">
            <CaseHead id="vk-onboarding" eyebrow={c.onboarding.eyebrow} title={c.onboarding.title} intro={c.onboarding.intro} />
            <Screens items={c.onboarding.screens} className="lpv-screens--4" />
          </div>
        </section>

        {/* 08 — ACCOUNT SETUP */}
        <section className="lps-sec lpv-account" aria-labelledby="vk-account">
          <div className="lps-sec__inner lpv-account__grid">
            <div className="lpv-account__text">
              <CaseHead id="vk-account" eyebrow={c.account.eyebrow} title={c.account.title} intro={c.account.intro} />
              <div className="lpv-principles lp-reveal">
                <p className="lps-label">{c.account.principlesTitle}</p>
                <ul>
                  {c.account.principles.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Screens items={c.account.screens} className="lpv-screens--3" />
          </div>
        </section>

        {/* 09 — PURCHASE JOURNEY */}
        <section className="lps-sec lpv-shopping" aria-labelledby="vk-shopping">
          <div className="lps-sec__inner">
            <CaseHead id="vk-shopping" eyebrow={c.shopping.eyebrow} title={c.shopping.title} intro={c.shopping.intro} />
            <Screens items={c.shopping.screens} className="lpv-screens--5" />
            <div className="lpv-note lp-reveal">
              <p className="lpv-note__title">{c.shopping.noteTitle}</p>
              <p>{c.shopping.noteText}</p>
            </div>
          </div>
        </section>

        {/* 10 — OUTCOME */}
        <section className="lps-sec lps-sec--dark lpv-outcome" aria-labelledby="vk-outcome">
          <div className="lps-sec__inner lpv-outcome__grid">
            <div>
              <CaseHead id="vk-outcome" eyebrow={c.outcome.eyebrow} title={c.outcome.title} rule={false} />
              <p className="lpv-outcome__text lp-reveal">{c.outcome.text}</p>
            </div>
            <ol className="lpv-outcome__cards">
              {c.outcome.cards.map((card, i) => (
                <li key={card.title} className="lp-reveal" style={d(i)}>
                  <span className="lpv-flow__top">
                    <span className="lps-num">{pad(i)}</span>
                    <h3>{card.title}</h3>
                  </span>
                  <p>{card.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
