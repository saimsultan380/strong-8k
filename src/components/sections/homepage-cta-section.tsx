"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";
import {
  whatsappMessages,
  whatsappUrlWithText,
} from "@/lib/site";
import { routes } from "@/lib/routes";

const freeTrialWhatsapp = whatsappUrlWithText(
  whatsappMessages.startFreeTrial,
);

export function HomepageCtaSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div
          className="mx-auto rounded-2xl border px-6 py-12 text-center sm:px-10 sm:py-14 md:px-14 md:py-16"
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
              Get Started
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Ready to try{" "}
              <span style={{ color: "var(--hero-accent)" }}>Strong 8K IPTV</span>?
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-7 max-w-[680px] text-[15px] leading-[1.8] sm:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Look at the plans, test the 40,000+ channel catalogue and ask about any feature you
              need before ordering. The Strong 8K IPTV team can help with device setup, 24/7
              account questions and current availability.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p
              className="mx-auto mt-5 max-w-[680px] text-[15px] leading-[1.8] sm:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Start free trial · Subscribe Now · Contact Us
            </p>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1} once>
            <div className="mt-10 flex flex-row items-center justify-center gap-3 md:mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <a
                  href={freeTrialWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl px-4 py-4 text-[13px] font-bold transition-all duration-200 hover:brightness-110 sm:px-8 sm:text-[15px]"
                  style={{
                    background: "var(--hero-cta-primary-bg)",
                    boxShadow: "var(--hero-cta-primary-shadow)",
                    color: "var(--hero-cta-primary-fg)",
                  }}
                >
                  Start free trial
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <a
                  href="#pricing"
                  className="flex items-center justify-center rounded-xl border px-4 py-4 text-[13px] font-bold transition-all duration-200 hover:brightness-110 sm:px-8 sm:text-[15px]"
                  style={{
                    borderColor: "var(--hero-pill-border)",
                    backgroundColor: "transparent",
                    color: "var(--hero-heading)",
                  }}
                >
                  Subscribe Now
                </a>
              </motion.div>
            </div>
          </ScrollReveal>

          <FadeIn delay={0.25}>
            <p
              className="mx-auto mt-8 max-w-[600px] text-sm leading-[1.75] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              Questions before you order? Reach our team any time via the{" "}
              <Link
                href={routes.contactUs}
                className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
                style={{ color: "var(--hero-heading)" }}
              >
                Contact Us
              </Link>{" "}
              page.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
