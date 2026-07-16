"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Tv,
  Smartphone,
  Apple,
  Monitor,
  Laptop,
  MonitorSmartphone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

type DeviceGuide = {
  id: string;
  label: string;
  shortLabel: string;
  Icon: typeof Tv;
  title: string;
  intro: string;
  options?: {
    label: string;
    steps: string[];
  }[];
  steps?: string[];
  tip?: string;
  note?: string;
  recommended?: string;
};

const DEVICES: DeviceGuide[] = [
  {
    id: "fire-tv",
    label: "Firestick / Android TV",
    shortLabel: "Fire TV",
    Icon: Tv,
    title: "How to Install Strong 8K IPTV on Firestick, Fire TV & Android TV",
    intro:
      "The Firestick is one of the most popular IPTV devices in the UK, and setup takes only a few minutes:",
    steps: [
      "Allow apps from unknown sources. Go to Settings → My Fire TV → Developer Options and enable Apps from Unknown Sources. (Android TV: Settings → Security → Unknown Sources.)",
      "Install Downloader by AFTVnews from the Amazon Appstore or Google Play Store.",
      "Open Downloader and enter 2675245.",
      "Download and install the Strong 8K App.",
      "Open the app and enter your Strong 8K username and password to start streaming.",
    ],
    tip: "If Developer Options isn't visible on newer Fire TV devices, go to Settings → My Fire TV → About, then press your device name 7 times to unlock it.",
  },
  {
    id: "android",
    label: "Android Phone / Tablet",
    shortLabel: "Android",
    Icon: Smartphone,
    title: "Strong 8K IPTV Setup on Android Phones & Tablets",
    intro: "Installing Strong 8K IPTV on Android is quick and simple.",
    steps: [
      "Install Downloader by AFTVnews from the Google Play Store.",
      "Open Downloader and enter 2675245.",
      "Download and install the Strong 8K App.",
      "Launch the app.",
      "Enter your Strong 8K username and password.",
      "Start streaming live TV, sports, movies, and series.",
    ],
    tip: "For the best streaming experience, use a stable Wi-Fi connection instead of mobile data.",
  },
  {
    id: "ios",
    label: "iPhone / iPad",
    shortLabel: "iOS",
    Icon: Apple,
    title: "How to Set Up Strong 8K IPTV on iPhone & iPad",
    intro: "Everything installs directly from the Apple App Store.",
    steps: [
      "Open the App Store on your iPhone or iPad.",
      "Search for iPlayTV AIO.",
      "Download and install the app.",
      "Open the app.",
      "Choose Login with Xtream Codes.",
      "Enter your Strong 8K username and password.",
      "Start streaming.",
    ],
    recommended:
      "Recommended for iPhone & iPad: iPlayTV AIO provides an excellent viewing experience with fast channel loading, EPG support, and smooth playback.",
  },
  {
    id: "windows",
    label: "Windows PC",
    shortLabel: "Windows",
    Icon: Monitor,
    title: "Installing Strong 8K IPTV on Windows 10 & 11",
    intro: "Watch Strong 8K IPTV on any Windows desktop or laptop.",
    steps: [
      "Open the Microsoft Store.",
      "Install IBO Player or IPTV Smarters Expert.",
      "Launch your chosen application.",
      "Select Login with Xtream Codes.",
      "Enter your Strong 8K username and password.",
      "Click Login and start streaming.",
    ],
    note: "System Requirements: Windows 10 or Windows 11 (32-bit or 64-bit).",
  },
  {
    id: "mac",
    label: "Mac",
    shortLabel: "Mac",
    Icon: Laptop,
    title: "Strong 8K IPTV Setup on Mac (macOS)",
    intro: "Installing Strong 8K IPTV on macOS only takes a few minutes.",
    steps: [
      "Open the Mac App Store.",
      "Search for IBO Player Pro.",
      "Download and install the application.",
      "Open the app.",
      "Select Login with Xtream Codes.",
      "Enter your Strong 8K username and password.",
      "Start streaming.",
    ],
    recommended:
      "Recommended for Mac: IBO Player Pro offers excellent performance and works smoothly on both Intel and Apple Silicon (M1, M2, M3, and newer) Macs.",
  },
  {
    id: "smart-tv",
    label: "Samsung / LG TV",
    shortLabel: "Smart TV",
    Icon: MonitorSmartphone,
    title: "How to Install Strong 8K IPTV on Samsung & LG Smart TVs",
    intro:
      "Samsung and LG Smart TVs install IPTV apps directly from their built-in app stores.",
    steps: [
      "Open your TV's app store. Samsung: Samsung Apps · LG: LG Content Store.",
      "Search for one of the following apps: CR7 Player, IBO Player, HOT IPTV, SmartOne IPTV, or the Official Strong 8K App (if available).",
      "Install your preferred app.",
      "Open the application.",
      "If the app supports Xtream Codes Login, enter your Strong 8K username and password.",
      "If the app uses MAC Address Activation, the app will display a MAC address on screen.",
      "Send the MAC address to our WhatsApp support team.",
      "Once activated, restart the app and your channels will load automatically.",
    ],
    note: "Some Smart TV apps require MAC address activation, while others support direct Xtream Codes login. If the Official Strong 8K App is available for your TV model, simply install it and log in using your account credentials.",
  },
];

