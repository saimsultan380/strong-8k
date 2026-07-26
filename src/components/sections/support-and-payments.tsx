"use client";

import { ShieldCheck, Headphones, MessageSquare, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/447000000000"; // Replace with your actual WhatsApp Link

export function SupportAndPaymentsSection() {
  return (
    <section
      id="support-and-payments"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      {/* Background blush */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 50% 50%, var(--hero-blush-right) 0%, transparent 80%)",
        }}
      />

      <Container className="relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Trust & Reliability
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Secure Payments, Instant Activation{" "}
              <span style={{ color: "var(--hero-accent)" }}>& 24/7 Support</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Secure Payments & Activation */}
          <ScrollReveal direction="up" delay={0.05} once className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-full flex-col gap-6 rounded-2xl border p-8 md:p-10 transition-colors duration-300 hover:border-[var(--hero-accent)]"
              style={{
                backgroundColor: "var(--feature-card-bg)",
                borderColor: "var(--feature-card-border)",
                boxShadow: "var(--feature-card-shadow)",
              }}
            >
              {/* Icon */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full border"
                style={{
                  borderColor: "var(--feature-icon-border)",
                }}
              >
                <ShieldCheck
                  className="h-7 w-7"
                  style={{ color: "var(--hero-accent)" }}
                  strokeWidth={1.75}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl font-bold leading-tight mb-4 md:text-2xl"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Safe Checkout &{" "}
                  <span style={{ color: "var(--hero-accent)" }}>Fast Setup</span>
                </h3>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ color: "var(--feature-body)" }}
                >
                  Pay safely through trusted payment methods with no hidden charges and no auto-renew surprises. Your account is activated within minutes of payment, so there is no waiting around.
                </p>
              </div>

              {/* Bottom Action */}
              <div className="mt-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-colors hover:opacity-85"
                  style={{ color: "var(--hero-accent)" }}
                >
                  Select a Plan <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Card 2: 24/7 Real Person Support */}
          <ScrollReveal direction="up" delay={0.15} once className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-full flex-col gap-6 rounded-2xl border p-8 md:p-10 transition-colors duration-300 hover:border-[var(--hero-accent)]"
              style={{
                backgroundColor: "var(--feature-card-bg)",
                borderColor: "var(--feature-card-border)",
                boxShadow: "var(--feature-card-shadow)",
              }}
            >
              {/* Icon */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full border"
                style={{
                  borderColor: "var(--feature-icon-border)",
                }}
              >
                <Headphones
                  className="h-7 w-7"
                  style={{ color: "var(--hero-accent)" }}
                  strokeWidth={1.75}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl font-bold leading-tight mb-4 md:text-2xl"
                  style={{ color: "var(--hero-heading)" }}
                >
                  24/7 Human{" "}
                  <span style={{ color: "var(--hero-accent)" }}>Assistance</span>
                </h3>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ color: "var(--feature-body)" }}
                >
                  And if anything ever stops working, you will reach a real person — not a bot. Our support team is available 24/7 on WhatsApp, live chat and email, and can help with everything from installing IPTV Firestick apps to fixing playback issues.
                </p>
                <p
                  className="mt-4 text-[15px] leading-[1.8]"
                  style={{ color: "var(--feature-body)" }}
                >
                  Reach us any time through our{" "}
                  <Link
                    href="/contact-us/"
                    className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    Contact Us
                  </Link>{" "}
                  page.
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-block"
                >
                  <a
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                    style={{
                      background: "var(--hero-cta-primary-bg)",
                      boxShadow: "var(--hero-cta-primary-shadow)",
                    }}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Chat on WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
