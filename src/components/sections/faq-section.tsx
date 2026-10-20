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
  {
    id: "confirm-website",
    q: "How do I confirm I’m on the right website?",
    a: "Our brand is Strong 8K, also written Strong8K. If you found us by searching for Strng8K, check that you are on strong-8k.co.uk. Use the contact details shown here to confirm your Strong 8K IPTV subscription or account.",
  },
  {
    id: "identify-provider",
    q: "How do I identify the right provider?",
    a: "Check the website address, seller details and support contact before paying. Names such as Strong IPTV 8K, IPTV Strong 8K or 8K Strong do not by themselves identify the supplier. This website describes an independent service provider; matching names or logos alone do not establish an official relationship.",
  },
  {
    id: "buy-subscription",
    q: "Where can I buy a subscription and get an account?",
    a: "Compare the current Strong 8K IPTV subscription options in the Pricing section, then use the existing contact or order buttons to confirm your chosen plan. Check the total price, number of accounts, subscription length and device compatibility. Your account details are provided for use in a compatible player.",
  },
  {
    id: "subscription-lengths",
    q: "Which subscription lengths can I choose?",
    a: "Strong 8K subscription options are 1, 3, 6 or 12 months. A 12-month plan covers one year. Choose the account count as well as the duration, and confirm the price, activation date and renewal arrangements before ordering.",
  },
  {
    id: "one-month-private",
    q: "Does a one-month private account work in every country?",
    a: "A one-month viewing plan is available, and a standard account permits one active stream at a time. A listing described as a private account or global subscription does not guarantee use in every country. Confirm your location, device, login method and permitted connections before paying.",
  },
  {
    id: "viewing-vs-reseller",
    q: "How is a viewing account different from a reseller panel?",
    a: "A Strong 8K reseller panel lets approved resellers activate and renew customer accounts using purchased credits. The dashboard shows account status, expiry dates and credit balance. Reseller access is a wholesale service with its own terms, separate from a personal viewing subscription. Request a demonstration before choosing a package.",
  },
  {
    id: "starter-credits",
    q: "How many credits are included in the starter package?",
    a: "The published Strong 8K panel Starter package contains 120 credits; Growth and Pro contain 240 and 360. One credit covers one month of one standard customer account. Ask the reseller team for the current cash price, trial allowance and any conditions for extra accounts, branding or sub-reseller access before ordering.",
  },
  {
    id: "channel-catalogue",
    q: "How can I check the current channel list and on-demand catalogue?",
    a: "Ask support about the specific channels, languages, films or series you want, then check them during your trial. The Strong 8K channel list and VOD selection can change. A catalogue total does not confirm that a particular channel, programme or title is currently available to your account.",
  },
  {
    id: "uk-regional-sports",
    q: "How do I check UK regional channels and sports package pricing?",
    a: "Give support the exact channel, region and programme or event you want to watch. Check current account prices in the Pricing section and test relevant channels during your trial. Availability can depend on the account, location and applicable rights; a sports category is not a guarantee of every fixture.",
  },
  {
    id: "adult-content",
    q: "Does the subscription include adult content?",
    a: "No. Strong 8K IPTV does not provide adult channels or adult on-demand content.",
  },
  {
    id: "m3u-xtream",
    q: "How do I use an M3U link or Xtream Codes login?",
    a: "Follow the existing installation guide for your device. An M3U link is a playlist address; Xtream Codes uses a server URL, username and password. Enter the login format supplied with your account into a compatible player. Keep server addresses, account links and passwords private when asking for help.",
  },
  {
    id: "lg-firestick-player",
    q: "Which player can I use on an LG TV or Firestick?",
    a: "Check the existing installation guide for your exact device model and operating system. Compatible options differ across LG and Samsung TVs, Firestick, Android, Apple devices and computers. Check the app publisher, login format and any separate app fee before installing. A player alone does not include a viewing subscription.",
  },
  {
    id: "playback-stops",
    q: "What should I check if playback stops?",
    a: "If Strong 8K is not working, first check that your trial or subscription is active, the login details are correct and another device is not using the same single-stream account. Restart the player and connection, then contact support with your device, app and error message. A playback fault alone does not confirm a service-wide outage.",
  },
  {
    id: "vpn-setup",
    q: "Do I need a VPN for setup?",
    a: "A VPN is not required for the setup described in the installation guide. If you choose one for privacy, check its compatibility with your player and account terms. A VPN does not add channels or guarantee playback quality. Ask support about connection problems using your actual device and network.",
  },
  {
    id: "marketplace-listing",
    q: "Can I identify the supplier from a marketplace listing?",
    a: "A listing on Z2U, G2G, G2A or U7BUY with a matching Strong 8K label does not establish the supplier, support route or account terms. Check each listing for duration, country, screens and refund conditions. Confirm with us before assuming that a marketplace order is supplied or supported through this website.",
  },
  {
    id: "reviews-reddit",
    q: "How should I assess reviews or Reddit discussions?",
    a: "When reading Strong 8K IPTV reviews or Reddit discussions, check the date, seller, country, device and subscription type. Experiences with one seller or account may not describe another. Compare the stated terms and use a trial on your own setup before deciding which provider suits you.",
  },
  {
    id: "compare-providers",
    q: "How should I compare different providers?",
    a: "When comparing Strong 8K with Ultra 8K or TREX, check the current catalogue, source resolutions, supported devices, simultaneous streams, total price and support arrangements offered by each seller. Test the programmes you actually watch. A name or advertised channel total is not enough to establish which option is best for your household.",
  },
  {
    id: "invoice-receipt",
    q: "Can I request an invoice or receipt?",
    a: "For a Strong 8K IPTV invoice or receipt, contact support before paying to confirm which document is available for your payment method. Include any business-name or billing-detail requirements. Confirm the details that can be supplied before relying on an invoice for your records.",
  },
  {
    id: "business-installation",
    q: "Can I enquire about a business installation?",
    a: "For a corporate IPTV installation enquiry, send support the premises type, country, number of displays and intended use. Request confirmation of availability, permitted use, installation work and the quotation before making plans. A standard household subscription should not be assumed to cover a commercial installation.",
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
  initialVisible,
}: {
  faqs: FaqItem[];
  defaultOpenId?: string;
  compact?: boolean;
  /** When set, show this many FAQs first with a Show more control. All answers stay in the DOM. */
  initialVisible?: number;
}) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? faqs[0]?.id ?? null
  );
  const [showAll, setShowAll] = useState(false);
  const hasMore =
    typeof initialVisible === "number" &&
    initialVisible > 0 &&
    faqs.length > initialVisible;

  const toggle = (faqId: string) =>
    setOpenId((prev) => (prev === faqId ? null : faqId));

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const concealed = hasMore && !showAll && i >= initialVisible;
        return (
          <div
            key={faq.id}
            className={cn(concealed && "hidden")}
            aria-hidden={concealed || undefined}
          >
            <AccordionItem
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
              delay={0.04 * Math.min(i, 4)}
              compact={compact}
            />
          </div>
        );
      })}

      {hasMore ? (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)]"
            style={{
              borderColor: "var(--feature-card-border)",
              color: "var(--hero-heading)",
              backgroundColor: "transparent",
            }}
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : "Show more"}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                showAll && "rotate-180",
              )}
              strokeWidth={2.5}
              aria-hidden
            />
          </button>
        </div>
      ) : null}
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
  initialVisible?: number;
};

export function FaqAccordionSection({
  faqs,
  defaultOpenId,
  eyebrow = "FAQ",
  title,
  description = "Clear answers about setup, devices, streaming quality, activation, and your subscription.",
  id = "faq",
  initialVisible,
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
            <FaqAccordionList
              faqs={faqs}
              defaultOpenId={defaultOpenId}
              initialVisible={initialVisible}
            />
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
      defaultOpenId="what-is"
      initialVisible={7}
      title={
        <>
          Strong 8K IPTV{" "}
          <span style={{ color: "var(--hero-accent)" }}>Questions Answered</span>
        </>
      }
    />
  );
}
