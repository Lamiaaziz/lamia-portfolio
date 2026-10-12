import { useEffect } from "react";
import { useLocation } from "wouter";

/** Adds `is-visible` to `.lp-reveal` elements as they scroll into view. */
export function useReveal() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (location.includes("#")) return;
  }, [location]);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".lp-reveal:not(.is-visible)"));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    // Jump to an in-page anchor after first render (e.g. /#how-i-work from another page).
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) setTimeout(() => target.scrollIntoView(), 60);
    }
    return () => io.disconnect();
  }, [location]);
}
