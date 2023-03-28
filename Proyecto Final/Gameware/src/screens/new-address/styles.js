import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 16,
    fontFamily: "Roboto-Bold",
  },
  input: {
    borderBottomColor: THEME.colors.PINK,
    borderBottomWidth: 1,
    marginBottom: 16,
    width: "100%",
  },
  wrapperBtnSelector: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  btnSelector: {
    width: "80%",
    backgroundColor: THEME.colors.primary,
    alignItems: "center",
  },
  textBtnSelector: {
    fontFamily: "Roboto-Regular",
    color: THEME.colors.lightGrey,
    fontSize: 12,
    padding: 8,
  },
});
