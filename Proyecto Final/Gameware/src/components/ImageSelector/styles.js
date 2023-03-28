import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  selectorContainer: {
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  preview: {
    width: "95%",
    marginBottom: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
  },
  addImageButton: {
    width: "40%",
    backgroundColor: THEME.colors.accent,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  addImageText: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    color: "#fff",
    padding: 7,
  },
});
