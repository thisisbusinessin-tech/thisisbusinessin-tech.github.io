export function FaqSeamDivider() {
  return (
    <div className="faq-seam" aria-hidden="true" role="separator">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 H1440 V40 Q1080,58 720,40 Q360,22 0,40 Z" fill="#031b37" />
        <path d="M0,40 Q360,22 720,40 T1440,40 V80 H0 Z" fill="#ffffff" />

        {/* Top thread — white (coming from brand-900 above) */}
        <path
          d="M0,31 Q360,13 720,31 T1440,31"
          fill="none"
          stroke="rgba(255,255,255,0.78)"
          strokeWidth="2"
          strokeDasharray="8 10"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Bottom thread — dark blue (entering white FAQ section below) */}
        <path
          d="M0,49 Q360,31 720,49 T1440,49"
          fill="none"
          stroke="#022d5d"
          strokeWidth="2"
          strokeDasharray="8 10"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
