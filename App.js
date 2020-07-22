import React, {Component} from 'react';
import {StyleSheet, Platform, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import BottomTabBar from './src/components/BottomTabBar';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Main from './src/components/Main';
import Language from './src/components/Language';
import Contact from './src/components/Contact';
import About from './src/components/About';
import Login from './src/components/Login';

const Stack = createStackNavigator();

export default class App extends Component {
  storeCart = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@cart_key', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart_key');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  clearAllCart = async () => {
    try {
      await AsyncStorage.clear();
      console.log('clear all cart');
    } catch (e) {
      console.log(e);
    }
  };

  async componentWillMount() {
    //await this.clearAllCart()
  }

  async componentDidMount() {
    const cart = await this.getCart();
    //console.log('App')
    //console.log(cart)
    if (cart === null) {
      await this.storeCart([]);
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" headerMode='none'>
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                }}
              />
              <Stack.Screen
                name="Language"
                component={Language}
                options={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                }}
              />
              <Stack.Screen
                name="Contact"
                component={Contact}
                options={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                }}
              />
              <Stack.Screen
                name="About"
                component={About}
                options={{
                  cardStyleInterpolator:
                    CardStyleInterpolators.forHorizontalIOS,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
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
