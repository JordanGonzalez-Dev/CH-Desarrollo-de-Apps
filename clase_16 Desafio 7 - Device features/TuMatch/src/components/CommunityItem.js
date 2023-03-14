import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS } from "../constants/colors";
import React from "react";

const CommunityItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.img,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.text}>
          <Text> {item.title} </Text>
        </View>
        <View style={styles.buttons}>
          <Button title="Ke"></Button>
          <Button title="Ke"></Button>
          <Button title="Ke"></Button>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CommunityItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    width: "100%",
    height: "80%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
