
function countCartReducer(state = '', action){
    if(action.type === 'PUT_COUNT_CART') {
        return action.countCart 
    }
    return state;
}

export default countCartReducer;