"use client";

import Image from "next/image";
import Link from "next/link";
import { Tv, MonitorPlay, Headphones } from "lucide-react";
import { routes } from "@/lib/routes";
import { Container } from "@/components/layout/container";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { HeroTitleReveal } from "@/components/animation/hero-title-reveal";
import { motion } from "framer-motion";
import {
  whatsappMessages,
  whatsappUrlWithText,
} from "@/lib/site";

const HERO_FEATURES = [
  { label: "40,000+ live channels", icon: Tv },
  { label: "HD, 4K and 8K UHD options", icon: MonitorPlay },
  { label: "24/7 support", icon: Headphones },
];

const freeTrialWhatsapp = whatsappUrlWithText(
  whatsappMessages.startFreeTrial,
);

export function HeroSection() {
  return (
    <section className="relative isolate">
      <Container className="relative z-10 grid min-h-[100svh] items-start gap-4 pb-8 pt-28 sm:gap-6 sm:pt-32 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-10 lg:pb-14 lg:pt-32">
        <HeroReveal
          variant="media"
          delay={0.08}
          className="order-1 flex justify-center lg:order-2"
        >
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
        </HeroReveal>

        <div className="order-2 text-left lg:order-1">
          <HeroTitleReveal
            className="max-w-[720px] text-left text-[28px] font-bold leading-[1.12] tracking-tight text-gradient-brand sm:text-4xl md:text-[44px] lg:text-[48px]"
            lines={[
              "Strong 8K IPTV – Premium IPTV Subscription",
              "with 40,000+ Channels & Up to 8K UHD",
            ]}
          />

          <HeroReveal delay={0.2}>
            <div
              className="mt-3 max-w-[700px] space-y-2 text-[11px] leading-[1.5] sm:mt-4 sm:space-y-3 sm:text-sm sm:leading-[1.65]"
              style={{ color: "var(--hero-muted)" }}
            >
              <p>
                Strong 8K IPTV brings live television, films and series together through a compatible player on your TV, phone or computer. Explore the available catalogue, check your device and try the service before choosing a subscription.
              </p>
              <p>
                Built for viewers across the UK, your Strong 8K subscription includes setup assistance and technical support throughout your active subscription. Picture quality depends on the available source stream, your device, player and internet connection, with resolutions up to 8K UHD on supported content.
              </p>
            </div>
          </HeroReveal>

          <HeroReveal variant="cta" delay={0.28}>
            <div className="mt-5 flex flex-row items-stretch justify-start gap-2 sm:mt-6 sm:gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="min-w-0 flex-1 sm:flex-initial">
                <Link
                  href={routes.subscriptionPlans}
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-brand px-2.5 py-3 text-[12px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:min-w-52 sm:px-7 sm:text-[14px]"
                  style={{
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  Subscribe Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="min-w-0 flex-[1.35] sm:flex-initial">
                <a
                  href={freeTrialWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-brand px-2.5 py-3 text-[12px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:min-w-52 sm:px-7 sm:text-[14px]"
                  style={{
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  Start 24-Hour Free Trial
                </a>
              </motion.div>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.36}>
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
          </HeroReveal>
        </div>
      </Container>
    </section>
  );
}
