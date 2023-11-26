import { useDispatch, useSelector } from "react-redux";
import { Title } from "../components";
import { RiDeleteBinLine } from "react-icons/ri";
import { editMeal } from "../redux/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
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
        {itemsInCart?.map((meal) => {
          return (
            <div
              key={meal[0].id}
              className=" text-2xl capitalize border-b-2 border-base-300 mb-5 pb-5 w-full"
            >
            <span className="flex justify-end text-error hover:cursor-pointer"><RiDeleteBinLine /></span>
              <div className="flex flex-row pt-1">
                <img src={meal[2]} alt="photo" className="rounded w-16" />
                <div className="flex flex-col">
                <p className="ml-12 flex items-center w-full justify-between">{meal[0].name}
                
              </p>
              <div className="flex justify-start ml-12 text-xl font-medium">
                <span className="p-2 hover:cursor-pointer" onClick={() => { dispatch(editMeal({id:meal[0].id,sign:'decrease'}))}}>-</span>
                <span className="p-2 border-base-300">{meal[1]}</span>
                <span className="p-2 hover:cursor-pointer" onClick={() =>{ dispatch(editMeal({id:meal[0].id,sign:'increase'}))}}>+</span>
                <span className="p-2 ml-24 pt-2">{meal[1]* meal[0].price}€</span>
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
