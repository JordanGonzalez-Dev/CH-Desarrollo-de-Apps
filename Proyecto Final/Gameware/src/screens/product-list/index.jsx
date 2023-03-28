import { FlatList, View } from 'react-native';
import React, { useEffect } from 'react'
import { filteredProducts, selectProduct } from '../../store/products.slice';
import { useDispatch, useSelector } from 'react-redux';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductSummary from '../../components/ProductSummary/ProductSummary';
import { styles } from './styles';

const ProductList = ({ navigation }) => {

  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.categories.selected)
  const products = useSelector((state) => state.products.filteredProducts)

  const crumbs = " > " + selectedCategory.title

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id))
  }, [])


  const onHandleSelectedProduct = (item) => {
    dispatch(selectProduct(item.id))
    navigation.navigate("Product Detail")
  }

  return (
    <View style={styles.container}>
      <Breadcrumbs navigation={navigation} crumb={crumbs} />

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={(data) => (<ProductSummary
          item={data}
          onSelected={onHandleSelectedProduct}
        />)}
      />

    </View>
  )
}

export default ProductList