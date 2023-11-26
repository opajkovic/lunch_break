import { Outlet, useNavigation } from "react-router-dom";
import { Header, Menu } from "../components";
import { Cart, Loading } from "./";
import { apiCall } from "../utils";
import { useSelector } from "react-redux";

export const loader = async() => {
  const response = await apiCall('/api/categories');
  const res = await apiCall('/api/types');
  const categories = response.data.data;
  const types = res.data.data;
  return {categories,types}
}

const Home = () => {
  const navigation = useNavigation();
  const loading = navigation.state === 'loading';
  const numItemsInCart = useSelector((state) => state.cart.meals.length)

  return (
    <section className="container mx-auto h-full">
      <Header />
      {loading ? <Loading /> :
      <div className="container mx-auto flex flex-wrap">
        <Menu />
        <div className={numItemsInCart>0 ? "md:w-3/6 w-full md:p-8 flex  " : "md:w-5/6 md:p-8 flex"}>
          <Outlet />
        </div>
        {numItemsInCart>0 && <Cart />}
      </div>
      }
    </section>
  );
};

export default Home;
