"use client";

import {
  Tv,
  MonitorPlay,
  Smartphone,
  TabletSmartphone,
  Monitor,
  Box,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const DEVICES = [
  {
    id: "smart-tvs",
    icon: Tv,
    title: "Smart TVs (Samsung, LG, Android TV)",
    description: "Watch directly on your Smart TV with compatible IPTV apps.",
  },
  {
    id: "firestick",
    icon: MonitorPlay,
    title: "Amazon Firestick & Fire TV",
    description: "One of the most popular ways UK viewers enjoy Strong 8K IPTV.",
  },
  {
    id: "android",
    icon: Smartphone,
    title: "Android phones, tablets & TV boxes",
    description: "Full support for Android mobiles, tablets, and set-top boxes.",
  },
  {
    id: "apple",
    icon: TabletSmartphone,
    title: "iPhone & iPad",
    description: "Stream on the go or on the couch with your Apple devices.",
  },
  {
    id: "desktop",
    icon: Monitor,
    title: "Windows PC & Mac",
    description: "Use VLC, browser players, or desktop IPTV apps on your computer.",
  },
  {
    id: "mag",
    icon: Box,
    title: "MAG boxes & Enigma2 receivers",
    description: "Dedicated hardware support for MAG and Enigma2 setups.",
  },
  {
    id: "browsers",
    icon: Globe,
    title: "Web browsers (Chrome, Firefox)",
    description: "Watch through your browser when an app isn't available.",
  },
];

export function FirestickCompatibilitySection() {
  return (
    <section
      id="device-compatibility"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
          <div>
            <FadeIn delay={0.05}>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Device Support
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[44px]"
                style={{ color: "var(--hero-heading)" }}
              >
                Watch Strong 8K IPTV on{" "}
                <span style={{ color: "var(--hero-accent)" }}>Any Device</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p
              className="text-[15px] leading-[1.75] sm:text-base md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              Your subscription isn&apos;t locked to one screen. Strong 8K IPTV works out of the box
              on every popular device in the UK.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEVICES.map((device, i) => {
            const Icon = device.icon;
            return (
              <ScrollReveal
                key={device.id}
                direction="up"
                delay={0.05 * i}
                once
                className={i === DEVICES.length - 1 ? "h-full sm:col-span-2 lg:col-span-1" : "h-full"}
              >
                <div
                  className="flex h-full flex-col rounded-2xl border p-5 transition-colors duration-300 hover:border-[var(--hero-accent)] md:p-6"
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
                    className="mt-4 text-[15px] font-bold leading-snug"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {device.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-[1.65]"
                    style={{ color: "var(--feature-body)" }}
                  >
                    {device.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <FadeIn delay={0.35}>
          <p
            className="mt-10 text-center text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            Switching devices later? No problem — your login works across all of them. Setup
            instructions are in our{" "}
            <Link
              href="/installation-guide"
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Installation Guide
            </Link>
            .
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
