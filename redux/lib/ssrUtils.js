// lib/ssrUtils.js
import { createStore } from "../store";

export const withDataFetching = (dataFetchActions = []) => {
  return async () => {
    try {
      const store = createStore();
      console.log("Created store in withDataFetching");

      // Execute all data fetching actions and unwrap the promises
      const promises = dataFetchActions.map((action) => {
        const result = store.dispatch(action());
        console.log("Dispatched action:", action.name || "unnamed action");
        // For RTK Query, we need to unwrap the promise
        return result.unwrap().catch((err) => {
          console.error("Error in data fetching:", err);
          return null;
        });
      });

      // Wait for all data fetching to complete
      await Promise.all(promises);

      // Important: Wait a tick to allow the store to update
      await new Promise((resolve) => setTimeout(resolve, 0));

      const state = store.getState();
      console.log(
        "Store state after fetching:",
        JSON.stringify(state, null, 2).substring(0, 200) + "..."
      );

      return {
        props: {
          initialReduxState: state, // No need for JSON parse/stringify with RTK Query
        },
      };
    } catch (error) {
      console.error("Error in withDataFetching:", error);
      throw error;
    }
  };
};
