"use client";

import {
  Zap,
  Users,
  Clock,
  Server,
  CalendarCheck,
  Headphones,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const FEATURES = [
  {
    Icon: Zap,
    title: "Instant Auto-Activation",
    body: "Lines go live the moment you create them. Your customer pays you, you generate their login, they're watching two minutes later — day or night, no waiting on support.",
  },
  {
    Icon: Users,
    title: "Unlimited Customer Accounts",
    body: 'No caps, no tiers, no "upgrade to add more users." Whether you have 5 customers or 500, the panel scales with you at no extra platform cost.',
  },
  {
    Icon: Clock,
    title: "Credits That Never Expire",
    body: "Buy credits when the rate suits you and spend them at your own pace. Unused balance stays in your account permanently — no deadlines, no forced top-ups.",
  },
  {
    Icon: Server,
    title: "Multi-Server Stability",
    body: "Your customers' streams run on load-balanced servers with automatic failover. If one route has issues, traffic switches over in seconds — most viewers never notice a thing.",
  },
  {
    Icon: CalendarCheck,
    title: "Accurate EPG",
    body: 'The TV guide your customers see updates automatically and stays accurate. Fewer "why is the guide wrong?" messages means less support work landing on you.',
  },
  {
    Icon: Headphones,
    title: "24/7 Reseller Support",
    body: "A dedicated reseller line on WhatsApp, around the clock. Panel questions, technical issues, or advice on growing your base — real answers, fast.",
  },
];

export function ResellerFeaturesSection() {
  return (
    <section
      id="panel-features"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Panel Features
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Built for Serious IPTV Resellers in the{" "}
            <span style={{ color: "var(--hero-accent)" }}>UK</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.Icon;
            return (
              <ScrollReveal key={feature.title} direction="up" delay={0.05 * i} once className="h-full">
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
                    className="mt-5 text-lg font-bold leading-snug"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-[1.75]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {feature.body}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
