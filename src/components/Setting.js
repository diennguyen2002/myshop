import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import HeaderCom from './HeaderCom'
import HomeBtn from './HomeBtn'

const list = [
  {
    title: 'Ngôn ngữ',
    icon: 'language',
  },
  {
    title: 'Liên hệ',
    icon: 'contacts',
  },
  {
    title: 'Giới thiệu',
    icon: 'copyright',
  },
];
export default class Setting extends Component {
  render() {
    return (
      <>
        <HeaderCom 
          title='Giỏ hàng'
          com={<HomeBtn />}
        />
        <View style={styles.wrapper}>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              bottomDivider
              chevron
            />
          ))}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
