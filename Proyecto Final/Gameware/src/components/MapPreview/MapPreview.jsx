import { Image, View } from 'react-native';

import { MAP } from '../../constants/data/maps';
import React from 'react'
import { styles } from './styles';

const MapPreview = (props) => {

  const mapPreviewUrl = props.location
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C${props.location.lat},${props.location.lng}&key=${MAP.API_KEY}` : ""

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {
        props.location
          ? <Image style={styles.imageMap} source={{ uri: mapPreviewUrl }} />
          : (props.children)
      }
    </View>
  )
}

export default MapPreview