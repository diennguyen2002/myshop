import {combineReducers} from 'redux';
import listProductsReducer from './listProductReducer';
import listTopReducer from './listTopReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({
  products: listProductsReducer,
  topList: listTopReducer,
  cart: cartReducer,
});

export default reducers;
