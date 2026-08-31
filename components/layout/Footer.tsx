import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer bg-brand-900 text-neutral-300" role="contentinfo">
      <div className="site-footer-inner">
        <div className="container-site section-padding">
          <div className="footer-download mb-12">
            <a
              href={
                siteConfig.appDownload.url ??
                "https://play.google.com/store/search?q=ApneTailor&c=apps"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="footer-download-link"
            >
              Download now!
            </a>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-8">
            <div>
              <p className="mb-3 text-lg font-extrabold tracking-[-0.03em] text-white">
                {siteConfig.brand.name}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-white/72">{siteConfig.brand.tagline}</p>
              <p className="text-sm leading-relaxed text-neutral-400">
                {siteConfig.brand.description}
              </p>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Explore
              </h3>
              <ul className="space-y-2.5 text-sm">
                <FooterLink href="/how-it-works/">How It Works</FooterLink>
                <FooterLink href="/services/">Services</FooterLink>
                <FooterLink href="/services/women/">Women&apos;s Tailoring</FooterLink>
                <FooterLink href="/services/men/">Men&apos;s Tailoring</FooterLink>
                <FooterLink href="/blog/">Guides &amp; Articles</FooterLink>
                <FooterLink href="/faq/">FAQ</FooterLink>
                <FooterLink href="/about/">About</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Support &amp; Trust
              </h3>
              <ul className="space-y-2.5 text-sm">
                <FooterLink href="/contact/">Contact</FooterLink>
                <FooterLink href="/support/">Support</FooterLink>
                <FooterLink href="/security/">Security</FooterLink>
                <FooterLink href="/accessibility-statement/">Accessibility</FooterLink>
                <FooterLink href="/media/">Media &amp; Press</FooterLink>
                <FooterLink href="/editorial-team/">Editorial Team</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                For Tailors
              </h3>
              <ul className="space-y-2.5 text-sm">
                <FooterAppLink kind="tailor" />
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5 text-sm">
                <FooterLink href="/privacy-policy/">Privacy Policy</FooterLink>
                <FooterLink href="/terms/">Terms of Service</FooterLink>
                <FooterLink href="/data-compliance/">Data Compliance</FooterLink>
                <FooterLink href="/delete-accounts/">Account Deletion</FooterLink>
                <FooterLink href="/refund-and-cancellation-policy/">
                  Refund &amp; Cancellation
                </FooterLink>
                <FooterLink href="/pickup-and-delivery-policy/">
                  Pickup &amp; Delivery
                </FooterLink>
                <FooterLink href="/editorial-policy/">Editorial Policy</FooterLink>
                <FooterLink href="/review-policy/">Review Policy</FooterLink>
              </ul>
            </div>
          </div>

          <div className="thread-line my-10 opacity-30" aria-hidden="true" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-neutral-400">
            <p>
              &copy; {currentYear} {siteConfig.brand.name}. All rights reserved.
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-neutral-300 hover:text-white no-underline"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="footer-link">
        {children}
      </Link>
    </li>
  );
}

function FooterAppLink({ kind }: { kind: "tailor" | "user" }) {
  const config = kind === "tailor" ? siteConfig.tailorAppDownload : siteConfig.appDownload;

  if (config.status === "live" && config.url) {
    return (
      <li>
        <a
          href={config.url}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          {config.label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <span className="footer-link opacity-85" title={config.placeholderMessage}>
        {config.label}
      </span>
    </li>
  );
}
