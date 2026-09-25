"use client";

import {
  Tv,
  Smartphone,
  Apple,
  Monitor,
  Laptop,
  MonitorSmartphone,
  Box,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

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
    label: "Firestick / Fire TV",
    shortLabel: "Fire TV",
    Icon: Tv,
    title: "Set Up Strong 8K on Firestick and Fire TV",
    intro:
      "On a supported Firestick or Fire TV, open the device’s app store and install Downloader by AFTVnews from the official store. Confirm the download destination and publisher before you continue.",
    steps: [
      "If the verified Strong 8K app requires an installation outside the store, enable the device’s relevant permission only for that installation, then turn it off afterward if the device allows it.",
      "Enter Downloader code 4330396, inspect the destination and install the verified app.",
      "Open the app and choose the login format from your welcome message. For Xtream Codes, enter the server URL, username and password. For M3U, enter the supplied playlist URL.",
      "Let the guide and channels load. If the account is rejected, check for spaces or typing mistakes and contact support with your device model and app name.",
    ],
    note: "Amazon menu labels differ across Fire TV models and software versions. Follow the prompts on your device. If your menu looks different, contact support with the exact model.",
  },
  {
    id: "android-tv",
    label: "Android TV",
    shortLabel: "Android TV",
    Icon: Tv,
    title: "Set Up Strong 8K on Android TV",
    intro:
      "Android TV menus are separate from Fire TV. Open the Google Play Store on the television and look for a compatible player, or use Downloader only when support has given you code 4330396 for that model.",
    steps: [
      "Install the player from the Play Store, or enter 4330396 in Downloader after you have confirmed the publisher.",
      "Open the app and select Xtream Codes or M3U to match your activation message.",
      "For Xtream Codes, enter the server URL, username and password. For M3U, paste the playlist URL.",
      "Save the profile and wait for the catalogue to load. If a menu label differs, send support the television model and the screen you are on.",
    ],
  },
  {
    id: "android",
    label: "Android Phone / Tablet",
    shortLabel: "Android",
    Icon: Smartphone,
    title: "Set Up Strong 8K on Android Phones and Tablets",
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
    title: "Set Up Strong 8K on iPhone and iPad",
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
    title: "Set Up Strong 8K on Windows",
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
    title: "Set Up Strong 8K on Mac",
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
    title: "Set Up Strong 8K on Samsung and LG TVs",
    intro:
      "Search the TV’s own app store for a player supported by your exact model and region. Some apps accept a direct login. Others use device-ID activation and ask for the exact identifiers shown on the player screen, such as a MAC address or device ID.",
    steps: [
      "Install the player from the television’s store and open the add-account screen.",
      "For a direct login, enter the server URL, username and password, or the playlist URL, exactly as supplied.",
      "For device-ID activation, copy the identifiers the player displays and send them only through verified support. Check each character before you submit them.",
      "Restart or refresh the app after the account is added. If nothing loads, tell support the app name and the displayed identifier, and keep your password private.",
    ],
  },
  {
    id: "other",
    label: "MAG / Enigma2",
    shortLabel: "Other",
    Icon: Box,
    title: "Other Supported Devices",
    intro:
      "MAG and Enigma2 boxes are supported when the portal or playlist method matches the device. These steps do not apply to every set-top box.",
    steps: [
      "Note the device type and the MAC address or portal URL the box displays.",
      "Send that identifier to support through WhatsApp so the account can be paired. Do not post it publicly.",
      "Enter the portal or playlist details the team confirms, then reboot the device and test playback.",
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
            Every supported-device guide is on this page. Use the links to jump to your device.
            Menu labels differ across models and software versions.
          </p>
        </FadeIn>

        <nav className="mt-10 flex flex-wrap gap-2 sm:gap-3" aria-label="Device guides">
          {DEVICES.map((device) => {
            const Icon = device.Icon;
            return (
              <a
                key={device.id}
                href={`#${device.id}`}
                className="inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)]"
                style={{
                  borderColor: "var(--feature-card-border)",
                  color: "var(--hero-muted)",
                  backgroundColor: "transparent",
                }}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                <span className="hidden sm:inline">{device.label}</span>
                <span className="sm:hidden">{device.shortLabel}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-10 space-y-6">
          {DEVICES.map((device) => (
            <article
              key={device.id}
              id={device.id}
              className="scroll-mt-28 rounded-2xl border p-6 sm:p-8 md:p-10"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <h2
                className="max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[34px]"
                style={{ color: "var(--hero-heading)" }}
              >
                {device.title}
              </h2>
              <div className="mt-6">
                <GuideBody device={device} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
