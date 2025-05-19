import { formatDateToMonthYear } from "@/utils/constants";

export default function HotelTable({ thData, data, hotelsTableData }) {
  console.log("HOTEL TABLE DATA", hotelsTableData);
  return (
    <div className="container pt-8 xl:pt-[4vw] hidden md:block">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left overflow-hidden rounded-[10px] xl:rounded-[0.8vw] bg-[#faf7f1]">
          <thead className="text-gray-700 ">
            <tr className="border-b-[1px] border-[#99742B]">
              {thData.map((item) => (
                <th
                  className="px-5 py-8  bg-[#F7F3EA] font-fh text-mainBlack text-[16px] xl:text-[1.041vw] font-normal"
                  key={item.name}
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hotelsTableData?.length > 0 ? hotelsTableData.map((hotel, idx) => (
              <tr
                key={idx}
                className="border-t-[1px] border-[#ebe3d5] font-inter text-[14px] xl:text-[0.93vw] "
              >
                <td className="px-5 py-8">{formatDateToMonthYear(hotel?.date)}</td>
                <td className="px-5 py-8">{hotel?.hotelCompany?.name}</td>
                <td className="px-5 py-8">{hotel?.hotelBrand?.name}</td>
                <td className="px-5 py-8">{hotel?.location?.name}</td>
                <td className="px-5 py-8">{hotel?.hotelOwner?.name}</td>
                <td className="px-5 py-8">{hotel?.numberOfKey}</td>
                <td className="px-5 py-8">{hotel.signing}</td>
                <td className="px-5 py-8">{hotel.opening}</td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
