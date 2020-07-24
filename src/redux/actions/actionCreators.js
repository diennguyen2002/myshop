import {actionTypes} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import AppConfig from '../../constants/config';
import Helper from '../../helper/Helper';
import LANG from '../../language/language';

const language = 'english';

function fetchList(page = '') {
  return (dispatch) => {
    dispatch({type: actionTypes.PUT_LOADING, isLoading: true});
    fetch(AppConfig.HOST + '/list/' + page)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.products)
        //if (cb) cb(false);
        dispatch({type: actionTypes.FETCH_LIST, products: json.products});
        dispatch({type: actionTypes.PUT_LOADING, isLoading: false});
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

function fetchListSearch(name = '') {
  return (dispatch) => {
    dispatch({type: actionTypes.PUT_LOADING, isLoading: true});
    fetch(AppConfig.HOST + '/list_search/' + name)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.products)
        dispatch({
          type: actionTypes.FETCH_LIST,
          products: json.products,
          search: true,
        });
        dispatch({type: actionTypes.PUT_LOADING, isLoading: false});
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

function fetchTopList() {
  return (dispatch) => {
    dispatch({type: actionTypes.PUT_LOADING, isLoading: true});
    Promise.all([
      fetch(AppConfig.HOST + '/list/0').then((response) => response.json()),
      fetch(AppConfig.HOST + '/list/1').then((response) => response.json()),
      fetch(AppConfig.HOST + '/list/2').then((response) => response.json()),
    ])
      .then((json) => {
        const topList = [
          {
            title: LANG[language].home_top_best_seller,
            data: json[0]['products'],
          },
          {
            title: LANG[language].home_top_newest,
            data: json[1]['products'],
          },
          {
            title: LANG[language].home_top_love,
            data: json[2]['products'],
          },
        ];
        dispatch({type: actionTypes.FETCH_TOP_LIST, topList});
        dispatch({type: actionTypes.PUT_LOADING, isLoading: false});
      })
      .catch((err) => console.log(err));
  };
}

store_key = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

get_key = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
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
    const cart = await get_key('@cart_key');
    if (cart === null || cart === undefined) {
      store_key('@cart_key', {list: [], quantity: 0, amount: 0});
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
    store_key('@cart_key', {list, quantity, amount});
    dispatch({type: actionTypes.PUT_CART, cart: {list, quantity, amount}});
  };
}

function deleteItemCart(id) {
  return async (dispatch) => {
    let {list} = await get_key('@cart_key');

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
      store_key('@cart_key', {list, quantity, amount});
      dispatch({type: actionTypes.PUT_CART, cart: {list, quantity, amount}});
    } else {
      //console.log('list = 0');
      store_key('@cart_key', {list: [], quantity: 0, amount: 0});
      dispatch({
        type: actionTypes.PUT_CART,
        cart: {list: [], quantity: 0, amount: 0},
      });
    }
  };
}

function putQuantityItemCart(id, newQuantity) {
  return async (dispatch) => {
    let {list} = await get_key('@cart_key');

    // find item to update quantity
    list.forEach((item) => {
      if (item._id === id) {
        item.quantity = newQuantity;
        return false;
      }
    });
    // calculate amount and quantity
    const {amount, quantity} = calculateAmountQuantity(list);
    store_key('@cart_key', {list, quantity, amount});
    dispatch({type: actionTypes.PUT_CART, cart: {list, quantity, amount}});
  };
}

function fetchLogin() {
  return async (dispatch) => {
    let token = await get_key('@token_key');
    token = token ? token : '';
    dispatch({type: actionTypes.PUT_LOGIN, token});
  };
}

function putLogin(username, password) {
  return async (dispatch) => {
    if (username === 'root' && password === 'root') {
      const token = {token: 'JSON WEB TOKEN'};
      store_key('@token_key', token);
      dispatch({type: actionTypes.PUT_LOGIN, token});
    }
  };
}

function putLogout() {
  return async (dispatch) => {
    const token = '';
    store_key('@token_key', token);
    dispatch({type: actionTypes.PUT_LOGOUT, token});
  };
}

function fetchLanguage() {
  return async (dispatch) => {
    let language = await get_key('@lang_key');
    console.log('fetch Lang')
    console.log(language)
    language = language  ? language : 'vietnamese';
    dispatch({type: actionTypes.FETCH_LANGUAGE, language});
  };
}

function putLanguage(language) {
  return async (dispatch) => {
    store_key('@lang_key', language);
    dispatch({type: actionTypes.PUT_LANGUAGE, language});
  };
}

export const actionCreators = {
  fetchList,
  fetchTopList,
  fetchListSearch,
  fetchCart,
  fetchLogin,
  fetchLanguage,
  putCart,
  putQuantityItemCart,
  putLogin,
  putLogout,
  deleteItemCart,
  putLanguage,
};
