import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import "swiper/css";
import { stripHtmlTags } from "@/utils/commonFunctions";
import { getImageUrl } from "@/utils/constants";
import ArticleSubCategory from "@/components/Ui/Cards/Article/ArticleSubCategory";
import ArticleShortPara from "@/components/Ui/Cards/Article/ArticleShortPara";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import Link from "next/link";
import { generateSlug } from "@/utils/commonFunctions";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";

const MobileBanner = ({ data }) => {

console.log('data====', data)

  return (
    <Swiper
      modules={[Autoplay]}

      spaceBetween={20}
      slidesPerView={1.2}
      speed={2000}
      loop={true}
      autoplay={true}
      centeredSlides={true}
      breakpoints={{
        575: {
          slidesPerView: 2.1,
        },
      }}
      className="homeMobBanner"
    >
      {data &&
        data?.map((item, index) => (
          <SwiperSlide href={item?.url} key={index}>
            <ArticleImage articleImage={getImageUrl(item?.bannerImages?.[0])} articleImgStyle={'!pt-[125%]'}/>
            <div className="hbBannerTxt">
              <SubMainTitle title={item?.categoryName} customClass={'mb-[10px]'}/>
              <ArticleSubCategory articleSubCategory={item?.subcategoryName}/>
              <ArticleTitle articleTitle={stripHtmlTags(item.description, 80)}/>
              <Link href={`/${generateSlug(item?.categoryName)}/${generateSlug(item?.subcategoryName)}`}><span>View All</span></Link>
            </div>
            <Link href={`/${generateSlug(item?.categoryName)}/${generateSlug(item?.subcategoryName)}/${item?.slug}`} className={'strechedLink'}></Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MobileBanner;
