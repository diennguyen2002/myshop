function loadingReducer(state = false, action){
    if(action.type === 'PUT_LOADING'){
        return action.isLoading
    }
    return state;
}

export default loadingReducer;