import {actionTypes} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import AppConfig from '../../constants/config';
import Helper from '../../helper/Helper';

function fetchList(page = '', cb = null) {
  return (dispatch) => {
    fetch(AppConfig.HOST + '/list/' + page)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.products)
        if (cb) cb(false);
        dispatch({type: actionTypes.FETCH_LIST, products: json.products});
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

function fetchListSearch(name = '') {
  return (dispatch) => {
    fetch(AppConfig.HOST + '/list_search/' + name)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.products)
        dispatch({
          type: actionTypes.FETCH_LIST,
          products: json.products,
          search: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

function fetchTopList() {
  return (dispatch) => {
    Promise.all([
      fetch(AppConfig.HOST + '/list/0').then((response) => response.json()),
      fetch(AppConfig.HOST + '/list/1').then((response) => response.json()),
      fetch(AppConfig.HOST + '/list/2').then((response) => response.json()),
    ])
      .then((json) => {
        const topList = [
          {
            title: 'Bán nhiều nhất',
            data: json[0]['products'],
          },
          {
            title: 'Mới nhất',
            data: json[1]['products'],
          },
          {
            title: 'Được yêu thích nhất',
            data: json[2]['products'],
          },
        ];
        dispatch({type: actionTypes.FETCH_TOP_LIST, topList});
      })
      .catch((err) => console.log(err));
  };
}

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

function calculateAmountQuantity(list) {
  // calculate amount
  let amount = 0,
    quantity = 0;

  if (list.length > 0) {
    amount = list
      .map((item) => {
        return item.price * item.quantity;
      })
      .reduce((sum, val) => sum + val);

    // format amount
    amount = Helper.formatMoney(amount);

    // calculate quantity of item in cart
    quantity = list
      .map((item) => item.quantity)
      .reduce((sum, val) => sum + val);
  }

  return {amount, quantity};
}

function fetchCart() {
  return async (dispatch) => {
    // get list from cart in strorage
    const cart = await getCart();
    if (cart === null || cart === undefined) {
      storeCart({list: [], quantity: 0, amount: 0});
      dispatch({
        type: actionTypes.FETCH_CART,
        cart: {list: [], quantity: 0, amount: 0},
      });
    } else {
      const {list, quantity, amount} = cart;
      dispatch({
        type: actionTypes.FETCH_CART,
        cart: {list, quantity, amount},
      });
    }
  };
}

function putCart(list) {
  return (dispatch) => {
    // calculate amount and quantity
    const {amount, quantity} = calculateAmountQuantity(list);
    storeCart({list, quantity, amount});
    dispatch({type: actionTypes.PUT_CART, cart: {list, quantity, amount}});
  };
}

function deleteItemCart(id) {
  return async (dispatch) => {
    let {list} = await getCart();

    // find item to delete
    let index = 0;
    list.forEach((item, idx) => {
      if (item._id === id) {
        index = idx;
        return false;
      }
    });

    // delete item
    list.splice(index, 1);

    if (list.length > 0) {
      //console.log('list > 0');
      // calculate amount and quantity
      const {amount, quantity} = calculateAmountQuantity(list);
      storeCart({list, quantity, amount});
      dispatch({type: actionTypes.PUT_CART, cart: {list, quantity, amount}});
    } else {
      //console.log('list = 0');
      storeCart({list: [], quantity: 0, amount: 0});
      dispatch({
        type: actionTypes.PUT_CART,
        cart: {list: [], quantity: 0, amount: 0},
      });
    }
  };
}

function putQuantityItemCart(id, newQuantity) {
  return async (dispatch) => {
    let {list} = await getCart();

    // find item to update quantity
    list.forEach((item) => {
      if (item._id === id) {
        item.quantity = newQuantity;
        return false;
      }
    });
    // calculate amount and quantity
    const {amount, quantity} = calculateAmountQuantity(list);
    storeCart({list, quantity, amount});
    dispatch({type: actionTypes.PUT_CART, cart: {list, quantity, amount}});
  };
}

function fetchLogin() {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('@token_key');
    //return jsonString !== null ? JSON.parse(jsonString) : null;
    dispatch({type: actionTypes.PUT_LOGIN, token});
  };
}

function putLogin(username, password) {
  return async (dispatch) => {
    if (username === 'root' && password === 'root') {
      token = 'JSON WEB TOKEN';
      //const jsonValue = JSON.stringify(token);
      await AsyncStorage.setItem('@token_key', token);
      dispatch({type: actionTypes.PUT_LOGIN, token});
    }
  };
}

function putLogout() {
  return async (dispatch) => {
    token = '';
    //const jsonValue = JSON.stringify(token);
    await AsyncStorage.setItem('@token_key', token);
    dispatch({type: actionTypes.PUT_LOGOUT, token});
  };
}

export const actionCreators = {
  fetchList,
  fetchTopList,
  fetchListSearch,
  fetchCart,
  putCart,
  deleteItemCart,
  putQuantityItemCart,
  fetchLogin,
  putLogin,
  putLogout,
};
