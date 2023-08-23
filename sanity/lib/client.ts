import { createClient } from "next-sanity";

export const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  token: `${process.env.NEXT_SANITY_TOKEN}`,

  apiVersion: "v2023-07-31",
  useCdn: false,
});
