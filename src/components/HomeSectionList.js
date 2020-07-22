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
import AsyncStorage from '@react-native-community/async-storage';

const HOST = 'https://server-salephone-app.herokuapp.com';

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
          onPress={() => addCart(item)}>
          <Text style={styles.cartText}>Chọn mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

class HomeSectionList extends Component {
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
      //console.log('cart hien tai')
      //console.log(cart)
      if(cart.length === 0){
        cart.push(value)
        //console.log('cart them moi')
        //console.log(cart)
        await this.storeCart(cart)
      } else {
        let exitst = false
        cart.forEach((el) => {
          if(value._id === el._id){
            exitst = true
            el.quantity +=1
            //console.log('cart them sl')
            return false
          }
        })

        if(!exitst){
          //console.log('cart them moi')
          cart.push(value)
        }
        
        //console.log(cart)
        await this.storeCart(cart)
      }

      this.props.putCountCart()
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
    backgroundColor: '#fff',
  },
});

const mapStateToProps = function(state){
  return {topList: state.topList}
}

export default connect(mapStateToProps, actionCreators)(HomeSectionList)
