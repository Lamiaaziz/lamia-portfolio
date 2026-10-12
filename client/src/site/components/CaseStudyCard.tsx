import { Link } from "wouter";
import type { CaseCard } from "../content/home";
import type { SiteLang } from "../i18n";
import { LongArrow } from "../Icons";

/** Large featured case study card (image panel + details), used on Home and Case Studies. */
export function CaseStudyCard({ card, lang, viewCase }: { card: CaseCard; lang: SiteLang; viewCase: string }) {
  return (
    <article className={`lp-case lp-case--${card.tone} lp-reveal`}>
      <div className="lp-case__visual">
        <img src={card.visual} alt={card.visualAlt} width={583} height={633} loading="lazy" decoding="async" />
      </div>
      <div className="lp-case__body">
        <div className="lp-case__top">
          <p className="lp-case__meta">
            <span className="lp-case__num">{card.num}</span>
            <span>{card.meta}</span>
          </p>
          <div className={`lp-case__logo${card.logo.boxed ? " is-boxed" : ""}`}>
            <img src={card.logo.src} alt={card.logo.alt} width={card.logo.w} height={card.logo.h} loading="lazy" />
          </div>
          <h3 className="lp-case__title">{card.title}</h3>
          <p className="lp-case__text">{card.body}</p>
        </div>
        <div className="lp-case__bottom">
          <ul className="lp-tags" aria-label="Focus areas">
            {card.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {card.outcome && (
            <p className="lp-case__outcome">
              <strong>{card.outcomeLabel}</strong>
              <span>{card.outcome}</span>
            </p>
          )}
          <Link href={card.href} className="lp-case__link">
            <span>{viewCase}</span>
            <LongArrow />
          </Link>
        </div>
      </div>
    </article>
  );
}

