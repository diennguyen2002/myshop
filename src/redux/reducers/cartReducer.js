const cartDefault = {list: [], quantity: 0, amount: 0}

function cartReducer(state = cartDefault, action){
    if(action.type === 'FETCH_CART' || action.type === 'PUT_CART'){
        // console.log(action.type)
        // console.log(action.cart)
        return action.cart
    }
    return state;
}

export default cartReducer;