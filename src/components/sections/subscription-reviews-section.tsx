"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    id: "james",
    quote:
      "Switched from another provider after months of buffering. With Strong 8K the football streams have been flawless — even on Saturday afternoons. Setup on my Firestick took five minutes.",
    name: "James T.",
    location: "Manchester",
  },
  {
    id: "sarah",
    quote:
      "The 24-hour trial convinced me. Picture quality on my Samsung TV is honestly better than my old cable box, and the VOD library is massive.",
    name: "Sarah W.",
    location: "London",
  },
  {
    id: "daniel",
    quote:
      "Support replied at half eleven at night when I messed up my player settings. Sorted in ten minutes. Can't fault the service.",
    name: "Daniel R.",
    location: "Glasgow",
  },
  {
    id: "aisha",
    quote:
      "Best value for money I've found. One year in, no regrets — renewal was instant too.",
    name: "Aisha K.",
    location: "Birmingham",
  },
];

function StarRow({ size = "md" }: { size?: "sm" | "md" }) {
  const cls = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cls}
          style={{ color: "var(--hero-accent)", fill: "var(--hero-accent)" }}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  quote,
  name,
  location,
  delay = 0,
}: {
  quote: string;
  name: string;
  location: string;
  delay?: number;
}) {
  const initial = name.charAt(0);

  return (
    <ScrollReveal direction="up" delay={delay} once className="h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className="relative flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 hover:border-[var(--hero-accent)] md:p-7"
        style={{
          backgroundColor: "transparent",
          borderColor: "var(--feature-card-border)",
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <StarRow size="sm" />
          <span
            className="text-[64px] font-serif leading-none"
            style={{ color: "var(--hero-accent)", opacity: 0.35 }}
            aria-hidden
          >
            &ldquo;
          </span>
        </div>

        <p
          className="mt-2 flex-1 text-sm leading-[1.8] sm:text-[15px]"
          style={{ color: "var(--hero-heading)" }}
        >
          {quote}
        </p>

        <div
          className="mt-6 flex items-center gap-3 border-t pt-5"
          style={{ borderColor: "var(--feature-card-border)" }}
        >
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-bold"
            style={{
              borderColor: "var(--hero-accent)",
              color: "var(--hero-accent)",
              backgroundColor: "transparent",
            }}
          >
            {initial}
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: "var(--hero-heading)" }}>
              {name}
            </p>
            <p className="mt-0.5 text-xs" style={{ color: "var(--feature-body)" }}>
              {location}, UK
            </p>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export function HomepageTestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Customer Reviews
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What UK Customers Say About{" "}
            <span style={{ color: "var(--hero-accent)" }}>Strong 8K</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-7 flex justify-center">
            <div
              className="inline-flex items-center gap-3 rounded-full border px-5 py-2.5"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <span
                className="text-xl font-extrabold leading-none"
                style={{ color: "var(--hero-heading)" }}
              >
                4.9
              </span>
              <StarRow />
              <span
                className="text-xs font-medium"
                style={{ color: "var(--feature-body)" }}
              >
                Rated by UK customers
              </span>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-14 md:gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard
              key={review.id}
              quote={review.quote}
              name={review.name}
              location={review.location}
              delay={0.07 * i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SubscriptionReviewsSection() {
  return <HomepageTestimonialsSection />;
}
