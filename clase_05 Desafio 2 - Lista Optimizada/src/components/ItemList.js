import { FlatList, StyleSheet, View } from "react-native";

import RenderItem from "./Item";

export default function ItemList({
  list,
  handleDetail,
  isHighlighted,
  handleHighlightItem,
}) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <RenderItem
            item={item}
            handleDetail={() => handleDetail(item)}
            isHighlighted={() => isHighlighted(item)}
            handleHighlightItem={() => handleHighlightItem(item)}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});
