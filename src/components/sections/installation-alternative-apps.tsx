"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Tv2, Sliders, Smartphone } from "lucide-react";

const APPS = [
  {
    name: "TiviMate",
    description: "The favourite among power users. Beautiful TV guide layout and deep customisation, though the premium version needs a small one-off payment.",
    Icon: Sliders,
  },
  {
    name: "XCIPTV",
    description: "A solid free alternative with a clean interface and reliable playback.",
    Icon: Tv2,
  },
  {
    name: "IBO Player",
    description: "Simple and lightweight, good for older Firestick models with less memory.",
    Icon: Smartphone,
  },
];

export function InstallationAlternativeApps() {
  return (
    <section
      id="alternative-apps"
      className="relative isolate overflow-hidden py-20 md:py-28 border-t"
      style={{
        backgroundColor: "var(--hero-base)",
        borderColor: "var(--feature-card-border)",
      }}
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
              Alternative IPTV Players
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--hero-heading)" }}
            >
              Other IPTV Apps for Firestick{" "}
              <span style={{ color: "var(--hero-accent)" }}>Worth Knowing</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-6 max-w-[720px] text-sm leading-[1.75] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              IPTV Smarters Pro is the most beginner-friendly option, but it's not the only one. If you're after the best IPTV app for Firestick for your specific needs, these alternatives also work with our service:
            </p>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APPS.map((app, i) => (
            <ScrollReveal key={app.name} direction="up" delay={0.05 * i} once>
              <div
                className="h-full rounded-2xl border p-6 sm:p-8"
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
                    backgroundColor: "color-mix(in srgb, var(--hero-accent) 6%, var(--feature-card-bg))",
                  }}
                >
                  <app.Icon className="h-5 w-5" style={{ color: "var(--hero-accent)" }} />
                </div>

                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {app.name}
                </h3>

                <p
                  className="mt-3 text-sm leading-[1.6]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  {app.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.2} once>
          <div
            className="mx-auto mt-8 max-w-5xl rounded-2xl border p-5 text-center text-sm leading-[1.7] sm:p-6"
            style={{
              borderColor: "var(--feature-card-border)",
              backgroundColor: "color-mix(in srgb, var(--hero-accent) 3%, var(--feature-card-bg))",
              color: "var(--hero-muted)",
            }}
          >
            All three install the same way: through the Downloader app with a code or URL. Message us on WhatsApp if you'd like the current install codes for any of them.
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
