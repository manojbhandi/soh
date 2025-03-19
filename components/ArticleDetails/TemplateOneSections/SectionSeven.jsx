import Slider from "@/components/Ui/Slider";
import Information from "../Information/Information";
import Quote from "../Quote/Quote";
import ArticleImage from "@/components/Ui/Cards/Article/ArticleImage";

const SectionSeven = () => {
  const sliderSettings = {
    slidesPerView: 2,
    spaceBetween: '3%',
    navigation: true,
    pagination: false,
    loop: true,
    speed: 2000,

    autoplay: { delay: 3000 },
  };

  return (
    <section>
      <Information {...writeUp} imgStyle={"xl:order-last"} />
      <Quote
        quoteTxt={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
        }
      />
      <div className="*:text-center *:xl:mb-[2.083vw] last:*:mb-0 *:xl:leading-[1.687vw]">
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,


        </p>
      </div>
      <div className="xl:px-[6.771vw]">
        <Slider
          slides={data.map((item, index) => (
            <div key={index}>
              <ArticleImage
                articleImage={item?.image}
                articleImgStyle={"pt-[120%] xl:mb-[1.302vw]"}
              />
              <span className="text-[12px] xl:text-[0.729vw] text-mainBlack opacity-50">{item?.text}</span>
            </div>
          ))}
          setting={sliderSettings}
        />
      </div>
    </section>
  );
};

export default SectionSeven;

const writeUp = {
  image: "/images/article/business/vijay.jpg",
  name: "Vijay Thacker",
  designation: "Partner and CEO, Crowe Advisory Indian LPP",
  content: `<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet, comes from a line in section 1.10.32.
Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.

</p>
  
  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.
</p>`,
};

const data = [
  {
    image: "/images/article/business/05.png",
    text: "He wears a sweater by MARTINE ROSE. | Image credit XYZ",
  },
  {
    image: "/images/article/business/06.jpg",
    text: "He wears a sweater by MARTINE ROSE. | Image credit XYZ",
  },
];
