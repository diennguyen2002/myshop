import {combineReducers} from 'redux';
import listProductsReducer from './listProductReducer';
import listTopReducer from './listTopReducer';
import cartReducer from './cartReducer';
import loginReducer from './loginReducer';
import loadingReducer from './loadingReducer'

const reducers = combineReducers({
  products: listProductsReducer,
  topList: listTopReducer,
  cart: cartReducer,
  token: loginReducer,
  isLoading: loadingReducer,
});

export default reducers;
