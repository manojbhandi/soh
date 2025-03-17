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
  videoUrl,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const img = containerRef.current?.querySelector("img");
      if (img) {
        gsap.to(img, {
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
    }, containerRef);

    return () => ctx.revert(); // Cleanup animation
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative radius mb-[10px] xl:mb-[1.042vw] aspect-[2/1] ${
        articleImgStyle || ""
      }`}
    >
      {url ? (
        <Link href={url ? url : '#'} className="block w-full h-full">
          <Image
            src={articleImage}
            width={500}
            height={280}
            className="h-full w-full object-cover"
            loading="lazy"
            alt="Article Thumbnail"
          />
        </Link>
      ) : null}

      {videoUrl ? (
        <FancyboxWrapper>
          <a data-fancybox="" href={videoUrl} className="block w-full h-full">
            <Image
              src={articleImage}
              width={500}
              height={280}
              className="h-full w-full object-cover"
              loading="lazy"
              alt="Article Thumbnail"
            />
            <button className="absolute flex justify-center items-center inset-0 m-auto rounded-full w-[50px] xl:w-[6.25vw] aspect-square bg-white bg-opacity-[0.8] hover:bg-opacity-100 backdrop-blur-[1.5px] border border-solid border-white">
              <svg className="w-1/2 h-1/2 fill-gold" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
          </a>
        </FancyboxWrapper>
      ) : null}

      {staticImg ? (
        <Image
          src={staticImg}
          width={500}
          height={280}
          className="h-full w-full object-cover"
          loading="lazy"
          alt="Article Thumbnail"
        />
      ) : null}
    </div>
  );
};

export default ArticleImage;
