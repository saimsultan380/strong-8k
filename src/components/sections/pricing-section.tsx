"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { motion } from "framer-motion";
import { routes } from "@/lib/routes";

const ROWS = [
  { duration: "1 month", total: "£9.99" },
  { duration: "3 months", total: "£17.99" },
  { duration: "6 months", total: "£25.99" },
  { duration: "12 months", total: "£42.99" },
];

export function PricingSection() {
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
              Strong 8K{" "}
              <span style={{ color: "var(--hero-accent)" }}>Subscription Options</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              className="text-sm leading-[1.75] sm:text-[15px] md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              Choose a subscription duration that suits your viewing needs. The prices
              below cover one account with one active stream at a time. Visit our Pricing
              page for additional account options and the full purchase terms.
            </p>
          </FadeIn>
        </div>

        <ScrollReveal direction="up" delay={0.1} once>
          <div
            className="mx-auto max-w-3xl overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--feature-card-border)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[320px] text-left text-sm sm:text-[15px]">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    {["Subscription duration", "One-account total"].map((header) => (
                      <th
                        key={header}
                        className="px-5 py-4 font-bold md:px-6"
                        style={{ color: "var(--hero-heading)" }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr
                      key={row.duration}
                      style={{ borderBottom: "1px solid var(--feature-card-border)" }}
                    >
                      <td
                        className="px-5 py-4 font-semibold md:px-6"
                        style={{ color: "var(--hero-heading)" }}
                      >
                        {row.duration}
                      </td>
                      <td className="px-5 py-4 md:px-6" style={{ color: "var(--hero-muted)" }}>
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <FadeIn delay={0.25} className="mt-10 text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href={routes.subscriptionPlans}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-[13px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
            >
              Compare Prices and Account Options
            </Link>
          </motion.div>
        </FadeIn>
      </Container>
    </section>
  );
}
