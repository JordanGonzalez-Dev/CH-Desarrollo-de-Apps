import { Image, View } from 'react-native'

import React from 'react'
import { styles } from './styles'

const HeaderImage = () => {
  return (
    <View style={styles.containerHeaderImage}>
      <Image style={styles.headerImg} source={require('../../../assets/img/GamewareLOGO.png')} />
    </View>
  )

}

export default HeaderImage