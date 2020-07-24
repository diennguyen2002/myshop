import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux'
import { actionCreators } from '../redux/actions/actionCreators';
import LANG from '../language/language';

class Setting extends Component {
  gotoLanguage(){
    const {navigation} = this.props
    navigation.navigate('Language')
  }
  // gotoContact(){
  //   const {navigation} = this.props
  //   navigation.navigate('Contact')
  // }
  gotoAbout(){
    const {navigation} = this.props
    navigation.navigate('About')
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={()=>this.gotoLanguage()}>
          <ListItem
            titleStyle={styles.titleStyle}
            containerStyle={styles.containerStyle}
            key={1}
            title={LANG[this.props.language].setting_language}
            leftIcon={{name: 'language'}}
            bottomDivider
            chevron
          />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>this.gotoContact()}>
          <ListItem
            key={2}
            title={LANG[this.props.language].setting_contact}
            leftIcon={{name: 'contacts'}}
            bottomDivider
            chevron
          />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>this.gotoAbout()}>
          <ListItem
            titleStyle={styles.titleStyle}
            containerStyle={styles.containerStyle}
            key={3}
            title={LANG[this.props.language].setting_about}
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
  titleStyle:{
    color: '#3498db',
  },
  containerStyle:{
    borderBottomColor: '#3498db'
  }
});


const mapStateToProps = function (state) {
  return {language: state.language};
};

export default connect(mapStateToProps, actionCreators)(Setting)