"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const [scrollProgress, setScrollProgress] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    return Math.min(1, window.scrollY / 72);
  });
  const [canAnimate, setCanAnimate] = useState(false);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(scrollProgress);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(() => {
      setCanAnimate(true);
    });

    const onScroll = () => {
      const next = Math.min(1, window.scrollY / 72);
      if (Math.abs(next - progressRef.current) >= 0.01) {
        progressRef.current = next;
        setScrollProgress(next);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const transition = canAnimate ? "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" : "";
  const shellStyle = {
    borderTopLeftRadius: `${1.7 * scrollProgress}rem`,
    borderTopRightRadius: `${1.7 * scrollProgress}rem`,
    borderBottomLeftRadius: `${1.7 * scrollProgress}rem`,
    borderBottomRightRadius: `${1.7 * scrollProgress}rem`,
    paddingLeft: `clamp(1rem, ${1 + scrollProgress * 0.45}rem, 2rem)`,
    paddingRight: `clamp(1rem, ${1 + scrollProgress * 0.45}rem, 2rem)`,
    paddingTop: `${1.02 - scrollProgress * 0.16}rem`,
    paddingBottom: `${1.02 - scrollProgress * 0.16}rem`,
    backgroundColor: `rgba(3, 27, 55, ${0.88 * scrollProgress})`,
    borderColor: `rgba(255, 255, 255, ${0.1 * scrollProgress})`,
    boxShadow:
      scrollProgress > 0.01
        ? `0 22px 60px rgba(3, 27, 55, ${0.22 * scrollProgress})`
        : "none",
    backdropFilter: `blur(${18 * scrollProgress}px)`,
    WebkitBackdropFilter: `blur(${18 * scrollProgress}px)`
  } as const;
  const outerStyle = {
    paddingTop: `${scrollProgress * 0.75}rem`,
    paddingLeft: `${scrollProgress * 0.75}rem`,
    paddingRight: `${scrollProgress * 0.75}rem`
  } as const;

  return (
    <header className="sticky top-0 z-50">
      <div className={`mx-auto ${transition}`.trim()} style={outerStyle}>
        <div
          className={[
            "overflow-visible border text-white",
            transition
          ].join(" ")}
          style={shellStyle}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center no-underline" aria-label={`${siteConfig.brand.name} homepage`}>
              <div className="relative h-11 w-[7.25rem] overflow-hidden md:h-12 md:w-[8.25rem]">
                <Image src="/logo-white.png" alt={`${siteConfig.brand.name} logo`} fill sizes="132px" className="object-contain object-left" priority />
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link text-[0.94rem] font-semibold tracking-[-0.01em]">
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
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <details ref={detailsRef} className="relative md:hidden">
      <summary className="list-none cursor-pointer p-2 -mr-2" aria-label="Open menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </summary>
      <nav className="absolute right-0 top-full mt-3 flex w-64 flex-col gap-1 rounded-2xl border border-white/10 bg-brand-900/95 p-3 shadow-[0_24px_60px_rgba(3,27,55,0.32)] backdrop-blur-xl" aria-label="Mobile navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMenu} className="block rounded-xl px-3 py-2.5 font-medium text-white/82 no-underline transition-colors hover:bg-white/8 hover:text-white">
            {link.label}
          </Link>
        ))}
        <AppDownloadButton className="mt-2 text-center text-sm" />
      </nav>
    </details>
  );
}
