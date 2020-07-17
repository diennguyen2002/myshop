import React, {Component} from 'react';
import {StyleSheet, Platform, SafeAreaView, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import BottomTabBar from './src/components/BottomTabBar';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <BottomTabBar />
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    marginBottom: Platform.OS === 'ios' ? 25 : 0,
    flex: 1,
  },
});
