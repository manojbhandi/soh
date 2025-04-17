import Filter from "./filter";
import Hotel_Mob_Table from "./hotel-mob-table";
import HotelTable from "./hotel-table";

const Filter_Table = () => {
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
    <div className="mb-10 xl:mb-[4vw]">
      <Filter data={data} />
      <HotelTable thData={thData} data={data} />
      <Hotel_Mob_Table thData={thData} data={data} />
    </div>
  );
};

export default Filter_Table;
