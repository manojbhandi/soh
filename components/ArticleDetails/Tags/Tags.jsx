import SubMainTitle from "@/components/Ui/SubMainTitle";
import Link from "next/link";



const Tags = ({tagsData}) => {
  return (
    <section>
      <div className="container">
        <div className="border-t border-solid border-[#CACACA] pt-[50px] xl:pt-[3.542vw]">
        <SubMainTitle title={'Tags'}/>
        <ul className="flex flex-wrap gap-[10px] xl:gap-[1.042vw]">
          {tagsData.map((item, index) => (
            <li key={index}><Link href={item?.url} className="bg-grey hover:bg-[#eee] text-[#0D0C0C] table p-[10px] xl:p-[0.521vw] rounded-[8px] xl:rounded-[0.417vw]">{item?.name}</Link></li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default Tags;
