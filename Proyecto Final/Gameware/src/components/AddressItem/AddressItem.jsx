import { Pressable, Text, View } from 'react-native';

import React from 'react'
import { styles } from './styles';

const AddressItem = ({ item, onPress }) => {

  return (
    <View style={styles.wrapperSummary}>
      <View style={{ width: "60%" }}>
        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 18, marginBottom: 10 }}> {item.nombre} </Text>
        <Text style={{ fontFamily: "Roboto-Light", fontSize: 13, marginBottom: 8 }}> {item.direccion} </Text>
      </View>

      <View style={{ width: "40%", justifyContent: "center", alignItems: "center" }}>
        <Pressable style={styles.orderDetailButton} onPress={() => onPress(item)}>
          <Text style={styles.orderDetailText}>VER DETALLE</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default AddressItem