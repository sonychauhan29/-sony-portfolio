import type { CSSProperties } from "react";

type IconProps = { className?: string; style?: CSSProperties };

/* ---------- Folder (macOS blue) ---------- */
export const FolderIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 52" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fldBack" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#7BB7FF" />
        <stop offset="1" stopColor="#3F8DEC" />
      </linearGradient>
      <linearGradient id="fldFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#5FA3F5" />
        <stop offset="1" stopColor="#2B79DB" />
      </linearGradient>
    </defs>
    <path d="M4 10c0-3.3 2.7-6 6-6h14l6 6h24c3.3 0 6 2.7 6 6v6H4V10z" fill="url(#fldBack)" />
    <path d="M4 18h56v22c0 3.3-2.7 6-6 6H10c-3.3 0-6-2.7-6-6V18z" fill="url(#fldFront)" />
    <path d="M4 18h56v3H4z" fill="#000" opacity=".08" />
  </svg>
);

/* ---------- PDF / Resume ---------- */
export const PdfIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 56 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4c0-2.2 1.8-4 4-4h28l14 14v46c0 2.2-1.8 4-4 4H10c-2.2 0-4-1.8-4-4V4z" fill="#fff" stroke="#D9D9D9" />
    <path d="M38 0l14 14H42c-2.2 0-4-1.8-4-4V0z" fill="#E8E8E8" />
    <rect x="4" y="32" width="40" height="18" rx="3" fill="#E64C3C" />
    <text x="24" y="45" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">PDF</text>
  </svg>
);

/* ---------- Finder face ---------- */
export const FinderIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="finBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FCFCFC" />
        <stop offset="1" stopColor="#B8C2CC" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#finBg)" />
    <path d="M14 14h18v36H14z" fill="#3FA9F5" />
    <path d="M32 14h18v36H32z" fill="#1B7CD9" />
    <ellipse cx="22" cy="28" rx="2.4" ry="4" fill="#0a2540" />
    <ellipse cx="42" cy="28" rx="2.4" ry="4" fill="#0a2540" />
    <path d="M22 40 q10 8 20 0" stroke="#0a2540" strokeWidth="2.4" fill="none" strokeLinecap="round" />
  </svg>
);

/* ---------- Photos pinwheel ---------- */
export const PhotosIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#fff" />
    <g transform="translate(32 32)">
      {[
        ["#F25B5B", 0],
        ["#F2A33A", 45],
        ["#F2D74E", 90],
        ["#73D058", 135],
        ["#3FB8E0", 180],
        ["#3F7AE0", 225],
        ["#9B5BE0", 270],
        ["#E05BB0", 315],
      ].map(([c, r]) => (
        <ellipse key={r} cx="0" cy="-14" rx="6" ry="12" fill={c as string} transform={`rotate(${r})`} opacity="0.92" />
      ))}
    </g>
  </svg>
);

/* ---------- Notes (yellow notepad) ---------- */
export const NotesIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#FFF3B0" />
    <rect x="0" y="0" width="64" height="14" fill="#F5C84B" />
    <line x1="10" y1="26" x2="54" y2="26" stroke="#E5C56F" strokeWidth="1.5" />
    <line x1="10" y1="34" x2="54" y2="34" stroke="#E5C56F" strokeWidth="1.5" />
    <line x1="10" y1="42" x2="44" y2="42" stroke="#E5C56F" strokeWidth="1.5" />
    <line x1="10" y1="50" x2="50" y2="50" stroke="#E5C56F" strokeWidth="1.5" />
  </svg>
);

/* ---------- Music ---------- */
export const MusicIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="musBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#FF6577" />
        <stop offset="1" stopColor="#FB233B" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#musBg)" />
    <path d="M40 16v22a8 8 0 1 1-4-7V20l-12 4v18a8 8 0 1 1-4-7V18l20-6z" fill="#fff" />
  </svg>
);

/* ---------- Contacts (book) ---------- */
export const ContactsIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#fff" />
    <rect x="6" y="6" width="52" height="52" rx="6" fill="#F4ECD8" />
    <rect x="48" y="14" width="6" height="36" fill="#fff" />
    <circle cx="30" cy="28" r="7" fill="#8B7355" />
    <path d="M18 46c0-7 5.4-12 12-12s12 5 12 12v2H18v-2z" fill="#8B7355" />
  </svg>
);

/* ---------- Calendar ---------- */
export const CalendarIcon = ({ className, style, day = "17", month = "JUL" }: IconProps & { day?: string; month?: string }) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="14" fill="#fff" stroke="#E5E5E5" />
    <rect x="0" y="0" width="64" height="16" fill="#fff" />
    <text x="32" y="13" textAnchor="middle" fontSize="9" fontWeight="700" fill="#E64C3C" fontFamily="Inter, sans-serif">{month}</text>
    <text x="32" y="50" textAnchor="middle" fontSize="28" fontWeight="500" fill="#1d1d1f" fontFamily="Inter, sans-serif">{day}</text>
  </svg>
);

