"use client";

import Link from "next/link";
import { ShoppingCart, KeyRound, Play } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const STEPS = [
  {
    number: 1,
    heading: "1. Order Your Plan",
    body: "Choose your duration above and complete your order — it takes less than two minutes on WhatsApp.",
    Icon: ShoppingCart,
  },
  {
    number: 2,
    heading: "2. Receive Your Strong8K Login Details",
    body: "Your Strong8K credentials (M3U link or Xtream Codes) arrive instantly by WhatsApp or email — at most within the hour during peak periods. Check your spam folder just in case.",
    Icon: KeyRound,
  },
  {
    number: 3,
    heading: "3. Install & Watch",
    body: (
      <>
        Enter your details into any compatible IPTV player and start watching. Never set up IPTV
        before? Our step-by-step{" "}
        <Link
          href="/installation-guide"
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Installation Guide
        </Link>{" "}
        covers every device — Firestick, Smart TV, Android, iPhone, and more.
      </>
    ),
    Icon: Play,
  },
];

function StepBadge({ number }: { number: number }) {
  return (
    <div
      className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border text-sm font-extrabold"
      style={{
        borderColor: "var(--hero-accent)",
        backgroundColor: "var(--hero-base)",
        color: "var(--hero-accent)",
        boxShadow: "0 0 16px color-mix(in srgb, var(--hero-accent) 15%, transparent)",
      }}
    >
      {number}
    </div>
  );
}

export function SubscriptionHowToBuySection() {
  return (
    <section
      id="how-to-buy"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 50% 50%, color-mix(in srgb, var(--hero-accent) 4%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Activation
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--hero-heading)" }}
            >
              From Payment to Watching in{" "}
              <span style={{ color: "var(--hero-accent)" }}>Under 5 Minutes</span>
            </h2>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} direction="up" delay={0.05 * i} once>
              <div
                className="flex h-full flex-col justify-between rounded-2xl border p-6 sm:p-8"
                style={{
                  backgroundColor: "var(--feature-card-bg)",
                  borderColor: "var(--feature-card-border)",
                  boxShadow: "var(--feature-card-shadow)",
                }}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <StepBadge number={step.number} />
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg border"
                      style={{
                        borderColor: "var(--feature-icon-border)",
                        backgroundColor:
                          "color-mix(in srgb, var(--hero-accent) 6%, var(--feature-card-bg))",
                      }}
                    >
                      <step.Icon className="h-4 w-4" style={{ color: "var(--hero-accent)" }} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                    {step.heading}
                  </h3>

                  <div
                    className="mt-3 text-sm leading-[1.6]"
                    style={{ color: "var(--hero-muted)" }}
                  >
                    {step.body}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
