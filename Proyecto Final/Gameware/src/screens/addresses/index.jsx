import { FlatList, Pressable, Text, View } from 'react-native';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import AddressItem from '../../components/AddressItem/AddressItem';
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile';
import { THEME } from '../../constants/theme';
import { loadAddresses } from '../../store/user.slice';
import { styles } from './styles';

const Adresses = ({ navigation }) => {
  const dispatch = useDispatch()

  const direcciones = useSelector(state => state.user.addresses)

  const viewAddress = (address) => {
    navigation.navigate("Direccion", { address: address })
  }

  useEffect(() => {
    dispatch(loadAddresses());
  }, [dispatch]);

  return (
    <View>
      <HeaderProfile navigation={navigation} />

      <View style={styles.containerDataText}>
        <Pressable style={styles.btnNewAddress} onPress={() => navigation.navigate("Nueva Direccion")}>
          <Text style={[styles.textTabs, { color: THEME.colors.primary }]}>+ Agregar Dirección</Text>
        </Pressable>

        <FlatList
          data={direcciones}
          keyExtractor={item => item.id}
          renderItem={(data) => (<AddressItem item={data.item} onPress={viewAddress} />)}
        />
      </View>

    </View>
  )
}

export default Adresses