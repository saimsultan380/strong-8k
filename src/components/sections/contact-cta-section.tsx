"use client";

import { MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const WHATSAPP_LINK = "https://wa.me/447401921250";

export function ContactCtaSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-12 md:py-16"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div
          className="mx-auto max-w-3xl rounded-2xl border px-6 py-10 text-center sm:px-10 sm:py-12"
          style={{
            backgroundColor: "transparent",
            borderColor: "var(--feature-card-border)",
          }}
        >
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Zero Risk
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mx-auto mt-3 max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[36px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Start Your Free IPTV Trial{" "}
              <span style={{ color: "var(--hero-accent)" }}>Now</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-5 max-w-[560px] text-sm leading-[1.8] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              24 hours. Full access. Zero risk. See for yourself why UK viewers are switching to
              Strong 8K — your trial is one message away.
            </p>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1} once>
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
                Claim My Free 24-Hour Trial →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
