import MainTitle from "../Ui/MainTitle";
import SubMainTitle from "../Ui/SubMainTitle";

const PrivacyPolicyPage = () => {
  return (
    <section className="mt-[50px] xl:mt-[3.906vw]">
      <div className="container xl:px-[15.625vw]">
        <MainTitle
          title={data?.title}
          customClass={
            "goldStar border-b border-solid border-[#CACACA] pb-[30px] xl:pb-[3.385vw] mb-[30px] xl:mb-[4.479vw]"
          }
        />

        <div className="*:mb-[30px] xl:*:mb-[3.646vw]">
          {data?.sections.map((item, index) => (
            <div key={index}>
              <SubMainTitle title={item?.title} />
              <div
                className="*:mb-[15px] xl:*:mb-[1.563vw] *:leading-[25px] xl:*:leading-[1.687vw] last:*:mb-0"
                dangerouslySetInnerHTML={{ __html: item?.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;

const data = {
  title: "Privacy Policy",
  sections: [
    {
      title: "Condé Nast Privacy Notice Overview",
      content: [
        "<p>When you access, use, subscribe to, sign-up for, or register to use any of the websites, mobile apps, products, services, publications, or other Products and Services owned or operated by Condé Nast or one of our brands, we and third parties may collect, process, and retain Personal Information about you. In this section we provide an overview of our privacy practices. You’ll find the full Condé Nast Privacy Policy (the “Privacy Policy”) below. We encourage you to read the full Privacy Policy in addition to this overview. All Capitalized terms used in this overview are defined in the full Privacy Policy below.</p>",
      ],
    },
    {
      title: "1. Categories of Personal Information We Collect About You",
      content: [
        "<p>For purposes of this Privacy Policy, Personal Information means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly to you or to devices and browsers reasonably linked to you. Anonymous, de-identified, or aggregate information is not Personal Information as the term is used in this Privacy Policy.</p><p>Depending on the Products and Services you use, we may collect the following categories of Personal Information directly from you, automatically through your use of the Products and Services, and from third parties: </p><p>Identifiers, such as your name, zip code, postal and email address, telephone number, IP address, user ID, and online identifiers generated by us or our Identity Resolution Partners when you use or engage with our Products and Services. For more information, please refer to the section Tracking Techniques and Technologies and Targeted Advertising below.</p><p>Sensitive Personal Information and information that may be subject to additional protections under applicable laws, such as your precise geolocation data and/or, as applicable, information the reveals or is used to develop inferences about your race, gender, age, marital status, nationality, ethnicity, sexual orientation, religious beliefs, and health condition.</p><p>Payment records, such as the records of your purchase transactions with us and the associated financial account information, credit card number, debit card number, or other payment information.</p>",
        ,
      ],
    },
    {
      title: "2. How We Disclose the Personal Information We Collect",
      content: [
        "<p>We may disclose each of the categories of Personal Information described above for our business and commercial purposes as follows:</p><p>Related Entities. We may disclose Personal Information we collect about you to our affiliates, subsidiaries, and related entities, such as those listed here..</p><p>Service Providers. We may disclose Personal Information we collect about you to service providers, who perform certain functions and business operations on our behalf. For example, we engage service providers to help us with technical maintenance, database management, fraud prevention, market research, payment processing, order fulfillment, address verification, community and forums management, auctions, e-commerce, list rental, data co-op management, audience, website and mobile application authentication, and similar business functions. We may disclose some of the Personal Information that we collect from or about you to process and fulfill your requests for video Content offered through our Products and Services, including to provide you with access to localized Content and video Content recommendations.</p>",
      ],
    },
  ],
};
