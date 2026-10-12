import { CSSProperties, ReactNode } from "react";
import "@fontsource/fraunces/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/almarai/700.css";
import { technofarmContent, TECHNOFARM_URL } from "../content/technofarm";
import { SiteLang, usePageMeta } from "../i18n";
import { External } from "../Icons";
import { OverviewCard } from "../components/OverviewCard";
import { SiteLayout } from "../Layout";
import { BrowserShot, PhoneShot } from "../components/Mockups";
import { useReveal } from "../useReveal";
import { useScrollFx } from "../scrollFx";

const pad = (i: number) => String(i + 1).padStart(2, "0");

/** Keeps hyphenated words such as "e-commerce" on one line. */
const keepHyphens = (text: string) =>
  text.split(/(\S+-\S+)/).map((part, i) => (i % 2 ? <span key={i} className="lpt-nowrap">{part}</span> : part));

/** Section opening: yellow rule (light sections), label, heading and intro. */
function SectionHead({ eyebrow, title, intro, dark, id }: { eyebrow: string; title: string; intro?: string; dark?: boolean; id: string }) {
  return (
    <header className={`lpt-head${dark ? " lpt-head--dark" : ""} lp-reveal`}>
      {!dark && <span className="lpw-rule" aria-hidden="true" />}
      <p className="lpt-eyebrow">{eyebrow}</p>
      <h2 id={id} className="lpt-h2">{keepHyphens(title)}</h2>
      {intro && <p className="lpt-intro">{intro}</p>}
    </header>
  );
}

function Section({ dark, id, className = "", children, label }: { dark?: boolean; id: string; className?: string; children: ReactNode; label: string }) {
  return (
    <section className={`lpt-section${dark ? " lpt-section--dark" : ""} ${className}`} aria-labelledby={label} id={id}>
      <div className="lpt-section__inner">{children}</div>
    </section>
  );
}

function LiveButton({ label }: { label: string }) {
  return (
    <a href={TECHNOFARM_URL} target="_blank" rel="noopener noreferrer" className="lp-btn lp-btn--dark lp-btn--lg lpt-live">
      <span>{label}</span>
      <External />
    </a>
  );
}

