import { createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const defaultState = {
    "meals": [],
    "quantities": [],
}

// const getCartFromLocalStorage = () => {
//     return JSON.parse(localStorage.getItem('cart')) || defaultState;
// }

const cartSlice = createSlice({
    name:"cart",
    initialState: defaultState,
    reducers: {
        addMeal: (state,action) =>{
            // const {mealId,quantity} = action.payload
            // state.meals.push(mealId);
            // state.quantities.push(quantity);
            // localStorage.setItem('cart',JSON.stringify(state))
            // toast.success("Meal added to cart");
        },
        clearMeal: (state) => {},
        removeMeal: (state) => {},
        editmeal: (state, action) => {}
    },
});
export const {addMeal, clearMeal, removeMeal, editMeal} = cartSlice.actions;
export default cartSlice.reducer;