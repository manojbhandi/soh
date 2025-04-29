import Image from "next/image";
import SubMainTitle from "../Ui/SubMainTitle";
import PartnerCard from "./partner-card";
import CtaBtn from "../Ui/CtaBtn";

const All_Partner = () => {
  const data = [
    {
      name: "Prashant Dalmia",
      designation: "Founder, Ace Space",
      imgSrc: "/images/partner-spotlight/all_partner/1.png",
    },
    {
      name: "Prashant Dalmia",
      designation: "Founder, Ace Space",
      imgSrc: "/images/partner-spotlight/all_partner/2.png",
    },
    {
      name: "Prashant Dalmia",
      designation: "Founder, Ace Space",
      imgSrc: "/images/partner-spotlight/all_partner/3.png",
    },
    {
      name: "Prashant Dalmia",
      designation: "Founder, Ace Space",
      imgSrc: "/images/partner-spotlight/all_partner/1.png",
    },
    {
      name: "Prashant Dalmia",
      designation: "Founder, Ace Space",
      imgSrc: "/images/partner-spotlight/all_partner/2.png",
    },
    {
      name: "Prashant Dalmia",
      designation: "Founder, Ace Space",
      imgSrc: "/images/partner-spotlight/all_partner/3.png",
    },
  ];

  return (
    <div className="container py-10 lg:py-[5vw]">
      <div>
        <SubMainTitle title={"All Partner"} customClass={"lg:mb-[2.5vw]"} />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-x-[8vw] lg:gap-y-[3vw] border-b border-[#CACACA] pb-10 mb-10 lg:pb-[3vw] lg:mb-[3vw]">
        {data.map((item, i) => (
          <PartnerCard
            name={item.name}
            designation={item.designation}
            imgSrc={item.imgSrc}
            key={i}
          />
        ))}
      </div>

      <CtaBtn title={"Load more"} customClass={"normal-case mx-auto"} />
    </div>
  );
};

export default All_Partner;
