import Image from "next/image";
import Slider from "@/components/Ui/Slider";
import ArticleSubCategory from "@/components/Ui/Cards/Article/ArticleSubCategory";
import ArticleTitle from "@/components/Ui/Cards/Article/ArticleTitle";
import MainTitle from "@/components/Ui/MainTitle";
import CtaBtn from "@/components/Ui/CtaBtn";
import Link from "next/link";

const Banner = () => {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: false,
    loop: true,
    speed: 1500,
    autoplay: { delay: 3000 },
  };

  return (
    <section className="relative ">
      <div className="whiteStar right-[4%] z-[2]"></div>
      <Slider
        customClass={"relative group bg-grey "}
        slides={data.map((item, index) => (
          <div key={index}>
            <div className="aspect-video lg:aspect-auto lg:h-[44.688vw] sm:after:absolute sm:after:top-0 sm:after:left-0 sm:after:w-full sm:after:h-full sm:after:bg-gradient-to-b from-transparent via-black/50 to-black/80">
              <Image
                src={item?.banner}
                width={1920}
                height={1080}
                className="h-full object-cover"
              />
            </div>
            <div className="py-[30px] sm:py-0 sm:absolute sm:bottom-[30px] sm:bg-transparent md:bottom-[6.25vw] left-0 w-full text-mainBlack sm:text-white z-[1] opacity-0 group-[.swiper-slide-active]:opacity-100 delay-[2s] duration-[0.5s] translate-y-[30px] group-[.swiper-slide-active]:translate-y-[0]">
              <div className="container">
                <div className="flex">
                  <div className="lg:w-1/2 xl:w-[32.292vw]">
                    <ArticleTitle
                      articleSubCategory={item?.subcategory}
                      subcategoryStyle={"text-mainBlack sm:text-white"}
                      articleTitle={item?.title}
                      customClass={
                        "text-mainBlack sm:text-white font-fh text-[22px] sm:text-[25px] md:text-[30px] xl:text-[2.5vw] line-clamp-2 md:line-clamp-3 !mb-0    "
                      }
                    />
                    <CtaBtn
                      customClass={
                        "mt-[30px] xl:mt-[2.604vw] text-mainBlack sm:text-white hover:bg-white hover:text-mainBlack"
                      }
                      title={"Explore More"}
                      url={"/article/article-sub-category/template-one"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        setting={sliderSettings}
      />

      {/* <div className="absolute xl:bottom-[6.25vw] xl:right-[7.477vw] z-[1]">
        <ul className="grid grid-cols-2 xl:gap-x-[2.604vw] xl:gap-y-[1.302vw] ">
          {subcategoryList.map((item, index) => (
            <li
              key={index}
            
            >
              <Link href={item?.link}   className="flex gap-x-[10px] text-white text-opacity-[0.50] hover:text-opacity-100 xl:pb-[.5vw] font-medium relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.01274 0.677796C8.04089 0.440735 8.38489 0.440735 8.41304 0.677796L8.64901 2.66653C8.95371 5.23452 10.9784 7.25918 13.5463 7.56388L15.5351 7.79985C15.7722 7.828 15.7722 8.172 15.5351 8.20015L13.5463 8.43612C10.9784 8.74082 8.95371 10.7655 8.64901 13.3335L8.41304 15.3222C8.38489 15.5593 8.04089 15.5593 8.01274 15.3222L7.77677 13.3335C7.47207 10.7655 5.44741 8.74082 2.87942 8.43612L0.890687 8.20015C0.653625 8.172 0.653625 7.828 0.890687 7.79985L2.87942 7.56388C5.44741 7.25918 7.47207 5.23452 7.77677 2.66653L8.01274 0.677796Z"
                    fill="#FFFDF8"
                  />
                </svg>{" "}
                {item?.subcateogory}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
};

export default Banner;

const data = [
  {
    banner: "/images/article/business/devlopment-update/banner.jpg",
    subcategory: "Development Update",
    title: "Lorem Ipsum is simply dummy text of the printing industry. ",
    url: "/article/article-sub-category/template-one",
  },
  {
    banner: "/images/article/business/devlopment-update/banner.jpg",
    subcategory: "Development Update",
    title: "Lorem Ipsum is simply dummy text of the printing industry. ",
    url: "/article/article-sub-category/template-one",
  },
];

const subcategoryList = [
  {
    subcateogory: "Development Update",
    link: "/article/article-sub-category/template-one",
  },
  {
    subcateogory: "Talent",
    link: "/article/article-sub-category/template-one",
  },
  {
    subcateogory: "Technology",
    link: "/article/article-sub-category/template-one",
  },
  {
    subcateogory: "Insights+Columns",
    link: "/article/article-sub-category/template-one",
  },
  {
    subcateogory: "Markets",
    link: "/article/article-sub-category/template-one",
  },
  {
    subcateogory: "Sustainability",
    link: "/article/article-sub-category/template-one",
  },
];
