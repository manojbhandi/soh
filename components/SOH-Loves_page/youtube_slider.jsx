import Link from "next/link";
import Youtube_Slider_Data from "./youtube-slider-data";

const YouTubeSlider = () => {
  return (
    <div className="bg-[rgba(247,243,234,0.5)] py-10 xl:py-[5vw]">
      <div className="container">
        <div className="flex justify-between items-center mb-5 xl:mb-[2vw]">
          <h2 className="text-[24px] xl:text-[1.8vw] text-mainBlack font-fh">
            <span className="w-[20px] xl:w-[1.56vw] inline-block align-middle mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="35"
                viewBox="0 0 31 35"
                fill="none"
                className="w-full h-auto"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.2909 1.6922C22.805 0.0261805 27.155 1.2409 29.0045 4.40528C30.8555 7.56966 29.507 11.4869 25.9921 13.1529L23.1028 14.5346C25.5924 14.6168 27.9655 15.8633 29.2091 17.9906C31.0601 21.155 29.7108 25.0722 26.1968 26.7382L10.7875 34.106C7.27265 35.7721 2.92409 34.558 1.07311 31.3936C-0.77714 28.2286 0.572138 24.312 4.08623 22.646L6.97629 21.2636C4.48672 21.1821 2.11292 19.9363 0.868498 17.8083C-0.981752 14.6433 0.367525 10.7268 3.88162 9.06073L19.2909 1.6922ZM10.9717 12.6804L20.2994 17.921L10.9717 23.1358V12.6804Z"
                  fill="#99742B"
                />
              </svg>
            </span>
            Youtube Shorts
          </h2>

          <Link
            href={"/#"}
            className="text-mainBlack font-inter italic tracking-[2px] hover:tracking-[3px] table text-[13px] xl:text-[0.7vw] border-b border-black transition-all pb-1 
            "
          >
            View All
          </Link>
        </div>

        <Youtube_Slider_Data />
      </div>
    </div>
  );
};

export default YouTubeSlider;
