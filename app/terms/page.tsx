import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/content/LegalPageLayout";
import { PlatformPoliciesNotice } from "@/components/content/PlatformPoliciesNotice";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "ApneTailor Terms of Service — the terms governing use of our platform and services.",
  path: "/terms/"
});

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="September 2026">
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
        completing verification steps required for onboarding, fulfilling accepted orders timely
        &amp; professionally, and complying with applicable laws and regulations.
      </p>

      <h2>5. Orders and Services</h2>
      <p>
        Order timelines and delivery dates are estimates and may vary due to measurement issues,
        customer delays, fabric availability, logistics, or unforeseen circumstances.
      </p>
      <p>Customers are responsible for reviewing all order details before confirming an order.</p>

      <h2>6. Fulfilment Policy</h2>
      <p>
        ApneTailor facilitates custom stitching by connecting customers with independent
        tailors and coordinating related pickup, stitching, and delivery steps through the app.
        Fulfilment typically includes:
      </p>
      <ul>
        <li>The customer placing an order with garment type, measurements, notes, and images</li>
        <li>Nearby tailors responding with pricing and an expected completion date</li>
        <li>The customer accepting an offer and completing payment through the app</li>
        <li>
          Fabric pickup from the customer to the tailor, where the customer provides fabric
        </li>
        <li>Stitching by the assigned tailor, including progress updates where supported</li>
        <li>Delivery of the finished garment to the customer</li>
      </ul>
      <p>
        Where the tailor provides fabric, the initial customer-to-tailor fabric pickup may not
        apply. ApneTailor is a platform and logistics coordinator; independent tailors perform
        the stitching work. Estimated dates are not guaranteed completion or delivery times.
      </p>
      <p>
        If an order appears delayed, inactive, incorrectly statused, or otherwise stuck,
        authorized ApneTailor personnel may intervene as reasonably necessary for operations,
        customer support, quality review, or platform integrity. This may include reviewing the
        order, communicating with the customer or tailor, and updating, correcting, or advancing
        order statuses and related records. Such intervention does not guarantee a particular
        outcome, timeline, refund, or service result.
      </p>

      <h2>7. Payments</h2>
      <p>
        Payments processed through the platform must be completed using approved payment methods.
        Users agree to pay all applicable charges associated with their orders.
      </p>

      <h2>8. Refunds and Cancellations</h2>
      <p>
        Payments made through ApneTailor are generally non-refundable once an order, service, or
        transaction has been confirmed or processed. However, refund requests related to
        transactions made through either the ApneTailor User App or the ApneTailor Tailor App may
        be reviewed on a case-by-case basis depending on the circumstances of the order,
        payment, cancellation, service issue, or dispute. Refund requests may be submitted by
        contacting ApneTailor customer support.
      </p>
      <p>
        Approval of any refund is subject to review by ApneTailor and may depend on applicable
        policies, the status of the order or service, and other relevant circumstances.
        Cancellation terms depend on the order status at the time of the request. Orders that
        have progressed significantly through the stitching workflow may not be eligible for
        full cancellation or refund.
      </p>
      <p>
        For additional detail, see our{" "}
        <Link href="/refund-and-cancellation-policy/">Refund and Cancellation Policy</Link>.
      </p>

      <h2>9. In-App Communications</h2>
      <p>
        Customers and tailors may communicate through in-app chat to coordinate orders. These
        communications are provided to support fulfilment and are not treated as private from
        the platform. Authorized ApneTailor personnel may access and review chats where
        reasonably necessary for day-to-day operations, customer support, feedback and quality
        review, dispute handling, safety, fraud prevention, and enforcement of these Terms.
      </p>

      <h2>10. Account Suspension and Termination</h2>
      <p>ApneTailor reserves the right to suspend or terminate accounts that:</p>
      <ul>
        <li>Provide false information.</li>
        <li>Violate applicable laws.</li>
        <li>Abuse the platform or other users.</li>
        <li>Attempt fraudulent activity.</li>
        <li>Violate these Terms of Service.</li>
      </ul>

      <h2>11. Intellectual Property</h2>
      <p>
        All trademarks, branding, logos, software, designs, and content associated with
        ApneTailor remain the property of ApneTailor or its licensors. Users may not copy,
        distribute, or reproduce platform content without permission.
      </p>

      <h2>12. Warranty Disclaimer</h2>
      <p>
        The ApneTailor platform, website, apps, and related services are provided on an
        &quot;as is&quot; and &quot;as available&quot; basis, to the maximum extent permitted by
        law. ApneTailor does not warrant that the services will be uninterrupted, timely,
        secure, error-free, or that stitched garments, measurements, fabrics, or tailor work
        will meet any particular fit, quality, style, or aesthetic expectation.
      </p>
      <p>
        Tailors are independent service providers. ApneTailor does not manufacture garments and
        does not give any express or implied warranty, including any implied warranty of
        merchantability, fitness for a particular purpose, or non-infringement, except where
        such a disclaimer is not permitted by applicable law.
      </p>

      <h2>13. Limitation of Liability Disclaimer</h2>
      <p>
        To the maximum extent permitted by law, ApneTailor, its founders, officers, employees,
        and agents shall not be liable for any indirect, incidental, special, consequential,
        exemplary, or punitive damages, or for any loss of profits, data, goodwill, business
        opportunity, or garment or fabric value, arising from or related to use of the platform,
        even if ApneTailor has been advised of the possibility of such damages.
      </p>
      <p>
        Without limiting the above, ApneTailor is not liable for delays, unavailability of
        tailors or logistics partners, measurement inaccuracies provided by users, fabric
        defects or shortages, stitching quality disputes except as handled under our refund and
        support processes, failed pickups or deliveries caused by unavailability or incorrect
        addresses, or third-party payment, hosting, or courier failures.
      </p>
      <p>
        While we strive to provide a reliable service, we do not guarantee uninterrupted
        availability, error-free operation, or specific business or stitching outcomes. Where
        liability cannot be excluded, ApneTailor&apos;s total liability for any claim relating
        to an order shall not exceed the amount paid to ApneTailor for that order, to the
        maximum extent permitted by law.
      </p>

      <h2>14. Third-Party Services</h2>
      <p>
        The platform may rely on third-party providers for payments, authentication,
        notifications, cloud infrastructure, analytics, and logistics services. Their use may be
        subject to separate terms and privacy policies.
      </p>

      <h2>15. Privacy</h2>
      <p>
        Your use of ApneTailor is also governed by our{" "}
        <Link href="/privacy-policy/">Privacy Policy</Link>. Please review the Privacy Policy to
        understand how we collect, use, and protect information.
      </p>

      <h2>16. Grievance and Complaint Mechanism</h2>
      <p>
        If you have a complaint or grievance relating to the ApneTailor platform, an order,
        a payment, pickup or delivery, these Terms, or our services, you may raise it:
      </p>
      <ul>
        <li>Through in-app support or chat for order-related issues; or</li>
        <li>
          By email to{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        </li>
      </ul>
      <p>
        Please include your registered contact details, order reference where applicable, and a
        clear description of the issue. We will make reasonable efforts to acknowledge and
        address grievances in a timely manner. This mechanism does not limit any rights you may
        have under applicable Indian consumer protection or other laws.
      </p>

      <h2>17. Changes to Terms</h2>
      <p>
        We may modify these Terms of Service from time to time. Updated versions will be posted
        on this page and become effective upon publication.
      </p>

      <h2>18. Governing Law</h2>
      <p>These Terms shall be governed by and interpreted in accordance with the laws applicable in India.</p>

      <PlatformPoliciesNotice currentPolicy="terms" />

      <h2>19. Contact Us</h2>
      <p>For questions regarding these Terms of Service, please contact:</p>
      <p>
        ApneTailor Support Email:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
