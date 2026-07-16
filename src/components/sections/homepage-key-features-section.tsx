"use client";

import {
  ListVideo,
  Rewind,
  MonitorSmartphone,
  Shield,
  Zap,
  RefreshCw,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const PLAYERS = ["IPTV Smarters Pro", "TiviMate", "IBO Player", "Smart IPTV", "XCIPTV", "VLC"];

const FEATURES = [
  {
    id: "epg",
    icon: ListVideo,
    title: "Full EPG (TV Guide)",
    description: "See what's on now and next across every channel, always up to date.",
  },
  {
    id: "catchup",
    icon: Rewind,
    title: "Catch-Up TV",
    description: "Missed a show? Scroll back and watch it on your schedule.",
  },
  {
    id: "multi-screen",
    icon: MonitorSmartphone,
    title: "Multi-Screen Options",
    description:
      "Add extra screens to your plan and watch different channels in different rooms.",
  },
  {
    id: "parental",
    icon: Shield,
    title: "Parental Controls",
    description: "Lock adult or unwanted content behind a PIN in seconds.",
  },
  {
    id: "anti-freeze",
    icon: Zap,
    title: "Anti-Freeze Streaming",
    description: "Stable playback engineered for live events.",
  },
  {
    id: "updates",
    icon: RefreshCw,
    title: "Free Updates",
    description: "New channels and VOD titles added at no extra cost.",
  },
];

export function HomepageKeyFeaturesSection() {
  return (
    <section
      id="key-features"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
          <div>
            <FadeIn delay={0.05}>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Key Features
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
                style={{ color: "var(--hero-heading)" }}
              >
                Key Features of Your{" "}
                <span style={{ color: "var(--hero-accent)" }}>Strong 8K IPTV</span> Subscription
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p
              className="text-[15px] leading-[1.75] sm:text-base md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              Strong 8K is built to feel effortless from day one. Every subscription includes:
            </p>
          </FadeIn>
        </div>

        <div
          className="grid overflow-hidden rounded-2xl border md:grid-cols-2"
          style={{ borderColor: "var(--feature-card-border)" }}
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.id} direction="up" delay={0.05 * i} once className="h-full">
                <div
                  className="flex h-full items-start gap-4 border-b p-6 md:p-8"
                  style={{
                    borderColor: "var(--feature-card-border)",
                    borderRight: i % 2 === 0 ? "1px solid var(--feature-card-border)" : undefined,
                    backgroundColor: "transparent",
                  }}
                >
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--hero-accent)" }}
                    strokeWidth={1.75}
                  />
                  <div className="min-w-0">
                    <h3
                      className="text-base font-bold leading-snug md:text-lg"
                      style={{ color: "var(--hero-heading)" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="mt-2 text-[13px] leading-[1.6] sm:text-sm"
                      style={{ color: "var(--feature-body)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <FadeIn delay={0.35}>
          <div
            className="mt-5 rounded-2xl border p-6 md:p-8"
            style={{
              backgroundColor: "transparent",
              borderColor: "var(--feature-card-border)",
            }}
          >
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <h3
                  className="text-lg font-bold md:text-xl"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Works with every popular IPTV player
                </h3>
                <p className="mt-3 text-sm leading-[1.75]" style={{ color: "var(--feature-body)" }}>
                  Keep your favourite app. M3U and Xtream Codes support means you&apos;re never
                  locked into one player.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {PLAYERS.map((player) => (
                  <span
                    key={player}
                    className="rounded-full border px-4 py-2 text-xs font-semibold"
                    style={{
                      borderColor: "var(--feature-icon-border)",
                      color: "var(--hero-heading)",
                      backgroundColor: "transparent",
                    }}
                  >
                    {player}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
