"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/routes";

export type FaqItem = {
  id: string;
  q: string;
  a: ReactNode;
};

const HOMEPAGE_FAQS: FaqItem[] = [
  {
    id: "what-is",
    q: "What is Strong 8K IPTV?",
    a: "Strong 8K IPTV is a subscription for live television and on-demand films and series, played through a compatible app on your own device.",
  },
  {
    id: "devices",
    q: "Which devices can I use?",
    a: (
      <>
        Supported setups include Smart TVs, Firestick, Android, iPhone, iPad, Windows and Mac,
        when a compatible player is available. See the{" "}
        <Link
          href={routes.installationGuide}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          installation guide
        </Link>{" "}
        for the steps that match your device.
      </>
    ),
  },
  {
    id: "8k",
    q: "Does an 8K IPTV subscription make every channel 8K?",
    a: "No. Resolution depends on the source stream and the full playback setup: the player, the screen and the connection. Up to 8K UHD is available only on supported content.",
  },
  {
    id: "more-devices",
    q: "Can I watch on more than one device?",
    a: (
      <>
        One account allows one active stream. You can switch that login between supported devices
        at different times. For simultaneous streams, choose extra accounts on the{" "}
        <Link
          href={routes.subscriptionPlans}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Pricing
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    id: "trial",
    q: "Can I test the service before subscribing?",
    a: "Yes. Request a free 24-hour trial. No card details are required, and the trial ends without an automatic charge.",
  },
  {
    id: "support",
    q: "How do I get technical support?",
    a: (
      <>
        Message the team on WhatsApp or use the{" "}
        <Link
          href={routes.contactUs}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          contact page
        </Link>
        . Include your device model, app name and the message on screen. Support continues
        throughout an active subscription.
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
          Strong 8K IPTV{" "}
          <span style={{ color: "var(--hero-accent)" }}>Questions Answered</span>
        </>
      }
    />
  );
}
