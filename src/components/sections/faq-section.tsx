"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { cn } from "@/lib/utils";

export type FaqItem = {
  id: string;
  q: string;
  a: ReactNode;
};

const HOMEPAGE_FAQS: FaqItem[] = [
  {
    id: "what-is-strong-8k",
    q: "What is Strong 8K IPTV and how does it work?",
    a: "Strong 8K IPTV is a subscription television service that streams live channels and on-demand content over your internet connection. After ordering, you receive login credentials (M3U or Xtream Codes) to enter into any compatible IPTV app. Once logged in, you get instant access to 40,000+ live channels and 120,000+ movies and series.",
  },
  {
    id: "firestick",
    q: "Does Strong 8K IPTV work on Firestick?",
    a: (
      <>
        Yes. The Amazon Firestick is one of the most popular devices among our UK customers.
        Install an IPTV player such as IPTV Smarters or TiviMate, enter your Strong 8K credentials,
        and you&apos;re watching within minutes. A full Firestick walkthrough is available in our{" "}
        <Link
          href="/installation-guide/"
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Installation Guide
        </Link>
        .
      </>
    ),
  },
  {
    id: "internet-speed",
    q: "What internet speed do I need for Strong 8K IPTV?",
    a: "For HD streaming, 10–15 Mbps is enough. For 4K we recommend 25 Mbps or higher, and for the best 8K UHD experience, 50 Mbps+. Thanks to HEVC/H.265 compression, Strong 8K uses less bandwidth than most services at the same quality level.",
  },
  {
    id: "free-trial",
    q: "Is there a free trial available?",
    a: "Yes — every new customer can claim a free 24-hour trial with full access to all channels, VOD, and picture quality options. No card details required. Simply message us on WhatsApp to activate it.",
  },
  {
    id: "activation",
    q: "How fast is activation after payment?",
    a: "Activation is usually instant. Your login details are sent by WhatsApp or email within minutes of your order being confirmed — at most, within one hour during exceptionally busy periods.",
  },
  {
    id: "devices",
    q: "How many devices can I use with one subscription?",
    a: "A standard Strong 8K subscription covers one screen at a time. You can install the service on multiple devices and switch between them freely. If you'd like to watch on two or more screens simultaneously, multi-screen plans are available at a small extra cost.",
  },
  {
    id: "players",
    q: "Which IPTV players are compatible with Strong 8K?",
    a: "All major players. Strong 8K supports M3U, Xtream Codes, MAG, and Enigma2 formats, which means it works with IPTV Smarters Pro, TiviMate, IBO Player, Smart IPTV, GSE, XCIPTV, Perfect Player, VLC, and many more.",
  },
  {
    id: "vs-netflix",
    q: "What's the difference between Strong 8K IPTV and Netflix?",
    a: "Netflix is a video-on-demand library only. Strong 8K gives you both: 40,000+ live TV channels — including live sports and news — plus an on-demand library of 120,000+ movies and series that's larger than any single streaming app.",
  },
  {
    id: "reseller",
    q: "Can I become a Strong 8K reseller?",
    a: (
      <>
        Yes. If you&apos;d like to sell IPTV subscriptions under your own margin, our reseller
        panel gives you credits, instant account creation, and full pricing control. Learn more on
        our{" "}
        <Link
          href="/reseller-panel/"
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Reseller Panel
        </Link>{" "}
        page.
      </>
    ),
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  delay,
  compact = false,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
  compact?: boolean;
}) {
  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div
        className="overflow-hidden rounded-2xl border transition-all duration-200"
        style={{
          backgroundColor: "transparent",
          borderColor: isOpen
            ? "var(--hero-accent)"
            : "var(--feature-card-border)",
        }}
      >
        <button
          onClick={onToggle}
          className={cn(
            "flex w-full items-center justify-between gap-3 text-left",
            compact ? "px-4 py-4" : "px-6 py-5 md:px-7"
          )}
          aria-expanded={isOpen}
        >
          <h3
            className={cn(
              "font-bold leading-snug",
              compact ? "text-sm" : "text-[15px] md:text-base"
            )}
            style={{ color: "var(--hero-heading)" }}
          >
            {faq.q}
          </h3>
          <span
            className={cn(
              "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              isOpen ? "rotate-180" : "rotate-0"
            )}
            style={{
              borderColor: isOpen
                ? "var(--hero-accent)"
                : "var(--feature-card-border)",
              backgroundColor: isOpen
                ? "color-mix(in srgb, var(--hero-accent) 12%, transparent)"
                : "transparent",
            }}
          >
            <ChevronDown
              className="h-4 w-4 transition-colors duration-200"
              style={{
                color: isOpen ? "var(--hero-accent)" : "var(--feature-body)",
              }}
              strokeWidth={2.5}
            />
          </span>
        </button>

        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "border-t text-sm leading-[1.8]",
                compact ? "px-4 pb-4 pt-3" : "px-6 pb-6 pt-4 md:px-7 md:pb-7"
              )}
              style={{
                borderColor:
                  "color-mix(in srgb, var(--hero-accent) 20%, transparent)",
                color: "var(--feature-body)",
              }}
            >
              {faq.a}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function FaqAccordionList({
  faqs,
  defaultOpenId,
  compact = false,
}: {
  faqs: FaqItem[];
  defaultOpenId?: string;
  compact?: boolean;
}) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? faqs[0]?.id ?? null
  );

  const toggle = (faqId: string) =>
    setOpenId((prev) => (prev === faqId ? null : faqId));

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          isOpen={openId === faq.id}
          onToggle={() => toggle(faq.id)}
          delay={0.04 * Math.min(i, 4)}
          compact={compact}
        />
      ))}
    </div>
  );
}

type FaqSectionProps = {
  faqs: FaqItem[];
  defaultOpenId?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  id?: string;
};

export function FaqAccordionSection({
  faqs,
  defaultOpenId,
  eyebrow = "FAQ",
  title,
  description = "Clear answers about setup, devices, streaming quality, activation, and your subscription.",
  id = "faq",
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className="relative py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 0% 50%, var(--hero-blush-left) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 100% 50%, var(--hero-blush-right) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-16">
          <div className="self-start lg:pt-1">
            <FadeIn delay={0.05}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-brand" />
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: "var(--hero-accent)" }}
                >
                  {eyebrow}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
                style={{ color: "var(--hero-heading)" }}
              >
                {title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 max-w-sm text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                {description}
              </p>
            </FadeIn>
          </div>

          <div className="min-w-0">
            <FaqAccordionList faqs={faqs} defaultOpenId={defaultOpenId} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FaqSection() {
  return (
    <FaqAccordionSection
      faqs={HOMEPAGE_FAQS}
      defaultOpenId="what-is-strong-8k"
      title={
        <>
          Frequently Asked Questions About{" "}
          <span style={{ color: "var(--hero-accent)" }}>Strong 8K IPTV</span>
        </>
      }
    />
  );
}
