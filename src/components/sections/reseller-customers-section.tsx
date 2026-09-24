"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { routes } from "@/lib/routes";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const BENEFITS = [
  "Access to the service described on our Subscription Plans page",
  "When setting up an IPTV subscription, confirm the customer’s device and screen allowance",
  "Compatible Firestick and Smart TV players can use an M3U link or Xtream Codes details, depending on the app",
  "Direct customers to the free 24-hour trial so they can check the service before paying",
  "A 24-hour trial gives them time to explore their Strong 8K player",
  "Browse the guide and test their home connection",
];

export function ResellerCustomersSection() {
  return (
    <section
      id="what-customers-get"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Product Quality
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What customers{" "}
            <span style={{ color: "var(--hero-accent)" }}>receive</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            Strong 8K IPTV reseller customers receive access to the service described on our
            Subscription Plans page. When setting up an IPTV subscription, confirm the
            customer’s device and screen allowance.
          </p>
        </FadeIn>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {BENEFITS.map((item, i) => (
            <ScrollReveal key={item} direction="up" delay={0.04 * i} once>
              <li
                className="flex gap-3 rounded-xl border p-4 text-sm leading-[1.7] sm:text-[15px]"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "transparent",
                  color: "var(--feature-body)",
                }}
              >
                <span style={{ color: "var(--hero-accent)" }}>–</span>
                <span>{item}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <FadeIn delay={0.3}>
          <p
            className="mt-8 max-w-3xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            Compatible Firestick and Smart TV players can use an M3U link or Xtream Codes details,
            depending on the app. Direct customers to the{" "}
            <Link
              href={routes.contactUs}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              free 24-hour trial
            </Link>{" "}
            so they can check the service before paying. See the{" "}
            <Link
              href={routes.subscriptionPlans}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Subscription Plans
            </Link>{" "}
            page for the service they receive.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
