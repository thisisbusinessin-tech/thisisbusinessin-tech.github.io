import { organizationSchema, websiteSchema } from "@/lib/schema";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json.length === 1 ? json[0] : json) }}
    />
  );
}

export function GlobalJsonLd() {
  return <JsonLd data={[organizationSchema(), websiteSchema()]} />;
}
