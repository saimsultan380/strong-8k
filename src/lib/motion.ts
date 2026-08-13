import { motion } from "framer-motion";
import type { ElementType } from "react";

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.14,
  margin: "0px 0px -3% 0px",
} as const;

export const cardMotionDuration = 0.56;
export const cardStaggerStep = 0.05;

export const textRevealDuration = 0.62;
export const ctaRevealDuration = 0.52;
export const mediaRevealDuration = 0.68;
export const heroRevealDuration = 0.72;

export type ScrollRevealVariant = "text" | "cta" | "media";

const scrollRevealPresets = {
  text: {
    y: 22,
    blur: "blur(8px)",
    duration: textRevealDuration,
  },
  cta: {
    y: 16,
    blur: "blur(6px)",
    duration: ctaRevealDuration,
  },
  media: {
    y: 28,
    blur: "blur(10px)",
    duration: mediaRevealDuration,
  },
} as const;

export function createScrollRevealVariants(
  variant: ScrollRevealVariant,
  yOverride?: number,
) {
  const preset = scrollRevealPresets[variant];
  const y = yOverride ?? preset.y;

  return {
    hidden: {
      opacity: 0,
      y,
      filter: preset.blur,
    },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: preset.duration,
        delay,
        ease: motionEase,
      },
    }),
  };
}

export const cardRevealVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: cardMotionDuration,
      delay,
      ease: motionEase,
    },
  }),
};

export const heroRevealInitial = {
  opacity: 0,
  y: 18,
  filter: "blur(8px)",
};

export const heroRevealAnimate = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
};

export function staggerDelay(index: number, step = cardStaggerStep) {
  return index * step;
}

const motionTagCache = new Map<string, ElementType>();

export function getMotionComponent(tag: string): ElementType {
  const cached = motionTagCache.get(tag);
  if (cached) return cached;

  const motionRecord = motion as unknown as Record<
    string,
    ElementType | undefined
  >;
  const component = motionRecord[tag] ?? motion.create(tag);
  motionTagCache.set(tag, component);
  return component;
}
