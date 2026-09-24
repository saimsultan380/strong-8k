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
    title: "Account administration",
    body: "Create, renew, suspend and review lines from the dashboard.",
  },
  {
    Icon: Users,
    title: "Credit visibility",
    body: "Track your remaining balance and usage.",
  },
  {
    Icon: Clock,
    title: "Programme guide and formats",
    body: "Help customers connect using a supported player and login format.",
  },
  {
    Icon: Server,
    title: "Reseller support",
    body: "Contact our team when an account or setup needs attention.",
  },
  {
    Icon: CalendarCheck,
    title: "120,000+ on-demand films and series",
    body: "Strong 8K customer access includes 120,000+ on-demand films and series, supported streams up to 8K UHD and 24/7 support.",
  },
  {
    Icon: Headphones,
    title: "Channel availability",
    body: "Check the latest channel availability before confirming a specific programme or event to a customer.",
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
            Tools for daily account{" "}
            <span style={{ color: "var(--hero-accent)" }}>management</span>
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
