import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {actionCreators} from '../redux/actions/actionCreators';
import AppConfig from '../constants/config';
import Helper from '../helper/Helper'

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
        <TouchableOpacity
          style={styles.cartBtn}
          onPress={() => addCart(item)}>
          <Text style={styles.cartText}>Chọn mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

class HomeSectionList extends Component {

  addCart = (value) => {
    try {
      const cart = this.props.cart.list
      if(cart.length === 0){ // cart is empty
        cart.push(value)
      } else { // cart has items
        let exitst = false // flag for checking item exist or not
        cart.forEach((el) => {
          if(value._id === el._id){
            exitst = true
            el.quantity +=1 // if exist, then increase quantity
            return false
          }
        })

        if(!exitst){ // if not exist, then add new
          cart.push(value)
        }

      }
      this.props.putCart(cart)
      alert('Đã thêm vào giỏ hàng')
    } catch (e) {
      console.log(e)
    }
  }

  render(){
    return (
      <SectionList
        sections={this.props.topList}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item item={item} addCart={this.addCart}  />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
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
    width: 95,
  },
  cartText: {
    fontSize: 15,
    color: 'white',
  },
  header: {
    fontSize: 25,
    color: '#3498db',
    backgroundColor: '#F2F2F2',
  },
});

const mapStateToProps = function(state){
  return {topList: state.topList, cart: state.cart}
}

export default connect(mapStateToProps, actionCreators)(HomeSectionList)
