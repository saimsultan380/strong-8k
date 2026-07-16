"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const WHATSAPP_LINK = "https://wa.me/447000000000";

const STEPS = [
  {
    number: 1,
    heading: "Message us on WhatsApp",
    body: 'Tap the button and tell us what you need — "Free Trial", "New Subscription", "Setup Help", or "Reseller Panel".',
  },
  {
    number: 2,
    heading: "Get a real reply, fast",
    body: "A member of the Strong 8K team responds personally — usually within minutes, 24 hours a day.",
  },
  {
    number: 3,
    heading: "Sorted — start watching or selling",
    body: "Trial logins, subscription details, setup walkthroughs, and reseller panel access are all handled over WhatsApp.",
  },
];

function StepBadge({ number }: { number: number }) {
  return (
    <div
      className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 text-lg font-extrabold md:h-16 md:w-16 md:text-2xl"
      style={{
        borderColor: "var(--hero-accent)",
        backgroundColor: "var(--hero-base)",
        color: "var(--hero-accent)",
      }}
    >
      {number}
    </div>
  );
}

export function FreeTrialHowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Simple Process
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            How to Get Help from{" "}
            <span style={{ color: "var(--hero-accent)" }}>Strong 8K</span> – 3 Quick Steps
          </h2>
        </FadeIn>

        <div className="mt-10 md:hidden">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} direction="up" delay={0.08 * i} once>
              <div className="relative flex gap-4">
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute left-6 top-12 bottom-0 w-px -translate-x-1/2"
                    style={{
                      background:
                        "linear-gradient(180deg, var(--hero-accent) 0%, color-mix(in srgb, var(--hero-accent) 20%, transparent) 100%)",
                      opacity: 0.35,
                    }}
                    aria-hidden
                  />
                )}
                <StepBadge number={step.number} />
                <div className="min-w-0 flex-1 pb-8 last:pb-0">
                  <h3
                    className="mb-2 text-[15px] font-bold leading-snug"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {step.heading}
                  </h3>
                  <p className="text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 hidden md:mt-16 md:block">
          <div className="relative flex items-center justify-between px-24 lg:px-32">
            <div
              className="absolute inset-x-0 top-1/2 mx-36 h-px -translate-y-1/2 lg:mx-44"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, var(--hero-accent) 20%, var(--hero-accent) 80%, transparent 100%)",
                opacity: 0.3,
              }}
              aria-hidden
            />
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} direction="up" delay={0.08 * i} once>
                <StepBadge number={step.number} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-10">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} direction="up" delay={0.1 + 0.08 * i} once>
                <div className="text-center">
                  <h3
                    className="mb-3 text-base font-bold leading-snug"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {step.heading}
                  </h3>
                  <p className="text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="up" delay={0.2} once>
          <p
            className="mx-auto mt-8 max-w-2xl text-center text-sm leading-[1.75] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            Need help installing on your device? Follow our step-by-step{" "}
            <Link
              href="/installation-guide"
              className="font-bold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Installation Guide
            </Link>{" "}
            or message us and we&apos;ll guide you live.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15} once>
          <div className="mt-8 flex justify-center md:mt-10">
            <a
              href={WHATSAPP_LINK}
              className="flex min-h-12 w-full max-w-sm items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-200 hover:brightness-110 sm:w-auto sm:px-8 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
                color: "var(--hero-cta-primary-fg)",
              }}
            >
              Message Us on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
