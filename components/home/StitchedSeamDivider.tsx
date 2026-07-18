export function StitchedSeamDivider() {
  return (
    <div className="stitched-seam" aria-hidden="true">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
        <defs>
          <linearGradient id="stitch-seam-crease" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(2, 16, 34, 0.18)" />
            <stop offset="48%" stopColor="rgba(5, 18, 38, 0.88)" />
            <stop offset="52%" stopColor="rgba(3, 12, 28, 0.96)" />
            <stop offset="100%" stopColor="rgba(2, 16, 34, 0.18)" />
          </linearGradient>
        </defs>

        <path
          d="M0,36 C140,18 260,18 400,36 C540,54 660,54 800,36 C940,18 1060,18 1200,36 C1280,46 1360,46 1440,36"
          fill="none"
          stroke="url(#stitch-seam-crease)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M0,27 C140,9 260,9 400,27 C540,45 660,45 800,27 C940,9 1060,9 1200,27 C1280,37 1360,37 1440,27"
          fill="none"
          stroke="rgba(255,255,255,0.82)"
          strokeWidth="2.2"
          strokeDasharray="6 7"
          strokeLinecap="round"
        />

        <path
          d="M0,45 C140,27 260,27 400,45 C540,63 660,63 800,45 C940,27 1060,27 1200,45 C1280,55 1360,55 1440,45"
          fill="none"
          stroke="rgba(255,255,255,0.82)"
          strokeWidth="2.2"
          strokeDasharray="6 7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
