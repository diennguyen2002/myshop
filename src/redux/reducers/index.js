import {combineReducers} from 'redux';
import listProductsReducer from './listProductReducer';
import listTopReducer from './listTopReducer'

const reducers = combineReducers({
    products: listProductsReducer,
    topList: listTopReducer
});

export default reducers;
