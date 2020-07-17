import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import ListProduct from './ListProduct';
import Cart from './Cart';
import Setting from './Setting'

export default class BottomTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'home'};
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Trang chủ"
          titleStyle={styles.titleTab}
          renderIcon={() => (
            <Image source={require('../../assets/images/home-black.png')} />
          )}
          renderSelectedIcon={() => (
            <Image source={require('../../assets/images/home-select.png')} />
          )}
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'product'}
          title="Sản phẩm"
          titleStyle={styles.titleTab}
          renderIcon={() => (
            <Image source={require('../../assets/images/list-black.png')} />
          )}
          renderSelectedIcon={() => (
            <Image source={require('../../assets/images/list-select.png')} />
          )}
          onPress={() => this.setState({selectedTab: 'product'})}>
          <ListProduct />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'cart'}
          title="Giỏ hàng"
          titleStyle={styles.titleTab}
          renderIcon={() => (
            <Image source={require('../../assets/images/cart-black.png')} />
          )}
          renderSelectedIcon={() => (
            <Image source={require('../../assets/images/cart-select.png')} />
          )}
          badgeText={1}
          onPress={() => this.setState({selectedTab: 'cart'})}>
          <Cart />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'setting'}
          title="Cài đặt"
          titleStyle={styles.titleTab}
          renderIcon={() => (
            <Image source={require('../../assets/images/setting-black.png')} />
          )}
          renderSelectedIcon={() => (
            <Image source={require('../../assets/images/setting-select.png')} />
          )}
          onPress={() => this.setState({selectedTab: 'setting'})}>
          <Setting />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  titleTab:{
    fontSize: 14,
  }
});
