import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';

export default class Login extends Component {
  goback() {
    const {navigation} = this.props;
    navigation.navigate('Main');
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <HeaderCom
          title="Đăng nhập"
          rightIcon={null}
          leftIcon={
            <HeaderBtn
              clickFn={() => this.goback()}
              iconName="chevron-thin-left"
            />
          }
        />
        <Text> Login </Text>
      </View>
    );
  }
}
