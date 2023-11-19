import { Header } from "../components";
import {Cart, Meals} from "./";

const Home = () => {
  return (
    <section className="container mx-auto">
      <Header />
      <div className="container mx-auto flex flex-wrap">
          <Meals />
          <Cart />
      </div>
    </section>
  )
}

export default Home