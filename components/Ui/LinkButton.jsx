import Link from "next/link";

const LinkButton = ({ text, link }) => {
  return (
    <Link
      href={link ? link : "/#"}
      className="text-mainBlack font-inter italic border-b border-black tracking-[2px] hover:tracking-[3px] pb-1 table text-[13px] xl:text-[0.7vw] transition-all"
    >
      {text}
    </Link>
  );
};

export default LinkButton;
