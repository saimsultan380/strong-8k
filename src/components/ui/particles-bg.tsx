"use client";

import { useEffect, useId } from "react";

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

const SCRIPT_SRC =
  "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";

/** Existing site mesh palette — soft grey / white */
const MESH = {
  particles: "#c8ced8",
  lines: "#9aa3b0",
  accent: "#7e8794",
} as const;

function destroyParticles() {
  if (window.pJSDom?.length) {
    window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
    window.pJSDom = [];
  }
}

function buildConfig(animate: boolean, isMobile: boolean): Record<string, unknown> {
  return {
    particles: {
      number: isMobile
        ? { value: 120, density: { enable: true, value_area: 700 } }
        : { value: 95, density: { enable: true, value_area: 950 } },
      color: { value: MESH.particles },
      shape: {
        type: "circle",
        stroke: { width: 0.5, color: MESH.accent },
      },
      opacity: {
        value: isMobile ? 0.52 : 0.48,
        random: true,
        anim: animate
          ? { enable: true, speed: 1, opacity_min: 0.2, sync: false }
          : { enable: false },
      },
      size: {
        value: isMobile ? 2.4 : 2.6,
        random: true,
        anim: animate
          ? { enable: true, speed: 2, size_min: 1, sync: false }
          : { enable: false },
      },
      line_linked: {
        enable: true,
        distance: isMobile ? 120 : 145,
        color: MESH.lines,
        opacity: isMobile ? 0.36 : 0.32,
        width: 1.1,
      },
      move: {
        enable: animate,
        speed: isMobile ? 1.2 : 1.35,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
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
        grab: { distance: 220, line_linked: { opacity: 0.75 } },
        push: { particles_nb: 4 },
        repulse: { distance: 180, duration: 0.4 },
      },
    },
    retina_detect: true,
  };
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function initParticles(containerId: string, animate: boolean) {
  destroyParticles();

  const host = document.getElementById(containerId);
  if (!host || !window.particlesJS) return;

  host.querySelectorAll("canvas").forEach((el) => el.remove());
  window.particlesJS(containerId, buildConfig(animate, isMobileViewport()));
}

function loadScript(): Promise<void> {
  if (window.particlesJS) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    'script[data-particles-js="true"]',
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.particlesJS) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.dataset.particlesJs = "true";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });
    document.body.appendChild(script);
  });
}

type ParticlesBgProps = {
  className?: string;
};

/**
 * particles.js network mesh — design only (transparent, no fill).
 * Grey/white nodes + links matching the existing site palette.
 */
export default function ParticlesBg({ className }: ParticlesBgProps) {
  const reactId = useId().replace(/:/g, "");
  const containerId = `particles-js-${reactId}`;

  useEffect(() => {
    if (typeof window === "undefined") return;

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
      initParticles(containerId, !motionQuery.matches);
    };

    void start();

    const reinit = () => {
      if (!window.particlesJS) return;
      initParticles(containerId, !motionQuery.matches);
    };
    motionQuery.addEventListener("change", reinit);
    mobileQuery.addEventListener("change", reinit);

    return () => {
      cancelled = true;
      motionQuery.removeEventListener("change", reinit);
      mobileQuery.removeEventListener("change", reinit);
      destroyParticles();
    };
  }, [containerId]);

  return (
    <div
      id={containerId}
      aria-hidden
      className={
        className ??
        "pointer-events-none fixed inset-0 z-0 h-[100dvh] w-screen bg-transparent"
      }
    />
  );
}
