import { SafeAreaView, Text } from "react-native";

import React from "react";

export default function Pokedex() {
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}


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
