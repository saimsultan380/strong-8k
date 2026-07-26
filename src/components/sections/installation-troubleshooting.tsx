"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const WHATSAPP_LINK = "https://wa.me/447000000000";

const ISSUES = [
  {
    id: "buffering",
    title: "Channels buffering or freezing?",
    body: "First, test your internet speed — you need 10–15 Mbps for HD and 25 Mbps+ for 4K. If your speed is fine, restart your router and switch your TV device to ethernet or the 5GHz WiFi band. Still stuttering? Message support and we'll switch you to a faster server line.",
  },
  {
    id: "login",
    title: 'Login failed or "invalid credentials"?',
    body: "Nine times out of ten it's a typing error — usernames and passwords are case-sensitive, and a stray space at the end counts as a wrong character. Copy-paste directly from your welcome message. If it still fails, contact support; your line may need a quick refresh.",
  },
  {
    id: "app-store",
    title: "Can't find the app in your device's store?",
    body: "App availability changes by region and device model. If a recommended app isn't showing, try the alternatives listed for your device above — or message us and we'll recommend the best current option for your exact model.",
  },
  {
    id: "mac",
    title: "Sent your MAC address but channels haven't appeared?",
    body: "Activation normally takes 5–15 minutes. After that, fully close and reopen the app (or restart the TV). If it's been over 30 minutes, double-check you sent the MAC exactly as displayed — one wrong character and activation goes to the wrong device.",
  },
  {
    id: "quality",
    title: "Picture quality lower than expected?",
    body: 'Check your player\'s settings — some apps default to a lower stream quality. Set quality to "Auto" or maximum, and make sure your device itself supports 4K/8K output on the HDMI port you\'re using.',
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
            Troubleshooting: Quick Fixes for Common Setup Issues
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
              href="/contact-us/"
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
