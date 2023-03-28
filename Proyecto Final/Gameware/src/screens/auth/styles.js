import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
  authScreen: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 12,
    borderColor: THEME.colors.grey,
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto-Bold",
    marginBottom: 18,
    textAlign: "center",
  },
  promptMessage: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  input: {
    borderBottomColor: THEME.colors.grey,
    borderBottomWidth: 1,
    marginBottom: 20,
    height: 50,
  },
  wrapperConfirm: {
    marginTop: "5%",
    backgroundColor: THEME.colors.primary,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  confirm: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: THEME.colors.lightGrey,
    padding: 8,
  },
  prompt: {
    alignItems: "center",
  },
  promptButton: {
    fontSize: 16,
    fontFamily: "Roboto-Bold",
    color: THEME.colors.primary,
  },
});
