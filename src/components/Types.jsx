import { useLoaderData } from "react-router-dom"
import { apiCall } from "../utils"
import CardItem from "./CardItem"

export const loader = async() => {
  const response = await apiCall.post(`/api/types/filter`)
  return response.data.data;
}
const Types = () => {
  const typesMeals = useLoaderData();
    
  return (
    <div className="flex justify-around items-center flex-wrap">
    {typesMeals.map((meal) => {
      return (
        <CardItem key={meal.id} meal={meal}/>
      )
    })}
    </div>
  )
}

export default Types