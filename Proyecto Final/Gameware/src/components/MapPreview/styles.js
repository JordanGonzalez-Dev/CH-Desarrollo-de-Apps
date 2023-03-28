import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme/index";

export const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    alignItems: "center",
    marginTop: "5%",
  },
  imageMap: {
    height: 200,
    width: "100%",
    backgroundColor: THEME.colors.grey,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5%",
  },
});
