"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/config/site";

type AppButtonKind = "user" | "tailor";

interface AppDownloadButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
  kind?: AppButtonKind;
  effect?: "white-glow" | "emoji-peek" | "none";
}

export function AppDownloadButton({
  className = "",
  variant = "primary",
  kind = "user",
  effect = "white-glow"
}: AppDownloadButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const config =
    kind === "tailor" ? siteConfig.tailorAppDownload : siteConfig.appDownload;
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  const effectClass =
    effect === "white-glow"
      ? "glow-follow-button glow-white"
      : effect === "emoji-peek"
        ? "emoji-peek-button"
        : "";
  const buttonClass = `${baseClass} ${effectClass} ${className}`.trim();

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const rect = node.getBoundingClientRect();
    const center = { x: rect.width / 2, y: rect.height / 2 };
    node.style.setProperty("--glow-x", `${center.x}px`);
    node.style.setProperty("--glow-y", `${center.y}px`);
    return undefined;
  }, []);

  const setGlowPosition = (clientX: number, clientY: number) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const nextX = clientX - rect.left;
    const nextY = clientY - rect.top;
    if (effect === "white-glow") {
      node.style.setProperty("--glow-x", `${nextX}px`);
      node.style.setProperty("--glow-y", `${nextY}px`);
      node.style.setProperty("--glow-opacity", "1");
      return;
    }

    if (effect === "emoji-peek") {
      const xRatio = rect.width > 0 ? nextX / rect.width : 0.5;
      const yRatio = rect.height > 0 ? nextY / rect.height : 0.5;
      const pupilX = (xRatio - 0.5) * 8.5;
      const pupilY = (yRatio - 0.5) * 4.5;
      const faceTilt = (xRatio - 0.5) * 7;
      const faceLift = 26 + (0.5 - Math.abs(yRatio - 0.5)) * 7;
      node.style.setProperty("--emoji-pupil-x", `${pupilX.toFixed(2)}px`);
      node.style.setProperty("--emoji-pupil-y", `${pupilY.toFixed(2)}px`);
      node.style.setProperty("--emoji-tilt", `${faceTilt.toFixed(2)}deg`);
      node.style.setProperty("--emoji-lift", `${faceLift.toFixed(2)}px`);
      node.style.setProperty("--emoji-opacity", "1");
    }
  };

  const fadeGlow = () => {
    const node = ref.current;
    if (!node) return;

    if (effect === "white-glow") {
      node.style.setProperty("--glow-opacity", "0");
      return;
    }

    if (effect === "emoji-peek") {
      node.style.setProperty("--emoji-opacity", "0");
      node.style.setProperty("--emoji-pupil-x", "0px");
      node.style.setProperty("--emoji-pupil-y", "0px");
      node.style.setProperty("--emoji-tilt", "0deg");
      node.style.setProperty("--emoji-lift", "0px");
    }
  };

  const interactiveProps = {
    className: buttonClass,
    onPointerEnter: (event: React.PointerEvent<HTMLAnchorElement | HTMLSpanElement>) =>
      setGlowPosition(event.clientX, event.clientY),
    onPointerMove: (event: React.PointerEvent<HTMLAnchorElement | HTMLSpanElement>) =>
      setGlowPosition(event.clientX, event.clientY),
    onPointerLeave: fadeGlow,
    onFocus: () => {
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      setGlowPosition(rect.left + rect.width / 2, rect.top + rect.height / 2);
    },
    onBlur: fadeGlow
  };

  const content = (
    <>
      <span className="button-label">{config.label}</span>
      {effect === "emoji-peek" ? (
        <>
          <span className="emoji-peek-face" aria-hidden="true">
            <span className="emoji-peek-brows">
              <span className="emoji-peek-brow emoji-peek-brow-left" />
              <span className="emoji-peek-brow emoji-peek-brow-right" />
            </span>
            <span className="emoji-peek-eyes">
              <span className="emoji-peek-eye">
                <span className="emoji-peek-pupil" />
              </span>
              <span className="emoji-peek-eye">
                <span className="emoji-peek-pupil" />
              </span>
            </span>
          </span>
          <span className="emoji-peek-mask" aria-hidden="true" />
        </>
      ) : null}
    </>
  );

  if (config.status === "live" && config.url) {
    return (
      <a
        {...interactiveProps}
        ref={(node) => {
          ref.current = node;
        }}
        href={config.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <span
      {...interactiveProps}
      ref={(node) => {
        ref.current = node;
      }}
      className={`${buttonClass} cursor-default opacity-85`}
      role="status"
      aria-label={config.placeholderMessage}
      title={config.placeholderMessage}
    >
      {content}
      <span className="sr-only"> — {config.placeholderMessage}</span>
    </span>
  );
}
