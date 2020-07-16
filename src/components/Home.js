import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HomeSectionList from './HomeSectionList'
import SwiperCom from './SwiperCom'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.headerSection}>
                    <SwiperCom />
                </View>
                <View style={styles.bodySection}>
                    <HomeSectionList />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    headerSection:{
        flex: 2.5
    },
    bodySection:{
        flex: 7.5
    }
})