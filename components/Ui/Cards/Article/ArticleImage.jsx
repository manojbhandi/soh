import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "@/gsap.config";
import Link from "next/link";

const ArticleImage = ({ articleImage, articleImgStyle, url }) => {

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current.querySelector("img"), {
        scale: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top -100%",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <Link href={url? url : ''}
      ref={containerRef}
      className={`overflow-hidden block relative radius mb-[10px] xl:mb-[1.042vw] aspect-[2/1] ${articleImgStyle || ""}`}
    >
      <Image
        src={articleImage}
        width={500}
        height={280}
        className="h-full w-full object-cover"
        loading="lazy"
        alt="article"
      />
      {/* <button className="absolute inset-0 m-auto rounded-full w-[50px] xl:w-[3.854vw] aspect-square  bg-white bg-opacity-[0.8]"><svg className="w-1/2 h-1/2" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></button> */}
    </Link>
  );
};

export default ArticleImage;
