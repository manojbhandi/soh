import InputField from "./Forms/InputField"

const SubscribeNewsletter = () => {
  return (
    <>
      <h4 className="text-black xl:mr-[7.813vw] font-fh text-[22px] xl:text-[1.667vw] mb-[15px] xl:mb-[4.167vw]">Subscribe for our Newsletters</h4>
      <div className="flex border-b border-solid border-[#000] xl:gap-x-[1vw]">
        <InputField type={'email'} placeholder={'Enter Email ID'} customClass={'flex-1 xl:text-[0.833vw] placeholder:text-black text-black'}/>
        <button className="flex-none w-[30px] h-[30px] xl:w-[2.5vw] xl:h-[2.5vw]">
            <svg viewBox="0 0 48 48" fill="#000" className="w-full h-full">
                <path d="M38.1575 25.0002H9C8.71533 25.0002 8.4775 24.9047 8.2865 24.7137C8.0955 24.5227 8 24.2849 8 24.0002C8 23.7155 8.0955 23.4777 8.2865 23.2867C8.4775 23.0957 8.71533 23.0002 9 23.0002H38.1575L33.677 18.5077C33.482 18.313 33.38 18.0835 33.371 17.8192C33.362 17.5552 33.4678 17.313 33.6885 17.0927C33.9088 16.8797 34.1467 16.7714 34.402 16.7677C34.657 16.7637 34.891 16.872 35.104 17.0927L40.869 22.8692C41.1923 23.1925 41.354 23.5695 41.354 24.0002C41.354 24.4309 41.1923 24.8079 40.869 25.1312L35.0925 30.9077C34.9052 31.095 34.6775 31.195 34.4095 31.2077C34.1415 31.2207 33.8973 31.1207 33.677 30.9077C33.4563 30.6874 33.346 30.4495 33.346 30.1942C33.346 29.9392 33.4563 29.7015 33.677 29.4812L38.1575 25.0002Z"/>
            </svg>
        </button>
      </div>
    </>
  )
}

export default SubscribeNewsletter
