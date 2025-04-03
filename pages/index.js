import HomePage from "@/components/Home/HomePage";
import { fetchData } from "@/utils/api";
import { API_END_POINTS } from "@/utils/constants";

const Index = ({ data }) => {
  console.log(data, "DATA");

  return <HomePage data={data} />;
};

export default Index;

export const getServerSideProps = async (context) => {
  try {
    const endpoint = API_END_POINTS.home;
    const data = await fetchData(endpoint);
    console.log("Fetched data:", data);
    return { props: { data: data || {} } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Failed to load data",
      },
    };
  }
};
