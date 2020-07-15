import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
    return (
      <>
        <SearchBar
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          placeholder="Bạn muốn mua gì?"
          onChangeText={this.updateSearch}
          value={search}
        />
        <TouchableOpacity style={styles.buttonSearch} onPress={() => console.log(this.state.search)}>
          <Text style={styles.textSearch}>Tìm</Text>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
  },
  inputContainerStyle: {
    backgroundColor: 'white',
  },
  buttonSearch:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 5,
    marginTop: 5,
    width: 50,
    borderRadius:5,
  },
  textSearch:{
    color: 'white',
    fontSize: 15
  }
});
