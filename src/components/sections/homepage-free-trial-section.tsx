"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";
import {
  whatsappMessages,
  whatsappUrlWithText,
} from "@/lib/site";

const freeTrialWhatsapp = whatsappUrlWithText(
  whatsappMessages.startFreeTrial,
);

const TRIAL_INCLUDES = [
  "Access the 40,000+ channel catalogue",
  "Access the 120,000+ on-demand selection",
  "No card or payment is required",
  "Access expires automatically without a charge",
];

export function HomepageFreeTrialSection() {
  return (
    <section
      id="free-trial"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div
          className="rounded-2xl border"
          style={{
            borderColor: "var(--feature-card-border)",
            backgroundColor: "transparent",
          }}
        >
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div
              className="flex flex-col items-center justify-center border-b p-8 text-center lg:border-b-0 lg:border-r lg:p-12"
              style={{ borderColor: "var(--feature-card-border)" }}
            >
              <FadeIn delay={0.05}>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  Full access for
                </span>
                <div className="mt-4 flex items-end justify-center">
                  <span className="text-[96px] font-black leading-[.8] text-gradient-brand sm:text-[120px]">
                    24
                  </span>
                  <span
                    className="mb-2 ml-2 text-xl font-black uppercase"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    hours
                  </span>
                </div>
                <p className="mt-6 text-sm font-semibold" style={{ color: "var(--hero-heading)" }}>
                  £0 · No card needed
                </p>
              </FadeIn>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <FadeIn delay={0.05}>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: "var(--hero-accent)" }}
                >
                  Free Trial
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2
                  className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Try Strong 8K IPTV Free for{" "}
                  <span style={{ color: "var(--hero-accent)" }}>24 Hours</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p
                  className="mt-6 max-w-xl text-sm leading-[1.75] sm:text-[15px]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  Use the Strong 8K trial to test picture quality, navigation and content
                  categories on the connection you will actually use. Access the 40,000+ channel
                  catalogue and 120,000+ on-demand selection during your 24-hour trial. No card or
                  payment is required, and access expires automatically without a charge. Choose an
                  IPTV subscription only if you decide to continue.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p
                  className="mt-7 text-sm font-semibold"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Your 24-hour trial includes:
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {TRIAL_INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-[15px]">
                      <span
                        className="mt-[9px] h-px w-3 shrink-0"
                        style={{ background: "var(--grad-brand)" }}
                        aria-hidden
                      />
                      <span style={{ color: "var(--hero-muted)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.25}>
                <p
                  className="mt-6 max-w-xl text-sm leading-[1.75] sm:text-[15px]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  Choose an IPTV subscription only if you decide to continue.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-8">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <a
                    href={freeTrialWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl px-7 py-4 text-[14px] font-bold transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                    style={{
                      background: "var(--hero-cta-primary-bg)",
                      boxShadow: "var(--hero-cta-primary-shadow)",
                      color: "var(--hero-cta-primary-fg)",
                    }}
                  >
                    Start free trial →
                  </a>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
