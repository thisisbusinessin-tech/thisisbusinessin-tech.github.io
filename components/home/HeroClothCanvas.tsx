"use client";

import { useEffect, useRef } from "react";

interface HeroClothCanvasProps {
  children: React.ReactNode;
  className?: string;
}

interface ClothPoint {
  x: number;
  y: number;
  px: number;
  py: number;
  restX: number;
  restY: number;
  pinned: boolean;
  elevation: number;
}

interface ClothConstraint {
  a: number;
  b: number;
  restLength: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function HeroClothCanvas({ children, className = "" }: HeroClothCanvasProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;

    if (!host || !canvas) return undefined;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return undefined;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rows = 0;
    let spacing = 0;

    let points: ClothPoint[] = [];
    let constraints: ClothConstraint[] = [];
    let running = false;
    let inViewport = true;
    let lastTime = 0;
    let elapsed = 0;
    let rafId = 0;
    let weavePattern: CanvasPattern | null = null;
    const backgroundCanvas = document.createElement("canvas");
    const backgroundContext = backgroundCanvas.getContext("2d");

    const lightMap = document.createElement("canvas");
    const lightContext = lightMap.getContext("2d", { alpha: false });
    let lightMapData: ImageData | null = null;

    const pointer = {
      x: -9999,
      y: -9999,
      px: -9999,
      py: -9999,
      vx: 0,
      vy: 0,
      active: false
    };

    // Physics constants — tuned for visible interaction with a lighter desktop cost
    let cols = 24;
    const EXTRA_SAG_ROWS = 6;
    const GRAVITY = 1680;
    const HOVER_RADIUS_RATIO = 0.19;
    const HOVER_STRENGTH = 0.13;
    const MAX_HOVER_DELTA = 20;
    const SINK_STRENGTH = 1850;
    const WIND_STRENGTH = 14;
    const EDGE_WIND_BOOST = 1.6;
    const PHYSICS_PASSES = 2;
    const DAMPING = 0.986;
    const SETTLE_STEPS = 120;
    const LIGHT_SCALE = 0.78;
    const MAX_VELOCITY = 24;
    const HEADLINE_LOCK_X_RATIO = 0.24;
    const HEADLINE_LOCK_Y_RATIO = 0.2;

    const buildWeavePattern = () => {
      const tile = document.createElement("canvas");
      tile.width = 46;
      tile.height = 46;

      const tileContext = tile.getContext("2d");
      if (!tileContext) return null;

      tileContext.clearRect(0, 0, tile.width, tile.height);
      tileContext.fillStyle = "rgba(255, 255, 255, 0.024)";
      tileContext.fillRect(0, 0, tile.width, tile.height);

      tileContext.strokeStyle = "rgba(255, 255, 255, 0.12)";
      tileContext.lineWidth = 1.15;

      for (let offset = 5; offset < tile.width; offset += 7) {
        tileContext.beginPath();
        tileContext.moveTo(offset, 0);
        tileContext.lineTo(offset, tile.height);
        tileContext.stroke();
      }

      tileContext.strokeStyle = "rgba(255, 255, 255, 0.08)";
      tileContext.lineWidth = 0.95;
      for (let offset = 5; offset < tile.height; offset += 7) {
        tileContext.beginPath();
        tileContext.moveTo(0, offset);
        tileContext.lineTo(tile.width, offset);
        tileContext.stroke();
      }

      tileContext.strokeStyle = "rgba(6, 31, 65, 0.14)";
      tileContext.lineWidth = 0.8;
      for (let offset = -tile.height; offset < tile.width * 2; offset += 14) {
        tileContext.beginPath();
        tileContext.moveTo(offset, 0);
        tileContext.lineTo(offset - tile.height, tile.height);
        tileContext.stroke();
      }

      tileContext.strokeStyle = "rgba(255, 255, 255, 0.055)";
      tileContext.lineWidth = 1.6;
      for (let offset = 10; offset < tile.width; offset += 18) {
        tileContext.beginPath();
        tileContext.moveTo(offset, 0);
        tileContext.lineTo(offset, tile.height);
        tileContext.stroke();
      }

      return context.createPattern(tile, "repeat");
    };

    const indexFor = (x: number, y: number) => x + y * (cols + 1);

    const buildBackground = () => {
      if (!backgroundContext) return;

      backgroundCanvas.width = Math.max(1, Math.round(width));
      backgroundCanvas.height = Math.max(1, Math.round(height));

      const ctx = backgroundContext;
      ctx.clearRect(0, 0, width, height);

      const baseGradient = ctx.createLinearGradient(0, 0, 0, height);
      baseGradient.addColorStop(0, "#ffffff");
      baseGradient.addColorStop(0.52, "#f5f9ff");
      baseGradient.addColorStop(1, "#edf4ff");
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      const upperWash = ctx.createRadialGradient(
        width * 0.5,
        height * 0.08,
        0,
        width * 0.5,
        height * 0.08,
        width * 0.9
      );
      upperWash.addColorStop(0, "rgba(118, 170, 255, 0.12)");
      upperWash.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = upperWash;
      ctx.fillRect(0, 0, width, height);

      const edgeShade = ctx.createLinearGradient(0, 0, width, 0);
      edgeShade.addColorStop(0, "rgba(255, 255, 255, 0.96)");
      edgeShade.addColorStop(0.1, "rgba(255, 255, 255, 0)");
      edgeShade.addColorStop(0.9, "rgba(255, 255, 255, 0)");
      edgeShade.addColorStop(1, "rgba(255, 255, 255, 0.96)");
      ctx.fillStyle = edgeShade;
      ctx.fillRect(0, 0, width, height);
    };

    const buildMesh = () => {
      const rect = host.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      dpr = Math.min(window.devicePixelRatio || 1, width >= 1024 ? 1.25 : 1.5);
      cols = width >= 1280 ? 26 : width >= 900 ? 24 : 20;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const clothWidthRatio = width >= 1280 ? 1.12 : width >= 1024 ? 1.16 : width >= 768 ? 1.2 : 1.24;
      const clothWidth = width * clothWidthRatio;
      const startX = -(clothWidth - width) / 2;
      const startY = -Math.max(18, height * 0.025);
      spacing = clothWidth / cols;
      rows = Math.min(Math.ceil((height - startY) / spacing) + EXTRA_SAG_ROWS, 30);

      points = [];
      constraints = [];
      buildBackground();

      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          const px = startX + x * spacing;
          const py = startY + y * spacing;
          const pinned = y === 0; // top row only — rest sag under gravity

          points.push({
            x: px, y: py,
            px: px, py: py,
            restX: px, restY: py,
            pinned, elevation: 0
          });
        }
      }

      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          if (x < cols) {
            constraints.push({ a: indexFor(x, y), b: indexFor(x + 1, y), restLength: spacing });
          }
          if (y < rows) {
            constraints.push({ a: indexFor(x, y), b: indexFor(x, y + 1), restLength: spacing });
          }
        }
      }

      if (lightContext) {
        lightMap.width = cols + 1;
        lightMap.height = rows + 1;
        lightMapData = lightContext.createImageData(cols + 1, rows + 1);
      }

      weavePattern = buildWeavePattern();

      // Pre-settle — run physics without drawing so cloth sags naturally at load
      for (let s = 0; s < SETTLE_STEPS; s++) {
        stepPhysics(0.016);
      }

      draw();
    };

    const stepPhysics = (dt: number) => {
      elapsed += dt;
      const hoverRadius = Math.max(100, Math.min(width, height) * HOVER_RADIUS_RATIO);
      const isHovering = pointer.active;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        if (p.pinned) {
          p.x = p.restX; p.y = p.restY;
          p.px = p.restX; p.py = p.restY;
          p.elevation = 0;
          continue;
        }

        // Gravity + gentle wind oscillation (reference approach)
        let ax = 0;
        let ay = GRAVITY;

        if (!isHovering) {
          const edgeT = Math.abs((p.x - width / 2) / (width / 2));
          const edgeBoost = 1 + edgeT * (EDGE_WIND_BOOST - 1);
          ax += Math.sin(elapsed * 0.42 + p.x * 0.034 + p.y * 0.008) * WIND_STRENGTH * edgeBoost;
          ay += Math.cos(elapsed * 0.34 + p.y * 0.024) * WIND_STRENGTH * 0.24;
        }

        // Cursor interaction
        if (isHovering) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy) || 0.0001;

          if (dist < hoverRadius) {
            const falloff = 1 - dist / hoverRadius;

            // Clamp pointer velocity so idle cursor at center cannot destabilise
            let rawDx = pointer.vx;
            let rawDy = pointer.vy;
            const rawDist = Math.hypot(rawDx, rawDy);
            if (rawDist > MAX_HOVER_DELTA) {
              const s = MAX_HOVER_DELTA / rawDist;
              rawDx *= s; rawDy *= s;
            }
            p.px -= rawDx * HOVER_STRENGTH * falloff;
            p.py -= rawDy * HOVER_STRENGTH * falloff;

            const pull = falloff * falloff * SINK_STRENGTH;
            ax += (-dx / dist) * pull;
            ay += (-dy / dist) * pull;
          }
        }

        const headlineCenterX = width / 2;
        const headlineCenterY = height * 0.54;
        const headlineZoneX = width * HEADLINE_LOCK_X_RATIO;
        const headlineZoneY = height * HEADLINE_LOCK_Y_RATIO;
        const centerDx = Math.abs(p.restX - headlineCenterX);
        const centerDy = Math.abs(p.restY - headlineCenterY);

        if (centerDx < headlineZoneX && centerDy < headlineZoneY) {
          const zone =
            (1 - centerDx / headlineZoneX) *
            (1 - centerDy / headlineZoneY);
          ax += (p.restX - p.x) * (22 * zone);
          ay += (p.restY - p.y) * (28 * zone);
        }

        let vx = (p.x - p.px) * DAMPING + ax * dt * dt;
        let vy = (p.y - p.py) * DAMPING + ay * dt * dt;

        // Velocity clamping — prevents runaway oscillation when cursor is idle
        const speed = Math.hypot(vx, vy);
        if (speed > MAX_VELOCITY) {
          const sc = MAX_VELOCITY / speed;
          vx *= sc; vy *= sc;
        }

        p.px = p.x;
        p.py = p.y;
        p.x += vx;
        p.y += vy;

        // Elevation for lightmap: surface normal projection
        p.elevation = (p.x - p.restX) * -0.55 + (p.y - p.restY) * -0.82;
      }

      for (let pass = 0; pass < PHYSICS_PASSES; pass++) {
        for (const c of constraints) {
          const a = points[c.a];
          const b = points[c.b];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          const diff = ((c.restLength - dist) / dist) * 0.5;
          const ox = dx * diff;
          const oy = dy * diff;
          if (!a.pinned) { a.x -= ox; a.y -= oy; }
          if (!b.pinned) { b.x += ox; b.y += oy; }
        }
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      if (backgroundCanvas.width > 0 && backgroundCanvas.height > 0) {
        context.drawImage(backgroundCanvas, 0, 0, width, height);
      }

      // Build the mesh silhouette Path2D (quads slightly overlapped to hide seams)
      const QUAD_OVERLAP = 1.032;
      const meshPath = new Path2D();

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i0 = indexFor(x, y);
          const i1 = indexFor(x + 1, y);
          const i2 = indexFor(x, y + 1);
          const i3 = indexFor(x + 1, y + 1);

          const p0 = points[i0], p1 = points[i1];
          const p2 = points[i2], p3 = points[i3];

          const cx = (p0.x + p1.x + p2.x + p3.x) / 4;
          const cy = (p0.y + p1.y + p2.y + p3.y) / 4;
          const S = QUAD_OVERLAP;

          meshPath.moveTo(cx + (p0.x - cx) * S, cy + (p0.y - cy) * S);
          meshPath.lineTo(cx + (p1.x - cx) * S, cy + (p1.y - cy) * S);
          meshPath.lineTo(cx + (p3.x - cx) * S, cy + (p3.y - cy) * S);
          meshPath.lineTo(cx + (p2.x - cx) * S, cy + (p2.y - cy) * S);
          meshPath.closePath();
        }
      }

      // Fill cloth silhouette — opaque, full coverage so it looks like real fabric
      // First fill with the base gradient colour
      context.save();
      context.clip(meshPath);
      const clothGrad = context.createLinearGradient(0, 0, 0, height);
      clothGrad.addColorStop(0, "#1b6ddd");
      clothGrad.addColorStop(0.48, "#0f58b6");
      clothGrad.addColorStop(1, "#0a3f86");
      context.fillStyle = clothGrad;
      context.fillRect(0, 0, width, height);
      // Then overlay the weave texture on top for fabric appearance
      if (weavePattern) {
        context.globalAlpha = width >= 1024 ? 0.44 : 0.38;
        context.fillStyle = weavePattern;
        context.fillRect(0, 0, width, height);
      }
      context.restore();

      // Lightmap — one pixel per vertex, bilinear-scaled by drawImage = smooth folds
      if (lightMapData && lightContext) {
        const data = lightMapData.data;
        for (let i = 0; i < points.length; i++) {
          const shade = 128 + clamp(points[i].elevation * LIGHT_SCALE, -120, 120);
          const o = i * 4;
          data[o] = shade; data[o + 1] = shade; data[o + 2] = shade; data[o + 3] = 255;
        }
        lightContext.putImageData(lightMapData, 0, 0);

        context.save();
        context.clip(meshPath);
        context.globalCompositeOperation = "overlay";
        context.drawImage(lightMap, 0, 0, lightMap.width, lightMap.height, 0, 0, width, height);
        context.restore();
      }

      if (pointer.active) {
        const hoverRadius = Math.max(100, Math.min(width, height) * HOVER_RADIUS_RATIO);
        const shadow = context.createRadialGradient(
          pointer.x, pointer.y, 0,
          pointer.x, pointer.y, hoverRadius * 0.92
        );
        shadow.addColorStop(0, "rgba(6, 13, 26, 0.06)");
        shadow.addColorStop(0.42, "rgba(6, 13, 26, 0.03)");
        shadow.addColorStop(0.74, "rgba(6, 13, 26, 0.01)");
        shadow.addColorStop(1, "rgba(6, 13, 26, 0)");
        context.fillStyle = shadow;
        context.beginPath();
        context.arc(pointer.x, pointer.y, hoverRadius, 0, Math.PI * 2);
        context.fill();
      }
    };

    const loop = (time: number) => {
      if (!running) return;
      if (!lastTime) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.032);
      lastTime = time;
      stepPhysics(dt);
      draw();
      rafId = window.requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reducedMotionQuery.matches || !inViewport) return;
      running = true;
      lastTime = 0;
      rafId = window.requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      if (rafId) { window.cancelAnimationFrame(rafId); rafId = 0; }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotionQuery.matches) return;
      const rect = host.getBoundingClientRect();
      const nextX = event.clientX - rect.left;
      const nextY = event.clientY - rect.top;
      if (!pointer.active) { pointer.px = nextX; pointer.py = nextY; }
      pointer.vx = nextX - pointer.x;
      pointer.vy = nextY - pointer.y;
      pointer.px = pointer.x;
      pointer.py = pointer.y;
      pointer.x = nextX;
      pointer.y = nextY;
      pointer.active = true;
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (reducedMotionQuery.matches) return;
      const rect = host.getBoundingClientRect();
      const nextX = event.clientX - rect.left;
      const nextY = event.clientY - rect.top;
      pointer.px = nextX;
      pointer.py = nextY;
      pointer.x = nextX;
      pointer.y = nextY;
      pointer.vx = 0;
      pointer.vy = 0;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.vx = 0;
      pointer.vy = 0;
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const handleReducedMotionChange = () => {
      if (reducedMotionQuery.matches) {
        stop(); handlePointerLeave(); draw();
      } else { buildMesh(); start(); }
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        inViewport = entries.some((e) => e.isIntersecting);
        if (inViewport) start(); else stop();
      },
      { threshold: 0.08 }
    );

    const resizeObserver = new ResizeObserver(() => { buildMesh(); });

    buildMesh();
    start();

    host.addEventListener("pointerdown", handlePointerDown, { passive: true });
    host.addEventListener("pointermove", handlePointerMove, { passive: true });
    host.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    host.addEventListener("pointerup", handlePointerLeave, { passive: true });
    host.addEventListener("pointercancel", handlePointerLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    if (typeof reducedMotionQuery.addEventListener === "function") {
      reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
    } else {
      (reducedMotionQuery as MediaQueryList).addListener(handleReducedMotionChange);
    }

    intersectionObserver.observe(host);
    resizeObserver.observe(host);

    return () => {
      stop();
      host.removeEventListener("pointerdown", handlePointerDown);
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
      host.removeEventListener("pointerup", handlePointerLeave);
      host.removeEventListener("pointercancel", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (typeof reducedMotionQuery.removeEventListener === "function") {
        reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      } else {
        (reducedMotionQuery as MediaQueryList).removeListener(handleReducedMotionChange);
      }
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={hostRef} className={className}>
      <canvas ref={canvasRef} className="hero-cloth-canvas" aria-hidden="true" />
      {children}
    </div>
  );
}
