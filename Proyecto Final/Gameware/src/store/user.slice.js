import * as FileSystem from "expo-file-system";

import { getAddress, insertAddress } from "../constants/db";

import { URL_GEOCODING } from "../constants/data/maps";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [],
  picture: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addImage: (state, action) => {
      saveImage(action.payload);
    },
    setAddress: (state, action) => {
      state.addresses = action.payload;
    },
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
  },
});

const saveImage = (image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
};

export const saveAddress = (title, coords) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

      if (!response.ok) {
        throw new Error(
          "No se ha podido conectar con el servicio de geolocalización"
        );
      }

      const data = await response.json();

      if (!data.results)
        throw new Error("No se ha podido encontrar la dirección");

      const result = await insertAddress(
        title,
        data.results[0].formatted_address,
        data.results[0].geometry.location.lat,
        data.results[0].geometry.location.lng
      );

      const address = {
        id: result.insertId,
        nombre: title,
        direccion: data.results[0].formatted_address,
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng,
      };

      dispatch(addAddress(address));
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadAddresses = () => {
  return async (dispatch) => {
    try {
      const result = await getAddress();
      dispatch(setAddress(result?.rows?._array));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const { addImage, addAddress, setAddress } = userSlice.actions;
export default userSlice.reducer;
