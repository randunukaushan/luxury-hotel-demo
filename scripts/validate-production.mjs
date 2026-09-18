const required = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "RESEND_API_KEY",
  "ENQUIRY_TO_EMAIL",
  "ENQUIRY_FROM_EMAIL",
];

const missing = required.filter((name) => !process.env[name]?.trim());
const errors = [];

if (process.env.NEXT_PUBLIC_SITE_STATUS !== "production") {
  errors.push("NEXT_PUBLIC_SITE_STATUS must be production.");
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
if (siteUrl) {
  try {
    const parsed = new URL(siteUrl);
    if (parsed.protocol !== "https:") errors.push("NEXT_PUBLIC_SITE_URL must use HTTPS.");
    if (["localhost", "127.0.0.1"].includes(parsed.hostname)) {
      errors.push("NEXT_PUBLIC_SITE_URL cannot point to localhost in production.");
    }
  } catch {
    errors.push("NEXT_PUBLIC_SITE_URL must be a valid absolute URL.");
  }
}

if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true") {
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()) {
    errors.push(
      "NEXT_PUBLIC_GA_MEASUREMENT_ID is required when analytics is enabled.",
    );
  }
}

if (missing.length) {
  errors.push(`Missing required production variables: ${missing.join(", ")}`);
}

if (errors.length) {
  console.error("\nProduction configuration is not ready:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Production configuration looks ready.");
