"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { routes } from "@/lib/routes";
import { whatsappMessages, whatsappUrlWithText } from "@/lib/site";
import { PLANS, PricingCard } from "@/components/sections/plan-pricing-card";

const freeTrialWhatsapp = whatsappUrlWithText(whatsappMessages.startFreeTrial);

export function PricingSection() {
  return (
    <section
      id="home-pricing"
      className="relative isolate scroll-mt-36 overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-10 max-w-3xl md:mb-12">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Plans & Pricing
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Strong 8K IPTV{" "}
              <span style={{ color: "var(--hero-accent)" }}>Plans & Prices</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p
              className="mt-5 text-sm leading-[1.75] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              Choose 1, 3, 6 or 12 months. Every plan includes the same catalogue and one
              screen at a time.
            </p>
          </FadeIn>
        </div>

        <p
          className="mb-6 text-base font-bold sm:text-lg"
          style={{ color: "var(--hero-heading)" }}
        >
          1 Account · 1 screen at a time
        </p>

        <div className="grid w-full items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.months} plan={plan} accounts={1} delay={0.04 * i} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-5 text-center text-sm leading-[1.75] sm:text-[15px]">
          <p style={{ color: "var(--hero-muted)" }}>
            Need 2–4 screens at the same time?{" "}
            <Link
              href={`${routes.subscriptionPlans}#pricing`}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              View Multi-Screen Plans
            </Link>
          </p>
          <p style={{ color: "var(--hero-muted)" }}>
            Want to test it first?{" "}
            <a
              href={freeTrialWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Start Free Trial
            </a>
          </p>
          <p style={{ color: "var(--hero-muted)" }}>
            24 hours free · No card required · No automatic charge.
          </p>
          <p style={{ color: "var(--hero-muted)" }}>
            One payment for your chosen duration. Renewal is optional.
          </p>
          <p style={{ color: "var(--hero-muted)" }}>
            <Link
              href={`${routes.subscriptionPlans}#refund-policy`}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              7-day money-back guarantee — see conditions
            </Link>
          </p>
          <p style={{ color: "var(--hero-muted)" }}>
            <Link
              href={routes.installationGuide}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Some player apps require a separate licence payment.
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
