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
import { routes } from "@/lib/routes";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";

const DEVICES = [
  {
    id: "smart-tvs",
    icon: Tv,
    title: "Smart TVs (Samsung, LG, Android TV)",
    description:
      "Smart TV owners can use supported Samsung, LG and Android TV players.",
  },
  {
    id: "firestick",
    icon: MonitorPlay,
    title: "Firestick and Fire TV",
    description:
      "Firestick and Fire TV customers can follow the Android-based steps in our device setup page.",
  },
  {
    id: "android",
    icon: Smartphone,
    title: "Android phones and tablets",
    description:
      "Android phones and tablets have a different login path from television apps.",
  },
  {
    id: "apple",
    icon: TabletSmartphone,
    title: "iPhone and iPad",
    description:
      "iPhone and iPad have different login paths from Android and Smart TV players.",
  },
  {
    id: "desktop",
    icon: Monitor,
    title: "Windows PCs and Macs",
    description:
      "Windows PCs and Macs have different login paths. Strong 8K browser viewing depends on the player and account supplied.",
  },
  {
    id: "mag",
    icon: Box,
    title: "MAG boxes and Enigma2 devices",
    description:
      "MAG boxes and Enigma2 devices have different login paths.",
  },
  {
    id: "browsers",
    icon: Globe,
    title: "Browser viewing",
    description:
      "Strong 8K browser viewing depends on the player and account supplied.",
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
                Watch on Supported TVs,{" "}
                <span style={{ color: "var(--hero-accent)" }}>Phones and Computers</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p
              className="text-[15px] leading-[1.75] sm:text-base md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              Smart TV owners can use supported Samsung, LG and Android TV players. Firestick and
              Fire TV customers can follow the Android-based steps in our device setup page.
              Android phones and tablets, iPhone and iPad, Windows PCs, Macs, MAG boxes and
              Enigma2 devices have different login paths. Strong 8K browser viewing depends on the
              player and account supplied.
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
            Some apps accept M3U links; others ask for Xtream Codes credentials or a device ID. The{" "}
            <Link
              href={routes.installationGuide}
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Strong 8K IPTV installation guide
            </Link>{" "}
            explains the login options. For the highest resolution, check that the stream, player
            and screen support the format. Check the app publisher and its current availability
            before downloading it, especially where installation from outside an official store is
            involved.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
