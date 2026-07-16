"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const DASHBOARD_ITEMS = [
  "Create, renew, suspend or delete customer lines instantly",
  "Live credit balance — always know exactly what you have left",
  "Real-time connection monitoring — see who's online and spot issues early",
  "Flexible line durations — 1, 3, 6 or 12 months, set per customer",
  "Trial line creation — give prospects a taste before they buy",
  "Customer overview — every subscriber, expiry date and status in one place",
];

export function ResellerInfrastructureSection() {
  return (
    <section
      id="dashboard"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Dashboard
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Inside Your Strong 8K{" "}
            <span style={{ color: "var(--hero-accent)" }}>Reseller Dashboard</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            Everything you need to run your IPTV panel lives in one clean interface:
          </p>
        </FadeIn>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {DASHBOARD_ITEMS.map((item, i) => (
            <ScrollReveal key={item} direction="up" delay={0.04 * i} once>
              <li
                className="flex gap-3 rounded-xl border p-4 text-sm leading-[1.7] sm:text-[15px]"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "transparent",
                  color: "var(--feature-body)",
                }}
              >
                <span style={{ color: "var(--hero-accent)" }}>–</span>
                <span>{item}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <FadeIn delay={0.3}>
          <p
            className="mt-8 text-center text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            If you can use WhatsApp, you can run this panel. Most new resellers create their first
            customer line within 10 minutes of logging in.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
