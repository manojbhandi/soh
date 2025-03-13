import Link from "next/link";

const CtaBtn = ({ title, url, customClass }) => {
  return (
    <Link
      href={url ? url : "#"}
      className={`border border-[#C2C2C2] font-fh uppercase text-mainBlack text-[16px]  xl:text-[1.25vw] table rounded-[8px] xl:rounded-[0.417vw] px-[30px] xl:px-[2.604vw] py-[15px] xl:py-[1.042vw] hover:bg-mainBlack hover:text-white ${
        customClass ? customClass : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default CtaBtn;
