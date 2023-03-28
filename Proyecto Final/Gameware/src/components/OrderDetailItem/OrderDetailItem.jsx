import { Text, View } from 'react-native'

import React from 'react'
import {styles} from './styles';

const OrderDetailItem = ({item}) => {

  return (
    <View style={styles.wrapperOrderDetailItem}>
      <Text style={styles.cartDataTitle}>{item.item.title}</Text>
      <Text style={styles.cartDataText}>Cantidad: {item.item.quantity}</Text>
      <Text style={styles.cartDataText}>Precio Unitario: ${item.item.price}</Text>
    </View>
  )
}

export default OrderDetailItem