export default function TechnoFarm({ lang }: { lang: SiteLang }) {
  const c = technofarmContent[lang];
  usePageMeta(lang, c.metaTitle, c.metaDescription);
  useReveal();
  useScrollFx([lang]);
  const d = (i: number): CSSProperties => ({ ["--i" as string]: i });

  return (
    <SiteLayout lang={lang} active="case-studies">
      {/* 01 — HERO */}
      <section className="lpt-hero" aria-labelledby="tf-title">
        <div className="lpt-hero__text">
          <span className="lpw-rule lp-in" style={d(0)} aria-hidden="true" />
          <p className="lpt-eyebrow lp-in" style={d(0)}>{c.hero.eyebrow}</p>
          <h1 id="tf-title" className="lpt-hero__title lp-in" style={d(1)}>{c.hero.title}</h1>
          <p className="lpt-hero__lead lp-in" style={d(2)}>{c.hero.lead}</p>
          <p className="lpt-hero__body lp-in" style={d(3)}>{c.hero.body}</p>
          <ul className="lpt-chips lp-in" style={d(4)}>
            {c.hero.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
          <div className="lp-in" style={d(5)}>
            <LiveButton label={c.hero.cta} />
          </div>
        </div>
        <figure className="lpt-hero__preview lp-in" style={d(2)}>
          <BrowserShot src={c.hero.desktop} alt={c.hero.alt} className="lpt-hero__browser" scroll={9} />
          <PhoneShot src={c.hero.mobile} alt="" size="sm" className="lpt-hero__phone" />
          <figcaption className="lpt-hero__caption">{c.hero.caption}</figcaption>
        </figure>
      </section>

      {/* 02 — OVERVIEW */}
      <OverviewCard label={lang === "en" ? "Project overview" : "نظرة عامة على المشروع"} items={c.overview} icons={["building", "person", "pages", "tools"]} />

      {/* 03 — BRIEF */}
      <Section id="brief" label="tf-brief">
        <SectionHead id="tf-brief" eyebrow={c.brief.eyebrow} title={c.brief.title} />
        <div className="lpt-brief">
          {c.brief.cards.map((card) => (
            <article key={card.label} className={`lpt-brief__card${card.dark ? " is-dark" : ""} lp-reveal`}>
              <p className="lpt-label">{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 04 — OWNERSHIP */}
      <Section id="ownership" label="tf-own" dark>
        <SectionHead id="tf-own" eyebrow={c.ownership.eyebrow} title={c.ownership.title} intro={c.ownership.intro} dark />
        <ol className="lpt-steps6">
          {c.ownership.steps.map((s, i) => (
            <li key={s.title} className="lp-reveal" style={d(i)}>
              <span className="lpt-num">{pad(i)}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="lpt-tag">{s.tag}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* 05 — AUDIENCE & SITE MAP */}
      <Section id="audience" label="tf-aud">
        <SectionHead id="tf-aud" eyebrow={c.audience.eyebrow} title={c.audience.title} intro={c.audience.intro} />
        <div className="lpt-audience">
          <ol className="lpt-groups">
            {c.audience.groups.map((g, i) => (
              <li key={g.title} className="lp-reveal">
                <span className="lpt-num lpt-num--muted">{pad(i)}</span>
                <div>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="lpt-map lp-reveal">
            <p className="lpt-label">{c.audience.mapLabel}</p>
            <div className="lpt-map__tree">
              <span className="lpt-map__home">{c.audience.home}</span>
              <ul>
                {c.audience.pages.map((p, i) => (
                  <li key={p}>
                    <span className="lpt-map__node">{p}</span>
                    {i === 1 && (
                      <>
                        <span className="lpt-map__arrow ico-dir" aria-hidden="true">→</span>
                        <span className="lpt-map__node">{c.audience.detail}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <p className="lpt-map__note">{c.audience.note}</p>
          </div>
        </div>
      </Section>

      {/* 06 — SELECTED SCREENS */}
      <Section id="screens" label="tf-screens">
        <SectionHead id="tf-screens" eyebrow={c.screens.eyebrow} title={c.screens.title} intro={c.screens.intro} />
        <div className="lpt-screens">
          {c.screens.large.map((s, i) => (
            <figure key={s.label} className={`lpt-shot lpt-shot--${i === 0 ? "tall" : "wide"} lp-reveal`}>
              <BrowserShot src={s.src} alt={s.alt} scroll={i === 0 ? 10 : 8} />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="lpt-screens-sm">
          {c.screens.small.map((s) => (
            <figure key={s.label} className="lpt-shot lp-reveal">
              <BrowserShot src={s.src} alt={s.alt} size="sm" scroll={6} />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 07 — CATALOG THINKING */}
      <Section id="catalog" label="tf-cat" dark>
        <SectionHead id="tf-cat" eyebrow={c.catalog.eyebrow} title={c.catalog.title} intro={c.catalog.intro} dark />
        <ol className="lpt-cards4">
          {c.catalog.cards.map((card, i) => (
            <li key={card.title} className="lp-reveal" style={d(i)}>
              <span className="lpt-num">{pad(i)}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 08 — ARABIC + ENGLISH */}
      <Section id="bilingual" label="tf-bi">
        <SectionHead id="tf-bi" eyebrow={c.bilingual.eyebrow} title={c.bilingual.title} intro={c.bilingual.intro} />
        <div className="lpt-bi">
          {c.bilingual.desktops.map((s) => (
            <figure key={s.label} className="lpt-shot lp-reveal">
              <BrowserShot src={s.src} alt={s.alt} scroll={10} />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="lpt-phones">
          {c.bilingual.phones.map((s) => (
            <figure key={s.label} className="lpt-shot lp-reveal">
              <PhoneShot src={s.src} alt={s.alt} />
              <figcaption>{s.label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 09 — VISUAL SYSTEM */}
      <Section id="visual" label="tf-vis">
        <SectionHead id="tf-vis" eyebrow={c.visual.eyebrow} title={c.visual.title} intro={c.visual.intro} />
        <ul className="lpt-swatches">
          {c.visual.colors.map((col) => (
            <li key={col.hex} className="lp-reveal">
              <span className={`lpt-swatch${col.edge ? " has-edge" : ""}`} style={{ background: col.hex }} aria-hidden="true" />
              <strong>{col.name}</strong>
              <span dir="ltr">{col.hex}</span>
            </li>
          ))}
        </ul>
        <ul className="lpt-fonts">
          {c.visual.fonts.map((f) => (
            <li key={f.name} className="lp-reveal">
              <span className="lpt-fonts__sample" style={{ fontFamily: `"${f.family}", serif`, fontWeight: f.family === "Fraunces" ? 600 : f.ar ? 700 : 400 }} lang={f.ar ? "ar" : "en"} aria-hidden="true">
                {f.sample}
              </span>
              <span>
                <strong lang="en">{f.name}</strong>
                <span>{f.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 10 — AI */}
      <Section id="ai" label="tf-ai" dark>
        <SectionHead id="tf-ai" eyebrow={c.ai.eyebrow} title={c.ai.title} intro={c.ai.intro} dark />
        <ol className="lpt-flow lp-reveal">
          {c.ai.flow.map((f, i) => (
            <li key={f} className={i === c.ai.highlight ? "is-ai" : ""}>
              {f}
            </li>
          ))}
        </ol>
        <div className="lpt-ai-cards">
          {c.ai.cards.map((card) => (
            <article key={card.label} className="lp-reveal">
              <p className="lpt-label">{card.label}</p>
              <p className="lpt-ai-cards__text">{card.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 11 — OUTCOME */}
      <Section id="outcome" label="tf-out" className="lpt-outcome-sec">
        <div className="lpt-outcome">
          <div className="lpt-outcome__text">
            <SectionHead id="tf-out" eyebrow={c.outcome.eyebrow} title={c.outcome.title} intro={c.outcome.text} />
            <div className="lp-reveal">
              <LiveButton label={c.outcome.cta} />
            </div>
          </div>
          <ul className="lpt-stats">
            {c.outcome.stats.map((s) => (
              <li key={s.label} className="lp-reveal">
                <strong><span dir="ltr">{s.value}</span></strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

    </SiteLayout>
  );
}
