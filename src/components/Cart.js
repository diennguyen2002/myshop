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
import AppConfig from '../constants/config';
import {connect} from 'react-redux'
import {actionCreators} from '../redux/actions/actionCreators';
import Helper from '../helper/Helper'

const NumberCom = ({quantity, updateQuantityItem, id}) => {
  const [qty, setQuantity] = useState(quantity);
  return (
    <NumericInput
      value={qty}
      onChange={(qty) => {
        setQuantity(qty)
        updateQuantityItem(id, qty)
      }}
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

const Item = ({item, removeItem, updateQuantityItem}) => {
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
        <View style={styles.quantityContainer}>
          <NumberCom quantity={item.quantity} updateQuantityItem={updateQuantityItem} id={item._id} />
          <TouchableOpacity
            style={styles.delete}
            onPress={() => removeItem(item._id)}>
            <Text>
              <Icon name="delete" size={23} color="#3498db" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

class Cart extends Component {

  updateQuantityItem = (id, newQuantity) => {
    this.props.putQuantityItemCart(id, newQuantity)
  }

  removeItem = (id) => {
    //console.log('Cart: '+ id)
    this.props.deleteItemCart(id)
  }

  renderItem = ({item}) => {
    return <Item item={item} removeItem={this.removeItem} updateQuantityItem={this.updateQuantityItem} />;
  };

  render() {
    return (
      <View style={styles.container}>
        { this.props.cart.quantity == 0 ? (
          <Text style={styles.notSeclectItemText}>Bạn chưa chọn sản phẩm nào</Text>
        ) : null}
        <View style={styles.cartListContainer}>
          <View>
            <FlatList
              data={ this.props.cart.list}
              renderItem={this.renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
          { this.props.cart.quantity > 0 ? (
            <View>
              <Text style={styles.amountText}>Thành tiền: { this.props.cart.amount}</Text>
            </View>
          ) : null}
        </View>
        { this.props.cart.quantity > 0 ? (
          <View style={styles.amountContainer}>
            <TouchableOpacity
              style={styles.paymentBtn}
              onPress={() => alert('Chức năng này chưa hoàn thành')}>
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

const mapStateToProps = function(state){
  return {cart: state.cart}
}

export default connect(mapStateToProps, actionCreators)(Cart)