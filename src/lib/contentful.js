// src/app/lib/contentful.js
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// land
export const fetchLandDeals = async () => {
  const response = await client.getEntries({
    content_type: "landDeals",
  });

  return response.items;
};

// property
export const fetchPropDeals = async () => {
  const response = await client.getEntries({
    content_type: "deals",
  });

  return response.items;
};
