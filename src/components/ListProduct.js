import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Search from './Search'
export default class Listproduct extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Search />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
})