import { Link, useLocation } from "wouter";
import { localPath, SiteLang, usePageMeta } from "../i18n";
import { SiteLayout } from "../Layout";

const COPY = {
  en: {
    title: "Page not found — Lamia Alrowaished",
    description: "This page doesn't exist. Head back to the home page or browse the case studies.",
    eyebrow: "404",
    heading: "This page took a different route.",
    text: "The link may be old or mistyped. Every project now lives on the Case Studies page.",
    home: "Back to home",
    work: "View case studies",
  },
  ar: {
    title: "الصفحة غير موجودة — لمياء الرويشد",
    description: "هذه الصفحة غير موجودة. عودي إلى الصفحة الرئيسية أو تصفّحي دراسات الحالة.",
    eyebrow: "404",
    heading: "يبدو أن هذه الصفحة سلكت طريقًا آخر.",
    text: "قد يكون الرابط قديمًا أو مكتوبًا بشكل خاطئ. جميع المشاريع متاحة الآن في صفحة دراسات الحالة.",
    home: "العودة إلى الرئيسية",
    work: "عرض دراسات الحالة",
  },
} as const;

export default function NotFoundPage() {
  const [location] = useLocation();
  const lang: SiteLang = location === "/ar" || location.startsWith("/ar/") ? "ar" : "en";
  const c = COPY[lang];
  usePageMeta(lang, c.title, c.description);

  return (
    <SiteLayout lang={lang} active="none">
      <section className="lp-404" aria-labelledby="nf-title">
        <span className="lpw-rule" aria-hidden="true" />
        <p className="lps-eyebrow">{c.eyebrow}</p>
        <h1 id="nf-title" className="lps-h2">{c.heading}</h1>
        <p className="lps-intro">{c.text}</p>
        <div className="lp-404__actions">
          <Link href={localPath("/", lang)} className="lp-btn lp-btn--dark">{c.home}</Link>
          <Link href={localPath("/case-studies", lang)} className="lp-btn lp-btn--ghost">{c.work}</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
