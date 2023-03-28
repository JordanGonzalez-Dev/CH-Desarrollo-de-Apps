import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  wrapperCartItem: {
    flexDirection: "row",
    width: "100%",
    borderBottomColor: THEME.colors.grey,
    borderBottomWidth: 1,
    marginTop: "2%",
    marginBottom: "2%",
    paddingBottom: "2%",
    justifyContent: "space-around",
  },
  wrapperCartItemData: {
    width: "50%",
    marginLeft: "8%",
  },
  wrapperCartItemDelete: {
    width: "50%",
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: "8%",
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
