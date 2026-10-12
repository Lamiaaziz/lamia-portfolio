import { CSSProperties } from "react";
import { visualDesignContent } from "../content/visualdesign";
import { SiteLang, usePageMeta } from "../i18n";
import { OverviewCard } from "../components/OverviewCard";
import { SiteLayout } from "../Layout";
import { CaseHead } from "../components/CaseHead";
import "../aurafit.css";
import "../voko.css";
import "../webdesign.css";
import "../visualdesign.css";
import { useReveal } from "../useReveal";
import { useScrollFx } from "../scrollFx";

const pad = (i: number) => String(i + 1).padStart(2, "0");
const d = (i: number): CSSProperties => ({ ["--i" as string]: i });

type Pic = { src: string; alt: string };

function Gallery({ pics, className }: { pics: Pic[]; className: string }) {
  return (
    <ul className={`lpg ${className}`}>
      {pics.map((p, i) => (
        <li key={p.src} className={`lpg__item lpg__item--${i + 1} lp-reveal`} style={d(i % 4)}>
          <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  );
}

function Project({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <section className={`lps-sec lpg-sec lpg-sec--${id}`} aria-labelledby={`vd-${id}`}>
      <div className="lps-sec__inner">
        <CaseHead id={`vd-${id}`} eyebrow={eyebrow} title={title} intro={intro} />
        {children}
      </div>
    </section>
  );
}

export default function VisualDesignCase({ lang }: { lang: SiteLang }) {
  const c = visualDesignContent[lang];
  usePageMeta(lang, c.metaTitle, c.metaDescription);
  useReveal();
  useScrollFx([lang]);

  return (
    <SiteLayout lang={lang} active="case-studies">
      <div className="lpv lpd lpvd">
        {/* 01 — HERO */}
        <section className="lpv-hero lpd-hero lpvd-hero" aria-labelledby="vd-title">
          <div className="lpv-hero__text">
            <span className="lpw-rule lp-in" style={d(0)} aria-hidden="true" />
            <p className="lps-eyebrow lpv-hero__eyebrow lp-in" style={d(0)}>{c.hero.eyebrow}</p>
            <h1 id="vd-title" className="lps-hero__title lpv-hero__title lp-in" style={d(1)}>{c.hero.title}</h1>
            <p className="lpv-hero__lead lp-in" style={d(2)}>{c.hero.lead}</p>
            <p className="lpv-hero__body lp-in" style={d(3)}>{c.hero.body}</p>
            <ul className="lpv-chips lp-in" style={d(4)}>
              {c.hero.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
          <figure className="lpv-hero__visual lp-in" style={d(2)}>
            <img src={c.hero.visual} alt={c.hero.visualAlt} width={576} height={548} decoding="async" fetchPriority="high" />
          </figure>
        </section>

        {/* 02 — OVERVIEW */}
        <OverviewCard label={c.overviewLabel} items={c.overview} icons={["layers", "pin", "tag", "pages"]} />

        {/* 03 — PRACTICE */}
        <section className="lps-sec lpvd-practice" aria-labelledby="vd-practice">
          <div className="lps-sec__inner">
            <CaseHead id="vd-practice" eyebrow={c.practice.eyebrow} title={c.practice.title} intro={c.practice.intro} />
            <ol className="lpd-cards lpd-cards--4">
              {c.practice.items.map((it, i) => (
                <li key={it.title} className="lp-reveal" style={d(i)}>
                  <span className="lps-num">{pad(i)}</span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 04–08 — PROJECTS */}
        <Project id="qr" eyebrow={c.qr.eyebrow} title={c.qr.title} intro={c.qr.intro}>
          <Gallery pics={c.qr.pics} className="lpg--qr" />
        </Project>

        <Project id="campaigns" eyebrow={c.campaigns.eyebrow} title={c.campaigns.title} intro={c.campaigns.intro}>
          <Gallery pics={c.campaigns.pics.slice(0, 9)} className="lpg--campaigns" />
          <Gallery pics={c.campaigns.pics.slice(9)} className="lpg--campaigns-extra" />
        </Project>

        <Project id="weqaa" eyebrow={c.weqaa.eyebrow} title={c.weqaa.title} intro={c.weqaa.intro}>
          <Gallery pics={[c.weqaa.pic]} className="lpg--weqaa" />
        </Project>

        <Project id="telescope" eyebrow={c.telescope.eyebrow} title={c.telescope.title} intro={c.telescope.intro}>
          <Gallery pics={c.telescope.pics} className="lpg--telescope" />
        </Project>

        <Project id="packaging" eyebrow={c.packaging.eyebrow} title={c.packaging.title} intro={c.packaging.intro}>
          <Gallery pics={c.packaging.pics} className="lpg--packaging" />
        </Project>

        {/* 09 — REFLECTION */}
        <section className="lps-sec lps-sec--dark lpv-outcome lpvd-reflection" aria-labelledby="vd-reflection">
          <div className="lps-sec__inner lpv-outcome__grid">
            <div>
              <CaseHead id="vd-reflection" eyebrow={c.reflection.eyebrow} title={c.reflection.title} rule={false} />
              <p className="lpv-outcome__text lp-reveal">{c.reflection.intro}</p>
            </div>
            <ol className="lpv-outcome__cards">
              {c.reflection.items.map((card, i) => (
                <li key={card.title} className="lp-reveal" style={d(i)}>
                  <span className="lps-num">{pad(i)}</span>
                  <h3 className="lpvd-reflection__title">{card.title}</h3>
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
