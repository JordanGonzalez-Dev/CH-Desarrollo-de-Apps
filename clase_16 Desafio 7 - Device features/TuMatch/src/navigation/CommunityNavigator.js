import { COLORS } from "../constants/colors";
import CommunityScreen from "../screens/CommunityScreen";
import PostScreen from "../screens/PostScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default CommunityNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Community" component={CommunityScreen} />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};
