import { Outlet } from "react-router-dom";
import { Header, Menu } from "../components";
import { Cart } from "./";

const Home = () => {
  return (
    <section className="container mx-auto h-full">
      <Header />
      <div className="container mx-auto flex flex-wrap">
        <Menu />
        <div className="md:w-3/6 w-full bg-blue-500 p-1 md:p-8 flex justify-evenly pt-4">
          <Outlet />
        </div>
        <Cart />
      </div>
    </section>
  );
};

export default Home;
