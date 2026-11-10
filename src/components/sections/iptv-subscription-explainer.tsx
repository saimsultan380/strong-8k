"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import {
  whatsappMessages,
  whatsappUrlWithText,
} from "@/lib/site";

const FACTS = [
  { label: "Catalogue", value: "40,000+ live channels and 120,000+ films and series" },
  { label: "Plans", value: "1 month £9.97 · 3 months £17.99 · 6 months £25.97 · 12 months £42.97" },
  { label: "Streams", value: "One active stream per standard account; extra accounts for multiple screens at the same time" },
  { label: "Trial", value: "Free for 24 hours, with no card required" },
  { label: "Picture", value: "SD, HD, Full HD, 4K and up to 8K UHD where supported" },
];

const freeTrialWhatsapp = whatsappUrlWithText(
  whatsappMessages.startFreeTrial,
);

export function IptvSubscriptionExplainer() {
  return (
    <section
      id="what-is-strong-8k"
      className="relative isolate overflow-hidden border-y py-20 md:py-28"
      style={{
        backgroundColor: "var(--hero-base)",
        borderColor: "var(--feature-card-border)",
      }}
    >
      <Container className="relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
        <div>
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.24em]"
              style={{ color: "var(--hero-accent)" }}
            >
              About Strong 8K
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-[48px]"
              style={{ color: "var(--hero-heading)" }}
            >
              What is Strong 8K and how does it work?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="mt-6 max-w-xl text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Strong 8K, also written Strong8K, offers IPTV subscriptions for watching live TV, sport, films and series over the internet in the UK and USA. Choose a plan or trial at strong-8k.co.uk to receive account details and help setting up a compatible player.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.18}>
          <div
            className="rounded-2xl border p-6 sm:p-8 md:p-10"
            style={{ borderColor: "var(--feature-card-border)", backgroundColor: "transparent" }}
          >
            <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
              What’s included with Strong 8K
            </h3>
            <table className="mt-5 w-full text-left text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: "var(--feature-card-border)" }}>
                  <th className="py-3 pr-4 font-semibold" style={{ color: "var(--hero-heading)" }}>
                    Feature
                  </th>
                  <th className="py-3 font-semibold" style={{ color: "var(--hero-heading)" }}>
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {FACTS.map((fact) => (
                  <tr key={fact.label} className="border-b" style={{ borderColor: "var(--feature-card-border)" }}>
                    <th className="py-3 pr-4 align-top font-semibold" style={{ color: "var(--hero-heading)" }}>
                      {fact.label}
                    </th>
                    <td className="py-3 align-top" style={{ color: "var(--hero-muted)" }}>
                      {fact.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a
              href={freeTrialWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm font-bold underline transition-colors hover:opacity-85"
              style={{ color: "var(--hero-accent)" }}
            >
              Start free trial
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
