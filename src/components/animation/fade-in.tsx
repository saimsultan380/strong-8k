"use client";

import { useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import {
  createScrollRevealVariants,
  getMotionComponent,
  motionViewport,
  type ScrollRevealVariant,
} from "@/lib/motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Maps to scroll blur preset (default text). */
  variant?: ScrollRevealVariant;
  as?: "div" | "article" | "li" | "p" | "section";
  style?: CSSProperties;
  /** @deprecated Kept for compatibility — viewport is always once. */
  once?: boolean;
  /** @deprecated Duration comes from the variant preset. */
  duration?: number;
  /** @deprecated Stagger handled by CardReveal / staggerDelay. */
  staggerChildren?: number;
};

/**
 * Scroll blur-reveal for section text blocks (Telvis text/cta/media presets).
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  variant = "text",
  as = "div",
  style,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;
  const variants = createScrollRevealVariants(variant);

  if (reduceMotion) {
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const MotionTag = getMotionComponent(as);

  return (
    <MotionTag
      className={`telvis-motion-reveal${className ? ` ${className}` : ""}`}
      style={style}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
