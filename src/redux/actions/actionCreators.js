import {actionTypes} from './actionTypes';

const HOST = 'http://192.168.1.105:3000'

function fetchList(page = '', cb = null) {
  return (dispatch) => {
    fetch(HOST + '/list/'+page)
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

function fetchListSearch(txtSearch) {
  return dispatch => {
    
  }
}

export const actionCreators = {
  fetchList,
};
