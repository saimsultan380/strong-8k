"use client";

import { CalendarX, RefreshCw, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { routes } from "@/lib/routes";

const POINTS = [
  {
    title: "One payment for a fixed term",
    description:
      "There is no auto-billing or direct debit. When your plan ends, you decide whether to renew; there is nothing to cancel.",
    Icon: CalendarX,
  },
  {
    title: "Same renewal prices",
    description:
      "Existing customers renew at the same discounted rates shown on this page. The price does not increase after the first term.",
    Icon: RefreshCw,
  },
  {
    title: "Seven-day money-back guarantee",
    description:
      "If the service doesn’t work on your device and our support team can’t fix it, you get your money back within the first 7 days.",
    Icon: ShieldCheck,
  },
];

export function SubscriptionWhyChoose() {
  return (
    <section
      id="payments-guarantee"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 50% 50%, color-mix(in srgb, var(--hero-accent) 4%, transparent) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Trust & Guarantee
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--hero-heading)" }}
            >
              Payments, renewals and{" "}
              <span style={{ color: "var(--hero-accent)" }}>seven-day guarantee</span>
            </h2>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {POINTS.map((pt, i) => (
            <ScrollReveal key={pt.title} direction="up" delay={0.05 * i} once>
              <div
                className="h-full rounded-2xl border p-6 sm:p-8"
                style={{
                  backgroundColor: "var(--feature-card-bg)",
                  borderColor: "var(--feature-card-border)",
                  boxShadow: "var(--feature-card-shadow)",
                }}
              >
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: "var(--feature-icon-border)",
                    backgroundColor:
                      "color-mix(in srgb, var(--hero-accent) 6%, var(--feature-card-bg))",
                  }}
                >
                  <pt.Icon className="h-5 w-5" style={{ color: "var(--hero-accent)" }} />
                </div>

                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  {pt.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-[1.6]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  {pt.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <p
            className="mx-auto mt-12 max-w-3xl text-center text-sm leading-[1.75] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            If your setup needs two simultaneous screens, ask Strong 8K for the extra charge in
            advance. Do not assume a one-screen IPTV subscription includes a second connection
            merely because you can install an app on two devices. Our 24/7 support team can
            clarify the account limit. Message us any time via the{" "}
            <Link
              href={routes.contactUs}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Contact Us
            </Link>{" "}
            page.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
