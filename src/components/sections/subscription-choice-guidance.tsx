"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const CHOICES = [
  {
    id: "new",
    title: "New to IPTV? Start with 1 Month",
    body: "If this is your first IPTV service, the 1-month plan is a low-commitment way to test everything on your own devices and broadband. Combine it with the free 24-hour trial first, and you'll know exactly what you're paying for before you spend anything at all.",
  },
  {
    id: "regular",
    title: "Regular Viewers: 6 Months Hits the Sweet Spot",
    body: "Watch TV most evenings? The 6-month plan cuts your cost to £4.33 a month — a 57% saving — without committing to a full year. It's the most popular choice among customers upgrading from their first month.",
  },
  {
    id: "best",
    title: "Best Value: The 12-Month Strong IPTV Plan",
    body: "For households where the TV is always on, nothing beats the annual plan. At £3.58 a month, this Strong IPTV package is the cheapest way to keep every channel, every movie, and every match running all year — and you won't touch a renewal screen for 12 months.",
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
              Which Strong 8K IPTV Subscription Is{" "}
              <span style={{ color: "var(--hero-accent)" }}>Right for You?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-6 max-w-[720px] text-sm leading-[1.75] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Not sure which duration to pick? Here&apos;s our honest recommendation based on how
              most customers use the service.
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
