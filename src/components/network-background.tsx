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
  const count = Math.max(28, Math.min(48, Math.round(area / 42000)));
  const rand = mulberry32(0x534b38);
  const nodes: Node[] = [];

  // Jittered grid — even coverage across the viewport (no random clumps)
  const cols = Math.max(4, Math.round(Math.sqrt(count * (width / height))));
  const rows = Math.max(3, Math.ceil(count / cols));
  const cellW = width / cols;
  const cellH = height / rows;
  let placed = 0;

  for (let row = 0; row < rows && placed < count; row++) {
    for (let col = 0; col < cols && placed < count; col++) {
      const jitterX = (rand() - 0.5) * cellW * 0.55;
      const jitterY = (rand() - 0.5) * cellH * 0.55;
      const speed = 0.12 + rand() * 0.2;
      const angle = rand() * Math.PI * 2;

      nodes.push({
        x: Math.min(width, Math.max(0, (col + 0.5) * cellW + jitterX)),
        y: Math.min(height, Math.max(0, (row + 0.5) * cellH + jitterY)),
        r: 1.2 + rand() * 1.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      });
      placed++;
    }
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

    // ~30fps — smoother drift without full 60fps cost
    const FRAME_MS = 33;
    const lineColor = "rgba(148, 156, 168, 0.42)";
    const nodeFill = "rgba(180, 188, 200, 0.5)";
    const nodeGlow = "rgba(140, 148, 160, 0.18)";

    const readSize = () => {
      // Prefer layout size from CSS (inset-0 / 100%) so DevTools device
      // toggles never leave a stale inline pixel width on the left edge.
      const rect = canvas.getBoundingClientRect();
      const nextW = Math.max(
        1,
        Math.round(rect.width || window.innerWidth || 1),
      );
      const nextH = Math.max(
        1,
        Math.round(rect.height || window.innerHeight || 1),
      );
      return { nextW, nextH };
    };

    const setup = (forceRebuild = false) => {
      const { nextW, nextH } = readSize();
      const sizeChanged =
        Math.abs(nextW - width) > 1 || Math.abs(nextH - height) > 1;

      width = nextW;
      height = nextH;
      maxDistSq = Math.pow(Math.min(width, height) * 0.34, 2);

      // Buffer size only — never set inline style width/height (breaks
      // fixed inset-0 coverage after mobile ↔ desktop viewport changes)
      if (canvas.width !== width) canvas.width = width;
      if (canvas.height !== height) canvas.height = height;
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      const targetCount = Math.max(
        28,
        Math.min(48, Math.round((width * height) / 42000)),
      );
      const densityChanged = Math.abs(nodes.length - targetCount) > 6;

      if (forceRebuild || nodes.length === 0 || densityChanged) {
        nodes = buildNodes(width, height);
      } else if (sizeChanged) {
        for (const node of nodes) {
          node.x = ((node.x % width) + width) % width;
          node.y = ((node.y % height) + height) % height;
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1.15;
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

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = nodeGlow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = nodeFill;
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
      // Double-rAF + short debounce: DevTools device mode often fires
      // resize before layout has settled on the new viewport size.
      resizeTimer = window.setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setup();
            draw();
          });
        });
      }, 50);
    };

    setup(true);
    draw();

    if (!reduceMotion) {
      start();
      document.addEventListener("visibilitychange", onVisibility);
    }

    window.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("resize", onResize);

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
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
