import type { ReactNode } from "react";

/** Line icons for the project-overview card. Each case study picks four, in the order of its facts. */
const ICONS: Record<string, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c1.2-3.6 3.6-5.4 6.5-5.4s5.3 1.8 6.5 5.4" />
      <path d="M15.5 4.8a3.5 3.5 0 0 1 0 6.4M18 14.9c1.6.8 2.8 2.5 3.5 5.1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5.5L12 3v18M12 8l8 2.5V21M2.5 21h19" />
      <path d="M7.5 9h1M7.5 13h1M7.5 17h1M15.5 13h1M15.5 17h1" />
    </>
  ),
  pages: (
    <>
      <rect x="4" y="3" width="13" height="16" rx="2" />
      <path d="M8 21h10a2 2 0 0 0 2-2V7M7.5 8h6M7.5 12h6M7.5 16h3" />
    </>
  ),
  tools: (
    <>
      <path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-1.5-1.5M14.5 6.5L13 5 5 13l1.5 1.5" />
      <path d="M3 21l6-6" />
    </>
  ),
  screen: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4.5A1.5 1.5 0 0 1 4.5 3H12l9 9-9 9-9-9z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.7 2.7L16 9.8" />
    </>
  ),
};

export type OverviewIcon = keyof typeof ICONS;

export function OverviewCard({
  label,
  items,
  icons,
}: {
  label: string;
  items: { label: string; value: string }[];
  icons: OverviewIcon[];
}) {
  return (
    <section className="lp-ov" aria-label={label}>
      <dl className="lp-ov__card lp-reveal">
        {items.map((o, i) => (
          <div key={o.label} className="lp-ov__item">
            <span className="lp-ov__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[icons[i] ?? "layers"]}
              </svg>
            </span>
            <dt>{o.label}</dt>
            <dd>{o.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
