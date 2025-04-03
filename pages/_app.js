import "@/styles/globals.css";
import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import useLenis from "@/Hooks/useLenis";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function MyApp({ Component, pageProps }) {
  useLenis();

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Welcome to SOH</title>
          </Head>
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
