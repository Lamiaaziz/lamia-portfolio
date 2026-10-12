import { useEffect } from "react";

export type SiteLang = "en" | "ar";

/** Public file path that also works when the site is served from a sub-folder (preview builds). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

/** Path of the same page in the other language. "/" <-> "/ar", "/sdm" <-> "/ar/sdm". */
export function counterpartPath(path: string, lang: SiteLang): string {
  if (lang === "ar") {
    const p = path.replace(/^\/ar(?=\/|$)/, "");
    return p === "" ? "/" : p;
  }
  if (path === "/") return "/ar";
  if (path.startsWith("/#")) return `/ar${path.slice(1)}`;
  return `/ar${path}`;
}

/** Prefix a site path for the current language. */
export function localPath(path: string, lang: SiteLang): string {
  if (lang === "en") return path;
  if (path.startsWith("#")) return path;
  if (path === "/") return "/ar";
  if (path.startsWith("/#")) return `/ar${path.slice(1)}`;
  return `/ar${path}`;
}

export const CONTACT = {
  email: "lamiaaziz90@gmail.com",
  phone: "+966 58 034 3817",
  phoneHref: "tel:+966580343817",
  linkedin: "https://www.linkedin.com/in/lamia-a-09179917a/",
  linkedinLabel: "linkedin.com/in/lamia-a",
  cv: asset("/LamiaAlrowaished-CV.pdf"),
};

/** Sets <html lang/dir>, the page title and description for a site page. */
export function usePageMeta(lang: SiteLang, title: string, description: string) {
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
    return () => {
      html.dir = "ltr";
      html.lang = "en";
    };
  }, [lang, title, description]);
}
