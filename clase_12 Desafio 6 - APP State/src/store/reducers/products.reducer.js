import { PRODUCTS } from "../../data/products"

const initialState = {
  products: PRODUCTS,
  filteredProduct: [],
  selected: null,
};

const ProductReducer = (state = initialState, action) => {
  return state;
};

export default ProductReducer;