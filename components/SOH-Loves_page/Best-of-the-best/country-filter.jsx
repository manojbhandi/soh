const Country_Filter = () => {
  return (
    <div className="container ">
      <div className="flex justify-between border-b border-[#CACACA] pb-4 xl:pb-[1vw] mb-10 xl:mb-[4vw]">
        <div className="title text-mainBlack">Filter By</div>

        <div className="flex gap-10">
          <div className="text-mainBlack">
            Country :{" "}
            <select name="" id="" className="text-mainBlack outline-none">
              <option value="">India</option>
              <option value="">Australia</option>
            </select>
          </div>

          <div className="text-mainBlack">
            City :{" "}
            <select name="" id="" className="text-mainBlack outline-none">
              <option value="">Mumbai</option>
              <option value="">Ahmedabad</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country_Filter;
