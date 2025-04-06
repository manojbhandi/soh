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

const Gallery = ({ gallery }) => {
  const [length, setLength] = useState(gallery?.length > 0 && gallery?.length - 5);
  console.log("gallery", gallery);
  return (
    <>

      <div>
        <FancyboxWrapper>
          <a data-fancybox="gallery" href={galleryData[0]?.image}>
            <ArticleImage
              articleImage={galleryData[0]?.image}
            />
          </a>
        </FancyboxWrapper>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[10px] xl:gap-[1.302vw] mt-[10px] xl:mt-[1.458vw]">
        {gallery?.length > 0 &&
          gallery.slice(1, 5).map((item, index) => (
            <FancyboxWrapper key={index}>
              <a data-fancybox="gallery" href={item?.url} className="relative overflow-hidden block radius">
                <ArticleImage
                  articleImage={item?.url}
                />

                {gallery.length > 5 && index === 3 && (
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
        {gallery?.length > 0 ? gallery.slice(5).map((item, index) => (
          <FancyboxWrapper key={index}>
            <a data-fancybox="gallery" href={item?.url}>
              <Image
                src={item?.url}
                alt="Hidden Gallery Image"
                width={1300}
                height={750}
                className="aspect-[13/7]"
                loading="lazy"
              />
            </a>
          </FancyboxWrapper>
        )) : null}
      </div>

      {/* {galleryData.length > 0 && (
        <FancyboxWrapper>
          <a
            data-fancybox=""
            className="ctaBtn mx-auto bg-gold text-white border-0 mt-[30px] xl:mt-[3.385vw] capitalize"
            href={galleryData[0]?.image}
          >
            View Gallery
          </a>
        </FancyboxWrapper>
      )} */}
    </>
  );
};

export default Gallery;
