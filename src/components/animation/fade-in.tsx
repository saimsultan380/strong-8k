"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Play only the first time in view (default true — smoother scrolling) */
  once?: boolean;
  /** Stagger children by this interval in seconds */
  staggerChildren?: number;
}

const containerVariants = (stagger: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

const itemVariants = (duration: number, delay: number): Variants => ({
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
});

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.35,
  once = true,
  staggerChildren,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  if (staggerChildren) {
    return (
      <motion.div
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-40px", amount: 0.2 }}
        variants={containerVariants(staggerChildren)}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={itemVariants(duration, 0)}>{child}</motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px", amount: 0.2 }}
      variants={itemVariants(duration, delay)}
    >
      {children}
    </motion.div>
  );
}
