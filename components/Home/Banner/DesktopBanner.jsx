import Image from "next/image";
import Link from "next/link";

const DesktopBanner = ({ data }) => {
  return (
    <div className="container">
    <div className="homeDeskBanner">
      {data.map((item, index) => (
        <Link href={item?.url} key={index}>
          <Image src={item?.img} width={1920} height={1080} alt="" />
          <div className="hbBannerTxt">
            <div>
              <h3>{item?.category}</h3>
              <div>
                <label>{item?.subCategory}</label>
                <p>{item.para}</p>
              </div>
              <span>View All</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default DesktopBanner;
