import { createClient } from "@sanity/client";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

export const isSanityConfigured = Boolean(sanityProjectId && sanityDataset);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityProjectId!,
      dataset: sanityDataset,
      apiVersion: "2026-09-01",
      useCdn: true,
      perspective: "published",
    })
  : null;
