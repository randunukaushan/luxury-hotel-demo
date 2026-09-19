const baseUrl = process.env.SMOKE_BASE_URL || "http://127.0.0.1:3000";

const routes = [
  "/",
  "/stay",
  "/experiences",
  "/dining",
  "/gallery",
  "/kandy",
  "/offers",
  "/faq",
  "/contact",
  "/availability",
  "/robots.txt",
  "/sitemap.xml",
  "/api/health",
];

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`, {
    redirect: "manual",
  });

  if (!response.ok) {
    throw new Error(`${route} returned HTTP ${response.status}`);
  }

  console.log(`OK ${response.status} ${route}`);
}

const home = await fetch(baseUrl);
const csp = home.headers.get("content-security-policy") || "";
if (!csp.includes("frame-ancestors 'none'") || !csp.includes("object-src 'none'")) {
  throw new Error("Security CSP header is missing required directives.");
}
console.log("OK CSP security directives");

const invalidEnquiry = await fetch(`${baseUrl}/api/enquiries`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ kind: "availability" }),
});

if (invalidEnquiry.status !== 400) {
  throw new Error(
    `Expected invalid enquiry to return HTTP 400, got ${invalidEnquiry.status}`,
  );
}
console.log("OK 400 /api/enquiries invalid payload");

const crossOriginEnquiry = await fetch(`${baseUrl}/api/enquiries`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Origin: "https://malicious.example",
    "Sec-Fetch-Site": "cross-site",
  },
  body: JSON.stringify({ kind: "availability" }),
});

if (crossOriginEnquiry.status !== 403) {
  throw new Error(
    `Expected cross-origin enquiry to return HTTP 403, got ${crossOriginEnquiry.status}`,
  );
}
console.log("OK 403 /api/enquiries cross-origin request");

const oversizedEnquiry = await fetch(`${baseUrl}/api/enquiries`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    kind: "contact",
    name: "Security test",
    email: "security@example.com",
    message: "x".repeat(20 * 1024),
  }),
});

if (oversizedEnquiry.status !== 413) {
  throw new Error(
    `Expected oversized enquiry to return HTTP 413, got ${oversizedEnquiry.status}`,
  );
}
console.log("OK 413 /api/enquiries oversized request");
