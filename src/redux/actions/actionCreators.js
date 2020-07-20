import {actionTypes} from './actionTypes';

const HOST = 'http://192.168.1.105:3000'

function fetchList(page = '') {
  return (dispatch) => {
    fetch(HOST + '/list/'+page)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.products)
        dispatch({type: actionTypes.FETCH_LIST, products: json.products})
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export const actionCreators = {
  fetchList,
};
