import { Button, FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import PokedexItem from "../components/PokedexItem"
import React from "react"
import { selectedCategory } from "../store/actions/category.action"

const Pokedex = ({ navigation }) => {
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()

  const handleSelectedCategory = item => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Pokedex", {
      //categoryId: item.id,
      title: item.title,
    })
  }

  const renderPokedexItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <PokedexItem item={item} onSelected={handleSelectedCategory} />
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderPokedexItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Pokedex

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
})





// import { SafeAreaView, Text } from "react-native";

// import React from "react";

// export default function Pokedex() {
//   return (
//     <SafeAreaView>
//       <Text>Pokedex</Text>
//     </SafeAreaView>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { SafeAreaView, Text } from "react-native";
// import { getPokemonDetailsByUrlApi, getPokemonsApi } from "../api/pokemon";

// export default function Pokedex() {
//   useEffect(() => {
//     (async () => {
//       await loadPokemons();
//     })();
//   }, []);

//   const loadPokemons = async () => {
//     try {
//       const response = await getPokemonsApi();
//     } catch (error) {
//       console.error(error)
//     }
//   }
  
//   return (
//     <SafeAreaView>
//       <Text>Pokedex</Text>
//     </SafeAreaView>
//   );
// }