function GuideBody({ device }: { device: DeviceGuide }) {
  return (
    <div className="space-y-6">
      {device.intro ? (
        <p className="text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
          {device.intro}
        </p>
      ) : null}

      {device.steps ? (
        <ol className="space-y-3">
          {device.steps.map((step, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border p-4 text-sm leading-[1.7] sm:text-[15px]"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
                color: "var(--feature-body)",
              }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--hero-accent) 18%, transparent)",
                  color: "var(--hero-accent)",
                }}
              >
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ) : null}

      {device.options?.map((opt) => (
        <div key={opt.label} className="space-y-3">
          <p className="text-base font-bold" style={{ color: "var(--hero-heading)" }}>
            {opt.label}:
          </p>
          <ol className="space-y-3">
            {opt.steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-xl border p-4 text-sm leading-[1.7] sm:text-[15px]"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "transparent",
                  color: "var(--feature-body)",
                }}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--hero-accent) 18%, transparent)",
                    color: "var(--hero-accent)",
                  }}
                >
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}

      {device.tip ? (
        <p
          className="rounded-xl border px-4 py-3 text-sm leading-[1.7]"
          style={{
            borderColor: "color-mix(in srgb, var(--hero-accent) 35%, transparent)",
            color: "var(--hero-muted)",
            backgroundColor: "transparent",
          }}
        >
          <span className="font-semibold" style={{ color: "var(--hero-accent)" }}>
            Tip:{" "}
          </span>
          {device.tip}
        </p>
      ) : null}

      {device.note ? (
        <p
          className="rounded-xl border px-4 py-3 text-sm leading-[1.7]"
          style={{
            borderColor: "var(--feature-card-border)",
            color: "var(--hero-muted)",
            backgroundColor: "transparent",
          }}
        >
          <span className="font-semibold" style={{ color: "var(--hero-heading)" }}>
            Note:{" "}
          </span>
          {device.note}
        </p>
      ) : null}

      {device.recommended ? (
        <p className="text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          {device.recommended}
        </p>
      ) : null}
    </div>
  );
}

export function InstallationDeviceSelector() {
  const [activeId, setActiveId] = useState(DEVICES[0].id);
  const detailRef = useRef<HTMLDivElement>(null);
  const active = DEVICES.find((d) => d.id === activeId) ?? DEVICES[0];

  const selectDevice = (id: string) => {
    setActiveId(id);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <section
      id="choose-device"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Device Guides
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            className="mt-4 max-w-2xl text-[15px] leading-[1.75]"
            style={{ color: "var(--hero-muted)" }}
          >
            Pick your device below. Each guide keeps steps in a numbered list so you can follow
            along without hunting through headings.
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {DEVICES.map((device) => {
            const Icon = device.Icon;
            const isActive = device.id === activeId;
            return (
              <button
                key={device.id}
                type="button"
                onClick={() => selectDevice(device.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-all duration-200",
                  isActive && "shadow-sm",
                )}
                style={{
                  borderColor: isActive
                    ? "var(--hero-accent)"
                    : "var(--feature-card-border)",
                  color: isActive ? "var(--hero-accent)" : "var(--hero-muted)",
                  backgroundColor: "transparent",
                }}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                <span className="hidden sm:inline">{device.label}</span>
                <span className="sm:hidden">{device.shortLabel}</span>
              </button>
            );
          })}
        </div>

        <div ref={detailRef} className="mt-10 scroll-mt-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border p-6 sm:p-8 md:p-10"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <ScrollReveal direction="up" delay={0.05} once>
                <h2
                  className="max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[34px]"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {active.title}
                </h2>
              </ScrollReveal>
              <div className="mt-6">
                <GuideBody device={active} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
