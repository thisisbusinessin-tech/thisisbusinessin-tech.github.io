import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Security & Trust",
  description:
    "How ApneTailor approaches security, data protection, and customer trust on its tailoring platform.",
  path: "/security/"
});

export default function SecurityPage() {
  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <h1 className="mb-4">Security &amp; Trust</h1>
        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
          ApneTailor is built with security-conscious engineering practices. This page explains
          how we approach data protection, platform security, and customer trust — without
          making unsupported guarantees.
        </p>

        <div className="space-y-10 prose-content text-neutral-700">
          <div>
            <h2>How we protect your information</h2>
            <p>
              ApneTailor handles personal information according to its published{" "}
              <Link href="/privacy-policy/">Privacy Policy</Link> and{" "}
              <Link href="/data-compliance/">Data Compliance</Link> statement. We apply
              reasonable technical and organizational measures to help protect information
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>
              No internet-based service can guarantee absolute security. We continuously work
              to safeguard the information entrusted to us.
            </p>
          </div>

          <div>
            <h2>Payment security</h2>
            <p>
              Payments are processed through the ApneTailor app using approved payment methods.
              Review pricing before confirming your order. Payment details are handled through
              secure payment processing — ApneTailor does not ask you to share card details
              through email or unofficial channels.
            </p>
          </div>

          <div>
            <h2>Verified tailors</h2>
            <p>
              ApneTailor works with registered tailors who go through a verification process
              before they can accept orders on the platform. This helps customers connect with
              tailors who meet ApneTailor&apos;s standards.
            </p>
          </div>

          <div>
            <h2>Data sharing</h2>
            <p>
              Information required to provide services may be shared with relevant service
              providers — such as assigned tailors and logistics partners — only when necessary
              to complete your order. We do not sell your personal information.
            </p>
          </div>

          <div>
            <h2>Account security</h2>
            <p>
              Users sign in through Google authentication. Maintain the security of your Google
              account and promptly report any unauthorized access to{" "}
              <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
            </p>
          </div>

          <div>
            <h2>Website security</h2>
            <p>
              This website is a predominantly static, content-driven site with minimal attack
              surface. Security controls include dependency review, no secrets in client
              bundles, appropriate security headers at deployment, and safe content rendering.
              See <code>SECURITY.md</code> in the project repository for technical details.
            </p>
          </div>

          <div>
            <h2>Reporting security concerns</h2>
            <p>
              If you discover a security vulnerability or have a security-related concern,
              please contact{" "}
              <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> with
              sufficient detail to help us understand and address the issue.
            </p>
          </div>

          <div>
            <h2>Related policies</h2>
            <ul>
              <li>
                <Link href="/privacy-policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/data-compliance/">Data Compliance</Link>
              </li>
              <li>
                <Link href="/delete-accounts/">Account Deletion</Link>
              </li>
              <li>
                <Link href="/accessibility-statement/">Accessibility Statement</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
