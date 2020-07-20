import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Search from './Search';
import ListCom from './ListCom';
import Images from '../constants/Images';

const list = [
  {
    "id": '1',
    "name": "Điện Thoại iPhone 11 64GB", 
    "price": "18.490.000 đ",
    "img": Images.products.bestSell.sp1
  },
  {
    "id": '2',
    "name": "Điện Thoại Samsung Galaxy A11 (32GB/3GB)", 
    "price": "2.750.000 đ",
    "img": Images.products.bestSell.sp2
  },
  {
    "id": '3',
    "name": "Điện Thoại Xiaomi Redmi Note 8", 
    "price": "3.190.000 đ",
    "img": Images.products.bestSell.sp3
  },
  {
    "id": '4',
    "name": "Điện Thoại iPhone 11 64GB", 
    "price": "18.490.000 đ",
    "img": Images.products.bestSell.sp1
  },
  {
    "id": '5',
    "name": "Điện Thoại Samsung Galaxy A11 (32GB/3GB)", 
    "price": "2.750.000 đ",
    "img": Images.products.bestSell.sp2
  },
  {
    "id": '6',
    "name": "Điện Thoại Xiaomi Redmi Note 8", 
    "price": "3.190.000 đ",
    "img": Images.products.bestSell.sp3
  },
];

const HOST = 'http://192.168.1.105:3000'

export default class Listproduct extends Component {
  state = {products: []}
  componentDidMount(){
    return fetch(HOST+'/list')
    .then((response) => response.json())
    .then((json) => {
      console.log(json.products)
      this.setState({products: json.products})
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Search />
        </View>
        <View style={styles.bodyContainer}>
          <ListCom data={this.state.products}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  searchContainer: {
    flex: 2,
  },
  bodyContainer: {
    flex: 8,
    marginTop: 10,
  },
});
