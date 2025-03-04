import "@/styles/globals.css";
import React from "react";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Welcome to SOH</title>
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default MyApp;
