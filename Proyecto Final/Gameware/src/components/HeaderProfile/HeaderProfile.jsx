import { Pressable, Text, View } from 'react-native'

import React from 'react'
import { THEME } from '../../constants/theme/index';
import { styles } from './styles'

const HeaderProfile = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.profileHeader}>Mi Perfil</Text>
      <View style={styles.wrapperProfileTabs}>
        <Pressable style={[styles.wrapperTabs, { backgroundColor: THEME.colors.primary }]} onPress={() => navigation.navigate("Datos Personales")}>
          <Text style={[styles.textTabs, { color: THEME.colors.lightGrey }]}>Información</Text>
        </Pressable>
        <Pressable style={[styles.wrapperTabs, { backgroundColor: THEME.colors.accent }]} onPress={() => navigation.navigate("Direcciones")}>
          <Text style={[styles.textTabs, { color: THEME.colors.lightGrey }]}>Direcciones</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default HeaderProfile