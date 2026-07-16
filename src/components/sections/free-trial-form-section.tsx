"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { ShieldCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/447000000000";

export function FreeTrialFormSection() {
  return (
    <section
      id="free-trial"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <ScrollReveal direction="up" delay={0.05} once>
          <div
            className="mx-auto max-w-3xl rounded-2xl border p-6 sm:p-10 md:p-12"
            style={{
              backgroundColor: "transparent",
              borderColor: "var(--feature-card-border)",
            }}
          >
            <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                style={{
                  borderColor: "color-mix(in srgb, var(--hero-accent) 20%, transparent)",
                  backgroundColor: "transparent",
                }}
              >
                <ShieldCheck className="h-7 w-7" style={{ color: "var(--hero-accent)" }} />
              </div>

              <div className="min-w-0 flex-1">
                <FadeIn delay={0.05}>
                  <span
                    className="text-[10px] font-extrabold uppercase tracking-[0.25em]"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    Free Trial
                  </span>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <h2
                    className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    Try Strong 8K Before You Buy –{" "}
                    <span style={{ color: "var(--hero-accent)" }}>Free 24-Hour Trial</span>
                  </h2>
                </FadeIn>

                <div className="mt-5 space-y-4">
                  <FadeIn delay={0.15}>
                    <p
                      className="text-sm leading-[1.75] sm:text-[15px]"
                      style={{ color: "var(--hero-muted)" }}
                    >
                      Message us on WhatsApp and we&apos;ll activate a full 24-hour Strong 8K trial
                      on your device — no credit card, no commitment. You get the same 40,000+
                      channels, 120,000+ VOD library, and Anti-Freeze streaming our paying
                      customers use.
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <p
                      className="text-sm font-semibold leading-[1.75] sm:text-[15px]"
                      style={{ color: "var(--hero-heading)" }}
                    >
                      Test it during peak evening hours, put a live match on, and decide with your
                      own eyes — not a sales pitch.
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.25}>
                    <a
                      href={WHATSAPP_LINK}
                      className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 hover:brightness-110"
                      style={{
                        background: "var(--hero-cta-primary-bg)",
                        boxShadow: "var(--hero-cta-primary-shadow)",
                        color: "var(--hero-cta-primary-fg)",
                      }}
                    >
                      Request My Free Trial →
                    </a>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