/* ---------- Stickies app ---------- */
export const StickiesIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="44" height="44" rx="3" fill="#FFD86B" transform="rotate(-6 28 28)" />
    <rect x="14" y="14" width="44" height="44" rx="3" fill="#FFE85C" transform="rotate(4 36 36)" />
    <line x1="22" y1="28" x2="48" y2="28" stroke="#C9A33A" strokeWidth="1.5" transform="rotate(4 36 36)" />
    <line x1="22" y1="36" x2="48" y2="36" stroke="#C9A33A" strokeWidth="1.5" transform="rotate(4 36 36)" />
    <line x1="22" y1="44" x2="42" y2="44" stroke="#C9A33A" strokeWidth="1.5" transform="rotate(4 36 36)" />
  </svg>
);

/* ---------- Brand-ish circles for Contacts sidebar ---------- */
export const BehanceMark = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className}><rect width="24" height="24" rx="5" fill="#1769FF" /><text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Inter">Bē</text></svg>
);
export const GmailMark = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className}><rect width="24" height="24" rx="5" fill="#fff" stroke="#eee" /><path d="M3 7l9 7 9-7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="#EA4335" /></svg>
);
export const LinkedInMark = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className}><rect width="24" height="24" rx="5" fill="#0A66C2" /><text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="Inter">in</text></svg>
);

/* ---------- Apple logo ---------- */
export const AppleLogo = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.365 1.43c0 1.14-.43 2.23-1.21 3.04-.83.87-2.18 1.55-3.27 1.46-.14-1.12.42-2.27 1.18-3.05.83-.87 2.27-1.55 3.3-1.45zm3.46 16.4c-.6 1.39-.89 2-1.66 3.23-1.07 1.7-2.59 3.83-4.46 3.85-1.66.02-2.09-1.08-4.35-1.07-2.26.01-2.73 1.09-4.39 1.07C3.09 24.88 1.65 22.95.58 21.26-2.4 16.5-2.71 10.92.78 7.92c1.24-1.07 2.92-1.7 4.5-1.7 1.6 0 2.62 1.07 4.36 1.07 1.69 0 2.72-1.07 4.59-1.07 1.41 0 2.91.77 3.97 2.1-3.49 1.91-2.92 6.9.36 9.21z" />
  </svg>
);

/* ---------- Tool Icons ---------- */
export const FigmaIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 38 57" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
    <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5a9.5 9.5 0 0 0 9.5 9.5H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
  </svg>
);

export const PhotoshopIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="10" fill="#001E36" />
    <path d="M16 22h8c4 0 6 2 6 5s-2 5-6 5h-4v8h-4V22zm4 4v3h4c2 0 3-1 3-2s-1-2-3-2h-4z" fill="#31A8FF" />
    <path d="M34 32c0 4 3 8 8 8 3 0 5-1 6-3v3h4V28h-4v1c-1-1-3-2-6-2-5 0-8 4-8 8zm4 0c0-3 2-5 4-5s4 2 4 5-2 5-4 5-4-2-4-5z" fill="#31A8FF" />
  </svg>
);

export const IllustratorIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="10" fill="#330000" />
    <path d="M12 40l8-20h4l8 20h-4l-2-5h-8l-2 5h-4zm5-9h6l-3-8-3 8z" fill="#FF9A00" />
    <rect x="36" y="20" width="4" height="20" fill="#FF9A00" />
    <circle cx="38" cy="14" r="2" fill="#FF9A00" />
  </svg>
);

export const AfterEffectsIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="10" fill="#00005B" />
    <path d="M12 40l8-20h4l8 20h-4l-2-5h-8l-2 5h-4zm5-9h6l-3-8-3 8z" fill="#D19AFF" />
    <path d="M34 22h14v4h-10v4h8v4h-8v4h10v4H34V22z" fill="#D19AFF" />
  </svg>
);

export const StarburstIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 8l2 10 10-2-6 8 8 6-10 2 2 10-8-6-8 6 2-10-10-2 8-6-6-8 10 2z"
      fill="#E58D67"
    />
  </svg>
);

export const HeartIcon = ({ className, style }: IconProps) => (
  <svg viewBox="0 0 64 64" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 52c-1.5 0-3-.5-4.5-1.5C21 46 12 37 12 26c0-6 4.5-10.5 10.5-10.5 3.5 0 6.5 2 9.5 5 3-3 6-5 9.5-5 6 0 10.5 4.5 10.5 10.5 0 11-9 20-15.5 24.5-1.5 1-3 1.5-4.5 1.5z"
      fill="#FF6B6B"
    />
    <path
      d="M22.5 15.5c-5.8 0-10.5 4.7-10.5 10.5 0 11 9 20 15.5 24.5 1.5 1 3 1.5 4.5 1.5s3-.5 4.5-1.5C43 46 52 37 52 26c0-5.8-4.7-10.5-10.5-10.5-3.5 0-6.5 2-9.5 5-3-3-6-5-9.5-5z"
      fill="url(#heartGradient)"
    />
    <defs>
      <linearGradient id="heartGradient" x1="12" y1="15.5" x2="52" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF4D4D" />
        <stop offset="1" stopColor="#F9CB28" />
      </linearGradient>
    </defs>
  </svg>
);