import ImageLabel from "@/components/Ui/ImageLabel";
import SubMainTitle from "@/components/Ui/SubMainTitle";
import { getImageUrl } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";



const BrandEdit = ({ sectionData }) => {
  sectionData = sectionData?.[0]
  return (
    <section className="mb-0">
      <div className="bg-grey relative overflow-hidden ">
        <div className="whiteStar right-0 xl:right-[12%] z-[2]"></div>

        <div className="lg:flex lg:justify-between">

          <div className="lg:w-[9/12] xl:w-[69.792vw] overflow-hidden relative z-[1] px-[15px] py-[50px] lg:px-[5%] xl:px-[8.594vw] xl:pt-[8.594vw] xl:py-[5.208vw]">
            <div className="starPattern"></div>

            <div className="sm:max-w-[575px] md:max-w-[768px] mx-auto">

              <SubMainTitle title={sectionData?.heading} />

              <div className="md:flex md:gap-x-[30px] xl:gap-x-[4.167vw]">
                <div className="md:6/12 lg:w-7/12">
                  <div className="mb-[30px]">
                    <div className="relative mb-[20px]">

                      <Link href={sectionData?.data?.[0]?.articlePath || ""}
                      >
                        <Image
                          src={getImageUrl(sectionData?.data?.[0]?.image)}
                          width={500}
                          height={500}
                          className="radius aspect-[47/40]"
                        />
                        <ImageLabel
                          labelPath={"/images/brand-edit/imgLabel01.png"}
                        />
                      </Link>
                    </div>
                    <Link href={sectionData?.data?.[0]?.subCategoryPath || ""}
                    >
                      <h5 className="text-[22px] text-mainBlack font-fh mb-[10px]">
                        {sectionData?.data?.[0]?.subCategory}
                      </h5>
                    </Link>
                    <Link href={sectionData?.data?.[0]?.articlePath || ""}
                    >
                      <p>
                        {sectionData?.data?.[0]?.title}
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="md:w-6/12">
                  <ul className="grid grid-cols-2 gap-[20px] xl:gap-[2.604vw]">
                    {sectionData?.data?.length > 0 &&
                      sectionData?.data?.slice(1, 4).map((item, index) => (
                        <li
                          className="border-b border-mainBlack pb-[5px]"
                          key={index}
                        >
                          <Link href={item?.articlePath}>
                            <Image
                              src={getImageUrl(item?.image)}
                              width={500}
                              height={500}
                              className="radius mb-[15px] aspect-auto"
                            />
                          </Link>
                          <Link href={item?.subCategoryPath}>
                            <h6 className="font-fh text-mainBlack text-[16px]">
                              {item?.subCategory}
                            </h6>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div className="md:w-6/12 xl:w-[30.208vw] text-center px-[12%] py-[30px] lg:px-[5%]  xl:px-[4.482vw] xl:pt-[8.594vw]">
            <SubMainTitle title={"Partner Spotlight"} />
            <div className="text-gold *:mb-[20px] last:*:mb-0">
              <div className="xl:mx-[2.604vw]">
                <Image
                  src={"/images/brand-edit/spotlight01.jpg"}
                  width={400}
                  height={500}
                  className="radius aspect-[4/5]"
                />
              </div>

              <h6 className="uppercase font-medium !mb-[10px]">
                {" "}
                Manisha Sharma{" "}
                <span className="block font-normal text-primary text-[12px]">
                  Q Westin GM{" "}
                </span>
              </h6>
              <p>
                “Our mission goes beyond designing products, we craft
                experiences that harmonise with the essence of every space.”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BrandEdit;

const categoryData = [
  {
    image: "/images/brand-edit/newlyLaunched.jpg",
    title: "Newly Launched",
    url: "#",
  },
  {
    image: "/images/brand-edit/newlyLaunched.jpg",
    title: "Made in India",
    url: "#",
  },
  {
    image: "/images/brand-edit/newlyLaunched.jpg",
    title: "Trends",
    url: "#",
  },
];