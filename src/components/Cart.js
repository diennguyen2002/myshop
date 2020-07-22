import React, {Component, useState} from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import AppConfig from '../constants/config';

const NumberCom = ({quantity}) => {
  const [value, setValue] = useState(quantity);
  return (
    <NumericInput
      value={value}
      onChange={(value) => setValue(value)}
      editable={false}
      minValue={1}
      maxValue={5}
      totalWidth={100}
      totalHeight={40}
      step={1}
      valueType="integer"
      rounded
      iconStyle={{color: '#3498db'}}
    />
  );
};

const Item = ({item}) => {
  const price =
    item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ';
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
        <Text style={styles.desPrice}>{price}</Text>
        <View style={styles.quantityContainer}>
          <NumberCom quantity={item.quantity} />
          <TouchableOpacity
            style={styles.delete}
            onPress={() => console.log('deleted')}>
            <Text>
              <Icon name="delete" size={23} color="#3498db" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      amount: 0,
    };
  }

  renderItem = ({item}) => {
    return <Item item={item} />;
  };

  storeCart = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@cart_key', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@cart_key');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    const cartStorage = await this.getCart();
    //console.log('get Cart');
    //console.log(cartStorage);
    const amount = cartStorage
      .map((item) => {
        return item.price * item.quantity;
      })
      .reduce((sum, val) => sum + val);

    //console.log(cartStorage);
    this.setState({cart: cartStorage, amount});
  }

  render() {
    const amount =
      this.state.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +
      'đ';
    return (
      <View style={styles.container}>
        {this.state.cart.length == 0 ? (
          <Text style={styles.notSeclectItemText}>Bạn chưa chọn sản phẩm nào</Text>
        ) : null}
        <View style={styles.cartListContainer}>
          <View>
            <FlatList
              data={this.state.cart}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          {this.state.cart.length > 0 ? (
            <View>
              <Text style={styles.amountText}>Thành tiền: {amount}</Text>
            </View>
          ) : null}
        </View>
        {this.state.cart.length > 0 ? (
          <View style={styles.amountContainer}>
            <TouchableOpacity
              style={styles.paymentBtn}
              onPress={() => console.log('thanh toan')}>
              <Text style={styles.paymentText}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notSeclectItemText: {
    textAlign:'center', 
    fontSize: 20, 
    color:'#3498db'
  },
  cartListContainer: {
    flex: 8,
  },
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
  amountContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    marginHorizontal: 5,
  },
  amountText: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paymentBtn: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 10,
    marginBottom: 5,
    height: 45,
  },
  paymentText: {
    fontSize: 20,
    color: 'white',
  },
  quantityContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  delete: {
    marginTop: 18,
    marginLeft: 20,
  },
});
