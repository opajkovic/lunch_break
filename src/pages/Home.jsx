import { Outlet, useNavigation } from "react-router-dom";
import { Header, Menu } from "../components";
import { Cart, Loading } from "./";
import { apiCall } from "../utils";

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

  return (
    <section className="container mx-auto h-full">
      <Header />
      {loading ? <Loading /> :
      <div className="container mx-auto flex flex-wrap">
        <Menu />
        <div className="md:w-3/6 w-full bg-blue-500  md:p-8 flex ">
          <Outlet />
        </div>
        <Cart />
      </div>
      }
    </section>
  );
};

export default Home;
