import { createClient } from "next-sanity";

export const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`, // Your project ID
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`, // The name of the dataset in your Sanity account
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "v2023-08-20", // Use a specific API version (default: latest)
});
