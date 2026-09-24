"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { routes } from "@/lib/routes";

const STEPS = [
  {
    number: "1",
    title: "Message the team",
    body: 'Include “Free Trial” and your device model so support can recommend the right player.',
  },
  {
    number: "2",
    title: "Receive the activation details",
    body: "Ask when the 24 hours begin and which login format your app needs. Keep the server URL, username and password private.",
  },
  {
    number: "3",
    title: "Test the service",
    body: "Check the guide, a mix of channels and the VOD library. If something fails, send the device and app details so the team can investigate.",
  },
];

export function ContactHowToClaim() {
  return (
    <section
      id="how-to-claim"
      className="relative isolate overflow-hidden py-12 md:py-16"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            How to Claim
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[36px]"
            style={{ color: "var(--hero-heading)" }}
          >
            How to claim your free IPTV trial in{" "}
            <span style={{ color: "var(--hero-accent)" }}>three steps</span>
          </h2>
        </FadeIn>

        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} direction="up" delay={0.06 * i} once className="h-full">
              <li
                className="flex h-full flex-col rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "transparent",
                }}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--hero-accent) 18%, transparent)",
                    color: "var(--hero-accent)",
                  }}
                >
                  {step.number}
                </span>
                <h3
                  className="mt-4 text-base font-bold leading-snug"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-[1.7]"
                  style={{ color: "var(--feature-body)" }}
                >
                  {step.body}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ol>

        <FadeIn delay={0.25}>
          <p
            className="mx-auto mt-7 max-w-3xl text-center text-sm leading-[1.75] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            Your test expires automatically without a charge or a cancellation request. If you want
            to continue after it ends, choose a{" "}
            <Link
              href={routes.subscriptionPlans}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Subscription Plan
            </Link>{" "}
            and confirm the payment and renewal terms separately.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
