const Hotel_Mob_Table = ({ thData, data }) => {
  const keyArray = Object.keys(data[0]);

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
                {data.map((item, j) => (
                  <td key={j}>{item[keyArray[i]]}</td>
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
