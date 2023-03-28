import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  wrapperItemMenu: {
    backgroundColor: THEME.colors.primary,
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 25,
    padding: 40,
    borderRadius: 10,
  },
  textItemMenu: {
    fontFamily: "Roboto-Bold",
    fontSize: 28,
    color: "#FFF",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
