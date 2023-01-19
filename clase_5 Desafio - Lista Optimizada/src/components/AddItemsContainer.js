import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddItemsContainer({
  handleChangeItem,
  item,
  handleAdd,
}) {
  return (
    <View style={styles.textInputContainer}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Ingrese su producto"
          style={styles.textInput}
          onChangeText={handleChangeItem}
          value={item}
        />
        <View style={styles.addButton}>
          <Button title="Agregar" onPress={handleAdd} color={"#227"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 30,
    alignItems: "center",
  },
  addButton: {
    borderRadius: 10,
    marginLeft: 5,
    backgroundColor: "rgb(155, 120, 180)",
    shadowColor: "rgb(20, 10, 30)",
    shadowOffset: { width: 0.1, height: 0.4 },
    shadowOpacity: 0.7,
  },
  textInput: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    width: 200,
    textAlign: "center",
    shadowColor: "black",
    shadowOffset: { width: 0.1, height: 0.4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
