"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const INCLUDED = [
  {
    title: "The same live channel catalogue",
    body: "Your Strong 8K trial includes the same live channel catalogue offered to paid customers.",
  },
  {
    title: "The same VOD library",
    body: "Use the full test period to explore the categories you would watch regularly.",
  },
  {
    title: "Available picture quality options",
    body: "The same available picture quality options offered to paid customers.",
  },
  {
    title: "Test in the evening",
    body: "Test in the evening if that is when your household usually watches. Try several channel categories and an on-demand title so you can compare different parts of the service.",
  },
];

export function ContactWhatsIncluded() {
  return (
    <section
      id="whats-included"
      className="relative isolate overflow-hidden py-12 md:py-16"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Full Access
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[36px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What is included in the{" "}
            <span style={{ color: "var(--hero-accent)" }}>24-hour test</span>?
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-4 max-w-2xl text-sm leading-[1.75] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            Your Strong 8K trial includes the same live channel catalogue, VOD library and
            available picture quality options offered to paid customers. Use the full test period
            to explore the categories you would watch regularly.
          </p>
        </FadeIn>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {INCLUDED.map((item, i) => (
            <ScrollReveal key={item.title} direction="up" delay={0.05 * i} once>
              <li
                className="flex gap-3 rounded-xl border p-4 sm:p-5"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "transparent",
                }}
              >
                <span className="mt-0.5 shrink-0" style={{ color: "var(--hero-accent)" }}>
                  –
                </span>
                <div>
                  <p className="text-sm font-bold sm:text-[15px]" style={{ color: "var(--hero-heading)" }}>
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-[1.65]" style={{ color: "var(--feature-body)" }}>
                    {item.body}
                  </p>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <FadeIn delay={0.3}>
          <p
            className="mt-6 text-center text-sm font-semibold sm:text-[15px]"
            style={{ color: "var(--hero-heading)" }}
          >
            A free IPTV trial is most useful when it answers your own questions about
            compatibility, navigation and the content you actually want.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
