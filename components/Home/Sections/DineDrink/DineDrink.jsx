import SubMainTitle from "@/components/Ui/SubMainTitle";
import Cta from "@/components/Ui/Cta";
import ArticleCard from "@/components/Ui/Cards/Article/ArticleCard";
import DineDrinkArticle from "./DineDrinkArticle";

const data = [
  {
    image: "/images/dine-drink/article01.jpg",
    subCategory: "GM's Think Tank",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/dine-drink/article02.jpg",
    subCategory: "Markets",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/dine-drink/article03.jpg",
    subCategory: "Development Update",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
  {
    image: "/images/dine-drink/article04.jpg",
    subCategory: "Development Update",
    title: "Lorem Ipsum is simply dummy text of the printing and industry.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    author: "Imran Shaikh",
  },
];


const DineDrink = () => {
  return (
    <section>
      <div className="bg-[#F7F3EA] py-[50px] xl:py-[5.208vw] relative">
        <div className="whiteStar left-[15px]"></div>
        <div className="container">
          <div className="lg:flex lg:gap-x-[20px] xl:gap-x-[2.344vw]">
            <div className="mb-[20px] lg:w-3/12">
              <div className="flex items-center mb-[20px] xl:mb-[2.604vw]">
                <div className="flex-1">
                  <SubMainTitle title={"Dine & Drink"} customClass={"!mb-0"} />
                </div>
                <div className="flex-none lg:hidden">
                  <Cta url={"#"} name={"View All"} />
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and industry.
                Lorem Ipsum has been the industry's standard.Lorem Ipsum is
                simply dummy text of the printing and industry.
              </p>
              <Cta
                url={"#"}
                name={"View All"}
                customClass={"hidden lg:table lg:mt-[40px]"}
              />
            </div>

            <div className="mb-[20px] lg:w-7/12">
              <DineDrinkArticle data={data}/>
            </div>

            <div className="radius lg:w-3/12 h-[200px] lg:h-auto">
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/images/videoAd.mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DineDrink;
