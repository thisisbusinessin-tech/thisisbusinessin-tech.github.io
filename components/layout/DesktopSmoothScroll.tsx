"use client";

import { useEffect } from "react";

const EASE = 0.62;
const MIN_DELTA = 0.8;

function getScrollableAncestor(start: EventTarget | null) {
  let node = start instanceof HTMLElement ? start : null;

  while (node && node !== document.body) {
    const style = window.getComputedStyle(node);
    const canScrollY =
      /(auto|scroll|overlay)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 2;

    if (canScrollY) {
      return node;
    }

    node = node.parentElement;
  }

  return null;
}

export function DesktopSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (reducedMotion.matches || !finePointer.matches) {
      return undefined;
    }

    const scroller = document.scrollingElement;
    if (!scroller) return undefined;

    let rafId = 0;
    let currentTarget = window.scrollY;

    const animate = () => {
      const current = window.scrollY;
      const diff = currentTarget - current;

      if (Math.abs(diff) <= MIN_DELTA) {
        window.scrollTo({ top: currentTarget, behavior: "auto" });
        rafId = 0;
        return;
      }

      window.scrollTo({
        top: current + diff * EASE,
        behavior: "auto"
      });

      rafId = window.requestAnimationFrame(animate);
    };

    const syncTarget = () => {
      if (!rafId) {
        currentTarget = window.scrollY;
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        Math.abs(event.deltaY) < Math.abs(event.deltaX)
      ) {
        return;
      }

      if (event.deltaMode === 0 && Math.abs(event.deltaY) < 16) {
        return;
      }

      const nestedScroller = getScrollableAncestor(event.target);
      if (nestedScroller) {
        return;
      }

      event.preventDefault();

      const maxScroll = scroller.scrollHeight - window.innerHeight;
      currentTarget = Math.min(maxScroll, Math.max(0, window.scrollY + event.deltaY * 1.02));

      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", syncTarget, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", syncTarget);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null;
}
