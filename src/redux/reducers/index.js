import {combineReducers} from 'redux';
import listProductsReducer from './listProductReducer';
import listTopReducer from './listTopReducer'
import countCartReducer from './countCartReducer'

const reducers = combineReducers({
    products: listProductsReducer,
    topList: listTopReducer,
    countCart: countCartReducer,
});

export default reducers;
