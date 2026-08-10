"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { Tv, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/447401921250"; // Replace with your actual WhatsApp Link

export function SubscriptionMultiScreen() {
  return (
    <section
      id="multi-screen"
      className="relative isolate overflow-hidden py-16 md:py-24 border-t"
      style={{
        backgroundColor: "var(--hero-base)",
        borderColor: "var(--feature-card-border)",
      }}
    >
      <Container className="relative z-10">
        <ScrollReveal direction="up" delay={0.05} once>
          <div
            className="mx-auto max-w-4xl rounded-2xl border p-6 sm:p-10 md:p-12"
            style={{
              backgroundColor: "var(--feature-card-bg)",
              borderColor: "color-mix(in srgb, var(--hero-accent) 15%, var(--feature-card-border))",
              boxShadow: "0 10px 30px -10px color-mix(in srgb, var(--hero-accent) 8%, transparent)",
            }}
          >
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Left-aligned Icon Box */}
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                style={{
                  borderColor: "color-mix(in srgb, var(--hero-accent) 20%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--hero-accent) 8%, transparent)",
                }}
              >
                <Tv
                  className="h-7 w-7"
                  style={{ color: "var(--hero-accent)" }}
                  strokeWidth={2}
                />
              </div>

              {/* Right content area */}
              <div className="flex-1 min-w-0">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-[0.25em]"
                  style={{ color: "var(--hero-accent)" }}
                >
                  Multi-Connection
                </span>

                <h2
                  className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Watch on More Than One Screen –{" "}
                  <span style={{ color: "var(--hero-accent)" }}>Multi-Connection Plans</span>
                </h2>

                <div className="mt-5 space-y-4">
                  <p
                    className="text-sm leading-[1.75] sm:text-[15px]"
                    style={{ color: "var(--hero-muted)" }}
                  >
                    A standard subscription covers one stream at a time — ideal for a single household TV. But if the living room, bedroom and a phone all stream at once, you'll want a multi-connection upgrade.
                  </p>
                  <p
                    className="text-sm leading-[1.75] sm:text-[15px]"
                    style={{ color: "var(--hero-muted)" }}
                  >
                    Multi-connection plans let 2 or 3 screens watch different channels at the same time, under one account and one payment. Ask us on WhatsApp for current multi-connection pricing — it's cheaper than buying separate subscriptions.
                  </p>
                </div>

                <div className="mt-8">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block"
                  >
                    <a
                      href={WHATSAPP_LINK}
                      className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110"
                      style={{
                        background: "var(--hero-cta-primary-bg)",
                        boxShadow: "var(--hero-cta-primary-shadow)",
                      }}
                    >
                      <MessageSquare className="h-5 w-5" />
                      Ask for Multi-Connection Pricing
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
