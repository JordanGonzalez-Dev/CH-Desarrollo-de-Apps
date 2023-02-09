import { NavigationContainer } from "@react-navigation/native";
import RemindersScreen from "../screens/remindersScreen/index";
import SettingsScreen from "../screens/settingsScreen/index";
import TodoScreen from "../screens/todoScreen/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Reminders" component={RemindersScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name="Home" component={TodoScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
};

export default AppNavigator;