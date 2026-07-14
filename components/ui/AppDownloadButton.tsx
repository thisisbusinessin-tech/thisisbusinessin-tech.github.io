import { siteConfig } from "@/lib/config/site";

interface AppDownloadButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
}

export function AppDownloadButton({
  className = "",
  variant = "primary"
}: AppDownloadButtonProps) {
  const { appDownload } = siteConfig;
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  if (appDownload.status === "live" && appDownload.url) {
    return (
      <a
        href={appDownload.url}
        className={`${baseClass} ${className}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {appDownload.label}
      </a>
    );
  }

  return (
    <span
      className={`${baseClass} ${className} opacity-80 cursor-default`}
      role="status"
      aria-label={appDownload.placeholderMessage}
      title={appDownload.placeholderMessage}
    >
      {appDownload.label}
      <span className="sr-only"> — {appDownload.placeholderMessage}</span>
    </span>
  );
}
