/**
 * Static-export fallback for retired URLs.
 * Production 301s are handled in vercel.json.
 */
export function LegacyRedirect({
  href,
  message,
  linkLabel,
}: {
  href: string;
  message: string;
  linkLabel: string;
}) {
  return (
    <main className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm" style={{ color: "var(--hero-muted)" }}>
        {message}
      </p>
      <a
        href={href}
        className="mt-4 text-sm font-semibold underline"
        style={{ color: "var(--hero-accent)" }}
      >
        {linkLabel}
      </a>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(href)});`,
        }}
      />
    </main>
  );
}
