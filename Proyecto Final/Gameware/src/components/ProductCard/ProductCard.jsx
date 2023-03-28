import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import React from 'react'
import { styles } from './styles';

const ProductCard = ({ product, onAdd }) => {

  return (
    <ScrollView contentContainerStyle={styles.wrapperDetail}>
      <Image source={require('../../../assets/img/producto.jpg')} />

      <View style={styles.wrappersBloques}>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 24 }}>{product.title}</Text>
        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 24 }}>${product.price}</Text>
      </View>

      <View style={styles.wrappersBloques}>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 18 }}>Descripción:</Text>
        <Text style={styles.textosCard}>{product.description}</Text>
      </View>

      <View style={styles.wrappersBloqueFinal}>
        <Pressable style={styles.addToCartButton} onPress={onAdd}>
          <Text style={styles.addToCartText}>AGREGAR AL CARRITO</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default ProductCard