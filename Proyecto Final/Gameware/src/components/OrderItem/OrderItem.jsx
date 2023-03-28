import { Pressable, Text, View } from 'react-native';

import React from 'react'
import { styles } from './styles'

const OrderItem = ({ orden, onSelected }) => {
  return (
    <View style={styles.wrapperSummary}>
      <View style={{ width: "60%" }}>
        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18, marginBottom: 10 }}>Pedido {orden.item.id}</Text>
        <Text style={{ fontFamily: "Roboto-Light", fontSize: 13, marginBottom: 8 }}>Fecha: {Date(orden.item.date)}</Text>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 18, marginBottom: 10 }}>Total: ${orden.item.total}</Text>
      </View>

      <View style={{ width: "40%", justifyContent: "center", alignItems: "center" }}>
        <Pressable style={styles.orderDetailButton} onPress={() => { onSelected(orden.item) }}>
          <Text style={styles.orderDetailText}>VER DETALLE</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default OrderItem