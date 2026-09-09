import Link from "next/link";

export type CorePolicyId =
  | "privacy-policy"
  | "terms"
  | "data-compliance"
  | "delete-accounts";

const corePolicies: { id: CorePolicyId; href: string; label: string }[] = [
  { id: "privacy-policy", href: "/privacy-policy/", label: "Privacy Policy" },
  { id: "terms", href: "/terms/", label: "Terms of Service" },
  { id: "data-compliance", href: "/data-compliance/", label: "Data Compliance" },
  { id: "delete-accounts", href: "/delete-accounts/", label: "Account Deletion" }
];

const servicePolicies = [
  { href: "/refund-and-cancellation-policy/", label: "Refund and Cancellation Policy" },
  { href: "/pickup-and-delivery-policy/", label: "Pickup and Delivery Policy" },
  { href: "/editorial-policy/", label: "Editorial Policy" },
  { href: "/review-policy/", label: "Review Policy" }
];

const supportAndTrustPages = [
  { href: "/contact/", label: "Contact" },
  { href: "/support/", label: "Support" },
  { href: "/security/", label: "Security & Trust" },
  { href: "/accessibility-statement/", label: "Accessibility Statement" },
  { href: "/media/", label: "Media & Press" },
  { href: "/editorial-team/", label: "Editorial Team" }
];

interface PlatformPoliciesNoticeProps {
  currentPolicy: CorePolicyId;
}

export function PlatformPoliciesNotice({ currentPolicy }: PlatformPoliciesNoticeProps) {
  return (
    <>
      <h2>Related Policies and Platform Documents</h2>
      <p>
        ApneTailor&apos;s platform is governed by a set of policies and documents that work
        together. The following four documents form the core agreement between you and
        ApneTailor:
      </p>
      <ul>
        {corePolicies.map((policy) => (
          <li key={policy.id}>
            {policy.id === currentPolicy ? (
              <strong>{policy.label} (this document)</strong>
            ) : (
              <Link href={policy.href}>{policy.label}</Link>
            )}
          </li>
        ))}
      </ul>
      <p>
        By using the ApneTailor mobile application, website, or related services, or by
        agreeing to any one of these four core documents, you agree to all of them, as each
        may be updated from time to time.
      </p>
      <p>
        You should also read the following additional policies and platform documents. They
        apply to specific aspects of our service and are incorporated by reference into the
        core policies above:
      </p>

      <h3>Service policies</h3>
      <ul>
        {servicePolicies.map((policy) => (
          <li key={policy.href}>
            <Link href={policy.href}>{policy.label}</Link>
          </li>
        ))}
      </ul>

      <h3>Support and trust</h3>
      <ul>
        {supportAndTrustPages.map((page) => (
          <li key={page.href}>
            <Link href={page.href}>{page.label}</Link>
          </li>
        ))}
      </ul>

      <p>
        Please review these documents carefully. Where they relate to your use of ApneTailor,
        they form part of the same platform terms governing orders, data handling, support,
        and trust on the platform.
      </p>
    </>
  );
}
