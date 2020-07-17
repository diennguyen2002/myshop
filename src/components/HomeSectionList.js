import React from 'react';
import {Text, View, StyleSheet, SectionList, Image, TouchableOpacity} from 'react-native';
import Images from '../constants/Images';

const DATA = [
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

const Item = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={styles.image}>
        <Image style={styles.imgStretch} source={item['img']} />
      </View>
      <View style={styles.description}>
        <Text style={styles.desName}>{item['name']}</Text>
        <Text style={styles.desPrice}>{item['price']}</Text>
        <TouchableOpacity style={styles.cartBtn} onPress={()=>console.log('Da them')}>
          <Text style={styles.cartText}>Chọn mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const HomeSectionList = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item item={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

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
    borderColor: '#3498db',
    height: 150
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
  cartBtn:{
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
    width: 95,
  },
  cartText:{
    fontSize: 15,
    color: 'white',
  },
  header: {
    fontSize: 25,
    color: '#3498db',
    backgroundColor: '#fff',
  },
});

export default HomeSectionList;
