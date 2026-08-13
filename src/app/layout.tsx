import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ParticlesBg from "@/components/ui/particles-bg";
import { JsonLd } from "@/components/seo/json-ld";
import { siteJsonLd } from "@/lib/breadcrumbs";
import { canonicalUrl, siteMetadataBase } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...siteMetadataBase,
  metadataBase: new URL(canonicalUrl("/")),
  verification: {
    google: "6css43Rhe2qtd8Qoqo6sByeuJKNR16A3P4h5LBTTBLc",
  },
  icons: {
    icon: "/strong-8k.PNG?v=2",
    shortcut: "/strong-8k.PNG?v=2",
    apple: "/strong-8k.PNG?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" href="/vendor/particles.min.js" as="script" />
        <JsonLd data={siteJsonLd()} />
      </head>
      <body className="relative min-h-full flex flex-col bg-black text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ParticlesBg />
          <div className="relative z-10 flex min-h-full flex-1 flex-col bg-transparent">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
