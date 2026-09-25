"use client";

import Link from "next/link";
import { KeyRound, Wifi, Smartphone } from "lucide-react";
import { routes } from "@/lib/routes";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const NEEDS = [
  {
    icon: KeyRound,
    title: "Your account details",
    body: (
      <>
        You may receive a username, password and server URL for a supported server login, or one
        playlist link. Copy the address exactly and avoid publishing it in a support forum.
        Haven&apos;t activated an account yet? Choose a{" "}
        <Link
          href={routes.subscriptionPlans}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          subscription prices and account options
        </Link>{" "}
        or request the{" "}
        <Link
          href={routes.contactUs}
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
    title: "Your device and connection",
    body: "Have the device make and model to hand. As a starting point, allow around 10–15 Mbps for HD and 25 Mbps or more for 4K. Actual requirements depend on the stream, player and other devices sharing your connection.",
  },
  {
    icon: Smartphone,
    title: "A compatible player",
    body: "Check the player’s publisher and platform in the official device store. Some apps charge a separate licence fee. Confirm whether the app accepts a playlist link, a server login or a device ID before installing it.",
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
            Before You <span style={{ color: "var(--hero-accent)" }}>Start</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            You need an active account or trial, your login details, an internet connection, your
            device model and a compatible app.
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
            Now find your device and follow along.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
