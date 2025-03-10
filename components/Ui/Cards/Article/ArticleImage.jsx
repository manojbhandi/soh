import Image from "next/image";
import { useEffect, useRef } from "react";

import gsap from "@/gsap.config";

const ArticleImage = ({ articleImage, articleImgStyle }) => {

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
    <div
      ref={containerRef}
      className={`overflow-hidden radius mb-[10px] xl:mb-[1.042vw] aspect-[2/1] ${articleImgStyle || ""}`}
    >
      <Image
        src={articleImage}
        width={500}
        height={280}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default ArticleImage;
