"use client";

import Image from "next/image";
import Link from "next/link";
import { Tv, MonitorPlay, Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";

const HERO_FEATURES = [
  { label: "20,000+ Live Channels", icon: Tv },
  { label: "HD, 4K & 8K Streaming", icon: MonitorPlay },
  { label: "24/7 Support", icon: Headphones },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <Container className="relative z-10 grid min-h-screen items-center gap-6 pb-12 pt-24 sm:gap-8 sm:pt-32 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-12 lg:pb-20 lg:pt-36">
        <FadeIn delay={0.08} className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-[160px] sm:max-w-[290px] lg:max-w-[430px]">
            <div
              aria-hidden
              className="absolute inset-8 rounded-full blur-3xl"
              style={{ background: "rgba(212, 168, 75, 0.18)" }}
            />
            <Image
              src="/strong-8k.PNG"
              alt="Strong 8K IPTV logo"
              width={1024}
              height={1024}
              loading="eager"
              unoptimized
              className="relative h-auto w-full object-contain drop-shadow-[0_0_24px_rgba(212,168,75,0.25)]"
            />
          </div>
        </FadeIn>

        <div className="order-2 text-center lg:order-1 lg:text-left">
          <FadeIn delay={0.12}>
            <h1 className="mx-auto max-w-[780px] text-[32px] font-bold leading-[1.1] tracking-tight text-gradient-brand sm:text-5xl md:text-[56px] lg:mx-0 lg:text-[58px]">
              Strong 8K IPTV – Premium 8K IPTV Subscription for UK & USA
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div
              className="mx-auto mt-6 max-w-[760px] space-y-4 text-sm leading-[1.72] sm:text-[15px] lg:mx-0"
              style={{ color: "var(--hero-muted)" }}
            >
              <p>
                Looking for a powerful, reliable, and high-quality IPTV subscription for the UK and USA?
              </p>
              <p>
                Strong 8K IPTV gives you access to thousands of live TV channels, sports, movies, TV series, and on-demand entertainment with smooth HD, Full HD, 4K, and 8K streaming. Designed for fast channel loading, stable performance, and minimal buffering, our service works seamlessly across Firestick, Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Android devices, Windows PCs, Mac, and other compatible streaming devices.
              </p>
              <p>
                Whether you&apos;re watching live sports, blockbuster movies, international channels, breaking news, or trending TV shows, Strong 8K IPTV delivers a premium entertainment experience with exceptional picture quality, reliable performance, and instant activation for viewers across the UK, USA, and beyond.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-8 flex flex-row items-stretch justify-center gap-3 sm:gap-4 lg:justify-start">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1 sm:flex-initial">
                <a
                  href="#pricing"
                  className="flex min-h-12 items-center justify-center rounded-xl bg-gradient-brand px-4 py-3.5 text-[14px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:px-8 sm:text-[15px] sm:min-w-60"
                  style={{
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  See Plans
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1 sm:flex-initial">
                <Link
                  href="/installation-guide"
                  className="flex min-h-12 items-center justify-center rounded-xl bg-gradient-brand px-4 py-3.5 text-[14px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:px-8 sm:text-[15px] sm:min-w-60"
                  style={{
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  Supported Apps
                </Link>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.36}>
            <ul className="mt-7 grid grid-cols-3 gap-2 text-center sm:gap-4 sm:text-left lg:max-w-[720px]">
              {HERO_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li
                    key={feature.label}
                    className="flex flex-col items-center gap-2 border-r px-1 last:border-r-0 sm:flex-row sm:items-start sm:pr-4 sm:text-left"
                    style={{ borderColor: "var(--hero-divider)" }}
                  >
                    <Icon
                      className="h-5 w-5 shrink-0"
                      style={{ color: "var(--hero-accent)" }}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span
                      className="text-xs font-medium sm:text-sm"
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
