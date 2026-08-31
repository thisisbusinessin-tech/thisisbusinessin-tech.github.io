"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const LENIS_OPTIONS = {
  lerp: 0.08,
  duration: 1.8,
  smoothWheel: true,
  autoToggle: true,
  easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time))
};

export function DesktopSmoothScroll() {
  return <ReactLenis root options={LENIS_OPTIONS} />;
}
