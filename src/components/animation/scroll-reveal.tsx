"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Play only the first time in view (default true — smoother scrolling) */
  once?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.4,
  once = true,
  direction = "up",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = 20;
  const initial: Record<string, number> = { opacity: 0 };

  if (direction === "up") initial.y = offset;
  else if (direction === "down") initial.y = -offset;
  else if (direction === "left") initial.x = offset;
  else if (direction === "right") initial.x = -offset;

  const variants: Variants = {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px", amount: 0.15 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
