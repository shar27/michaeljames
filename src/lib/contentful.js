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

export const fetchHero = async () => {
  const response = await client.getEntries({
    content_type: "hero",
  });

  return response.items;
};

export const fetchLogo = async () => {
  const response = await client.getEntries({
    content_type: "logo",
  });

  return response.items;
};

export const fetchParalax = async () => {
  const response = await client.getEntries({
    content_type: "paralax",
  });

  return response.items;
};

export const fetchSectionOne = async () => {
  const response = await client.getEntries({
    content_type: "sectionOne",
  });

  return response.items;
};

export const fetchSectionTwo = async () => {
  const response = await client.getEntries({
    content_type: "sectionTwo",
  });

  return response.items;
};

// property
export const fetchPropDeals = async () => {
  const response = await client.getEntries({
    content_type: "propertyDeals",
  });

  return response.items;
};

export const fetchServices = async () => {
  const response = await client.getEntries({
    content_type: "services",
  });

  return response.items;
};
