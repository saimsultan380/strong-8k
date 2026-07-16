"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

const BENEFITS = [
  "No dish, aerial, or engineer visit",
  "Works with the IPTV app you already use",
  "Login details delivered within minutes",
];

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
              What is{" "}
              <span style={{ color: "var(--hero-accent)" }}>Strong 8K IPTV</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="mt-6 max-w-xl text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Strong 8K IPTV is a premium internet-based television service built for viewers in
              the UK who want more channels, sharper picture quality, and fewer interruptions than
              traditional TV can offer.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul className="mt-8 space-y-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm">
                  <span
                    className="mt-[9px] h-px w-3 shrink-0"
                    style={{ background: "var(--grad-brand)" }}
                    aria-hidden
                  />
                  <span style={{ color: "var(--hero-heading)" }}>{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.18}>
          <div
            className="rounded-2xl border p-6 sm:p-8 md:p-10"
            style={{ borderColor: "var(--feature-card-border)", backgroundColor: "transparent" }}
          >
            <div className="grid gap-4 border-b pb-6 sm:grid-cols-3" style={{ borderColor: "var(--feature-card-border)" }}>
              {[
                { value: "40K+", label: "Live channels" },
                { value: "8K", label: "Ultra HD quality" },
                { value: "5 min", label: "Average setup" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black text-gradient-brand">{value}</p>
                  <p className="mt-1 text-xs" style={{ color: "var(--hero-muted)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-5">
              <p
                className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
                style={{ color: "var(--hero-muted)" }}
              >
                Instead of a dish or aerial, Strong8K delivers live television and on-demand content
                straight through your internet connection. One subscription unlocks live sports,
                films, series, documentaries, news, and kids&apos; entertainment — in resolutions
                ranging from HD all the way up to 8K UHD.
              </p>
              <p
                className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
                style={{ color: "var(--hero-muted)" }}
              >
                Everything runs through the IPTV app of your choice. You receive your login details
                within minutes of ordering, enter them into your preferred player, and start
                watching. No engineer visit, no contract, no hardware to buy.
              </p>
            </div>
            <Link
              href="/free-trial"
              className="mt-8 inline-flex text-sm font-bold underline transition-colors hover:opacity-85"
              style={{ color: "var(--hero-accent)" }}
            >
              Test it free for 24 hours →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
