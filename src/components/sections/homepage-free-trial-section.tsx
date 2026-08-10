"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/447482794475";

const TRIAL_INCLUDES = [
  "The complete 40,000+ channel list",
  "Full access to the VOD library",
  "Real picture quality — HD, 4K and 8K UHD",
  "Genuine peak-time performance, not a demo server",
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
                  Why take anyone&apos;s word for it? Test the full Strong 8K service on your own
                  device, your own broadband, at your own pace — completely free for 24 hours.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p
                  className="mt-7 text-sm font-semibold"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Your trial includes everything a paid plan does:
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
                  No card details. No commitment. If you like what you see — and we think you will —
                  upgrading to a full plan takes one message.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-8">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <a
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center gap-2.5 rounded-xl px-7 py-4 text-[14px] font-bold transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                    style={{
                      background: "var(--hero-cta-primary-bg)",
                      boxShadow: "var(--hero-cta-primary-shadow)",
                      color: "var(--hero-cta-primary-fg)",
                    }}
                  >
                    Claim My 24-Hour Free Trial →
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
