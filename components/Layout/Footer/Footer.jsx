import SubscribeNewsletter from "@/components/Ui/SubscribeNewsletter";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/Ui/SocialLinks";

const quickLinks = [
  { name: "About Us", url: "#" },
  { name: "Advertise", url: "#" },
  { name: "Editorial", url: "#" },
  { name: "Media Kit", url: "#" },
  { name: "Magazine", url: "#" },
  { name: "Events", url: "#" },
  { name: "Subscription", url: "#" },
  { name: "Careers", url: "#" },
  { name: "Contact Us", url: "#" },
];

const categoryLinksStatic = [
  { name: "Leadership", url: "#" },
  { name: "Business", url: "#" },
  { name: "The Brand Edit", url: "#" },
  { name: "Architecture + Design", url: "#" },
  { name: "Voyages of Influence", url: "#" },
  { name: "Travel", url: "#" },
  { name: "Dine & Drink", url: "#" },
  { name: "SOH Loves", url: "#" },
  { name: "Videos", url: "#" },
];
const currentYear = new Date().getFullYear();

const Footer = ({ categories }) => {
  const categoryLinks = categories?.length > 0 ? categories.slice(0, 9).map((cat) => ({ name: cat?.categoryName, url: cat?.slug })) : categoryLinksStatic
  return (
    <footer className="bg-[#F7F3EA] pt-[50px] xl:pt-[5.208vw] relative">
      <div className="whiteStar right-[10%]"></div>
      <div className="container xl:px-[4.167vw]">
        <div className="md:flex justify-between *:mb-[30px] *:md:mb-0">
          {/* Links Section */}
          <div className="xl:w-[25%]">
            <div className="row justify-center xl:gap-x-[3vw]">
              {[quickLinks, categoryLinks].map((links, i) => (
                <ul key={i} className="flex-1 *:mb-[10px] *:xl:mb-[1vw]">
                  {links.map((item, index) => (
                    <li key={index}>
                      <Link href={`/${item.url}`} className="text-black hover:font-semibold hover:text-gold">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Newsletter & Social Links */}
          <div className="xl:w-[27.396vw] md:order-first">
            <div className="mb-[30px] xl:mb-[7vw]">
              <SubscribeNewsletter />
            </div>
            <div className="flex items-center gap-x-[10px] xl:gap-x-[1vw]">
              <h6 className="font-fh text-black text-[16px] xl:text-[1.042vw] flex-none">Follow Us On:</h6>
              <SocialLinks />
            </div>
          </div>

          {/* Logo Section */}
          <div className="w-[100px] xl:w-[14.583vw] self-end">
            <Image src="/images/soh-foot-logo.svg" width={280} height={185} alt="SOH Footer Logo" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="lg:flex text-center justify-between border-t border-[#C2C2C2] text-[12px] xl:text-[0.833vw] py-[10px] lg:py-[20px] xl:py-[2.604vw] mt-[20px] xl:mt-[3.125vw] sm:*:mb-[5px] last:*:mb-0 lg:*:mb-0">
          <div className="flex-none">
            © {currentYear} SHO Vitrified Pvt Ltd. <br className="sm:hidden" /> All Rights Reserved | Designed by{" "}
            <Link href="#">kwebmaker</Link>
          </div>
          <div className="flex-none">
            <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
