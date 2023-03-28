import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react'

import AddressSelector from '../../components/AddressSelector/AddressSelector';
import HeaderProfile from '../../components/HeaderProfile/HeaderProfile';
import { saveAddress } from '../../store/user.slice';
import { styles } from './styles';
import { useDispatch } from 'react-redux';

const NewAddress = ({ navigation }) => {
  const dispatch = useDispatch()
  const [coords, setCoords] = useState(null);
  const [title, setTitle] = useState("")

  const onLocation = (location) => {
    setCoords(location)
  }

  const handleTitleChange = text => setTitle(text)

  const handleSubmit = () => {
    dispatch(saveAddress(title, coords))
    navigation.navigate("Direcciones")
  }

  return (
    <ScrollView>
      <View>
        <HeaderProfile navigation={navigation} />

        <View style={{ margin: "2%" }}>
          <Text style={styles.label}>Ingrese el nombre de la dirección:</Text>
          <TextInput
            placeholder='Casa'
            style={styles.input}
            onChangeText={handleTitleChange}
          />
        </View>

        <AddressSelector onLocation={onLocation} />

        <View style={styles.wrapperBtnSelector}>
          <Pressable style={styles.btnSelector} onPress={handleSubmit}>
            <Text style={styles.textBtnSelector}>Guardar Dirección</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

export default NewAddress