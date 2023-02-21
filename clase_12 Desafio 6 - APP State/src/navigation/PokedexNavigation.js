import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          headerTitle: "Pokedex",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
      />
    </Stack.Navigator>
  );
}
