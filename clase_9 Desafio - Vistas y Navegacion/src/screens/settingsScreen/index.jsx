import { Button, View } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import { styles } from './styles'

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="CHMDC Settings" subtitle="Change the app settings" />
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go to Reminders"
        onPress={() => navigation.navigate("Reminders")}
      />
    </View>
  )
}

export default SettingsScreen
