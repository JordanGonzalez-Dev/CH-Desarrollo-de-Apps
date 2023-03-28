import { URL_API } from "../constants/data/database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const sumTotal = (list) =>
  list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let updateCart = [];

      if (state.items.find((item) => item.id === action.payload.id)) {
        updateCart = state.items.map((item) => {
          if (item.id === action.payload.id) item.quantity += 1;
          return item;
        });
      } else {
        const item = { ...action.payload, quantity: 1 };
        updateCart = [...state.items, item];
      }

      (state.items = updateCart), (state.total = sumTotal(updateCart));
    },
    removeItem: (state, action) => {
      const filteredCart = state.items.filter(
        (item) => item.id !== action.payload
      );

      (state.items = filteredCart), (state.total = sumTotal(filteredCart));
    },
    sendCart: (state, action) => {
      (state.items = []), (state.total = 0);
    },
  },
});

export const confirmCart = (payload, total, user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}ordenes.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          user: user,
          items: payload,
          total,
        }),
      });

      dispatch(sendCart());
    } catch (error) {
      console.log(error);
    }
  };
};

export const { addItem, removeItem, sendCart } = cartSlice.actions;
export default cartSlice.reducer;
