import { createData, fetchData } from "./api";

export const fetchPageData = async (endpoint) => {
  try {
    const data = await fetchData(endpoint);
    // console.log(`Fetched data for ${endpoint}:`, data);
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

export const postPageData = async (endpoint, payload) => {
  try {
    const response = await createData(endpoint, payload);
    console.log("RESPONSE ", response);
    // if (!response) {
    //   throw new Error(response?.message || "Failed to post data");
    // }

    return response || {};
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    return {
      props: {
        data: null,
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Failed to submit data",
      },
    };
  }
};
