import { fetchData } from "./api";

export const fetchPageData = async (endpoint) => {
  try {
    const data = await fetchData(endpoint);
    console.log(`Fetched data for ${endpoint}:`, data);
    return { props: { data: data || {} } };
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return {
      props: {
        data: null,
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Failed to load data",
      },
    };
  }
};
