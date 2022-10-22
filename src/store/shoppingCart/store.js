import { configureStore } from '@reduxjs/toolkit'

import initialState  from './cartSlice'
import initialStateUi from "./cartUiSlice";
import initialStateReview from "./reviewSlice";

export const store = configureStore({
  reducer: {
    cart: initialState,
    cartOpening: initialStateUi,
    review: initialStateReview,
  },
});