import MapView, { Marker } from 'react-native-maps'
import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import { THEME } from '../../constants/theme'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState()

  const initialRegion = {
    latitude: -34.60356711151838,
    longitude: -58.38155967505409,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }

  const handleSelectLocation = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    })
  }

  const handleSaveLocation = () => {
    if (selectedLocation) {
      navigation.navigate("Nueva Direccion", { mapLocation: selectedLocation })
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View>
          <HeaderImage />
          <TouchableOpacity onPress={handleSaveLocation} style={{ alignItems: "flex-end", margin: "3%" }}>
            <FontAwesomeIcon icon={faFloppyDisk} color={THEME.colors.primary} />
          </TouchableOpacity>
        </View>
      )
    })
  })

  return (
    <MapView initialRegion={initialRegion} style={{ flex: 1 }} onPress={handleSelectLocation}>
      {selectedLocation && (
        <Marker
          title='Ubicación Seleccionada'
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
          }}
        />
      )}
    </MapView>
  )
}

export default Map