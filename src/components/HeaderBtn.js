import React, {Component} from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

export default class HeaderBtn extends Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.clickFn}>
          <Text>
            <Icon name={this.props.iconName} size={25} color="#fff" />
          </Text>
        </TouchableOpacity>
      );
    }
  }