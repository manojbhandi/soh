// services/userApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  // Enable refetching on certain conditions
  refetchOnFocus: true,
  refetchOnReconnect: true,
  // Cache tags for invalidation
  tagTypes: ["User", "Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      // Cache configuration
      keepUnusedDataFor: 300, // Keep data in cache for 5 minutes (in seconds)
      providesTags: ["Users", { type: "User", id: "LIST" }],
    }),
    getUserById: builder.query({
      query: ({ id }) => `users/${id}`,
      keepUnusedDataFor: 300,
      providesTags: (result, error, arg) =>
        result ? [{ type: "User", id: arg.id }] : [],
    }),
    // Add mutation example with cache invalidation
    addUser: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
      // Invalidate relevant cache on mutation
      invalidatesTags: ["Users", { type: "User", id: "LIST" }],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
} = userApi;

// Create wrapper for server-side usage
export const userApiUtils = userApi.endpoints;
