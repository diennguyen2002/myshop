import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';

export default class Language extends Component {
  goback() {
    const {navigation} = this.props;
    navigation.navigate('Main');
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <HeaderCom
          title="Ngôn ngữ"
          rightIcon={null}
          leftIcon={
            <HeaderBtn
              clickFn={() => this.goback()}
              iconName='chevron-thin-left'
            />
          }
        />
        <Text> Language </Text>
      </View>
    );
  }
}
