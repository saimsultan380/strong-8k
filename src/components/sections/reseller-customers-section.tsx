"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const BENEFITS = [
  "40,000+ live channels covering sports, movies, news, entertainment and international content",
  "120,000+ movies and series on demand, updated daily",
  "Picture quality up to 8K UHD with Anti-Freeze streaming technology",
  "99.9% uptime, engineered for peak evenings and big live events",
  "Works on every device — Firestick, Smart TVs, Android, iPhone, PC and MAG boxes",
  "All login formats — M3U, Xtream Codes, MAG and Enigma2",
];

export function ResellerCustomersSection() {
  return (
    <section
      id="what-customers-get"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Product Quality
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            What Your Customers Get with{" "}
            <span style={{ color: "var(--hero-accent)" }}>Strong 8K</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            You&apos;re only as good as the product you sell — and this one sells itself:
          </p>
        </FadeIn>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {BENEFITS.map((item, i) => (
            <ScrollReveal key={item} direction="up" delay={0.04 * i} once>
              <li
                className="flex gap-3 rounded-xl border p-4 text-sm leading-[1.7] sm:text-[15px]"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "transparent",
                  color: "var(--feature-body)",
                }}
              >
                <span style={{ color: "var(--hero-accent)" }}>–</span>
                <span>{item}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <FadeIn delay={0.3}>
          <p
            className="mt-8 max-w-3xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            It&apos;s the same service sold on our{" "}
            <Link
              href="/subscription-plans/"
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Subscription Plans
            </Link>{" "}
            — so you can check exactly what your customers will experience, or test it yourself with
            a{" "}
            <Link
              href="/contact-us/"
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              free 24-hour trial
            </Link>{" "}
            before buying your panel.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
