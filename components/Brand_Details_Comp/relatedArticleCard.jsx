import Image from "next/image";
import RelatedTextCard from "./relatedTextCard";

const Related_Article_Card = ({ imgSrc, subTitle, title, para }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-5 lg:gap-[12vw] relatedArticles mb-10 lg:mb-[4vw]">
      <div className="imageCont">
        <Image
          src={imgSrc}
          width={641}
          height={361}
          alt=""
          className="w-full rounded-lg"
        />
      </div>

      <div className="lg:pe-[10vw] pt-2 relatedContent">
        <RelatedTextCard
          articleSubCategory={subTitle}
          articleTitle={title}
          para={para}
        />
      </div>
    </div>
  );
};

export default Related_Article_Card;
