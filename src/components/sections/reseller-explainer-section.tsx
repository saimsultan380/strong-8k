"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

export function ResellerExplainerSection() {
  return (
    <section
      id="why-resell"
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
              Why Resell Strong 8K
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Why Resell Strong 8K? Because Renewals Build{" "}
              <span style={{ color: "var(--hero-accent)" }}>Real Income</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-7 space-y-4 text-center text-[15px] leading-[1.8] sm:text-base">
              <p style={{ color: "var(--hero-muted)" }}>
                Anyone can make a first sale. The resellers who build real monthly income are the
                ones whose customers come back — month after month, year after year. And customers
                only renew when the service behind your panel actually works.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                That&apos;s why choosing the right IPTV supplier in the UK is the single most
                important decision you&apos;ll make as a reseller. A cheap panel with overloaded
                servers looks profitable on paper — until the first big Saturday night, when streams
                freeze, refund requests pile up, and your reputation takes the hit.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                Strong 8K is built the other way around. Stable servers, Anti-Freeze technology, and
                99.9% uptime mean fewer complaints reaching you and more customers renewing without
                a second thought. Low churn is what turns a side hustle into predictable, recurring
                revenue.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
