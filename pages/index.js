import HomePage from "@/components/Home/HomePage";

import { API_END_POINTS } from "@/utils/constants";
import { fetchPageData } from "@/utils/fetchPageData";

const Index = ({ banners, homeData }) => {
  return <HomePage data={homeData} banners={banners} />;
};

export default Index;

export const getServerSideProps = async () => {
  const [homeData, banners] = await Promise.all([
    fetchPageData(API_END_POINTS.home),
    fetchPageData(API_END_POINTS.getHomeBanners),
  ]);
  return {
    props: {
      banners: banners?.props?.data,
      homeData: homeData?.props?.data,
    },
  };
};
