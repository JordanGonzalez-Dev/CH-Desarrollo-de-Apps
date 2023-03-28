import { FlatList, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getOrder, getOrders } from '../../store/orders.slice'
import { useDispatch, useSelector } from 'react-redux'

import OrderItem from '../../components/OrderItem/OrderItem'
import { styles } from './styles'

const OrderList = ({ navigation }) => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.list)
  const user = useSelector(state => state.auth.userId)

  useEffect(() => {
    dispatch(getOrders(user))
  }, [])

  const onHandleSelectedOrder = (item) => {
    dispatch(getOrder(item.id))
    navigation.navigate("Detalle de Pedido")
  }

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Historial de Pedidos</Text>

      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={(data) => (<OrderItem
          orden={data}
          onSelected={onHandleSelectedOrder}
        />)}
      />
    </View>
  )
}

export default OrderList