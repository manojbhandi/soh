import Image from "next/image";
import Link from "next/link";
import ArticleImage from "./Article/ArticleImage";

const InstagramCard = ({ url, imgSrc }) => {
  return (
    <Link href={url} className=" ">

      <ArticleImage articleImage={imgSrc} articleImgStyle={'!pt-[100%] !rounded-none'}/>
    </Link>
  );
};

export default InstagramCard;
