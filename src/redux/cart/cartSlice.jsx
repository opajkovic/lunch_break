import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  meals: [],
  description: "",
  inAdvance: "",
  total:0
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
      cartSlice.caseReducers.calculateTotal(state);
      toast.success("Meal added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeMeal: (state, action) => {
      state.meals = state.meals.filter((meal) =>meal[0].id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(state));
      cartSlice.caseReducers.calculateTotal(state);
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
      cartSlice.caseReducers.calculateTotal(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    calculateTotal:(state) => {
      let total = 0;
      for(let item of state.meals) {
        total += parseFloat(item[0].price )* parseFloat(item[1])
      }
      state.total = total.toFixed(2)
    }
    },
});
export const { addMeal, clearMeal, removeMeal, editMeal} = cartSlice.actions;
export default cartSlice.reducer;
