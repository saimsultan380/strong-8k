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
    title: "Firestick, Fire TV and Android TV",
    intro:
      "On a Firestick, open the device’s app store and look for a compatible IPTV player. If the verified Strong 8K app is supplied only through Downloader, first obtain Downloader by AFTVnews from the official store.",
    steps: [
      "Confirm the download destination and publisher. If that verified app requires an external installation, enable the device’s relevant permission only for the installation you chose; turn it off afterward if the device allows it.",
      "On the Firestick, enter 4330396 in Downloader, inspect the destination and install the verified app.",
      "Open the app, select the login format from your welcome message and enter the server address, username and password, or the playlist link.",
      "Let the Strong 8K IPTV guide and channels load. If the account is rejected, check for spaces or typing mistakes and contact support.",
    ],
    note: "Amazon and Android menu labels differ across models and software versions. Follow the prompts shown on your device. If your menu looks different, return to this Strong 8K IPTV installation guide or ask support about the exact model.",
  },
  {
    id: "android",
    label: "Android Phone / Tablet",
    shortLabel: "Android",
    Icon: Smartphone,
    title: "Android phone or tablet",
    intro: "Search Google Play for a compatible player from a publisher you trust.",
    steps: [
      "Install it, open the add-account screen and choose M3U or Xtream Codes according to your activation message.",
      "Enter the Strong 8K details exactly, save the profile and wait for the playlist to load.",
      "Check playback on the connection you plan to use. Mobile data may consume a substantial allowance.",
    ],
  },
  {
    id: "ios",
    label: "iPhone / iPad",
    shortLabel: "iOS",
    Icon: Apple,
    title: "iPhone and iPad",
    intro:
      "Open the Apple App Store and check the player supports your version of iOS and the login type you received.",
    steps: [
      "Install the app and choose to add a playlist or account.",
      "Paste the supplied playlist link, or enter the server URL, username and password in the relevant fields.",
      "Refresh the list if necessary and test the content available to your trial or paid account.",
    ],
  },
  {
    id: "windows",
    label: "Windows PC",
    shortLabel: "Windows",
    Icon: Monitor,
    title: "Windows PC",
    intro: "Obtain a compatible player from its official publisher or the Microsoft Store.",
    steps: [
      "Add the provided Strong 8K account using the format the app supports.",
      "Check that the computer’s firewall, connection and player version allow playback. Share the error message with support if the list loads but a stream fails.",
    ],
  },
  {
    id: "mac",
    label: "Mac",
    shortLabel: "Mac",
    Icon: Laptop,
    title: "Mac",
    intro:
      "Check the Mac App Store or the verified publisher site for a player compatible with your macOS version.",
    steps: [
      "Add your playlist or server login privately. The app may ask for a profile name; this is usually just a label on your computer.",
      "Save the Strong 8K account, load the guide and check playback. If no player is available for your Mac, ask support for a current supported option.",
    ],
  },
  {
    id: "smart-tv",
    label: "Samsung / LG TV",
    shortLabel: "Smart TV",
    Icon: MonitorSmartphone,
    title: "Samsung and LG Smart TVs",
    intro:
      "Search the TV’s own app store for a player supported by your exact model and region.",
    steps: [
      "Some apps use a MAC address or device ID that must be paired with an account; others accept a direct login.",
      "Send an identifier only through the verified support channel, and check each character before submission.",
      "Restart or refresh the app after the account is added. If nothing loads, tell support the app name and the displayed identifier, keeping your password private.",
    ],
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
            along without hunting through headings. Amazon and Android menu labels differ across
            models and software versions.
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
