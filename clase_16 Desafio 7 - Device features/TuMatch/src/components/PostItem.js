import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";

const PostItem = () => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>Descripcion</Text>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },
  imageContainer: {

  },
  image: {

  },
  textContainer: {
    
  }
});
