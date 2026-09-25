"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { routes } from "@/lib/routes";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const TOPICS = [
  {
    title: "Plan selection",
    body: (
      <>
        Compare the total price and the one-screen allowance on the{" "}
        <Link
          href={routes.subscriptionPlans}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Subscription Plans
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    title: "Setup",
    body: (
      <>
        Follow the{" "}
        <Link
          href={routes.installationGuide}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          device steps
        </Link>{" "}
        and send the model if a menu differs.
      </>
    ),
  },
  {
    title: "Reseller enquiries",
    body: (
      <>
        Request the credit price sheet through the{" "}
        <Link
          href={routes.resellerPanel}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Reseller Panel
        </Link>{" "}
        route.
      </>
    ),
  },
  {
    title: "Existing customers",
    body: "Send a concise account question and the time of any playback problem.",
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
            Help with Your{" "}
            <span style={{ color: "var(--hero-accent)" }}>Account</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-5 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              For setup instructions, visit our{" "}
              <Link href={routes.installationGuide} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
                Installation Guide
              </Link>
              . For subscription duration and account options, visit{" "}
              <Link href={routes.subscriptionPlans} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
                Pricing
              </Link>
              . Business enquiries about wholesale credits should use our{" "}
              <Link href={routes.resellerPanel} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
                Reseller Panel
              </Link>{" "}
              page.
            </p>
            <p>
              If a problem continues after seven days, contact us. We continue providing support
              throughout your active subscription. Refund eligibility is explained in our{" "}
              <Link
                href={`${routes.subscriptionPlans}#refund-policy`}
                className="font-semibold underline"
                style={{ color: "var(--hero-heading)" }}
              >
                refund policy
              </Link>
              .
            </p>
          </div>
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
