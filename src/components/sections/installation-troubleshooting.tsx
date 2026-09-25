"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const ISSUES = [
  {
    id: "login",
    title: "Invalid credentials or an expired account",
    body: "Check the server URL, username and password, or the playlist URL, for spaces and typing mistakes. Confirm the trial or subscription is still active and that you selected the login method in your welcome message.",
  },
  {
    id: "catalogue",
    title: "The entire catalogue fails to load",
    body: "Restart the player and the device, then check the internet connection. If the list still does not appear, contact support with the app name and any error message.",
  },
  {
    id: "channels",
    title: "Individual channels or categories are unavailable",
    body: "One missing channel or category, while the rest of the catalogue loads, is a content or source issue. Tell support which category failed and when it started.",
  },
  {
    id: "buffering",
    title: "Buffering or an unstable connection",
    body: "Test another stream, reboot the player and router, and try Ethernet or stronger Wi-Fi. Note the time, app and connection type when you contact support.",
  },
  {
    id: "licence",
    title: "Player activation or licence problems",
    body: "Some third-party players need their own licence or a device ID before streams play. Use the identifier the player shows and confirm any separate app charge with the publisher.",
  },
  {
    id: "quality",
    title: "Quality below expectations",
    body: "Resolution depends on the source stream, the player, the display and the connection. A higher setting cannot turn a lower-resolution source into 8K.",
  },
];

export function InstallationTroubleshooting() {
  return (
    <section
      id="troubleshooting"
      className="relative py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Troubleshooting
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[42px]">
            Troubleshooting Login and Playback
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {ISSUES.map((issue, i) => (
            <ScrollReveal key={issue.id} direction="up" delay={0.04 * i} once className="h-full">
              <article
                className="flex h-full flex-col rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                  style={{
                    borderColor: "var(--feature-icon-border)",
                    color: "var(--hero-accent)",
                  }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-4 text-base font-bold leading-snug sm:text-lg"
                  style={{ color: "#ffffff" }}
                >
                  {issue.title}
                </h3>
                <p
                  className="mt-2.5 flex-1 text-sm leading-[1.75]"
                  style={{ color: "var(--feature-body)" }}
                >
                  {issue.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p
            className="mt-10 text-sm sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            Technical support continues throughout your active subscription, including after the
            first seven days. Contact us with your device, app and a description of the problem.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
