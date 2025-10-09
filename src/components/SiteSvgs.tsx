import * as React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & { accent?: string };

/** Soft accent halo backdrop (lightweight, GPU-friendly) */
export function AccentHalo({ className, accent = "#e0a695", ...props }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 700"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <radialGradient id="gg-halo" cx="20%" cy="5%" r="80%">
          <stop offset="0%" stopColor={accent} stopOpacity={0.18} />
          <stop offset="60%" stopColor={accent} stopOpacity={0.06} />
          <stop offset="100%" stopColor={accent} stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#gg-halo)" />
    </svg>
  );
}

/** Dotted grid background (re-usable as a subtle texture) */
export function GridDots({ className, accent = "#e0a695", ...props }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <pattern id="gg-dots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={accent} opacity="0.22" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#gg-dots)" />
    </svg>
  );
}

/** Module icons — minimalist, stroke-based, brand-accented */
export function IconAudit({ className, accent = "#e0a695", ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M4 5h16M4 12h10M4 19h7" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <rect x="16" y="10" width="4" height="4" rx="1" stroke={accent} strokeWidth="1.6" />
    </svg>
  );
}

export function IconSEO({ className, accent = "#e0a695", ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <circle cx="10" cy="10" r="6" stroke={accent} strokeWidth="1.6" />
      <path d="M14.5 14.5L20 20" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 10h4M9 8h2" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconContent({ className, accent = "#e0a695", ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect x="4" y="5" width="16" height="14" rx="2" stroke={accent} strokeWidth="1.6" />
      <path d="M8 9h8M8 12h8M8 15h5" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlan({ className, accent = "#e0a695", ...props }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <path d="M5 5h14v14H5z" stroke={accent} strokeWidth="1.6" />
      <path d="M7.5 16.5l3-3 2 2 4-4" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7.5" cy="16.5" r="1.2" fill={accent} />
      <circle cx="12.5" cy="15.5" r="1.2" fill={accent} />
      <circle cx="16.5" cy="11.5" r="1.2" fill={accent} />
    </svg>
  );
}
