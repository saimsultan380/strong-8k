type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[] | null;
};

/** Server-rendered JSON-LD script tag for structured data. */
export function JsonLd({ data }: JsonLdProps) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
