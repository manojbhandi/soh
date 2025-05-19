import { useState } from "react";
import Image from "next/image";

export default function CustomSelect({ filterData, labelShow = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(filterData[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative sm:pt-5 mb-5 xl:pt-0 xl:mb-0">
      {labelShow && (
        <label className="absolute top-[-1.5vw] text-[#99742b] text-[13px] xl:text-[0.7vw] font-inter hidden sm:block">
          {filterData[0].title}
        </label>
      )}

      {/* Custom select trigger button styled like the original div */}
      <div
        className="relative cursor-pointer last:border-l-[1px] last:border-[#808080] px-[2.5vw]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex xl:items-center leading-[normal]">
          <div className="min-w-[35px] xl:min-w-[3vw] hidden sm:block">
            <Image
              src="/images/development-update/location.svg"
              width={100}
              height={100}
              alt="soh"
              className="w-[auto] h-[25px] md:h-[34px] lg:h-[1.77vw] align-middle me-3"
            />
          </div>
          <span className="text-white text-[16px] sm:text-[18px] xl:text-[1.25vw] font-fh font-normal">
            {selectedOption.title}
          </span>
          <span className="absolute right-[0px] top-[7px] sm:top-[26px] lg:top-[15px] w-[7px] xl:w-[0.5vw] xl:top-[50%] xl:translate-y-[-50%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              className={`w-full h-auto transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path
                d="M5.09103 5.15057C4.71563 5.4747 4.15937 5.4747 3.78397 5.15057L0.843146 2.6114C0.141783 2.00582 0.570052 0.854493 1.49667 0.854493L7.37833 0.854492C8.30495 0.854492 8.73322 2.00582 8.03185 2.6114L5.09103 5.15057Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Hidden native select for accessibility */}
      <select
        value={selectedOption.title}
        onChange={(e) => {
          const selected = filterData.find(
            (item) => item.title === e.target.value
          );
          if (selected) handleSelect(selected);
        }}
        className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
        aria-label="Select option"
      >
        {filterData.map((option, index) => (
          <option key={index} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full bg-gray-800 rounded mt-1 shadow-lg">
          {filterData.map((option, index) => (
            <div
              key={index}
              className="flex items-center px-[2.5vw] py-2 cursor-pointer hover:bg-gray-700"
              onClick={() => handleSelect(option)}
            >
              <div className="min-w-[35px] xl:min-w-[3vw] hidden sm:block">
                <Image
                  src={option.icon}
                  width={100}
                  height={100}
                  alt="option icon"
                  className="w-[auto] h-[25px] md:h-[34px] lg:h-[1.77vw] align-middle me-3"
                />
              </div>
              <span className="text-white text-[16px] sm:text-[18px] xl:text-[1.25vw] font-fh font-normal">
                {option.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
