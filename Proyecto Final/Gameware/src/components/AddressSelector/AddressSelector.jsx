import * as Location from 'expo-location'

import { Alert, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import MapPreview from '../MapPreview/MapPreview'
import { styles } from './styles'

const AddressSelector = ({ onLocation }) => {
  const navigation = useNavigation()
  const route = useRoute()
  const [pickedLocation, setPickedLocation] = useState("")

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== "granted") {
      Alert.alert(
        "Permisos Insuficientes",
        "Necesita dar permisos de localización a la App para continuar",
        [{ text: "OK" }]
      )

      return false
    }

    return true
  }

  const handlePickOnMap = async () => {
    const isLocationOk = await verifyPermissions()
    if (!isLocationOk) return
    navigation.navigate("Mapa")
  }

  const handleGetLocation = async () => {
    const isLocationOk = await verifyPermissions()

    if (!isLocationOk) return

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000
    })

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    })

    onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    })
  }

  const mapLocation = route?.params?.mapLocation

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation)
      onLocation(mapLocation)
    }
  }, [mapLocation])

  return (
    <View style={styles.wrapperSelector}>
      <MapPreview style={styles.imageMap} location={pickedLocation}>
        <Text style={{ fontFamily: "Roboto-Bold" }}>Esperando Ubicación...</Text>
      </MapPreview>

      <View style={styles.wrapperBtnSelector}>
        <Pressable style={styles.btnSelector} onPress={handleGetLocation}>
          <Text style={styles.textBtnSelector}>Obtener Ubicación</Text>
        </Pressable>

        <Pressable style={styles.btnSelector} onPress={handlePickOnMap}>
          <Text style={styles.textBtnSelector}>Elegir del Mapa</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default AddressSelector