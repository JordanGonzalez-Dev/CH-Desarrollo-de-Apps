import AccountScreen from "../screens/Account";
import FavoriteScreen from "../screens/Favorite";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/FontAwesome5";
import PokedexScreen from "../screens/Pokedex"
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
          headerTitle: "Favoritos",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="user" color={color} size={size} />
          ),
          headerTitle: "Mi Cuenta",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../../assets/pokeball.png")}
      style={{ width: 45, height: 45, top: -5 }}
    />
  );
}
