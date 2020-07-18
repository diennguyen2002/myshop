import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class HomeBtn extends Component {
  render() {
    return (
      <TouchableOpacity onPress={()=>console.log('click')}>
        <Text>
          <Icon name="home" size={25} color="#fff" />
        </Text>
      </TouchableOpacity>
    );
  }
}
