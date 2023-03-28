import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileHeader: {
    fontFamily: "Roboto-Bold",
    fontSize: 25,
    marginBottom: "2%",
    marginTop: "8%",
    textAlign: "center",
  },
  wrapperProfileTabs: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: "5%",
  },
  wrapperTabs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTabs: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    padding: 8,
  },
});
