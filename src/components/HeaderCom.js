import React, {Component} from 'react';
import {Header} from 'react-native-elements';

export default class HeaderCom extends Component {
  render() {
    return (
      <Header
        centerComponent={{
          text: this.props.title,
          style: {fontWeight: 'bold', color: '#fff', fontSize: 18},
        }}
        rightComponent={this.props.rightIcon}
        leftComponent={this.props.leftIcon}
        containerStyle={{
          backgroundColor: '#3498db',
        }}
      />
    );
  }
}
