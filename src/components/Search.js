import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

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
          lightTheme={true}
          placeholder="Bạn muốn mua gì?"
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style={styles.containerSearchBtn}>
          <TouchableOpacity
            style={styles.buttonSearch}
            onPress={() => console.log(this.state.search)}>
            <Text style={styles.textSearch}>Tìm</Text>
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
    fontSize: 15,
  },
});
