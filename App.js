import React, {Component} from 'react';
import {StyleSheet, Platform, SafeAreaView, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import BottomTabBar from './src/components/BottomTabBar';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
  storeCart = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@cart_key', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart_key')
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(e)
    }
  }

  clearAllCart = async () => {
    try {
      await AsyncStorage.clear()
      console.log('clear all cart')
    } catch(e) {
      console.log(e)
    }
  }

  async componentWillMount(){
    //await this.clearAllCart()
  }

  async componentDidMount(){
    const cart = await this.getCart()
    //console.log('App')
    //console.log(cart)
    if(cart === null){
      await this.storeCart([])  
    }
  }
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
