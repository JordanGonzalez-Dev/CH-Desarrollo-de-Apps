import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  wrapperDetail: {
    width: 300,
    alignItems: "center",
    marginTop: "2%",
  },
  wrappersBloques: {
    width: "90%",
    alignItems: "flex-start",
    marginTop: "4%",
  },
  textosCard: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  wrappersBloqueFinal: {
    width: "90%",
    alignItems: "flex-start",
    marginTop: "4%",
    marginBottom: "5%",
  },
  addToCartButton: {
    width: "100%",
    backgroundColor: THEME.colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartText: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    color: "#fff",
    padding: 7,
  },
});
