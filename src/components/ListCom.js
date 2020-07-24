import React, {Component} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {actionCreators} from '../redux/actions/actionCreators';
import AppConfig from '../constants/config';
import Helper from '../helper/Helper';
import LANG from '../language/language';

const language = 'english'

const Item = ({item, addCart}) => {
  return (
    <View style={styles.item}>
      <View style={styles.image}>
        <Image
          style={styles.imgStretch}
          source={{
            uri: AppConfig.HOST + '/' + item.img,
          }}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.desName}>{item.name}</Text>
        <Text style={styles.desPrice}>{Helper.formatMoney(item.price)}</Text>
        <TouchableOpacity style={styles.cartBtn} onPress={() => addCart(item)}>
          <Text style={styles.cartText}>{LANG[language].product_select_btn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

class ListCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isRefreshing: false,
      page: 1,
    };
  }

  addCart = (value) => {
    try {
      const cart = this.props.cart.list;
      if (cart.length === 0) {
        // cart is empty
        cart.push(value);
      } else {
        // cart has items
        let exitst = false; // flag for checking item exist or not
        cart.forEach((el) => {
          if (value._id === el._id) {
            exitst = true;
            el.quantity += 1; // if exist, then increase quantity
            return false;
          }
        });

        if (!exitst) {
          // if not exist, then add new
          cart.push(value);
        }
      }
      this.props.putCart(cart);
      alert(LANG[language].product_add_cart_alert);
    } catch (e) {
      console.log(e);
    }
  };

  renderItem = ({item}) => {
    return <Item item={item} addCart={this.addCart} />;
  };

  loadMore = () => {
    this.setState({page: this.state.page + 1});
    this.props.fetchList(this.state.page);
  };

  componentDidMount() {
    this.props.fetchList(0);
  }

  render() {
    return (
      <>
        <FlatList
          data={this.props.products}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.4}
          onEndReached={this.loadMore}
        />
        {this.props.isLoading ? (
          <ActivityIndicator size="large" color="#3498db" />
        ) : null}
      </>
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
  return {
    products: state.products,
    cart: state.cart,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, actionCreators)(ListCom);
