import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import PostItem from '../components/PostItem';

const PostScreen = ({ navigation, route }) => {
    useEffect(() => {
        console.log(route.params);
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <PostItem />
            </View>
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    postContainer: {
        width: "100%",
    },
})