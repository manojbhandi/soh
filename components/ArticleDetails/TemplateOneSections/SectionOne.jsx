import Information from "../Information/Information"

import Quote from "../Quote/Quote"

const SectionOne = ({ sectionOneData, even }) => {
  const writeUp = {
    image: sectionOneData?.image?.url,
    name: sectionOneData?.title,
    designation: sectionOneData?.subtitle,
    content: sectionOneData?.paragraphs?.[0]?.content,
    contentStyle: 'text-center md:text-left'
  }
  return (
    <section>
      <Information {...writeUp} even={even} />
      <Quote quoteTxt={sectionOneData?.quotes?.[0]?.content} />
      <div className="*:text-center *:mb-[20px] *:xl:mb-[2.083vw] last:*:mb-0 *:leading-[24px] *:xl:leading-[1.687vw]">
        {sectionOneData?.paragraphs?.slice(1).map((item, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: item?.content }} />
        ))}
      </div>
    </section>
  )
}

export default SectionOne;



const writeUp = {
  image: "/images/article-details/vijay.jpg",
  name: "Vijay Thacker",
  designation: "Partner and CEO, Crowe Advisory Indian LPP",
  content: `<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet, comes from a line in section 1.10.32.</p>
    
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>`
};
