import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { CONTACT, counterpartPath, localPath, SiteLang } from "./i18n";
import { Close, Download, Menu } from "./Icons";
import "@fontsource/dm-serif-display/400.css";
import "@fontsource/dm-serif-display/400-italic.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/abril-fatface/400.css";
import "@fontsource/el-messiri/400.css";
import "@fontsource/el-messiri/500.css";
import "@fontsource/el-messiri/600.css";
import "@fontsource/el-messiri/700.css";
import "./site.css";

const NAV = {
  en: [
    { key: "home", label: "Home", href: "/" },
    { key: "experience", label: "Experience", href: "/experience" },
    { key: "case-studies", label: "Case Studies", href: "/case-studies" },
    { key: "how", label: "How I Work", href: "/#how-i-work" },
  ],
  ar: [
    { key: "home", label: "الرئيسية", href: "/" },
    { key: "experience", label: "الخبرات", href: "/experience" },
    { key: "case-studies", label: "دراسات الحالة", href: "/case-studies" },
    { key: "how", label: "أسلوب عملي", href: "/#how-i-work" },
  ],
} as const;

const T = {
  en: {
    brand: "Lamia Alrowaished",
    brandInitial: "L",
    talk: "Let’s Talk",
    menu: "Menu",
    close: "Close menu",
    footerName: "Lamia Abdulaziz Alrowaished",
    footerTag: ["UX/UI product designer · Saudi Arabia", "Clear digital products, designed around people."],
    pages: "Pages",
    contact: "Contact",
    cv: "Download CV",
    rights: "© 2026 Lamia Alrowaished. All rights reserved.",
    skip: "Skip to content",
    langLabel: "Language",
  },
  ar: {
    brand: "لمياء الرويشد",
    brandInitial: "ل",
    talk: "تواصل معي",
    menu: "القائمة",
    close: "إغلاق القائمة",
    footerName: "لمياء عبدالعزيز الرويشد",
    footerTag: ["مصممة تجربة وواجهات مستخدم (UX/UI) · المملكة العربية السعودية", "منتجات رقمية واضحة، مصمّمة حول الإنسان."],
    pages: "الصفحات",
    contact: "التواصل",
    cv: "تحميل السيرة الذاتية",
    rights: "© 2026 لمياء الرويشد. جميع الحقوق محفوظة.",
    skip: "انتقل إلى المحتوى",
    langLabel: "اللغة",
  },
};

