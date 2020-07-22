import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';

export default class About extends Component {
  goback() {
    const {navigation} = this.props;
    navigation.navigate('Main');
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'orange'}}>
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
        <Text> About </Text>
      </View>
    );
  }
}
