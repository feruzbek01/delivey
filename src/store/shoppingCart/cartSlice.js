import { createSlice } from "@reduxjs/toolkit";

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};


const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;




const initialState = {
  cartItems: items,
  totalAmount: totalAmount,
  totalQuantity: totalQuantity,
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

        setItemFunc(
          state.cartItems.map((item) => item),
          state.totalAmount,
          state.totalQuantity
        );
    },
    deleteItem: (state, action) => {
      const deletedIndex = state.cartItems.findIndex(
        (value) => value.id === action.payload.id
      );
      state.cartItems.splice(deletedIndex, 1);
      state.totalQuantity = state.totalQuantity - action.payload.quantity;

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

        setItemFunc(
          state.cartItems.map((item) => item),
          state.totalAmount,
          state.totalQuantity
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
