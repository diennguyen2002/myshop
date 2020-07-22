import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';

export default class Setting extends Component {
  gotoLanguage(){
    const {navigation} = this.props
    navigation.navigate('Language')
  }
  gotoContact(){
    const {navigation} = this.props
    navigation.navigate('Contact')
  }
  gotoAbout(){
    const {navigation} = this.props
    navigation.navigate('About')
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={()=>this.gotoLanguage()}>
          <ListItem
            key={1}
            title='Ngôn ngữ'
            leftIcon={{name: 'language'}}
            bottomDivider
            chevron
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.gotoContact()}>
          <ListItem
            key={2}
            title='Liên hệ'
            leftIcon={{name: 'contacts'}}
            bottomDivider
            chevron
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.gotoAbout()}>
          <ListItem
            key={3}
            title='Giới thiệu'
            leftIcon={{name: 'copyright'}}
            bottomDivider
            chevron
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