/** Scrolls to an element id, accounting for the sticky header. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  return true;
}

/** Link to a section on a page, e.g. "/#how-i-work". Works from any page and in preview builds. */
function SectionLink({ to, className, children, onClick }: { to: string; className?: string; children: ReactNode; onClick?: () => void }) {
  const [location, navigate] = useLocation();
  const [path, hash] = to.split("#");
  const target = path || "/";
  return (
    <a
      href={`${target}#${hash}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        if (location === target || (hash === "contact" && document.getElementById(hash))) {
          scrollToId(hash);
        } else {
          navigate(target);
          setTimeout(() => scrollToId(hash), 150);
        }
      }}
    >
      {children}
    </a>
  );
}

function NavLink({ href, lang, className, children, onClick, current }: { href: string; lang: SiteLang; className?: string; children: ReactNode; onClick?: () => void; current?: boolean }) {
  const to = localPath(href, lang);
  if (href.includes("#")) {
    return (
      <SectionLink to={to} className={className} onClick={onClick}>
        {children}
      </SectionLink>
    );
  }
  return (
    <Link href={to} className={className} onClick={onClick} aria-current={current ? "page" : undefined}>
      {children}
    </Link>
  );
}

/**
 * EN / عربي switch. The thumb slides to the other language, then the page changes.
 * EN always sits on the left and عربي on the right, in both languages, like a real switch.
 */
function LangSwitch({ lang, to }: { lang: SiteLang; to: string }) {
  const [, navigate] = useLocation();
  const [pos, setPos] = useState<SiteLang>(lang);
  const label = lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية";
  return (
    <a
      href={to}
      className={`lp-lang is-${pos}`}
      dir="ltr"
      aria-label={label}
      hrefLang={lang === "en" ? "ar" : "en"}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        if (pos !== lang) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setPos(lang === "en" ? "ar" : "en");
        window.setTimeout(() => navigate(to), reduce ? 0 : 340);
      }}
    >
      <span className="lp-lang__thumb" aria-hidden="true" />
      <span className={`lp-lang__opt lp-lang__opt--en${pos === "en" ? " is-on" : ""}`} lang="en">EN</span>
      <span className={`lp-lang__opt lp-lang__opt--ar${pos === "ar" ? " is-on" : ""}`} lang="ar">عربي</span>
    </a>
  );
}

export function SiteLayout({ lang, active, children }: { lang: SiteLang; active: string; children: ReactNode }) {
  const t = T[lang];
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const other = counterpartPath(location, lang);
  const contactHref = localPath("/", lang) + "#contact";

  const langSwitch = <LangSwitch key={lang} lang={lang} to={other} />;

  return (
    <div
      className={`lp lp--${lang}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
      lang={lang}
      onClick={(e) => {
        const a = (e.target as HTMLElement).closest("a");
        const href = a?.getAttribute("href");
        if (href && href.startsWith("#") && !href.startsWith("#/") && href.length > 1) {
          if (scrollToId(href.slice(1))) e.preventDefault();
        }
      }}
    >
      <a className="lp-skip" href="#main">{t.skip}</a>
      <header className={`lp-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="lp-header__inner">
          <Link href={localPath("/", lang)} className="lp-brand" aria-label={t.brand}>
            <span className="lp-brand__mark" aria-hidden="true">{t.brandInitial}</span>
            <span className="lp-brand__name">{t.brand}</span>
          </Link>

          <nav className="lp-nav" aria-label="Main">
            {NAV[lang].map((n) => (
              <NavLink key={n.key} href={n.href} lang={lang} current={n.key === active} className={`lp-nav__link${n.key === active ? " is-active" : ""}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="lp-header__end">
            {langSwitch}
            <SectionLink to={contactHref} className="lp-btn lp-btn--dark lp-header__talk">{t.talk}</SectionLink>
            <button type="button" className="lp-menu-btn" aria-expanded={open} aria-controls="lp-drawer" onClick={() => setOpen(true)}>
              <Menu />
              <span className="lp-sr">{t.menu}</span>
            </button>
          </div>
        </div>
      </header>

      <div id="lp-drawer" className={`lp-drawer${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="lp-drawer__top">
          <span className="lp-brand__name">{t.brand}</span>
          <button type="button" className="lp-menu-btn" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <Close />
            <span className="lp-sr">{t.close}</span>
          </button>
        </div>
        <nav className="lp-drawer__nav" aria-label="Mobile">
          {NAV[lang].map((n) => (
            <NavLink key={n.key} href={n.href} lang={lang} onClick={() => setOpen(false)} current={n.key === active} className={`lp-drawer__link${n.key === active ? " is-active" : ""}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="lp-drawer__foot">
          {langSwitch}
          <SectionLink to={contactHref} onClick={() => setOpen(false)} className="lp-btn lp-btn--dark">{t.talk}</SectionLink>
        </div>
      </div>

      <main id="main">{children}</main>

      <footer className="lp-footer">
        <div className="lp-footer__inner">
          <div className="lp-footer__brand">
            <div className="lp-footer__name">
              <span className="lp-footer__mark" aria-hidden="true">{t.brandInitial}</span>
              <span>{t.footerName}</span>
            </div>
            <p className="lp-footer__tag">
              {t.footerTag[0]}
              <br />
              {t.footerTag[1]}
            </p>
          </div>
          <div className="lp-footer__col">
            <h2 className="lp-footer__h">{t.pages}</h2>
            <ul>
              {NAV[lang].map((n) => (
                <li key={n.key}>
                  <NavLink href={n.href} lang={lang}>{n.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="lp-footer__col">
            <h2 className="lp-footer__h">{t.contact}</h2>
            <ul>
              <li><a href={`mailto:${CONTACT.email}`} dir="ltr">{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref} dir="ltr">{CONTACT.phone}</a></li>
              <li><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" dir="ltr">{CONTACT.linkedinLabel}</a></li>
              <li>
                <a href={CONTACT.cv} download className="lp-footer__cv">
                  <Download />
                  <span>{t.cv}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="lp-footer__rights">{t.rights}</p>
      </footer>
    </div>
  );
}
