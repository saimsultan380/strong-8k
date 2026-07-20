"use client";

import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { siteConfig } from "@/lib/site";

const WHATSAPP_LINK = "https://wa.me/447000000000";

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden pb-12 md:pb-14">
      <Container className="relative z-10 pt-32 text-center sm:pt-36">
        <FadeIn delay={0.05}>
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
              Free Trial & Contact
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h1
            className="mx-auto max-w-[920px] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[52px]"
            style={{ color: "var(--hero-heading)" }}
          >
            IPTV Free Trial UK – Test Strong 8K Free for{" "}
            <span style={{ color: "var(--hero-accent)" }}>24 Hours</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mx-auto mt-5 max-w-[760px] space-y-4 text-sm leading-[1.75] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Why pay for an IPTV service you haven&apos;t seen? {siteConfig.shortName} gives every
              new customer a genuine free trial — 24 hours of full access to 40,000+ channels, the
              complete VOD library, and real 4K/8K picture quality. No card details, no commitment,
              no catch.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Claiming it takes one WhatsApp message, and most trials are activated within minutes.
              And if you&apos;re here for anything else — a question about plans, setup help, or
              reseller queries — the same team answers everything, 24/7.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.28}>
          <div className="mt-8 flex justify-center">
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
              Get My Free Trial on WhatsApp →
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
