"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const WHATSAPP_LINK = "https://wa.me/447401921250";

const CARDS = [
  {
    id: "white-label",
    eyebrow: "White Label",
    title: (
      <>
        White label IPTV{" "}
        <span style={{ color: "var(--hero-accent)" }}>branding</span>
      </>
    ),
    paragraphs: [
      "Branding options may need approval and can have an extra cost. Contact support before you promise a white-label setup to customers.",
      "An IPTV reseller can keep a consistent brand across customer messages and renewal reminders while using the panel to manage accounts.",
    ],
    footer: (
      <>
        Contact us about the available presentation, setup requirements and delivery time. Just{" "}
        <a
          href={WHATSAPP_LINK}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          message us
        </a>{" "}
        to discuss branding options.
      </>
    ),
  },
  {
    id: "sub-resellers",
    eyebrow: "Sub-Reseller Network",
    title: (
      <>
        Sub-resellers and{" "}
        <span style={{ color: "var(--hero-accent)" }}>network accounts</span>
      </>
    ),
    paragraphs: [
      "Sub-reseller access is not included automatically. Ask support about eligibility, credit allocation and any extra charge before you add another seller.",
    ],
  },
] as const;

export function ResellerWhiteLabelSection() {
  return (
    <section
      id="white-label"
      className="relative py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <h2
            className="mb-8 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Branding and{" "}
            <span style={{ color: "var(--hero-accent)" }}>Sub-Reseller Options</span>
          </h2>
        </FadeIn>
        <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.id} direction="up" delay={0.06 * i} once className="h-full">
              <article
                id={card.id === "sub-resellers" ? "sub-resellers" : undefined}
                className="flex h-full flex-col rounded-2xl border p-6 sm:p-8"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <FadeIn delay={0.05}>
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: "var(--hero-accent)" }}
                  >
                    {card.eyebrow}
                  </span>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                    {card.title}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.15}>
                  <div className="mt-6 flex flex-1 flex-col gap-4 text-sm leading-[1.8] sm:text-[15px]">
                    {card.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)} style={{ color: "var(--hero-muted)" }}>
                        {paragraph}
                      </p>
                    ))}
                    {"footer" in card && card.footer ? (
                      <p style={{ color: "var(--hero-muted)" }}>{card.footer}</p>
                    ) : null}
                  </div>
                </FadeIn>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
