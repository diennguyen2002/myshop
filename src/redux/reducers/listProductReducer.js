function listProductsReducer(state = [], action){
    if(action.type === 'FETCH_LIST') {
        return action.products
    }
    return state;
}

export default listProductsReducer;