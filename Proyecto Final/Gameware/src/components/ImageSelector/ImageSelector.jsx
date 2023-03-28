import * as ImagePicker from "expo-image-picker"

import { Alert, Image, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react'

import { styles } from './styles';

const ImageSelector = ({ onImage }) => {
    const [pickedUri, setPickedUri] = useState(null)

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert("No tiene permisos para realizar esta acción.", "Necesita habilitar los permisos de cámara para continuar.", [{ text: "OK" }])
            return false
        }
        return true
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if (!isCameraOk) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        })

        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
    }

    return (
        <View style={styles.selectorContainer}>
            <View style={styles.preview}>{
                !pickedUri ? (
                    <Text style={[styles.image, { fontFamily: "Roboto-Bold" }]}>No hay imagen seleccionada</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: pickedUri }} />
                )
            }</View>
            <Pressable style={styles.addImageButton} onPress={handlerTakeImage}>
                <Text style={styles.addImageText}>Tomar Foto</Text>
            </Pressable>
        </View>
    )
}

export default ImageSelector