import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class SideMenu extends Component {
  render() {
    return <View style={styles.wrapper}></View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#3498db',
    borderWidth: 5,
    borderRightColor: 'white'
  }
})
