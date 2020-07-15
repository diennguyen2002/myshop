import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Search from './Search'


export default class Home extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.headerSection}>
                    <Search />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    text:{
        fontSize: 40,
        color: 'white',
    },
    headerSection:{
        //flex: 1,

    }
})