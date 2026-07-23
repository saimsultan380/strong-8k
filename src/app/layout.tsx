import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NetworkBackground } from "@/components/network-background";
import { siteConfig, siteMetadataBase } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  ...siteMetadataBase,
  verification: {
    google: "6css43Rhe2qtd8Qoqo6sByeuJKNR16A3P4h5LBTTBLc",
  },
  icons: {
    icon: "/strong-8k.PNG?v=2",
    shortcut: "/strong-8k.PNG?v=2",
    apple: "/strong-8k.PNG?v=2",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Strong 8K IPTV UK", "Strong 8K IPTV USA"],
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    inLanguage: "en-GB",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/strong-8k.PNG`,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  },
];

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="relative min-h-full flex flex-col bg-black text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Fixed site-wide mesh — sits behind every page/section */}
          <NetworkBackground />
          <div className="relative z-10 flex min-h-full flex-1 flex-col bg-transparent">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
