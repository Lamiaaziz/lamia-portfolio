import { auraFitContent } from "../content/aurafit";
import type { SiteLang } from "../i18n";
import { ConceptCase } from "../components/ConceptCase";

export default function AuraFitCase({ lang }: { lang: SiteLang }) {
  return <ConceptCase lang={lang} c={auraFitContent[lang]} idp="af" />;
}
