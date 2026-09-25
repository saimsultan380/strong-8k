"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { routes } from "@/lib/routes";

export function SubscriptionBeforeOrder() {
  return (
    <section
      id="before-you-order"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn delay={0.05}>
            <h2
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--hero-heading)" }}
            >
              Before You <span style={{ color: "var(--hero-accent)" }}>Order</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-6 space-y-5 text-sm leading-[1.8] sm:text-[15px]">
              <p style={{ color: "var(--hero-muted)" }}>
                The displayed total covers your selected subscription duration and account
                quantity. We confirm your order and send the account details after payment
                confirmation. You pay once for that duration. Renewal is optional, and the price
                shown at the time you renew is the price that applies to the next term.
              </p>
              <p style={{ color: "var(--hero-muted)" }}>
                Choose a compatible player before ordering. Some third-party apps have a separate
                licence charge. Review the{" "}
                <Link
                  href={routes.installationGuide}
                  className="font-semibold underline"
                  style={{ color: "var(--hero-heading)" }}
                >
                  installation guide
                </Link>{" "}
                and the{" "}
                <a
                  href="#refund-policy"
                  className="font-semibold underline"
                  style={{ color: "var(--hero-heading)" }}
                >
                  refund conditions
                </a>
                , and contact us if you need help selecting an option.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
