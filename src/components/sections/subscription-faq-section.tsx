import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";
import Link from "next/link";
import { routes } from "@/lib/routes";

const SUBSCRIPTION_FAQS: FaqItem[] = [
  {
    id: "cost",
    q: "What does a Strong 8K IPTV subscription cost?",
    a: "Choose one month for £9.99, three months for £17.99, six months for £25.99 or twelve months for £42.99. Each price covers the full selected term.",
  },
  {
    id: "lowest-monthly",
    q: "Which IPTV subscription gives the lowest monthly cost?",
    a: "The twelve-month option works out to about £3.58 per month when paid as a £42.99 total, based on the displayed prices.",
  },
  {
    id: "free-trial",
    q: "Is there a free trial before I pay?",
    a: (
      <>
        Yes. Request a free 24-hour trial through{" "}
        <Link
          href={routes.contactUs}
          className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
          style={{ color: "var(--hero-heading)" }}
        >
          Contact Us
        </Link>{" "}
        or WhatsApp. No card details are required.
      </>
    ),
  },
  {
    id: "sports-vod",
    q: "Are sports and VOD in each plan?",
    a: "Yes. Each duration includes the same 40,000+ channel and 120,000+ VOD catalogues, including the sports packages. There are no separate sports or VOD add-ons.",
  },
  {
    id: "switch",
    q: "Can I switch plans later?",
    a: "Yes. Contact support to move to a longer duration and confirm the new expiry date before paying.",
  },
  {
    id: "renewals",
    q: "Do renewals cost the same?",
    a: "Yes. Existing customers renew at the same discounted prices shown on this page, without an increase after the first term.",
  },
  {
    id: "extra-charges",
    q: "Are there extra service charges?",
    a: "The displayed price includes VAT, activation, updates and support. Multi-screen access is the optional paid extra. A third-party player may charge its own app licence fee.",
  },
  {
    id: "payment-methods",
    q: "Which payment methods are available?",
    a: "Message us on WhatsApp when ordering and our team will confirm the current payment options.",
  },
  {
    id: "apps",
    q: "Which apps can I use?",
    a: "Supported login formats include M3U and Xtream Codes as shown on the cards. Choose a player compatible with your device and operating system; app availability varies by store.",
  },
  {
    id: "multiple-screens",
    q: "Does one plan cover multiple screens?",
    a: "A standard plan has one active stream at a time; ask for multi-screen pricing if simultaneous viewing is needed.",
  },
  {
    id: "refunds",
    q: "Can I request a refund?",
    a: "If the service doesn’t work on your device and Strong 8K support can’t fix it, you get your money back within the first 7 days. Contact us with your device and error details, including whether the problem affects HD, 4K or 8K UHD playback.",
  },
];

export function SubscriptionFaqSection() {
  return (
    <FaqAccordionSection
      faqs={SUBSCRIPTION_FAQS}
      defaultOpenId="cost"
      title={
        <>
          Strong 8K IPTV pricing{" "}
          <span style={{ color: "var(--hero-accent)" }}>FAQs</span>
        </>
      }
    />
  );
}
