import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: "5%",
  },
  header: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginBottom: "4%",
  },
  fecha: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    marginBottom: "4%",
  },
  items: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    marginBottom: "4%",
  },
  wrapperTotal: {
    alignItems: "flex-end",
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
