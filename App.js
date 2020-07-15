import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navigator from './src/components/Navigator';
import Search from './src/components/Search';

export default class App extends Component {
  
  render(){
    return(
      <View style={styles.container}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </View>
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


