import { Address, Addresses, Map, NewAddress, UserDetails } from '../../screens';

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const UserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
      <Stack.Screen name="Datos Personales" component={UserDetails} />
      <Stack.Screen name="Direcciones" component={Addresses} />
      <Stack.Screen name="Direccion" component={Address} />
      <Stack.Screen name="Nueva Direccion" component={NewAddress} />
      <Stack.Screen name="Mapa" component={Map} />
    </Stack.Navigator>
  )
}

export default UserNavigator