"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
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

const HERO_HEADLINE_HOLD_MS = 1500;
const HERO_HEADLINE_FADE_MS = 520;

export function HomeHero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headlinePhase, setHeadlinePhase] = useState<"enter" | "hold" | "exit">("enter");
  const scrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 24;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setIsScrolled(next);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const enterTimer = window.setTimeout(() => {
      setHeadlinePhase("hold");
    }, HERO_HEADLINE_FADE_MS);

    const holdTimer = window.setTimeout(() => {
      setHeadlinePhase("exit");
    }, HERO_HEADLINE_FADE_MS + HERO_HEADLINE_HOLD_MS);

    const nextTimer = window.setTimeout(() => {
      setHeadlineIndex((current) => (current + 1) % heroMessages.length);
      setHeadlinePhase("enter");
    }, HERO_HEADLINE_FADE_MS * 2 + HERO_HEADLINE_HOLD_MS);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(holdTimer);
      window.clearTimeout(nextTimer);
    };
  }, [headlineIndex]);

  return (
    <>
      {/* Floating nav — always mounted, animated in/out */}
      <div
        className="floating-home-nav"
        aria-hidden={!isScrolled}
        style={{
          opacity: isScrolled ? 1 : 0,
          transform: isScrolled ? "translate3d(0,0,0)" : "translate3d(0,-0.75rem,0)",
          pointerEvents: isScrolled ? "auto" : "none",
          transition: "opacity 0.34s ease, transform 0.34s ease",
        }}
      >
        <div className="container-site">
          <div className="floating-home-nav-shell">
            <Link
              href="/"
              className="hero-logo-link"
              aria-label={`${siteConfig.brand.name} homepage`}
              tabIndex={isScrolled ? 0 : -1}
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
                  tabIndex={isScrolled ? 0 : -1}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <AppDownloadButton className="min-h-0 px-5 py-2.5 text-sm" />
            </div>

            <HeroMobileMenu className="lg:hidden" tabable={isScrolled} />
          </div>
        </div>
      </div>

      <section className="hero-stage">
        <HeroClothCanvas className="hero-shell sticky top-0 isolate overflow-hidden text-white">
          <div className="container-site relative z-[1] flex min-h-svh flex-col py-6 md:py-8">

            {/* Hero topbar — always mounted, animated in/out */}
            <div
              className="hero-topbar"
              aria-hidden={isScrolled}
              style={{
                opacity: isScrolled ? 0 : 1,
                transform: isScrolled ? "translate3d(0,-0.5rem,0)" : "translate3d(0,0,0)",
                pointerEvents: isScrolled ? "none" : "auto",
                transition: "opacity 0.34s ease, transform 0.34s ease",
              }}
            >
              <div className="hero-topbar-shell">
                <Link
                  href="/"
                  className="hero-logo-link hero-intro-item"
                  style={{ ["--intro-delay" as string]: "0ms" }}
                  aria-label={`${siteConfig.brand.name} homepage`}
                  tabIndex={isScrolled ? -1 : 0}
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
                        tabIndex={isScrolled ? -1 : 0}
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
                  tabable={!isScrolled}
                />
              </div>
            </div>

            <div className="hero-content">
              {/* SEO/AEO: visible to crawlers and screen readers, hidden visually */}
              <h1 className="sr-only">
                {heroMessages.join(" — ")}
              </h1>
              <div className="hero-headline-box">
                <div className="hero-headline-stack" aria-hidden="true">
                  <span
                    key={`${heroMessages[headlineIndex]}-${headlinePhase}`}
                    className="hero-headline-message is-active"
                    data-phase={headlinePhase}
                  >
                    {heroMessages[headlineIndex]}
                  </span>
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
  style,
  tabable = true,
}: {
  className?: string;
  style?: CSSProperties;
  tabable?: boolean;
}) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <details ref={detailsRef} className={`hero-mobile-nav ${className}`.trim()} style={style}>
      <summary
        className="hero-mobile-toggle"
        aria-label="Open navigation"
        tabIndex={tabable ? 0 : -1}
      >
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
          {heroNavLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="hero-mobile-link"
              style={{ ["--menu-item-index" as string]: index }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ ["--menu-item-index" as string]: heroNavLinks.length } as CSSProperties}>
          <AppDownloadButton className="hero-mobile-cta mt-3 w-full justify-center text-sm" />
        </div>
      </div>
    </details>
  );
}
