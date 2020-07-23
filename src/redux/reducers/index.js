import {combineReducers} from 'redux';
import listProductsReducer from './listProductReducer';
import listTopReducer from './listTopReducer';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';

const reducers = combineReducers({
  products: listProductsReducer,
  topList: listTopReducer,
  cart: cartReducer,
  token: loginReducer
});

export default reducers;
