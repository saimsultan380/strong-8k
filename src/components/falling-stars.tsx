"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  trail: number;
};

const STAR_COUNT = 48;

function createStar(width: number, height: number, scatter = false): Star {
  return {
    x: Math.random() * width,
    y: scatter ? Math.random() * height : -Math.random() * height * 0.2,
    size: 0.6 + Math.random() * 2.2,
    speed: 0.35 + Math.random() * 1.35,
    opacity: 0.25 + Math.random() * 0.55,
    trail: 12 + Math.random() * 36,
  };
}

export function FallingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let stars: Star[] = [];
    let raf = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: STAR_COUNT }, () =>
        createStar(width, height, true)
      );
    };

    const draw = () => {
      if (!running) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        star.y += star.speed;
        if (star.y - star.trail > height) {
          Object.assign(star, createStar(width, height, false));
          star.y = -star.trail;
        }

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y - star.trail,
          star.x,
          star.y
        );
        gradient.addColorStop(0, "rgba(245, 230, 163, 0)");
        gradient.addColorStop(
          0.55,
          `rgba(232, 197, 71, ${star.opacity * 0.35})`
        );
        gradient.addColorStop(
          1,
          `rgba(255, 248, 220, ${star.opacity * 0.9})`
        );

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = Math.max(0.6, star.size * 0.55);
        ctx.lineCap = "round";
        ctx.moveTo(star.x, star.y - star.trail);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 250, 230, ${star.opacity})`;
        ctx.shadowColor = "rgba(232, 197, 71, 0.55)";
        ctx.shadowBlur = 6;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = window.requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = window.requestAnimationFrame(draw);
      }
    };

    resize();
    raf = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
