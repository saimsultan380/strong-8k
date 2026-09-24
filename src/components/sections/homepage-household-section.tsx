"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { routes } from "@/lib/routes";

export function HomepageHouseholdSection() {
  return (
    <section
      id="household-details"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Before You Order
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Check the details that matter to your{" "}
              <span style={{ color: "var(--hero-accent)" }}>household</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-6 space-y-5 text-sm leading-[1.8] sm:text-[15px] md:text-base">
              <p style={{ color: "var(--hero-muted)" }}>
                Before choosing Strong 8K, browse the live channel catalogue and test
                the programmes you want on your own device. Each plan is a single
                payment for a fixed period, with no automatic billing. If the service
                doesn&apos;t work on your device and our support team can&apos;t fix
                it, you get your money back within the first 7 days.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                If you intend to sell subscriptions to others, use the{" "}
                <Link
                  href={routes.resellerPanel}
                  className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
                  style={{ color: "var(--hero-heading)" }}
                >
                  wholesale information page
                </Link>{" "}
                for credit rules, package details and business enquiries.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
