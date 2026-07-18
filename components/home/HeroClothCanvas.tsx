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
    let columns = 0;
    let rows = 0;
    let points: ClothPoint[] = [];
    let constraints: ClothConstraint[] = [];
    let running = false;
    let inViewport = true;
    let lastTime = 0;
    let rafId = 0;
    let weavePattern: CanvasPattern | null = null;

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

    const RETURN_STRENGTH = 7.5;
    const DAMPING = 0.962;
    const POINTER_DRAG = 0.08;
    const POINTER_SINK = 20;
    const CONSTRAINT_PASSES = 3;
    const LIGHT_SCALE = 1.45;

    const buildWeavePattern = () => {
      const tile = document.createElement("canvas");
      tile.width = 28;
      tile.height = 28;

      const tileContext = tile.getContext("2d");
      if (!tileContext) return null;

      tileContext.clearRect(0, 0, tile.width, tile.height);
      tileContext.strokeStyle = "rgba(255, 255, 255, 0.055)";
      tileContext.lineWidth = 1;

      for (let offset = -tile.height; offset < tile.width * 2; offset += 7) {
        tileContext.beginPath();
        tileContext.moveTo(offset, 0);
        tileContext.lineTo(offset - tile.height, tile.height);
        tileContext.stroke();
      }

      tileContext.strokeStyle = "rgba(1, 17, 38, 0.08)";
      for (let offset = 0; offset < tile.height * 2; offset += 9) {
        tileContext.beginPath();
        tileContext.moveTo(0, offset);
        tileContext.lineTo(tile.width, offset - tile.width);
        tileContext.stroke();
      }

      return context.createPattern(tile, "repeat");
    };

    const indexFor = (x: number, y: number) => x + y * (columns + 1);

    const buildMesh = () => {
      const rect = host.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = clamp(Math.round(width / 48), 16, 30);
      rows = clamp(Math.round(height / 54), 12, 20);

      const stepX = width / columns;
      const stepY = height / rows;

      points = [];
      constraints = [];

      for (let y = 0; y <= rows; y += 1) {
        for (let x = 0; x <= columns; x += 1) {
          const pointX = x * stepX;
          const pointY = y * stepY;
          const pinned = x === 0 || y === 0 || x === columns || y === rows;

          points.push({
            x: pointX,
            y: pointY,
            px: pointX,
            py: pointY,
            restX: pointX,
            restY: pointY,
            pinned,
            elevation: 0
          });
        }
      }

      for (let y = 0; y <= rows; y += 1) {
        for (let x = 0; x <= columns; x += 1) {
          if (x < columns) {
            constraints.push({
              a: indexFor(x, y),
              b: indexFor(x + 1, y),
              restLength: stepX
            });
          }

          if (y < rows) {
            constraints.push({
              a: indexFor(x, y),
              b: indexFor(x, y + 1),
              restLength: stepY
            });
          }
        }
      }

      if (lightContext) {
        lightMap.width = columns + 1;
        lightMap.height = rows + 1;
        lightMapData = lightContext.createImageData(columns + 1, rows + 1);
      }

      weavePattern = buildWeavePattern();
      draw();
    };

    const step = (dt: number) => {
      const radius = Math.max(110, Math.min(width, height) * 0.17);
      const frameScale = Math.min(dt * 60, 1.2);

      for (const point of points) {
        if (point.pinned) {
          point.x = point.restX;
          point.y = point.restY;
          point.px = point.restX;
          point.py = point.restY;
          point.elevation = 0;
          continue;
        }

        let ax = (point.restX - point.x) * RETURN_STRENGTH;
        let ay = (point.restY - point.y) * RETURN_STRENGTH;

        if (pointer.active) {
          const dx = point.x - pointer.x;
          const dy = point.y - pointer.y;
          const distance = Math.hypot(dx, dy) || 0.0001;

          if (distance < radius) {
            const falloff = 1 - distance / radius;
            point.px -= pointer.vx * POINTER_DRAG * falloff;
            point.py -= pointer.vy * POINTER_DRAG * falloff;

            const sink = falloff * falloff * POINTER_SINK;
            ax += (-dx / distance) * sink;
            ay += (-dy / distance) * sink;
          }
        }

        const vx = (point.x - point.px) * DAMPING;
        const vy = (point.y - point.py) * DAMPING;

        point.px = point.x;
        point.py = point.y;
        point.x += vx + ax * 0.12 * frameScale;
        point.y += vy + ay * 0.12 * frameScale;
        point.elevation = (point.x - point.restX) * -0.78 + (point.y - point.restY) * -1.18;
      }

      for (let pass = 0; pass < CONSTRAINT_PASSES; pass += 1) {
        for (const constraint of constraints) {
          const a = points[constraint.a];
          const b = points[constraint.b];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy) || 0.0001;
          const diff = ((constraint.restLength - distance) / distance) * 0.5;
          const offsetX = dx * diff;
          const offsetY = dy * diff;

          if (!a.pinned) {
            a.x -= offsetX;
            a.y -= offsetY;
          }

          if (!b.pinned) {
            b.x += offsetX;
            b.y += offsetY;
          }
        }
      }
    };

    const drawMeshThreads = () => {
      context.save();
      context.lineWidth = 1;
      context.strokeStyle = "rgba(255, 255, 255, 0.032)";

      for (let y = 0; y <= rows; y += 2) {
        context.beginPath();

        for (let x = 0; x <= columns; x += 1) {
          const point = points[indexFor(x, y)];
          if (x === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }

        context.stroke();
      }

      context.strokeStyle = "rgba(1, 17, 38, 0.075)";

      for (let x = 0; x <= columns; x += 2) {
        context.beginPath();

        for (let y = 0; y <= rows; y += 1) {
          const point = points[indexFor(x, y)];
          if (y === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        }

        context.stroke();
      }

      context.restore();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const baseGradient = context.createLinearGradient(0, 0, 0, height);
      baseGradient.addColorStop(0, "#0a3d82");
      baseGradient.addColorStop(0.48, "#043470");
      baseGradient.addColorStop(1, "#031b37");

      context.fillStyle = baseGradient;
      context.fillRect(0, 0, width, height);

      const upperWash = context.createRadialGradient(width * 0.5, height * 0.08, 0, width * 0.5, height * 0.08, width * 0.9);
      upperWash.addColorStop(0, "rgba(255, 255, 255, 0.12)");
      upperWash.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.fillStyle = upperWash;
      context.fillRect(0, 0, width, height);

      if (weavePattern) {
        context.save();
        context.globalAlpha = 0.12;
        context.fillStyle = weavePattern;
        context.fillRect(0, 0, width, height);
        context.restore();
      }

      if (pointer.active) {
        const pressShadow = context.createRadialGradient(
          pointer.x + 6,
          pointer.y + 10,
          0,
          pointer.x + 6,
          pointer.y + 10,
          Math.max(130, Math.min(width, height) * 0.22)
        );

        pressShadow.addColorStop(0, "rgba(1, 10, 22, 0.2)");
        pressShadow.addColorStop(0.4, "rgba(1, 10, 22, 0.1)");
        pressShadow.addColorStop(1, "rgba(1, 10, 22, 0)");

        context.fillStyle = pressShadow;
        context.beginPath();
        context.arc(
          pointer.x + 6,
          pointer.y + 10,
          Math.max(130, Math.min(width, height) * 0.22),
          0,
          Math.PI * 2
        );
        context.fill();
      }

      if (lightMapData && lightContext) {
        const data = lightMapData.data;

        for (let i = 0; i < points.length; i += 1) {
          const shade = 128 + clamp(points[i].elevation * LIGHT_SCALE, -58, 58);
          const offset = i * 4;
          data[offset] = shade;
          data[offset + 1] = shade;
          data[offset + 2] = shade;
          data[offset + 3] = 255;
        }

        lightContext.putImageData(lightMapData, 0, 0);

        context.save();
        context.globalCompositeOperation = "soft-light";
        context.globalAlpha = 0.92;
        context.drawImage(lightMap, 0, 0, lightMap.width, lightMap.height, 0, 0, width, height);
        context.restore();

        context.save();
        context.globalCompositeOperation = "multiply";
        context.globalAlpha = 0.14;
        context.drawImage(lightMap, 0, 0, lightMap.width, lightMap.height, 0, 0, width, height);
        context.restore();
      }

      drawMeshThreads();
    };

    const loop = (time: number) => {
      if (!running) return;

      if (!lastTime) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.032);
      lastTime = time;

      step(dt);
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
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotionQuery.matches) return;

      const rect = host.getBoundingClientRect();
      const nextX = event.clientX - rect.left;
      const nextY = event.clientY - rect.top;

      if (!pointer.active) {
        pointer.px = nextX;
        pointer.py = nextY;
      }

      pointer.vx = nextX - pointer.px;
      pointer.vy = nextY - pointer.py;
      pointer.px = nextX;
      pointer.py = nextY;
      pointer.x = nextX;
      pointer.y = nextY;
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
        stop();
        handlePointerLeave();
        draw();
      } else {
        buildMesh();
        start();
      }
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        inViewport = entries.some((entry) => entry.isIntersecting);
        if (inViewport) start();
        else stop();
      },
      { threshold: 0.08 }
    );

    const resizeObserver = new ResizeObserver(() => {
      buildMesh();
    });

    buildMesh();
    start();

    host.addEventListener("pointermove", handlePointerMove, { passive: true });
    host.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    if (typeof reducedMotionQuery.addEventListener === "function") {
      reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
    } else {
      reducedMotionQuery.addListener(handleReducedMotionChange);
    }

    intersectionObserver.observe(host);
    resizeObserver.observe(host);

    return () => {
      stop();
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);

      if (typeof reducedMotionQuery.removeEventListener === "function") {
        reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      } else {
        reducedMotionQuery.removeListener(handleReducedMotionChange);
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
