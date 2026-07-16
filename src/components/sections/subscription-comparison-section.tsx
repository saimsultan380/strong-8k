"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const ROWS = [
  {
    plan: "1 Month",
    price: "£9.99",
    perMonth: "£9.99",
    save: "—",
    highlight: false,
  },
  {
    plan: "3 Months",
    price: "£17.99",
    perMonth: "£5.99",
    save: "40%",
    highlight: false,
  },
  {
    plan: "6 Months",
    price: "£25.99",
    perMonth: "£4.33",
    save: "57%",
    highlight: false,
  },
  {
    plan: "12 Months",
    price: "£42.99",
    perMonth: "£3.58",
    save: "64%",
    highlight: true,
  },
];

export function SubscriptionComparisonSection() {
  return (
    <section
      id="compare-plans"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 0% 50%, var(--hero-blush-left) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 100% 50%, var(--hero-blush-right) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Plan Comparison
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Compare Strong 8K Subscription Plans –{" "}
            <span style={{ color: "var(--hero-accent)" }}>Which Saves You More?</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            The longer your plan, the less you pay per month. Here&apos;s exactly how the numbers
            break down:
          </p>
        </FadeIn>

        <ScrollReveal direction="up" delay={0.1} once>
          <div
            className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border"
            style={{
              backgroundColor: "var(--feature-card-bg)",
              borderColor: "var(--feature-card-border)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm sm:text-[15px]">
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid var(--feature-card-border)",
                      backgroundColor:
                        "color-mix(in srgb, var(--hero-accent) 6%, var(--feature-card-bg))",
                    }}
                  >
                    {["Plan", "Price", "Cost Per Month", "You Save vs Monthly"].map((header) => (
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
                      key={row.plan}
                      style={{
                        borderBottom: "1px solid var(--feature-card-border)",
                        backgroundColor: row.highlight
                          ? "color-mix(in srgb, var(--hero-accent) 8%, transparent)"
                          : "transparent",
                      }}
                    >
                      <td
                        className="px-5 py-4 font-semibold md:px-6"
                        style={{ color: "var(--hero-heading)" }}
                      >
                        {row.plan}
                      </td>
                      <td className="px-5 py-4 md:px-6" style={{ color: "var(--hero-muted)" }}>
                        {row.price}
                      </td>
                      <td className="px-5 py-4 md:px-6" style={{ color: "var(--hero-muted)" }}>
                        {row.perMonth}
                      </td>
                      <td
                        className="px-5 py-4 font-semibold md:px-6"
                        style={{
                          color: row.save === "—" ? "var(--hero-muted)" : "var(--hero-accent)",
                        }}
                      >
                        {row.save}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <FadeIn delay={0.25}>
          <p
            className="mx-auto mt-10 max-w-3xl text-center text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            At £3.58 per month, the 12-month Strong 8K subscription costs less than a single
            takeaway coffee — for 40,000+ channels and a VOD library bigger than any streaming app
            in the UK.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
