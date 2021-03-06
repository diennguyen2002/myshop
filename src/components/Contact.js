import React, {Component} from 'react';
import {View} from 'react-native';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';
import {connect} from 'react-redux'
import {actionCreators} from '../redux/actions/actionCreators'
import LANG from '../language/language';

class Contact extends Component {
  goback() {
    const {navigation} = this.props;
    navigation.navigate('Main');
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderCom
          title={LANG[this.props.language].contact_header}
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

const mapStateToProps = function(state){
  return {language: state.language}
}
export default connect(mapStateToProps, actionCreators)(Contact)