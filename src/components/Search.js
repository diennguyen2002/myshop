import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {connect} from 'react-redux'
import { actionCreators } from '../redux/actions/actionCreators';
import LANG from '../language/language';

const language = 'english'
class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  clickSearch = () => {
    //console.log(this.state.search);
    this.props.fetchListSearch(this.state.search)
  }

  render() {
    return (
      <>
        <SearchBar
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          lightTheme={true}
          placeholder={LANG[language].product_search_placeholder}
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <View style={styles.containerSearchBtn}>
          <TouchableOpacity
            style={styles.buttonSearch}
            onPress={this.clickSearch}>
            <Text style={styles.textSearch}>{LANG[language].product_search_btn}</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 5,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  inputContainerStyle: {
    backgroundColor: 'white',
  },
  containerSearchBtn: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10,
    marginTop: 7,
    width: '100%',
    height: 40,
    borderRadius: 10,
  },
  textSearch: {
    color: 'white',
    fontSize: 20,
  },
});

export default connect(null, actionCreators)(Search)