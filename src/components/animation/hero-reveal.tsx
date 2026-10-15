"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import {
  createScrollRevealVariants,
  heroRevealAnimate,
  heroRevealDuration,
  heroRevealInitial,
  motionEase,
  type ScrollRevealVariant,
} from "@/lib/motion";
import { useMeshReady } from "@/lib/mesh-ready";

type HeroRevealVariant = ScrollRevealVariant | "logo" | "logoHero";

const logoPresets = {
  logo: { y: 4, blur: 14, scale: 0.92, duration: 1.05 },
  logoHero: { y: 14, blur: 28, scale: 0.88, duration: 1.25 },
} as const;

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: HeroRevealVariant;
  style?: CSSProperties;
};

function isLogoVariant(
  variant: HeroRevealVariant,
): variant is keyof typeof logoPresets {
  return variant === "logo" || variant === "logoHero";
}

/**
 * Hero mount blur-reveal (not scroll). Duration 0.72s; cta uses 0.52s.
 * Logo variants wait for the particle mesh, then fade, unblur, rise, and scale once.
 */
export function HeroReveal({
  children,
  className,
  delay = 0,
  variant = "text",
  style,
}: HeroRevealProps) {
  const reduceMotion = useReducedMotion();
  const meshReady = useMeshReady();
  const logo = isLogoVariant(variant) ? logoPresets[variant] : null;
  const initial = logo
    ? {
        opacity: 0,
        y: logo.y,
        scale: logo.scale,
        filter: `blur(${logo.blur}px)`,
      }
    : variant === "text"
      ? heroRevealInitial
      : createScrollRevealVariants(variant).hidden;
  const revealed = logo
    ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
    : heroRevealAnimate;

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`telvis-motion-reveal${className ? ` ${className}` : ""}`}
      style={style}
      initial={initial}
      animate={meshReady ? revealed : initial}
      transition={{
        duration: logo
          ? logo.duration
          : variant === "cta"
            ? 0.52
            : heroRevealDuration,
        delay,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  );
}
