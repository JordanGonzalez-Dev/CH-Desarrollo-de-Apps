import { Pressable, Text, View } from 'react-native';

import React from 'react'
import { styles } from './styles';

const ItemMenu = ({ item, onSelected }) => {

  return (

    <View style={styles.wrapperItemMenu}>
      <Pressable onPress={() => onSelected(item.item)}>
        <Text style={styles.textItemMenu}>{item.item.title}</Text>
      </Pressable>
    </View>

  )
}

export default ItemMenu