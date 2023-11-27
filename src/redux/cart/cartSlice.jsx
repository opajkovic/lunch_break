import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  meals: [],
  description: "",
  inAdvance: "",
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addMeal: (state, action) => {
      let i = 0;
      if (state.meals.length == 0) {
        state.meals.push(action.payload);
        i = 1;
      } else {
        for (let item of state.meals) {
          if (item[0].id === action.payload[0].id) {
            item[1] += action.payload[1];
            i = 1;
          }
        }
      }
      if (i == 0) {
        state.meals.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("Meal added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeMeal: (state, action) => {
      for (let item of state.meals) {
        if (item[0].id == action.payload) {
          let index = action.payload.id;
          state.meals.splice(index, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("Item removed from cart");
    },
    editMeal: (state, action) => {
      for (let item of state.meals) {
        if (item[0].id === action.payload.id) {
          if (action.payload.sign === "decrease" && item[1] > 1) {
            item[1] -= 1;
          }
          if (action.payload.sign === "increase") {
            item[1] += 1;
          }
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    },
});
export const { addMeal, clearMeal, removeMeal, editMeal} = cartSlice.actions;
export default cartSlice.reducer;
