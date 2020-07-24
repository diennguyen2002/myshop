import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';
import LANG from '../language/language';

const language = 'english'

export default class About extends Component {
  goback() {
    const {navigation} = this.props;
    navigation.navigate('Main');
  }
  render() {
    return (
      <>
        <HeaderCom
          title={LANG[language].about_header}
          rightIcon={null}
          leftIcon={
            <HeaderBtn
              clickFn={() => this.goback()}
              iconName="chevron-thin-left"
            />
          }
        />
        <View style={styles.wrapper}>
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitleText}>{LANG[language].about_title}</Text>
            <Text style={styles.aboutText}>{LANG[language].about_text_app_name}</Text>
            <Text style={styles.aboutText}>{LANG[language].about_student_name}</Text>
            <Text style={styles.aboutText}>{LANG[language].about_student_email}</Text>
            <Text style={styles.aboutText}>{LANG[language].about_student_phone}</Text>
          </View>
          <TouchableOpacity onPress={()=>this.goback()} style={styles.btnContainer}>
              <Text style={styles.txtBtn}>{LANG[language].about_close_btn}</Text>
            </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 50,
    alignContent: 'center',
    marginHorizontal: 5,
  },
  aboutContainer: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 15
  },
  btnContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#3498db',
    marginHorizontal: 120,
    marginTop: 10,
  },
  txtBtn: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  aboutTitleText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10
  },
  aboutText:{
    padding: 10,
    color: '#3498db',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
  }
});
