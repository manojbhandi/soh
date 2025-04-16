import { getImageUrl } from "@/utils/constants";
import Image from "next/image";

const Information = ({ image, imgStyle, name, designation, content, contentStyle, even }) => {

  return (
    <div className={`md:flex items-center ${even ? 'md:flex-row' : 'md:flex-row-reverse'}  md:gap-x-[30px] xl:gap-x-[4.035vw]`}>
      {image && (
        <div className={`mb-[30px] w-9/12 md:w-5/12 xl:w-[26.042vw] mx-auto text-center ${imgStyle ? imgStyle : ''} `}>
          <Image
            src={image && getImageUrl(image)}
            width={500}
            height={600}
            className="mb-[10px] xl:mb-[1.302vw] rounded-[6px] xl:rounded-[0.313vw] aspect-[5/6] object-cover"
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
          className={`*:mb-[20px] *:xl:mb-[2.083vw] last:*:mb-0 *:leading-[24px] *:text-justify *:md:text-left *:xl:leading-[1.687vw] ${contentStyle}`}
          dangerouslySetInnerHTML={{ __html: content && content }}
        ></div>
      </div>
    </div>
  );
};

export default Information;
