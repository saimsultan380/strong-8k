"use client";

import { MonitorPlay, ShieldCheck, Server, Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const POINTS = [
  {
    id: "8k-quality",
    icon: MonitorPlay,
    title: "True 8K UHD Picture Quality",
    description:
      "Most services stop at 4K. Strong 8K goes further, streaming supported content in stunning 8K Ultra HD with HEVC/H.265 compression — so you get maximum detail without needing an ultra-fast broadband connection. Even on a standard UK connection, playback stays smooth and sharp.",
  },
  {
    id: "uptime",
    icon: ShieldCheck,
    title: "99.9% Uptime with Anti-Freeze Technology",
    description:
      "Nothing ruins a live match like a frozen screen. Our Anti-Freeze technology and automatic server switching keep your stream running through peak evening hours, big fixtures, and busy weekends. If one route slows down, your stream instantly moves to a faster one — you won't even notice.",
  },
  {
    id: "uk-servers",
    icon: Server,
    title: "Strong IPTV Servers Built for UK Viewers",
    description:
      "Our high-capacity European servers are optimised for UK broadband networks, which means faster channel switching (zapping), quicker VOD loading, and stable playback at any hour of the day.",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Real Support, 24 Hours a Day",
    description:
      "No ticket queues, no waiting days for a reply. Our support team answers on WhatsApp and live chat around the clock — whether you need help installing, renewing, or fixing a playback issue. Most questions are solved in minutes.",
  },
];

export function WhyBestIptvSection() {
  return (
    <section
      id="why-choose"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end md:gap-12">
          <div>
            <FadeIn delay={0.05}>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Why Choose Us
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
                style={{ color: "var(--hero-heading)" }}
              >
                Why Choose{" "}
                <span style={{ color: "var(--hero-accent)" }}>Strong 8K IPTV</span> in the UK?
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p
              className="text-[15px] leading-[1.75] sm:text-base md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              Thousands of viewers across the UK have already made the switch. Here&apos;s what sets
              a Strong 8K subscription apart from the rest.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <ScrollReveal key={point.id} direction="up" delay={0.05 * i} once className="h-full">
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 hover:border-[var(--hero-accent)] md:p-8"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--feature-card-border)",
                  }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "var(--hero-accent)" }}
                    strokeWidth={1.75}
                  />
                  <h3
                    className="mt-5 text-lg font-bold leading-snug md:text-xl"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="mt-3 text-[13px] leading-[1.7] sm:text-sm"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {point.description}
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
