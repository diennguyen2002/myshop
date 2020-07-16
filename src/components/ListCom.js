import React, {Component} from 'react';
import {Text, FlatList, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import Images from '../constants/Images';

const DATA = [
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

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.image}>
        <Image style={styles.imgStretch} source={item.img} />
      </View>
      <View style={styles.description}>
        <Text style={styles.desName}>{item.name}</Text>
        <Text style={styles.desPrice}>{item.price}</Text>
      </View>
  </TouchableOpacity>
);

export default class ListCom extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedId: null};
  }
  renderItem = ({item}) => {
    const backgroundColor =
      item.id === this.state.selectedId ? '' : ''; //#3498db

    return (
      <Item
        item={item}
        onPress={() => this.setState({selectedId: item.id})}
        style={{backgroundColor}}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={DATA}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        extraData={this.state.selectedId}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#3498db'
  },
  image: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  imgStretch:{
    width: 70,
    height: 90,
  },
  description:{
    flex: 7,
    justifyContent: 'center',
    height: 120,
  },
  desName:{
    fontSize: 18,
  },
  desPrice:{
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red'
  },
});
