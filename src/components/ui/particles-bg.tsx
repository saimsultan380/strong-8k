"use client";

import { useEffect, useId, useRef } from "react";

declare global {
  interface Window {
    particlesJS?: (
      id: string,
      config: Record<string, unknown>,
    ) => void;
    pJSDom?: Array<{
      pJS: {
        fn: {
          vendors: {
            destroypJS: () => void;
          };
        };
      };
    }>;
  }
}

/** Self-hosted — no CDN wait on first paint */
const SCRIPT_SRC = "/vendor/particles.min.js";

const MESH = {
  particles: "#c8ced8",
  lines: "#9aa3b0",
  accent: "#7e8794",
} as const;

function destroyParticles() {
  if (window.pJSDom?.length) {
    window.pJSDom.forEach((p) => {
      try {
        p.pJS.fn.vendors.destroypJS();
      } catch {
        /* ignore teardown races */
      }
    });
    window.pJSDom = [];
  }
}

function buildConfig(animate: boolean, isMobile: boolean): Record<string, unknown> {
  // Lean counts — line linking is O(n²); old mobile used 120 and felt sluggish
  const count = isMobile ? 28 : 40;

  return {
    particles: {
      number: {
        value: count,
        density: { enable: true, value_area: isMobile ? 820 : 1100 },
      },
      color: { value: MESH.particles },
      shape: {
        type: "circle",
        stroke: { width: 0.4, color: MESH.accent },
      },
      opacity: {
        value: isMobile ? 0.5 : 0.46,
        random: false,
        // Skip opacity pulse — cheaper first paint + steady FPS
        anim: { enable: false },
      },
      size: {
        value: isMobile ? 2.1 : 2.3,
        random: true,
        anim: { enable: false },
      },
      line_linked: {
        enable: true,
        distance: isMobile ? 108 : 130,
        color: MESH.lines,
        opacity: isMobile ? 0.34 : 0.3,
        width: 1,
      },
      move: {
        enable: animate,
        speed: isMobile ? 0.9 : 1.05,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 180, line_linked: { opacity: 0.6 } },
        push: { particles_nb: 2 },
        repulse: { distance: 140, duration: 0.3 },
      },
    },
    // Retina doubles pixel work — keep off for faster init/FPS
    retina_detect: false,
  };
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function initParticles(containerId: string, animate: boolean) {
  const host = document.getElementById(containerId);
  if (!host || !window.particlesJS) return;

  destroyParticles();
  host.querySelectorAll("canvas").forEach((el) => el.remove());
  window.particlesJS(containerId, buildConfig(animate, isMobileViewport()));

  // Hint the browser the mesh is ready (fade-in via CSS)
  host.dataset.ready = "true";
}

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.particlesJS) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-particles-js="true"]',
    );
    if (existing) {
      if (window.particlesJS) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.dataset.particlesJs = "true";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });
    document.head.appendChild(script);
  });

  return scriptPromise;
}

type ParticlesBgProps = {
  className?: string;
};

/**
 * Fast network mesh: self-hosted particles.js, lean particle count, no retina.
 */
export default function ParticlesBg({ className }: ParticlesBgProps) {
  const reactId = useId().replace(/:/g, "");
  const containerId = `particles-js-${reactId}`;
  const started = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || started.current) return;
    started.current = true;

    let cancelled = false;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const start = async () => {
      try {
        await loadScript();
      } catch {
        return;
      }
      if (cancelled) return;
      // Next frame so layout paints first, then mesh boots immediately
      requestAnimationFrame(() => {
        if (cancelled) return;
        initParticles(containerId, !motionQuery.matches);
      });
    };

    void start();

    const reinit = () => {
      if (!window.particlesJS || cancelled) return;
      initParticles(containerId, !motionQuery.matches);
    };

    motionQuery.addEventListener("change", reinit);
    mobileQuery.addEventListener("change", reinit);

    return () => {
      cancelled = true;
      motionQuery.removeEventListener("change", reinit);
      mobileQuery.removeEventListener("change", reinit);
      destroyParticles();
      started.current = false;
    };
  }, [containerId]);

  return (
    <div
      id={containerId}
      aria-hidden
      className={
        className ??
        "particles-mesh pointer-events-none fixed inset-0 z-0 h-[100dvh] w-screen bg-transparent"
      }
    />
  );
}
