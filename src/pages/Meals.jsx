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
    <div className="flex items-center mx-auto flex-wrap">
        {meals?.map((meal) => {
        return <CardItem key={meal.id} meal={meal} />;
      })}
    </div>
  );
};

export default Meals;
