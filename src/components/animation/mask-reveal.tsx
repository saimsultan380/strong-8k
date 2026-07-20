"use client";

import {
  Children,
  isValidElement,
  useMemo,
  type CSSProperties,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type WordToken = {
  text: string;
  style?: CSSProperties;
};

type MaskRevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  as?: "h1" | "h2" | "div";
  /** Word-wrap row alignment */
  align?: "left" | "center";
};

function pushWords(
  tokens: WordToken[],
  text: string,
  style?: CSSProperties,
) {
  const parts = text.split(/(\s+)/);
  for (const part of parts) {
    if (!part || /^\s+$/.test(part)) continue;
    tokens.push({ text: part, style });
  }
}

/** Flatten mixed text + accent spans into word tokens */
function tokenize(
  children: ReactNode,
  inheritedStyle?: CSSProperties,
): WordToken[] {
  const tokens: WordToken[] = [];

  Children.forEach(children, (child) => {
    if (child == null || typeof child === "boolean") return;

    if (typeof child === "string" || typeof child === "number") {
      pushWords(tokens, String(child), inheritedStyle);
      return;
    }

    if (isValidElement<{ children?: ReactNode; style?: CSSProperties }>(child)) {
      const nextStyle = { ...inheritedStyle, ...child.props.style };
      tokenize(child.props.children, nextStyle).forEach((t) => tokens.push(t));
    }
  });

  return tokens;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

const wordVariants = {
  hidden: { y: "100%", skewY: 8, opacity: 0 },
  visible: {
    y: "0%",
    skewY: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

/**
 * Staggered skewed text reveal — one viewport observer + staggered children.
 * Plays once for smooth scroll performance.
 */
export function MaskReveal({
  children,
  className,
  style,
  delay = 0.2,
  as: Tag = "h1",
  align = "center",
}: MaskRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = useMemo(() => tokenize(children), [children]);
  const useGradient = Boolean(className?.includes("text-gradient-brand"));
  const rowClass = cn(
    "flex flex-wrap gap-x-[0.28em] gap-y-1",
    align === "left" ? "justify-start" : "justify-center",
  );

  if (reduceMotion) {
    return (
      <Tag className={cn(rowClass, className)} style={style}>
        {words.map((word, i) => (
          <span
            key={`${word.text}-${i}`}
            className={cn(
              "inline-block",
              useGradient && "text-gradient-brand",
            )}
            style={useGradient ? undefined : word.style}
          >
            {word.text}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={cn(className)} style={style}>
      <motion.span
        className={rowClass}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4, margin: "0px 0px -40px 0px" }}
        variants={{
          ...containerVariants,
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <span
            key={`${word.text}-${i}`}
            className="inline-block overflow-hidden pb-[0.12em] align-bottom leading-[1.15]"
          >
            <motion.span
              className={cn(
                "inline-block origin-bottom",
                useGradient && "text-gradient-brand",
              )}
              style={useGradient ? undefined : word.style}
              variants={wordVariants}
            >
              {word.text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
