"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/config/site";

type AppButtonKind = "user" | "tailor";

interface AppDownloadButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
  kind?: AppButtonKind;
}

export function AppDownloadButton({
  className = "",
  variant = "primary",
  kind = "user"
}: AppDownloadButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const config =
    kind === "tailor" ? siteConfig.tailorAppDownload : siteConfig.appDownload;
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  const buttonClass = `${baseClass} glow-follow-button ${className}`.trim();

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
    node.style.setProperty("--glow-x", `${nextX}px`);
    node.style.setProperty("--glow-y", `${nextY}px`);
    node.style.setProperty("--glow-opacity", "1");
  };

  const fadeGlow = () => {
    const node = ref.current;
    if (!node) return;

    node.style.setProperty("--glow-opacity", "0");
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
        {config.label}
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
      {config.label}
      <span className="sr-only"> — {config.placeholderMessage}</span>
    </span>
  );
}
