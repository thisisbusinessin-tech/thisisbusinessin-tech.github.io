interface LegalPageProps {
  title: string;
  lastUpdated: string;
  version?: string;
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  version = "1.0.0",
  children
}: LegalPageProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow prose-content text-neutral-700">
        <h1>{title}</h1>
        <p className="text-sm text-neutral-500 -mt-2 mb-8">
          Version {version} · Last Updated: {lastUpdated}
        </p>
        {children}
      </div>
    </section>
  );
}
