import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/content/LegalPageLayout";
import { PlatformPoliciesNotice } from "@/components/content/PlatformPoliciesNotice";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "ApneTailor Privacy Policy — how we collect, use, store, and protect your personal information.",
  path: "/privacy-policy/"
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="September 2026">
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
        <li>In-app chat and customer support communications</li>
        <li>Device information and app usage information</li>
        <li>Push notification tokens</li>
        <li>Account authentication information</li>
        <li>
          Tailor onboarding verification information, which may include a live selfie
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We collect your personal information to create your account, process tailoring orders,
        coordinate pickups and deliveries, and provide customer support.
      </p>
      <p>We also use collected information to:</p>
      <ul>
        <li>Match customers with tailors</li>
        <li>Send order updates and notifications</li>
        <li>Improve app functionality and user experience</li>
        <li>Review in-app chats where reasonably necessary for operations and support</li>
        <li>Prevent fraud, abuse, impersonation, and unauthorized activity</li>
        <li>Verify tailor applicants during onboarding</li>
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

      <h2>4. In-App Chats</h2>
      <p>
        Customers and tailors may exchange messages in the ApneTailor app to coordinate orders.
        These chats are part of platform operations. Authorized ApneTailor personnel may access,
        review, and use chat content where reasonably necessary for day-to-day operations,
        customer support, feedback and quality review, dispute handling, safety, fraud
        prevention, and enforcement of our policies.
      </p>
      <p>
        Chats associated with an order are normally deleted within 7 to 14 days after the
        associated order is completed, unless a longer period is reasonably required for
        support, disputes, security, fraud prevention, or legal compliance.
      </p>

      <h2>5. Tailor Verification Selfies</h2>
      <p>
        During tailor onboarding, ApneTailor may collect a live selfie to help verify that a
        genuine person is applying for the tailor account and to protect the platform against
        impersonation, fraud, abuse, and unauthorized accounts. We retain verification
        information only for as long as reasonably necessary for these purposes, including
        security, fraud prevention, dispute resolution, and compliance with applicable legal
        requirements. When the information is no longer required for these purposes, it will be
        securely deleted in accordance with our data-retention practices, unless a longer
        retention period is required or permitted by law.
      </p>

      <h2>6. Notifications</h2>
      <p>
        ApneTailor may send notifications regarding order status, account activity, security
        alerts, and service-related updates. Users may manage notification preferences through
        device settings.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We implement reasonable technical and organizational safeguards to protect user
        information against unauthorized access, alteration, disclosure, or destruction.
        However, no method of internet transmission or electronic storage is completely secure.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain user information only for as long as necessary to provide services, fulfill
        legal obligations, resolve disputes, and enforce agreements.
      </p>
      <p>
        After an order is completed, certain information may continue to be kept for operations,
        accounting, support, dispute resolution, security, and legal compliance. In-app chats
        are normally deleted within 7 to 14 days after the associated order is completed, as
        described above. Order, payment, and logistics records may be retained for longer where
        reasonably necessary.
      </p>

      <h2>9. Your Data Rights</h2>
      <p>
        Under applicable data protection laws, including the Digital Personal Data Protection
        Act, 2023 (India), where applicable, you may have rights regarding your personal
        information. ApneTailor supports the following:
      </p>

      <h3>Access to your information</h3>
      <p>
        You may ask what personal information ApneTailor holds about you. Customers can review
        much of their account and order information directly in the ApneTailor User App. If you
        want a summary of personal information we hold, or information not visible in the app,
        contact us at{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> from your
        registered email address where possible. We will verify your identity and respond within
        a reasonable time, subject to applicable law and legitimate operational or security
        requirements.
      </p>
      <p>
        ApneTailor does not currently offer an automated &quot;Download My Data&quot; feature.
        Access requests may be handled through support while we evaluate future self-service
        options.
      </p>

      <h3>Correction of your information</h3>
      <p>
        You should keep your account information accurate and up to date. Customers using the
        ApneTailor User App can update eligible profile fields in the app, including name,
        phone number, email address, saved addresses, and profile photo, where supported.
      </p>
      <p>
        Tailors using the ApneTailor Tailor App can update eligible profile fields in the app.
        Where a field cannot be changed in the app, or a correction requires manual review,
        tailors may contact{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> to request
        an update. We may ask for verification before making certain changes.
      </p>
      <p>
        For more detail on how we handle data rights requests, see our{" "}
        <Link href="/data-compliance/">Data Compliance</Link> statement.
      </p>

      <h2>10. Data Breach Response</h2>
      <p>
        ApneTailor maintains internal processes to help detect, contain, investigate, and
        respond to suspected or confirmed unauthorized access to, or disclosure of, personal
        information. If we become aware of a personal data breach that is likely to affect
        your rights or interests, we will take reasonable steps to address it, including
        mitigation, investigation, and corrective action.
      </p>
      <p>
        Where required under applicable law, including the Digital Personal Data Protection
        Act, 2023 (India), we will notify the appropriate authority and affected individuals
        within the timeframes and manner required by law.
      </p>

      <h2>11. Account Deletion</h2>
      <p>
        Users and tailors may request account deletion in the relevant ApneTailor app, or by
        emailing{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>. When an
        account is deleted or a deletion request is submitted, the account and related personal
        data will be deleted after 30 days if no security, fraud, abuse, dispute, or legal-hold
        issues are identified during that period. If such issues are found, relevant information
        may be retained for longer as reasonably necessary for security, investigation, dispute
        resolution, and legal compliance.
      </p>
      <p>
        See our{" "}
        <Link href="/delete-accounts/">Account Deletion</Link> page for the full process.
      </p>

      <h2>12. Children&apos;s Privacy</h2>
      <p>
        Our services are not directed towards people under 18 years of age. We do not knowingly
        collect personal information from children.
      </p>

      <h2>13. Third-Party Services</h2>
      <p>
        The application may use third-party services such as analytics, cloud hosting,
        authentication providers, notification providers, and payment or logistics services.
        These services may process information according to their own privacy policies.
      </p>

      <h2>14. Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes become effective when
        published on this page. Users are encouraged to review this page periodically.
      </p>

      <PlatformPoliciesNotice currentPolicy="privacy-policy" />

      <h2>15. Contact Us</h2>
      <p>
        If you have questions regarding this Privacy Policy or how we handle personal
        information, please contact:
      </p>
      <p>
        ApneTailor Support Email:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
