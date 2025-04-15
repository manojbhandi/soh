import LinkButton from "../Ui/LinkButton";
import SubMainTitle from "../Ui/SubMainTitle";
import Video_Card from "./vid_card";

const BTS_Videos = () => {
  return (
    <div className="mb-10 xl:mb-[4vw]">
      <div className="container flex justify-between items-start mb-5 xl:mb-[3vw]">
        <SubMainTitle title={"BTS Videos"} />
        <LinkButton text={"View All"} link={"/#"} />
      </div>

      <div>
        <Video_Card vidSrc={"h9x2_WgwhY4"} />
      </div>
    </div>
  );
};

export default BTS_Videos;
