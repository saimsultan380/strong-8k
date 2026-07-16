"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Kept for API compatibility — animations always replay on scroll */
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
  hidden: { opacity: 0, y: 16 },
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
  duration = 0.4,
  staggerChildren,
}: FadeInProps) {
  if (staggerChildren) {
    return (
      <motion.div
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-40px" }}
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
      viewport={{ once: false, margin: "-40px" }}
      variants={itemVariants(duration, delay)}
    >
      {children}
    </motion.div>
  );
}
