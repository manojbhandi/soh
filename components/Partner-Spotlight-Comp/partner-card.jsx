import Image from "next/image";

const PartnerCard = ({ name, designation, imgSrc }) => {
  return (
    <div>
      <div className="mb-5 lg:mb-[2vw]">
        <Image
          src={imgSrc}
          width={345}
          height={444}
          alt={"SOH Partner"}
          className={"rounded-lg"}
        />
      </div>

      <div className="text-[20px] lg:text-[1.5vw] text-start text-[#99742B] font-bold">
        {name}
      </div>
      <div className="text-start text-[#616161] text-[18px] lg:text-[1vw]">
        {designation}
      </div>
    </div>
  );
};

export default PartnerCard;
