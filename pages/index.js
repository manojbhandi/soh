import HomePage from "@/components/Home/HomePage";

import { API_END_POINTS } from "@/utils/constants";
import { fetchPageData } from "@/utils/fetchPageData";

const Index = ({ banners, homeData, categories }) => {
  return <HomePage data={homeData} banners={banners} categories={categories} />;
};

export default Index;

export const getServerSideProps = async () => {
  const [homeData, banners, categories] = await Promise.all([
    fetchPageData(API_END_POINTS.home),
    fetchPageData(API_END_POINTS.getHomeBanners),
    fetchPageData(API_END_POINTS.getAllCatgories),
  ]);

  return {
    props: {
      banners: banners?.props?.data,
      homeData: homeData?.props?.data,
      categories: categories?.props?.data,
    },
  };
};
