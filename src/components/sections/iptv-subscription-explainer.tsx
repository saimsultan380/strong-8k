"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import {
  whatsappMessages,
  whatsappUrlWithText,
} from "@/lib/site";

const BENEFITS = [
  "Live television and on-demand content",
  "One active stream on a standard account",
  "Check compatibility before you order",
];

const freeTrialWhatsapp = whatsappUrlWithText(
  whatsappMessages.startFreeTrial,
);

export function IptvSubscriptionExplainer() {
  return (
    <section
      id="what-is-strong-8k"
      className="relative isolate overflow-hidden border-y py-20 md:py-28"
      style={{
        backgroundColor: "var(--hero-base)",
        borderColor: "var(--feature-card-border)",
      }}
    >
      <Container className="relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
        <div>
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.24em]"
              style={{ color: "var(--hero-accent)" }}
            >
              About Strong 8K
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-[48px]"
              style={{ color: "var(--hero-heading)" }}
            >
              What Is{" "}
              <span style={{ color: "var(--hero-accent)" }}>Strong 8K IPTV</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="mt-6 max-w-xl text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Strong 8K IPTV is a subscription service for watching live television and
              on-demand content through an internet connection. You receive account details to
              enter into a compatible IPTV player.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="mt-8 space-y-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm">
                  <span
                    className="mt-[9px] h-px w-3 shrink-0"
                    style={{ background: "var(--grad-brand)" }}
                    aria-hidden
                  />
                  <span style={{ color: "var(--hero-heading)" }}>{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.18}>
          <div
            className="rounded-2xl border p-6 sm:p-8 md:p-10"
            style={{ borderColor: "var(--feature-card-border)", backgroundColor: "transparent" }}
          >
            <div className="grid gap-4 border-b pb-6 sm:grid-cols-3" style={{ borderColor: "var(--feature-card-border)" }}>
              {[
                { value: "40K+", label: "Live channels" },
                { value: "8K", label: "UHD options" },
                { value: "1", label: "Screen as standard" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black text-gradient-brand">{value}</p>
                  <p className="mt-1 text-xs" style={{ color: "var(--hero-muted)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-5">
              <p
                className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
                style={{ color: "var(--hero-muted)" }}
              >
                A standard account allows one active stream at a time. Additional accounts are
                available when several devices need to stream simultaneously. You can check
                compatibility and test the service before ordering.
              </p>
            </div>
            <a
              href={freeTrialWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm font-bold underline transition-colors hover:opacity-85"
              style={{ color: "var(--hero-accent)" }}
            >
              Start free trial →
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
