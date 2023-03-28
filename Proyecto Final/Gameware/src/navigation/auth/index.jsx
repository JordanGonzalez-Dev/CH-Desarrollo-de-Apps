import AuthScreen from '../../screens/auth'
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Auth' screenOptions={() => ({ header: HeaderImage })}>
      <Stack.Screen name='Auth' component={AuthScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator