import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updatedForm: (state, action) => {
      const { name, value, hasError, error, touched, isFormValid } =
        action.payload;

      state[name].value = value;
      state[name].hasError = hasError;
      state[name].error = error;
      state[name].touched = touched;
      state.isFormValid = isFormValid;
    },
  },
});

export const { updatedForm } = formSlice.actions;
export default formSlice.reducer;
