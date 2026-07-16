"use client";

import { Trophy, Film, Clapperboard, Newspaper, Baby, Music } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const ITEMS = [
  {
    id: "sports",
    icon: Trophy,
    title: "Live Sports",
    description:
      "Complete international sports packages covering football, boxing, F1, cricket, rugby, UFC and more, with major events in high definition.",
  },
  {
    id: "movies",
    icon: Film,
    title: "Movies",
    description:
      "120,000+ titles from new box-office releases to timeless classics, refreshed daily.",
  },
  {
    id: "series",
    icon: Clapperboard,
    title: "Series & Box Sets",
    description:
      "30,000+ complete series, so you can binge every season without switching apps.",
  },
  {
    id: "news",
    icon: Newspaper,
    title: "News & Documentaries",
    description:
      "Stay informed with rolling news and documentary channels from around the world.",
  },
  {
    id: "kids",
    icon: Baby,
    title: "Kids & Family",
    description:
      "A full range of children's channels and family-friendly VOD with parental controls built in.",
  },
  {
    id: "music",
    icon: Music,
    title: "Music & Radio",
    description: "Music channels and radio stations included at no extra cost.",
  },
];

export function EverythingIncludedSection() {
  return (
    <section
      id="content-library"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 max-w-4xl md:mb-16">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Content Library
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
              style={{ color: "var(--hero-heading)" }}
            >
              40,000+ Live Channels &{" "}
              <span style={{ color: "var(--hero-accent)" }}>120,000+ Movies</span> On Demand
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="mt-6 max-w-2xl text-[15px] leading-[1.75] sm:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              One Strong 8K subscription replaces multiple streaming services. Here&apos;s what&apos;s
              inside:
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} direction="up" delay={0.05 * i} once className="h-full">
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 hover:border-[var(--hero-accent)] md:p-7"
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
                    className="mt-5 text-lg font-bold leading-snug"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-[1.65]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <FadeIn delay={0.35}>
          <p
            className="mt-10 text-center text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            New channels and titles are added continuously — your library keeps growing while your
            price stays the same.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
