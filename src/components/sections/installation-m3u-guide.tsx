"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

export function InstallationM3uGuide() {
  return (
    <section
      id="m3u-guide"
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
              Alternative Setup Method
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "var(--hero-heading)" }}
            >
              Alternative Method: Add IPTV to Firestick with an{" "}
              <span style={{ color: "var(--hero-accent)" }}>M3U Playlist</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-6 max-w-[720px] text-sm leading-[1.75] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Prefer the M3U method, or does your provider only supply an M3U URL? Adding IPTV to Firestick this way is just as simple:
            </p>
          </FadeIn>
        </div>

        <ScrollReveal direction="up" delay={0.2} once>
          <div
            className="mx-auto mt-12 max-w-3xl rounded-2xl border p-6 sm:p-8 md:p-10"
            style={{
              backgroundColor: "var(--feature-card-bg)",
              borderColor: "var(--feature-card-border)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            <ol className="space-y-5">
              {[
                "Open IPTV Smarters Pro and select Add New User.",
                "Choose Load Your Playlist or File/URL instead of Xtream Codes.",
                "Give the playlist any name, select M3U URL as the type, and paste your M3U link.",
                "Click Add User, and your channels will load.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                    style={{ background: "var(--hero-cta-primary-bg)" }}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="pt-0.5 text-sm leading-[1.75] sm:text-[15px]"
                    style={{ color: "var(--hero-muted)" }}
                  >
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <div
              className="mt-8 border-t pt-6 text-sm leading-[1.8] sm:text-[15px]"
              style={{
                borderColor: "var(--feature-card-border)",
                color: "var(--hero-muted)",
              }}
            >
              <p>
                The M3U method works in almost every IPTV player, so it's handy if you ever switch apps. Both Xtream Codes and M3U methods are fully supported by{" "}
                <span className="font-semibold text-[var(--hero-heading)]">Strong 8K IPTV</span> at no extra cost.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
