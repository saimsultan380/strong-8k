"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const HELP_TOPICS = [
  {
    heading: "New subscriptions & plan advice",
    body: "Not sure which Strong 8K plan fits? We'll recommend the right option based on your devices and viewing habits.",
  },
  {
    heading: "Free 24-hour trials",
    body: "Test the full service on your own Firestick, Smart TV, phone or PC before spending anything.",
  },
  {
    heading: "Device setup & installation",
    body: "Stuck on a step? We guide you through Firestick, Android, iPhone, Windows, Mac and Samsung/LG setup live on WhatsApp.",
  },
  {
    heading: "Reseller panel & credit packages",
    body: "Interested in starting your own IPTV business? Ask about panel demos, credit packs from £59.99, and white label branding.",
  },
  {
    heading: "Billing, renewals & account issues",
    body: "Login problems, expired lines, payment questions, or plan upgrades — send your username and we'll sort it fast.",
  },
];

export function FreeTrialDevicesSection() {
  return (
    <section
      id="what-we-help-with"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <FadeIn delay={0.05}>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Support Topics
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
                style={{ color: "var(--hero-heading)" }}
              >
                What Our Team Can{" "}
                <span style={{ color: "var(--hero-accent)" }}>Help With</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p
                className="mx-auto mt-6 max-w-[680px] text-sm leading-[1.75] sm:text-[15px]"
                style={{ color: "var(--hero-muted)" }}
              >
                One WhatsApp line handles everything — no department transfers, no waiting on
                callbacks:
              </p>
            </FadeIn>
          </div>

          <div className="mt-10 space-y-4">
            {HELP_TOPICS.map((item, i) => (
              <ScrollReveal key={item.heading} direction="up" delay={0.05 * i} once>
                <div
                  className="rounded-2xl border p-5 sm:p-6"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--feature-card-border)",
                  }}
                >
                  <p className="text-sm font-bold sm:text-[15px]" style={{ color: "var(--hero-heading)" }}>
                    {item.heading}
                  </p>
                  <p
                    className="mt-2 text-sm leading-[1.75] sm:text-[15px]"
                    style={{ color: "var(--hero-muted)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
