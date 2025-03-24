import React from "react";
import MainTitle from "../MainTitle";

const StaticBanner = ({ title }) => {
  return (
    <section>
      <div className="bg-grey relative flex items-center justify-center h-[200px] md:h-[300px] xl:h-[22.135vw]">
        <div className="whiteStar !top-auto bottom-0 left-0 xl:left-[5.208vw] scale-y-[-1]"></div>
        <div className="container">
          <MainTitle title={title} customClass={"text-center !mb-0"} />
        </div>
      </div>
    </section>
  );
};

export default StaticBanner;
