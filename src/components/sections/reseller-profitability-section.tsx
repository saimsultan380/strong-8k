"use client";

import { UserPlus, Coins, UserCheck, Tag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const STEPS = [
  {
    Icon: UserPlus,
    title: "Ask for account terms",
    body: "Confirm the minimum package, permitted markets, pricing and support responsibilities.",
  },
  {
    Icon: Coins,
    title: "Top up the panel",
    body: "One credit equals one month for one customer. A twelve-month line uses twelve credits, and unused credits do not expire.",
  },
  {
    Icon: UserCheck,
    title: "Create a customer line",
    body: "Choose the duration, record its renewal date and share private login details securely.",
  },
  {
    Icon: Tag,
    title: "Set your own retail price",
    body: "Calculate payment fees, support time and refund exposure as well as wholesale cost. A margin is never guaranteed.",
  },
];

export function ResellerProfitabilitySection() {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            How It Works
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            How a Strong 8K reseller account{" "}
            <span style={{ color: "var(--hero-accent)" }}>works</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {STEPS.map((step, i) => {
            const Icon = step.Icon;
            return (
              <ScrollReveal key={step.title} direction="up" delay={0.06 * i} once className="h-full">
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 sm:p-7"
                  style={{
                    borderColor: "var(--feature-card-border)",
                    backgroundColor: "transparent",
                  }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "var(--hero-accent)" }}
                    strokeWidth={1.75}
                  />
                  <h3
                    className="mt-5 text-lg font-bold leading-snug"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-[1.75] sm:text-[15px]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
