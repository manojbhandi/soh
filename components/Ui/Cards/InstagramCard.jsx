import Image from "next/image";
import Link from "next/link";
import ArticleImage from "./Article/ArticleImage";

const InstagramCard = ({ url, imgSrc }) => {
  return (
    <Link href={url}>

      <ArticleImage articleImage={imgSrc} articleImgStyle={'!pt-[125%]'}/>
    </Link>
  );
};

export default InstagramCard;
