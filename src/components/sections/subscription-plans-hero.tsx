"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { HeroTitleReveal } from "@/components/animation/hero-title-reveal";
import Link from "next/link";
import { motion } from "framer-motion";

export function SubscriptionPlansHero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 md:pb-20">
      <Container className="relative z-10 pt-32 text-center sm:pt-36">
        <HeroReveal delay={0.05}>
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-sm"
            style={{
              borderColor: "var(--hero-pill-border)",
              backgroundColor: "var(--hero-pill-bg)",
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
              Subscription Plans
            </span>
          </div>
        </HeroReveal>

        <HeroTitleReveal
          className="mx-auto max-w-[920px] text-center text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[54px]"
          style={{ color: "var(--hero-heading)" }}
          lines={[
            "Strong 8K IPTV Subscription Plans &",
            <>
              <span style={{ color: "var(--hero-accent)" }}>Prices UK</span>
            </>,
          ]}
        />

        <HeroReveal delay={0.18}>
          <div className="mx-auto mt-6 max-w-[750px] space-y-4 text-sm leading-[1.8] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Every Strong 8K IPTV subscription comes with the same full package — 40,000+ live
              channels, 120,000+ movies and series, and picture quality up to 8K UHD. The only
              decision you need to make is how long you want to stay connected, with plans starting
              from just £9.99.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              No contracts. No hidden fees. No stripped-down &quot;basic&quot; tiers. Whether you
              choose 1 month or 12, Strong8K gives you everything from day one — and longer plans
              simply cost less per month.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Below you&apos;ll find every plan, a side-by-side comparison, and honest answers to
              the pricing questions we get asked most.
            </p>
          </div>
        </HeroReveal>

        <HeroReveal variant="cta" delay={0.36}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#pricing"
                className="flex w-full max-w-xs items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:w-auto sm:max-w-none sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                View Plans Below
                <ArrowRight className="h-4 w-4 opacity-75" />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact-us/"
                className="flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)] sm:w-auto sm:max-w-none sm:text-[15px]"
                style={{
                  borderColor: "var(--hero-btn-border)",
                  color: "var(--hero-cta-secondary-text)",
                  backgroundColor: "var(--hero-pill-bg)",
                }}
              >
                Start 24-Hour Free Trial
              </Link>
            </motion.div>
          </div>
        </HeroReveal>
      </Container>
    </section>
  );
}
