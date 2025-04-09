export default function HotelTable() {
  const data = [
    {
      month: "April 2025",
      company: "IHCL",
      brand: "Taj",
      location: "Mumbai",
      owner: "Harshvardhan Neotia",
      keys: 600,
      signing: "01",
      opening: "05",
    },
    {
      month: "March 2025",
      company: "The Lalit Suri Hospitality Group",
      brand: "The Lalit",
      location: "Delhi",
      owner: "Dr. Jyotsna Suri",
      keys: 218,
      signing: "02",
      opening: "01",
    },
    {
      month: "February 2025",
      company: "ITC Hotels Limited",
      brand: "Mementos",
      location: "Jaipur",
      owner: "Atul Dhangaich",
      keys: 380,
      signing: "00",
      opening: "07",
    },
    {
      month: "January 2025",
      company: "The Leela Palaces, Hotels and Resorts",
      brand: "The Leela",
      location: "Kolkata",
      owner: "CP Krishnan Nair",
      keys: 400,
      signing: "04",
      opening: "09",
    },
    {
      month: "January 2025",
      company: "Lemon Tree Hotels Limited",
      brand: "Red Fox By Lemon Tree Hotels",
      location: "Goa",
      owner: "Patu Keswani",
      keys: 55,
      signing: "03",
      opening: "10",
    },
  ];

  const thData = [
    {
      name: "Month",
    },
    {
      name: "Hotel Company",
    },
    {
      name: "Hotel Brands",
    },
    {
      name: "Location",
    },
    {
      name: "Owner",
    },
    {
      name: "No of Keys",
    },
    {
      name: "Signing",
    },
    {
      name: "Opening",
    },
  ];

  return (
    <div className="container pt-8 xl:pt-[4vw]">
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
              {/* <th className="px-4 py-2 border">Hotel Company</th>
              <th className="px-4 py-2 border">Hotel Brands</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Owner</th>
              <th className="px-4 py-2 border">No of Keys</th>
              <th className="px-4 py-2 border">Signing</th>
              <th className="px-4 py-2 border">Opening</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((hotel, idx) => (
              <tr
                key={idx}
                className="border-t-[1px] border-[#ebe3d5] font-inter text-[14px] xl:text-[0.93vw] "
              >
                <td className="px-5 py-8">{hotel.month}</td>
                <td className="px-5 py-8">{hotel.company}</td>
                <td className="px-5 py-8">{hotel.brand}</td>
                <td className="px-5 py-8">{hotel.location}</td>
                <td className="px-5 py-8">{hotel.owner}</td>
                <td className="px-5 py-8">{hotel.keys}</td>
                <td className="px-5 py-8">{hotel.signing}</td>
                <td className="px-5 py-8">{hotel.opening}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
