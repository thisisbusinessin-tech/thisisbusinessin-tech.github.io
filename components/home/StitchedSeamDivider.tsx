export function StitchedSeamDivider() {
  return (
    <div className="stitched-seam" aria-hidden="true" role="separator">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 H1440 V40 Q1080,22 720,40 Q360,58 0,40 Z" fill="#ffffff" />
        <path d="M0,40 Q360,58 720,40 T1440,40 V80 H0 Z" fill="#031b37" />

        {/* Top thread — dark blue (leaving white how-it-works section above) */}
        <path
          d="M0,31 Q360,49 720,31 T1440,31"
          fill="none"
          stroke="#022d5d"
          strokeWidth="2"
          strokeDasharray="8 10"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Bottom thread — white (entering brand-900 trust section below) */}
        <path
          d="M0,49 Q360,67 720,49 T1440,49"
          fill="none"
          stroke="rgba(255,255,255,0.80)"
          strokeWidth="2"
          strokeDasharray="8 10"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
