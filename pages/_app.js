import Layout from "@/components/Layout/Layout";
import useLenis from "@/Hooks/useLenis";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { API_END_POINTS } from "@/utils/constants";
import { fetchPageData } from "@/utils/fetchPageData";
import Head from "next/head";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps, menuData, categories }) {
  useLenis();
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
          <main className="relative">
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
