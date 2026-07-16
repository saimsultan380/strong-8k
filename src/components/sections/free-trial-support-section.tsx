"use client";

import { MessageCircle, Mail, MessageSquare } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { siteConfig } from "@/lib/site";

const WHATSAPP_LINK = "https://wa.me/447000000000";
const EMAIL = siteConfig.email;

const CONTACT_METHODS = [
  {
    Icon: MessageCircle,
    channel: "WhatsApp",
    href: WHATSAPP_LINK,
    bestFor: "Free trials, subscriptions, setup help, reseller enquiries",
    responseTime: "Minutes, 24/7",
  },
  {
    Icon: Mail,
    channel: "Email",
    href: `mailto:${EMAIL}`,
    bestFor: "Detailed queries, invoices, reseller documentation",
    responseTime: "Within 24 hours",
  },
  {
    Icon: MessageSquare,
    channel: "Live Chat",
    href: WHATSAPP_LINK,
    bestFor: "Real-time help while you're at your TV",
    responseTime: "Minutes, 24/7",
  },
];

export function FreeTrialSupportSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <FadeIn delay={0.05}>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Get in Touch
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
                style={{ color: "var(--hero-heading)" }}
              >
                Ways to Reach{" "}
                <span style={{ color: "var(--hero-accent)" }}>Strong 8K Support</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p
                className="mx-auto mt-6 max-w-[680px] text-sm leading-[1.75] sm:text-[15px]"
                style={{ color: "var(--hero-muted)" }}
              >
                WhatsApp is the fastest route — but however you prefer to reach us, we&apos;re here
                every day:
              </p>
            </FadeIn>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {CONTACT_METHODS.map((method, i) => (
              <ScrollReveal key={method.channel} direction="up" delay={0.06 * i} once>
                <a
                  href={method.href}
                  className="flex h-full flex-col rounded-2xl border p-6 transition-all duration-200 hover:border-[var(--hero-accent)]"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--feature-card-border)",
                  }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: "var(--feature-icon-border)",
                      backgroundColor: "transparent",
                    }}
                  >
                    <method.Icon
                      className="h-5 w-5"
                      style={{ color: "var(--hero-accent)" }}
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3 className="text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                    {method.channel}
                  </h3>

                  <p
                    className="mt-2 flex-1 text-xs leading-[1.6] sm:text-sm"
                    style={{ color: "var(--hero-muted)" }}
                  >
                    {method.bestFor}
                  </p>

                  <div
                    className="mt-4 rounded-lg px-3 py-1.5 text-center text-[11px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--hero-accent) 8%, transparent)",
                      color: "var(--hero-accent)",
                    }}
                  >
                    {method.responseTime}
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.15} once>
            <div
              className="mt-8 hidden overflow-x-auto rounded-2xl border sm:block"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <th
                      className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--hero-heading)" }}
                    >
                      Channel
                    </th>
                    <th
                      className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--hero-heading)" }}
                    >
                      Best For
                    </th>
                    <th
                      className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--hero-accent)" }}
                    >
                      Response Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CONTACT_METHODS.map((method) => (
                    <tr
                      key={method.channel}
                      style={{ borderBottom: "1px solid var(--feature-card-border)" }}
                    >
                      <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>
                        <a
                          href={method.href}
                          className="transition-colors hover:text-[var(--hero-accent)]"
                          style={{ color: "var(--hero-accent)" }}
                        >
                          {method.channel}
                        </a>
                      </td>
                      <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>
                        {method.bestFor}
                      </td>
                      <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>
                        {method.responseTime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} once>
            <div
              className="mt-6 rounded-2xl border p-5 text-center text-sm leading-[1.75] sm:p-6"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
                color: "var(--hero-muted)",
              }}
            >
              <strong style={{ color: "var(--hero-heading)" }}>
                Existing Strong 8K customer with a technical issue?
              </strong>{" "}
              Message WhatsApp with your username and we&apos;ll usually have you streaming again
              within minutes.
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
