"use client";

import Link from "next/link";
import { KeyRound, Wifi, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const NEEDS = [
  {
    icon: KeyRound,
    title: "Your Strong 8K login details",
    body: (
      <>
        The username, password and server URL (or M3U link / Xtream Codes) we sent you by WhatsApp
        or email after your order. Haven&apos;t subscribed yet? Grab a plan on our{" "}
        <Link
          href="/subscription-plans"
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Subscription Plans
        </Link>{" "}
        page or start with the{" "}
        <Link
          href="/free-trial"
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          free 24-hour trial
        </Link>
        .
      </>
    ),
  },
  {
    icon: Wifi,
    title: "A stable internet connection",
    body: "10–15 Mbps for HD, 25 Mbps+ for 4K. WiFi or ethernet both work; ethernet is more stable for TVs.",
  },
  {
    icon: Smartphone,
    title: "An IPTV player app",
    body: "Recommendations for every device are below. Most are free.",
  },
];

export function InstallationBeforeStart() {
  return (
    <section
      id="before-you-start"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Checklist
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Before You Start:{" "}
            <span style={{ color: "var(--hero-accent)" }}>What You&apos;ll Need</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            Setup takes minutes, but make sure you have these three things ready first:
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {NEEDS.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} direction="up" delay={0.06 * i} once className="h-full">
                <div
                  className="flex h-full flex-col rounded-2xl border p-6"
                  style={{
                    borderColor: "var(--feature-card-border)",
                    backgroundColor: "transparent",
                  }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "var(--hero-accent)" }}
                    strokeWidth={1.75}
                  />
                  <h3
                    className="mt-5 text-base font-bold leading-snug"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <div
                    className="mt-3 text-sm leading-[1.7]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {item.body}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <p
            className="mt-8 text-center text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            That&apos;s it. Now find your device and follow along.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
