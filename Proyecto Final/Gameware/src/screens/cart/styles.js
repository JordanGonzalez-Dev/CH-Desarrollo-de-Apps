import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  header: {
    fontFamily: "Roboto-Bold",
    fontSize: 25,
    marginBottom: "4%",
    marginLeft: "4%",
    marginTop: "4%",
  },
  wrapperTotal: {
    alignItems: "center",
    marginTop: "5%",
  },
  total: {
    fontFamily: "Roboto-Bold",
    fontSize: 36,
  },
  wrapperConfirm: {
    marginTop: "5%",
    backgroundColor: THEME.colors.primary,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  confirm: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: THEME.colors.lightGrey,
    padding: 8,
  },
});
