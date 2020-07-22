import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';

export default class Contact extends Component {
  goback() {
    const {navigation} = this.props;
    navigation.navigate('Main');
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <HeaderCom
          title="Liên hệ"
          rightIcon={null}
          leftIcon={
            <HeaderBtn
              clickFn={() => this.goback()}
              iconName="chevron-thin-left"
            />
          }
        />
        <Text> Contact </Text>
      </View>
    );
  }
}
