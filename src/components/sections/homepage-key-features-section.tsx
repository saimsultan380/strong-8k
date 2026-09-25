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
import Link from "next/link";
import { routes } from "@/lib/routes";

const PLAYERS = ["M3U", "Xtream Codes", "TV guide", "Catch-up", "8K UHD", "Parental controls"];

const FEATURES = [
  {
    id: "epg",
    icon: ListVideo,
    title: "TV guide",
    description: "A programme guide is available where the player and channel support it.",
  },
  {
    id: "catchup",
    icon: Rewind,
    title: "Catch-up",
    description: "Catch-up is available on supported channels and varies by programme.",
  },
  {
    id: "multi-screen",
    icon: MonitorSmartphone,
    title: "One stream per account",
    description:
      "A standard account plays one stream at a time. Extra accounts are for simultaneous viewing.",
  },
  {
    id: "parental",
    icon: Shield,
    title: "Player controls",
    description: "Use the parental controls in your player where that app provides them.",
  },
  {
    id: "formats",
    icon: Zap,
    title: "Login formats",
    description: "Compatible players can use M3U playlist links or Xtream Codes details.",
  },
  {
    id: "uhd",
    icon: RefreshCw,
    title: "Picture quality",
    description:
      "SD, HD, FHD, 4K and 8K UHD options depend on the source stream, player and display.",
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
                Streaming Quality, Features and{" "}
                <span style={{ color: "var(--hero-accent)" }}>Support</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p
              className="text-[15px] leading-[1.75] sm:text-base md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              Available resolutions depend on the source stream, your player, display and
              connection. A Strong 8K subscription can include a TV guide, catch-up on supported
              channels, and M3U or Xtream Codes login. One account plays one stream at a time.
              Technical support is available throughout an active subscription.
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
                  Need help with any feature?
                </h3>
                <p className="mt-3 text-sm leading-[1.75]" style={{ color: "var(--feature-body)" }}>
                  If you need help with any feature, send the Strong 8K team your app name and
                  device model. Our{" "}
                  <Link
                    href={routes.installationGuide}
                    className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    setup guide
                  </Link>{" "}
                  covers the first login and common playback issues.
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
