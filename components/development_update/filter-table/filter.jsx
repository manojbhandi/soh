import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Select from 'react-select';
import CustomSelect from "../CustomeSelect";
import { fetchData } from "@/utils/api";
import { fetchPageData, postPageData } from "@/utils/fetchPageData";
import { API_END_POINTS } from "@/utils/constants";
const Filter = ({ data, hotelCompanies, hotelOwners, locations, setHotelsTableData }) => {

  console.log("Filter Data", hotelCompanies, hotelOwners, locations);
  const [showBrands, setShowBrands] = useState(false);
  const filterData = [
    {
      title: "Location",
      icon: "/images/development-update/location.svg",
      category: locations?.data,
    },
    {
      title: "Hotel Owner",
      icon: "/images/development-update/hotel_owner.svg",
      category: hotelOwners?.data,
    },
    {
      title: "Hotel Company",
      icon: "/images/development-update/hotel_company.svg",
      category: hotelCompanies?.data,
    },
    // {
    //   title: "Hotel Brands",
    //   icon: "/images/development-update/hotel_brands.svg",
    //   category: [
    //     {
    //       name: "Taj",
    //     },
    //     {
    //       name: "The Lalit",
    //     },
    //     {
    //       name: "Mementos",
    //     },
    //     {
    //       name: "The Leela",
    //     },
    //     {
    //       name: "Red Fox By Lemon Tree Hotels",
    //     },
    //   ],
    // },
  ];

  const wrapperRef = useRef(null);

  const [num, setNum] = useState(-1);
  const [labelShow, setLabelShow] = useState(false);
  const [selectedTitles, setSelectedTitles] = useState({});
  const [brandsData, setBrandsData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [showBrandsList, setShowBrandsList] = useState(false);
  const [filterIds, setFilterIds] = useState({
    locationId: '',
    hotelOwnerId: '',
    hotelCompanyId: '',
    hotelBrandId: '',
  });
  const dropDownHandler = (i) => {
    setShowBrandsList(false);
    setNum((prevState) => (i == num ? -1 : i));
  };
  const toggleBrandsDropdown = () => {
    setShowBrandsList(!showBrandsList)
  }

  // Click handler for List
  const handleCategoryClick = (i, name) => {
    setSelectedTitles((prev) => ({ [i]: name }));

    setSelectedBrand("")
    setNum(-1); // Close dropdown after selection
    setLabelShow(true);
    if (i === 2) {
      console.log("Hotel Company", name)
      setShowBrands(true);
    }
  };

  const getBrandsByCompany = async (companyId) => {
    console.log("Company ID", companyId);

    try {
      const response = await fetchPageData(API_END_POINTS.getBrandsByCompany(companyId));

      if (response?.props?.data?.data && response?.props?.data?.data.length > 0) {
        setBrandsData(response?.props?.data?.data);
      } else {
        setBrandsData([]);
      }
    } catch (e) {
      console.log("Error in fetching brands", e);
    }
  }
  const getHotelsDataonFilterChange = async (locationId, hotelOwnerId, hotelCompanyId, hotelBrandId) => {

    try {
      const response = await fetchPageData(API_END_POINTS.getHotelsDataByFilters(locationId, hotelOwnerId, hotelCompanyId, hotelBrandId));

      if (response?.props?.data?.data && response?.props?.data?.data.length > 0) {
        setHotelsTableData(response?.props?.data?.data);
      } else {
        setHotelsTableData([]);
      }
    } catch (e) {
      console.log("Error in fetching brands", e);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setNum(-1); // Close dropdown
        setShowBrandsList(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /***************************/
  const stickyDiv = useRef(null);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    let topPos;
    if (stickyDiv.current) {
      topPos = stickyDiv.current.offsetTop;
    }
    const handleScroll = () => {
      setIsFixed(window.scrollY > topPos); // Adjust scrollY value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-mainBlack pt-5 sm:pt-0  lg:py-[1.8vw] w-full z-10 transition-all sticky top-[66px] xl:top-[6.51vw] `}
      ref={stickyDiv}
    >
      <div className="container" ref={wrapperRef}>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[2vw] items-start">
          {filterData.map((item, i) => (
            <div
              key={i}
              className="sm:pt-5 mb-5 xl:pt-0 xl:mb-0 relative cursor-pointer last:border-l-[1px] last:border-[#808080] px-[2.5vw]"
              onClick={() => dropDownHandler(i)}
            >
              {labelShow && (
                <label className="absolute top-[-1.5vw] text-[#99742b] text-[13px] xl:text-[0.7vw] font-inter hidden sm:block">
                  {item.title}
                </label>
              )}
              <div className="flex xl:items-center leading-[normal]">
                <div className="min-w-[35px] xl:min-w-[3vw]  hidden sm:block ">
                  <Image
                    src={item.icon}
                    width={100}
                    height={100}
                    alt="soh"
                    className={`w-[auto] h-[25px] md:h-[34px] lg:h-[1.77vw] align-middle me-3`}
                  />
                </div>
                <span className="text-white text-[16px] sm:text-[18px] xl:text-[1.25vw] font-fh font-normal">
                  {selectedTitles[i] || item.title}
                </span>
                <span className="absolute right-[0px] top-[7px] sm:top-[26px] lg:top-[15px] w-[7px] xl:w-[0.5vw] xl:top-[50%] xl:translate-y-[-50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    className="w-full h-auto"
                  >
                    <path
                      d="M5.09103 5.15057C4.71563 5.4747 4.15937 5.4747 3.78397 5.15057L0.843146 2.6114C0.141783 2.00582 0.570052 0.854493 1.49667 0.854493L7.37833 0.854492C8.30495 0.854492 8.73322 2.00582 8.03185 2.6114L5.09103 5.15057Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>

              <ul
                className={`absolute top-[3.5vw] z-10 border-[1px] border-t-[4px]  border-[#99742B] w-[calc(100%)] left-[2.5vw] 
              bg-white rounded-bl-[6px] rounded-br-[6px] py-[0.5vw] ${i == num ? "block" : "hidden"
                  }`}
              >
                {
                  item.category.map((list, j) => (
                    <li
                      key={j}
                      className="text-mainBlack font-inter text-[13px] py-[10px] px-[12px] xl:text-[1vw] xl:py-[0.7vw] xl:px-[1.5vw] hover:bg-[#99742B] hover:text-white"
                      onClick={() => {

                        handleCategoryClick(i, list.name)
                        if (i === 0) {
                          getHotelsDataonFilterChange(list.id, '', '', '')
                          setBrandsData([])
                        } else if (i === 1) {
                          getHotelsDataonFilterChange('', list.id, '', '')
                          setBrandsData([])
                        } else if (i === 2) {
                          getHotelsDataonFilterChange('', '', list.id, '')
                          setBrandsData([])
                          setFilterIds({
                            ...filterIds,
                            hotelCompanyId: list.id
                          })
                          setShowBrands(true);
                          getBrandsByCompany(list.id)
                        }
                        setSelectedBrand("")
                      }}
                    >
                      {list.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div
            className="sm:pt-5 mb-5 xl:pt-0 xl:mb-0 relative cursor-pointer last:border-l-[1px] last:border-[#808080] px-[2.5vw]"
            onClick={() => toggleBrandsDropdown()}
          >
            {labelShow && (
              <label className="absolute top-[-1.5vw] text-[#99742b] text-[13px] xl:text-[0.7vw] font-inter hidden sm:block">
                {"Hotel Brands"}
              </label>
            )}
            <div className="flex xl:items-center leading-[normal]">
              <div className="min-w-[35px] xl:min-w-[3vw]  hidden sm:block ">
                <Image
                  src="/images/development-update/hotel_brands.svg"
                  width={100}
                  height={100}
                  alt="soh"
                  className={`w-[auto] h-[25px] md:h-[34px] lg:h-[1.77vw] align-middle me-3`}
                />
              </div>
              <span className="text-white text-[16px] sm:text-[18px] xl:text-[1.25vw] font-fh font-normal">
                {selectedBrand || "Hotel Brands"}
              </span>
              <span className="absolute right-[0px] top-[7px] sm:top-[26px] lg:top-[15px] w-[7px] xl:w-[0.5vw] xl:top-[50%] xl:translate-y-[-50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  className="w-full h-auto"
                >
                  <path
                    d="M5.09103 5.15057C4.71563 5.4747 4.15937 5.4747 3.78397 5.15057L0.843146 2.6114C0.141783 2.00582 0.570052 0.854493 1.49667 0.854493L7.37833 0.854492C8.30495 0.854492 8.73322 2.00582 8.03185 2.6114L5.09103 5.15057Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>

            <ul
              className={`absolute top-[3.5vw] z-10 border-[1px] border-t-[4px]  border-[#99742B] w-[calc(100%)] left-[2.5vw] 
              bg-white rounded-bl-[6px] rounded-br-[6px] py-[0.5vw] ${showBrandsList ? "block" : "hidden"
                }
             `}
            >
              {brandsData.length > 0 ?
                brandsData.map((list, j) => (
                  <li
                    key={j}
                    className="text-mainBlack font-inter text-[13px] py-[10px] px-[12px] xl:text-[1vw] xl:py-[0.7vw] xl:px-[1.5vw] hover:bg-[#99742B] hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBrand(list.name)
                      toggleBrandsDropdown();
                      setShowBrandsList(false)
                      getHotelsDataonFilterChange('', '', filterIds.hotelCompanyId, list.id)
                    }}
                  >
                    {list.name}
                  </li>

                ))
                :
                <li>
                  <span className="text-mainBlack font-inter text-[13px] py-[10px] px-[12px] xl:text-[1vw] xl:py-[0.7vw] xl:px-[1.5vw] hover:bg-[#99742B] hover:text-white">
                    No Brands Found
                  </span>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Filter;
