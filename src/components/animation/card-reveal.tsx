"use client";

import { useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import {
  cardRevealVariants,
  getMotionComponent,
  motionViewport,
} from "@/lib/motion";

type CardRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "article" | "li" | "div" | "details";
  style?: CSSProperties;
  id?: string;
};

/**
 * Card blur-reveal — y 20, blur(10px), duration 0.56s, stagger via delay.
 */
export function CardReveal({
  children,
  className,
  delay = 0,
  as = "div",
  style,
  id,
}: CardRevealProps) {
  const reduceMotion = useReducedMotion();
  const tagProps = {
    className: `telvis-motion-reveal${className ? ` ${className}` : ""}`,
    id,
    style,
  };

  if (reduceMotion) {
    const Tag = as;
    return <Tag {...tagProps}>{children}</Tag>;
  }

  const MotionTag = getMotionComponent(as);

  return (
    <MotionTag
      {...tagProps}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={cardRevealVariants}
    >
      {children}
    </MotionTag>
  );
}
