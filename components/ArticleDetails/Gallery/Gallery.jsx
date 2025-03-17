import Image from "next/image";
import FancyboxWrapper from "../../Ui/FancyboxWrapper";
import CtaBtn from "../../Ui/CtaBtn";
import { useState } from "react";
import ArticleImage from "../../Ui/Cards/Article/ArticleImage";

const galleryData = [
  { image: "/images/article-details/articleGallery/01.jpg" },
  { image: "/images/article-details/articleGallery/02.jpg" },
  { image: "/images/article-details/articleGallery/03.jpg" },
  { image: "/images/article-details/articleGallery/04.jpg" },
  { image: "/images/article-details/articleGallery/05.jpg" },

  { image: "/images/article-details/articleGallery/01.jpg" },
  { image: "/images/article-details/articleGallery/02.jpg" },
  { image: "/images/article-details/articleGallery/03.jpg" },
  { image: "/images/article-details/articleGallery/04.jpg" },
  { image: "/images/article-details/articleGallery/05.jpg" },

  { image: "/images/article-details/articleGallery/01.jpg" },
  { image: "/images/article-details/articleGallery/02.jpg" },
  { image: "/images/article-details/articleGallery/03.jpg" },
  { image: "/images/article-details/articleGallery/04.jpg" },
  { image: "/images/article-details/articleGallery/05.jpg" },
];

const Gallery = () => {
  const [length, setLength] = useState(galleryData.length - 5);

  return (
    <>
     
      <div>
        <FancyboxWrapper>
          <a data-fancybox="gallery" href={galleryData[0]?.image}>
            <ArticleImage
              staticImg={galleryData[0]?.image}
              articleImgStyle={"aspect-[13/7] !mb-0"}
            />
          </a>
        </FancyboxWrapper>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] xl:gap-[1.302vw] mt-[10px] xl:mt-[1.458vw]">
        {galleryData.slice(1, 5).map((item, index) => (
          <FancyboxWrapper key={index}>
            <a data-fancybox="gallery" href={item?.image} className="relative overflow-hidden block radius">
                <ArticleImage
                staticImg={item?.image}
                articleImgStyle={"aspect-[13/7] !mb-0"}
                />

              {galleryData.length > 5 && index === 3 && (
                <div className="absolute top-0 left-0 w-full h-full bg-mainBlack bg-opacity-[0.54] flex justify-center items-center text-white">
                  + {length} Photos
                </div>
              )}
            </a>
          </FancyboxWrapper>
        ))}
      </div>

      {/* Hidden Extra Images */}
      <div className="hidden">
        {galleryData.slice(5).map((item, index) => (
          <FancyboxWrapper key={index}>
            <a data-fancybox="gallery" href={item?.image}>
              <Image
                src={item?.image}
                alt="Hidden Gallery Image"
                width={1300}
                height={750}
                className="aspect-[13/7]"
                loading="lazy"
              />
            </a>
          </FancyboxWrapper>
        ))}
      </div>

      {galleryData.length > 0 && (
        <FancyboxWrapper>
          <a
            data-fancybox=""
            className="ctaBtn mx-auto bg-gold text-white border-0 mt-[30px] xl:mt-[3.385vw] capitalize"
            href={galleryData[0]?.image}
          >
            View Gallery
          </a>
        </FancyboxWrapper>
      )}
    </>
  );
};

export default Gallery;
