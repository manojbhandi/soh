import { generateSlug, stripHtmlTags } from "@/utils/commonFunctions";
import { getImageUrl } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const DesktopBanner = ({ data }) => {
  return (
    <div className="container">
      <div className="homeDeskBanner">
        {data?.length > 0 && data.map((item, index) => (
          <Link href={`/${generateSlug(item?.categoryName)}/${generateSlug(item?.subcategoryName)}/${item?.slug}`} key={index}>
            <Image src={getImageUrl(item?.bannerImages?.[0])} width={1920} height={1080} alt="" />
            {
              <div className="hbBannerTxt">
                <div>
                  <h3>{item?.categoryName}</h3>
                  <div>
                    <label>{item?.subcategoryName}</label>
                    <p>{stripHtmlTags(item.description, 80)}</p>
                  </div>
                  <span>View All</span>
                </div>
              </div>
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopBanner;
