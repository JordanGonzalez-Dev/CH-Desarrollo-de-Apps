import { CATEGORIES } from "../constants/data/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    selectCategory: {
      reducer: (state, action) => {
        state.selected = state.categories[action.payload - 1];
      },
    },
  },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
