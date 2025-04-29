import Image from "next/image";
import MainTitle from "../Ui/MainTitle";
import SubMainTitle from "../Ui/SubMainTitle";
import LinkButton from "../Ui/LinkButton";

const Banner = ({ title, para }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 bg-[#F7F3EA] mb-10 lg:mb-[6vw]">
      <div className="bg-[url(/images/soh_recommended/flower.png)] bg-no-repeat bg-cover bg-center flex p-10 lg:p-[5.5vw]">
        <div className="m-auto w-[100%] sm:w-[80%] sm:max-w-[300px] xl:max-w-[26.25vw] relative">
          <div className="w-[120px] h-[120px] lg:w-[7.8vw] lg:h-[7.8vw] bg-[#99742B] rounded-[8px] lg:rounded-[0.5vw]  p-4 absolute right-0 translate-x-[50%] top-[75px] lg:top-[4vw] hidden sm:flex">
            <div className="m-auto text-white font-fh-light text-center lg:text-[0.8vw] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="42"
                viewBox="0 0 38 42"
                fill="none"
                className="mx-auto w-[25px] h-auto lg:w-[2vw] mb-2 lg:mb-3"
              >
                <path
                  d="M19.3492 0.931289C19.2797 0.28332 18.4312 0.28332 18.3618 0.931289L17.7797 6.36715C17.0281 13.3863 12.0339 18.9204 5.69962 19.7533L0.794083 20.3982C0.209263 20.4752 0.209263 21.4154 0.794083 21.4924L5.69962 22.1374C12.0339 22.9702 17.0281 28.5043 17.7797 35.5234L18.3618 40.9593C18.4312 41.6073 19.2797 41.6073 19.3492 40.9593L19.9312 35.5234C20.6828 28.5043 25.677 22.9702 32.0114 22.1374L36.9169 21.4924C37.5017 21.4154 37.5017 20.4752 36.9169 20.3982L32.0114 19.7533C25.677 18.9204 20.6828 13.3863 19.9312 6.36715L19.3492 0.931289Z"
                  fill="white"
                />
              </svg>
              <span className="text-[20px] lg:text-[1.1vw]">SOH</span>{" "}
              Recommended
            </div>
          </div>
          <Image
            src={"/images/soh_recommended/banner_img.jpg"}
            width={504}
            height={612}
            alt="soh"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="flex bg-[#F7F3EA] relative">
        {/* <div class="whiteStar right-[5%] md:right-[5%]"></div> */}
        <div className="m-auto p-[20px] sm:p-[0px] sm:w-[90%] md:w-[80%] lg:w-[70%]">
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
            title={"Freestanding carrara marble washbasin"}
            customClass={"mb-5 lg:mb-[1.1vw]"}
          />

          <div className="*:text-[14px] *:lg:text-[0.9vw] *:text-[#616161] mb-5 lg:mb-[3vw]">
            <p>{para}</p>
          </div>

          <LinkButton text={"View More"} link={"#"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
