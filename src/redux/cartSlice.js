import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (findCartItem) {
        state.cartItems = state.cartItems.map((cart) => {
          if (cart.id === findCartItem.id) {
            return {
              ...cart,
              quantity: findCartItem.quantity + 1,
            };
          }
          return cart;
        });
        return;
      }

      state.cartItems = [action.payload, ...state.cartItems];
    },
    removeFromCart: (state, action) => {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.cartItems = filteredCartItems;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
