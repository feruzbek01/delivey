import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState: [],

  reducers: {
    addReview: (state, action) => {
      const adding = action.payload;
      const newReview = {
        name: adding.name,
        email: adding.email,
        review: adding.review,
      };

      state.push({
        name: newReview.name,
        email: newReview.email,
        review: newReview.review,
      });
    },
  },
});

export const reviewAction = reviewSlice.actions
export default reviewSlice.reducer
