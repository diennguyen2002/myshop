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
import LANG from '../language/language';
class BottomTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      title: LANG[this.props.language].home_header,
    };
  }

  login = () => {
    const {navigation} = this.props;
    navigation.navigate('Login');
  };

  goHome = () => this.setState({selectedTab: 'home', title: LANG[this.props.language].home_header});

  showHeaderTitle(){
    let title = ''
    if(this.state.selectedTab === 'home') {
      title = LANG[this.props.language].home_tab
    } else if(this.state.selectedTab === 'product') {
      title = LANG[this.props.language].product_tab
    } else if(this.state.selectedTab === 'cart') {
      title = LANG[this.props.language].cart_tab
    } else if(this.state.selectedTab === 'setting') {
      title = LANG[this.props.language].setting_tab
    }
    return title;
  }

  render() {
    return (
      <>
        <HeaderCom
          title={this.showHeaderTitle()}
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
            title={LANG[this.props.language].home_tab}
            titleStyle={styles.titleTab}
            renderIcon={() => (
              <Image source={ImagesConst.homeBlack} />
            )}
            renderSelectedIcon={() => (
              <Image source={ImagesConst.homeSelect} />
            )}
            onPress={() =>
              this.setState({selectedTab: 'home', title: LANG[this.props.language].home_header})
            }>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'product'}
            title={LANG[this.props.language].product_tab}
            titleStyle={styles.titleTab}
            renderIcon={() => (
              <Image source={ImagesConst.listBlack} />
            )}
            renderSelectedIcon={() => (
              <Image source={ImagesConst.listSelect} />
            )}
            onPress={() =>
              this.setState({selectedTab: 'product', title: LANG[this.props.language].product_header})
            }>
            <ListProduct />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            title={LANG[this.props.language].cart_tab}
            titleStyle={styles.titleTab}
            renderIcon={() => (
              <Image source={ImagesConst.cartBlack} />
            )}
            renderSelectedIcon={() => (
              <Image source={ImagesConst.cartSelect} />
            )}
            badgeText={this.props.cart.quantity}
            onPress={() =>
              this.setState({selectedTab: 'cart', title: LANG[this.props.language].cart_header})
            }>
            <Cart />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'setting'}
            title={LANG[this.props.language].setting_tab}
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
              this.setState({selectedTab: 'setting', title: LANG[this.props.language].setting_header})
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
  return {cart: state.cart, language: state.language}
}
export default connect(mapStateToProps, actionCreators)(BottomTabBar)