import { updatedForm } from "../store/form.slice";

const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 7;

export const validateInput = (type, value) => {
  let hasError = false;
  let error = "";

  switch (type) {
    case "email":
      if (value.trim() === "") {
        hasError = true;
        error = "Email is required";
      } else if (!formatEmail.test(value)) {
        hasError = true;
        error = "Email is not valid";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "password":
      if (value.trim() === "") {
        hasError = true;
        error = "Password is required";
      } else if (value.length < minPasswordLength) {
        hasError = true;
        error = `Password must be at least ${minPasswordLength} characters`;
      } else {
        hasError = false;
        error = "";
      }
      break;
    default:
      break;
  }

  return { hasError, error };
};

export const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key !== name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  const data = { name, value, hasError, error, touched: true, isFormValid };

  dispatch(updatedForm(data));
};
