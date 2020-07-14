import {combineReducers} from 'redux';
import listProductsReducer from './listProductReducer';

const reducers = combineReducers({
    listProducts: listProductsReducer,
});

export default reducers;
