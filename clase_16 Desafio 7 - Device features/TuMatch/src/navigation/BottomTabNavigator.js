import { StyleSheet, View } from "react-native";

import CommunityNavigator from "./CommunityNavigator";
import HomeNavigator from "./HomeNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import NotificationsNavigator from "./NotificationsNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="CommunityTab"
        component={CommunityNavigator}
        options={{
          tabBarLabel: "Comunidad",
          tabBarIcon: () => (
            <View>
              <Ionicons name="people" size={20} color="black" />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: () => (
            <View>
              <Ionicons name="home" size={20} color="black" />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="NotificationsTab"
        component={NotificationsNavigator}
        options={{
          tabBarLabel: "Notificaciones",
          tabBarIcon: () => (
            <View>
              <Ionicons name="notifications" size={20} color="black" />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 15,
  },
});
