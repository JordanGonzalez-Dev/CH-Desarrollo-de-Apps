import { Text, View } from 'react-native'

import HeaderProfile from '../../components/HeaderProfile/HeaderProfile';
import MapPreview from '../../components/MapPreview/MapPreview'
import { styles } from './styles';
import { useRoute } from '@react-navigation/native';

const Address = ({ navigation }) => {
  const route = useRoute()

  const lngylat = {
    lat: route.params.address.lat,
    lng: route.params.address.lng
  }

  return (
    <View>
      <HeaderProfile navigation={navigation} />

      <View style={styles.containerAddress}>
        <Text style={styles.textItemMenu}>{route.params.address.nombre}</Text>
        <Text style={styles.cartDataText}>{route.params.address.direccion}</Text>
        <Text style={styles.cartDataText}>Ubicación: </Text>
        <MapPreview location={lngylat}>
          <Text>Ubicación Pendiente de Localización</Text>
        </MapPreview>
      </View>
    </View>
  )
}

export default Address