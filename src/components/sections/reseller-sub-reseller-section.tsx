"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

export function ResellerSubResellerSection() {
  return (
    <section
      id="sub-resellers"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Sub-Reseller Network
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Grow Bigger: Build Your Own{" "}
              <span style={{ color: "var(--hero-accent)" }}>Sub-Reseller Network</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-7 space-y-4 text-[15px] leading-[1.8] sm:text-base">
              <p style={{ color: "var(--hero-muted)" }}>
                Once your business is established, you don&apos;t have to sell only to end customers
                — you can supply other resellers underneath you.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                Create sub-reseller accounts from your own panel, sell them credits at your chosen
                rate, and earn margin on every credit they spend. The maths adds up quickly: keep
                just £1 margin per credit, and ten sub-resellers buying 50 credits a month each puts
                an extra £500 in your pocket monthly — on top of your own direct sales.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                Your subscriptions and your sub-reseller network sit in the same dashboard, so
                there&apos;s nothing new to learn as you scale. Ask our team about sub-reseller
                unlocking when you order.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
