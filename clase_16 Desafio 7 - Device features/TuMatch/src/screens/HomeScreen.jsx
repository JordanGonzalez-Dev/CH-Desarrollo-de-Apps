import { StyleSheet, Text, View } from 'react-native'

import ImageSelector from '../components/ImageSelector'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <ImageSelector onImage={image => console.log(image)} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})