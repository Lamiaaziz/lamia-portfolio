import { CSSProperties } from "react";
import { experienceContent, TOOLS } from "../content/experience";
import { SiteLang, usePageMeta } from "../i18n";
import { SiteLayout } from "../Layout";
import { ContactCta } from "../components/ContactCta";
import { useReveal } from "../useReveal";
import { useScrollFx } from "../scrollFx";

export default function Experience({ lang }: { lang: SiteLang }) {
  const c = experienceContent[lang];
  usePageMeta(lang, c.metaTitle, c.metaDescription);
  useReveal();
  useScrollFx([lang]);
  const d = (i: number): CSSProperties => ({ ["--i" as string]: i });

  return (
    <SiteLayout lang={lang} active="experience">
      {/* ── HERO ── */}
      <section className="lpx-hero" aria-labelledby="exp-title">
        <div className="lpx-hero__stage">
          <div className="lp-hero__head">
          <div className="lp-hero__arch" aria-hidden="true" />
          <p className="lpx-hero__eyebrow lp-in" style={d(0)}>
            <span className="lp-hero__rule" aria-hidden="true" />
            <span>{c.eyebrow}</span>
            <span className="lp-hero__rule" aria-hidden="true" />
          </p>
          <h1 id="exp-title" className="lpx-hero__title">
            <span className="lpx-hero__top lp-in" style={d(1)}>{c.heroTop}</span>
            <span className="lpx-hero__rest lp-in" style={d(2)}>
              {c.heroRest.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </span>
          </h1>
          </div>
          <a href="#career" className="lpx-hero__arrow lp-in" style={d(3)} aria-label={c.scrollLabel}>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
              <path d="M21.833 3V41" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M34.667 28 21.833 40.833 9 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="lpx-hero__intro lp-in" style={d(4)}>{c.intro}</p>
        </div>
      </section>

      {/* ── CAREER HISTORY ── */}
      <section id="career" className="lpx-career" aria-labelledby="career-title">
        <div className="lpx-career__inner">
          <div className="lpx-career__head lp-reveal">
            <div>
              <p className="lpx-label">{c.historyEyebrow}</p>
              <h2 id="career-title" className="lpx-career__title">{c.historyTitle}</h2>
            </div>
            <p className="lpx-career__intro">{c.historyIntro}</p>
          </div>
          <ol className="lpx-roles">
            {c.roles.map((r) => (
              <li key={r.title + r.org} className="lpx-role lp-reveal">
                <div className="lpx-role__head">
                  <div>
                    <h3 className="lpx-role__title">{r.title}</h3>
                    <p className="lpx-role__org">{r.org}</p>
                  </div>
                  <p className="lpx-role__dates">{r.dates}</p>
                </div>
                <ul className="lpx-role__points">
                  {r.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="lpx-caps" aria-labelledby="caps-title">
        <div className="lpx-caps__head lp-reveal">
          <p className="lpx-label lpx-label--dark">{c.capEyebrow}</p>
          <h2 id="caps-title" className="lpx-caps__title">
            {c.capTitle[0]}
            <br />
            <span className="lpx-caps__accent">{c.capTitle[1]}</span>
          </h2>
          <p className="lpx-caps__intro">{c.capIntro}</p>
        </div>
        <ul className="lpx-caps__grid">
          {c.capabilities.map((cap) => (
            <li key={cap.title} className="lpx-cap lp-reveal">
              <span className="lpx-cap__icon" aria-hidden="true">
                <img src={cap.icon} alt="" width={23} height={23} />
              </span>
              <h3 className="lpx-cap__title">{cap.title}</h3>
              <p className="lpx-cap__text">{cap.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── WHAT I BRING ── */}
      <section className="lpx-bring" aria-labelledby="bring-title">
        <div className="lpx-bring__inner lp-reveal">
          <p className="lpx-bring__eyebrow">{c.bringEyebrow}</p>
          <h2 id="bring-title" className="lpx-bring__title">{c.bringTitle}</h2>
          <p className="lpx-bring__intro">{c.bringIntro}</p>
          <ol className="lpx-pillars">
            {c.pillars.map((p, i) => (
              <li key={p.title}>
                <span className="lpx-pillars__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="lpx-tools" aria-labelledby="tools-title">
        <div className="lpx-tools__inner lp-reveal">
          <div className="lpx-tools__head">
            <p className="lpx-tools__eyebrow">{c.toolsEyebrow}</p>
            <h2 id="tools-title" className="lpx-tools__title">{c.toolsTitle}</h2>
          </div>
          <ul className="lpx-tools__list">
            {TOOLS.map((t) => (
              <li key={t.name}>
                <span className="lpx-tool__mark" style={{ background: t.color, color: t.dark ? "#1f3227" : "#ffffff" }} aria-hidden="true">
                  {t.mark}
                </span>
                <span lang="en">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta lang={lang} />
    </SiteLayout>
  );
}
