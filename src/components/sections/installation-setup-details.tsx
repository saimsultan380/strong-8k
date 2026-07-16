"use client";

import { KeyRound, Link2, Hash } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const SETUP_DETAILS = [
  {
    id: "login",
    Icon: KeyRound,
    heading: "IPTV Login — Username and Password",
    body: "Your IPTV login is the username and password issued when your subscription activates. These are entered directly into your chosen app to access your channel library — no separate account creation needed.",
  },
  {
    id: "portal",
    Icon: Link2,
    heading: "IPTV Portal URL and IPTV Server URL",
    body: "The Portal URL (also called the Server URL) is the web address your IPTV app connects to in order to load your channels. It is provided alongside your username and password and only needs to be entered once during setup.",
  },
  {
    id: "code",
    Icon: Hash,
    heading: "IPTV Setup Code and IPTV Device ID",
    body: "Some apps — particularly Downloader by AFTVnews — use a short numeric setup code instead of a manual download link, making installation faster. A Device ID is a unique identifier some Smart TV apps require so our team can link your subscription to that specific television.",
  },
];

function DetailCard({
  Icon,
  heading,
  body,
  delay = 0,
}: {
  Icon: React.ElementType;
  heading: string;
  body: string;
  delay?: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay} once>
      <div
        className="flex h-full flex-col gap-4 rounded-2xl border p-6 md:p-7"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full border"
          style={{
            borderColor: "var(--feature-icon-border)",
          }}
        >
          <Icon
            className="h-5 w-5"
            style={{ color: "var(--hero-accent)" }}
            strokeWidth={1.75}
          />
        </div>
        <div>
          <h3
            className="mb-2.5 text-[15px] font-bold leading-snug md:text-base"
            style={{ color: "var(--hero-heading)" }}
          >
            {heading}
          </h3>
          <p
            className="text-sm leading-[1.7]"
            style={{ color: "var(--feature-body)" }}
          >
            {body}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function InstallationSetupDetails() {
  return (
    <section
      id="setup-details"
      className="relative isolate overflow-hidden py-20 md:py-28"
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
        <FadeIn delay={0.05}>
          <div className="mb-5 text-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Setup Terms
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Understanding Your{" "}
            <span style={{ color: "var(--hero-accent)" }}>IPTV Setup Details</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[600px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            A few terms come up across every device. Here is exactly what each
            one means.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {SETUP_DETAILS.map((item, i) => (
            <DetailCard
              key={item.id}
              Icon={item.Icon}
              heading={item.heading}
              body={item.body}
              delay={0.06 * i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
