"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { routes } from "@/lib/routes";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const WHATSAPP_LINK = "https://wa.me/447401921250";

const ISSUES = [
  {
    id: "login",
    title: "“Invalid credentials.”",
    body: "Paste the server URL without a trailing space and check capital letters in the password. Confirm the account has started and that you selected the correct login method.",
  },
  {
    id: "buffering",
    title: "Buffering on one device",
    body: "If playback buffers, test a different permitted stream or device, reboot your player and router, and try Ethernet or stronger Wi-Fi. Note the time, app and connection type when contacting support.",
  },
  {
    id: "app-store",
    title: "App not shown in the store",
    body: "Store availability varies by country and device. Ask for another verified player; do not use a random Downloader code posted by an unrelated account.",
  },
  {
    id: "mac",
    title: "MAC address added but no channels",
    body: "Refresh the player, check that the identifier matches exactly and ask support whether the account is active. Some apps also require their own licence payment.",
  },
  {
    id: "quality",
    title: "Picture quality below expectation",
    body: "Check what quality the stream actually offers and whether the device, app and display support it. Selecting a higher setting cannot make a lower-resolution source native high resolution.",
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
            Troubleshooting: quick tests that narrow the problem
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
            Still stuck?{" "}
            <a
              href={WHATSAPP_LINK}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "#ffffff" }}
            >
              Message us on WhatsApp
            </a>{" "}
            or visit{" "}
            <Link
              href={routes.contactUs}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "#ffffff" }}
            >
              Contact Us
            </Link>
            .
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
