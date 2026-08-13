"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/447401921250";

const PACK_FEATURES = [
  "1 credit = 1 month per customer",
  "Credits never expire",
  "40,000+ channels & 120,000+ VOD for your customers",
  "SD to 8K UHD quality",
  "Instant line activation from your dashboard",
  "Unlimited customer accounts",
  "White label branding available",
  "24/7 reseller support",
];

const PACKS = [
  {
    name: "Starter Pack",
    credits: "30 Credits",
    description:
      "Perfect for testing the waters — enough for 30 monthly customers or a mix of longer plans.",
    highlight: false,
  },
  {
    name: "Growth Pack",
    credits: "50 Credits",
    description:
      "For resellers ready to build a customer base — better value per credit as you scale.",
    highlight: true,
  },
  {
    name: "Pro Pack",
    credits: "100+ Credits",
    description:
      "Our best wholesale rate, for established resellers and high-volume sellers.",
    highlight: false,
  },
];

const CREDIT_COSTS = [
  { sub: "1 Month", credits: "1 credit", cost: "Contact Support for Price" },
  { sub: "3 Months", credits: "3 credits", cost: "Contact Support for Price" },
  { sub: "6 Months", credits: "6 credits", cost: "Contact Support for Price" },
  { sub: "12 Months", credits: "12 credits", cost: "Contact Support for Price" },
];

function PriceGlowDivider() {
  return (
    <div className="relative my-6 h-[2px] w-full" aria-hidden>
      <div
        className="absolute inset-x-[10%] top-1/2 h-3 -translate-y-1/2 blur-md"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245, 230, 163, 0.55) 0%, rgba(212, 168, 75, 0.25) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(184, 134, 11, 0.15) 12%, #b8860b 28%, #e8c547 42%, #fff8e0 50%, #e8c547 58%, #b8860b 72%, rgba(184, 134, 11, 0.15) 88%, transparent 100%)",
          boxShadow:
            "0 0 10px rgba(232, 197, 71, 0.45), 0 0 22px rgba(212, 168, 75, 0.25)",
        }}
      />
    </div>
  );
}

export function ResellerPlansSection() {
  return (
    <section
      id="reseller-plans"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Credit Packages
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Strong 8K Reseller Credit Packages –{" "}
              <span style={{ color: "var(--hero-accent)" }}>Transparent Pricing</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="mt-5 text-[15px] leading-[1.75]"
              style={{ color: "var(--hero-muted)" }}
            >
              No hidden fees, no monthly minimums, no credits that quietly vanish. Pick a package
              and start selling today:
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PACKS.map((pack, i) => (
            <ScrollReveal key={pack.name} direction="up" delay={0.06 * i} once className="h-full">
              <div
                className="relative flex h-full flex-col rounded-xl border px-6 py-7"
                style={{
                  borderColor: pack.highlight
                    ? "var(--hero-accent)"
                    : "var(--feature-card-border)",
                  backgroundColor: "transparent",
                }}
              >
                {pack.highlight ? (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: "var(--hero-cta-primary-bg)",
                      color: "var(--hero-cta-primary-fg)",
                    }}
                  >
                    Popular
                  </span>
                ) : null}

                <div className="flex items-start justify-between gap-3">
                  <p className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                    {pack.name}
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "var(--hero-muted)" }}>
                    {pack.credits}
                  </p>
                </div>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                  Pricing
                </p>
                <p
                  className="mt-1 text-xl font-bold tracking-tight sm:text-2xl"
                  style={{ color: "var(--hero-accent)" }}
                >
                  Contact Support for Price
                </p>

                <PriceGlowDivider />

                <p className="text-sm leading-[1.7]" style={{ color: "var(--feature-body)" }}>
                  {pack.description}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {PACK_FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm leading-snug"
                      style={{ color: "var(--feature-body)" }}
                    >
                      <span style={{ color: "var(--hero-accent)" }}>–</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-7 flex min-h-12 items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "var(--hero-cta-primary-bg)",
                    boxShadow: "var(--hero-cta-primary-shadow)",
                    color: "var(--hero-cta-primary-fg)",
                  }}
                >
                  Get This Package →
                </motion.a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-14 max-w-3xl">
            <p
              className="mb-5 text-center text-base font-bold"
              style={{ color: "var(--hero-heading)" }}
            >
              What each subscription costs you in credits:
            </p>
            <div
              className="overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--feature-card-border)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left text-sm sm:text-[15px]">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                      {["Subscription", "Credits", "Your Cost (Pro rate)"].map((h) => (
                        <th
                          key={h}
                          className="px-5 py-4 font-bold md:px-6"
                          style={{ color: "var(--hero-heading)" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CREDIT_COSTS.map((row) => (
                      <tr
                        key={row.sub}
                        style={{ borderBottom: "1px solid var(--feature-card-border)" }}
                      >
                        <td className="px-5 py-3.5 font-semibold md:px-6" style={{ color: "var(--hero-heading)" }}>
                          {row.sub}
                        </td>
                        <td className="px-5 py-3.5 md:px-6" style={{ color: "var(--hero-muted)" }}>
                          {row.credits}
                        </td>
                        <td className="px-5 py-3.5 md:px-6" style={{ color: "var(--hero-accent)" }}>
                          {row.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p
              className="mt-5 text-center text-sm leading-[1.75] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              Sell a 12-month subscription at the market rate of £40–£45 and your margin speaks for
              itself.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
