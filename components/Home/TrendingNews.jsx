import SubMainTitle from "@/components/Ui/SubMainTitle";
import ArticleLabel from "@/components/Ui/Article/ArticleLabel";
import ArticleTitle from "../Ui/Article/ArticleTitle";
import Link from "next/link";
import Image from "next/image";

const trendingNews = [
  {
    label: "Hotels",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    url: "#",
  },
  {
    label: "Policy",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    url: "#",
  },
  {
    label: "Wines & Spirits",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    url: "#",
  },
  {
    label: "Inspired Stays",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    url: "#",
  },
];

const TrendingNews = () => {
  return (
    <section>
      <div className="container">
        <div className="md:flex justify-between">
          <div className="md:w-6/12 lg:w-[52.2%] mb-10 md:mb-0">
            <Link href={"#"} className="block rounded-[8px] xl:rounded-[0.417vw] overflow-hidden">
              <Image src={"/images/Ad1.jpg"} width={773} height={601} />
            </Link>
          </div>
          <div className="md:w-5/12 lg:w-[35.4%]">
            <SubMainTitle title={"Trending News"} />
            <ul className="*:border-b *:border-solid *:border-[#C2C2C2] *:pb-[15px] *:xl:pb-[0.781vw] *:mb-[15px] *:xl:mb-[1.563vw] last:*:mb-0">
              {trendingNews &&
                trendingNews?.map((item, index) => (
                  <li key={index}>
                    <Link href={item?.url}>
                      <ArticleLabel articleLabel={item?.label} />
                      <ArticleTitle articleTitle={item?.title} />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;
