"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const WHATSAPP_LINK = "https://wa.me/447482794475"; // Replace with your actual WhatsApp Link

export function InstallationSupportSection() {
  return (
    <section
      id="installation-support"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 0% 50%, var(--hero-blush-left) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 100% 50%, var(--hero-blush-right) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Support
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Need Help?{" "}
            <span style={{ color: "var(--hero-accent)" }}>
              IPTV Customer Support
            </span>{" "}
            Is Here
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-7 max-w-[720px] space-y-4 text-center text-sm leading-[1.8] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              If you get stuck at any stage of installation, our support team
              provides setup assistance, activation details, and device-specific
              help — for free, regardless of which device you are using.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Whether you need a download code resent, a Portal URL re-issued,
              or help identifying which app your Smart TV supports, a real
              person responds — not an automated queue.
            </p>
          </div>
        </FadeIn>

        <ScrollReveal direction="up" delay={0.1} once>
          <div
            className="mx-auto mt-10 max-w-2xl rounded-2xl border px-6 py-8 text-center sm:px-10 md:mt-12"
            style={{
              backgroundColor: "var(--feature-cta-bg)",
              borderColor: "var(--feature-cta-border)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            <div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border"
              style={{
                borderColor: "var(--feature-icon-border)",
              }}
            >
              <Headphones
                className="h-5 w-5"
                style={{ color: "var(--hero-accent)" }}
                strokeWidth={2}
              />
            </div>
            <p
              className="text-sm leading-[1.75] sm:text-[15px]"
              style={{ color: "var(--hero-muted)" }}
            >
              Average reply time under five minutes via WhatsApp and live chat.
            </p>
            <div className="mt-6 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                  style={{
                    background: "var(--hero-cta-primary-bg)",
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  Contact Support
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
