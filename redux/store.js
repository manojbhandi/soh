import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import testSlice from "./slices/test.slice";
const combinedReducer = combineReducers({
  testREducer: testSlice,
});
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const store = configureStore({
  reducer,
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
