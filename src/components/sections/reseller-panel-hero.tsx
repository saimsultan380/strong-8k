"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

const WHATSAPP_LINK = "https://wa.me/447000000000";

export function ResellerPanelHero() {
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
              Reseller Panel
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h1
            className="mx-auto max-w-[960px] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[54px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Strong 8K IPTV Reseller Panel UK – Start Your Own{" "}
            <span style={{ color: "var(--hero-accent)" }}>IPTV Business</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mx-auto mt-6 max-w-[760px] space-y-4 text-sm leading-[1.75] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Every month, thousands of UK households pay someone for their IPTV subscription. The
              Strong 8K reseller panel lets that someone be you — no technical skills, no big
              investment, no stock to hold.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Here&apos;s the model in one line: you buy credits at wholesale rates, create
              subscriptions for your customers at whatever price you choose, and keep 100% of the
              markup. As an IPTV reseller in the UK, your entire business runs from one dashboard —
              Strong8K handles the servers, the streams, and the infrastructure behind the scenes.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Starter packages begin at £59.99, and your panel is live the same day you order.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.34}>
          <div className="mt-8 flex flex-row items-center justify-center gap-3">
            <a
              href="#reseller-plans"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl px-4 py-3.5 text-[13px] font-bold transition-all duration-200 hover:brightness-110 sm:flex-initial sm:px-7 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
                color: "var(--hero-cta-primary-fg)",
              }}
            >
              Buy Reseller Panel
            </a>
            <a
              href={WHATSAPP_LINK}
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl border px-4 py-3.5 text-[13px] font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] sm:flex-initial sm:px-7 sm:text-[15px]"
              style={{
                borderColor: "var(--hero-btn-border)",
                color: "var(--hero-cta-secondary-text)",
                backgroundColor: "transparent",
              }}
            >
              Request a Free Demo
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
