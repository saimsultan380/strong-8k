"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/447000000000";

export function SubscriptionCtaSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, color-mix(in srgb, var(--hero-accent) 9%, transparent) 0%, transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 0% 50%, var(--hero-blush-left) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 100% 50%, var(--hero-blush-right) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div
          className="mx-auto max-w-4xl rounded-2xl border px-6 py-12 text-center sm:px-10 sm:py-14 md:px-14 md:py-16"
          style={{
            backgroundColor: "var(--feature-card-bg)",
            borderColor: "var(--feature-card-border)",
            boxShadow: "var(--feature-card-shadow)",
          }}
        >
          <FadeIn delay={0.05}>
            <div className="mb-6 flex items-center justify-center gap-3">
              <div
                className="h-px max-w-[80px] flex-1"
                style={{ backgroundColor: "var(--feature-divider)" }}
              />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Get Started
              </span>
              <div
                className="h-px max-w-[80px] flex-1"
                style={{ backgroundColor: "var(--feature-divider)" }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Lock In Your Strong 8K IPTV Subscription Today –{" "}
              <span style={{ color: "var(--hero-accent)" }}>From £9.99</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-7 max-w-[720px] text-[15px] leading-[1.8] sm:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              One payment. Zero contracts. Everything included. Start with the free 24-hour trial,
              pick the plan that suits you, and you&apos;ll be watching in under five minutes — at
              the best IPTV price in the UK.
            </p>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1} once>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-[15px] font-bold text-white transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "var(--hero-cta-primary-bg)",
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  Start Free Trial
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2.5 rounded-xl border px-8 py-4 text-[15px] font-bold transition-all duration-200 hover:brightness-110"
                  style={{
                    borderColor: "var(--hero-pill-border)",
                    backgroundColor: "var(--hero-pill-bg)",
                    color: "var(--hero-heading)",
                  }}
                >
                  Subscribe Now →
                </a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
