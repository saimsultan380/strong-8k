"use client";

import { UserPlus, Coins, UserCheck, Tag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const STEPS = [
  {
    Icon: UserPlus,
    title: "1. Create Your Reseller Account",
    body: "Message us on WhatsApp, choose your starter package, and receive your panel login the same day. No lengthy application, no volume commitments.",
  },
  {
    Icon: Coins,
    title: "2. Load Your Credits",
    body: "Credits are your currency: 1 credit = 1 month of subscription for one customer. A 12-month line costs 12 credits. Top up whenever you like — your Strong8K balance never expires.",
  },
  {
    Icon: UserCheck,
    title: "3. Create Customer Subscriptions",
    body: "Generate a new line in seconds from your dashboard. Set the duration, activate instantly, and send your customer their login details. No waiting on us — everything is in your hands.",
  },
  {
    Icon: Tag,
    title: "4. Sell at Your Own Price",
    body: "You decide what to charge. Buy wholesale, sell at retail, and pocket the difference on every single subscription and every renewal. Your prices, your packages, your profit.",
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
            How the Strong 8K Reseller Panel{" "}
            <span style={{ color: "var(--hero-accent)" }}>Works</span>
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
