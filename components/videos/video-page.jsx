// import Banner from "./banner";
import dynamic from "next/dynamic";
import VidCategory from "./vidCat";
import SOH_Conversation from "./soh-conversation";
import BTS_Videos from "./bts-videos";
// import Insta_Reels from "./insta-reels";

const Banner = dynamic(() => import("./banner"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Insta_Reels = dynamic(() => import("./insta-reels"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Video_Page = () => {
  const bannerData = [
    {
      img: "/images/videos/banner_1.jpg",
    },
    {
      img: "/images/videos/banner_1.jpg",
    },
    {
      img: "/images/videos/banner_1.jpg",
    },
  ];

  const singleData = [
    {
      img: "/images/videos/middle-banner.jpg",
    },
  ];

  const videos = [
    {
      vidSrc: "h9x2_WgwhY4",
    },
    {
      vidSrc: "dpEz__tnfBg",
    },
    {
      vidSrc: "uyTNLtcrjas",
    },
    {
      vidSrc: "h9x2_WgwhY4",
    },
    {
      vidSrc: "dpEz__tnfBg",
    },
    {
      vidSrc: "uyTNLtcrjas",
    },
  ];

  return (
    <div>
      <Banner data={bannerData} />
      <VidCategory title={"Travel"} data={videos} />
      <Banner data={singleData} />
      <VidCategory title={"Food"} data={videos} />
      <SOH_Conversation />
      <BTS_Videos />
      <Insta_Reels />
    </div>
  );
};

export default Video_Page;
