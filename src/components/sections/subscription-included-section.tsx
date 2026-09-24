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
import Link from "next/link";
import { routes } from "@/lib/routes";

const INCLUDED_FEATURES = [
  {
    title: "40,000+ channels",
    description:
      "Every duration includes 40,000+ channels, including the sports packages.",
    Icon: Tv,
  },
  {
    title: "120,000+ VOD titles",
    description: "120,000+ VOD titles and 30,000+ complete series box sets.",
    Icon: Clapperboard,
  },
  {
    title: "Available 8K UHD streams",
    description:
      "Available 8K UHD streams require a compatible source, player and display.",
    Icon: MonitorPlay,
  },
  {
    title: "Anti-Freeze technology",
    description:
      "Anti-Freeze technology and 99.9% server uptime are included across the range.",
    Icon: Zap,
  },
  {
    title: "Programme guide and catch-up TV",
    description:
      "Every duration includes the programme guide, catch-up TV, updates and technical support. Catch-up availability varies by channel.",
    Icon: ListVideo,
  },
  {
    title: "M3U, MAG, Xtream Codes and Enigma2",
    description:
      "M3U, MAG, Xtream Codes and Enigma2 provide ways to connect your account through a compatible player or device.",
    Icon: Smartphone,
  },
  {
    title: "24/7 technical support",
    description:
      "Smart TV, Firestick, phone, tablet and PC users should choose a compatible player before buying.",
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
              Features included with every Strong 8K IPTV{" "}
              <span style={{ color: "var(--hero-accent)" }}>subscription</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-6 max-w-[720px] text-sm leading-[1.75] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Every duration includes 40,000+ channels, 120,000+ VOD titles, 30,000+ complete
              series box sets, the programme guide, catch-up TV, updates and technical support.
              Anti-Freeze technology and 99.9% server uptime are included across the range.
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
            The{" "}
            <Link
              href={routes.installationGuide}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Installation Guide
            </Link>{" "}
            explains how to enter credentials securely. Smart TV, Firestick, phone, tablet and PC
            users should choose a compatible player before buying.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
