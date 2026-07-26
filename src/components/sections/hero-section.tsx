"use client";

import Image from "next/image";
import Link from "next/link";
import { Tv, MonitorPlay, Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { motion } from "framer-motion";

const HERO_FEATURES = [
  { label: "40,000+ Live Channels", icon: Tv },
  { label: "HD, 4K & 8K Streaming", icon: MonitorPlay },
  { label: "24/7 Support", icon: Headphones },
];

export function HeroSection() {
  return (
    <section className="relative isolate">
      <Container className="relative z-10 grid min-h-[100svh] items-start gap-4 pb-8 pt-28 sm:gap-6 sm:pt-32 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-10 lg:pb-14 lg:pt-32">
        <FadeIn delay={0.08} className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-[180px] sm:max-w-[250px] lg:max-w-[360px]">
            <div
              aria-hidden
              className="absolute inset-8 rounded-full blur-3xl"
              style={{ background: "rgba(212, 168, 75, 0.18)" }}
            />
            <Image
              src="/strong-8k.PNG?v=2"
              alt="Strong 8K IPTV logo"
              width={1024}
              height={1024}
              loading="eager"
              unoptimized
              className="relative h-auto w-full object-contain drop-shadow-[0_0_24px_rgba(212,168,75,0.25)]"
            />
          </div>
        </FadeIn>

        <div className="order-2 text-left lg:order-1">
          <MaskReveal
            delay={0.2}
            align="left"
            className="max-w-[720px] text-[28px] font-bold leading-[1.12] tracking-tight text-gradient-brand sm:text-4xl md:text-[44px] lg:text-[48px]"
          >
            Strong 8K IPTV UK – Premium IPTV Subscription with 40,000+ Channels & 8K UHD Streaming
          </MaskReveal>

          <FadeIn delay={0.2}>
            <div
              className="mt-3 max-w-[700px] space-y-2 text-[11px] leading-[1.5] sm:mt-4 sm:space-y-3 sm:text-sm sm:leading-[1.65]"
              style={{ color: "var(--hero-muted)" }}
            >
              <p>
                Tired of buffering screens and washed-out picture quality? Strong 8K IPTV brings crystal-clear streaming up to 8K UHD to homes across the United Kingdom — 40,000+ live channels and 120,000+ movies and series on demand, all on one subscription with instant activation.
              </p>
              <p>
                Whether you watch on a Smart TV, Firestick, Android box, iPhone, or PC, your Strong 8K subscription follows you everywhere. Setup takes minutes, every major IPTV player is supported, and our team is on hand 24/7 whenever you need them.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-5 flex flex-row items-stretch justify-start gap-2 sm:mt-6 sm:gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="min-w-0 flex-1 sm:flex-initial">
                <a
                  href="#pricing"
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-brand px-2.5 py-3 text-[12px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:min-w-52 sm:px-7 sm:text-[14px]"
                  style={{
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  Subscribe Now
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="min-w-0 flex-[1.35] sm:flex-initial">
                <Link
                  href="/contact-us/"
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-brand px-2.5 py-3 text-[12px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:min-w-52 sm:px-7 sm:text-[14px]"
                  style={{
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  Start 24-Hour Free Trial
                </Link>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.36}>
            <ul className="mt-5 grid grid-cols-3 gap-2 text-center sm:gap-4 sm:text-left lg:max-w-[680px]">
              {HERO_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li
                    key={feature.label}
                    className="flex flex-col items-center gap-1.5 border-r px-1 last:border-r-0 sm:flex-row sm:items-start sm:pr-4 sm:text-left"
                    style={{ borderColor: "var(--hero-divider)" }}
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                      style={{ color: "var(--hero-accent)" }}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span
                      className="text-[11px] font-medium sm:text-sm"
                      style={{ color: "var(--hero-muted)" }}
                    >
                      {feature.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
