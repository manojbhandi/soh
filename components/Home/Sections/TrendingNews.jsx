import SubMainTitle from "@/components/Ui/SubMainTitle";

import Link from "next/link";
import Image from "next/image";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";

const TrendingNews = () => {
  return (
    <section>
      <div className="container">
        <div className="md:flex justify-between">
          <div className="md:w-6/12 lg:w-[52.2%] mb-10 md:mb-0">
            <Link
              href={"#"}
              className="block rounded-[8px] xl:rounded-[0.417vw] overflow-hidden"
            >
              <Image src={"/images/Ad1.jpg"} width={773} height={601} alt="" />
            </Link>
          </div>
          <div className="md:w-5/12 lg:w-[35.4%]">
            {trendingData?.heading && <SubMainTitle title={trendingData?.heading} />}
            {trendingData?.data && (
              <ul className="*:border-b *:border-solid *:border-[#C2C2C2] *:pb-[15px] *:xl:pb-[0.781vw] *:mb-[15px] *:xl:mb-[1.563vw] last:*:mb-0">
                {trendingData?.data?.map((item, index) => (
                  <li key={index}>
                    <ArticleCard
                      articleSubCategory={item?.subCategory}
                      articleTitle={item?.title}
                      articleDpLink={item?.link}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;


const trendingData = {
  heading: "Trending News",
  data: [
    {
      subCategory: "Hotels",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: "/article/article-sub-category/template-two",
    },
    {
      subCategory: "Policy",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: "/article/article-sub-category/template-two",
    },
    {
      subCategory: "Wines & Spirits",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: "/article/article-sub-category/template-two",
    },
    {
      subCategory: "Inspired Stays",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      link: "/article/article-sub-category/template-two",
    },
  ],
};
