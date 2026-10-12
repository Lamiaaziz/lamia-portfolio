import { CSSProperties } from "react";
import "@fontsource/almarai/400.css";
import { wayfindingContent } from "../content/wayfinding";
import { SiteLang, usePageMeta } from "../i18n";
import { OverviewCard } from "../components/OverviewCard";
import { SiteLayout } from "../Layout";
import { CaseHead } from "../components/CaseHead";
import "../aurafit.css";
import "../voko.css";
import "../webdesign.css";
import "../wayfinding.css";
import { useReveal } from "../useReveal";
import { useScrollFx } from "../scrollFx";

const pad = (i: number) => String(i + 1).padStart(2, "0");
const d = (i: number): CSSProperties => ({ ["--i" as string]: i });
const ARROWS = { left: "←", right: "→", up: "↑" } as const;

/** Cards with the number sitting on the same line as the title. */
function InlineCards({ items, className = "" }: { items: { title: string; text: string }[]; className?: string }) {
  return (
    <ol className={`lpf-inline ${className}`}>
      {items.map((it, i) => (
        <li key={it.title} className="lp-reveal" style={d(i % 3)}>
          <span className="lps-num">{pad(i)}</span>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </li>
      ))}
    </ol>
  );
}

export default function WayfindingCase({ lang }: { lang: SiteLang }) {
  const c = wayfindingContent[lang];
  usePageMeta(lang, c.metaTitle, c.metaDescription);
  useReveal();
  useScrollFx([lang]);

  return (
    <SiteLayout lang={lang} active="case-studies">
      <div className="lpv lpd lpf">
        {/* 01 — HERO */}
        <section className="lpv-hero lpd-hero lpf-hero" aria-labelledby="wf-title">
          <div className="lpv-hero__text">
            <span className="lpw-rule lp-in" style={d(0)} aria-hidden="true" />
            <p className="lps-eyebrow lpv-hero__eyebrow lp-in" style={d(0)}>{c.hero.eyebrow}</p>
            <h1 id="wf-title" className="lps-hero__title lpv-hero__title lpf-hero__title lp-in" style={d(1)}>
              {c.hero.title.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </h1>
            <p className="lpv-hero__lead lp-in" style={d(2)}>{c.hero.lead}</p>
            <p className="lpv-hero__body lp-in" style={d(3)}>{c.hero.body}</p>
            <ul className="lpv-chips lpd-chips lp-in" style={d(4)}>
              {c.hero.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
            <p className="lpf-note lp-in" style={d(5)}>{c.hero.note}</p>
          </div>

          {/* Illustrative bilingual sign — built in code, not project artwork */}
          <figure className="lpf-sign lp-in" style={d(2)} aria-label={c.sign.marker}>
            <div className="lpf-sign__head">
              <span className="lpf-sign__level" dir="ltr">P2</span>
              <span className="lpf-sign__marker">{c.sign.marker}</span>
            </div>
            <ul className="lpf-sign__rows" dir="ltr">
              {c.sign.rows.map((r, i) => (
                <li key={r.en} className={`lpf-tone--${r.tone}`} style={d(i)}>
                  <span className="lpf-sign__bar" aria-hidden="true" />
                  <span className="lpf-sign__en" lang="en">{r.en}</span>
                  <span className="lpf-sign__ar" lang="ar" dir="rtl">{r.ar}</span>
                  <span className={`lpf-sign__arrow lpf-sign__arrow--${r.arrow}`} aria-hidden="true">{ARROWS[r.arrow]}</span>
                </li>
              ))}
            </ul>
            <figcaption>{c.sign.footer}</figcaption>
          </figure>
        </section>

        {/* 02 — OVERVIEW */}
        <OverviewCard label={c.overviewLabel} items={c.overview} icons={["clock", "person", "building", "layers"]} />

        {/* 03 — CONTEXT */}
        <section className="lps-sec lpd-practice lpf-context" aria-labelledby="wf-context">
          <div className="lps-sec__inner lpd-practice__grid">
            <div>
              <CaseHead id="wf-context" eyebrow={c.context.eyebrow} title={c.context.title} intro={c.context.text} />
            </div>
            <div className="lpf-role lp-reveal">
              <p className="lps-label">{c.context.roleLabel}</p>
              <h3>{c.context.roleTitle}</h3>
              <p>{c.context.roleText}</p>
            </div>
          </div>
        </section>

        {/* 04 — USER NEEDS */}
        <section className="lps-sec lpf-users" aria-labelledby="wf-users">
          <div className="lps-sec__inner">
            <CaseHead id="wf-users" eyebrow={c.users.eyebrow} title={c.users.title} intro={c.users.intro} />
            <InlineCards items={c.users.items} />
          </div>
        </section>

        {/* 04b — SYSTEM AT A GLANCE */}
        <section className="lps-sec lpf-glance" aria-labelledby="wf-glance">
          <div className="lps-sec__inner">
            <CaseHead id="wf-glance" eyebrow={c.glance.eyebrow} title={c.glance.title} intro={c.glance.intro} />
            <div className="lpf-glance__grid">
              <div className="lpf-tower lp-reveal" role="img" aria-label={c.glance.zones.map((z) => z.title).join(", ")}>
                {c.glance.zones.map((z, i) => (
                  <div key={z.title} className={`lpf-tower__row lpf-tone--${z.tone}`}>
                    <span className={`lpf-tower__block lpf-tower__block--${i}`} aria-hidden="true">
                      {Array.from({ length: i === 0 ? 6 : i === 2 ? 3 : 0 }).map((_, k) => (
                        <i key={k} />
                      ))}
                    </span>
                    <span className="lpf-tower__text">
                      <small>{z.level}</small>
                      <strong>{z.title}</strong>
                      <span>{z.text}</span>
                    </span>
                  </div>
                ))}
              </div>
              <ul className="lpf-families lp-reveal">
                {c.glance.families.map((f, i) => (
                  <li key={f.label} className={`lpf-tone--${f.tone}`} style={d(i)}>
                    <span className="lpf-families__mark" aria-hidden="true">{f.mark}</span>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="lpf-note lp-reveal">{c.glance.note}</p>
          </div>
        </section>

        {/* 05 — STRATEGY */}
        <section className="lps-sec lps-sec--dark lpd-workflow lpf-strategy" aria-labelledby="wf-strategy">
          <div className="lps-sec__inner">
            <CaseHead id="wf-strategy" eyebrow={c.strategy.eyebrow} title={c.strategy.title} intro={c.strategy.intro} rule={false} />
            <ol className="lpd-cards lpd-cards--dark lpd-cards--4">
              {c.strategy.items.map((it, i) => (
                <li key={it.title} className="lp-reveal" style={d(i)}>
                  <span className="lps-num">{pad(i)}</span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 06 — PROCESS */}
        <section className="lps-sec lpf-process" aria-labelledby="wf-process">
          <div className="lps-sec__inner">
            <CaseHead id="wf-process" eyebrow={c.process.eyebrow} title={c.process.title} />
            <ol className="lpd-cards lpf-cards--3">
              {c.process.items.map((it, i) => (
                <li key={it.title} className="lp-reveal" style={d(i)}>
                  <span className="lps-num">{pad(i)}</span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 07 — SIGNAGE FAMILIES */}
        <section className="lps-sec lpf-signage" aria-labelledby="wf-signage">
          <div className="lps-sec__inner">
            <CaseHead id="wf-signage" eyebrow={c.signage.eyebrow} title={c.signage.title} intro={c.signage.intro} />
            <ol className="lpd-cards lpd-cards--4 lpf-toned">
              {c.signage.families.map((f, i) => (
                <li key={f.title} className={`lpf-tone--${f.tone} lp-reveal`} style={d(i)}>
                  <span className="lps-num">{pad(i)}</span>
                  <h3>{f.title}</h3>
                  <ul>
                    {f.list.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 08 — ZONING */}
        <section className="lps-sec lpf-zoning" aria-labelledby="wf-zoning">
          <div className="lps-sec__inner">
            <CaseHead id="wf-zoning" eyebrow={c.zoning.eyebrow} title={c.zoning.title} />
            <ul className="lpd-cards lpf-cards--3 lpf-toned lpf-zones">
              {c.zoning.zones.map((z, i) => (
                <li key={z.title} className={`lpf-tone--${z.tone} lp-reveal`} style={d(i)}>
                  <p className="lpf-zones__level">{z.level}</p>
                  <h3>{z.title}</h3>
                  <p className="lps-label">{c.zoning.usersLabel}</p>
                  <p className="lpf-zones__users">{z.users}</p>
                  <p>{z.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 09 — PRINCIPLES */}
        <section className="lps-sec lpf-principles" aria-labelledby="wf-principles">
          <div className="lps-sec__inner">
            <CaseHead id="wf-principles" eyebrow={c.principles.eyebrow} title={c.principles.title} />
            <InlineCards items={c.principles.items} />
          </div>
        </section>

        {/* 10 — VALUE & NEXT STEPS */}
        <section className="lps-sec lps-sec--dark lpv-outcome lpf-value" aria-labelledby="wf-value">
          <div className="lps-sec__inner lpv-outcome__grid">
            <div>
              <CaseHead id="wf-value" eyebrow={c.value.eyebrow} title={c.value.title} rule={false} />
              <p className="lpv-outcome__text lp-reveal">{c.value.text}</p>
            </div>
            <div>
              <p className="lps-eyebrow lpf-value__label lp-reveal">{c.value.nextLabel}</p>
              <InlineCards items={c.value.next} className="lpf-inline--dark" />
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
