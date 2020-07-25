import React, {Component} from 'react';
import {View, Picker, StyleSheet} from 'react-native';
import HeaderCom from './HeaderCom';
import HeaderBtn from './HeaderBtn';
import {connect} from 'react-redux';
import {actionCreators} from '../redux/actions/actionCreators';
import LANG from '../language/language';

class Language extends Component {
  state = {
    selectedValue: this.props.language,
  };
  goback() {
    const {navigation} = this.props;
    navigation.navigate('Main');
  }
  render() {
    return (
      <>
        <HeaderCom
          title={LANG[this.props.language].language_header}
          rightIcon={null}
          leftIcon={
            <HeaderBtn
              clickFn={() => this.goback()}
              iconName="chevron-thin-left"
            />
          }
        />
        <View style={styles.wrapper}>
          <Picker
            style={styles.langPicker}
            selectedValue={this.state.selectedValue}
            onValueChange={(itemValue) => {
              this.setState({selectedValue: itemValue});
              this.props.putLanguage(itemValue)
              this.props.fetchTopList();
            }}>
            <Picker.Item label="Tiếng Việt" value="vietnamese" />
            <Picker.Item label="English" value="english" />
          </Picker>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
  langPicker: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#3498db',
    fontSize: 20,
    color: '#3498db',
    borderColor: '#3498db',
    borderRadius: 10,
  },
});

const mapStateToProps = function (state) {
  return {language: state.language};
};
export default connect(mapStateToProps, actionCreators)(Language);
