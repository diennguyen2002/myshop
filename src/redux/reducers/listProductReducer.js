function listProductsReducer(state = [], action){
    if(action.type === 'FETCH_LIST') {
        //console.log(action.products)
        const products = state.concat(action.products) 
        return products
    }
    return state;
}

export default listProductsReducer;