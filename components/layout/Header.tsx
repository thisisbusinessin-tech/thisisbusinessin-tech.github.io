import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function Header() {
  const navLinks = [
    { href: "/how-it-works/", label: "How It Works" },
    { href: "/services/", label: "Services" },
    { href: "/blog/", label: "Guides" },
    { href: "/faq/", label: "FAQ" },
    { href: "/about/", label: "About" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container-site flex items-center justify-between h-16 md:h-[4.5rem]">
        <Link
          href="/"
          className="text-brand-800 font-bold text-xl no-underline hover:text-brand-600 transition-colors"
          aria-label={`${siteConfig.brand.name} homepage`}
        >
          {siteConfig.brand.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-600 hover:text-brand-600 no-underline text-[0.9375rem] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="text-neutral-600 hover:text-brand-600 no-underline text-[0.9375rem] font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/support/" className="btn-primary text-sm py-2.5 px-5 min-h-0">
            Get the App
          </Link>
        </div>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}

function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  return (
    <details className="md:hidden relative">
      <summary className="list-none cursor-pointer p-2 -mr-2" aria-label="Open menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </summary>
      <nav
        className="absolute right-0 top-full mt-1 w-56 bg-white border border-neutral-200 rounded-lg shadow-elevated p-4 flex flex-col gap-1"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2.5 px-3 text-neutral-700 hover:bg-brand-50 hover:text-brand-600 rounded-md no-underline font-medium"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact/"
          className="block py-2.5 px-3 text-neutral-700 hover:bg-brand-50 hover:text-brand-600 rounded-md no-underline font-medium"
        >
          Contact
        </Link>
        <Link
          href="/support/"
          className="btn-primary text-sm mt-2 text-center"
        >
          Get the App
        </Link>
      </nav>
    </details>
  );
}
