import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HomeSectionList from './HomeSectionList';
import SwiperCom from './SwiperCom';
import Images from '../constants/Images';

const list = [
  {
    title: 'Bán nhiều nhất',
    data: [
      {
        "name": "Điện Thoại iPhone 11 64GB", 
        "price": "18.490.000 đ",
        "img": require('../../assets/images/sp_chay_1.png')
      },
      {
        "name": "Điện Thoại Samsung Galaxy A11 (32GB/3GB)", 
        "price": "2.750.000 đ",
        "img": Images.products.bestSell.sp2
      },
      {
        "name": "Điện Thoại Xiaomi Redmi Note 8", 
        "price": "3.190.000 đ",
        "img": Images.products.bestSell.sp3
      },
    ]
  },
  {
    title: 'Mới nhất',
    data: [
      {
        "name": "Điện Thoại iPhone 11 64GB", 
        "price": "18.490.000 đ",
        "img": Images.products.bestSell.sp1
      },
      {
        "name": "Điện Thoại Samsung Galaxy A11 (32GB/3GB)", 
        "price": "2.750.000 đ",
        "img": Images.products.bestSell.sp2
      },
      {
        "name": "Điện Thoại Xiaomi Redmi Note 8", 
        "price": "3.190.000 đ",
        "img": Images.products.bestSell.sp3
      },
    ]
  },
  {
    title: 'Được yêu thích nhất',
    data: [
      {
        "name": "Điện Thoại iPhone 11 64GB", 
        "price": "18.490.000 đ",
        "img": Images.products.bestSell.sp1
      },
      {
        "name": "Điện Thoại Samsung Galaxy A11 (32GB/3GB)", 
        "price": "2.750.000 đ",
        "img": Images.products.bestSell.sp2
      },
      {
        "name": "Điện Thoại Xiaomi Redmi Note 8", 
        "price": "3.190.000 đ",
        "img": Images.products.bestSell.sp3
      },
    ]
  },
  {
    title: 'Giảm giá nhiều nhất',
    data: [
      {
        "name": "Điện Thoại iPhone 11 64GB", 
        "price": "18.490.000 đ",
        "img": Images.products.bestSell.sp1
      },
      {
        "name": "Điện Thoại Samsung Galaxy A11 (32GB/3GB)", 
        "price": "2.750.000 đ",
        "img": Images.products.bestSell.sp2
      },
      {
        "name": "Điện Thoại Xiaomi Redmi Note 8", 
        "price": "3.190.000 đ",
        "img": Images.products.bestSell.sp3
      },
    ]
  },
];
export default class Home extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.headerSection}>
          <SwiperCom />
        </View>
        <View style={styles.bodySection}>
          <HomeSectionList data={list} />
        </View>
      </View>
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
