import type { CSSProperties } from "react";

/**
 * Browser and phone frames for real website screenshots. Each screenshot is the full page;
 * the frame shows its top, and hovering slowly scrolls through the rest of the page.
 */
export function BrowserShot({
  src,
  alt,
  size = "lg",
  className = "",
  scroll = 7,
}: {
  src: string;
  alt: string;
  size?: "lg" | "sm";
  className?: string;
  scroll?: number;
}) {
  return (
    <div className={`lpt-browser lpt-browser--${size} ${className}`} style={{ ["--scroll" as string]: `${scroll}s` } as CSSProperties}>
      <div className="lpt-browser__bar" aria-hidden="true">
        <span className="lpt-browser__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="lpt-browser__url" dir="ltr">technofarm.com.sa</span>
      </div>
      <div className="lpt-browser__page">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

export function PhoneShot({ src, alt, size = "lg", className = "" }: { src: string; alt: string; size?: "lg" | "sm"; className?: string }) {
  return (
    <div className={`lpt-phone lpt-phone--${size} ${className}`}>
      <div className="lpt-phone__screen">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
    </div>
  );
}
