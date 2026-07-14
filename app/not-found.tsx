import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding text-center">
      <div className="container-site max-w-lg">
        <h1 className="mb-4">Page not found</h1>
        <p className="text-neutral-600 mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go to homepage
          </Link>
          <Link href="/services/" className="btn-secondary">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
