import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export const getTop = async () => {
  const response = await client.getList({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "top",
  });

  return response;
};

export const getBlog = async () => {
  const response = await client.getList({
    customRequestInit: {
      cache: "no-store",
    },
    endpoint: "blogs",
  });

  return response.contents;
};
