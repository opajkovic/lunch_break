import { useSelector } from "react-redux";
import { Title } from "../components";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  const itemsInCart = useSelector((state) => state.cart.meals);
  const numItemsInCart = itemsInCart.length;

  return (
    <div
      className={
        numItemsInCart == 0
          ? "hidden md:hidden"
          : "md:w-2/6 w-full md:flex  flex-col hidden p-1 md:p-8 "
      }
    >
      <div className="w-full  mb-10">
        <Title text="shoping cart" />
      </div>
      <div className="w-full p-2">
        {itemsInCart?.map((item) => {
          return (
            <div
              key={item[0].id}
              className=" text-2xl capitalize border-b-2 border-base-300 mb-5 pb-5 w-full"
            >
            <span className="flex justify-end bg-error"><RiDeleteBinLine /></span>
              <div className="flex flex-row pt-1">
                <img src={item[2]} alt="photo" className="rounded w-16" />
                <div className="flex flex-col">
                <p className="ml-12 flex items-center w-full justify-between">{item[0].name}
                
              </p>
              <div className="flex justify-start ml-12 text-2xl font-medium">
                <span className="p-2">-</span>
                <span className="p-2 border-base-300">{item[1]}</span>
                <span className="p-2">+</span>
              </div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
