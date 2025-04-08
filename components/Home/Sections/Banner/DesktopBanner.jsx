import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";
import ArticleSubCategory from "@/components/Ui/Cards/Article/ArticleSubCategory";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import { generateSlug, stripHtmlTags } from "@/utils/commonFunctions";
import { getImageUrl } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const DesktopBanner = ({ data }) => {
  return (
    <div className="container">
      <div className="homeDeskBanner">
        {data?.length > 0 && data.map((item, index) => (
          <div key={index}>
            <ArticleImage articleImage={getImageUrl(item?.bannerImages?.[0])}/>
            {
              <div className="hbBannerTxt">
                <div>
                  <SubMainTitle title={item?.categoryName} customClass={'text-white'}/>
                  <div>
                    <ArticleTitle articleSubCategory={item?.subcategoryName} subcategoryStyle={'text-white'} articleTitle={stripHtmlTags(item.description, 80)} customClass={'text-white'}/>
                  </div>
                  <span>View All</span>
                </div>
              </div>
            }
            <Link className="strechedLink" href={`/${generateSlug(item?.categoryName)}/${generateSlug(item?.subcategoryName)}/${item?.slug}`} ></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopBanner;
