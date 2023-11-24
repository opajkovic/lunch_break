import { useSelector } from "react-redux"

const Cart = () => {
  const numItemsInCart = useSelector((state) => state.cart.meals.length);

  return (
    <div className={numItemsInCart==0 ? "hidden md:hidden" : "md:w-2/6 w-full md:flex hidden p-1 md:p-8 "}>
    Cart
    </div>
  )
}

export default Cart