import { useDispatch, useSelector } from 'react-redux';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductCard from '../../components/ProductCard/ProductCard';
import React from 'react'
import { View } from 'react-native';
import { addItem } from '../../store/carts.slice';
import { styles } from './styles';

const ProductDetail = ({ navigation }) => {

  const dispatch = useDispatch()
  const detail = useSelector((state) => state.products.selected)

  const currentCategory = useSelector((state) => state.categories.selected)
  const crumbs = " > " + currentCategory.title + " > " + detail.title

  const handlerAddItemCart = () => dispatch(addItem(detail))

  return (
    <View style={styles.container}>
      <Breadcrumbs navigation={navigation} crumb={crumbs} />
      <View style={styles.containerDos}>
        <ProductCard product={detail} onAdd={handlerAddItemCart} />
      </View>
    </View>
  )
}

export default ProductDetail