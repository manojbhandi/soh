import CtaBtn from "../Ui/CtaBtn";
import Banner from "./banner";
import Product_List from "./product_list";
import Recommended_Products from "./recommended_products";

const SOH_Recommended_Comp = () => {
  return (
    <div>
      <Banner
        title={"SOH Recommends"}
        para={
          "The exquisite Prive collection of bespoke rugs is the embodiment of Royal Thai's commitment to partnering with innovative artists to offer a diverse and multicultural perspective through striking, one-of-a-kind floor coverings. The latest collection is the result of an exclusive collaboration with renowned British interior designer Lawrence Llewellyn-Bowen."
        }
      />
      <div className="mb-10 lg:mb-[5vw]">
        <Product_List />
        <CtaBtn
          title={"Load more"}
          customClass={"mx-auto mt-8 lg:mt-[3vw] normal-case"}
        />
      </div>

      <Recommended_Products />
    </div>
  );
};

export default SOH_Recommended_Comp;
