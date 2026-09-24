"use client";

import { MonitorPlay, ShieldCheck, Server, Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const POINTS = [
  {
    id: "trial",
    icon: MonitorPlay,
    title: "A trial on your own connection",
    description:
      "Try Strong 8K on your Firestick or Smart TV at the times you usually watch. Browse favourite categories, check the guide and see how the player feels. Your 24-hour trial needs no card, and our team provides the activation details.",
  },
  {
    id: "picture",
    icon: ShieldCheck,
    title: "Picture options for different devices",
    description:
      "Strong 8K supports SD, HD, FHD, 4K and 8K UHD viewing options. Choose the available format that suits your screen and connection. Native 8K UHD playback requires a suitable source stream, player and display.",
  },
  {
    id: "support-viewing",
    icon: Server,
    title: "Support for everyday viewing",
    description:
      "Strong 8K includes Anti-Freeze technology and 99.9% server uptime in every plan. If a stream fails, tell us the channel, time and device so we can investigate the specific problem.",
  },
  {
    id: "first-login",
    icon: Headphones,
    title: "Help with the first login",
    description:
      "If the Strong 8K IPTV playlist will not load, send support your app name, device model and error message. Our team provides 24/7 technical support through WhatsApp. Keep your password private when sharing screenshots.",
  },
];

export function WhyBestIptvSection() {
  return (
    <section
      id="why-choose"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end md:gap-12">
          <div>
            <FadeIn delay={0.05}>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Why Choose Us
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
                style={{ color: "var(--hero-heading)" }}
              >
                Why UK customers consider{" "}
                <span style={{ color: "var(--hero-accent)" }}>Strong 8K IPTV</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p
              className="text-[15px] leading-[1.75] sm:text-base md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              A trial on your own connection, picture options for different devices, support for
              everyday viewing, and help with the first login.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <ScrollReveal key={point.id} direction="up" delay={0.05 * i} once className="h-full">
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 hover:border-[var(--hero-accent)] md:p-8"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "var(--feature-card-border)",
                  }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "var(--hero-accent)" }}
                    strokeWidth={1.75}
                  />
                  <h3
                    className="mt-5 text-lg font-bold leading-snug md:text-xl"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {point.title}
                  </h3>
                  <p
                    className="mt-3 text-[13px] leading-[1.7] sm:text-sm"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
