"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";
import { whatsappUrlWithText } from "@/lib/site";
import { cn } from "@/lib/utils";

const ACCOUNT_OPTIONS = [1, 2, 3, 4] as const;

const PRICES: Record<number, Record<number, string>> = {
  1: { 1: "£9.99", 3: "£17.99", 6: "£25.99", 12: "£42.99" },
  2: { 1: "£17.91", 3: "£34.25", 6: "£50.59", 12: "£83.27" },
  3: { 1: "£25.51", 3: "£49.59", 6: "£73.67", 12: "£120.11" },
  4: { 1: "£33.11", 3: "£64.93", 6: "£96.75", 12: "£149.99" },
};

const SHARED_FEATURES = [
  "40,000+ live channels (UK & international)",
  "Full international sports packages",
  "120,000+ VOD movies & series, updated daily",
  "30,000+ complete series box sets, within the VOD library",
  "SD / HD / FHD / 4K / 8K UHD quality where the stream supports it",
  "Free TV & VOD updates throughout your subscription",
  "M3U, MAG, Xtream Codes & Enigma supported",
  "Radio and music channels included",
  "Works on Smart TV, Firestick, phone, tablet & PC",
  "Catch-up TV & full EPG guide where supported",
  "Activation after payment confirmation",
  "Technical support throughout the active subscription",
];

const PLANS = [
  { months: 1, label: "1 month", bestValue: false },
  { months: 3, label: "3 months", bestValue: false },
  { months: 6, label: "6 months", bestValue: false },
  { months: 12, label: "12 months", bestValue: true },
];

function PriceGlowDivider() {
  return (
    <div className="relative my-6 h-[2px] w-full" aria-hidden>
      <div
        className="absolute inset-x-[10%] top-1/2 h-3 -translate-y-1/2 blur-md"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245, 230, 163, 0.55) 0%, rgba(212, 168, 75, 0.25) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(184, 134, 11, 0.15) 12%, #b8860b 28%, #e8c547 42%, #fff8e0 50%, #e8c547 58%, #b8860b 72%, rgba(184, 134, 11, 0.15) 88%, transparent 100%)",
          boxShadow:
            "0 0 10px rgba(232, 197, 71, 0.45), 0 0 22px rgba(212, 168, 75, 0.25)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[3px] w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, #ffffff 0%, #fff4c4 35%, transparent 70%)",
          boxShadow: "0 0 12px 2px rgba(255, 248, 224, 0.7)",
        }}
      />
    </div>
  );
}

type Plan = (typeof PLANS)[number];

function PricingCard({
  plan,
  accounts,
  delay = 0,
}: {
  plan: Plan;
  accounts: number;
  delay?: number;
}) {
  const price = PRICES[accounts][plan.months];
  const allowance =
    accounts === 1
      ? "1 account · 1 active stream at a time"
      : `${accounts} accounts · ${accounts} simultaneous streams`;
  const features = [allowance, ...SHARED_FEATURES];
  const href = whatsappUrlWithText(
    `Get this plan: ${plan.label}, ${accounts} account${accounts > 1 ? "s" : ""}, ${price}`,
  );
  return (
    <ScrollReveal direction="up" delay={delay} once className="h-full">
      <div
        className="relative flex h-full flex-col rounded-xl border px-6 py-7 transition-all duration-300 md:px-7 md:py-8"
        style={{
          backgroundColor: "transparent",
          borderColor: plan.bestValue
            ? "rgba(212, 168, 75, 0.55)"
            : "var(--feature-card-border)",
        }}
      >
        {plan.bestValue && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span
              className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
              style={{
                background: "var(--grad-brand)",
                boxShadow: "0 4px 12px rgba(184, 134, 11, 0.35)",
              }}
            >
              Best Value
            </span>
          </div>
        )}

        <p
          className="text-sm font-bold uppercase tracking-[0.14em]"
          style={{ color: "var(--hero-accent)" }}
        >
          {plan.label}
        </p>

        <p
          className="mt-4 text-[13px]"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          Full amount payable
        </p>
        <div className="mt-1 flex flex-wrap items-baseline gap-2.5">
          <span
            className="text-4xl font-bold tracking-tight md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            {price}
          </span>
        </div>

        <PriceGlowDivider />

        <ul className="mb-8 flex flex-1 flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[13px] leading-[1.55] sm:text-[14px]">
              <span
                className="mt-[9px] h-px w-3 shrink-0"
                style={{
                  background: "var(--grad-brand)",
                  boxShadow: "0 0 6px rgba(232, 197, 71, 0.5)",
                }}
                aria-hidden
              />
              <span style={{ color: "rgba(255, 255, 255, 0.82)" }}>{feature}</span>
            </li>
          ))}
        </ul>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-center text-[13px] font-extrabold uppercase tracking-[0.08em] transition-all duration-200 hover:brightness-110"
            style={{
              background: "var(--grad-brand)",
              color: "var(--hero-cta-primary-fg)",
              boxShadow: "var(--hero-cta-primary-shadow)",
            }}
          >
            Get This Plan
          </a>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export function MultiConnectionPlansSection() {
  const [accounts, setAccounts] = useState<(typeof ACCOUNT_OPTIONS)[number]>(1);

  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end md:gap-12">
          <FadeIn delay={0.05}>
            <h2
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Choose Your Accounts and{" "}
              <span
                style={{
                  backgroundImage: "var(--grad-text)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Subscription Duration
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              className="text-sm leading-[1.75] sm:text-[15px] md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              We recommend one account for each device streaming at the same time. Choose two
              accounts for two simultaneous streams, three for three, or four for four. If you
              watch on different supported devices at different times, one account lets you switch
              between them while keeping to one active stream.
            </p>
          </FadeIn>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2 sm:gap-3"
          role="tablist"
          aria-label="Account quantities"
        >
          {ACCOUNT_OPTIONS.map((count) => {
            const active = accounts === count;
            return (
              <button
                key={count}
                type="button"
                role="tab"
                id={`pricing-tab-${count}`}
                aria-selected={active}
                aria-controls={`pricing-panel-${count}`}
                onClick={() => setAccounts(count)}
                className={cn(
                  "rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                )}
                style={{
                  borderColor: active ? "transparent" : "var(--feature-card-border)",
                  color: active ? "var(--hero-cta-primary-fg)" : "var(--hero-muted)",
                  background: active ? "var(--hero-cta-primary-bg)" : "transparent",
                  boxShadow: active ? "var(--hero-cta-primary-shadow)" : "none",
                }}
              >
                {count} {count === 1 ? "Account" : "Accounts"}
              </button>
            );
          })}
        </div>

        {ACCOUNT_OPTIONS.map((count) => {
          const active = accounts === count;
          return (
            <div
              key={count}
              id={`pricing-panel-${count}`}
              role="tabpanel"
              aria-labelledby={`pricing-tab-${count}`}
              hidden={!active}
              className={cn(!active && "hidden")}
            >
              <h3
                className="mb-6 text-xl font-bold sm:text-2xl"
                style={{ color: "var(--hero-heading)" }}
              >
                {count} {count === 1 ? "Account" : "Accounts"}
              </h3>
              <div className="grid w-full items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {PLANS.map((plan, i) => (
                  <PricingCard
                    key={`${count}-${plan.months}`}
                    plan={plan}
                    accounts={count}
                    delay={active ? 0.04 * i : 0}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
