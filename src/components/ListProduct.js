import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Search from './Search';
import ListCom from './ListCom';

export default class Listproduct extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Search />
        </View>
        <View style={styles.bodyContainer}>
          <ListCom />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  searchContainer: {
    flex: 2,
  },
  bodyContainer: {
    flex: 8,
    marginTop: 10,
  },
});
