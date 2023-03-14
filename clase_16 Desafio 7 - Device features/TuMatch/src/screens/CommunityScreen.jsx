import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import CommunityItem from '../components/CommunityItem'
import React from 'react'
import { selectedCommunity } from '../store/actions/community.action'

const CommunityScreen = ({ navigation }) => {
    const community = useSelector((state) => state.community.community)
    const dispatch = useDispatch()

    const handleSelectedCommunityItem = item => {
        dispatch(selectedCommunity(item.id))
        
        navigation.navigate("Post", {
            title: item.title
        })
    }

    const renderCommunityItem = ({ item }) => (
        <View style={styles.communityContainer}>
            <CommunityItem item={item} onSelected={handleSelectedCommunityItem} />
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={community}
                renderItem={renderCommunityItem}
                keyExtractor={item => item.id} />
        </View>
    )
}

export default CommunityScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    communityContainer: {
        height: 250,
        width: "90%",
        padding: 10
    },
})