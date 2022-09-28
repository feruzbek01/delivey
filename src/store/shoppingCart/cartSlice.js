import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteItem: (state, action) => {
      const deletedIndex = state.cartItems.findIndex(
        (value) => value.id === action.payload
      );
      state.cartItems.splice(deletedIndex, 1);
      state.totalQuantity--;

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    // increaseItem: (state, action) => {
    //   state.cartItems.map((value) =>
    //     value.id === action.payload.id ? (value.quantity += 1) : value
    //   );

    //   state.totalAmount = state.cartItems.reduce(
    //     (total, item) => total + Number(item.price) * Number(item.quantity),
    //     0
    //   );

    //   const existingItem = state.cartItems.find(
    //     (value) => value.id === action.payload.id
    //   );

    //   existingItem.totalPrice =
    //     Number(existingItem.totalPrice) + Number(action.payload.price);
    // },
    decreaseItem: (state, action) => {
      state.cartItems.map((value) =>
        value.id === action.payload.id ? (value.quantity -= 1) : value
      );

      const existingItem = state.cartItems.find(
        (value) => value.id === action.payload.id
      );

      if (existingItem.quantity < 1) {
        state.cartItems = state.cartItems.filter(
          (value) => value.id !== existingItem.id
        );
      }

      state.totalQuantity--;
      existingItem.totalPrice =
        Number(existingItem.totalPrice) - Number(action.payload.price);
      
      
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
