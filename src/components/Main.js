import React, {Component} from 'react';
import BottomTabBar from './BottomTabBar';

export default class Main extends Component {
  render() {
    return <BottomTabBar navigation={this.props.navigation} />;
  }
}
