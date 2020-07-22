import {actionTypes} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import AppConfig from '../../constants/config';

function fetchList(page = '', cb = null) {
  return (dispatch) => {
    fetch(AppConfig.HOST + '/list/'+page)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.products)
        if(cb) cb(false)
        dispatch({type: actionTypes.FETCH_LIST, products: json.products})
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

function fetchListSearch(name=''){
  return dispatch => {
    fetch(AppConfig.HOST + '/list_search/'+name)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.products)
        dispatch({type: actionTypes.FETCH_LIST, products: json.products, search:true})
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function fetchTopList() {
  return dispatch => {
    Promise.all([
      fetch(AppConfig.HOST + '/list/0').then(response=>response.json()),
      fetch(AppConfig.HOST + '/list/1').then(response=>response.json()),
      fetch(AppConfig.HOST + '/list/2').then(response=>response.json()),
    ])
    .then(json=>{
      //console.log(json[0]['products'])
      const topList = [
        {
          title: 'Bán nhiều nhất',
          data: json[0]['products']
        },
        {
          title: 'Mới nhất',
          data: json[1]['products']
        },
        {
          title: 'Được yêu thích nhất',
          data: json[2]['products']
        }
      ]  
      dispatch({type: actionTypes.FETCH_TOP_LIST, topList})
    })
    .catch(err=>console.log(err))
  }
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

function putCountCart(){
  return async dispatch => {
    const cart = await getCart()
    //console.log('cart putCountCart')
    //console.log(cart)
    const countCart = cart.map(el => el.quantity)
                          .reduce(((sum, val)=>sum + val))
    //console.log(countCart)
    dispatch({type: actionTypes.PUT_COUNT_CART, countCart}) 
  }
  
}

export const actionCreators = {
  fetchList,
  fetchTopList,
  fetchListSearch,
  putCountCart
};
