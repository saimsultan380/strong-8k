"use client";

import { Trophy, Swords, CarFront, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const SPORTS = [
  {
    id: "football",
    Icon: Trophy,
    heading: "IPTV Football — Premier League, Champions League, Europa League",
    body: "Every Premier League fixture, the UEFA Champions League, the UEFA Europa League, domestic cups, and the FIFA World Cup when it arrives. Full coverage, every kick-off, included as standard.",
  },
  {
    id: "boxing",
    Icon: Swords,
    heading: "IPTV Boxing, UFC and PPV Events",
    body: "IPTV PPV events are included in your subscription — no separate pay-per-view charge on fight night. Every major IPTV Boxing title fight. Every IPTV UFC card, main event included.",
  },
  {
    id: "racing",
    Icon: CarFront,
    heading: "IPTV Formula 1, Cricket, NBA and NFL",
    body: "IPTV Formula 1 covers every race weekend. IPTV Cricket follows international Test matches and the Cricket World Cup. NBA and NFL coverage included for American sports fans based in the UK.",
  },
];

function SportCard({
  Icon,
  heading,
  body,
  delay = 0,
}: {
  Icon: React.ElementType;
  heading: string;
  body: string;
  delay?: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div
        className="flex h-full flex-col gap-4 rounded-2xl border p-6 md:p-7"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border"
          style={{
            backgroundColor: "var(--feature-icon-bg)",
            borderColor: "var(--feature-icon-border)",
            boxShadow: "0 0 16px rgba(239, 35, 60, 0.12)",
          }}
        >
          <Icon
            className="h-5 w-5"
            style={{ color: "var(--hero-accent)" }}
            strokeWidth={1.75}
          />
        </div>
        <h3
          className="text-[15px] font-bold leading-snug md:text-base"
          style={{ color: "var(--hero-heading)" }}
        >
          {heading}
        </h3>
        <p
          className="text-sm leading-[1.7]"
          style={{ color: "var(--feature-body)" }}
        >
          {body}
        </p>
      </div>
    </ScrollReveal>
  );
}

export function SubscriptionSportsSection() {
  return (
    <section
      id="subscription-sports"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 0% 50%, var(--hero-blush-left) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 100% 50%, var(--hero-blush-right) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Live Sports
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            An IPTV Subscription Built for{" "}
            <span style={{ color: "var(--hero-accent)" }}>UK Sports Fans</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[680px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            If sport is the reason you are switching, this section matters
            most. Every IPTV subscription tier includes full sports access — no
            separate sports package, no extra monthly fee.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 md:mt-16">
          {SPORTS.map((sport, i) => (
            <SportCard
              key={sport.id}
              Icon={sport.Icon}
              heading={sport.heading}
              body={sport.body}
              delay={0.06 * i}
            />
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.1} once>
          <div className="mt-12 flex justify-center md:mt-14">
            <a
              href="#multi-connection"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Get Full Sports Access — View Plans
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
