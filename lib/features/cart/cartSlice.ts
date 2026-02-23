import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartState } from "./cartTypes";

const initialState: CartState = {
  id: 0,
  userId: 0,
  date: new Date().toISOString(),
  products:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const exist = state.products.find(
        (item) => item.id === action.payload.id,
      );
      if (exist) {
        exist.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find(
        (product) => product.id === action.payload,
      );
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find(
        (product) => product.id === action.payload,
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          //remove item
          state.products = state.products.filter(
            (product) => product.id !== action.payload,
          );
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
