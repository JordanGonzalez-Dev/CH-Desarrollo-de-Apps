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
  imageSummary: {
    width: 130,
    height: 130,
    margin: "4%",
  },
  wrapperSummaryName: {
    width: "100%",
  },
  wrapperSummaryButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  verMasButton: {
    width: "50%",
    backgroundColor: THEME.colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  verMasText: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: "#fff",
    padding: 5,
  },
});
