import ImageStar from "../Ui/imgStar";
import Partner_Designation from "../Ui/partner_designation";
import PartnerName from "../Ui/partner_name";

const Founder = () => {
  return (
    <div className="bg-[#F7F3EA] py-5 lg:py-[4vw]">
      <div className="container">
        <div className="mx-auto lg:w-[80%] sm:flex gap-5 lg:gap-[4vw] lg:items-center">
          <div className="sm:w-[40%] lg:w-[21.25vw] mb-5 sm:mb-0">
            <ImageStar imgSrc={"/images/soh_recommended/3.png"} />
          </div>

          <div className="flex-1">
            <PartnerName partnerName={"Prashant Dalmia"} />
            <Partner_Designation
              designation={"Founder, Ace Space"}
              customClass={"mb-5 lg:mb-[1vw]"}
            />

            <div className="*:text-[#616161] *:mb-4 *:lg:mb-[1.5vw] last:*:mb-0">
              <p>
                The story of Acespace began in 2015 in a way I never could have
                imagined. My background was far removed from this world—I'm a
                Chartered Accountant and an MBA, with years of experience at
                ICICI Bank and Morgan Stanley. My entrepreneurial journey
                actually started in the medical field, so when it came to
                veneer, I was completely in uncharted territory.
              </p>

              <p>
                But here's what I discovered: there was a huge gap in the
                market. Designers working on hotel projects, retail residences,
                and more were looking for something the industry wasn't
                offering. And I was drawn to fill that gap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
