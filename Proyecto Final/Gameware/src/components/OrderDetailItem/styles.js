import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  wrapperOrderDetailItem: {
    flexDirection: "column",
    width: "100%",
    borderBottomColor: THEME.colors.grey,
    borderBottomWidth: 1,
    marginTop: "2%",
    marginBottom: "2%",
    paddingBottom: "2%",
    justifyContent: "space-around",
  },
  cartDataTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
  },
  cartDataText: {
    fontFamily: "Roboto-Regular",
    fontSize: 15,
  },
});
