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

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: ScrollRevealVariant;
  style?: CSSProperties;
};

/**
 * Hero mount blur-reveal (not scroll). Duration 0.72s; cta uses 0.52s.
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
  const initial =
    variant === "text"
      ? heroRevealInitial
      : createScrollRevealVariants(variant).hidden;

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
      animate={meshReady ? heroRevealAnimate : initial}
      transition={{
        duration: variant === "cta" ? 0.52 : heroRevealDuration,
        delay,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  );
}
