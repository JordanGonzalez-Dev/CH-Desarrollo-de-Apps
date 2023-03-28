import { FlatList, Pressable, Text, View } from 'react-native';

import OrderDetailItem from '../../components/OrderDetailItem/OrderDetailItem';
import React from 'react'
import { styles } from './styles'
import { useSelector } from 'react-redux';

const OrderDetail = ({ navigation }) => {

  const order = useSelector(state => state.orders.orden)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pedido {order.id}</Text>
      <Text style={styles.fecha}>Fecha de Creación: {Date(order.date)}</Text>
      <Text style={styles.items}>Items:</Text>
      <FlatList
        data={order.items}
        keyExtractor={item => item.id}
        renderItem={(data) => (<OrderDetailItem item={data} />)}
      />
      <View style={styles.wrapperTotal}>
        <Text style={styles.total}>Total: ${order.total}</Text>
        <Pressable style={styles.wrapperConfirm} onPress={() => navigation.navigate("Resumen de Pedidos")}>
          <Text style={styles.confirm}>VOLVER ATRÁS</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default OrderDetail