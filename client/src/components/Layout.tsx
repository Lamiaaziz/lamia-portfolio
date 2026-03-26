import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const navLinks = [
    { href: "/", key: "nav.home" },
    { href: "/wayfinding", key: "nav.wayfinding" },
    { href: "/aurafit", key: "nav.aurafit" },
    { href: "/traveltales", key: "nav.traveltales" },
    { href: "/voko", key: "nav.voko" },
    { href: "/webdesign", key: "nav.webdesign" },
    { href: "/visualdesign", key: "nav.visualdesign" },
  ];

  const fontFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Sans', sans-serif";
  const serifFamily = isRTL ? "'Tajawal', sans-serif" : "'DM Serif Display', serif";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "oklch(0.98 0.005 230)", direction: isRTL ? "rtl" : "ltr" }}
    >
      {/* Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "oklch(0.98 0.005 230 / 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.88 0.015 230 / 0.6)" : "none",
        }}
      >
        <div className="container flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "oklch(0.35 0.09 230)",
                  color: "oklch(0.98 0.005 230)",
                  fontFamily: serifFamily,
                }}
              >
                {isRTL ? "ل" : "L"}
              </div>
              <span
                className="font-medium text-sm tracking-wide"
                style={{ color: "oklch(0.35 0.09 230)", fontFamily }}
              >
                {isRTL ? "لميا الرويشد" : "Lamia Alrowaished"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="nav-link text-sm font-medium transition-colors duration-200"
                  style={{
                    color: location === link.href ? "oklch(0.35 0.09 230)" : "oklch(0.45 0.06 230)",
                    fontFamily,
                  }}
                >
                  {t(link.key)}
                </span>
              </Link>
            ))}
            <a
              href="mailto:Lamiaaziz90@gmail.com"
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: "oklch(0.35 0.09 230)",
                color: "oklch(0.98 0.005 230)",
                fontFamily,
              }}
            >
              {t("nav.contact")}
            </a>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "oklch(0.35 0.09 230)",
                color: "oklch(0.35 0.09 230)",
                background: "transparent",
                fontFamily,
                minWidth: "64px",
                justifyContent: "center",
              }}
              title={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
          </nav>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200"
              style={{
                borderColor: "oklch(0.35 0.09 230)",
                color: "oklch(0.35 0.09 230)",
                fontFamily,
              }}
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <button
              className="p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "oklch(0.35 0.09 230)" }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t"
            style={{ background: "oklch(0.98 0.005 230)", borderColor: "oklch(0.88 0.015 230)" }}
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block text-sm font-medium py-2"
                    style={{
                      color: location === link.href ? "oklch(0.35 0.09 230)" : "oklch(0.45 0.06 230)",
                      fontFamily,
                    }}
                  >
                    {t(link.key)}
                  </span>
                </Link>
              ))}
              <a
                href="mailto:Lamiaaziz90@gmail.com"
                className="text-sm font-medium py-2"
                style={{ color: "oklch(0.35 0.09 230)", fontFamily }}
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{ borderColor: "oklch(0.88 0.015 230 / 0.5)", background: "oklch(0.96 0.008 230)" }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p
                className="text-xs mb-1"
                style={{ color: "oklch(0.6 0.04 230 / 0.7)", letterSpacing: "0.15em", fontFamily }}
              >
                {t("footer.label")}
              </p>
              <h3
                className="text-xl"
                style={{ color: "oklch(0.2 0.04 230)", fontFamily: serifFamily }}
              >
                {isRTL ? "لميا عبدالعزيز الرويشد" : "Lamia Abdulaziz Al-Rowaished"}
              </h3>
              <p className="text-sm mt-1" style={{ color: "oklch(0.52 0.04 230)", fontFamily }}>
                {t("footer.tagline")}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="mailto:Lamiaaziz90@gmail.com" className="text-sm hover:underline" style={{ color: "oklch(0.45 0.06 230)", fontFamily }}>
                Lamiaaziz90@gmail.com
              </a>
              <a href="tel:+966580343817" className="text-sm hover:underline" style={{ color: "oklch(0.45 0.06 230)", fontFamily }}>
                +966 58 034 3817
              </a>
              <a href="https://linkedin.com/lamia" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: "oklch(0.45 0.06 230)", fontFamily }}>
                linkedin.com/lamia
              </a>
            </div>
          </div>
          <hr className="thin-rule mt-10 mb-6" />
          <p className="text-xs text-center" style={{ color: "oklch(0.6 0.04 230 / 0.5)", fontFamily }}>
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}
