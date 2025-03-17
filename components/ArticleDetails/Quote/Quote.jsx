import Image from "next/image";

const Quote = ({quoteTxt}) => {
  return (
    <div className="bg-grey py-[50px] px-[30px] xl:py-[5.208vw] xl:pr-[3.229vw] xl:pl-[7.083vw] text-[18px] xl:text-[1.25vw] text-gold font-bold xl:leading-[2.25vw] rounded-[10px] xl:rounded-[0.521vw] relative"> 
      <div className="whiteStar left-[2%]"></div> 
      {quoteTxt} 
      <Image src={'/images/quote.svg'} width={100} height={100} className="absolute right-[5%] bottom-[-30px] xl:bottom-[-15%] w-[60px] xl:w-[5.208vw]"/> 
    </div>
  );
};

export default Quote;
