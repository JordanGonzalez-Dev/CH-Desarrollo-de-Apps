import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Routes from "./src/navigation/Routes";
import store from "./src/store";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand: require("./src/assets/fonts/Quicksand-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const BottomTabNavigator = () => {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="CommunityTab"
          component={CommunityNavigator}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="HomeTab"
          component={HomeNavigator}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="NotificationsTab"
          component={NotificationsNavigator}
          options={{
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
