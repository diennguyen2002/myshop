import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ImagesConst from '../constants/ImagesConst'

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
            source={ImagesConst.ad1}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log(2)}>
          <Image
            style={[styles.image]}
            source={ImagesConst.ad2}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log(3)}>
          <Image
            style={[styles.image]}
            source={ImagesConst.ad3}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log(4)}>
          <Image
            style={[styles.image]}
            source={ImagesConst.ad4}
          />
        </TouchableOpacity>
      </SwiperFlatList>
    );
  }
}

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width,
  },
});
