import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import HomeSectionList from './HomeSectionList';
import SwiperCom from './SwiperCom';
import {connect} from 'react-redux'
import { actionCreators } from '../redux/actions/actionCreators';

class Home extends Component {
  componentDidMount(){
    this.props.fetchTopList()
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.headerSection}>
          <SwiperCom />
        </View>
        <View style={styles.bodySection}>
          <HomeSectionList data={this.props.topList} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerSection: {
    flex: 2.5,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: '#3498db',
  },
  bodySection: {
    flex: 7.5,
  },
});

const mapStateToProp = (state) => {
  return {topList: state.topList}
}

export default connect(mapStateToProp, actionCreators)(Home)