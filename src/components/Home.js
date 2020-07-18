import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HomeSectionList from './HomeSectionList';
import SwiperCom from './SwiperCom';
import HeaderCom from './HeaderCom'

import Icon from 'react-native-vector-icons/SimpleLineIcons';
export default class Home extends Component {
  LoginBtn = () => (
    <TouchableOpacity onPress={() => console.log('Click')}>
      <Text>
        <Icon name="login" size={25} color="#fff" />
      </Text>
    </TouchableOpacity>
  );
  render() {
    return (
      <>
        <HeaderCom 
          title='Trang chủ'
          com={this.LoginBtn}
        />
        <View style={styles.wrapper}>
          <View style={styles.headerSection}>
            <SwiperCom />
          </View>
          <View style={styles.bodySection}>
            <HomeSectionList />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerSection: {
    flex: 2.5,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: '#3498db',
  },
  bodySection: {
    flex: 7.5,
  },
});
