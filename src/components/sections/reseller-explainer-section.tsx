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
              Panel Overview
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              How the Reseller Panel{" "}
              <span style={{ color: "var(--hero-accent)" }}>Works</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-7 space-y-4 text-center text-[15px] leading-[1.8] sm:text-base">
              <p style={{ color: "var(--hero-muted)" }}>
                After your reseller account is approved, you buy credits and use them to activate
                customer subscriptions. From the dashboard you can create accounts, check status
                and renew lines when a customer continues.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                Unused credits remain on your balance. Request a demonstration before you choose
                a package so you can see how activation and renewals work.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
