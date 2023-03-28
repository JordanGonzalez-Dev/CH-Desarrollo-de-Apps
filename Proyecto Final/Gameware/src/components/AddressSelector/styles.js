import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  wrapperSelector: {
    width: "100%",
    alignItems: "center",
  },
  imageMap: {
    height: 200,
    width: "100%",
    backgroundColor: THEME.colors.grey,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
  wrapperBtnSelector: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  btnSelector: {
    width: "40%",
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
