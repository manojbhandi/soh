import Link from "next/link";

const CtaBtn = ({ title, url, children, customClass }) => {
  return (
    <Link
      href={url ? url : "#"}
      className={`ctaBtn ${
        customClass ? customClass : ""
      }`}
    >
      {title && title}
    </Link>
  );
};

export default CtaBtn;
