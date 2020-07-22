function listProductsReducer(state = [], action){
    if(action.type === 'FETCH_LIST') {
        if(action.search) {
            return action.products
        } else {
            const products = state.concat(action.products) 
            return products
        }
    }
    return state;
}

export default listProductsReducer;