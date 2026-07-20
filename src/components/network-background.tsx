"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
};

/** Deterministic PRNG — same seed ⇒ same starting pattern */
function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildNodes(width: number, height: number) {
  const area = width * height;
  const count = Math.max(18, Math.min(28, Math.round(area / 65000)));
  const rand = mulberry32(0x534b38);
  const margin = 0.03;
  const nodes: Node[] = [];

  for (let i = 0; i < count; i++) {
    const speed = 0.08 + rand() * 0.14;
    const angle = rand() * Math.PI * 2;
    nodes.push({
      x: (margin + rand() * (1 - margin * 2)) * width,
      y: (margin + rand() * (1 - margin * 2)) * height,
      r: 1.1 + rand() * 1.4,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
    });
  }

  return nodes;
}

/**
 * Lightweight drifting network mesh.
 * Nodes wrap off-screen for a continuous infinite drift (no bounce/restart).
 */
export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let maxDistSq = 0;
    let raf = 0;
    let resizeTimer = 0;
    let lastFrame = 0;
    let running = false;

    // ~20fps is enough for a soft drift and much cheaper than 60fps
    const FRAME_MS = 50;
    const lineColor = "rgba(180, 186, 198, 0.16)";
    const nodeFill = "rgba(210, 216, 226, 0.26)";

    const setup = () => {
      // DPR 1 for bg layer — big win on retina without visible loss
      width = window.innerWidth;
      height = window.innerHeight;
      maxDistSq = Math.pow(Math.min(width, height) * 0.26, 2);
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      // Keep existing velocities/directions when possible so resize doesn't restart
      if (nodes.length === 0) {
        nodes = buildNodes(width, height);
      } else {
        for (const node of nodes) {
          node.x = ((node.x % width) + width) % width;
          node.y = ((node.y % height) + height) % height;
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 0.75;
      ctx.strokeStyle = lineColor;
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = dx * dx + dy * dy;
          if (d < maxDistSq) {
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
          }
        }
      }
      ctx.stroke();

      ctx.fillStyle = nodeFill;
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      if (!running) return;
      raf = window.requestAnimationFrame(tick);

      if (now - lastFrame < FRAME_MS) return;
      lastFrame = now;

      const step = FRAME_MS / 16.67;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx * step;
        node.y += node.vy * step;

        // Wrap seamlessly — continuous infinite motion, no bounce restart
        if (node.x < 0) node.x += width;
        else if (node.x > width) node.x -= width;
        if (node.y < 0) node.y += height;
        else if (node.y > height) node.y -= height;
      }

      draw();
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      lastFrame = 0;
      raf = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      window.cancelAnimationFrame(raf);
      raf = 0;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        setup();
        draw();
      }, 150);
    };

    setup();
    draw();

    if (!reduceMotion) {
      start();
      document.addEventListener("visibilitychange", onVisibility);
    }

    window.addEventListener("resize", onResize);

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
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
