"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { HeroTitleReveal } from "@/components/animation/hero-title-reveal";
import { motion } from "framer-motion";
import {
  whatsappMessages,
  whatsappUrlWithText,
} from "@/lib/site";

const freeTrialWhatsapp = whatsappUrlWithText(
  whatsappMessages.startFreeTrial,
);

export function HeroSection() {
  return (
    <section className="relative isolate">
      <Container className="relative z-10 grid min-h-[100svh] items-start gap-4 pb-8 pt-28 sm:gap-6 sm:pt-32 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-10 lg:pb-14 lg:pt-32">
        <HeroReveal
          variant="logoHero"
          delay={0.16}
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
              alt="Strong 8K"
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
              "Strong 8K - Premium IPTV Subscription",
              "with 40,000+ Live Channels",
            ]}
          />

          <HeroReveal delay={0.2}>
            <div
              className="mt-3 max-w-[700px] space-y-2 text-[11px] leading-[1.5] sm:mt-4 sm:space-y-3 sm:text-sm sm:leading-[1.65]"
              style={{ color: "var(--hero-muted)" }}
            >
              <p>
                Strong 8K offers a premium IPTV subscription for viewers in the UK and USA, with 40,000+ live channels and 120,000+ on-demand films and series. Watch available sports, news, entertainment and family programmes through a compatible player on your Smart TV, Firestick, phone, tablet or computer.
              </p>
              <p>
                Choose a 1, 3, 6 or 12-month plan, or start with a free 24-hour trial to check the service on your own device. Our Strong 8K IPTV subscriptions include setup assistance and 24/7 support. One standard account allows one active stream at a time, with extra accounts available for simultaneous viewing. Picture quality ranges from SD to HD, Full HD, 4K and up to 8K UHD where the source stream and your equipment support it.
              </p>
            </div>
          </HeroReveal>

          <HeroReveal variant="cta" delay={0.28}>
            <div className="mt-5 flex w-full max-w-full flex-row items-stretch justify-start gap-2.5 sm:mt-6 sm:gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="min-w-0 flex-1 basis-0 sm:flex-initial">
                <Link
                  href="#home-pricing"
                  className="flex h-full min-h-12 w-full items-center justify-center rounded-xl bg-gradient-brand px-3 py-3 text-center text-[13px] font-bold leading-tight text-black transition-all duration-200 hover:brightness-110 sm:min-w-52 sm:px-7 sm:text-[14px] sm:leading-normal"
                  style={{
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  View plans and prices
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="min-w-0 flex-1 basis-0 sm:flex-initial">
                <a
                  href={freeTrialWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full min-h-12 w-full items-center justify-center rounded-xl bg-gradient-brand px-3 py-3 text-center text-[13px] font-bold leading-tight text-black transition-all duration-200 hover:brightness-110 sm:min-w-52 sm:px-7 sm:text-[14px] sm:leading-normal"
                  style={{
                    boxShadow: "var(--hero-cta-primary-shadow)",
                  }}
                >
                  Request a free trial
                </a>
              </motion.div>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.36}>
            <p
              className="mt-5 max-w-[680px] text-[11px] font-medium leading-relaxed sm:text-sm"
              style={{ color: "var(--hero-muted)" }}
            >
              40,000+ live channels · 120,000+ films and series · Free 24-hour trial · 24/7 support
            </p>
          </HeroReveal>
        </div>
      </Container>
    </section>
  );
}
