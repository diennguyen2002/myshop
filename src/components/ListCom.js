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
import AsyncStorage from '@react-native-community/async-storage';

const HOST = 'http://192.168.1.105:3000';

const Item = ({item, addCart}) => {
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
          onPress={()=>addCart(item)}>
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

  storeCart = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@cart_key', jsonValue)
    } catch (e) {
      console.log(e)
    }
  }

  getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart_key')
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(e)
    }
  }

  addCart = async (value) => {
    try {
      const cart = await this.getCart()
      console.log('cart hien tai')
      console.log(cart)
      if(cart.length === 0){
        cart.push(value)
        console.log('cart them moi')
        console.log(cart)
        await this.storeCart(cart)
      } else {
        let exitst = false
        cart.forEach((el) => {
          if(value._id === el._id){
            exitst = true
            el.quantity +=1
            console.log('cart them sl')
            return false
          }
        })
        
        if(!exitst){
          console.log('cart them moi')
          cart.push(value)
        }
        
        console.log(cart)
        await this.storeCart(cart)
      }

      this.props.putCountCart()
    } catch (e) {
      console.log(e)
    }
  }
  renderItem = ({item}) => {
    return <Item item={item} addCart={this.addCart} />;
  };

  loadMore = () => {
    //console.log('load more', this.state.page);
    this.setState({isRefreshing: true, page: this.state.page + 1});
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
