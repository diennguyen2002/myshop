import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Home from './components/Home';
import ListProduct from './components/ListProduct';
import TabNavigator from 'react-native-tab-navigator';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={selectedTab:'home'};
  }
  render(){
    return(
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'product'}
          title="Product"
          onPress={() => this.setState({ selectedTab: 'product' })}>
          <ListProduct />
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}


