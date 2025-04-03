"use client";
import { getStore } from "./store.js";
import { Provider } from "react-redux";
import { useRef } from "react";

export function Providers({ children, initialReduxState }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = getStore(initialReduxState);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
