import "@/styles/globals.css";
import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import useLenis from "@/Hooks/useLenis";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { fetchPageData } from "@/utils/fetchPageData";
import { API_END_POINTS } from "@/utils/constants";

function MyApp({ Component, pageProps, menuData, categories }) {
  useLenis();
  // console.log("categories???", categories);
  return (
    <>
      <Provider store={store}>
        <Layout
          data={menuData?.props?.data}
          categories={categories.props?.data}
        >
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

MyApp.getInitialProps = async (appContext) => {
  // const { ctx, Component } = appContext;
  let menuData = [];
  let categories = [];
  try {
    [menuData, categories] = await Promise.all([
      fetchPageData(API_END_POINTS.getAllCategoriesWithSubCategories),
      fetchPageData(API_END_POINTS.getAllCatgories),
    ]);
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
  return { menuData, categories };
};
