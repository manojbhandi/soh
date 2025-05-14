import Image from "next/image";
import Link from "next/link";
import ArticleImage from "./Article/ArticleImage";
import { SOH_INSTA_URL } from "@/utils/constants";

const InstagramCard = ({ url, imgSrc }) => {
  return (
    <Link href={SOH_INSTA_URL} className="">
      <ArticleImage articleImage={imgSrc} articleImgStyle={'!pt-[100%] !rounded-none'} />
    </Link>
  );
};

export default InstagramCard;
