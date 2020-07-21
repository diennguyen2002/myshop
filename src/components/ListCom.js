import React, {Component} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';
import {actionCreators} from '../redux/actions/actionCreators';

const HOST = 'http://192.168.1.105:3000';

const Item = ({item}) => {
  const price =
    item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ';
  return (
    <View style={styles.item}>
      <View style={styles.image}>
        <Image
          style={styles.imgStretch}
          source={{
            uri: HOST + '/' + item.img,
          }}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.desName}>{item.name}</Text>
        <Text style={styles.desPrice}>{price}</Text>
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => console.log('Da them')}>
          <Text style={styles.cartText}>Chọn mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

class ListCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      page: 1,
    };
  }
  renderItem = ({item}) => {
    return <Item item={item} />;
  };

  loadMore = () => {
    console.log('load more', this.state.page);
    this.setState({isRefreshing: true, page: this.state.page + 1});
    //console.log(this.state.page);
    this.props.fetchList(this.state.page, (st) =>
      this.setState({isRefreshing: st}),
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              //onRefresh={this.onPullRefresh}
            />
          }
          onEndReachedThreshold={0.4}
          onEndReached={this.loadMore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#3498db',
    height: 150,
  },
  image: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  imgStretch: {
    width: 70,
    height: 90,
  },
  description: {
    flex: 7,
    justifyContent: 'center',
    height: 120,
  },
  desName: {
    fontSize: 18,
  },
  desPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  cartBtn: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
    width: 100,
  },
  cartText: {
    fontSize: 15,
    color: 'white',
  },
});

const mapStateToProps = function (state) {
  return {products: state.products};
};

export default connect(null, actionCreators)(ListCom);
