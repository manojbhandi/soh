import LinkButton from "../LinkButton";
import MainTitle from "../MainTitle";
import SubMainTitle from "../SubMainTitle";

const BannerRightCont = ({
  title,
  subTitle,
  para,
  customWidth,
  subTitleFont,
  linkText,
}) => {
  return (
    <div className="flex bg-[#F7F3EA] relative">
      {/* <div class="whiteStar right-[5%] md:right-[5%]"></div> */}
      <div
        className={`m-auto p-[20px] sm:p-[0px] ${
          customWidth ? customWidth : "sm:w-[90%] md:w-[80%] lg:w-[70%]"
        }`}
      >
        <div className="flex lg:items-center gap-5 lg:gap-[1.5vw] mb-5 lg:mb-[2vw]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="42"
              viewBox="0 0 38 42"
              fill="none"
              className="mx-auto w-[25px] h-auto lg:w-[2vw]"
            >
              <path
                d="M19.3492 0.931289C19.2797 0.28332 18.4312 0.28332 18.3618 0.931289L17.7797 6.36715C17.0281 13.3863 12.0339 18.9204 5.69962 19.7533L0.794083 20.3982C0.209263 20.4752 0.209263 21.4154 0.794083 21.4924L5.69962 22.1374C12.0339 22.9702 17.0281 28.5043 17.7797 35.5234L18.3618 40.9593C18.4312 41.6073 19.2797 41.6073 19.3492 40.9593L19.9312 35.5234C20.6828 28.5043 25.677 22.9702 32.0114 22.1374L36.9169 21.4924C37.5017 21.4154 37.5017 20.4752 36.9169 20.3982L32.0114 19.7533C25.677 18.9204 20.6828 13.3863 19.9312 6.36715L19.3492 0.931289Z"
                fill="#99742B"
              />
            </svg>
          </div>
          <MainTitle
            title={title}
            customClass={"text-[#000] !mb-0 leading-[1]"}
          />
        </div>

        <SubMainTitle
          title={subTitle}
          customClass={`mb-5 lg:mb-[1.1vw] ${subTitleFont && subTitleFont}`}
        />

        <div className="*:text-[14px] *:lg:text-[0.9vw] *:text-[#616161] mb-5 lg:mb-[3vw]">
          <p>{para}</p>
        </div>

        <LinkButton text={linkText ? linkText : "View More"} link={"#"} />
      </div>
    </div>
  );
};

export default BannerRightCont;
