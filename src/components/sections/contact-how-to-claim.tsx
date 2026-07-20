"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const STEPS = [
  {
    number: "1",
    title: "Message us on WhatsApp",
    body: 'Tap the button above and send "Free Trial" along with your device type (Firestick, Smart TV, phone — anything works).',
  },
  {
    number: "2",
    title: "Receive your trial login within minutes",
    body: "We'll send your username, password and server details straight back. No card required, no forms to fill.",
  },
  {
    number: "3",
    title: "Watch everything for 24 hours",
    body: "Test the channels, the VOD library, and the picture quality on your own broadband — especially during the evening, when weaker services fall apart.",
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
            How to Claim Your Free IPTV Trial –{" "}
            <span style={{ color: "var(--hero-accent)" }}>3 Simple Steps</span>
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
            That&apos;s the whole process. If you like what you see, upgrading to a paid plan takes
            one more message. If not, your trial simply expires — nothing to cancel, nothing charged.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
