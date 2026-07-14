import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/content/LegalPageLayout";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "ApneTailor Terms of Service — the terms governing use of our platform and services.",
  path: "/terms/"
});

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="June 2026">
      <p>
        Welcome to ApneTailor. By accessing or using our mobile application, website, or related
        services, you agree to be bound by these Terms of Service. If you do not agree with
        these terms, please do not use our services.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        ApneTailor is a hyperlocal tailoring platform that connects customers with independent
        tailors for custom clothing stitching services from the comfort of their homes. By
        leveraging a network of local tailors, ApneTailor significantly reduces traditional
        stitching turnaround times, helping customers receive their stitched garments faster
        while maintaining quality and convenience.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be legally capable of entering into a binding agreement to use our services.
        By using ApneTailor, you confirm that the information provided during registration is
        accurate and complete.
      </p>

      <h2>3. User Responsibilities</h2>
      <ul>
        <li>Provide accurate account information.</li>
        <li>Provide accurate measurements, addresses, and order details.</li>
        <li>Use the platform lawfully and responsibly.</li>
        <li>Maintain the security of your account.</li>
        <li>Promptly report unauthorized account access.</li>
        <li>Respect tailors, delivery partners, and other users.</li>
      </ul>

      <h2>4. Tailor Responsibilities</h2>
      <p>
        Tailors using the platform are responsible for providing accurate business information,
        fulfilling accepted orders timely &amp; professionally, and complying with applicable
        laws and regulations.
      </p>

      <h2>5. Orders and Services</h2>
      <p>
        Order timelines and delivery dates are estimates and may vary due to measurement issues,
        customer delays, fabric availability, logistics, or unforeseen circumstances.
      </p>
      <p>Customers are responsible for reviewing all order details before confirming an order.</p>

      <h2>6. Payments</h2>
      <p>
        Payments processed through the platform must be completed using approved payment methods.
        Users agree to pay all applicable charges associated with their orders.
      </p>
      <p>Refunds, if applicable, will be handled according to the policies displayed within the application.</p>

      <h2>7. Account Suspension and Termination</h2>
      <p>ApneTailor reserves the right to suspend or terminate accounts that:</p>
      <ul>
        <li>Provide false information.</li>
        <li>Violate applicable laws.</li>
        <li>Abuse the platform or other users.</li>
        <li>Attempt fraudulent activity.</li>
        <li>Violate these Terms of Service.</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>
        All trademarks, branding, logos, software, designs, and content associated with
        ApneTailor remain the property of ApneTailor or its licensors. Users may not copy,
        distribute, or reproduce platform content without permission.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, ApneTailor shall not be liable for indirect,
        incidental, special, consequential, or punitive damages arising from the use of the
        platform.
      </p>
      <p>
        While we strive to provide a reliable service, we do not guarantee uninterrupted
        availability, error-free operation, or specific business outcomes.
      </p>

      <h2>10. Third-Party Services</h2>
      <p>
        The platform may rely on third-party providers for payments, authentication,
        notifications, cloud infrastructure, analytics, and logistics services. Their use may be
        subject to separate terms and privacy policies.
      </p>

      <h2>11. Privacy</h2>
      <p>
        Your use of ApneTailor is also governed by our Privacy Policy. Please review the
        Privacy Policy to understand how we collect, use, and protect information.
      </p>

      <h2>12. Changes to Terms</h2>
      <p>
        We may modify these Terms of Service from time to time. Updated versions will be posted
        on this page and become effective upon publication.
      </p>

      <h2>13. Governing Law</h2>
      <p>These Terms shall be governed by and interpreted in accordance with the laws applicable in India.</p>

      <h2>14. Contact Us</h2>
      <p>For questions regarding these Terms of Service, please contact:</p>
      <p>
        ApneTailor Support Email:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
