import { FlatList, Pressable, Text, View } from 'react-native'
import { confirmCart, removeItem } from '../../store/carts.slice'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../../components/CartItem/CartItem'
import React from 'react'
import { styles } from './styles'

const CartScreen = () => {
  const dispatch = useDispatch()
  const cartTotal = useSelector(state => state.cart.total)
  const cartItems = useSelector(state => state.cart.items)
  const user = useSelector(state => state.auth.userId)

  const handlerDeleteItems = (id) => dispatch(removeItem(id))
  const handlerConfirmCart = () => dispatch(confirmCart(cartItems, cartTotal, user))

  return (
    <View>
      <Text style={styles.header}>Resumen de tu compra:</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={(data) => (<CartItem
          item={data}
          onDelete={handlerDeleteItems}
        />)}
      />
      <View style={styles.wrapperTotal}>
        <Text style={styles.total}>Total: ${cartTotal}</Text>
        <Pressable style={styles.wrapperConfirm} onPress={handlerConfirmCart}>
          <Text style={styles.confirm}>CONFIRMAR COMPRA</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CartScreen