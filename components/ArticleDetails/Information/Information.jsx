import Image from "next/image";

const Information = ({ image, imgStyle, name, designation, content, contentStyle }) => {
  return (
    <div className="flex xl:gap-x-[4.035vw]">
      {image && (
        <div className={`xl:w-[26.042vw] text-center ${imgStyle ? imgStyle : ''} `}>
          <Image
            src={image && image}
            width={500}
            height={600}
            className="xl:mb-[1.302vw] rounded-[6px] xl:rounded-[0.313vw] aspect-[5/6]"
          />
          <h6 className="text-mainBlack font-semibold xl:mb-[.1vw]">
            {name && name}
          </h6>
          <span className="text-[12px] xl:text-[0.729vw]">
            {designation && designation}
          </span>
        </div>
      )}
      <div className="flex-1">
        <div
          className={`*:xl:mb-[2.083vw] last:*:mb-0 *:xl:leading-[1.687vw] ${contentStyle}`}
          dangerouslySetInnerHTML={{ __html: content && content }}
        ></div>
      </div>
    </div>
  );
};

export default Information;
