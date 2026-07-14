import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/content/LegalPageLayout";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "ApneTailor Privacy Policy — how we collect, use, store, and protect your personal information.",
  path: "/privacy-policy/"
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="June 2026">
      <p>
        ApneTailor (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) values your privacy and is
        committed to protecting your personal information. This Privacy Policy explains how we
        collect, use, store, and protect information when you use the ApneTailor mobile
        application, website, and related services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following information:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Mobile phone number</li>
        <li>Pickup and delivery addresses</li>
        <li>Order and stitching details</li>
        <li>Measurement information provided by users</li>
        <li>Device information and app usage information</li>
        <li>Push notification tokens</li>
        <li>Customer support communications</li>
        <li>Account authentication information</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Create and manage user accounts</li>
        <li>Process tailoring orders</li>
        <li>Match customers with tailors</li>
        <li>Provide pickup and delivery services</li>
        <li>Send order updates and notifications</li>
        <li>Improve app functionality and user experience</li>
        <li>Respond to customer support requests</li>
        <li>Prevent fraud, abuse, and unauthorized activity</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We do not sell your personal information.</p>
      <p>Information may be shared only when necessary with:</p>
      <ul>
        <li>Registered tailors fulfilling customer orders</li>
        <li>Delivery and logistics partners</li>
        <li>Service providers that support app operations</li>
        <li>Government authorities when required by law</li>
      </ul>

      <h2>4. Notifications</h2>
      <p>
        ApneTailor may send notifications regarding order status, account activity, security
        alerts, and service-related updates. Users may manage notification preferences through
        device settings.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement reasonable technical and organizational safeguards to protect user
        information against unauthorized access, alteration, disclosure, or destruction.
        However, no method of internet transmission or electronic storage is completely secure.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain user information only for as long as necessary to provide services, fulfill
        legal obligations, resolve disputes, and enforce agreements.
      </p>

      <h2>7. Account Deletion</h2>
      <p>
        Users may request account deletion through the application. Certain information may be
        retained where required for legal, security, fraud prevention, or regulatory purposes.
      </p>

      <h2>8. Refunds and Payment Disputes</h2>
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
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Our services are not directed towards people under 18 years of age. We do not knowingly
        collect personal information from children.
      </p>

      <h2>10. Third-Party Services</h2>
      <p>
        The application may use third-party services such as analytics, cloud hosting,
        authentication providers, notification providers, and payment or logistics services.
        These services may process information according to their own privacy policies.
      </p>

      <h2>11. Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes become effective when
        published on this page. Users are encouraged to review this page periodically.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have questions regarding this Privacy Policy, refund requests, or payment
        disputes, please contact:
      </p>
      <p>
        ApneTailor Support Email:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
