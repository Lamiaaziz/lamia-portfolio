import { travelTalesContent } from "../content/traveltales";
import type { SiteLang } from "../i18n";
import { ConceptCase } from "../components/ConceptCase";

export default function TravelTalesCase({ lang }: { lang: SiteLang }) {
  return <ConceptCase lang={lang} c={travelTalesContent[lang]} idp="tt" />;
}
