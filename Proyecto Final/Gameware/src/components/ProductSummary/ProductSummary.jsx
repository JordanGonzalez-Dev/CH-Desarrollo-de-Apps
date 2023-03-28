import { Image, Pressable, Text, View } from 'react-native';

import React from 'react'
import { styles } from './styles';

const ProductSummary = ({ item, onSelected }) => {

    return (
        <View style={styles.wrapperSummary}>

            <View style={{ width: "40%", height: "100%" }}>
                <Image style={styles.imageSummary} source={require('../../../assets/img/producto.jpg')} />
            </View>

            <View style={{ width: "60%", paddingRight: "2%", justifyContent: "space-around" }}>
                <View style={styles.wrapperSummaryName}>
                    <Text style={{ fontFamily: "Roboto-Light", fontSize: 24 }}>{item.item.title}</Text>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: 24 }}>${item.item.price}</Text>
                </View>
                <View style={styles.wrapperSummaryButton}>
                    <Pressable style={styles.verMasButton} onPress={() => { onSelected(item.item) }}>
                        <Text style={styles.verMasText}>VER MÁS</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default ProductSummary