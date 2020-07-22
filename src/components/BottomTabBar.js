import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import ListProduct from './ListProduct';
import Cart from './Cart';
import Setting from './Setting';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';
import {connect} from 'react-redux'
import {actionCreators} from '../redux/actions/actionCreators'
import ImagesConst from '../constants/ImagesConst'

class BottomTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      title: 'Trang chủ',
    };
  }

  login = () => {
    const {navigation} = this.props;
    navigation.navigate('Login');
  };

  goHome = () => this.setState({selectedTab: 'home', title: 'Trang chủ'});

  componentDidMount(){
    this.props.putCountCart()
  }  
  render() {
    return (
      <>
        <HeaderCom
          title={this.state.title}
          leftIcon={null}
          rightIcon={
            <HeaderBtn
              clickFn={
                this.state.selectedTab === 'home' ? this.login : this.goHome
              }
              iconName={this.state.selectedTab === 'home' ? 'login' : 'home'}
            />
          }
        />
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Trang chủ"
            titleStyle={styles.titleTab}
            renderIcon={() => (
              <Image source={ImagesConst.homeBlack} />
            )}
            renderSelectedIcon={() => (
              <Image source={ImagesConst.homeSelect} />
            )}
            onPress={() =>
              this.setState({selectedTab: 'home', title: 'Trang chủ'})
            }>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'product'}
            title="Sản phẩm"
            titleStyle={styles.titleTab}
            renderIcon={() => (
              <Image source={ImagesConst.listBlack} />
            )}
            renderSelectedIcon={() => (
              <Image source={ImagesConst.listSelect} />
            )}
            onPress={() =>
              this.setState({selectedTab: 'product', title: 'Sản phẩm'})
            }>
            <ListProduct />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            title="Giỏ hàng"
            titleStyle={styles.titleTab}
            renderIcon={() => (
              <Image source={ImagesConst.cartBlack} />
            )}
            renderSelectedIcon={() => (
              <Image source={ImagesConst.cartSelect} />
            )}
            badgeText={this.props.countCart}
            onPress={() =>
              this.setState({selectedTab: 'cart', title: 'Giỏ hàng'})
            }>
            <Cart />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'setting'}
            title="Cài đặt"
            titleStyle={styles.titleTab}
            renderIcon={() => (
              <Image
                source={ImagesConst.settingBlack}
              />
            )}
            renderSelectedIcon={() => (
              <Image
                source={ImagesConst.settingSelect}
              />
            )}
            onPress={() =>
              this.setState({selectedTab: 'setting', title: 'Cài đặt'})
            }>
            <Setting navigation={this.props.navigation}/>
          </TabNavigator.Item>
        </TabNavigator>
      </>
    );
  }
}

const styles = StyleSheet.create({
  titleTab: {
    fontSize: 14,
  },
});

const mapStateToProps = function(state){
  return {countCart: state.countCart}
}
export default connect(mapStateToProps, actionCreators)(BottomTabBar)