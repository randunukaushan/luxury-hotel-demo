import { siteStatus } from "@/lib/site";

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    {
      status: "ok",
      siteStatus,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
