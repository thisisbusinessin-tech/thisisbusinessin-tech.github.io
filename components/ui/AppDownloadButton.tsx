"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/config/site";

type AppButtonKind = "user" | "tailor";

const EMOJI_PUPIL_X_RANGE = 8.5;
const EMOJI_PUPIL_Y_RANGE = 4.5;
const EMOJI_TILT_RANGE = 7;
const EMOJI_BASE_LIFT = 34;
const EMOJI_LIFT_RANGE = 8;
const EMOJI_BROW_BASE_RAISE = 3;
const EMOJI_BROW_RAISE_RANGE = 4;
const EMOJI_ANCHOR_Y_RATIO = -0.08;
const EMOJI_DOWNWARD_LOOK_FLOOR = 0.52;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

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
      const anchorX = rect.width / 2;
      const anchorY = rect.height * EMOJI_ANCHOR_Y_RATIO;
      const normalizedX = clamp((nextX - anchorX) / Math.max(rect.width * 0.5, 1), -1, 1);
      const normalizedY = clamp(
        (nextY - anchorY) / Math.max(rect.height * 0.82, 1),
        EMOJI_DOWNWARD_LOOK_FLOOR,
        1
      );
      const horizontalCalm = 1 - Math.min(Math.abs(normalizedX), 1) * 0.4;
      const pupilX = clamp(normalizedX * EMOJI_PUPIL_X_RANGE, -5, 5);
      const pupilY = clamp(normalizedY * EMOJI_PUPIL_Y_RANGE, -3, 3);
      const faceTilt = normalizedX * EMOJI_TILT_RANGE;
      const faceLift = EMOJI_BASE_LIFT + horizontalCalm * EMOJI_LIFT_RANGE;
      const browRaise = EMOJI_BROW_BASE_RAISE + horizontalCalm * EMOJI_BROW_RAISE_RANGE;
      node.style.setProperty("--emoji-pupil-x", `${pupilX.toFixed(2)}px`);
      node.style.setProperty("--emoji-pupil-y", `${pupilY.toFixed(2)}px`);
      node.style.setProperty("--emoji-tilt", `${faceTilt.toFixed(2)}deg`);
      node.style.setProperty("--emoji-lift", `${faceLift.toFixed(2)}px`);
      node.style.setProperty("--emoji-brow-raise", `${browRaise.toFixed(2)}px`);
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
      node.style.setProperty("--emoji-brow-raise", "0px");
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
