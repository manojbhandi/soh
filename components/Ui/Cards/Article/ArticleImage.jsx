import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "@/gsap.config";
import Link from "next/link";
import FancyboxWrapper from "../../FancyboxWrapper";

const ArticleImage = ({
  articleImage,
  staticImg,
  articleImgStyle,
  url,
  articleVideoUrl,
}) => {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const img = containerRef.current?.querySelector("img");
  //     if (img) {
  //       gsap.to(img, {
  //         scale: 1.5,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top 80%",
  //           end: "top -100%",
  //           scrub: true,
  //         },
  //       });
  //     }
  //   }, containerRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div
      // ref={containerRef}
      className={`overflow-hidden relative radius h-0 pt-[57%] ${articleImgStyle || ""
        }`}
    >
      <Image
        src={articleImage}
        width={500}
        height={285}
        className="h-full w-full object-cover absolute top-0 left-0"
        loading="lazy"
        alt="Article Thumbnail"
      />

      {articleVideoUrl && (
        <FancyboxWrapper>
          <a
            data-fancybox
            href={articleVideoUrl}
            className="strechedLink before:z-[1]"
          >
            <button className="absolute flex justify-center items-center inset-0 m-auto rounded-full w-[50px] xl:w-[3.854vw] aspect-square bg-white bg-opacity-[0.8] hover:bg-opacity-100 backdrop-blur-[1.5px] border border-solid border-white">
              <svg className="w-1/2 h-1/2 fill-gold" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
          </a>
        </FancyboxWrapper>
      )}
    </div>
  );
};

export default ArticleImage;
