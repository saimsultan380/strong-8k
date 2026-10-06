"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { cn } from "@/lib/utils";
import { ACCOUNT_OPTIONS, PLANS, PricingCard } from "@/components/sections/plan-pricing-card";

export function MultiConnectionPlansSection() {
  const [accounts, setAccounts] = useState<(typeof ACCOUNT_OPTIONS)[number]>(1);

  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end md:gap-12">
          <FadeIn delay={0.05}>
            <h2
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Choose Your Accounts and{" "}
              <span
                style={{
                  backgroundImage: "var(--grad-text)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Subscription Duration
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              className="text-sm leading-[1.75] sm:text-[15px] md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              We recommend one account for each device streaming at the same time. Choose two
              accounts for two simultaneous streams, three for three, or four for four. If you
              watch on different supported devices at different times, one account lets you switch
              between them while keeping to one active stream.
            </p>
          </FadeIn>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2 sm:gap-3"
          role="tablist"
          aria-label="Account quantities"
        >
          {ACCOUNT_OPTIONS.map((count) => {
            const active = accounts === count;
            return (
              <button
                key={count}
                type="button"
                role="tab"
                id={`pricing-tab-${count}`}
                aria-selected={active}
                aria-controls={`pricing-panel-${count}`}
                onClick={() => setAccounts(count)}
                className={cn(
                  "rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                )}
                style={{
                  borderColor: active ? "transparent" : "var(--feature-card-border)",
                  color: active ? "var(--hero-cta-primary-fg)" : "var(--hero-muted)",
                  background: active ? "var(--hero-cta-primary-bg)" : "transparent",
                  boxShadow: active ? "var(--hero-cta-primary-shadow)" : "none",
                }}
              >
                {count} {count === 1 ? "Account" : "Accounts"}
              </button>
            );
          })}
        </div>

        {ACCOUNT_OPTIONS.map((count) => {
          const active = accounts === count;
          return (
            <div
              key={count}
              id={`pricing-panel-${count}`}
              role="tabpanel"
              aria-labelledby={`pricing-tab-${count}`}
              hidden={!active}
              className={cn(!active && "hidden")}
            >
              <h3
                className="mb-6 text-xl font-bold sm:text-2xl"
                style={{ color: "var(--hero-heading)" }}
              >
                {count} {count === 1 ? "Account" : "Accounts"}
              </h3>
              <div className="grid w-full items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {PLANS.map((plan, i) => (
                  <PricingCard
                    key={`${count}-${plan.months}`}
                    plan={plan}
                    accounts={count}
                    delay={active ? 0.04 * i : 0}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
