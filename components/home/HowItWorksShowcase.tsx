"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HowItWorksStep {
  title: string;
  screenshot: string;
}

interface HowItWorksShowcaseProps {
  steps: HowItWorksStep[];
}

export function HowItWorksShowcase({ steps }: HowItWorksShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visible[0]) {
          const nextIndex = Number(visible[0].target.getAttribute("data-step-index"));
          if (!Number.isNaN(nextIndex)) {
            setActiveIndex(nextIndex);
          }
        }
      },
      {
        threshold: [0.22, 0.45, 0.65],
        rootMargin: "-30% 0px -30% 0px"
      }
    );

    nodes.forEach((node) => observer.observe(node!));
    return () => observer.disconnect();
  }, [steps]);

  const currentStep = steps[activeIndex] ?? steps[0];

  return (
    <div className="how-sequence">
      <div className="how-sequence-sticky">
        <div className="how-phone-phase is-visible">
          <div className="how-step-panel">
            <article key={currentStep.screenshot} className="how-step-spotlight">
              <p className="how-step-kicker">How It Works</p>
              <h2 className="how-step-heading">How It Works</h2>
              <p className="how-step-label">Step {activeIndex + 1}</p>
              <h3>{currentStep.title}</h3>
            </article>
          </div>

          <div className="phone-stage">
            <div className="phone-frame">
              <div className="phone-speaker" aria-hidden="true" />
              <div className="phone-screen">
                {steps.map((step, index) => (
                  <div
                    key={step.screenshot}
                    className={`phone-shot ${activeIndex === index ? "is-active" : ""}`}
                  >
                    <Image
                      src={step.screenshot}
                      alt={`${step.title} app screen`}
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

      <div className="how-sequence-track" aria-hidden="true">
        {steps.map((step, index) => (
          <section
            key={step.title}
            ref={(node) => {
              stepRefs.current[index] = node;
            }}
            data-step-index={index}
            className="how-scroll-step"
          />
        ))}
      </div>
    </div>
  );
}
