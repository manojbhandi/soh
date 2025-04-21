const SliderArw = ({prevBtn, nextBtn, customClass}) => {
  return (
    <div className={`flex xl:gap-x-[1.042vw] xl:*:w-[2.5vw] *:aspect-square *:rounded-full *:border-[1px] *:border-solid *:border-gold ${customClass ? customClass : ''}`}>
      <button className={`flex justify-center items-center group hover:bg-gold ${prevBtn}`}>
        <svg
          viewBox="0 0 16 16"
          className="w-1/2 h-1/2 fill-gold group-hover:fill-white"
        >
          <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
      </button>
      <button className={`flex justify-center items-center group hover:bg-gold ${nextBtn}`}>
        <svg
          viewBox="0 0 16 16"
          className="w-1/2 h-1/2 fill-gold group-hover:fill-white"
        >
          <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
        </svg>
      </button>
    </div>
  );
};

export default SliderArw;


