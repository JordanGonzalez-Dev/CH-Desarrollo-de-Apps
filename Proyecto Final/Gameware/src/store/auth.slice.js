import { URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from "../constants/data/database";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.token = action.payload.idToken;
      state.userId = action.payload.localId;
    },
    signIn: (state, action) => {
      state.token = action.payload.idToken;
      state.userId = action.payload.localId;
    },
  },
});

export const registerUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        alert("Parece que ya tienes una cuenta. inicia sesión para continuar.");
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const payload = { idToken: data.idToken, localId: data.localId };

      dispatch(signUp(payload));
    } catch (error) {
      throw error;
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGNIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (data.error) {
        if (data.error.message == "INVALID_PASSWORD") {
          alert(
            "Contraseña Inválida. Revise los datos ingresados e intente nuevamente"
          );
        }
      } else {
        const payload = { idToken: data.idToken, localId: data.localId };
        dispatch(signIn(payload));
      }
    } catch (error) {
      throw error;
    }
  };
};

export const { signUp, signIn } = authSlice.actions;
export default authSlice.reducer;
