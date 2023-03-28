import { Pressable, Text, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { styles } from './styles'

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.wrapperCartItem}>
      <View style={styles.wrapperCartItemData}>
        <Text style={styles.cartDataTitle}>{item.item.title}</Text>
        <Text style={styles.cartDataText}>Cantidad: {item.item.quantity}</Text>
        <Text style={styles.cartDataText}>Precio unitario: ${item.item.price}</Text>
      </View>
      <View style={styles.wrapperCartItemDelete}>
        <Pressable onPress={() => onDelete(item.item.id)}>
          <FontAwesomeIcon icon={faTrash} size={30} />
        </Pressable>
      </View>
    </View>
  )
}

export default CartItem