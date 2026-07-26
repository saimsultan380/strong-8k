"use client";

import { Tv, Briefcase, MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/447000000000"; // Replace with your actual WhatsApp Link

export function UkAndResellerSection() {
  return (
    <section
      id="uk-and-reseller"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      {/* Background blush */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 50% 50%, var(--hero-blush-left) 0%, transparent 80%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: British Viewers */}
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
                <Tv
                  className="h-7 w-7"
                  style={{ color: "var(--hero-accent)" }}
                  strokeWidth={1.75}
                />
              </div>

              {/* Title & Content */}
              <div className="flex-1">
                <h3
                  className="text-xl font-bold leading-tight mb-4 md:text-2xl"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Built for British Viewers –{" "}
                  <span style={{ color: "var(--hero-accent)" }}>
                    Strong 8K IPTV Sports & Entertainment
                  </span>
                </h3>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ color: "var(--feature-body)" }}
                >
                  As a dedicated Strong 8K IPTV provider, we focus on the content British viewers actually watch. Catch every Premier League and Champions League fixture, Formula 1 race weekend, major boxing and UFC events, plus cricket, rugby, darts, snooker and golf — all alongside the full range of UK channels and international networks.
                </p>
                <p
                  className="mt-4 text-[15px] leading-[1.8]"
                  style={{ color: "var(--feature-body)" }}
                >
                  Movie nights are covered too. New releases land in the VOD library shortly after launch, and complete series mean no more waiting a week between episodes.
                </p>
              </div>

              {/* Action Link/Text */}
              <div className="mt-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-colors hover:opacity-85"
                  style={{ color: "var(--hero-accent)" }}
                >
                  View Sports Plans <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Card 2: Reseller Panel */}
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
                <Briefcase
                  className="h-7 w-7"
                  style={{ color: "var(--hero-accent)" }}
                  strokeWidth={1.75}
                />
              </div>

              {/* Title & Content */}
              <div className="flex-1">
                <h3
                  className="text-xl font-bold leading-tight mb-4 md:text-2xl"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Start Your Own IPTV Business –{" "}
                  <span style={{ color: "var(--hero-accent)" }}>
                    With Our Reseller Panel
                  </span>
                </h3>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ color: "var(--feature-body)" }}
                >
                  Want to earn from IPTV instead of just watching it? Our Strong 8K IPTV reseller panel lets you create and manage your own customer accounts at wholesale credit prices. You get instant activations, stable servers your customers can rely on, and a full control panel to run everything from one dashboard.
                </p>
                <p
                  className="mt-4 text-[15px] leading-[1.8]"
                  style={{ color: "var(--feature-body)" }}
                >
                  Learn how it works on our{" "}
                  <Link
                    href="/reseller-panel/"
                    className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    Reseller
                  </Link>{" "}
                  page, or message us on WhatsApp for panel pricing.
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
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp Reseller Support
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
