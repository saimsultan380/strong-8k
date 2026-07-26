"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const TOPICS = [
  {
    title: "Plans & pricing",
    body: (
      <>
        Not sure which duration suits you? Compare options on our{" "}
        <Link
          href="/subscription-plans/"
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Subscription Plans
        </Link>{" "}
        page or just ask us directly.
      </>
    ),
  },
  {
    title: "Setup & installation",
    body: (
      <>
        Stuck on any device? Our{" "}
        <Link
          href="/installation-guide/"
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Installation Guide
        </Link>{" "}
        covers everything, or we&apos;ll walk you through it live on WhatsApp.
      </>
    ),
  },
  {
    title: "Reseller enquiries",
    body: (
      <>
        Want to sell IPTV under your own brand? Ask about the{" "}
        <Link
          href="/reseller-panel/"
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Reseller Panel
        </Link>
        .
      </>
    ),
  },
  {
    title: "Existing customers",
    body: "Renewals, playback issues, or account questions — message us any time.",
  },
];

export function ContactHelpTopics() {
  return (
    <section
      id="what-we-help-with"
      className="relative isolate overflow-hidden py-12 md:py-16"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Support
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[36px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What Can We{" "}
            <span style={{ color: "var(--hero-accent)" }}>Help You With?</span>
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {TOPICS.map((topic, i) => (
            <ScrollReveal key={topic.title} direction="up" delay={0.05 * i} once className="h-full">
              <div
                className="flex h-full flex-col rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "transparent",
                }}
              >
                <h3
                  className="text-base font-bold"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {topic.title}
                </h3>
                <div
                  className="mt-2 text-sm leading-[1.7]"
                  style={{ color: "var(--feature-body)" }}
                >
                  {topic.body}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
