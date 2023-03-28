import { Text, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

const PersonalData = () => {
  return (
    <View style={styles.containerData}>
      <View style={styles.containerDataText}>
        <Text style={[styles.cartDataText, { marginBottom: "2%" }]}>Nombre: </Text>
        <Text style={[styles.cartDataText, { marginBottom: "2%" }]}>Apellido: </Text>
        <Text style={[styles.cartDataText, { marginBottom: "2%" }]}>Teléfono: </Text>
        <Text style={[styles.cartDataText, { marginBottom: "2%" }]}>DNI: </Text>
      </View>

    </View>
  )
}

export default PersonalData