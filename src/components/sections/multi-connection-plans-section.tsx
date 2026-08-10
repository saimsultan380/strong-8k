"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/447482794475";

const PLAN_FEATURES = [
  "1 Screen connection",
  "40,000+ live channels (UK & international)",
  "Full international sports packages",
  "120,000+ VOD movies & series, updated daily",
  "30,000+ complete series box sets",
  "SD / HD / FHD / 4K / 8K UHD quality",
  "99.9% server uptime with Anti-Freeze technology",
  "Free TV & VOD updates throughout your plan",
  "M3U, MAG, Xtream Codes & Enigma supported",
  "Radio and music channels included",
  "Works on Smart TV, Firestick, phone, tablet & PC",
  "Catch-up TV & full EPG guide",
  "Instant activation — watching within minutes",
  "24/7 technical support",
];

const PLANS = [
  {
    months: 1,
    label: "1 Month",
    originalPrice: "£20",
    price: "£9.99",
    popular: false,
  },
  {
    months: 3,
    label: "3 Months",
    originalPrice: "£40",
    price: "£17.99",
    popular: false,
  },
  {
    months: 6,
    label: "6 Months",
    originalPrice: "£60",
    price: "£25.99",
    popular: false,
  },
  {
    months: 12,
    label: "12 Months",
    originalPrice: "£99",
    price: "£42.99",
    popular: true,
  },
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

function PricingCard({ plan, delay = 0 }: { plan: Plan; delay?: number }) {
  return (
    <ScrollReveal direction="up" delay={delay} once className="h-full">
      <div
        className="relative flex h-full flex-col rounded-xl border px-6 py-7 transition-all duration-300 md:px-7 md:py-8"
        style={{
          backgroundColor: "transparent",
          borderColor: plan.popular
            ? "rgba(212, 168, 75, 0.55)"
            : "var(--feature-card-border)",
        }}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span
              className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
              style={{
                background: "var(--grad-brand)",
                boxShadow: "0 4px 12px rgba(184, 134, 11, 0.35)",
              }}
            >
              Most Popular
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
          Starting at
        </p>
        <div className="mt-1 flex flex-wrap items-baseline gap-2.5">
          <span
            className="text-base font-medium line-through"
            style={{ color: "rgba(255, 255, 255, 0.35)" }}
          >
            {plan.originalPrice}
          </span>
          <span
            className="text-4xl font-bold tracking-tight md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            {plan.price}
          </span>
        </div>

        <PriceGlowDivider />

        <ul className="mb-8 flex flex-1 flex-col gap-3">
          {PLAN_FEATURES.map((feature) => (
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
            href={WHATSAPP_LINK}
            className="flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.08em] transition-all duration-200 hover:brightness-110"
            style={{
              background: "var(--grad-brand)",
              color: "var(--hero-cta-primary-fg)",
              boxShadow: "var(--hero-cta-primary-shadow)",
            }}
          >
            Get This Plan →
          </a>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export function MultiConnectionPlansSection() {
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
              Choose Your{" "}
              <span
                style={{
                  backgroundImage: "var(--grad-text)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Strong 8K IPTV Plan
              </span>{" "}
              – 1, 3, 6 or 12 Months
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              className="text-sm leading-[1.75] sm:text-[15px] md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              Pick the duration that fits your budget. Every plan below is a complete, affordable
              IPTV subscription for UK viewers — same channels, same VOD library, same quality,
              same support.
            </p>
          </FadeIn>
        </div>

        <div className="grid w-full items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.months} plan={plan} delay={0.08 * i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
