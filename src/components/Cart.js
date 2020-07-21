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

const HOST = 'http://192.168.1.105:3000';

const NumberCom = () => {
  const [value, setValue] = useState(1);
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
            uri: HOST + '/' + item.img,
          }}
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.desName}>{item.name}</Text>
        <Text style={styles.desPrice}>{price}</Text>
        <View style={styles.quantityContainer}>
          <NumberCom />
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
    this.state = {cart: []};
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
    //console.log(cartStorage);
    this.setState({cart: cartStorage});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cartListContainer}>
          <View>
            <FlatList
              data={this.state.cart}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View>
            <Text style={styles.amountText}>Thành tiền: 00.000.000 đ</Text>
          </View>
        </View>
        <View style={styles.amountContainer}>
          <TouchableOpacity
            style={styles.paymentBtn}
            onPress={() => console.log('thanh toan')}>
            <Text style={styles.paymentText}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    //marginBottom: 10,
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
