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
    id: "how-it-works",
    q: "How does Strong 8K IPTV work?",
    a: "Add the details from your welcome message to a compatible player. Your account then displays the catalogue available to it over your internet connection.",
  },
  {
    id: "firestick",
    q: "Can I install Strong 8K IPTV on a Firestick?",
    a: (
      <>
        The{" "}
        <Link
          href={routes.installationGuide}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Installation Guide
        </Link>{" "}
        has Fire TV steps and the current Strong 8K app code. Use a verified installer or an app
        from the official store.
      </>
    ),
  },
  {
    id: "free-trial",
    q: "Does the service have a free trial?",
    a: "Yes. You can test the service for 24 hours without payment details. Support provides your login and activation time.",
  },
  {
    id: "internet-speed",
    q: "What internet speed do I need?",
    a: "Strong 8K IPTV playback depends on resolution, encoding, your player and network load. Test your own connection; wired Ethernet or stronger Wi-Fi may help a TV with unstable playback. Your welcome message may include an M3U playlist link.",
  },
  {
    id: "devices",
    q: "Can I use more than one device?",
    a: "You can ask about using your login on different supported devices, but the standard plan is for one stream at a time. Request multi-screen terms before playing on two screens together.",
  },
  {
    id: "which-plan",
    q: "Which IPTV subscription is best for me?",
    a: (
      <>
        Start with the trial, compare total cost and choose the duration that suits your household.
        The{" "}
        <Link
          href={routes.subscriptionPlans}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Subscription Plans
        </Link>{" "}
        page has the full plan comparison.
      </>
    ),
  },
  {
    id: "reseller",
    q: "Can I become a reseller?",
    a: (
      <>
        Yes. Visit the{" "}
        <Link
          href={routes.resellerPanel}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          business account page
        </Link>{" "}
        to compare credit packages and request a dashboard demonstration.
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
          Frequently asked questions about{" "}
          <span style={{ color: "var(--hero-accent)" }}>Strong 8K IPTV</span>
        </>
      }
    />
  );
}
