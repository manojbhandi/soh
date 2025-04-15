import { useEffect, useState } from "react";
import Image from "next/image";

const Banner = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data?.images?.length);
    }, 200);

    return () => clearInterval(interval);
  }, [data?.images?.length]);

  return (
    <section className="lg:h-[86.5vh] bg-grey flex items-center justify-center py-[50px] md:py-[80px] lg:py-0">
      <div className="container h-full">
        <div className="lg:h-full relative">

          <div className=" lg:absolute lg:top-1/2 lg:left-[3vw] sm:-translate-y-1/2 font-fh text-mainBlack text-[30px] md:text-[40px] lg:text-[6.25vw] border-b border-solid border-[#99742B] mb-5 table lg:block">
            <h1 className="md:leading-none">
              The <br className="hidden lg:block" /> Brand
              <span className="lg:inline lg:ml-[43vw]"> Edit </span>
            </h1>
          </div>

          <div className="radius aspect-video lg:aspect-[inherit] lg:w-[40.365vw] lg:h-[80%] lg:absolute lg:inset-0 overflow-hidden m-auto z-[1]">
            {data?.images?.map((item, index) => (
              <Image
                key={index}
                src={item?.img}
                alt={item?.alt || `Image ${index + 1}`}
                width={800}
                height={700}
                className={`lg:absolute lg:top-0 lg:left-0 w-full h-full object-cover ${
                  index === activeIndex ? "block" : "hidden"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
