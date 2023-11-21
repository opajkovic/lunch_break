import { useLoaderData } from "react-router-dom"
import { apiCall } from "../utils"
import CardItem from "./CardItem"

export const loader = async({params}) => {
  const response = await apiCall(`/api/categories/${params.id}`)
  return response.data.data.meals;
}
const Categories = () => {
  const categoryMeals = useLoaderData();
    
  return (
    <div className="flex justify-around items-center flex-wrap">
    {categoryMeals.map((meal) => {
      return (
        <CardItem key={meal.id} meal={meal}/>
      )
    })}
    </div>
  )
}

export default Categories