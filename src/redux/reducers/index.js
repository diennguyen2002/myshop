import {combineReducers} from 'redux';
import listProductsReducer from './listProductReducer';

const reducers = combineReducers({
    products: listProductsReducer,
});

export default reducers;
