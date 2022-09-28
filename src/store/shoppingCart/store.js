import { configureStore } from '@reduxjs/toolkit'

import initialState  from './cartSlice'
import initialStateUi from "./cartUiSlice";

export const store = configureStore({
  reducer: {
    cart: initialState,
    cartOpening: initialStateUi,
  },
});