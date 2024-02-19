import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};
