"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const CHOICES = [
  {
    id: "one",
    title: "One month",
    body: "Useful when you want more time to check a Strong 8K setup after the free trial. The smaller upfront payment offers flexibility, but its effective monthly cost is highest.",
  },
  {
    id: "three",
    title: "Three months",
    body: "Choose a full quarter of access after checking that your device and preferred channels work during the trial.",
  },
  {
    id: "six",
    title: "Six months",
    body: "Compare the total with three months and check the refund terms. This duration may suit a regular viewer who already knows the app works on their device.",
  },
  {
    id: "twelve",
    title: "Twelve months",
    body: "Lowest effective monthly cost at the displayed Strong 8K prices. Check the current catalogue, support and policy carefully before choosing the longest term.",
  },
];

export function SubscriptionChoiceGuidance() {
  return (
    <section
      id="choice-guidance"
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
              Which Duration?
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--hero-heading)" }}
            >
              Which IPTV subscription term should you{" "}
              <span style={{ color: "var(--hero-accent)" }}>choose</span>?
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-6 max-w-[720px] text-sm leading-[1.75] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              One month, three months, six months or twelve months — choose the duration that
              suits your household after the free trial.
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {CHOICES.map((choice, i) => (
            <ScrollReveal key={choice.id} direction="up" delay={0.05 * i} once>
              <div
                className="flex h-full flex-col rounded-2xl border p-6 sm:p-8"
                style={{
                  backgroundColor: "var(--feature-card-bg)",
                  borderColor: "var(--feature-card-border)",
                  boxShadow: "var(--feature-card-shadow)",
                }}
              >
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {choice.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-[1.7]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  {choice.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
