"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const STEPS = [
  {
    number: 1,
    heading: "Choose Your Plan",
    body: "Pick the subscription length that suits you — from 1 month with no long-term commitment to 12 months at the lowest monthly cost. Order takes less than two minutes.",
  },
  {
    number: 2,
    heading: "Receive Your Login Details",
    body: "Your Strong 8K credentials (M3U link or Xtream Codes) arrive by WhatsApp or email — usually instantly, and always within the hour, even at peak times.",
  },
  {
    number: 3,
    heading: "Install & Start Watching",
    body: (
      <>
        Enter your details into any compatible IPTV player, and that&apos;s it — 40,000+ channels
        and the full VOD library, live on your screen. Average setup time: under 5 minutes. Full
        walkthroughs for every device are in our{" "}
        <Link
          href="/installation-guide/"
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Installation Guide
        </Link>
        .
      </>
    ),
  },
];

export function GetStartedSection() {
  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden py-16 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
          <div>
            <FadeIn delay={0.05}>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Get Started
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
                style={{ color: "var(--hero-heading)" }}
              >
                Get Started with Strong 8K in{" "}
                <span style={{ color: "var(--hero-accent)" }}>3 Simple Steps</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p
              className="text-sm leading-[1.75] md:text-right md:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              Choose a plan, receive your secure login details, and load the full service on your
              preferred player.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} direction="up" delay={0.08 * i} once className="h-full">
              <div
                className="flex h-full flex-col rounded-2xl border p-6 md:p-8"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "transparent",
                }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--hero-accent)" }}
                >
                  Step {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold" style={{ color: "var(--hero-heading)" }}>
                  {step.heading}
                </h3>
                <div className="mt-4 text-sm leading-[1.75]" style={{ color: "var(--feature-body)" }}>
                  {step.body}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
