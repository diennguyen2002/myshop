import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}> Home </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 40,
        color: 'white',
    }
})