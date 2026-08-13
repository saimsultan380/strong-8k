"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { heroRevealDuration, motionEase } from "@/lib/motion";

type HeroTitleRevealProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2";
  lines: ReactNode[];
};

/**
 * Hero title per-line reveal on mount:
 * y 112%, skewY 7, blur(10px) → settled; duration 0.72s; delay 0.12 + i*0.1
 */
export function HeroTitleReveal({
  id,
  className,
  style,
  as: Tag = "h1",
  lines,
}: HeroTitleRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Tag id={id} className={className} style={style}>
      {lines.map((line, index) => (
        <span key={index} className="telvis-h1-reveal-line">
          <motion.span
            className="telvis-h1-reveal-text telvis-motion-reveal"
            initial={
              reduceMotion
                ? false
                : {
                    y: "112%",
                    skewY: 7,
                    opacity: 0,
                    filter: "blur(10px)",
                  }
            }
            animate={{
              y: "0%",
              skewY: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: heroRevealDuration,
              delay: 0.12 + index * 0.1,
              ease: motionEase,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

type MaskRevealCompatProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: "h1" | "h2" | "div";
  align?: "left" | "center";
};

/**
 * Back-compat wrapper: treats children as a single hero title line (mount reveal).
 * Prefer HeroTitleReveal with explicit `lines` for multi-line titles.
 */
export function MaskReveal({
  children,
  className,
  style,
  as = "h1",
  align = "center",
}: MaskRevealCompatProps) {
  return (
    <HeroTitleReveal
      as={as === "div" ? "h1" : as}
      className={cn(
        align === "left" ? "text-left" : "text-center",
        className,
      )}
      style={style}
      lines={[children]}
    />
  );
}
