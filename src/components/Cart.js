import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Cart extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}> Cart </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "orange",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 40,
        color: 'white',
    }
})