import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  wrapperSummary: {
    flexDirection: "row",
    width: "100%",
    borderBottomColor: THEME.colors.grey,
    borderBottomWidth: 1,
    marginTop: "2%",
    marginBottom: "2%",
  },
  orderDetailButton: {
    width: "80%",
    backgroundColor: THEME.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  orderDetailText: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: "#fff",
    padding: 7,
  },
});
