import { useEffect, useState } from "react";

/**
 * Scroll effects for the Home page. Each effect can be switched off by adding
 * `fxoff-<name>` to <html>; the preview build shows a small panel to try them.
 *
 *   arch  — case study images open through a growing arch, mockups drift slower
 *   steps — a yellow line fills down "How I Work" and lights each number
 *   sun   — the cream circle in the contact section lowers and grows into place
 */
export const SCROLL_FX = [
  { key: "arch", label: "Arch reveal on case studies" },
  { key: "steps", label: "How I Work progress line" },
  { key: "sun", label: "Sunrise contact circle" },
] as const;

const clamp = (v: number) => Math.min(1, Math.max(0, v));

export function useScrollFx(deps: unknown[] = []) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cases = Array.from(document.querySelectorAll<HTMLElement>(".lp-case"));
    const steps = document.querySelector<HTMLElement>(".lp-steps");
    const stepItems = steps ? Array.from(steps.querySelectorAll<HTMLElement>("li")) : [];
    const cta = document.querySelector<HTMLElement>(".lp-cta");
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const c of cases) {
        const r = c.getBoundingClientRect();
        // p: 0 → 1 while the card's top travels from the bottom of the screen to ~25% up
        c.style.setProperty("--p", clamp((vh - r.top) / (vh * 0.75)).toFixed(3));
        // q: 0 → 1 across the whole time the card is on screen (for the slower mockups)
        c.style.setProperty("--q", clamp((vh - r.top) / (vh + r.height)).toFixed(3));
      }
      if (steps) {
        const r = steps.getBoundingClientRect();
        const p = clamp((vh * 0.72 - r.top) / r.height);
        steps.style.setProperty("--p", p.toFixed(3));
        stepItems.forEach((li, i) => li.classList.toggle("is-lit", p >= (i + 0.3) / stepItems.length));
      }
      if (cta) {
        const r = cta.getBoundingClientRect();
        cta.style.setProperty("--p", clamp((vh - r.top) / (vh * 0.7)).toFixed(3));
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    document.documentElement.classList.add("fx-ready");
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** Preview-only panel to switch each effect on and off. */
export function ScrollFxPanel() {
  const [off, setOff] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState(true);
  const toggle = (key: string) => {
    const next = { ...off, [key]: !off[key] };
    setOff(next);
    document.documentElement.classList.toggle(`fxoff-${key}`, !!next[key]);
  };
  return (
    <div className="lp-fxpanel" dir="ltr" lang="en">
      <button type="button" className="lp-fxpanel__head" onClick={() => setOpen(!open)} aria-expanded={open}>
        Scroll effects <span aria-hidden="true">{open ? "–" : "+"}</span>
      </button>
      {open && (
        <ul>
          {SCROLL_FX.map((fx) => (
            <li key={fx.key}>
              <label>
                <input type="checkbox" id={`fx-${fx.key}`} checked={!off[fx.key]} onChange={() => toggle(fx.key)} />
                <span>{fx.label}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
