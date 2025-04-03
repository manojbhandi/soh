import { commonData } from "@/utils/globalServerSiderProps";
import ArchitectureDesign from "./Sections/ArchitectureDesign/ArchitectureDesign";
import Banner from "./Sections/Banner/Banner";
import BrandEdit from "./Sections/BrandEdit";
import Business from "./Sections/Business/Business";
import Category from "./Sections/Category";
import DineDrink from "./Sections/DineDrink/DineDrink";
import Events from "./Sections/Events";
import Instagram from "./Sections/Instagram";
import Leadership from "./Sections/Leadership/Leadership";
import SohLoves from "./Sections/SohLoves";
import Travel from "./Sections/Travel/Travel";
import TrendingNews from "./Sections/TrendingNews";
import Videos from "./Sections/Videos/Videos";
import Voyages from "./Sections/Voyages";
import { withDataFetching } from "@/redux/lib/ssrUtils";
import { userApi } from "@/redux/services/userApi";
import { fetchData } from "@/utils/api";
import { API_END_POINTS } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const HomePage = ({ data }) => {
  // Log everything to see what we're actually getting
  console.log("HOMEPAGE PROPS:", data);
  const dispatch = useDispatch();

  return (
    <>
      <Banner />
      <Category />
      <Leadership />
      <TrendingNews />
      <Business />
      <ArchitectureDesign />
      <Voyages />
      <DineDrink />
      <SohLoves />
      <Travel />
      <BrandEdit />
      <Videos />
      <Events />
      <Instagram />
    </>
  );
};

export default HomePage;

// export const getServerSideProps = async (context) => {
//   try {
//     const id = 5;
//     console.log("Starting getServerSideProps...");

//     // Use the utility function to fetch data
//     const ssrResult = await withDataFetching([
//       () => userApi.endpoints.getUserById.initiate({ id })
//     ])();

//     console.log("SSR Result:", JSON.stringify(ssrResult));

//     return {
//       props: {
//         ...ssrResult.props,
//         id
//       }
//     };
//   } catch (error) {
//     console.error("Error in getServerSideProps:", error);
//     return {
//       props: {
//         id: 5,
//         error: error.message
//       }
//     };
//   }
// };