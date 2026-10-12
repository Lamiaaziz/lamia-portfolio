import { homeContent } from "../content/home";
import { CONTACT, SiteLang } from "../i18n";
import { External, Mail } from "../Icons";

/** "Open to product design roles" contact block, shared by every page. */
export function ContactCta({ lang }: { lang: SiteLang }) {
  const c = homeContent[lang].contact;
  return (
    <section id="contact" className="lp-cta lp-reveal" aria-labelledby="cta-title">
      <div className="lp-cta__circle" aria-hidden="true" />
      <p className="lp-cta__label">{c.label}</p>
      <h2 id="cta-title" className="lp-cta__title">{c.title}</h2>
      <p className="lp-cta__text">{c.text}</p>
      <div className="lp-cta__actions">
        <a href={`mailto:${CONTACT.email}`} className="lp-btn lp-btn--yellow lp-btn--lg">
          <span>{c.email}</span>
          <Mail />
        </a>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="lp-btn lp-btn--outline-light lp-btn--lg">
          <External />
          <span>{c.linkedin}</span>
        </a>
      </div>
    </section>
  );
}
