"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const STEPS = [
  {
    title: "You support your customers",
    body: "You handle customer questions, renewals and the terms you agree with them.",
  },
  {
    title: "Strong 8K supports the service and panel",
    body: "Contact us about service faults, panel access and credit questions.",
  },
  {
    title: "Escalate when you need us",
    body: "Send the account reference, device, app and a short description of the problem so we can investigate.",
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
            Reseller Support and{" "}
            <span style={{ color: "var(--hero-accent)" }}>Responsibilities</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            Following these steps helps an IPTV reseller understand the costs and customer
            experience before committing to a larger credit balance.
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
