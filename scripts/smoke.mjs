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
