type P = { className?: string };

export const ArrowRight = ({ className }: P) => (
  <svg className={`ico-dir ${className ?? ""}`} width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <path d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LongArrow = ({ className }: P) => (
  <svg className={`ico-dir ${className ?? ""}`} width="24" height="10" viewBox="0 0 24 10" fill="none" aria-hidden="true">
    <path d="M0 5h22.5M18.5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Download = ({ className }: P) => (
  <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 1.75v7M4.1 6l2.9 2.9L9.9 6M1.75 9.5v1.4c0 .7.6 1.35 1.35 1.35h7.8c.75 0 1.35-.6 1.35-1.35V9.5" stroke="currentColor" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg className={`ico-dir ${className ?? ""}`} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const External = ({ className }: P) => (
  <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M8.5 2h3.5v3.5M12 2 6.5 7.5M10.5 8.5v2.25c0 .7-.55 1.25-1.25 1.25h-6c-.7 0-1.25-.55-1.25-1.25v-6C2 4.05 2.55 3.5 3.25 3.5H5.5" stroke="currentColor" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Menu = ({ className }: P) => (
  <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M3.5 7h15M3.5 15h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="m5.5 5.5 11 11M16.5 5.5l-11 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
