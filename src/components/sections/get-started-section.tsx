"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { routes } from "@/lib/routes";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const STEPS = [
  {
    number: 1,
    heading: "Select a term",
    body: "Compare the four Strong 8K durations above or start with the free test. Choose one screen or ask for a multi-screen quote.",
  },
  {
    number: 2,
    heading: "Receive your details",
    body: "After Strong 8K activation, your welcome message supplies the information your compatible player requires. Save it in a private place.",
  },
  {
    number: 3,
    heading: "Load and check your account",
    body: (
      <>
        Follow the{" "}
        <Link
          href={routes.installationGuide}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          device setup page
        </Link>{" "}
        for your device and test playback before settling into your usual viewing routine.
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
                <span style={{ color: "var(--hero-accent)" }}>Three Steps</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p
              className="text-sm leading-[1.75] md:text-right md:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              The steps vary slightly between apps. If a menu has changed, send the team your exact
              device model and a screenshot with credentials hidden. Strong 8K IPTV support can use
              the model to identify the right menu.
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
