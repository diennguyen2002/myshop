import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Search from './Search';
import ListCom from './ListCom';
import { connect } from 'react-redux';
import { actionCreators } from '../redux/actions/actionCreators';

const HOST = 'http://192.168.1.105:3000'
class Listproduct extends Component {
  componentDidMount(){
    this.props.fetchList()
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <Search />
        </View>
        <View style={styles.bodyContainer}>
          <ListCom data={this.props.products}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  searchContainer: {
    flex: 2,
  },
  bodyContainer: {
    flex: 8,
    marginTop: 10,
  },
});

const mapStateToProps = function(state){
  return {products: state.products}
}

export default connect(mapStateToProps, actionCreators)(Listproduct)
