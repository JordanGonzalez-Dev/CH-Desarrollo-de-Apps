import OrderDetail from '../../screens/order-detail';
import OrderList from '../../screens/order-list';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const OrderNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerTitleAlign: 'center' })}>
      <Stack.Screen name="Resumen de Pedidos" component={OrderList} />
      <Stack.Screen name="Detalle de Pedido" component={OrderDetail} />
    </Stack.Navigator>
  )
}

export default OrderNavigator