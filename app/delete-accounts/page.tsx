import { createMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/content/LegalPageLayout";
import { PlatformPoliciesNotice } from "@/components/content/PlatformPoliciesNotice";
import { siteConfig } from "@/lib/config/site";

export const metadata = createMetadata({
  title: "Account Deletion",
  description:
    "How to request deletion of your ApneTailor account and associated personal data.",
  path: "/delete-accounts/"
});

export default function DeleteAccountsPage() {
  return (
    <LegalPageLayout title="Account Deletion Request" lastUpdated="September 2026">
      <p>
        ApneTailor allows users and tailors using the ApneTailor User App and ApneTailor Tailor
        App to request deletion of their account and associated personal data.
      </p>

      <h2>How to Delete Your Account</h2>
      <p>You may request deletion in either of the following ways:</p>
      <h3>In the app</h3>
      <ol>
        <li>Open the ApneTailor User App or ApneTailor Tailor App, as applicable.</li>
        <li>Go to Profile or Account Settings.</li>
        <li>Select Delete Account.</li>
        <li>Confirm the deletion request.</li>
      </ol>
      <h3>By email</h3>
      <p>
        If you prefer a manual request, or you are unable to access your account, email{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> from your
        registered email address (where possible) and ask us to delete your account. Please
        include enough information for us to identify the account, such as your registered name,
        phone number, and whether you use the customer app or the tailor app.
      </p>

      <h2>Retention Period</h2>
      <p>
        When a deletion request is submitted, the account enters a pending deletion state for
        30 days. The account and related personal data will be deleted after those 30 days if no
        security, fraud, abuse, dispute, or legal-hold issues are identified during that period.
      </p>
      <p>
        If such issues are found, we may retain relevant information for longer as reasonably
        necessary for security, investigation, dispute resolution, and legal compliance.
      </p>
      <p>
        This retention period also helps us complete active transactions, resolve support
        requests, prevent fraud, maintain security, and comply with legal obligations.
      </p>
      <p>
        After the retention period expires and no blocking issues remain, permanent deletion
        processing begins automatically.
      </p>

      <h2>What Personal Data Is Deleted or Anonymized</h2>
      <p>
        After the applicable retention period, personal information is permanently deleted or
        anonymized, including:
      </p>
      <ul>
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Saved Addresses</li>
        <li>Profile Information</li>
        <li>Account Preferences</li>
        <li>Push Notification Tokens</li>
        <li>Authentication Identifiers</li>
      </ul>
      <p>
        Once anonymization is completed, the information can no longer be linked to the deleted
        account holder.
      </p>

      <h2>Order and Transaction Records</h2>
      <p>
        To comply with legal, accounting, fraud prevention, operational, security, and
        regulatory requirements, certain order and transaction records may be retained.
      </p>
      <p>Examples may include:</p>
      <ul>
        <li>Order Records</li>
        <li>Transaction History</li>
        <li>Payment Records</li>
        <li>Audit Logs</li>
        <li>Security Logs</li>
        <li>Delivery and Courier Records</li>
      </ul>
      <p>
        Where such records are retained, personal identifiers such as name, email, phone number,
        addresses, and push notification tokens are removed or replaced with anonymized
        references such as &quot;Deleted User&quot; or &quot;Deleted Tailor&quot;.
      </p>

      <h2>What Data May Be Retained</h2>
      <p>
        Certain information may be retained where required by applicable laws or for legitimate
        business purposes, including fraud prevention, dispute resolution, security
        investigations, accounting, taxation, regulatory compliance, and operational
        recordkeeping.
      </p>

      <h2>Permanent Deletion</h2>
      <p>Once permanent deletion and anonymization have been completed:</p>
      <ul>
        <li>Your account cannot be restored.</li>
        <li>Your personal information cannot be recovered.</li>
        <li>You must create a new account if you wish to use ApneTailor again.</li>
      </ul>

      <PlatformPoliciesNotice currentPolicy="delete-accounts" />

      <h2>Need Help?</h2>
      <p>For account deletion assistance or privacy-related questions, contact:</p>
      <p>
        Email: <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        <br />
        Website: <a href={siteConfig.domain}>{siteConfig.domain}</a>
      </p>
    </LegalPageLayout>
  );
}
