"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import {
  whatsappMessages,
  whatsappUrlWithText,
} from "@/lib/site";

const BENEFITS = [
  "No dish is required",
  "A standard account is sold for one simultaneous screen",
  "Keep your credentials private",
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
              What is{" "}
              <span style={{ color: "var(--hero-accent)" }}>Strong 8K IPTV</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="mt-6 max-w-xl text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Strong 8K IPTV is an internet-delivered TV subscription for viewers who prefer
              choosing their own player and device. Instead of installing new hardware, you add the
              supplied account details to a compatible app. The app retrieves the channel guide and
              available on-demand titles for that account.
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
                No dish is required. A standard Strong 8K account is sold for one simultaneous
                screen, while extra connections can be requested. If you want to move between a TV
                and a phone, check that the app on each device accepts your login format; if you
                want both to play at once, ask for a multi-screen price.
              </p>
              <p
                className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
                style={{ color: "var(--hero-muted)" }}
              >
                The Strong 8K team can explain supported login formats, plan lengths and setup. Keep
                your credentials private and ask for current availability when a particular
                programme is essential to you.
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
