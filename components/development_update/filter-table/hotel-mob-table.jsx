import { formatDateToMonthYear } from "@/utils/constants";

const Hotel_Mob_Table = ({ thData, data, hotelsTableData }) => {


  const transformApiDataToUiFormat = (apiData) => {
    if (!apiData || !apiData.length) return [];

    return apiData.map(item => {
      const date = formatDateToMonthYear(item.date);


      return {
        month: date,
        company: item.hotelCompany?.name || "",
        brand: item.hotelBrand?.name || "",
        location: item.location?.name || "",
        owner: item.hotelOwner?.name || "",
        keys: item.numberOfKey || "0",
        signing: item.signing || "0",
        opening: item.opening || "0"
      };
    });
  };
  const transformedData = transformApiDataToUiFormat(hotelsTableData);
  const keyOrder = ["month", "company", "brand", "location", "owner", "keys", "signing", "opening"];

  return (
    <div className="container hotelTable overflow-auto block md:hidden">
      <div className="table-container">
        <table className="w-full">
          <tbody>
            {thData.map((key, i) => (
              <tr key={i}>
                <td className="sticky-col bg-[#F7F3EA] font-semibold capitalize">
                  {key.name}
                </td>
                {transformedData.map((item, j) => (
                  <td key={j}>{item[keyOrder[i]]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hotel_Mob_Table;
