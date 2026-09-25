"use client";

import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { HeroTitleReveal } from "@/components/animation/hero-title-reveal";

const WHATSAPP_LINK = "https://wa.me/447401921250";

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden pb-12 md:pb-14">
      <Container className="relative z-10 pt-32 text-center sm:pt-36">
        <HeroReveal delay={0.05}>
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{
              borderColor: "var(--hero-pill-border)",
              backgroundColor: "transparent",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--hero-accent)" }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Contact & Support
            </span>
          </div>
        </HeroReveal>

        <HeroTitleReveal
          className="mx-auto max-w-[920px] text-center text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[52px]"
          style={{ color: "var(--hero-heading)" }}
          lines={[
            <>
              Contact <span style={{ color: "var(--hero-accent)" }}>Strong 8K</span>
            </>,
          ]}
        />

        <HeroReveal delay={0.18}>
          <div className="mx-auto mt-5 max-w-[760px] space-y-4 text-sm leading-[1.75] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Contact our team for help with an existing account, installation, renewal, pricing
              or reseller enquiries. You can also request a free 24-hour trial before subscribing.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              For a technical issue, include your device model, app name, when the problem started
              and any error message. Our technical support continues throughout your active
              subscription.
            </p>
          </div>
        </HeroReveal>

        <HeroReveal variant="cta" delay={0.28}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
                color: "var(--hero-cta-primary-fg)",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Message Support on WhatsApp
            </a>
            <a
              href="#free-trial"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] sm:text-[15px]"
              style={{
                borderColor: "var(--hero-btn-border)",
                color: "var(--hero-cta-secondary-text)",
                backgroundColor: "transparent",
              }}
            >
              Request a Free Trial
            </a>
          </div>
        </HeroReveal>
      </Container>
    </section>
  );
}
