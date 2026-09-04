"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const STEPS = [
  {
    title: "1. Test the Service First",
    body: "Take a free 24-hour trial and run it on your own devices. Check the channels, the quality, the stability. You should believe in what you're selling.",
  },
  {
    title: "2. Start with the Starter Pack",
    body: "120 credits (£59.99) is enough to onboard your first customers without over-committing. You'll learn the panel inside-out with real customers on real lines.",
  },
  {
    title: "3. Set Simple, Profitable Prices",
    body: "Don't overthink it — mirror the market. Monthly around £10–£12, yearly around £40–£45. Yearly plans are your friend: cash upfront, and the customer is locked in happily for 12 months.",
  },
  {
    title: "4. Find Your First Ten Customers",
    body: "Start close to home: friends, family, workmates still paying for expensive TV packages. Offer them a trial, let the quality convert them. Word of mouth does the rest — a happy IPTV customer always knows three more.",
  },
  {
    title: "5. Reinvest and Scale",
    body: "Roll your first profits into a bigger credit package for a lower per-credit rate. As your base grows, unlock sub-reseller selling and add a second income layer on top.",
  },
];

export function ResellerHowToSection() {
  return (
    <section
      id="beginner-roadmap"
      className="relative py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Beginner Roadmap
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]">
            How to Become an IPTV Reseller in the UK –{" "}
            <span style={{ color: "var(--hero-accent)" }}>5-Step Roadmap</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            New to reselling? Here&apos;s the exact path most of our successful resellers followed:
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} direction="up" delay={0.04 * i} once className="h-full">
              <article
                className="flex h-full flex-col rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <h3
                  className="text-base font-bold leading-snug sm:text-lg"
                  style={{ color: "#ffffff" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2.5 flex-1 text-sm leading-[1.75]"
                  style={{ color: "var(--feature-body)" }}
                >
                  {step.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
