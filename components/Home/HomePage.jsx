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
const HomePage = () => {
  return (
    <>
      <Banner />
      <Category />
      <Leadership/>
      <TrendingNews/>
      <Business/>
      <ArchitectureDesign/>
      <Voyages/>
      <DineDrink/>
      <SohLoves/>
      <Travel/>
      <BrandEdit/>
      <Videos/>
      <Events/>
      <Instagram/>
    </>
  );
};

export default HomePage;
