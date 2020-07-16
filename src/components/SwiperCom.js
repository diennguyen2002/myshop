import React, {Component} from 'react';
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

export default class SwiperCom extends Component {
  render() {
    return (
      <SwiperFlatList 
       autoplay={true}
       autoplayDelay={4}
       autoplayLoop={true}
      >
        <TouchableOpacity
          onPress={() => console.log(1)}>
          <Image
            style={[styles.image]}
            source={require('../../assets/images/ad1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log(2)}>
          <Image
            style={[styles.image]}
            source={require('../../assets/images/ad2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log(3)}>
          <Image
            style={[styles.image]}
            source={require('../../assets/images/ad3.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log(4)}>
          <Image
            style={[styles.image]}
            source={require('../../assets/images/ad4.png')}
          />
        </TouchableOpacity>
      </SwiperFlatList>
    );
  }
}

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    height: height * 0.2,
    width,
  },
});
