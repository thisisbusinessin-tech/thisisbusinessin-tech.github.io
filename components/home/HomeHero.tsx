"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config/site";
import { AppDownloadButton } from "@/components/ui/AppDownloadButton";
import { HeroClothCanvas } from "@/components/home/HeroClothCanvas";

const heroMessages = [
  "Tailoring Made Easy",
  "Place Stitching Orders From Home",
  "Delivered To Your Home"
] as const;

const heroNavLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "/services/", label: "Services" },
  { href: "/blog/", label: "Guides" },
  { href: "/faq/", label: "FAQ" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" }
] as const;

export function HomeHero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {isScrolled ? (
        <div className="floating-home-nav is-visible">
          <div className="container-site">
            <div className="floating-home-nav-shell">
              <Link
                href="/"
                className="hero-logo-link"
                aria-label={`${siteConfig.brand.name} homepage`}
              >
                <span className="hero-logo-mark">
                  <Image
                    src="/logo-white.png"
                    alt={`${siteConfig.brand.name} logo`}
                    fill
                    sizes="160px"
                    className="object-contain object-left"
                    priority
                  />
                </span>
              </Link>

              <nav className="hidden items-center gap-5 lg:flex" aria-label="Floating navigation">
                {heroNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-link text-[0.93rem] font-semibold tracking-[-0.01em]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:block">
                <AppDownloadButton className="min-h-0 px-5 py-2.5 text-sm" />
              </div>

              <HeroMobileMenu className="lg:hidden" />
            </div>
          </div>
        </div>
      ) : null}

      <section className="hero-stage">
        <HeroClothCanvas className="hero-shell sticky top-0 isolate overflow-hidden text-white">
          <div className="container-site relative z-[1] flex min-h-svh flex-col py-6 md:py-8">
            {!isScrolled ? (
              <div className="hero-topbar">
                <Link
                  href="/"
                  className="hero-logo-link hero-intro-item"
                  style={{ ["--intro-delay" as string]: "0ms" }}
                  aria-label={`${siteConfig.brand.name} homepage`}
                >
                  <span className="hero-logo-mark">
                    <Image
                      src="/logo-white.png"
                      alt={`${siteConfig.brand.name} logo`}
                      fill
                      sizes="160px"
                      className="object-contain object-left"
                      priority
                    />
                  </span>
                </Link>

                <div className="hidden items-center gap-5 lg:flex">
                  <nav className="flex items-center gap-5" aria-label="Hero navigation">
                    {heroNavLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="nav-link hero-intro-item text-[0.95rem] font-semibold tracking-[-0.01em]"
                        style={{ ["--intro-delay" as string]: `${120 + index * 55}ms` }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div
                    className="hero-intro-item"
                    style={{ ["--intro-delay" as string]: `${120 + heroNavLinks.length * 55}ms` }}
                  >
                    <AppDownloadButton className="min-h-0 px-5 py-2.5 text-sm" />
                  </div>
                </div>

                <HeroMobileMenu
                  className="hero-intro-item lg:hidden"
                  style={{ ["--intro-delay" as string]: "160ms" }}
                />
              </div>
            ) : null}

            <div className="hero-content">
              <p className="sr-only">Tailoring Made Easy</p>
              <div className="hero-headline-box" aria-hidden="true">
                <div className="hero-headline-stack">
                  {heroMessages.map((message, index) => (
                    <span
                      key={message}
                      className="hero-headline-message"
                      style={{ ["--headline-delay" as string]: `${index * 4.8}s` }}
                    >
                      {message}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <AppDownloadButton />
                <Link href="#how-it-works" className="btn-secondary hero-action-secondary text-white">
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </HeroClothCanvas>

        <div className="hero-stage-spacer" aria-hidden="true" />
      </section>
    </>
  );
}

function HeroMobileMenu({
  className = "",
  style
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <details className={`hero-mobile-nav ${className}`.trim()} style={style}>
      <summary className="hero-mobile-toggle" aria-label="Open navigation">
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

      <div className="hero-mobile-panel">
        <nav className="flex flex-col gap-1" aria-label="Hero navigation mobile">
          {heroNavLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hero-mobile-link">
              {link.label}
            </Link>
          ))}
        </nav>
        <AppDownloadButton className="mt-3 w-full justify-center text-sm" />
      </div>
    </details>
  );
}
