import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { AppDownloadButton } from "@/components/ui/AppDownloadButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-neutral-300" role="contentinfo">
      <div className="container-site section-padding">
        <div className="footer-cta surface-panel mb-12 overflow-hidden bg-transparent p-6 text-white md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="section-kicker border-white/12 bg-white/8 text-white">
                Download ApneTailor App
              </p>
              <h2 className="mt-4 text-white">Get tailoring convenience without repeated market trips</h2>
              <p className="mt-3 max-w-xl text-white/72">
                Place your stitching order, share measurements, review tailor responses, and
                track progress from one clear flow.
              </p>
            </div>
            <div className="flex items-center">
              <AppDownloadButton className="shadow-[0_22px_48px_rgba(79,155,255,0.22)]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <p className="text-white font-extrabold text-lg mb-3 tracking-[-0.03em]">{siteConfig.brand.name}</p>
            <p className="text-sm leading-relaxed mb-4 text-white/72">{siteConfig.brand.tagline}</p>
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
