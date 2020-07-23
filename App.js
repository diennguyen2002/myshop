import React, {Component} from 'react';
import {StyleSheet, Platform, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
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
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" headerMode="none">
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
