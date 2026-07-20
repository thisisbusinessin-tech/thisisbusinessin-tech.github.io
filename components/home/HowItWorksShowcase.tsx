"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

interface HowItWorksStep {
  title: string;
  screenshot: string;
}

interface HowItWorksShowcaseProps {
  steps: HowItWorksStep[];
}

const FIRST_STEP_SCROLL_SPAN = 0.58;
const STANDARD_STEP_SCROLL_SPAN = 1;
const DISPLAY_ADVANCE_THRESHOLD = 0.8;

export function HowItWorksShowcase({ steps }: HowItWorksShowcaseProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(0);

  const maxProgress = Math.max(steps.length - 1, 1);

  const readProgress = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const vh = window.innerHeight;
    const totalTravel = Math.max(rect.height - vh, 1);
    const traveled = Math.max(0, Math.min(totalTravel, -rect.top));
    progressRef.current = (traveled / totalTravel) * maxProgress;
  }, [maxProgress]);

  const applyProgress = useCallback(() => {
    const raw = progressRef.current;
    const spans = Array.from({ length: maxProgress }, (_, index) =>
      index === 0 && maxProgress > 1 ? FIRST_STEP_SCROLL_SPAN : STANDARD_STEP_SCROLL_SPAN
    );
    let segmentStart = 0;

    for (const [index, span] of spans.entries()) {
      const segmentEnd = segmentStart + span;
      if (raw <= segmentEnd) {
        setScrollProgress(index + (raw - segmentStart) / span);
        return;
      }

      segmentStart = segmentEnd;
    }

    setScrollProgress(maxProgress);
  }, [maxProgress]);

  useEffect(() => {
    const onScroll = () => {
      readProgress();
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(applyProgress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    readProgress();
    applyProgress();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [readProgress, applyProgress]);

  const easeOut = (value: number) => 1 - Math.pow(1 - value, 3);
  const currentStep = Math.min(steps.length - 1, Math.floor(scrollProgress));
  const segmentProgress = scrollProgress - currentStep;
  const displayIndex =
    currentStep < steps.length - 1 && segmentProgress >= DISPLAY_ADVANCE_THRESHOLD
      ? currentStep + 1
      : currentStep;

  const getStepStyle = (idx: number): { opacity: number; blur: number; translateY: number } => {
    if (steps.length === 1) {
      return { opacity: 1, blur: 0, translateY: 0 };
    }

    if (idx === steps.length - 1) {
      const distance = scrollProgress - idx;
      if (distance <= 0) {
        const enter = Math.max(0, Math.min(1, (scrollProgress - (idx - 0.38)) / 0.38));
        const eased = easeOut(enter);
        return {
          opacity: eased,
          blur: (1 - eased) * 12,
          translateY: (1 - eased) * 22
        };
      }

      return { opacity: 1, blur: 0, translateY: 0 };
    }

    const baseIndex = Math.floor(scrollProgress);
    if (baseIndex === idx) {
      const segmentProgress = scrollProgress - idx;
      if (segmentProgress <= 0.62) {
        return { opacity: 1, blur: 0, translateY: 0 };
      }

      const transition = easeOut((segmentProgress - 0.62) / 0.38);
      return {
        opacity: 1 - transition,
        blur: transition * 10,
        translateY: -transition * 26
      };
    }

    if (baseIndex + 1 === idx) {
      const segmentProgress = scrollProgress - baseIndex;
      if (segmentProgress <= 0.62) {
        return { opacity: 0, blur: 12, translateY: 22 };
      }

      const transition = easeOut((segmentProgress - 0.62) / 0.38);
      return {
        opacity: transition,
        blur: (1 - transition) * 12,
        translateY: (1 - transition) * 22
      };
    }

    if (idx < baseIndex) {
      return { opacity: 0, blur: 10, translateY: -26 };
    }

    return { opacity: 0, blur: 12, translateY: 22 };
  };

  const activeIndex = Math.min(steps.length - 1, Math.round(displayIndex));

  return (
    <div className="how-sequence">
      <div className="how-sequence-sticky">
        <div className="how-phone-phase is-visible">
          <div className="how-step-panel">
            <div className="how-step-text-stack">
              {steps.map((step, idx) => {
                const { opacity, blur, translateY } = getStepStyle(idx);
                return (
                  <article
                    key={step.title}
                    className="how-step-spotlight"
                    aria-hidden={idx !== activeIndex}
                    style={{
                      opacity,
                      filter: blur > 0.3 ? `blur(${blur.toFixed(1)}px)` : "none",
                      transform: `translate3d(0, ${translateY.toFixed(1)}px, 0)`,
                      pointerEvents: idx === activeIndex ? "auto" : "none",
                    }}
                  >
                    <p className="how-step-label">Step {idx + 1}</p>
                    <h2 className="how-step-spotlight-title">{step.title}</h2>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="phone-stage">
            <div className="phone-frame">
              <div className="phone-speaker" aria-hidden="true" />
              <div className="phone-screen">
                {steps.map((step, index) => (
                  <div
                    key={step.screenshot}
                    className={`phone-shot ${displayIndex === index ? "is-active" : ""}`}
                  >
                    <Image
                      src={step.screenshot}
                      alt={`Step ${index + 1}: ${step.title} app screen`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 42vw, (max-width: 1024px) 34vw, 28rem"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={trackRef} className="how-sequence-track" aria-hidden="true">
        {steps.map((step, index) => (
          <div key={step.title} data-step-index={index} className="how-scroll-step" />
        ))}
      </div>
    </div>
  );
}
