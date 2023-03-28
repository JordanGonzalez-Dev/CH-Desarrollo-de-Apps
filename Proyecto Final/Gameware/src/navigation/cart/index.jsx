import { CartScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerTitleAlign: 'center' })}>
      <Stack.Screen name="Carrito" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default CartNavigator