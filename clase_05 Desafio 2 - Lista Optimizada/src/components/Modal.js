import {
  Modal as ModalNative,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import PurpleButton from "./PurpleButton";
import React from "react";

const Modal = ({
  itemSelected,
  isVisible,
  buttonPrimaryAction,
  buttonSecondaryAction,
  buttonHide,
  isHighlighted,
}) => {
  return (
    <ModalNative animationType="fade" transparent={true} visible={isVisible}>
      <Pressable style={styles.modalStyle} onPress={buttonHide}>
        <View
          style={
            !isHighlighted(itemSelected)
              ? { ...styles.modalView, backgroundColor: "rgb(230, 200, 230)" }
              : { ...styles.modalView, backgroundColor: "rgb(4, 139, 34)" }
          }
        >
          <Text style={styles.modalText}>{itemSelected}</Text>
          <View style={styles.buttonsContainer}>
            <PurpleButton title="Eliminar" onPress={buttonPrimaryAction} />
            <PurpleButton
              title={`${!isHighlighted(itemSelected) ? "Marcar" : "Desmarcar"}`}
              onPress={buttonSecondaryAction}
            />
            <PurpleButton title="Ocultar" onPress={buttonHide} />
          </View>
        </View>
      </Pressable>
    </ModalNative>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    backgroundColor: "rgba(10, 5, 20, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    minWidth: "70%",
    minHeight: "40%",
    marginVertical: "auto",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 30,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 50,
  },
  buttonsContainer: {
    paddingTop: 10,
    flexDirection: "row",
  },
});
