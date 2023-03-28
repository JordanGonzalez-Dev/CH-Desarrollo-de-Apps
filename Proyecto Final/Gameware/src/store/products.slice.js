import { PRODUCTS } from "../constants/data/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.selected = state.products.find(
        (product) => product.id === action.payload
      );
    },
    filteredProducts: (state, action) => {
      state.filteredProducts = state.products.filter(
        (product) => product.categoryId === action.payload
      );
    },
  },
});

export const { selectProduct, filteredProducts } = productSlice.actions;
export default productSlice.reducer;
