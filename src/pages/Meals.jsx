import { useLoaderData } from "react-router-dom";
import { apiCall } from "../utils";
import { CardItem } from "../components";

const url = "/api/meals";
const data={}

export const loader = async () => {
  const response = await apiCall.post(url,data);
  return response.data.data;
};

const Meals = () => {
  const meals = useLoaderData();
  
  return (
    <div className="flex justify-around items-center flex-wrap">
      {/* <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> */}
      {meals?.map((meal) => {
        return <CardItem key={meal.id} meal={meal} />;
      })}
    </div>
    // </div>
  );
};

export default Meals;
