import React, {Component} from 'react';
import BottomTabBar from './BottomTabBar';
import {connect} from 'react-redux'
import {actionCreators} from '../redux/actions/actionCreators'

class Main extends Component {
  componentDidMount(){
    this.props.fetchLanguage()
    this.props.fetchLogin()
    this.props.fetchCart()
  } 
  render() {
    return <BottomTabBar navigation={this.props.navigation} />;
  }
}

const mapStateToProps = function(state){
  return {cart: state.cart, language: state.language}
}
export default connect(mapStateToProps, actionCreators)(Main)
