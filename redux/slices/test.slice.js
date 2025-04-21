import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test_slice",
  initialState: {},
  reducers: {
    setdealerLocationsData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setdealerLocationsData } = testSlice.actions;
export default testSlice.reducer;
