"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const DASHBOARD_ITEMS = [
  "View your credit balance, account status and customer expiry dates in one place",
  "Create a trial, activate a paid line or renew an existing account as needed",
  "Trial access starts at up to ten accounts per day, with allowances linked to your account level",
  "The Strong 8K dashboard supports line monitoring and flexible durations",
  "Keep track of upcoming renewals",
  "Check active accounts and top up credits when your business needs them",
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
            Manage accounts from your{" "}
            <span style={{ color: "var(--hero-accent)" }}>dashboard</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            View your credit balance, account status and customer expiry dates in one place.
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
            The Strong 8K dashboard supports line monitoring and flexible durations. Keep track of
            upcoming renewals, check active accounts and top up credits when your business needs
            them.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
