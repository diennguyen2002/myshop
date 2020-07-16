import React, {Component} from 'react';
import {StyleSheet, Platform, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navigator from './src/components/Navigator';

export default class App extends Component {
  
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    marginBottom: Platform.OS === 'ios' ? 25 : 0,
    flex: 1,
  },
});


