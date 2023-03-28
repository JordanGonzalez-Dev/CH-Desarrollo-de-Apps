import { URL_API } from "../constants/data/database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  orden: {},
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    Orders: (state, action) => {
      state.list = action.payload;
    },
    Order: (state, action) => {
      state.orden = action.payload;
    },
  },
});

export const getOrders = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${URL_API}/ordenes.json?orderBy="user"&equalTo="${user}"`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const results = await response.json();
      const orders = Object.keys(results).map((key) => ({
        ...results[key],
        id: key,
      }));

      dispatch(Orders(orders));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes/${id}.json`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const results = await response.json();
      const order = {
        ...results,
        id: id,
      };

      dispatch(Order(order));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { Orders, Order } = ordersSlice.actions;
export default ordersSlice.reducer;
