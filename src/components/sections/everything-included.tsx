"use client";

import { Trophy, Film, Clapperboard, Newspaper, Baby, Music } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const ITEMS = [
  {
    id: "sports",
    icon: Trophy,
    title: "Live sports",
    description:
      "Find available football, cricket, motorsport, boxing and other sports in the programme guide.",
  },
  {
    id: "movies",
    icon: Film,
    title: "Movies and series",
    description:
      "Browse by genre, choose a title and select an available quality option.",
  },
  {
    id: "series",
    icon: Clapperboard,
    title: "30,000+ complete series box sets",
    description:
      "Browse 120,000+ on-demand movies and series alongside 30,000+ complete series box sets. The library is updated daily.",
  },
  {
    id: "news",
    icon: Newspaper,
    title: "News, family and radio",
    description:
      "Save favourite channels and use your player’s parental controls where supported.",
  },
  {
    id: "kids",
    icon: Baby,
    title: "Children’s entertainment",
    description:
      "The 40,000+ live channels include children’s entertainment, music and radio.",
  },
  {
    id: "music",
    icon: Music,
    title: "International programmes",
    description:
      "The catalogue includes sports, news, international programmes, children’s entertainment, music and radio.",
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
              Explore the Strong 8K Channel and{" "}
              <span style={{ color: "var(--hero-accent)" }}>On-Demand Catalogue</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="mt-6 max-w-2xl text-[15px] leading-[1.75] sm:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Explore the Strong 8K IPTV catalogue across 40,000+ live channels, including sports,
              news, international programmes, children’s entertainment, music and radio. Browse
              120,000+ on-demand movies and series alongside 30,000+ complete series box sets. The
              library is updated daily. Contact Strong 8K for the latest availability if you want
              to check a particular channel, title or event.
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
            Contact Strong 8K for the latest availability if you want to check a particular
            channel, title or event.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
