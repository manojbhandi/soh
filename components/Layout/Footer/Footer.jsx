import SubscribeNewsletter from "@/components/Ui/SubscribeNewsletter";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import SocialLinks from "@/components/Ui/SocialLinks";

const quickLinks = [
  {
    name:'About Us',
    url:'#'
  },
  {
    name:'Advertise',
    url:'#'
  },
  {
    name:'Editorial',
    url:'#'
  },
  {
    name:'Media Kit',
    url:'#'
  },

  {
    name:'Magazine',
    url:'#'
  },
  {
    name:'Events',
    url:'#'
  },
  {
    name:'Subscription',
    url:'#'
  },
  {
    name:'Careers',
    url:'#'
  },
  {
    name:'Contact Us',
    url:'#'
  },
]
const categoryLinks = [
  {
    name:'Leadership',
    url:'#'
  },
  {
    name:'Business',
    url:'#'
  },
  {
    name:'The Brand Edit',
    url:'#'
  },
  {
    name:'Architecture + Design',
    url:'#'
  },
  {
    name:'Voyages of Influence',
    url:'#'
  },
  {
    name:'Travel',
    url:'#'
  },
  {
    name:'Dine & Drink',
    url:'#'
  },
  {
    name:'SOH Loves',
    url:'#'
  },
  {
    name:'Videos',
    url:'#'
  },
]

const Footer = () => {

  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-[#F7F3EA] xl:pt-[5.208vw] relative">
      {/* <div className="whiteStar xl:right-[4.688vw]"></div>
      <div className="container xl:px-[4.167vw]">

        <div className="row justify-between">
          <div className="xl:w-[27.396vw]">
            <div className="xl:mb-[5.208vw]">
              <SubscribeNewsletter/>
            </div>
            <div className="row">
              <div className="flex-none"></div>
              <div className="flex-1">
                <div className="flex items-center xl:gap-x-[1vw]">
                  <div className="flex-none"><h6 className="font-fh text-black xl:text-[1.042vw]">Follow Us On:</h6></div>
                  <div className="flex-1"><SocialLinks/></div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[25%]">
            <div className="row justify-center xl:gap-x-[3vw]">
              <ul className="flex-1 *:mb-[1vw]">
                {
                  quickLinks.map((item,index)=>
                  <li key={index}><Link href={item.url} className="text-black hover:font-semibold hover:text-gold">{item.name}</Link></li>
                  )
                }
              </ul>
              <ul className="flex-1 *:mb-[1vw]">
                {
                  categoryLinks.map((item,index)=>
                  <li key={index}><Link href={item.url} className="text-black hover:font-semibold hover:text-gold">{item.name}</Link></li>
                  )
                }
              </ul>
            </div>
          </div>
          <div className="xl:w-[14.583vw] self-end">
            <Image src={'/images/soh-foot-logo.svg'} width={280} height={185}/>
          </div>
        </div>

        <div className="row justify-between border-t-[1px] border-solid border-[#C2C2C2] xl:text-[0.833vw] xl:py-[2.604vw] xl:mt-[3.125vw]">
          <div className="flex-none">
            © {year} SHO Vitrified Pvt Ltd. All Rights Reserved | Designed by <Link href="#">kwebmaker</Link>
          </div>
          <div className="flex-none">
            <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
