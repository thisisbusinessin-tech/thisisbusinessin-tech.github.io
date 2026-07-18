"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config/site";
import { AppDownloadButton } from "@/components/ui/AppDownloadButton";

const navLinks = [
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/services/", label: "Services" },
  { href: "/blog/", label: "Guides" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" }
];

export function Header() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 36);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          "transition-all duration-300 ease-out",
          isCompact ? "mx-auto max-w-6xl px-3 pt-3 md:px-5" : "max-w-none px-0 pt-0"
        ].join(" ")}
      >
        <div
          className={[
            "overflow-hidden border border-white/10 bg-brand-900/88 text-white backdrop-blur-xl shadow-[0_22px_60px_rgba(3,27,55,0.22)]",
            "transition-all duration-300 ease-out",
            isCompact
              ? "rounded-[1.7rem] px-4 py-3 md:px-6 md:py-3.5"
              : "rounded-b-[1.65rem] rounded-t-none px-4 py-3.5 md:px-8 md:py-4.5"
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex min-w-0 items-center no-underline"
              aria-label={`${siteConfig.brand.name} homepage`}
            >
              <div className="relative h-11 w-[7.25rem] overflow-hidden md:h-12 md:w-[8.25rem]">
                <Image
                  src="/logo-white.png"
                  alt={`${siteConfig.brand.name} logo`}
                  fill
                  sizes="132px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-[0.94rem] font-semibold tracking-[-0.01em]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <AppDownloadButton className="min-h-0 px-5 py-2.5 text-sm" />
            </div>

            <MobileNav links={navLinks} />
          </div>
        </div>
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
        className="absolute right-0 top-full mt-3 flex w-64 flex-col gap-1 rounded-2xl border border-white/10 bg-brand-900/95 p-3 shadow-[0_24px_60px_rgba(3,27,55,0.32)] backdrop-blur-xl"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-xl px-3 py-2.5 font-medium text-white/82 no-underline transition-colors hover:bg-white/8 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <AppDownloadButton className="mt-2 text-center text-sm" />
      </nav>
    </details>
  );
}
