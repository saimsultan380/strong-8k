"use client";

import {
  Tv,
  Clapperboard,
  MonitorPlay,
  Zap,
  ListVideo,
  Smartphone,
  Headphones,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const INCLUDED_FEATURES = [
  {
    title: "Full channel list",
    description:
      "All 40,000+ live channels, including complete international sports coverage.",
    Icon: Tv,
  },
  {
    title: "Complete VOD library",
    description: "120,000+ movies and 30,000+ series box sets, updated daily.",
    Icon: Clapperboard,
  },
  {
    title: "Maximum picture quality",
    description:
      "Stream in HD, FHD, 4K or 8K UHD, whatever your device supports.",
    Icon: MonitorPlay,
  },
  {
    title: "Anti-Freeze technology",
    description:
      "99.9% uptime, engineered for live events and peak-hour viewing.",
    Icon: Zap,
  },
  {
    title: "Catch-up TV & EPG",
    description:
      "Full programme guide plus the ability to watch what you missed.",
    Icon: ListVideo,
  },
  {
    title: "All player formats",
    description:
      "M3U, Xtream Codes, MAG and Enigma2, so any popular app works.",
    Icon: Smartphone,
  },
  {
    title: "24/7 support",
    description:
      "Real humans on WhatsApp and live chat, every day of the year.",
    Icon: Headphones,
  },
];

export function SubscriptionIncludedSection() {
  return (
    <section
      id="subscription-included"
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
              What&apos;s Included
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--hero-heading)" }}
            >
              Every Strong 8K IPTV Subscription{" "}
              <span style={{ color: "var(--hero-accent)" }}>Includes</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-6 max-w-[720px] text-sm leading-[1.75] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              There&apos;s no &quot;premium tier&quot; hiding the good stuff behind a higher price.
              Every plan — even 1 month at £9.99 — includes the complete package:
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED_FEATURES.map((feat, i) => (
            <ScrollReveal key={feat.title} direction="up" delay={0.05 * i} once>
              <div
                className="flex h-full flex-col rounded-2xl border p-6 sm:p-8"
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
                  <feat.Icon className="h-5 w-5" style={{ color: "var(--hero-accent)" }} />
                </div>

                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  {feat.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-[1.6]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  {feat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p
            className="mx-auto mt-12 max-w-3xl text-center text-sm leading-[1.75] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            The only paid extra is multi-screen — if you want to watch different channels on two or
            more devices at the same time, ask our team for multi-screen pricing when you order.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
