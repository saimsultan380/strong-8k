"use client";

import {
  CheckCircle2,
  ArrowRight,
  Tv2,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const DEVICES_TABLE = [
  { device: "Firestick / Fire TV", setupTime: "Under 10 minutes" },
  { device: "Android TV Box", setupTime: "Under 10 minutes" },
  { device: "Samsung Smart TV", setupTime: "Under 15 minutes" },
  { device: "LG Smart TV", setupTime: "Under 15 minutes" },
  { device: "Apple TV", setupTime: "Under 10 minutes" },
  { device: "iPhone / iPad", setupTime: "Under 5 minutes" },
  { device: "Android Phone / Tablet", setupTime: "Under 5 minutes" },
  { device: "Windows PC / Laptop", setupTime: "Under 10 minutes" },
  { device: "Mac / MacBook", setupTime: "Under 10 minutes" },
  { device: "MAG Box / Formuler", setupTime: "Plug and play" },
];

const DEVICE_DETAILS = [
  {
    id: "firestick",
    Icon: Tv2,
    heading: "IPTV on Firestick — Fire TV Stick Setup in Minutes",
    body: "The most popular device for IPTV subscriptions in the UK. Install a compatible app, enter your credentials, and your full channel library loads. Step-by-step IPTV Firestick guide available.",
  },
  {
    id: "smarttv",
    Icon: Monitor,
    heading: "IPTV on Samsung and LG Smart TV",
    body: "Install through Smart Hub on Samsung or the LG Content Store on LG. No external box needed — your IPTV subscription runs natively on the television.",
  },
  {
    id: "ios",
    Icon: Smartphone,
    heading: "IPTV on iPhone, iPad and Apple TV",
    body: "Full iOS support through the App Store. Apple TV users get the same experience on the big screen. Setup takes under five minutes.",
  },
  {
    id: "android",
    Icon: Tablet,
    heading: "IPTV on Android TV, Android Box and MAG Box",
    body: "Full flexibility across Android-based devices and plug-and-play compatibility on MAG and Formuler boxes.",
  },
  {
    id: "desktop",
    Icon: Laptop,
    heading: "IPTV on Windows PC and Mac",
    body: "Free desktop apps for both Windows PC and MacBook — full channel library on your laptop or desktop screen.",
  },
];

function DeviceDetailCard({
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
        className="flex h-full gap-4 rounded-2xl border p-6 md:gap-5 md:p-7"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border"
          style={{
            backgroundColor: "var(--feature-icon-bg)",
            borderColor: "var(--feature-icon-border)",
            boxShadow: "0 0 16px rgba(239, 35, 60, 0.12)",
          }}
        >
          <Icon
            className="h-5 w-5"
            style={{ color: "var(--hero-accent)" }}
            strokeWidth={1.75}
          />
        </div>
        <div className="min-w-0 flex-1">
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

export function SubscriptionDevicesSection() {
  return (
    <section
      id="subscription-devices"
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
              Device Compatibility
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="mx-auto max-w-3xl text-center text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Your IPTV Subscription Works on{" "}
            <span style={{ color: "var(--hero-accent)" }}>Every Device</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="mx-auto mt-6 max-w-[560px] text-center text-sm leading-[1.75] sm:text-[15px] md:text-base"
            style={{ color: "var(--hero-muted)" }}
          >
            No new hardware needed. Set up once, watch on the screens you already
            own.
          </p>
        </FadeIn>

        <ScrollReveal direction="up" delay={0.1} once>
          <div
            className="mt-12 overflow-hidden rounded-2xl border"
            style={{
              backgroundColor: "var(--feature-card-bg)",
              borderColor: "var(--feature-card-border)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            <div
              className="grid grid-cols-[1fr_auto_auto] gap-2 border-b px-4 py-3 sm:grid-cols-[1fr_100px_140px] sm:gap-4 sm:px-6 sm:py-4"
              style={{ borderColor: "var(--feature-card-border)" }}
            >
              {["Device", "Compatible", "Setup Time"].map((col, i) => (
                <span
                  key={col}
                  className={`text-[10px] font-bold uppercase tracking-wider sm:text-sm ${
                    i === 2 ? "text-right" : i === 1 ? "text-center" : ""
                  }`}
                  style={{ color: "var(--hero-accent)" }}
                >
                  {col}
                </span>
              ))}
            </div>

            {DEVICES_TABLE.map((row, i) => (
              <div
                key={row.device}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-2 px-4 py-3 sm:grid-cols-[1fr_100px_140px] sm:gap-4 sm:px-6 sm:py-3.5"
                style={{
                  borderTop: i === 0 ? "none" : `1px solid var(--hero-divider)`,
                }}
              >
                <span
                  className="text-xs leading-tight sm:text-sm"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {row.device}
                </span>
                <div className="flex justify-center">
                  <CheckCircle2
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    style={{ color: "var(--hero-accent)" }}
                    strokeWidth={2}
                  />
                </div>
                <span
                  className="text-right text-xs sm:text-sm"
                  style={{ color: "var(--feature-body)" }}
                >
                  {row.setupTime}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">
          {DEVICE_DETAILS.map((item, i) => (
            <DeviceDetailCard
              key={item.id}
              Icon={item.Icon}
              heading={item.heading}
              body={item.body}
              delay={0.06 * (i % 3)}
            />
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.1} once>
          <div className="mt-10 flex justify-center md:mt-12">
            <a
              href="#free-trial"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
              }}
            >
              Get Started on Your Device
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
