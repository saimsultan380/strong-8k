"use client";

import { MessageCircle, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

const WHATSAPP_LINK = "https://wa.me/447000000000";

const TRUST_ITEMS = [
  "24/7 Support",
  "Reply in Minutes",
  "Free 24-Hour Trial",
  "No Credit Card",
  "UK Customers Welcome",
];

export function FreeTrialHero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 md:pb-20">
      <Container className="relative z-10 pt-32 text-center sm:pt-36">
        <FadeIn delay={0.05}>
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
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
              Contact Us
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h1
            className="mx-auto max-w-[920px] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[54px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Contact Strong 8K IPTV –{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              24/7 Support, Trials &amp; Subscriptions
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mx-auto mt-6 max-w-[760px] space-y-4 text-sm leading-[1.75] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Need help choosing a plan, setting up your device, or starting a free trial? Our
              Strong 8K support team is on WhatsApp around the clock — real people, fast replies,
              no ticket queues.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Whether you&apos;re a new customer testing Strong 8K for the first time, an existing
              subscriber with a technical question, or interested in our reseller panel, this is
              the fastest way to reach us. Message and we&apos;ll walk you through everything step
              by step.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-row items-center justify-center gap-3">
            <a
              href={WHATSAPP_LINK}
              className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-[13px] font-bold transition-all duration-200 hover:brightness-110 sm:flex-initial sm:px-7 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
                color: "var(--hero-cta-primary-fg)",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Message Us on WhatsApp
            </a>
            <a
              href="#contact"
              className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-[13px] font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] sm:flex-initial sm:px-7 sm:text-[15px]"
              style={{
                borderColor: "var(--hero-btn-border)",
                color: "var(--hero-cta-secondary-text)",
                backgroundColor: "transparent",
              }}
            >
              Ways to Contact Us
              <ChevronRight className="h-4 w-4 opacity-70" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.42}>
          <div
            className="mx-auto mt-10 max-w-3xl border-t pt-6"
            style={{ borderColor: "var(--feature-card-border)" }}
          >
            <div
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm"
              style={{ color: "var(--hero-muted)" }}
            >
              {TRUST_ITEMS.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  {index > 0 && (
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "var(--hero-accent)", opacity: 0.5 }}
                    />
                  )}
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
