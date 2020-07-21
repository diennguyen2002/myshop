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

function fetchTopList() {
  return dispatch => {
    Promise.all([
      fetch(HOST + '/list/0').then(response=>response.json()),
      fetch(HOST + '/list/1').then(response=>response.json()),
      fetch(HOST + '/list/2').then(response=>response.json()),
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

export const actionCreators = {
  fetchList,
  fetchTopList
};
