import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { FlatList } from 'react-native-gesture-handler'
import ItemMenu from '../../components/ItemMenu/ItemMenu'
import React from 'react'
import { selectCategory } from '../../store/category.slice'

const Categories = ({ navigation }) => {

  const categories = useSelector((state) => state.categories.categories)
  const dispatch = useDispatch()

  const onHandleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate("Product List", {
      name: item.title
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={(data) => (<ItemMenu
          item={data}
          onSelected={onHandleSelectedCategory}
        />)}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  }
})