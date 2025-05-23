import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "@/gsap.config";
import Link from "next/link";
import FancyboxWrapper from "../../FancyboxWrapper";
import { getImageUrl } from "@/utils/constants";

const ArticleImage = ({
  articleImage,
  staticImg,
  articleImgStyle,
  url,
  articleVideoUrl,
  ytImgIcon
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
        src={getImageUrl(articleImage)}
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
            <button className="absolute flex justify-center items-center inset-0 m-auto rounded-full w-[50px] xl:w-[3.854vw] aspect-square ">
              {
                ytImgIcon ?
                  <svg viewBox="0 -77 512.00213 512" className="w-full h-full"><path d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#dd2c28" /><path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff" /></svg> : <span className="w-full h-full block "><svg className="w-1/2 h-1/2 fill-gold" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg></span>
              }
            </button>
          </a>
        </FancyboxWrapper>
      )}
    </div>
  );
};

export default ArticleImage;
