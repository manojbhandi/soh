const FilterBtn = ({ text, customClass, clickHandler }) => {
  return (
    <div
      className={`text-[16px] lg:text-[1.2vw] text-[#000] border border-[#C2C2C2] min-w-[80px] lg:min-w-[4.15vw] text-center rounded-[10px] lg:rounded-[0.5vw] p-2 sm:p-3 lg:px-[1vw] ${
        customClass && customClass
      }`}
      onClick={clickHandler}
    >
      {text}
    </div>
  );
};

export default FilterBtn;
