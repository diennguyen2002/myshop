import React, {Component} from 'react';
import {View} from 'react-native';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';
import LANG from '../language/language';

const language = 'english'

export default class Contact extends Component {
  goback() {
    const {navigation} = this.props;
    navigation.navigate('Main');
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderCom
          title={LANG[language].contact_header}
          rightIcon={null}
          leftIcon={
            <HeaderBtn
              clickFn={() => this.goback()}
              iconName="chevron-thin-left"
            />
          }
        />
      </View>
    );
  }
}
