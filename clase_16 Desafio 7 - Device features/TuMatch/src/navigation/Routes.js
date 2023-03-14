import BottomTabNavigator from "./BottomTabNavigator";
import ConfigurationScreen from "../screens/ConfigurationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Inicio"
        component={BottomTabNavigator}
        options={{ title: "" }}
      />
      <Drawer.Screen name="Mi Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Configuración" component={ConfigurationScreen} />
    </Drawer.Navigator>
  );
};
