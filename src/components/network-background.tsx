"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hub: boolean;
};

type Edge = {
  a: number;
  b: number;
};

type Pulse = {
  edge: number;
  t: number;
  speed: number;
  reverse: boolean;
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
  // Dense enough to read as a real mesh on every section, capped for mobile perf
  const count = Math.max(42, Math.min(78, Math.round(area / 26000)));
  const rand = mulberry32(0x534b38);
  const nodes: Node[] = [];

  const cols = Math.max(5, Math.round(Math.sqrt(count * (width / height))));
  const rows = Math.max(4, Math.ceil(count / cols));
  const cellW = width / cols;
  const cellH = height / rows;
  let placed = 0;

  for (let row = 0; row < rows && placed < count; row++) {
    for (let col = 0; col < cols && placed < count; col++) {
      const jitterX = (rand() - 0.5) * cellW * 0.62;
      const jitterY = (rand() - 0.5) * cellH * 0.62;
      const speed = 0.08 + rand() * 0.14;
      const angle = rand() * Math.PI * 2;
      const hub = rand() > 0.88;

      nodes.push({
        x: Math.min(width, Math.max(0, (col + 0.5) * cellW + jitterX)),
        y: Math.min(height, Math.max(0, (row + 0.5) * cellH + jitterY)),
        r: hub ? 2.1 + rand() * 1.1 : 1.1 + rand() * 1.2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        hub,
      });
      placed++;
    }
  }

  return nodes;
}

/** K-nearest neighbor mesh — cleaner triangulation than raw distance pairs */
function buildEdges(nodes: Node[], maxDist: number): Edge[] {
  const maxDistSq = maxDist * maxDist;
  const k = 4;
  const edgeKeys = new Set<string>();
  const edges: Edge[] = [];

  for (let i = 0; i < nodes.length; i++) {
    const candidates: { j: number; d: number }[] = [];
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const d = dx * dx + dy * dy;
      if (d < maxDistSq) candidates.push({ j, d });
    }
    candidates.sort((a, b) => a.d - b.d);
    const take = Math.min(k, candidates.length);
    for (let n = 0; n < take; n++) {
      const j = candidates[n].j;
      const a = Math.min(i, j);
      const b = Math.max(i, j);
      const key = `${a}:${b}`;
      if (edgeKeys.has(key)) continue;
      edgeKeys.add(key);
      edges.push({ a, b });
    }
  }

  return edges;
}

/**
 * Site-wide drifting network mesh.
 * Fixed to the viewport so every section shares the same live background.
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
    let edges: Edge[] = [];
    let pulses: Pulse[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let maxDist = 0;
    let raf = 0;
    let resizeTimer = 0;
    let lastFrame = 0;
    let running = false;
    let time = 0;

    const FRAME_MS = 33;

    const readSize = () => {
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

    const rebuildGraph = () => {
      edges = buildEdges(nodes, maxDist);
      const pulseCount = Math.min(10, Math.max(4, Math.floor(edges.length / 18)));
      const rand = mulberry32(0x8b1d + edges.length);
      pulses = Array.from({ length: pulseCount }, () => ({
        edge: Math.floor(rand() * Math.max(1, edges.length)),
        t: rand(),
        speed: 0.004 + rand() * 0.006,
        reverse: rand() > 0.5,
      }));
    };

    const setup = (forceRebuild = false) => {
      const { nextW, nextH } = readSize();
      const sizeChanged =
        Math.abs(nextW - width) > 1 || Math.abs(nextH - height) > 1;

      width = nextW;
      height = nextH;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      maxDist = Math.min(width, height) * 0.28;

      const bufW = Math.round(width * dpr);
      const bufH = Math.round(height * dpr);
      if (canvas.width !== bufW) canvas.width = bufW;
      if (canvas.height !== bufH) canvas.height = bufH;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = Math.max(
        42,
        Math.min(78, Math.round((width * height) / 26000)),
      );
      const densityChanged = Math.abs(nodes.length - targetCount) > 8;

      if (forceRebuild || nodes.length === 0 || densityChanged) {
        nodes = buildNodes(width, height);
        rebuildGraph();
      } else if (sizeChanged) {
        for (const node of nodes) {
          node.x = ((node.x % width) + width) % width;
          node.y = ((node.y % height) + height) % height;
        }
        rebuildGraph();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Edges with distance-based opacity
      for (let i = 0; i < edges.length; i++) {
        const { a, b } = edges[i];
        const na = nodes[a];
        const nb = nodes[b];
        const dx = na.x - nb.x;
        const dy = na.y - nb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxDist * 1.15) continue;
        const fade = 1 - dist / (maxDist * 1.15);
        const alpha = 0.12 + fade * 0.38;
        const hubLink = na.hub || nb.hub;

        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = hubLink
          ? `rgba(200, 208, 220, ${alpha * 0.95})`
          : `rgba(150, 158, 172, ${alpha})`;
        ctx.lineWidth = hubLink ? 1.25 : 1;
        ctx.stroke();
      }

      // Signal pulses traveling along links
      for (let i = 0; i < pulses.length; i++) {
        const pulse = pulses[i];
        if (!edges.length) continue;
        const edge = edges[pulse.edge % edges.length];
        const na = nodes[edge.a];
        const nb = nodes[edge.b];
        const t = pulse.reverse ? 1 - pulse.t : pulse.t;
        const x = na.x + (nb.x - na.x) * t;
        const y = na.y + (nb.y - na.y) * t;

        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(230, 236, 245, 0.72)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180, 190, 205, 0.16)";
        ctx.fill();
      }

      // Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const breathe = 0.85 + Math.sin(time * 0.0012 + i * 0.7) * 0.15;

        if (node.hub) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r * 3.2 * breathe, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(170, 180, 195, 0.14)";
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r * 1.9, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(140, 148, 160, 0.14)";
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * breathe, 0, Math.PI * 2);
        ctx.fillStyle = node.hub
          ? "rgba(220, 226, 236, 0.7)"
          : "rgba(178, 186, 198, 0.55)";
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      if (!running) return;
      raf = window.requestAnimationFrame(tick);

      if (now - lastFrame < FRAME_MS) return;
      lastFrame = now;
      time = now;

      const step = FRAME_MS / 16.67;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx * step;
        node.y += node.vy * step;

        if (node.x < 0) node.x += width;
        else if (node.x > width) node.x -= width;
        if (node.y < 0) node.y += height;
        else if (node.y > height) node.y -= height;
      }

      // Rebuild links periodically so the mesh reforms as nodes drift
      if (Math.floor(now / 900) !== Math.floor((now - FRAME_MS) / 900)) {
        edges = buildEdges(nodes, maxDist);
      }

      for (let i = 0; i < pulses.length; i++) {
        const pulse = pulses[i];
        pulse.t += pulse.speed * step;
        if (pulse.t >= 1) {
          pulse.t = 0;
          if (edges.length) {
            pulse.edge = (pulse.edge + 1 + Math.floor(Math.random() * 3)) % edges.length;
            pulse.reverse = Math.random() > 0.5;
          }
        }
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
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-screen"
    />
  );
}
