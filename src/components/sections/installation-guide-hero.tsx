"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

const WHATSAPP_LINK = "https://wa.me/447000000000";

export function InstallationGuideHero() {
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
              Installation Guide
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h1
            className="mx-auto max-w-[920px] text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[52px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Strong 8K IPTV Installation Guide – Set Up Any Device in{" "}
            <span style={{ color: "var(--hero-accent)" }}>Minutes</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mx-auto mt-6 max-w-[760px] space-y-4 text-sm leading-[1.75] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Just activated your Strong 8K IPTV subscription or 24-hour trial? You&apos;re minutes
              away from watching. This step-by-step installation guide covers every popular device
              in the UK — Firestick, Android TV, Smart TVs, iPhone, Android phones, Windows PC and
              Mac.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              No technical knowledge needed. Pick your device below, follow the numbered steps, and
              you&apos;ll be streaming before the kettle boils. Average setup time: under 5 minutes.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Stuck at any step? Our support team is on WhatsApp 24/7 — send a message and we&apos;ll
              walk you through it live.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.34}>
          <div className="mt-8 flex flex-row items-center justify-center gap-3">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1 sm:flex-initial">
              <a
                href={WHATSAPP_LINK}
                className="flex min-h-12 items-center justify-center rounded-xl px-4 py-3.5 text-[13px] font-bold transition-all duration-200 hover:brightness-110 sm:px-7 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                  color: "var(--hero-cta-primary-fg)",
                }}
              >
                Get Setup Help on WhatsApp →
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1 sm:flex-initial">
              <Link
                href="/subscription-plans"
                className="flex min-h-12 items-center justify-center rounded-xl border px-4 py-3.5 text-[13px] font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] sm:px-7 sm:text-[15px]"
                style={{
                  borderColor: "var(--hero-btn-border)",
                  color: "var(--hero-cta-secondary-text)",
                  backgroundColor: "transparent",
                }}
              >
                View Subscription Plans
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
