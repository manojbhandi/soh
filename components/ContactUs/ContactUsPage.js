import Image from "next/image";

import StaticBanner from "../Ui/StaticBanner/StaticBanner";
import SubMainTitle from "../Ui/SubMainTitle";
import Link from "next/link";

const ContactUsPage = () => {
  return (
    <>
      <StaticBanner title={data?.title} />
      <section>
        <div className="container">
          <div className="md:flex gap-x-[30px] xl:gap-x-[4.948vw]">
            <div className="flex-none md:w-5/12 xl:w-[26.042vw]  mb-[30px] md:mb-0">
              <div className="radius">
                <Image src={data?.sideImg} width={500} height={675} />
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-2  gap-[30px] md:gap-[30px] lg:gap-[50px] xl:gap-[4.427vw]">
                {data?.contact.map((item, index) => (
                  <div
                    key={index}
                    className="text-mainBlack *:mb-[5px] xl:*:mb-[.5vw]"
                  >
                    <SubMainTitle title={item?.title} />
                    <p>{item?.description}</p>
                    <Link
                      href={`mailto:${item?.email}`}
                      className="underline font-medium xl:text-[1.042vw]"
                    >
                      {item?.email}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;

const data = {
  title: "Contact Us",
  sideImg: "/images/contact.jpg",
  contact: [
    {
      title: "Advertising",
      description:
        "If you would like to advertise with us, please contact our Sales Assistant:",
      email: "salesteam@soh.com",
    },
    {
      title: "Media Inquiries",
      description:
        "For press inquiries, please contact our communications team at:",
      email: "salesteam@soh.com",
    },
    {
      title: "Subscription",
      description:
        "For subscription inquiries, please contact our communications team at:",
      email: "salesteam@soh.com",
    },
    {
      title: "How to Write for Us",
      description:
        "For press inquiries, please contact our communications team at:",
      email: "TLpress@dotdashmdp.com",
    },
    {
      title: "Contact Us",
      description:
        "Postal address: 1/2, Old, Pandit Jawaharlal Nehru Rd, next to EduBridge School, Anand Nagar, Santacruz East, Mumbai, Maharashtra 400055",
      email: "salesteam@soh.com",
    },
  ],
};
