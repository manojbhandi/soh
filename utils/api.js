import axios from "axios";
import QuickLRU from "quick-lru";
// export const API_BASE_URL = "http://localhost:3001/";
export const API_BASE_URL = "http://134.209.150.140:3001/";
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

// General API Request Handler

const cache = new QuickLRU({ maxSize: 100 });

const getCacheKey = (method, endpoint, data) => {
  const dataKey = data ? JSON.stringify(data) : "";
  return `${method}:${endpoint}:${dataKey}`;
};
const apiRequest = async (method, endpoint, data = null, useCache = true) => {
  const cacheKey = getCacheKey(method, endpoint, data);

  if (method === "GET" && useCache && cache.has(cacheKey)) {
    console.log("Returning cached response:", endpoint);
    return cache.get(cacheKey);
  }
  try {
    const config = {
      method,
      url: `${API_BASE_URL}${endpoint}`,
    };
    console.log("BASEURL", `${API_BASE_URL}${endpoint}`);

    if (data) {
      config.data = data;
    }

    const res = await axios(config);
    if (method === "GET" && useCache) {
      cache.set(cacheKey, res.data);
      setTimeout(() => cache.delete(cacheKey), 5 * 60 * 1000);
    }
    if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
      cache.delete(getCacheKey("GET", endpoint, null));
    }
    return res.data;
  } catch (error) {
    if (error?.response?.status === 422 || error?.response?.status === 401) {
      console.log(error?.response?.data);
      return error?.response?.data;
    }

    if (error?.response?.status === 429) {
      const customResponse = {
        success: false,
        error_code: 429,
        message: "Too many requests, please try again in sometime.",
        data: {
          type: "alert",
          icon: "error",
          title: "Request failed",
          text: "Invalid Request",
        },
      };

      return customResponse;
    }
    // console.error(`API ${method.toUpperCase()} request error:`, error);
    // throw new Error(`Failed to ${method} data from API`);
  }
};

// CRUD functions
// Create (POST)
export const createData = async (endpoint, payload) => {
  return await apiRequest("POST", endpoint, payload, false);
};

// Read (GET)
export const fetchData = async (endpoint, useCache = false) => {
  console.log("Fetching data from:", endpoint);
  return await apiRequest("GET", endpoint, null, useCache);
};

// Update (PUT or PATCH)
export const updateData = async (endpoint, payload, method = "PUT") => {
  return await apiRequest(method, endpoint, payload, false);
};

// Delete (DELETE)
export const deleteData = async (endpoint) => {
  return await apiRequest("DELETE", endpoint, null, false);
};
