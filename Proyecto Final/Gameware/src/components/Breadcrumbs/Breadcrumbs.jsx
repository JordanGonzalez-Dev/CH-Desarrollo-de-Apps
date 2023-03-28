import { Pressable, Text, View } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles';

const Breadcrumbs = ({ navigation, crumb }) => {

  return (
    <View style={styles.wrapperBreadCrumbs}>
      <Pressable onPress={() => { navigation.navigate("Home") }}>
        <FontAwesomeIcon icon={faHouse} size={24} />
      </Pressable>
      <Text style={styles.textBreadCrumbs}>{crumb}</Text>
    </View>
  )
}

export default Breadcrumbs