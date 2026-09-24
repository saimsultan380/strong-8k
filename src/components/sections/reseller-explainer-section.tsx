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
              Why the panel matters to a{" "}
              <span style={{ color: "var(--hero-accent)" }}>reseller</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-7 space-y-4 text-center text-[15px] leading-[1.8] sm:text-base">
              <p style={{ color: "var(--hero-muted)" }}>
                Working with an IPTV supplier starts with clear credit rules and practical account
                tools. The Strong 8K IPTV reseller panel lets you create subscriptions, renew
                existing lines and check account status from one dashboard. Unused credits stay in
                your balance without an expiry date.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                The service includes Anti-Freeze technology and 99.9% server uptime. Use a
                demonstration to explore the dashboard and test the viewing experience before
                choosing a package. Your business results depend on your prices, costs, customers
                and support.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
