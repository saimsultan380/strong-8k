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
        White Label IPTV Panel – Sell Under Your Own{" "}
        <span style={{ color: "var(--hero-accent)" }}>Brand</span>
      </>
    ),
    paragraphs: [
      "Your customers should know your name, not your supplier's. With Strong 8K white label branding, every part of the customer experience carries your business identity.",
      "Set your own brand name, run your own offers, and present subscriptions as your own product. Your customers see your brand — the strong IPTV infrastructure behind it stays completely invisible to them.",
    ],
    footer: (
      <>
        White label setup is handled by our team and is typically live within 1–2 days of your
        request. Just{" "}
        <a
          href={WHATSAPP_LINK}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          message us
        </a>{" "}
        after purchase and we&apos;ll configure everything for you.
      </>
    ),
  },
  {
    id: "sub-resellers",
    eyebrow: "Sub-Reseller Network",
    title: (
      <>
        Grow Bigger: Build Your Own{" "}
        <span style={{ color: "var(--hero-accent)" }}>Sub-Reseller Network</span>
      </>
    ),
    paragraphs: [
      "Once your business is established, you don't have to sell only to end customers — you can supply other resellers underneath you.",
      "Create sub-reseller accounts from your own panel, sell them credits at your chosen rate, and earn margin on every credit they spend. The maths adds up quickly: keep just £1 margin per credit, and ten sub-resellers buying 50 credits a month each puts an extra £500 in your pocket monthly — on top of your own direct sales.",
      "Your subscriptions and your sub-reseller network sit in the same dashboard, so there's nothing new to learn as you scale. Ask our team about sub-reseller unlocking when you order.",
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
                  <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                    {card.title}
                  </h2>
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
